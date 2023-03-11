# Wino-MEN-Stack-App
General Assembly - SEI Mariposa: Wine tracking and reviewing web app for a casual wine lover

An embedded screenshot of the app

## Technologies used
Node.js
Mongoose 
Express 
EJS
CSS
<!-- CSS framework: Bootstap -->
Git GitHub
Visual Studio Code
Resource used: 


## Installation instructions
TBD
<!-- Clone respository or download html, css and html files and images folder. 
Open html file with local server (VS code Live Preview) to view the page in the browser. Navigate between the html pages using the navigation bar at the top of the website.  -->

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
| /                   | N/A            | GET           | read            | home.ejs                      | NO                |
| /wines              | index          | GET           | read            | wines-index.ejs               | NO                |
| /wines/:id          | show           | GET           | read            | wines-details.ejs, 404.ejs    | NO, NO            |
| /wines/new          | new            | GET           | read            | new-wine-form.ejs             | NO                |
| /wines              | create         | POST          | create          |                               | NO                |
| /wines/:id/edit     | edit           | GET           | read            | edit-wines.ejs                | NO                |
| /wines/:id          | update         | PATCH/PUT     | update          |                               | NO                |
| /wines/:id          | destroy        | DELETE        | delete          |                               | NO                |
| /*                  | N/A            | GET           | N/A             | 404.ejs                       | NO                |
| /seed               | N/A            | GET           | N/A             | N/A                           | NO                |
| /reviews/new        | new            | GET           | read            | reviews/new-review-form.ejs   | NO                |
| /reviews            | create         | POST          | create          |                               | NO                |

## Wireframes 
 Please note that this is a gif

![alt text](Wireframes-ERD/Wino%20Wireframe.gif "Wireframe 1") -->

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
- App will be hosted on Heroku by March 17, 2023


## Stretch Goals (How your specific project look & behave *AFTER* you accomplish MVP)
- allow users to create lists that users can add their favorite wines to
- Allow users to "favorite" wines which add them to a list that they can access
- EJS partial for wine card
- Home page: load more wines on scroll or carosel of featured wines 
- Wine ratings: add all ratings and average, display on details page
- Ability to edit wine reviews 
- Use a new CSS framework like Skeleton or Materialize

 ## Descriptions of any Unsolved problems or major hurdles you had to overcome
