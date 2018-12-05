BEGIN;

-- First table: Restaurants
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
<<<<<<< HEAD
  location VARCHAR(300) NOT NULL
  -- img_url VARCHAR(300)
  -- "https://cdn2.iconfinder.com/data/icons/map-locations-filled-pixel-perfect/64/pin-map-location-19-512.png"
=======
  location VARCHAR(300) NOT NULL,
  img_url VARCHAR(200) 
  -- DEFAULT "https://cdn2.iconfinder.com/data/icons/map-locations-filled-pixel-perfect/64/pin-map-location-19-512.png"
>>>>>>> ac381e517c76ce320d93dd0e5113e8abdcce3cdb
);

-- Second table: Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  github_username VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL
);

-- Third table: Posts // Consider NOT NULL for the user_id
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id), 
  text TEXT NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id)
);

-- Fourth table: Comments
CREATE TABLE comments (
  id SERIAL PRIMARY KEY, 
  user_id INTEGER REFERENCES users(id),
  post_id INTEGER REFERENCES posts(id),
  text TEXT NOT NULL,
  rating INTEGER
);

-- Insert restaurants data
INSERT INTO restaurants (name, location) VALUES
(
  'The Faltering Fullback', '19 Perth Rd, Stroud Green, London N4 3HB'
),
(
  'Yard Sale Pizza', '54 Blackstock Rd, London N4 2DW'
);

COMMIT;
