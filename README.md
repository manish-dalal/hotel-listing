# hotel-listing | THOUGHTCLAN FULLSTACK DEVELOPER HIRING CHALLENGE
Develop a full-stack application for Singapore Hotel listings. You are expected to use the dump provided and write an end to end web app. Your backend should expose APIs containing the hotel listings data which your frontend should consume and list them on the frontend.

## How to run the project online
Open the online demo [https://manish-dalal.github.io/hotel-listing](https://manish-dalal.github.io/hotel-listing)

## Server deployment Link
[https://serene-oasis-54258.herokuapp.com/list](https://serene-oasis-54258.herokuapp.com/list)

## Features

- Use of CSV file and dump it in the database.
- Write a functional backend and frontend in the tech stack mentioned below.
- The data sharing between backend and frontend must be in JSON via REST APIs.
- List all the Hotel listings on the front end.
- Implement functionality to search hotels by name.
- Provide feature to sort articles by price.
- Implement Filter based on region.
- Zip all your source code, executables, screenshots, and upload.


## GUIDE

- Guide: [hck.re/singapore](hck.re/singapore)
- TechStack : Java Spring, Angular/ReactJs, Any DB of your choice.

## How to run the project in Development Mode

### Server setup
The project uses [mongoDB](https://www.mongodb.com/)

After mongoDB is installed in your system, follow the below steps.

1. Navigate to the directory where you want to store the app.
2. Clone the repo `git clone https://github.com/devanshdalal/spring-boot-hotel-listings.git`
3. Then run `./gradlew bootRun`
4. Then open `http://localhost:8080`

### Frontend setup
The project uses [Node.js >= 6.x](https://nodejs.org/en/) and the [Create-React-App starter code](https://github.com/facebookincubator/create-react-app).

After Node is installed in your system, follow the below steps.

1. Navigate to the directory where you want to store the app.
2. Clone the repo `git clone https://github.com/manish-dalal/hotel-listing.git`
3. Create a .env file in the root directory like the .env.example file.
4. Now install all modules listed as dependencies in `package.json` by running the command `npm install`
5. Launch the app with this command `npm start`

A new browser window open automatically displaying the app.  If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

***NOTE:*** *The service workers for this app will only cache the site when it is in production mode.*

## How to run the project in Production Mode

1. Build the production ready optimised code. `npm run build`
2. Deploy it to `gh-pages` branch by `npm run deploy`
3. Check the online demo [here](https://manish-dalal.github.io/hotel-listing)

## Screenshots
Project Home Page
<img src="ScreenShot/1.png"></img>

Search Feature
<img src="ScreenShot/2.png"></img>

Filter based on region
<img src="ScreenShot/3.png"></img>

Sort Feature
<img src="ScreenShot/4.png"></img>
