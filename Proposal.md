
# Relationship and Birthday Gift Tracker

## Table of contents

* [Main idea](#Main-idea)
* [Overview](#Overview)
* [Background](#Background)
   * [Use case scenario](#Use-case-scenario) 
* [Objectives](#Objectives)
* [Scope](#Scope)
* [Development](#Development)
   * [Architecture](#Architecture) 
   * [Initial configuration](#Initial-configuration)
   * [Parsing the CLI arguments](#Parsing-the-CLI-arguments)
   * [Enhacing the application as a REST API](#Enhacing-the-CLI-as-a-REST-API)
   * [Handling requests](#Handling-requests)
   * [Leveraging blockchain](#Leveraging-blockchain)
   * [Networking](#Networking)
     * [Running multiple instances](#Running-multiple-instances)
     * [The 'Port Communication Problem'](#The-Port-Communication-Problem)
     * [Broadcasting commmands](#Broadcasting-commands)
   * [View](#View)
* [Execution](#Execution)
   * [Tests](#Tests)
     * [Parcial](#Parcial)
     * [Full](#Full)
   * [Results](#Results)
     * [Future enhacements](#Future-enhacements) 
* [Oportunities and challenges](#Oportunities-and-challenges)
* [Conclusions](#Conclusions)
* [Multimedia](#Multimedia)
* [Resource center](#Resource-center)
---

## Main idea

Extend the functionality of blockchain concepts into the command line of the OS in order to register all the activities on the chain.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Overview

In the past years, the blockchain technology has been principally leveraged principally by the financial and commercial sector. Its high security and reliability has allowed it to develop a great amount of technology that has helped organizations to improve its business processes, leading them into a revolution that has determined a new path on how things can be done.

But that technology is not limited only to economics, it can be applied outside this and other traditional fields —or maybe I should say in the base of all of them: all of these innovative concepts can be used as a basis of a brandly new way to interact with the computing systems—. What about if we extend its functionality to bring a fancy and far more secure platform in order to facilitate its integration with other blockchain ecosystems? Well, it's done throughout a blockchain operating system.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Background

The advances that technology has made in recent years have allowed us to change the way we do things, incorporating new techniques and new protocols to the activities that we have been doing for years. The economic, commerce and health sectors have been among the most benefited, as they have been able to take advantage of new technological developments to boost their growth within the industry and outside the industry to benefit human beings. 

The emergence of cryptocurrencies, such as Bitcoin, has revolutionized the contemporary economy. But not only that, but also all the technology behind them, as it has been used in other fields to take advantage of their intrinsic properties. Thus, there have been developments that allow validating the security and integrity of data through digital certificates or proposals to incorporate this technology to the electoral systems of the communities. The possibilities are endless. 

Blockchain technology can be used in almost any human activity, but it deserves more its application in those where security and privacy are a priority. While it is true that applications developed with this technology have a strong robustness and trust, they are not completely secure, as there will always be a latent risk that threatens the integrity of your data, as well as its efficiency and effectiveness in its execution. To solve this problem, developments have been taking place that go beyond a single application or a set of them. One of them is the possibility of creating an entire operating system that uses blockchain in its execution.   

Before getting into the subject, let's remember some basic concepts. An operating system (OS) is a bunch of software that manages the resources of a computing system and allows the interaction between the person and the machine. They are grouped by type and the most common of them are the Network OS, which has the capability of managing data, users, groups, security, applications, and other networking functions. Although there are many operating systems, the ones that have stood out the most in the market are Windows, MacOS, Linux and Android, to name a few

Initially, all of these “traditionals” OS were hardware based, which means that they provide interoperability between the software and the bare metal of the device. Also needed to be runned on it in order to use it. Modern technologies like virtualization and cloud concepts, in one of its large amounts of benefits, have entered the game. The first one by allowing us to abstract the hardware layer to run specific software even though we have another operating system installed. The second one, enable us to have access to our data anywhere.

Any traditional OS also executes actions based on user commands which can be viewed as a transaction. So, a blockchain operating system (bOS) captures all commands and transactions from a user’s device, but authentication, execution, and recording occur on the blockchain. One of its main characteristics is that it doesn't run on your computer’s hardware but instead operates on the cloud and is virtually-enabled, which means users have the liability to manage blockchains independently of the hardware device, and all of the processed data is runned out of it. A bOS offers benefits of security, privacy and decentralized use of OS, besides facilitating efficiency, easier development and better user experience.

<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/88801826/131191074-b6e45d91-692a-466e-b12b-68cd1dcf7d06.png">
</p>

Since it is a very recent technology, developers are still monitoring the performance of their creations, although some options are already on the market. For example, NYNJA vOS offers a platform that supports a communication layer offering text, voice, video conferencing, and project management tools, a secure payments layer for commercial transactions. Also supports a marketplace for commercial activities. Also the company Quant Network has an interesting approach to this subject with it enterprise OS that interconnects blockchain legacy, current or future platforms and networks.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

### Use case scenario

The current adoption of a blockchain operating system is not yet so large, however the direction in which this technology is moving is heading in that direction. Its architecture is not simple, as it involves the infrastructure to support the platform's own operations, such as the blockchain validation process. However, as a first approach, we could imagine what it would be like to incorporate blockchain technology into an operating system in a basic way.

Imagine a small security company working in conjunction with the government agency charged with monitoring its national defense systems. Of course, security in the execution of their daily functions and operations is an extremely important factor. The information systems they have must be highly secure to prevent access to third parties that could carry out operations that could put the country at risk, and even more so the operating system in which it runs. Or the same example, but in a company in charge of organizing elections in a country that has adopted electronic voting: the security and privacy in its systems must be strong and reliable enough to process the results computations.

In either case, it would be advisable to have a blockchain operating system that supports the entire operation and also offers its benefits. Here, each person working in the company must have an associated computer and all the operations performed in it must be part of a certified blockchain; even a simple command must be recorded. The information generated from all this process should be stored for later consultation, review or incident reporting. This would provide a strong additional control system for the confidence of your customers. 

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133133205-dfe4a97a-05a0-4383-bb83-2494b73e3fcf.png">
</p>

The way in which this could happen is to introduce an intermediate layer among with the user's interface with the platform he uses, which will be attentive to everything the user introduces without altering the native operation of the operating system. This special layer will also be linked to the applications that the user performs, as these will also be registered. Thus, from the most basic operations, such as turning on the system or listing folders in the console, to the most complex ones, will be recorded in the blockchain.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Objectives

Demonstrate that the integration of operating system commands with blockchain is possible by:

1. Developing a command line interface terminal (CLI) to serve as a basis for integrating blockchain functionality.
2. Adapting the blockchain prototype to incorporate the commands into its structure.
3. Integrate both prototypes so that they work in a harmonious and networked way, including several instances of them.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Scope

This is gonna be only a prototype of blockchained operating system command line interface (bCLI) and will only accept simple stringed commands, like `ls`, `dir`, `cls`, `clear` or `pwd`, for example. Will be enabled to interact with members of a network and its number of members will be pre-defined, along with the host name and port numbers. It can be runned on a cross platform, like Windows, MacOS or Linux.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Development

### Architecture

For the purpose of our objective, the idea is to build a prototype application that visually resembles a command line, but internally can actually access the resources of this, behaving as such and being able to perform the same operations as if it were running natively within the operating system.

Therefore, our application to be developed will be based on Electron, which is a multiprocess and multiplatform architecture framework to create desktop applications using web technologies. Electron integrates Node.js to access the system resources in the backend, and the Chromium browser to build the frontend. With this, we are able to use HTML, CSS and Javascript to customize what is displayed to the user. 

Since Electron is in charge of integrating the backend and the frontend in a single architecture, we will have two important processes. The `main` and the `renderer`. The first one controls the state of the application while the second one controls the interface with the user. When an Electron application is executed, the `main` process is launched, which is in charge of accessing the system resources and starting the `renderer` process. An important point to mention is that the `main` process does not have direct access to frontend methods and resources.

Summarizing the above, the `main` process can be seen as a browser, and the `renderer` process as one of its tabs. 

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133124078-a40ec00a-4548-4b29-bd34-b15e5b8453a0.png">
</p>

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

### Initial configuration

First of all, we need to create the visual environment of the application. Based on some [tutorials](https://www.youtube.com/watch?v=vhDBbbMJWoY), reviewing [Electron's official documentation](https://www.electronjs.org/docs/) and consulting forums to solve compilation errors of some modules, I found the way to do it. 

> Modules installed `npm i electron` | `npm i electron-tools` | `npm i node-pty xterm` | `npm i electron-rebuild`

Ignoring the modules folder that is generated by default the installation of each of these, we have then the following files. Their description will help us to understand how the application is built and, later on, to have more clarity when incorporating the functionality of the blockchain concepts and operation in it.  

* `main.js`: the main process of the application. It performs the basic configuration of our application window, such as dimensions and features. It also handles the window events that the application responds to with the user interface.

* `index.js`: the file of our renderer process. This file is associated with the `index.html`, because it is going to be in charge of being attentive to all the events that the user introduces and to establish communication with the `main.js` file to process the information that is generated with them.

* `index.html`: the visual template that is shown to the user directly.

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133125234-1c854823-f770-4596-8269-f65a819a0df5.png">
</p>


The result is a window that looks and behaves like a command line interface terminal. 

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133009605-4ce201f8-6233-41eb-a2f8-150baff5ecff.JPG">
</p>

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

### Parsing the CLI arguments

Once we have the CLI running without any error, the next challenge is how can I process the information that the user enters in it, with the objective of processing them later in a blockchain structure. So far, the default functionality of the application allows us to cache in `index.js` each of the characters we enter and display them at the same time in the window. 

However, from this action or event, we need the complete command, not the characters separately, to be sent to the main process. Recall that the main process does not have direct communication with the rendering process. To do this there is the Inter-Process Communication. With this, `main.js` can access the `ipcMain` module, and `index.js` can access the `ipcRenderer` module, where the former is attentive to the events that happen in the latter or to the information it sends. 

Based on the above, we implemented the following methods to solve this first challenge.

In `index.js`:

 ``` javascript
//Variable to concatenate the keystrokes of the command
var command = "";
var term = new Terminal();
term.open(document.getElementById('terminal'));

//Send command string to the Blockchained process
var input = document.getElementById("terminal");
input.addEventListener("keyup", function (event, data) {
    if (event.keyCode === 13) {
        ipc.send('terminal.command', command);
        //Clean the command variable
        command = "";
    }
});

//Whatever we write on the terminal
term.onData(e => {
    //Get the keystrokes for the commands.
    command = command + e;
    ipc.send("terminal.keystroke", e);
});
```

Here, a variable is declared where the complete command will be stored as the user enters his characters. When it is finished, it will give a line break and, as the process will be attentive to this specific event, it will send the command to the main process. It then empties the variable to be used again when the user enters another command.

In `main.js`:

```javascript
//Recive command from terminal
var ipc = require('electron').ipcMain;
ipc.on('terminal.command', function (event, data) {
        //Further actions
});
```

Here, the main process receives the information from the command to process it for further operations.

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133009462-2eb5b72e-ab83-41d5-a925-22171d6e1361.gif">
</p>

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

### Enhacing the CLI as a REST API

Up to this point, the application can already capture and process the commands the user enters. What to do with them now? The Blockchain prototype we have and how it works is based on objects manipulated through Uniform Resource Identifiers (URIs), with are the formal concept of URLs, helping us to point to a resource over a network. So, a crucial step to be able to incorporate blockchain operations through HTTP in our application is to modify it to work as such. In other words, we need to enable the backend of our application as a REST API.

REST is any interface between systems that uses HTTP to obtain data or generate operations on that data in all possible formats, including JSON. It establishes a client-server protocol for the exchange of information between the backend and the frontend.  

This is achieved by installing [Express](https://expressjs.com/) in our project. I have read this [article](https://medium.com/@keshavagrawal/electron-js-react-js-express-js-b0fb2aa8233f) to get the explanation of how to integrate it in our application made in Electron and I have followed this [tutorial](https://expressjs.com/es/starter/hello-world.html) to get it. 

> Module installed `npm i express --save`

Then, we create a file and name it `app.js`. This file will serve as our request server. We add the following lines:

```javascript
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

In the app variable we assign the server and in the port variable the port through which the communication with the URIs will be established.

Now, somehow we have to relate it with the rendering process. This will be done through a file, which will act as a link between it and the server. We then create the file `renderer.js` and add the following line.

```javascript
let server = require('./app');
```

Finally, in `index.html`, we add the following to link it:

```html
<script src="./renderer.js"></script>
```
When the `renderer.js` file is loaded through `index.html`, the Express server will be generated on port 3000 and simultaneously the application will be ready to handle user requests.

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133127614-7fe2e034-02f8-48ad-a7c7-0a3a7cefe054.png">
</p>

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

### Handling requests

As mentioned above, the blockchain prototype uses objects through URIs. Therefore, we need to establish an HTTP communication channel between the main process in `main.js` and the server in `app.js`. For this purpose, we will use the [Axios module](https://axios-http.com/docs/intro). 

> Module installed `npm i axios`

Once installed, in `main.js` we locate the function where the rendering process command is received and add the following:

```javascript
//POST or GET Request
 axios
      .post/get('URI', {
          //Send o recieve data
      })
      .then(res => {
          /*
           Blockchain operations
          */
      })
      .catch(error => {
          console.error(error)
      }
```
Here, we can use GET or POST requests indicating the corresponding URI with its specific port and the data to be handled. In the response to the request, we will have to insert the instructions related to the blockchain operations. 

To have a greater comfort to manage the URIs, we will install now a utility called [Nodemon](https://www.npmjs.com/package/nodemon) that will serve us to monitor our application and indicate certain information that will be transmitted to the inside of the application for its internal use. 

> Module installed `npm i nodemon`

Once installed, we modify the script section of the `package.json` file, adding the following line:

```javascript
"tty1": "app.js 3000 http://localhost:3000",
```

Note that, within the command arguments, we are also indicating the port. To make the execution of the application more dynamic, that is to say, that I can specify another port without having to modify variables within the code, we will make the server take this argument and assign it to the port variable that was initially static. To do this, we simply modify the following line in `main.js`:

```javascript
const port = process.argv[2];
```
This change will cause the port number to be taken from the number two argument of the command to start the application. 

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

### Leveraging blockchain

We get to the core of the project, the added value that our CLI will have. We need to incorporate the functionalities and goodness of the blockchain with the execution of the application. At this point, all the previous work that has been done was aimed at facilitating its integration with the application. The next step is turn our CLI into a blockchained command line interface (bCLI)

What we want is that, once the application is started and registered over the network, and the user has executed a command, it is added to a blockchain and automatically verified. By now, we will deal with the network issue later. Also, let's leave for now the proof of work, i.e. the business rule of our entire blockchain process, as is. Depending on the degree of infrastructure available, in a future implementation, this hash could be used to identify a specific blockchain operating system or even as a key to develop applications within the same platform. 

As a first step, we added the blockchain prototype code to the project folder, named `blockchain.js`, which contains the base structure to convert the execution of our application into joined block structures. However, before using them, it is necessary to make some modifications for the purpose of the application.

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133127679-8b642aed-b4aa-443a-a47a-428c53838103.png">
</p>

In `Blockchain()` we modify `this.createNewBlock(100,'0','0','0');`

Therefore, each new block that is created, in addition to the other parameters, the last one will correspond to that of the command. 

Similarly, the matching must be performed in the method when a new transaction is created. 

```javascript
Blockchain.prototype.createNewTransaction = function (amount, sender, recipient, command) {
    const newTransaction = {
        //Create a new transaction object
        amount: amount,
        sender: sender,
        recipient: recipient,
        command: command,
        transactionId: uuidv4().split('-').join('')
    };
    return newTransaction;
```
Note that we only add to the function the parameter and inside the transaction information, the command information. 

With the base structure already adequate, now we need to incorporate to our server in `app.js` all the methods corresponding to the operations performed through HTTP requests. For that, we need to install some aditional modules.

> Modules installed `npm i request` | `npm i request-promise`

Finally, in order to use them, we need to implement the requests in the main process. Therefore, in `main.js`, in the function where we receive the command from the render process, we incorporate the lines of code that will provide our CLI with blockchain functionality.

```javascript
//Recive command from terminal
var ipc = require('electron').ipcMain;
ipc.on('terminal.command', function (event, data) {
    //Add a transaction
    axios
        .post(`http://localhost:3000/transaction/broadcast`,
            { "amount": 1, "sender": "user3000@localhost.com", "recipient": "app@server.com", "command": data },
            {
            })
        .then(res => {
            // Mine the transaction
            axios
                .get(`http://localhost:3000/mine`, {
                })
                .then(res => {
                    console.log("Command and validation executed");
                })
                .catch(error => {
                    console.error(error)
                })
        })
        .catch(error => {
            console.error(error)
        });
});
```

Once the command is received, it becomes part of a data structure containing the main transaction information. At first I thought of eliminating the "amount" field, however, it can be useful to sum up how many commands the terminal executed. For now, we statically define the sender as `user3000@localhost.com` and the recipient as `app@server.com`, although the latter might not necessarily be a server but any application or service that the user is using.

The packet is then sent via a POST request via URI to the method that creates a new transaction. If it was successful, it automatically requests a GET request to make the corresponding validation and become part of the blockchain. As you can see, it is an automatic process that is executed every time the user enters a new command in the terminal. 

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

### Networking 

#### Running multiple instances

Up to this point, our bCLI already has enough functionality to run without any problem in a single instance, that is, without being connected to a network of bCLIs. But to reach this last point and run the overall functionality of the prototype, it is first necessary to run several instances of the application. This was the hardest part of the project. 

The idea was simple: run multiple instances of bCLIs, each listening to its own server. Up to this point we already have Express installed, and with Nodemon running, we can pull up as many "servers" as we want along with their ports. However, we have only one Electron application. What we need are several instances of that application running on different servers, each on its own port.

For this last point, Nodemon has a limitation: we can't run both scripts at the same time; either we monitor the server script or the application script. However, we need Nodemon to monitor the server script because that is where it gets the port. The solution was not easy.

The first step to attack the problem was to think of another module to help us. That's how we came up with a module that performs the same process but for applications made in Electron. It is called [Electron Connect](https://www.npmjs.com/package/electron-connect). With this, it is possible to raise a service at the same time that the application is running. 

> Module installed `npm i electron-connect`

Once installed, the client now will be the main application process, in `main.js`, and the server in `app.js`; its like a server embedded in another. In each of the files, we add their respective lines of code so that they behave as such. 

On `main.js`, we need to run the client once the app is ready. So we search the corresponding function that allows it.  

```javascript
app.on("ready", function(){
    createWindow();
    client.create(mainWindow);
});
```

On `app.js`, we add the simple server instruction:

```javascript
var electron = require('electron-connect').server.create();
```

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

#### The 'Port Communication Problem'

So far, when we run the bCLI with Nodemon, it wakes up and automatically creates a service listening to the client on a certain process port thanks to the Electron Connect module. But if we try to run another instance, we get an error, because the port is occupied by the first instance. You would think that you could dynamically add the ports by taking them from the nodemon command argument and specifying them in the client and server instructions. This is possible in `app.js`, but not for `main.js`, because we are using nodemon within the first script.

As we saw in the description of Electron, the application architecture does not facilitate communication between the process and the server, even when using socket communication, IPC or global variables. To solve this problem, the viable solution would be to obtain the listening port through GET requests to the server from the main process and once there assign them to the corresponding instructions. 

As we want this request to be separate from the blockchain process requests, we need to create a small server extension from the original that listens on a specific port (different from the one indicated in nodemon). Therefore, in `app.js`, we add: 

``` javascript
const http = require('http');
const server = http.createServer(app);
server.listen(8080, function () {
    console.log("Port information service")
});
```

And on `main.js`, when the app is launched:

```javascript
const http = require('http');
    http.get('http://localhost:8080/port',(res)=>{
        res.on('data',(d)=>{
           serverPort = d.toString('utf8');
        })
    })
```

As we have already obtained the port, it only remains to place it in its respective locations. In order to be dynamic and not to be repeated in the instances, we will add five to the port number received from the argument, being a different one each time it is executed. 

On `main.js`, we add the client port:

```javascript
const http = require('http');
    http.get('http://localhost:8080/port',(res)=>{
        res.on('data',(d)=>{
           serverPort = d.toString('utf8');
        })
    })
    client.create(mainWindow, {port:parseInt(serverPort)+5});
```

On `app.js`, add the server port:

```javascript
var electron = require('electron-connect').server.create({port:parseInt(serverPort)+5});
```

With these instructions, we can now tell the electron-connect service to run on a different port each time another instance of the application is launched. 

However, now we face the same port traffic problem but in the small server we created for the communication between the process and the server: if two instances are executed, the second one will not be able to get the port information because the first one is occupying the port. What we need is that once the execution of an instance is started and the request is launched, the process receives that data, and the server, after a certain time, closes the connection and releases the port, thus allowing another instance to be executed and can occupy the port to request the information. 

For this, a timer was added to control the service. After 5 seconds of execution, it closes. This is added on the request part on the server `app.js`:

```javascript
app.get('/port', (req, res) => {
    //Counter to stop the service, free the port and allow another instance to use it
    (function countDown(counter) {
        while (counter > 0) {
            console.log(counter)
            return setTimeout(countDown, 1000, counter - 1)
        } server.close(); console.log("Port server closed"):
    })(5);//After five seconds, the port is closed
});
```
The only thing left now is to update all the static port asignation and the HTTP requests of the main process to dynamically respond to the port stored in the `serverPort` variable, for example this request:

```javascript
.post(`http://localhost:${serverPort}/transaction/broadcast`)
```

So far, by now and with its limitations, we can finally run as many instances as we specify using nodemon commands. 

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

#### Broadcasting commands

Lastly, what we want is that, once the bCLI is launched, it connects to the network of the others available bCLIs. To do this, we add in an array with the available instances (in the future, the list can be consulted directly from the system files, for example, in UNIX/Linux OS, from the `/etc/hosts` file) and iterate the reigistration with the network members excluding itself. We do this on the process file `main.js`, when the app is ready, at the same time when we get the port information from the server file.

```javascript
//Register on a network at launch
var fullNetwork = [3000, 3001];
var currentNetwork = fullNetwork.filter(function (x) { return x !== parseInt(serverPort) })
for (let networkNode of currentNetwork) {
    axios
        .post(`http://localhost:${serverPort}/register-node`,
            { "newNodeUrl": "http://localhost:" + networkNode },
            {})
        .then(res => {
            console.log("tty registered")
        })
        .catch(error => {
            console.error("error")
        });
}            
```

Then, when the bCLI is up, we access a GET request to make the connections with the network members. With the latter, everything we do and the transactions/commands we execute inside the terminal will be registered in the chain and sent to all the members of the network that are connected. 

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## View

To obtain a more user-friendly view of the data, we will add to the frontend of our project the template provided for the original prototype. This new view will be used for data audit type review, so we will call it Audit Page. 

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133298975-2d4fa221-79c5-4610-ab5e-5b9776819bf3.png">
</p>

The purpose of this view is to inspect the number of commands that each user has performed through its search.

What we want is to be shown who executed it, to which service, the number and the command in question.  Although we have a great base to be able to display such information, it is necessary to make some small changes:

First we must obtain the information from the source, that is, from the `blockchain.js` file via `app.js`. The balance is already given, only that, as each transaction is assigned a value of 1, we need the balance to be positive. On the other hand, we are also interested in the command of that transaction. All these instructions are in the `getAddressData` method of the prototype. We apply the following changes.

```javascript
Blockchain.prototype.getAddressData = function (address) {
/*
Previous lines of code
*/
    //upon commpletion, we've loaded up the array. Now we have to figure out the balance and command for this address
    let balance = 0; //would you do this for you bank? 
    let command = ""; //which command?
    addressTransactions.forEach(transaction => { //also get the command also
        if (transaction.recipient === address) {balance += transaction.amount; command= transaction.command;}
        else if (transaction.sender === address) balance -= transaction.amount;
    });

    return {
        addressTransactions: addressTransactions,
        addressBalance: Math.abs(balance),//To obtain a positive number of commands
        addressCommand :command //Get the command finally
    };
}
```

Here we declare the variable `command` and in the cycle that is retrieving the total of the transaction, we assign the command. Later we return its value in the `return` of the function. To make the balance positive, we simply set it as an absolute value.
 
Finally, in the main file of the template, we add the information by placing an additional column that is displayed when querying the user address information, and there we insert the reference to the transaction command. We made some other adjustments to customize the page a little more.

<p align="center">
  <img src="https://user-images.githubusercontent.com/88801826/133305572-06eff88a-7a58-46c3-99c4-e3620221b5b2.jpg">
</p>

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Execution

### Tests

Although tests were performed during the development of the application, the most representative tests that contributed to the outcome of the project are documented below:

#### Parcial

During the development of the bCLI, isolated tests were carried out for the insertion of data in the block structures and their validation, all through URIs and with the help of a software specialized in API requests called Postman. We raise the application with the command `npm run tty0`, which has associated the instructions `nodemon app.js 3000 http://localhost:3000`, which means that this terminal will be operating on port 3000 of the server.

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133302471-78ae031f-6dfa-494d-a8a0-bc0533cc66fe.JPG">
</p>

Once the data has been sent, we check the block through its URI to verify that it is indeed there. In these isolated tests we did not yet have a connection to the terminal network, as the objective was to check that the methods and their calls worked correctly.

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133302594-8354ab62-d7ba-48e6-aa9b-578a021fb180.gif">
</p>
<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

#### Full

In this test our application is already finished. We raise two instances by executing the commands:

* `npm run tty0` associated with ` nodemon app.js 3000 http://localhost:3000`
* `npm run tty1` associated with ` nodemon app.js 3001 http://localhost:3001`

For the two terminals to be raised correctly it is necessary to wait a few seconds after raising the first one, since it is necessary for the server port to become free in order to be able to attend the request of the second instance. 

Once this is done, either on terminal on the port 3000 or terminal on the port 3001, a command is executed. Postman is no longer necessary because the methods and calls are already within the internal structure of the application. Lets hit this test on port 3001.

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133303453-c5a542ae-28d8-4d11-a819-26170c693cf6.gif">
</p>

We then open a browser to check that the transaction was successful.

<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/88801826/133303248-ffbf2a07-4389-426c-81f8-c193ddd90d7c.gif">
</p>

If we check both blockchains, we can see that indeed everything matches and contain the same information from each other (except for the timestamp, as the instances of the application were up not at the same time). Let's also note that the user who executed the command is now `user3001`.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

### Results

With the tests performed, we were able to verify that the development of our application was completed for the purposes stated in the objectives and scope of the project. We were able to emulate a terminal using web technologies, such as Electron with Node.js. 

We were able to adapt the Blockchain prototype to store the command and application's own information. The integration of several instances also represented a challenge, but fortunately it could be completed by integrating basic concepts of web requests. We even managed to customize a web view for the information.

In the end, the developed application, although it only allows the user to execute very basic commands and only a few characters, is able to catch and process them, serving as a demonstration to explain the operation of Blockchain technology and provide an overview of the full scope that can be achieved if its application is continued in this direction. 

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

#### Future enhacements

Of course, development time limited us as to how much functionality, both the prototype and the application itself, could be added. Some of them that we identified and that could be implemented for boosting this applicartion in the future could be:

* Storing the information in a database: whether relational or not, storing all the transactions that the user performs so that it becomes part of a permanent record and not only remains in local memory can be highly beneficial, as it would allow us to have a history of information that would allow us to prepare activity reports or even analysis to improve the development of the application.

* Information views: in addition to a database, it would also be very useful to create dynamic views of the information to be consulted in real time. 

* Query files: the information stored in the database could be directly processed to create basic downloadable query files.

* Obtain information directly from the operating system: this would be useful, for example, to set up the terminal network. Instead of manually adding the network members (which we did in our application but via ports), the application could obtain such data directly from the operating system files, as is the case of the `hosts` file, and process them in the Blockchain structure. 

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Oportunities and challenges

In recent years, the issue of data security and privacy has become very important. It is so important that governments have implemented specific policies for its control and management. Platforms are required to protect the integrity of users' information and to provide them with security certainty. 

The digital commerce boom has also been impressive in recent decades. Today, most transactions are carried out digitally, so the applications and platforms used for this purpose must have excellent security for its operation, in addition to providing efficient management for both customers and companies.

While a blockchain operating system would offer many unequivocal advantages in terms of these last points, the truth is that its implementation and integration would not be so easy for three reasons: the change culture, the cost and the market.

We are currently so used to traditional operating systems that adopting another one would be somewhat uncomfortable, and many of the productive applications we use today would also have to be migrated to the new platform in order to continue to be used. And even if the functionality of the blockchain operating system were the same as any other traditional operating system, we would still have reservations about its security and stability, especially for applications with a large-scale deployment.

An important and paradoxical point at this point is who can access the system's transaction information, i.e., the privacy of the user's actions. The default system would offer a great level of detail of the movements made. Is this valid? There are conflicting opinions: on the one hand, there are those who defend data transparency, on the other hand there are those who fight for strict privacy. It is a question whose answer will undoubtedly generate a great deal of debate on this point. My comment would be in relation to good data management for purposes previously established and agreed upon by all parties involved; it is proven that Blockchain technology does offer data protection through highly secure and effective algorithms.

The second factor is cost. The infrastructure required to support the operations of a blockchain operating system is very expensive, as supporting all its complex operations requires a lot of processing power and storage. Not all companies could afford the transition. Moreover, it also leads to a lot of investment in addition to the monetary one. To learn a new operating system requires a knowledge base deep enough to give certainty about its correct operation, and this, paradoxically, happens when users are completely immersed in it without knowing enough yet. Human resources and their training remain essential at this point.

And finally there is the market. Blockchain technology has fortunately been permeating more sectors of human activities. However, at the moment it is only concentrated in two main areas: commercial and economic. For the blockchain operating system to have a wider reach, it would require the adoption of more sectors, such as healthcare, government, etc. Currently, the opportunity niche of this new operating system is very small compared to the deployment of the others. 

For an operating system to be successful in economic terms, it needs to be adopted by the majority market and its cost must not be too high; for it to be successful in functional terms, it requires users who have gone through the change culture and support its use. 

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Conclusions

As we can see, blockchain operating systems offer us a full bunch of software by taking advantage of all of the overall blockchain concepts, allowing the integration of the current and future Blockchain Ecosystem on a single operating system platform. The efficiency, reliability, privacy and security are key values of this highly new approach of interacting with computer systems.

The implementation of this technology in a current operating system is not simple, since it would have to be integrated with its kernel to record the tasks that users perform in it. On the other hand, its complete development is quite complex, since new technologies have to be integrated with the basic principles to create a completely new operating logic. In both cases, a large investment of resources is required. However, this first theoretical and practical approach was very compelling to learn the basics of Blockchain concepts and its integration with the entire technological ecosystem that surrounds it. 

The contemporary trends of commerce will force us to adapt new ways to do things, but we must be cautious of how our data is managed by understanding, even a little, the way all of it works. It’s clear that this is just a very important checkpoint in the race to develop highly advanced technology that will capitalize and empower the digital world towards revolutionary horizons.

<a href="#Table-of-contents"><p align="right">Return to the top</p></a>

## Multimedia

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
