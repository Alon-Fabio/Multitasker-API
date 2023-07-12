const cloudinary = require("cloudinary").v2;
const { CLOUDINARY_SECRET, CLOUDINARY_PUBLIC } = require("../secret");

const isDev = false;
// Main Functions:

// getImages:
// Query's the DB ("images" table).
// >> Array[{
// id: 1,
// version: 'number'
// width: 10269,
// height: 10263,
// secure_url:"https://res.cloudinary.com/alonfabio/image/upload/v1669621587/graphics/Ellas_father-01-min_kqedjc.png",
// img_format: "png",
// folder: "graphics"
// ,created_at: "2022-11-28T07:46:27+00:00"
// },
// {}]

// Or
// >> .catch((err) => res.status(500).json("DB has failed."))
// ----------------------------------------------------------------------------------------------------------------------------------------
// updateImages:
// > Fetch data from cloudinary.
// > Delete old data.
// > Save new data.
// > Sand what was saved.

// >> {
// URLStart: "https://res.cloudinary.com",
// owner: "alonfabio",
// type: "image",
// action: "upload",
// images : [{
// id: 1,
// width: 10269,
// height: 10263,
// secure_url:"https://res.cloudinary.com/alonfabio/image/upload/v1669621587/graphics/Ellas_father-01-min_kqedjc.png",
// img_format: "png",
// folder: "graphics"
// ,created_at: "2022-11-28T07:46:27+00:00"
// },
// {}]}

// Or
// >> .catch((err) => res.status(500).json("DB has failed."))
// ----------------------------------------------------------------------------------------------------------------------------------------
// uploadImages: NOT-WRITTEN
// POST data to cloudinary.
// Update DB.
// Respond with new data.
// ----------------------------------------------------------------------------------------------------------------------------------------

cloudinary.config({
  cloud_name: "alonfabio",
  api_key: `${CLOUDINARY_PUBLIC}`,
  api_secret: `${CLOUDINARY_SECRET}`,
  secure: true,
});

let galleyErrorObject = {
  isError: false,
  errorLocation: "",
  errorMessage: "Sorry, we are having a problem.. Please try again later.",
  errorCode: 500,
};

// Checking the received folder name.
// Updating error OBJ accordingly.

const checkFolder = (folderName, existingNames, checkLocation) => {
  if (!existingNames.includes(folderName)) {
    galleyErrorObject.isError = true;
    galleyErrorObject.errorCode = 404;
    galleyErrorObject.errorLocation = isDev
      ? checkLocation
      : galleyErrorObject.errorLocation;
    galleyErrorObject.errorMessage = isDev
      ? `No gallery with the name ${folderName}`
      : galleyErrorObject.errorMessage;
  }
};

// Returns an OBJ with a list of URLs (OBJ.images).
// Needs: a folder name ("graphics", "photos").

const getImages = (req, res, db) => {
  const { folder } = req.params; // folder = "photos" or "graphics".

  const GALLERY_NAMES = ["photos", "graphics"];

  // Checking folder name
  checkFolder(folder, GALLERY_NAMES, "getImages");
  if (galleyErrorObject.isError)
    return res
      .status(galleyErrorObject.errorCode)
      .json({ error: { message: galleyErrorObject.errorMessage } });

  db("images")
    .select("*")
    .where({ folder })
    .then((response) => {
      // Checking for an empty Array or uncaught error.
      if (response.length <= 0 && response.severity !== "ERROR") {
        // console.log("Then response.severity", response.severity);
        galleyErrorObject.isError = true;
        galleyErrorObject.errorCode = 404;
        galleyErrorObject.errorLocation = isDev
          ? "getImages, fetching images from db."
          : galleyErrorObject.errorLocation;
        galleyErrorObject.errorMessage = isDev
          ? "Received empty array from db"
          : galleyErrorObject.errorMessage;

        return res
          .status(galleyErrorObject.errorCode)
          .json({ error: { message: galleyErrorObject.errorMessage } });
      }
      return res.status(200).send({
        URLStart: "https://res.cloudinary.com",
        owner: "alonfabio",
        type: "image",
        action: "upload",
        images: [...response],
      });
    })
    .catch((err) => {
      galleyErrorObject.isError = true;
      galleyErrorObject.errorCode = 404;
      galleyErrorObject.errorLocation = isDev
        ? "getImages, fetching images from db."
        : galleyErrorObject.errorLocation;

      if (isDev) {
        console.log(err, galleyErrorObject.errorLocation);
        return res
          .status(galleyErrorObject.errorCode)
          .json({ error: { message: galleyErrorObject.errorMessage } });
      }
      return res
        .status(galleyErrorObject.errorCode)
        .json({ error: { message: galleyErrorObject.errorMessage } });
    });
};

