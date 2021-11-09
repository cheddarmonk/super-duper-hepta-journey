# **Welcome to the Super-DuperR-Hepta-Journey!**
Some usefile links to help you find what you need.
- [Check out our Wiki](https://github.com/cheddarmonk/super-duper-hepta-journey/wiki) page
- [Check out our Proposal](https://github.com/cheddarmonk/super-duper-hepta-journey/blob/main/Proposal.md) page
- [Check out our Projects](https://github.com/cheddarmonk/super-duper-hepta-journey/projects/1) section.
- [Check out our Issues](https://github.com/cheddarmonk/super-duper-hepta-journey/issues) section.

# User Story (Story Points = Med👕)
**As a** end user of a `NodeJs` Occasion and gift tracker application  

**I want** use the application on the web and mobile devices [like this one](https://super-duper-hepta-journey.herokuapp.com/) 👍

**So That** I don't have to use sticky notes, third party calendar apps, and paper notes to keep of birthdays, wedding anniversaries, and other important dates and the gifts supplied for these events.

## Comments/Steps to implement 🥇
**##Disclaimer**  The steps and procedures in this project were performed using **`Visual Studio Code`**, **`NodeJS`**, **`Express`** web framework, and **`Mongodb`**.  For data dependencies, library, and coding editing choose any environment you are most comfortable and familiar with.
### Setup Nodejs and Express and Mongodb:
- Install **`Nodejs`** [from here]( https://nodejs.org/en/download/) on your local developer environment.  
-  Install and setup **`Express`** [from here]( https://github.com/04banshee/Dev-Training-Lab-ALPHA). The steps and procedures are the same for this project.
- Install **`Mongodb`**  In a **`vsCode`** terminal use the command **`npm install mongodb -- save`**.  This will install the mongodb so you can use it in your project.  To verify mongodb installed correctly use the command **`npm mongodb --version`**.  Below is a screen shot if mongodb install correctly.


**Disclaimer:**  The steps and procedures in this project were performed using **`Visual Studio Code`**, **`NodeJS`**, **`Express`** web framework, and **`Mongodb`**.  For data dependencies, library, and coding editing choose any environment you are most comfortable and familiar with.

## Setup Nodejs and Express and Mongodb:
- Install **`Nodejs`** [from here]( https://nodejs.org/en/download/) on your local developer environment.  
-  Install and setup **`Express`** [from here]( https://github.com/04banshee/Dev-Training-Lab-ALPHA). The steps and procedures are the same for this project.
- Install **`Mongodb`**.  In a **`vsCode`** terminal use the command **`npm install mongodb -- save`**.  This will install the mongodb so you can use it in your project.  To verify mongodb installed correctly use the command **`npm mongodb --version`**.  Below is a screen shot if mongodb install correctly.

    ![image](https://user-images.githubusercontent.com/54637063/140946556-e7f2b296-875a-4341-a17c-cac30d50457c.png)

## Create Project in Visual Code(vsCode):
- To create the project open **`vsCode`** and start a new project.  Detailed steps on how to start a new in **`vsCode`**  [cand be found here]( https://github.com/04banshee/Dev-Training-Lab-ALPHA). Refer to the section titled **"Create Project in Visual Code"**.
- Create a **`Mongodb Atlas`** cloud account to store and save persistent data to.  Use [this tutorial]( https://docs.atlas.mongodb.com/tutorial/create-atlas-account/) to create the account. 
- To familiarize yourself with the Atlas environment use [this tutorial]( https://docs.atlas.mongodb.com/getting-started/).  It has all the necessary information to create a new account, deploy a cluster, add connections to your database etc.  

## Connecting to Mongo Atlas
- There are two options to connect to the **`Mongo Atlas`** cluster. 
    - Option 1.  Download [Compass]( https://www.mongodb.com/products/compass) app for **`Mongodb`**. 
    - Option 2.  Login to the [Atlas]( https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=bing&utm_campaign=mdb_bs_americas_united_states_search_core_brand_atlas_desktop&utm_term=atlas%20mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204521&msclkid=33b4ee957331158595db8f1ff0349636) web portal.  
-  Both options are a GUI interface, and have all interactive features that allow you to manage and update your mongodb instance.


## Code the app:
Use the below suggestions to code the application to make standardized, clean, concise, clear code.  The suggestions reduce coding errors, allows for finding coding errors faster, and reduces the amount of code to write.  These suggestions are just a framework to follow and are not all inclusive and are by no way the only way to code your app. 
1. Variable naming conventions
1. Class and function naming conventions
1. Clear and concise comments
1. Indentations
1. Portability
1. Reusability and scalability
1. Testing
- Use whatever coding techniques and practices you are comfortable and confident in.  Below is a snipet of JavaScript code used in our application.

```JavaScript
const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

update.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Sally',
      quote: 'Birthday, CakePoper, 2012.'
    })
  })
  ```


## Test app locally:
- Once you are confident the application is working test the application locally before deploying the application.  To test the application locally start your local server.  In the **`vsCode`** terminal type the command **`node server.js`**.  `Node is the application that will start your server and allow it to be viewed in the web browser of your choice.  Below is a screen shot.

![image](https://user-images.githubusercontent.com/54637063/140949455-dff9d14f-a671-4146-84c7-9381f2f22995.png)

- Check to see if you have any logical or syntax errors with your application.  Open a browser.  In the browser URL type localhost:3000  Localhost is the application and 3000 is the port number you assigned to the application.   Use this option to thoroughly test your application.  Fixing bugs and errors is easier here than when the application is fully deployed.

## Deploy App to persistent URL
- Deploy app to persistent URL for use and more testing.  

## How to know when you are done. Acceptance Criteria 
- State criteria for user satisfaction and app functional use.


## **Developers Notes:**
- Put in any additional notes that will help developer explain their process and way of thinking for the app (1000 foot view!!)


