BEGIN;

-- First table: Restaurnts
CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(300) NOT NULL,
    img_url VARCHAR(200)
);

-- Second table: Users 
-- Third table: Posts
-- Forth table: Comments 

COMMIT;