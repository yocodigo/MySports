# MySports

## About Our App
   We have developed a social networking applicatoin that is geared towards bringing NBA fans together to watch
live events featuring their favorite teams at various sporting venues.

   This user friendly application allows users like-minded fans together at a central location instead of going to
multiple websites to find out about news relating to their favorite team.

  When going to the website __https://stormy-spire-61276.herokuapp.com/auth/login__ each user will be
issued an individual login through Google OAUTH to their personalised account.

   All user data will be stored in a SQL database. They can enter the NBA team the like, city they live, and the app will be
able to generate them places they can visit and content based on their team.

## To Visit
* Visit : __https://stormy-spire-61276.herokuapp.com/auth/login__ To see Heroku Deployed app.
* Visit : __https://github.com/yocodigo/MySports__ to see GitHub Repo.
* See Our presentation on Google Slides at: __https://github.com/yocodigo/MySports__

## Contributors
* Jason Kunkel 
* Joel Hernandez
* Pedram Sharif     
LinkedIn: https://www.linkedin.com/in/pedram-sharif-6551b9143/
* Abdel Rahman 
* Ryan Brownlow

## Technologies Used
* __Javascript__ The Language used for the app.
* __Node.js__ The server side technology we used to run our app.
* __Express__ The Node Package that allowed us to route our users to the correct pages.
* __Google OAUTH__ and __Passport.js__ To authorize our users to use our app.
* __Google Maps__ and __Google Places__ API's To show Local Sports Bars that a user can go to watch their team.
* __Twitter Bootstrap__ As our Front End CSS Library to style out pages.
* __Handlebars__ as our front end templates.
* __Twitter Bootstrap__ As our Front End CSS Library to style out pages __CSS__ To customerize styles.
* __JQUERY__ To manipulate DOM elements and to make __AJAX__ calls.
* __MySQL__ and __Sequelize__ for our database. We used it to store our Fans, Messages, Events, NBATeam Data and GoogleUsers.
* __Twitter API__ to get Tweets of Fans teams.
* __Sports Radar__ To get Schedule of Fans Team's Games.


## Logging in

We used Google+ OAUTH to authorize users into our app.

![buger devour gif](/README_GIFS/login.gif)

   When a user is authorized if they are new they will be redirected to a sign up page to gather team data. If they are a fan
they will see their homepage with the newest info.

## HomePage
When they are logged in they will see: 

* Colors of NBA team they chose under the nav bar.
* When a user logs in they see a Google map will feature all the venues in proximity that will be playing the game as
well the user’s geolocation.
*   A live Twitter feed will feature latest news from the user’s favorite team.
* A schedule of the users teams upcoming games within the next week.
* Additionally there is an events section that will further enhance user experience by keeping fans up to date on the latest action relating to their team(s).
* And a message board to post messages to share among fans.

![burger create gif](/README_GIFS/homePage.gif)

## Planned Future Features
* We'd like to have our app be able to update Fans information.
* Be Able to Login in with a username and password with __Passport.js__.
* Save Messages and Events to a community of fans based on the NBA team the like and their location                                    because currently everyones Events and Messages get shown, regardless of the NBA team or location of the Fan.
* Use more stable API's to get more information on NBA Teams.
* Be able to expand this to more than basketball, including Football, Soccer, Hockey etc.
