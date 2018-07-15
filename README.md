# Complete RESTful Todos API 
Built with Node, Express , jQuery , and Mongoose 

# Access To the UI 

Visit ==> https://todos-restful-api.herokuapp.com/

# Todos API 

Send a Get request to `https://todos-restful-api.herokuapp.com/api/todos` 

###### Result for GET ./api/todos:

```
[
  {
    "completed": false,
    "_id": "5b4a6b44266c372d05718c02",
    "name": "Go To Algiers",
    "created_at": "2018-07-14T21:29:40.266Z",
    "__v": 0
  },
  {
    "completed": false,
    "_id": "5b4a6bad266c372d05718c03",
    "name": "Learn ReactJS",
    "created_at": "2018-07-14T21:31:25.483Z",
    "__v": 0
  },
  {
    "completed": false,
    "_id": "5b4a6bb0266c372d05718c04",
    "name": "Buy Cheese",
    "created_at": "2018-07-14T21:31:28.620Z",
    "__v": 0
  }
]
```
###### Result for GET ./api/todos/:id :

``` 
{
  "completed": false,
  "_id": "5b4a6b44266c372d05718c02",
  "name": "Go To Algiers",
  "created_at": "2018-07-14T21:29:40.266Z",
  "__v": 0
}
```

