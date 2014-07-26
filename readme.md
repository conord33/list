SongLista Version 0.0.1

### Users
POST   /users                        // creates a user
GET    /users/:userId                // get user object
GET    /users/:userId/friends        // get user's friends (all users are friends for now :D )
POST   /users/:userId/share          // add item to list self or friend
DELETE /users/:userId/list/:itemId   // remove an item from your list
