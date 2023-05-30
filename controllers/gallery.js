const cloudinary = require("cloudinary").v2;
const { CLOUDINARY_SECRET, CLOUDINARY_PUBLIC } = require("../secret");

const isDev = true;
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

// Fetch example ↓
const fetch_example = {
  total_count: 21,
  time: 279,
  resources: [
    {
      asset_id: "76ee0a2f0b254178c11441ba08b22eab",
      public_id: "graphics/Ellas_father-01-min_kqedjc",
      folder: "graphics",
      filename: "Ellas_father-01-min_kqedjc",
      format: "png",
      version: 1669621587,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:27+00:00",
      uploaded_at: "2022-11-28T07:46:27+00:00",
      bytes: 2826534,
      backup_bytes: 0,
      width: 10269,
      height: 10263,
      aspect_ratio: 1.00058,
      pixels: 105390747,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621587/graphics/Ellas_father-01-min_kqedjc.png",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621587/graphics/Ellas_father-01-min_kqedjc.png",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "ace07eea11681117e2ff0051275b8f09",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "fd3a10d8735e780eea071dc2f3f190e5",
      public_id: "graphics/MexiLOgo-01_uzlmsl",
      folder: "graphics",
      filename: "MexiLOgo-01_uzlmsl",
      format: "png",
      version: 1669621581,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:21+00:00",
      uploaded_at: "2022-11-28T07:46:21+00:00",
      bytes: 1843918,
      backup_bytes: 0,
      width: 4167,
      height: 4167,
      aspect_ratio: 1,
      pixels: 17363889,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621581/graphics/MexiLOgo-01_uzlmsl.png",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621581/graphics/MexiLOgo-01_uzlmsl.png",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "6f3dc40cea2ceb29a680f19f3d9ed2cd",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "96ecee1caeee6d0c9c9159810ae1b663",
      public_id: "graphics/Zeus-K9-2-min_ex57qp",
      folder: "graphics",
      filename: "Zeus-K9-2-min_ex57qp",
      format: "png",
      version: 1669621579,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:19+00:00",
      uploaded_at: "2022-11-28T07:46:19+00:00",
      bytes: 86638,
      backup_bytes: 0,
      width: 1080,
      height: 1080,
      aspect_ratio: 1,
      pixels: 1166500,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621579/graphics/Zeus-K9-2-min_ex57qp.png",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621579/graphics/Zeus-K9-2-min_ex57qp.png",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "934261f5b678fc3dfb2b8eb15b3d3e6f",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "81de298422e1c870027372808715fafe",
      public_id: "graphics/jamie_vardy-01-min_ucjn5i",
      folder: "graphics",
      filename: "jamie_vardy-01-min_ucjn5i",
      format: "png",
      version: 1669621578,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:18+00:00",
      uploaded_at: "2022-11-28T07:46:18+00:00",
      bytes: 110843,
      backup_bytes: 0,
      width: 5333,
      height: 3333,
      aspect_ratio: 1.60006,
      pixels: 17774889,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621578/graphics/jamie_vardy-01-min_ucjn5i.png",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621578/graphics/jamie_vardy-01-min_ucjn5i.png",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "4807a39d11989d904b1f88d36bf30e06",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "740c4cf511c95ea494bd7c4aad9373c4",
      public_id: "graphics/ro_fa-01-min_wh3k40",
      folder: "graphics",
      filename: "ro_fa-01-min_wh3k40",
      format: "jpg",
      version: 1669621578,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:18+00:00",
      uploaded_at: "2022-11-28T07:46:18+00:00",
      bytes: 188971,
      backup_bytes: 0,
      width: 3333,
      height: 3333,
      aspect_ratio: 1,
      pixels: 11108889,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621578/graphics/ro_fa-01-min_wh3k40.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621578/graphics/ro_fa-01-min_wh3k40.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "1e192bea3428d84e92d68fb25e6af9b1",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "e6ef9399709bca669deb9b1835a5fac1",
      public_id: "graphics/Clint_Dempsey-01-min_cstzxz",
      folder: "graphics",
      filename: "Clint_Dempsey-01-min_cstzxz",
      format: "jpg",
      version: 1669621578,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:18+00:00",
      uploaded_at: "2022-11-28T07:46:18+00:00",
      bytes: 185934,
      backup_bytes: 0,
      width: 2588,
      height: 2650,
      aspect_ratio: 0.9766,
      pixels: 6858200,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621578/graphics/Clint_Dempsey-01-min_cstzxz.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621578/graphics/Clint_Dempsey-01-min_cstzxz.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "b71cc2d4fd25164cc54a50a402e62aab",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "950919f2460db3bf41f24116ee481ec8",
      public_id: "graphics/Clint_Dempsey-min_eu1yfl",
      folder: "graphics",
      filename: "Clint_Dempsey-min_eu1yfl",
      format: "jpg",
      version: 1669621578,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:18+00:00",
      uploaded_at: "2022-11-28T07:46:18+00:00",
      bytes: 62546,
      backup_bytes: 0,
      width: 642,
      height: 983,
      aspect_ratio: 0.6531,
      pixels: 631086,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621578/graphics/Clint_Dempsey-min_eu1yfl.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621578/graphics/Clint_Dempsey-min_eu1yfl.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "5f5286ac9f17c225bd95cda834ac370e",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "1c256bd54de6d98e97bae2dfee2934f5",
      public_id: "graphics/Harry_Kane-01-min_npug4u",
      folder: "graphics",
      filename: "Harry_Kane-01-min_npug4u",
      format: "png",
      version: 1669621578,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:18+00:00",
      uploaded_at: "2022-11-28T07:46:18+00:00",
      bytes: 102395,
      backup_bytes: 0,
      width: 5333,
      height: 3333,
      aspect_ratio: 1.60006,
      pixels: 17774889,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621578/graphics/Harry_Kane-01-min_npug4u.png",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621578/graphics/Harry_Kane-01-min_npug4u.png",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "dd336cca4437e28310f57832713f8c4f",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "477073a8b619504d8d1e03d7b83853a8",
      public_id: "graphics/MexiLOgoLine-min_xkq8kc",
      folder: "graphics",
      filename: "MexiLOgoLine-min_xkq8kc",
      format: "png",
      version: 1669621577,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:17+00:00",
      uploaded_at: "2022-11-28T07:46:17+00:00",
      bytes: 203737,
      backup_bytes: 0,
      width: 3667,
      height: 3951,
      aspect_ratio: 0.92812,
      pixels: 14488317,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621577/graphics/MexiLOgoLine-min_xkq8kc.png",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621577/graphics/MexiLOgoLine-min_xkq8kc.png",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "c557944ebfe134ef12c27d60462efbba",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "5d92ecb0dd15c887f41f6e0f27b6379f",
      public_id: "graphics/Diego_Costa-01-min_ovkdwb",
      folder: "graphics",
      filename: "Diego_Costa-01-min_ovkdwb",
      format: "jpg",
      version: 1669621576,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:16+00:00",
      uploaded_at: "2022-11-28T07:46:16+00:00",
      bytes: 219144,
      backup_bytes: 0,
      width: 5333,
      height: 3333,
      aspect_ratio: 1.60006,
      pixels: 17774889,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621576/graphics/Diego_Costa-01-min_ovkdwb.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621576/graphics/Diego_Costa-01-min_ovkdwb.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "4e6a3a039c95234f04198fa013dcbd00",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "fb48db99d7f0ebc03f2bd04833213068",
      public_id: "graphics/Paul_Pogba-01-min_hv4jwr",
      folder: "graphics",
      filename: "Paul_Pogba-01-min_hv4jwr",
      format: "jpg",
      version: 1669621576,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:16+00:00",
      uploaded_at: "2022-11-28T07:46:16+00:00",
      bytes: 203761,
      backup_bytes: 0,
      width: 5333,
      height: 3333,
      aspect_ratio: 1.60006,
      pixels: 17774889,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621576/graphics/Paul_Pogba-01-min_hv4jwr.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621576/graphics/Paul_Pogba-01-min_hv4jwr.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "cb7fe6410d66ed58e2fae7f9ac6bab13",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "3869da26ce3e058fe4a690fcbe48d533",
      public_id: "graphics/מיכ-min_z1ihen",
      folder: "graphics",
      filename: "מיכ-min_z1ihen",
      format: "jpg",
      version: 1669621576,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:16+00:00",
      uploaded_at: "2022-11-28T07:46:16+00:00",
      bytes: 217895,
      backup_bytes: 0,
      width: 4042,
      height: 4042,
      aspect_ratio: 1,
      pixels: 16337764,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621576/graphics/%D7%9E%D7%99%D7%9B-min_z1ihen.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621576/graphics/%D7%9E%D7%99%D7%9B-min_z1ihen.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "2b2bc9aa8a5554ec0e47e70bbdd3dda5",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "c7e1d7e44c4f7cfc9b76ed3b27f0ad94",
      public_id: "graphics/Eden_Hazard5-01-min_zenuji",
      folder: "graphics",
      filename: "Eden_Hazard5-01-min_zenuji",
      format: "jpg",
      version: 1669621575,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:15+00:00",
      uploaded_at: "2022-11-28T07:46:15+00:00",
      bytes: 215379,
      backup_bytes: 0,
      width: 5333,
      height: 3333,
      aspect_ratio: 1.60006,
      pixels: 17774889,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621575/graphics/Eden_Hazard5-01-min_zenuji.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621575/graphics/Eden_Hazard5-01-min_zenuji.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "5b85029fcd46884981734ff58e6f3718",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "206844db7423ac3f92b2498491020bdc",
      public_id: "graphics/Lionel_Messi-01-min_eph2ua",
      folder: "graphics",
      filename: "Lionel_Messi-01-min_eph2ua",
      format: "jpg",
      version: 1669621575,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:15+00:00",
      uploaded_at: "2022-11-28T07:46:15+00:00",
      bytes: 258881,
      backup_bytes: 0,
      width: 5333,
      height: 3333,
      aspect_ratio: 1.60006,
      pixels: 17774889,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621575/graphics/Lionel_Messi-01-min_eph2ua.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621575/graphics/Lionel_Messi-01-min_eph2ua.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "9d6c41d18f62b02ce25e93e219905942",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "4b0b28bd996f8fbd6ae0713b97471b09",
      public_id: "graphics/Luis_Suarez-01-min_xhyoxn",
      folder: "graphics",
      filename: "Luis_Suarez-01-min_xhyoxn",
      format: "jpg",
      version: 1669621574,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:14+00:00",
      uploaded_at: "2022-11-28T07:46:14+00:00",
      bytes: 250128,
      backup_bytes: 0,
      width: 5333,
      height: 3333,
      aspect_ratio: 1.60006,
      pixels: 17774889,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621574/graphics/Luis_Suarez-01-min_xhyoxn.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621574/graphics/Luis_Suarez-01-min_xhyoxn.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "2497d0bcb52835798840d1077044350a",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "d7827f51b3ef8b48f03ae0785108dcef",
      public_id: "graphics/Eden_Hazard5_True_N_Team-01-min_k0z5ku",
      folder: "graphics",
      filename: "Eden_Hazard5_True_N_Team-01-min_k0z5ku",
      format: "jpg",
      version: 1669621574,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:14+00:00",
      uploaded_at: "2022-11-28T07:46:14+00:00",
      bytes: 235062,
      backup_bytes: 0,
      width: 5333,
      height: 3333,
      aspect_ratio: 1.60006,
      pixels: 17774889,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621574/graphics/Eden_Hazard5_True_N_Team-01-min_k0z5ku.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621574/graphics/Eden_Hazard5_True_N_Team-01-min_k0z5ku.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "b1c7383bac7ac064d120d2c4a564d268",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "9782e2923c945bcd44ee5692feb086cd",
      public_id: "graphics/Matthew_IL-01-min_nz6vvp",
      folder: "graphics",
      filename: "Matthew_IL-01-min_nz6vvp",
      format: "jpg",
      version: 1669621574,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:14+00:00",
      uploaded_at: "2022-11-28T07:46:14+00:00",
      bytes: 505847,
      backup_bytes: 0,
      width: 4521,
      height: 4521,
      aspect_ratio: 1,
      pixels: 20439441,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621574/graphics/Matthew_IL-01-min_nz6vvp.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621574/graphics/Matthew_IL-01-min_nz6vvp.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "6518ce6dc9af4beff45271d790a47468",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "7a6e1098b925f7c586d9faad2e902185",
      public_id: "graphics/KiloVader-02-01-min_bxxgtv",
      folder: "graphics",
      filename: "KiloVader-02-01-min_bxxgtv",
      format: "jpg",
      version: 1669621573,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:13+00:00",
      uploaded_at: "2022-11-28T07:46:13+00:00",
      bytes: 446538,
      backup_bytes: 0,
      width: 5479,
      height: 4941,
      aspect_ratio: 1.10888,
      pixels: 27071739,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621573/graphics/KiloVader-02-01-min_bxxgtv.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621573/graphics/KiloVader-02-01-min_bxxgtv.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "f0b34f085454df510f7e45bbc40cbbf0",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "de257056eb989b492a936fab7acf63de",
      public_id: "graphics/Design-Signature-min_kuy0jj",
      folder: "graphics",
      filename: "Design-Signature-min_kuy0jj",
      format: "jpg",
      version: 1669621572,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:12+00:00",
      uploaded_at: "2022-11-28T07:46:12+00:00",
      bytes: 345603,
      backup_bytes: 0,
      width: 1800,
      height: 770,
      aspect_ratio: 2.33766,
      pixels: 1386000,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621572/graphics/Design-Signature-min_kuy0jj.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621572/graphics/Design-Signature-min_kuy0jj.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "ce826f558b3cc39e0ba41060079f4a79",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "879c5d9e8954b7dd2add16653e16773a",
      public_id: "graphics/5קולולו-01-min_gn18je",
      folder: "graphics",
      filename: "5קולולו-01-min_gn18je",
      format: "jpg",
      version: 1669621572,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:12+00:00",
      uploaded_at: "2022-11-28T07:46:12+00:00",
      bytes: 294687,
      backup_bytes: 0,
      width: 1875,
      height: 1250,
      aspect_ratio: 1.5,
      pixels: 2343750,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621572/graphics/5%D7%A7%D7%95%D7%9C%D7%95%D7%9C%D7%95-01-min_gn18je.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621572/graphics/5%D7%A7%D7%95%D7%9C%D7%95%D7%9C%D7%95-01-min_gn18je.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "de3889de3d4475f40255a3c2fbcce7bd",
      created_by: [Object],
      uploaded_by: [Object],
    },
    {
      asset_id: "d9d136d715705a7b2103952273648859",
      public_id: "graphics/ronaldo_with_mid-01-01-min_strjbn",
      folder: "graphics",
      filename: "ronaldo_with_mid-01-01-min_strjbn",
      format: "jpg",
      version: 1669621571,
      resource_type: "image",
      type: "upload",
      created_at: "2022-11-28T07:46:11+00:00",
      uploaded_at: "2022-11-28T07:46:11+00:00",
      bytes: 298821,
      backup_bytes: 0,
      width: 5333,
      height: 3333,
      aspect_ratio: 1.60006,
      pixels: 17774889,
      url: "http://res.cloudinary.com/alonfabio/image/upload/v1669621571/graphics/ronaldo_with_mid-01-01-min_strjbn.jpg",
      secure_url:
        "https://res.cloudinary.com/alonfabio/image/upload/v1669621571/graphics/ronaldo_with_mid-01-01-min_strjbn.jpg",
      status: "active",
      access_mode: "public",
      access_control: null,
      etag: "6b3367e8884c7e9a29d05ef2e82461a0",
      created_by: [Object],
      uploaded_by: [Object],
    },
  ],
  rate_limit_allowed: 500,
  rate_limit_reset_at: "2023-04-04T10:00:00.000Z",
  rate_limit_remaining: 494,
};

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
        console.log("Then response.severity", response.severity);
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
        console.log(err);
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
// Needs: a folder name ("graphics", "photos").
// Does: Deletes old gallery.
// Does: Inserts new gallery.

const updateImages = (req, res, db) => {
  const updateImagesFolder = req.body.CLDFolder;
  console.log(updateImagesFolder), "updateImages";

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
          console.error(err);
          // return res.status(500).json(err);
        }

        galleyErrorObject.errorLocation = isDev
          ? "deleteImages"
          : galleyErrorObject.errorMessage;
        galleyErrorObject.errorMessage = isDev
          ? err
          : galleyErrorObject.errorMessage;
        galleyErrorObject.isError = true;

        // res.status(500).json({ errorMessage: galleyErrorObject.errorMessage });
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
    .sort_by("created_at", "desc")
    .max_results(200)
    .execute()
    // .then((CLDResponse) => CLDResponse.json())
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

        // res.status(500).json({ errorMessage: galleyErrorObject.errorMessage });
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
        console.error(err);
        // res.status(500).json(err);
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
