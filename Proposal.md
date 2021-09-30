
# Birthday and Relationship and Gift Tracker

## Table of contents
* [Main idea](#Main-idea)
* [Overview](#Overview)
* [Background](#Background)
* [Objectives](#Objectives)
* [Scope](#Scope)
* [Development](#Development)
   * [Architecture](#Architecture) 
   * [View](#View)
* [Oportunities and challenges](#Oportunities-and-challenges)
* [Conclusions](#Conclusions)
* [Multimedia](#Multimedia)
* [Resource center](#Resource-center)
---


## Main Idea:
Develope a full stack application that stores, reminds, and cataloges birthdays, wedding anniversaries, and other important dates/events and records the gifts associated with the event.  <a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Overview:
There are many calendar applications on the market that provide similar functionality.  The capabilities and functionality of these applications do not provide a way for the user to catalog events into a database and retrieve them according to occasion or supplied gift for the event.  This application will allow the user to see what gift was supplied and the categories of events over multiple year time span.
<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Background:
People use technology daily to help with mundane simple tasks that are often overlooked or forgotten.  Forgetting a birthday, or wedding anniversary can create friction in a relationships, cause family ties to be severed and possibly end a relationship.  Having an application that helps keep track of these important dates provides the freedom of focusing on the gift and making it more meaninful.
![external-content duckduckgo](https://user-images.githubusercontent.com/54637063/135366719-d77faaf6-fbca-4e21-b792-3e561bcb94fb.jpg)
<p align="center">
 
</p>
The concept of reminders applications in not new but, it is an emerging market for development.  This approach provides an innovative way to let a person know you are thinking about them, care and love them.

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
For this objective, the idea is to build a functional application that provides a web API with a persistent server side database.  To accomplish this, the interface will be built with HTML, CSS and some `JavaScript`.  Using these technologies allows for rapid Agile development.  The interface will be simple but intuitive, so the user does not have to learn a process to use the application.  In addition, the front end application will have `AngularJS` included for data binding,  dependency injection, and elimination  of code duplication.  All of this happens in the browser which makes `AngularJs` ideal for any dynamic webpage and server technology.  See more of what [`AngularJs`](https://angular.io/) can do 
<p align="center">
  
![pic](https://user-images.githubusercontent.com/54637063/135461849-1f0ee9f2-40b9-4d55-a1d0-4e2372f50fa3.JPG)

![new_angular](https://user-images.githubusercontent.com/54637063/135466252-a9db2e76-9c73-4611-ae77-80d4559b3752.png)


</p>

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## View:
To obtain a more user-friendly view of the data, we will add to the frontend of our project the template provided for the original prototype. This new view will be used for data audit type review, so we will call it Audit Page. 

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133298975-2d4fa221-79c5-4610-ab5e-5b9776819bf3.png">
</p>

The purpose of this view is to inspect the number of commands that each user has performed through its search.

What we want is to be shown who executed it, to which service, the number and the command in question.  Although we have a great base to be able to display such information, it is necessary to make some small changes:

First we must obtain the information from the source, that is, from the `blockchain.js` file via `app.js`. The balance is already given, only that, as each transaction is assigned a value of 1, we need the balance to be positive. On the other hand, we are also interested in the command of that transaction. All these instructions are in the `getAddressData` method of the prototype. We apply the following changes.


## Oportunities and challenges:
In recent years, the issue of data security and privacy has become very important. It is so important that governments have implemented specific policies for its control and management. Platforms are required to protect the integrity of users' information and to provide them with security certainty. 

The digital commerce boom has also been impressive in recent decades. Today, most transactions are carried out digitally, so the applications and platforms used for this purpose must have excellent security for its operation, in addition to providing efficient management for both customers and companies.

While a blockchain operating system would offer many unequivocal advantages in terms of these last points, the truth is that its implementation and integration would not be so easy for three reasons: the change culture, the cost and the market.

We are currently so used to traditional operating systems that adopting another one would be somewhat uncomfortable, and many of the productive applications we use today would also have to be migrated to the new platform in order to continue to be used. And even if the functionality of the blockchain operating system were the same as any other traditional operating system, we would still have reservations about its security and stability, especially for applications with a large-scale deployment.

An important and paradoxical point at this point is who can access the system's transaction information, i.e., the privacy of the user's actions. The default system would offer a great level of detail of the movements made. Is this valid? There are conflicting opinions: on the one hand, there are those who defend data transparency, on the other hand there are those who fight for strict privacy. It is a question whose answer will undoubtedly generate a great deal of debate on this point. My comment would be in relation to good data management for purposes previously established and agreed upon by all parties involved; it is proven that Blockchain technology does offer data protection through highly secure and effective algorithms.

The second factor is cost. The infrastructure required to support the operations of a blockchain operating system is very expensive, as supporting all its complex operations requires a lot of processing power and storage. Not all companies could afford the transition. Moreover, it also leads to a lot of investment in addition to the monetary one. To learn a new operating system requires a knowledge base deep enough to give certainty about its correct operation, and this, paradoxically, happens when users are completely immersed in it without knowing enough yet. Human resources and their training remain essential at this point.


## Conclusions:
As we can see, blockchain operating systems offer us a full bunch of software by taking advantage of all of the overall blockchain concepts, allowing the integration of the current and future Blockchain Ecosystem on a single operating system platform. The efficiency, reliability, privacy and security are key values of this highly new approach of interacting with computer systems.

The implementation of this technology in a current operating system is not simple, since it would have to be integrated with its kernel to record the tasks that users perform in it. On the other hand, its complete development is quite complex, since new technologies have to be integrated with the basic principles to create a completely new operating logic. In both cases, a large investment of resources is required. However, this first theoretical and practical approach was very compelling to learn the basics of Blockchain concepts and its integration with the entire technological ecosystem that surrounds it. 

The contemporary trends of commerce will force us to adapt new ways to do things, but we must be cautious of how our data is managed by understanding, even a little, the way all of it works. It’s clear that this is just a very important checkpoint in the race to develop highly advanced technology that will capitalize and empower the digital world towards revolutionary horizons.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Multimedia:
<a href="https://www.loom.com/embed/a9af0b0d6cee44b18e765589c930ac2f" target="_blank"><p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/88801826/133354136-4fe76e8b-4064-4b6e-bd92-45e787386f7d.png">
</p></a>

<a href="https://www.loom.com/embed/0845843780544510ae45a5c5cf03b2e5" target="_blank"><p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/88801826/133354529-4e734268-96af-4ed3-835e-f9c69167e7f5.png">
</p></a>

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Resource center

_The blockchain prototype used in this project was generously provided by Dr. Barry Cumbie, from the University of North Alabama, on the United States, in conjunction with the Anáhuac University, on México, for the course of Blockchain with academic purposes_.

Go to the [bCLI  repository ](https://github.com/rusejo/bCLI) if you want to download and test the project.

Go to my [raw notes and dev journey](https://github.com/rusejo/blockchain-journey/blob/main/bcli-dev-journal.md) if you want to to know the draft of the development of this project.

<details>
    <summary>Click here to see the <b>Source Information.</b></summary>
    <a href="https://www.guru99.com/operating-system-tutorial.html"><br />
        Singh, A. (2021, January 18). <i>Types of Operating Systems</i>. GeeksForGeeks
    </a>
    <br />
    <a href="https://cryptoseq.medium.com/what-is-a-blockchain-operating-system-and-what-are-the-benefits-c561d8275de6">Seq.
        (2019, September 8). <i>What is a blockchain operating system and what are the benefits?</i> Medium
    </a>
    <br />
    <a href="https://www.investopedia.com/terms/b/blockchain-operating-system.asp">
        Frankenfield, J. (2021, April 1). <i>Blockchain Operating System.</i> Investopedia
    </a>
    <br />
    <a href="https://www.blockchain-council.org/blockchain/blockchain-operating-system-a-complete-overview/">
        Kumar, T. (n.d). <i>Blockchain Operating System: A Complete Overview.</i> Blockchain Council
    </a>
    <br />
    <a
        href="https://www.forbes.com/sites/adrianbridgwater/2018/07/03/what-is-a-blockchain-operating-system/?sh=633eb39a36a">
        Bridgwater, A. (2018, July 3). <i>What Is A Blockchain Operating System?</i> Forbes
    </a>
    <br />
    <a href="https://medium.com/jspoint/a-beginners-guide-to-creating-desktop-applications-using-electron-824da5665047">
        Hiwarale, U. (2020, December 24). <i>A beginner’s guide to creating desktop applications using Electron</i>
        Medium
    </a>
    <br />
    <a href="https://medium.com/folkdevelopers/the-ultimate-guide-to-electron-with-react-8df8d73f4c97">
        Patnaik, A. (2020, October 17). <i>The Ultimate Guide to Electron with React</i> Medium
    </a>
    <br />
    <a href="https://searchapparchitecture.techtarget.com/definition/RESTful-API">
        S. Gillis, A. (2020, September). <i>REST API (RESTful API) </i> TechTarget
    </a>
</details>

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>
