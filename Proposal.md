
# Proposal Birthday and Gift Tracker application

## Table of contents
* [Main idea](#Main-idea)
* [Overview](#Overview)
* [Background](#Background)
* [Objectives](#Objectives)
* [Scope](#Scope)
* [Development](#Development)
   * [Architecture](#Architecture) 
   * [View](#View)
* [Development Schedule](#Development-Schedule)
* [Opportunities and challenges](#Opportunities-and-challenges)
* [Conclusions](#Conclusions)

---


## Main Idea:
Develop a full stack application that stores, reminds, and catalogs birthdays, wedding anniversaries, and other important dates/events and records the gifts associated with the event.  <a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Overview:
There are many calendar applications on the market that provide similar functionality.  The capabilities and functionality of these applications do not provide a way for the user to catalog events into a database and retrieve them according to occasion or supplied gift for the event.  This application will allow the user to see what gift was supplied and the categories of events over multiple year time span.
<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Background:
We've all heard the story of the husband who forgot his wife's birthday or their anniversary. If only he had remembered then there wouldn't be any couch surfing for him. When that friend goes above and beyond to get you that nice single malt whiskey for your birthday and in return you send him a 6-pack of bud-light. It just doesn't seem right. With the right tool you can avoid these issues and experience the freedom that comes with knowing what the right gift is for the right person. 


![external-content duckduckgo](https://user-images.githubusercontent.com/54637063/135366719-d77faaf6-fbca-4e21-b792-3e561bcb94fb.jpg)
<p align="center">
 
</p>

The concept of reminders applications in not new but, it has room for development. Our approach provides an innovative way to help you let that special person know that you care. Now is the time to make the most of your relationships.  

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>


## Objectives:
1. Developing a front end web interface a user can interact with.
1. Processing and persistently storing data to a backend database.
1. Retrieving and updating the persistent storage datasets as a user interacts with the web interface

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Scope:
This will be an operational prototype of birthday and gift tracker application.  The application will be an interactive web application that allows user input, storage, and data retrieval.  The application will interact with a Mongo DB.  The Mongo DB will be a persistent storage device for creation, retrieval,  updating, and deleting (CRUD) operations.  Other functional iterations of the application will be possible for future development.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Development:

### Architecture
For this objective, the idea is to build a functional application that provides a web API with a persistent server side database.  To accomplish this, the interface will be built with **`HTML`**, **`CSS`** and **`JavaScript`**, and **`NodeJs`**.  Using these technologies allows for rapid Agile development.  The interface will be simple but intuitive, so the user does not have to learn a process to use the application.  In addition, the application will use **`NodeJs`**, **`Express`** web framework, and **`AngularJS`** for data binding,  dependency injection, and elimination  of code duplication.  All of this happens in the browser which makes **`AngularJs`** ideal for any dynamic webpage and server technology.  See more of what [**`AngularJs`**](https://angular.io/) and [**`NodeJS`**](https://nodejs.org/en/about/) can do 

For the backend persistent data storage Mongodb will be used for creation, reading/retrival, updating, and deleting records.  Mongodb is ideal for this applicaiton because of the flexability with document object modeling for development.  

 
![pic](https://user-images.githubusercontent.com/54637063/135461849-1f0ee9f2-40b9-4d55-a1d0-4e2372f50fa3.JPG)
  

![Blank diagram](https://user-images.githubusercontent.com/54637063/135622500-9728e6cb-5f7a-41fe-84a3-a4c998eaa924.jpeg)

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## View:
To better understand the data, and how it will be processed we are providing a visual representation of the user interface of our project. 
            
![User_Interface](https://user-images.githubusercontent.com/54637063/135650567-9f4e2e9a-a940-44fa-988f-e0c5d37444a6.jpeg)
The purpose of this is to provide a visual representation of the layout and data flow.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Development Schedule:
The following are tentative due dates for each stage of development:
Task | Due Date
------------     |     -------------
Team Product Repository        | 23 Sep 2021
Product Proposal               | 5 Oct 2021
Product Backlog                | 5 Oct 2021
Sprint 1 Backlog               | 5 Oct 2021
Development Product Ownership  | 8 Oct 2021
Sprint 1 Prodcut               | 21 Oct 2021
Sprint 1 Reflection            | 21 Oct 2021
Sprint 2 Backlog               | 26 Oct 2021
Sprint 2 Product               | 11 Nov 2021
Sprint 2 Reflection            | 11 Nov 2021
Product Presentation           | 23 Nov 2021
Product Deployment             | 30 Nov 2021
Development Product Reflection | 4 Dec 2021

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>


## Opportunities and challenges:
With our lifestyles becoming more hectic than ever, it’s increasingly difficult for most of us to juggle our professional and personal lives. One moment you’re trying to meet an impossible deadline at work, and the next, you’re running errands for your home.  In addition to the juggling of many tasks all these task must be centrally located and accessible constantly while on the job, or while traveling with family and friends.  Having an app that handles the time consuming scheduling is another stressor you need not worry about.  Like any technology there are challenges that must be considered.  Privacy is at the front of all of our minds.  The information the application will store is very sensitive and must be stored safely and with personal privacy in mind.

## Conclusions:
Relationships are without a doubt the most important part of our lives. From significant others and family to co-workers and bosses we all have relationships that we have to maintain and continue to work on. Remembering special things about those relationships are a crucial part of keeping them healthy. Our app uses light weight, simple to use open source web frameworks that  enable you to be prepared to make the most of those special moments. Forget no more and worry no more. With our gift tracking, put your stress to rest by making sure you have the right gift for the right person at the perfect moment. 

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>



