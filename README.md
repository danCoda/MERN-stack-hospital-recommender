# Hospital Finder!
#### A Full stack web application (MERN).

## What is it?
It's a tool for you to **find the hospitals with the shortest waiting times**, for whatever illnesses the zombie apocalypse has brought onto you.

![Recommended hospitals ordered from shortest waiting time](https://i.imgur.com/OKDUxPi.png)

## What is it, actually?
* This is a full stack web application used to demonstrate a subset of my skills. Based on a technical challenge by PaloIT.
* Stack: MERN. 
  * **MongoDB** - A but rusty, but can handle Create, Read and Delete functionality. (Update functionality was not implemented.)
  * **Express** - The web application server backend was made using this framework. Has all kinds of endpoints for the frontend, and interacts with the database, as a backend server does. **External APIs** are called from this backend.
  * **ReactJS** - This is no doubt the newest technology that I have been eagerly learning for the past few weeks via online resources. I use a combination of class and functional components, as well as Redux for state and data management, and the middlewares **'axios'** and **'[redux-thunk](https://www.npmjs.com/package/redux-thunk)'** to handle asynchronous calls to the backend.
  * **Node** - The backend server is based on Node...
* Also used: **Bootstrap** for easier styling and responsive design. (Custom CSS styling is also used.)

* Please note:
  * Please provide feedback! **I am still learning**, and the code (especially the frontend / React code) has room for improvement. * *How would you do things better, and why would it be better? How can my code be simpler for Joe to understand?* *
  * Due to time limitations, the CSS styling may not be up to the mark; expect alignment issues.
  * **Testing**: Only manual testing has been done (and it seems to work fine). Automated testing has not been done, because I am not yet comfortable with tools such as **Jest** yet; I am consumed with other technologies for the time being. 

![First load screen](https://i.imgur.com/V8eeFqp.png)

## How does it work?

1. The frontend requests data from the backend, which in turn requests data via an external API. This API provides data on Hospitals and Illnesses. 
2. The User inputs their name, selects the illness they have and the level of pain they are experiencing. This data is communicated to the backend where it gets stored in the database.
3. The app provides hospital recommendations based the hospitals' their waiting times. 
4. The User is able to get back to the homepage, and can click their name under 'Previous Users' to get back to their hospital recommendations, or press the 'Delete' button to remove their record from the database.
5. There is no 5, but if this was a real scenario, the User can look for the hospital and may find that the hospital does not actually exist, or that the waiting times were not based on real  data.

## How do I run it?
You will probably not be able to run it on your machine, because of the MongoDB integration; it is set up to my machine. 

1. Start your MongoDB server (mongod).
2. In one Git Bash terminal, get into the ./backend directory, and `node index` to start the server. It runs on localhost:9000.
3. In another Git Bash terminal, get into the .frontend directory, and `npm start` to start the web application. It runs on localhost:3000.

![Pain scale](https://i.imgur.com/zgybd2g.png)