// ----------------------------------------------------------------------------------------------------------------------------------------

// Returns an OBJ with a list of URLs (OBJ.images).
// Needs: a folder name from the body (CLDFolder = "graphics" || "photos").
// Does: Deletes old gallery.
// Does: Inserts new gallery.

const updateImages = (req, res, db) => {
  const updateImagesFolder = req.body.CLDFolder;
  // console.log(updateImagesFolder, "updateImages");

  const GALLERY_NAMES = ["photos", "graphics"];

  // Checking folder name
  checkFolder(updateImagesFolder, GALLERY_NAMES, "updateImages");
  if (galleyErrorObject.isError)
    return res
      .status(galleyErrorObject.errorCode)
      .json({ error: { message: galleyErrorObject.errorMessage } });

  // Delete all images with the folder name.

  const deleteImages = (folderName) => {
    db("images")
      .where("folder", folderName.toString())
      .del()
      .catch((err) => {
        if (isDev) {
          console.log(
            "delete problem",
            folderName.toString(),
            "<================================="
          );
          // console.error(err);
          return res.status(500).json(err);
        }

        galleyErrorObject.errorLocation = isDev
          ? "deleteImages"
          : galleyErrorObject.errorMessage;
        galleyErrorObject.errorMessage = isDev
          ? err
          : galleyErrorObject.errorMessage;
        galleyErrorObject.isError = true;

        res.status(500).json({ errorMessage: galleyErrorObject.errorMessage });
      });
  };

  // Insert and return all images.

  const handleImages = (imageMap) => {
    db("images")
      .insert(imageMap)
      .returning("*")
      .then((images) => {
        console.log("images inserted to images table.");
        return res.status(200).send({
          URLStart: "https://res.cloudinary.com",
          owner: "alonfabio",
          type: "image",
          action: "upload",
          images: [...images],
        });
      })
      .catch((err) => {
        galleyErrorObject.errorLocation = isDev
          ? "insertImages"
          : galleyErrorObject.errorMessage;
        galleyErrorObject.errorMessage = isDev
          ? err
          : galleyErrorObject.errorMessage;
        galleyErrorObject.isError = true;

        if (isDev) {
          console.log("insert problem <=================================");
          console.error(err);
        }

        return res
          .status(galleyErrorObject.errorCode)
          .json({ errorMessage: galleyErrorObject.errorMessage });
      });
  };
  // Cloudinary Error handling: json res = { "error": { "message": "Resource not found - 5traNge_nam3" } }.
  // Change to CLDResponse.error.message.json() if Error handling is correct.

  cloudinary.search
    .expression(`resource_type:image AND folder:${updateImagesFolder}`)
    .sort_by("public_id", "desc")
    .max_results(200)
    .execute()
    .then((CLDResponse) => {
      if (
        CLDResponse.resources.length <= 0 ||
        CLDResponse.resources[0].folder !== updateImagesFolder
      ) {
        galleyErrorObject.errorMessage = isDev
          ? "Cloudinary fetch CLDResponse fail."
          : CLDResponse;
        galleyErrorObject.errorLocation = isDev
          ? "updateImages, Cloudinary fetch"
          : galleyErrorObject.errorLocation;
        galleyErrorObject.isError = true;

        return res
          .status(galleyErrorObject.errorCode)
          .json({ errorMessage: galleyErrorObject.errorMessage });
      }

      deleteImages(updateImagesFolder);

      const mappedCLDResponse = CLDResponse.resources.map((elem) => {
        return {
          img_format: elem.format,
          name: elem.filename,
          folder: updateImagesFolder,
          width: parseInt(elem.width),
          height: parseInt(elem.height) || 100,
          created_at: elem.created_at,
          version: "v" + elem.version,
        };
      });
      return handleImages(mappedCLDResponse);
    })
    .catch((err) => {
      if (isDev) {
        console.log(
          "Cloudinary fetch problem",
          updateImagesFolder,
          "<================================="
        );
        // console.error(err);
        res.status(500).json(err);
      }

      galleyErrorObject.errorLocation = "Cloudinary fetch";
      galleyErrorObject.errorMessage = err;
      galleyErrorObject.isError = true;
      return res
        .status(galleyErrorObject.errorCode)
        .json({ errorMessage: galleyErrorObject.errorMessage });
    });
};

module.exports = {
  getImages,
  updateImages,
};

// TRY
// Not returning the res.
