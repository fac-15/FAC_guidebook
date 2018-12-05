# FAC_guidebook

## User Stories 

As a user I want to be able to: 

- View existing recommendations for restaurants/cafe's/pubs in the area
- Add a recommendation for a restaurant/cafe/pub in the area
- Review/comment about existing recommendations 


### Stretch goals:

- Look at google maps to see the location of the venue
- Directly make booking to the specific restaurant/cafe/pub
- Viewing all the recommendations made by a specific user 

<img src='https://user-images.githubusercontent.com/16784959/49526129-1926cc00-f8a7-11e8-92bc-2d746b529dc1.jpg' width="700" height="700">
<img src='https://user-images.githubusercontent.com/36998110/49519226-6fd8d980-f898-11e8-946e-27cb23364835.JPG' width="700" height="700">


### Notes

How to assign a primary key as a foreign key in another table?

USER TABLE
id SERIAL PRIMARY KEY

POSTS TABLE
user_id INTEGER REFERENCES users(id)
