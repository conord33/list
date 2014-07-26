SongLista Version 0.0.1

### Users

#### Create User
POST   /users

#### Get User Object
GET    /users/:userId

#### Get users friends (all users)
GET    /users/:userId/friends

#### Add item to list
POST   /users/:userId/share

#### Remove item from list
DELETE /users/:userId/list/:itemId   
