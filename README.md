**Instructions**
This is a Node.js, Express, Handlebars Application.  
The functionality of the application is to make use of express and handle bars. This app lets you enter a burger name you would like to eat. Upon entering the burger is saved in to a MySQL database. Entered burger will be displayed on the screen with a devour button. Once the  devour button is clicked, burger eill be statused as eaten and subsequently database will be updated as eaten. Any eaten burger will be displayed on the scree as well with a button. This button will be cleaning up the eaten burger from the screen and database. server.js contains dependencies like, "path", "express", "express-handlebars","body-parser"
*************************************************************************************************
Burger application has the following file structure
Root(Burger)
    |
    config
        |
        connection.js
        orm.js
    controllers
        |
        burgercontroller.js
    db
        |
        schema.SQL
        seed.SQL
    models
        |
        burger.js
    public
        |
        public
            |
            assets
                |
                css
                    |
                    style.css
                image
                    |
                    burger1.jpg
                    burger4.jpg
                    burger6.jpg
                javascript
    views
        |
        layouts
            |
            main.handlebars
        index.handlebars
    server.js
    node_modules    
    package.JSON
    package-lock.JSON
    README
*************************************************************************************************
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image1.PNG)
*************************************************************************************************
Burger app uses a MySQL database
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image2.PNG)
*************************************************************************************************
Burger App demo is as follows. This app runs on port 8080. On Command line run node server.js. 
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image3.PNG)
On the browser use the url http://localhost:8080.
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image4.PNG)
1. To start the application, enter a burger name of your choice in the text box area.
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image5.PNG)
2. And click the "Place Order" button. Entered burger name will be displayed on left side of the screen with a button next to it. Button is to devour the burger.
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image6.PNG)
3. Enter as many burgers as you would like. Each burger entered will be inserted in to the MySQL database burgers_db, inside burgers table. Each of the "Ready To Eat" burgers will have a status of "Devoured" as false.
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image7.PNG)
4. Now click on "Devour It" button. This will take the burger out of Ready To Eat section and will be moved to "Already Eaten" section. Once the selected burger os moved to "Already Eaten" section, a button "Clean Up" will be displayed next to it. This button will clean up the eaten burger from your plate.
With this action entered. Any burger moved "Already Eaten" section will have a status of devoured as true.
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image8.PNG)
5. Devour  as many "Ready To Eat" burgers as you would like.
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image9.PNG)
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image10.PNG)
6. Click on "Clean Up" button to clean up "Already Eaten" burgers from your plate.
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image11.PNG)
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image12.PNG)
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image13.PNG)
![](https://github.com/JPillai2018/Burger/blob/master/public/assets/screenshots/image14.PNG)
Future Enhancements include (if possible)
    Show a recepe on the screen
    Validations to the burger names
    A favourite section
*************************************************************************************************