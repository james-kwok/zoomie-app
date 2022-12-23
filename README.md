
# Zoomie 🐶

Zoomie is an application that allows dog owners to check into and browse from a list of nearby dog parks / dog-friendly areas in Downtown Toronto. Gain control, make the best decision for your dogs, and socialize them the right way with Zoomie!
## Getting Started

To run this project, run ```$ npm install``` in both ```zoomie-frontend``` and ```zoomie-backend``` folders to get all dependencies and packages.

#### Knex.js & MySQL

```seed_data``` is included in this repo to get you started with Knex.js migrations and seeds. One tip is to run them in this particular order to avoid DB issues. Run this command line ```$ knex migrate:up``` with the following migration files in this order: ```locations```, ```users```, ```dogs```, ```checkins```. As for seeding your DB, it is recommended to run: ```$ knex seed:run --specific=``` with the following seed files in this order: ```locations```, ```users```, ```dogs```.

#### .env

```.env.sample``` in ```zoomie-backend``` provides a sample of environment variables required to run this project. You will need to add the following environment variables to your .env file:

`PORT`
`DB_LOCAL_DBNAME`
`DB_LOCAL_USER`
`DB_LOCAL_PASSWORD`

`JWT_SECRET`

#### MapBox Access Token

Please sign up for a MapBox account to get an access token if you would like to render the map in the ```LocationDetails``` component.

#### Now you are all set!

Run ```$ npm start``` in both ```zoomie-frontend``` and ```zoomie-backend``` to start the project.
## API Documentation

#### Get all locations

```
  GET /locations
```

#### Get a specific location

```
  GET /locations/${id}
```

#### Get all dog profiles

```
  GET /dogs
```

#### Get a specific dog profile

```
  GET /dogs/${id}
```

#### Get user's dog profile

```
  GET /dogs/profile
```

| Requirements |            
| :----| 
| Auth |

#### Create user's dog profile

```
  POST /dogs/post
```

| Requirements |            
| :----| 
| Auth |

#### Get all check-ins

```
  GET /checkins
```

#### Create a check-in instance

```
  POST /checkins
```

| Requirements |            
| :----| 
| Auth |

#### Get a list of checked-in dogs at a specific location

```
  GET /checkins/${id}
```

#### Create a user account

```
  POST /users/signup
```

#### Log in to an exsiting user account

```
  POST /users/login
```





###

#### App Logo

![Logo](https://res.cloudinary.com/deu69ydvq/image/upload/v1671071234/zoomie-logo_ltc7py.png)

#### Brand Colors

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary | #FFFC00 |
| Secondary | #11111F |




## Built with

```React.js``` ```SASS``` ```Node.js``` ```Express``` ```Knex.js``` ```MySQL```


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://ca.linkedin.com/in/itsjameskwok)


## Support

For support, email kinkwanjames@gmail.com or DM me on Discord @ kwozy#3200.

