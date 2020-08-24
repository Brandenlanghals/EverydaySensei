# EverydaySensei

A credit-based learning system where users can choose to be either: a sensei and volunteer their time to teach online classes (credits are earned), or a student and learn from others (credits are purchased). The website utilizes two different API calls: Google Maps (for geolocation of the user), and a words association (for connection similar skills in a SQL database). 

The technology stack used in Everyday Sensei consists of: HTML, CSS, jQuery, SQL, Sequelize, and handlebars as our ORM. The project uses the Model, View, Controller system (MVC) of website design and achieves the aforementioned through storing entered user information into a SQL database and populating a profile page through calls to the user database. Senseis and students are matched via calls to a relational database that holds skill information, where each skill is given a unique id, and matched with similar skills via our words API call.

![Landing](/images/landing.png)
![Profile Example](/images/profile.png)
