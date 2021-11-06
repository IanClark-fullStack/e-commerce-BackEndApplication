# E-Commerce Backend (orm)
  ------
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Table of Contents
  ------

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions & Contributions](#questions-contribute)
  * [Credits](#credits)
  * [Licenses](#licenses)

  ## Description
  ------
  E-Commerce style database created by implementingobject relational mapping paradigms. 
  **Written w/**
  Sequelize, Express.js, Node, JavaScript, MySql
  [Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) [MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) [Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE) [NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) [NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) [Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) [JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 

  ## Installation
  ------
  Installation requires downloading or cloning the repository to your local machine. Cd into the project directory in your terminal / command line and run <code>npm install</code>. Upon completing the npm install login to your mysql server, and source the database sql file using <code>SOURCE db/schema.sql;</code>. You can complete your mysql interaction after running <code> USE ecommerce_db </code>. Leave mysql by entering <code> exit; </code>. SEED the database simply by running <code>npm run seed</code> Get the server up and running by entering <code>node server</code>
  
  

https://user-images.githubusercontent.com/90655370/140621427-cb32bd38-bc7d-4ec7-bc32-ed899093fb7e.mp4



  ## Usage
  ------
  Using postman or insomnia, to hit the endpointpoints defined in the routes folder, you have access to the following features at the endpoints listed below.
  Note - Create, read, update and delete features are included at all endpoints. 
  
  

https://user-images.githubusercontent.com/90655370/140621434-2a77d788-8db8-4b57-8e90-32eec00aa65b.mp4


  
  * Category Routes - `http://localhost:3001/api/categories`
  * Product Routes - `http://localhost:3001/api/products`
  * Tag Routes - `http://localhost:3001/api/tags`

    * Get all Category Data: <code>http://localhost:3001/api/categories</code>
  
    * Get Category Data by ID: <code>http://localhost:3001/api/categories/YOU_SPECIFY_ID_NUMBER</code>
  
    * Create New Category Data by sending json object to: <code>http://localhost:3001/api/categories/</code>
    * `json Object in the following form`
      <code>{"category_name": "gardentools"}</code>
  
    * Update an existing Category Data by sending json object to a specified ID:  <code>http://localhost:3001/api/categories/YOU_SPECIFY_ID_NUMBER</code>
    * `json Object in the following form`
      <code>{"category_name": "gardentools"}</code>

  * Delete Category Data by ID: <code>http://localhost:3001/api/categories/YOU_SPECIFY_ID_NUMBER</code>

  ## Contributing
  ------
  Fork, critique or contact

  ## Tests
  ------
  Testing performmed in insomnia
  
  ## Questions
  ------
  [visit my github](https://www.github.com/ianclark-fullstack) 
  Reach out w/ Additional Questions. 
  ianclark.creative@gmail.com
  

  
  ### License
   2021 - MIT
  [MIT Info](https://choosealicense.com/licenses/mit/)
