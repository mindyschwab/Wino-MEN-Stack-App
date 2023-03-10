# Wino-MEN-Stack-App
Wine tracking and  reviewing web app
An embedded screenshot of the app

## Technologies used

## Installation instructions
## User stories – who are your users, what do they want and why?

## Route Table

|       **URL**       | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**             | **Created Yet?**  |
| ------------------- | -------------- | ------------- | --------------- | ----------------------------- | ----------------- |
| /                   | N/A            | GET           | read            | home.ejs                      | YES               |
| /products           | index          | GET           | read            | products-index.ejs            | YES               |
| /products/:id       | show           | GET           | read            | products-details.ejs, 404.ejs | YES, YES          |
| /products/new       | new            | GET           | read            | new-form.ejs                  | YES               |
| /products           | create         | POST          | create          |                               | YES               |
| /products/:id/edit  | edit           | GET           | read            | edit-products.ejs             | YES               |
| /products/:id       | update         | PATCH/PUT     | update          |                               | YES               |
| /products/:id       | destroy        | DELETE        | delete          |                               | YES               |
| /*                  | N/A            | GET           | N/A             | 404.ejs                       | YES               |
| /seed               | N/A            | GET           | N/A             | N/A                           | YES               |
| /reviews/new        | new            | GET           | read            | reviews/new-form.ejs          | YES               |
| /reviews            | create         | POST          | create          |                               | YES               |

## Wireframes – sketches of major views / interfaces in your application
 Home page 
<!-- ![alt text](Wireframes/1.png "Wireframe 1") -->
 ## Descriptions of any Unsolved problems or major hurdles you had to overcome
