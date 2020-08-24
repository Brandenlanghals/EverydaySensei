# EverydaySensei

A credit-based learning system where users can choose to be either: a sensei and volunteer their time to teach online classes (credits are earned), or a student and learn from others (credits are purchased). The website utilizes two different API calls: Google Maps (for geolocation of the user), and a words association (for connection similar skills in a SQL database). 

The technology stack used in Everyday Sensei consists of: HTML, CSS, jQuery, SQL, Sequelize, and handlebars as our ORM. The project uses the Model, View, Controller system (MVC) of website design and achieves the aforementioned through storing entered user information into a SQL database and populating a profile page through calls to the user database. Senseis and students are matched via calls to a relational database that holds skill information, where each skill is given a unique id, and matched with similar skills via our words API call.

![Landing](/images/landing.png)
![Profile Example](/images/profile.png)

## Installing

To run the app locally, you will first need to git clone the repository to your local machine. 

HTTPS:
````
$ git clone https://github.com/Brandenlanghals/EverydaySensei.git
````
SSH:
````
$ git clone git@github.com:Brandenlanghals/EverydaySensei.git
````

Once cloned, cd into the repository and install the necessary dependencies by running:
````
$ npm install
````

You can then start the app locally by running: 
````
$ node server.js
````

## Built With

* [Express.js](https://expressjs.com/) - Node.js framework
* [jQuery](https://jquery.com/) - Front-end framework 
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [npm](https://www.npmjs.com/) - Dependency management
* [Bootstrap](https://getbootstrap.com/) - CSS framework
* [Sequelize](https://sequelize.org/) - Sequelize ORM

## Authors
See contribution history [here](https://github.com/Brandenlanghals/EverydaySensei/graphs/contributors)

## Future Updates
We would like to focus on the credit system allowing Senseis to earn credits that can be redeemed to learn for free and be students. We would also like to monetize the app by allowing credits to be purchased, allowing students to join classes. 




