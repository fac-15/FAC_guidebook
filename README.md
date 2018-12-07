# FAC_guidebook

[![Build Status](https://travis-ci.org/fac-15/FAC_guidebook.svg?branch=staging)](https://travis-ci.org/fac-15/FAC_guidebook)

## User Stories 

As a user I want to be able to: 

- View existing recommendations for restaurants/cafe's/pubs in the area
- Add a recommendation for a restaurant/cafe/pub in the area
- Review/comment about existing recommendations 


## How to run our project 🎉

npm i 

npm test to see tests if you're into that (this might not work actually because of authentication)


npm start to run server 

open localhost:5000

party 👽


### Stretch goals:

- Look at google maps to see the location of the venue
- Directly make booking to the specific restaurant/cafe/pub
- Viewing all the recommendations made by a specific user 

<img src='https://user-images.githubusercontent.com/16784959/49526129-1926cc00-f8a7-11e8-92bc-2d746b529dc1.jpg' width="700" height="700">
<img src='https://user-images.githubusercontent.com/36998110/49519226-6fd8d980-f898-11e8-946e-27cb23364835.JPG' width="700" height="700">
<img src='https://user-images.githubusercontent.com/16784959/49577817-2e036e00-f940-11e8-8186-ed1fa937536b.jpg' width="700" height="700">

## What we learned: Day 1: 

- How to reference primary keys and foreign keys
- SQL files are grey in Github! 
<img width="1094" alt="screenshot 2018-12-06 at 10 15 49" src="https://user-images.githubusercontent.com/16784959/49577870-525f4a80-f940-11e8-9344-c34fd939ef90.png">


## Issues Raised:
1. Should redirect back to homepage after submitting form.
   How we fixed: 
   ```
   res.writeHead(302, {
          Location: "http://localhost:5000"
        });
        res.end();
   ```


### Notes

How to assign a primary key as a foreign key in another table?

USER TABLE
id SERIAL PRIMARY KEY

POSTS TABLE
user_id INTEGER REFERENCES users(id)


CREATE DATABASE - it will automatically turn any upper case chars into lower case!!! So you may need to go and change that in your config.env

IN DB_BUILD.JS - if you still have:

```dbConnection.end(() => {
//         console.log("connection closed");
//       });
```

does this mean that you can't export the dbBuilder function? (and therefore can't require it in your tests eventually)? this seemed to be the case 

TEST SCRIPT IN JSON:
How to run multiple test files: 

```
"test": "node src/test/test_server.js | tap-spec && NODE_ENV=test node src/test/test_db.js | tap-spec",
```
We tried many difficult, long-winded different things...

TRYING TO ADD A NEW COLUMN TO A TABLE
 we tried to add a review column to our restaurant table... didn't seem to work! why!!!
