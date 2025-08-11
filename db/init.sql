CREATE TABLE IF NOT EXISTS messages (
  id serial PRIMARY KEY,
  text text NOT NULL
);

INSERT INTO messages (text) VALUES
('Hello from PostgreSQL'),
('Next.js fullstack is live');
