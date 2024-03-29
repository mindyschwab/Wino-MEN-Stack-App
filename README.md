# Wino-MEN-Stack-App
General Assembly - SEI Mariposa: Wine tracking and reviewing web app for a casual wine lover

![alt text](Wireframes-ERD/Wino-screenshot.png "App screenshot") 

## Technologies used
- Node.js
- Mongoose 
- Express 
- EJS
- CSS
- CSS framework: Tailwind and DaisyUI
- Git GitHub
- Visual Studio Code
- Heroku 

## Installation instructions
Clone respository or download controllers, models, public, and views folders folders and files within. 
Install and initialize dependencies:
- connect-livereload
- daisyui
- dotenv
- ejs
- express
- livereload
- method-override
- mongoose
- tailwindcss

Update .env file with your database connection string and assign port 3000.

Update tailwind.config.js file to content section to include "["./views/**/*.ejs", "./public/**/*.js"],"

Run npx tailwindcss -i ./public/styles/main.css -o ./dist/output.css --watch to create dist file and output.css files and to rebuild tailwind/daisyUI components file after style changes. 

Enter command nodemon run dev to connect to MongoDB. Open local server on port 3000 to view the page in the browser. 

Navigate to localhost:3000/seed to seed inital data to MongoDB database.

Navigate between the views using the navigation bar at the top of the website. 


## User stories – who are your users, what do they want and why?
Who are Wino users?
 Casual wine drinkers who want to keep track of the wines they've tried and if the liked them
- As a Wino user, I want to be able to see a list of wines with descriptions and rating, so that I can get inspiration for wines I want to try.
- As a Wino user, I want to be able to add a new wine with descriptions and rating if it's not already in the database, so that I can refer to it later.
- As a Wino user, I want to be able to create a review for wines that I've tried, so that I can refer them to later when ordering or buying wine.
- As a Wino user, I want to be able to edit or delete wines that have inaccurate data.


## Route Table

|       **URL**       | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**             | **Created Yet?**  |
| ------------------- | -------------- | ------------- | --------------- | ----------------------------- | ----------------- |
| /                   | N/A            | GET           | read            | home.ejs                      | YES               |
| /wines              | index          | GET           | read            | wines-index.ejs               | YES               |
| /wines/:id          | show           | GET           | read            | wines-details.ejs, 404.ejs    | YES, YES          |
| /wines/new          | new            | GET           | read            | new-wine-form.ejs             | YES               |
| /wines              | create         | POST          | create          |                               | YES                |
| /wines/:id/edit     | edit           | GET           | read            | edit-wines.ejs                | YES                |
| /wines/:id          | update         | PATCH/PUT     | update          |                               | YES                |
| /wines/:id          | destroy        | DELETE        | delete          |                               | YES                |
| /*                  | N/A            | GET           | N/A             | 404.ejs                       | YES                |
| /seed               | N/A            | GET           | N/A             | N/A                           | YES                |
| /reviews/new        | new            | GET           | read            | reviews/new-review-form.ejs   | YES                |
| /reviews            | create         | POST          | create          |                               | YES                |

## Wireframes 
 Please note that this is a gif

![alt text](Wireframes-ERD/Wino%20Wireframe.gif "Wireframe 1") 

## ERD
![alt text](Wireframes-ERD/Wino%20ERD.png "Wireframe 1")

## MVP Goals (How your specific project will look & behave in order to accomplish MVP)
- A working full-stack application using Node.js, Mongoose, Express, EJS, and CSS 
- Create an MVC file structure: Models, Views, Controllers
- Observe a consistent separation of concerns throughout the project
- Utilize EJS partials for header, navbar and footer 
- Create and use two distinct schemas:
    1. wines
    2. reviews (review model that references wines)
- Wines schema will be used to make a model with all 7 RESTful routes and full CRUD.
- Application will be styled professionally and have responsive design.
- App will be hosted on Heroku 


## Stretch Goals (How your specific project look & behave *AFTER* you accomplish MVP)
- Use a new CSS framework like Skeleton or Materialize: complete - used tailwind and DaisyUI
- EJS partial for wine card: complete
- Wine ratings: add all ratings and average, display on details page: complete
- Ability to edit wine reviews 
- Allow users to create lists that users can add their favorite wines to
- Allow users to "favorite" wines which add them to a list that they can access
- Home page: load more wines on scroll or carosel of featured wines 

 ## Descriptions of any Unsolved problems or major hurdles you had to overcome
 - learning how to install and use Tailwind has a new CSS framework was very challenging and took a large amount of time to get inital pages set up.  Once I figured it out the first view and form styling, it was easier to implement. 
