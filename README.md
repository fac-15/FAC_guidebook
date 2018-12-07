# FAC_guidebook 🍔

An app for food and drinks recommendations around Finsbury Park!

Put screenshot of our app here!!

[![Build Status](https://travis-ci.org/fac-15/FAC_guidebook.svg?branch=staging)](https://travis-ci.org/fac-15/FAC_guidebook)

## User Stories 🤔

As a user I want to be able to: 

- View existing recommendations for restaurants/cafes/pubs in the area
- Add my own recommendation for a restaurant/cafe/pub in the area
- Review/comment on existing recommendations 


## How to run our project 🎉

npm i 

npm test to see tests if you're into that (this might not work actually because of authentication)


npm start to run server 

open localhost:5000

party 👽

## Planning Process:

<img src='https://user-images.githubusercontent.com/16784959/49526129-1926cc00-f8a7-11e8-92bc-2d746b529dc1.jpg' width="700" height="700">
<img src='https://user-images.githubusercontent.com/36998110/49519226-6fd8d980-f898-11e8-946e-27cb23364835.JPG' width="700" height="700">
<img src='https://user-images.githubusercontent.com/16784959/49577817-2e036e00-f940-11e8-8186-ed1fa937536b.jpg' width="700" height="700">

## What we learned: Day 1: 

- How to reference primary keys and foreign keys
```
USER TABLE
id SERIAL PRIMARY KEY

POSTS TABLE
user_id INTEGER REFERENCES users(id)
```
- When you CREATE DATABASE - it will automatically turn any upper case chars into lower case!!! So you may need to go and change that in your config.env and other places
- SQL files are grey in Github! 
<img width="1094" alt="screenshot 2018-12-06 at 10 15 49" src="https://user-images.githubusercontent.com/16784959/49577870-525f4a80-f940-11e8-9344-c34fd939ef90.png">

## What we learned: Day 2:

With our real database and our test database, we needed to know how to switch between the two: 

```
"test": "node src/test/test_server.js | tap-spec && NODE_ENV=test node src/test/test_db.js | tap-spec",
```
An environment variable!

## Issues Raised: 👺

1. Usability: Should redirect back to homepage after submitting form.
   
   How we fixed: 
   ```
   res.writeHead(302, {
          Location: "http://localhost:5000"
        });
        res.end();
   ```
2.


## Stretch goals: ⚽

- Make a call to the Google Maps API when user selects a recommendation and show on map

- Click and be taken to website/Directly make booking to the specific restaurant/cafe/pub

- Link SQL tables - use the posts table in order to link between unique restaurants and unique users
- This would give us loads of amazing functionality - like filtering recommendations by user, or recognising users that already exist or places that have already been submitted, and not creating duplicates in our tables...



### Notes

IN DB_BUILD.JS - if you still have:

```dbConnection.end(() => {
//         console.log("connection closed");
//       });
```

does this mean that you can't export the dbBuilder function? (and therefore can't require it in your tests eventually)? this seemed to be the case 

TRYING TO ADD A NEW COLUMN TO A TABLE
 we tried to add a review column to our restaurant table... didn't seem to work! why!!!
