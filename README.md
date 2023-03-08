# Challenge-13---E-Commerce-Back-End

<h2><strong>Description</strong></h2>

<p>Challenge 13 consisted of learning object relational mapping and created tables for Products, Categories and Tags as if they were objects called through sequelize. Sequelize is an Object Relational Mapping tool for Node.js, its a powerful and flexible tool for working with relational databases. It provides a set of features that simplify working with databases including:</p>

<li>Object Relational Mapping to map databases tables to JavaScript Objects, making it easier to work with data in familiar and intuitive way</li>
<li>Data Validation making it easy to ensure data is consistent and conforms to the schema</li>
<li>Query building that allows us to write complex database queries in a more readable and maintainable way</li>
<li>Migrations making it easy to madify the schema of our databases as our applicaiton evolves</li>
<li>Association to establish relationships between tables in a database</li>

  
<p>For this challenge, we had to create modals for Category, Product, Product Tag and Tags. In each one, we added different parameters, validations and primary keys to interelate them with each other. Since this challenge we were given a partial code, the Seeds, the Server.JS, and some components for the routes were provided to us. </p> 
  
<p>Additional to SequilizeWe also used Dotenv to create a file to store the user, password and database name and use variables. This in order to upload our code and avoid other user to misuse our this information. </p>

<h2><strong>Programming Logic</strong></h2>

<p>Since part of the code was provided, I worked on creating the models, the routes and use dotenv to store the database information.</p>

<h4>Models</h4>

<p>For the models, I had to complement the code provided for Category, Index, Product, Product Tag and Tag. Based on the acceptance criteria, I created each model by assigning: </p> 

<li>Data types </li>
<li>Validation to ensure no empty fields are accepted
<li>Assigning primary keys and references</li>
<li>Autoincrement</li>

<h4>Routes</h4>

<p>For the routes, there are functions for GET, POST, PUT and DELETE for Categories, Products and Tags for Products, Categories and Tags. Since the models are related through primary keys and references, only Products Categories and Tags were used for the routes</p>

<p>For the GET method, I used the findAll method to obtain all the information stored in the database of the specific item and show it. Additionally there is another fucntion for GET which only displays one item and for this I used the findByPK method in order to only retrieve the information based on the information added into the route</p>

<p>For the POST method, its slighly different for each one. For Tags and Categories, the user can add into the body of Insomia, just the name of the new Tag or Category and it will be accepted and added into the database. On the other hand, for Products, the user will need to provide the product name, the description, the price and the tag ID in order for it to be accepted and added into the database </p>

<p>For the PUT method, the ID of the item will need to be added into the route and only depending if its Tag, Product or Category, the content may be modified. </p>

<p>For the DELETE method, similarly we only delete the item that is indicated through the route. I used the findbyPK method to find the specified item in the database and used the destroy method to delete it.</p>

  
<h2><strong>What did I learn?</strong></h2>

 <p>During this module, I learned that by using ORM we can use databases and tables like JavaScript objects by using Sequelize. Additonally I learned how to secure the database name, user and password when uploading the files into Github.</p>


<h2><strong>Videos</strong></h2>