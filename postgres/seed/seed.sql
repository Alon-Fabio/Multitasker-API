BEGIN TRANSACTION;

INSERT INTO users (id, name, email, joined) values (1, 'Fadminbio', 'alon.the.fabio@gmail.com', NOW());
-- INSERT INTO login (hash, email) values ('$2a$10$bF6o2QvvPJE0CcMQjerQtew63nX2yWFvCSvK4I0evlmCf1CqO6iES', 'alon.the.fabio@gmail.com'); Old user
INSERT INTO login (id, hash, email) values (1, '$2a$10$GbhQ1UvCgOfl3j3UzrAC0OmGtpAhiUUgIF7UV.JrSuFQrhta/lTIm', 'alon.the.fabio@gmail.com');

COMMIT;

