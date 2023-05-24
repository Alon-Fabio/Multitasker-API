BEGIN TRANSACTION;

INSERT INTO users (name, email, joined) values ('fuck this prj', 'alon.the.fabio@gmail.com', NOW());
INSERT INTO login (hash, email) values ('$2a$10$bF6o2QvvPJE0CcMQjerQtew63nX2yWFvCSvK4I0evlmCf1CqO6iES', 'alon.the.fabio@gmail.com');

COMMIT;

-- Changed the email (admin@amail.com) to your email and the name (admin).