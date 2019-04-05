# Just Express
### (with a bunch of node and http). In detail.
***

***
### What you'll learn
***
+ Express. That's (mostly) all we cover so when you finish, you'll know it!
+ Set up an Express server that can do anything Express can do!
+ Operate that Express Server as a REST API
+ Use that Express Server to render your front-end web pages with EJS, PUG, & handlebars
+ Understand the basics of HTTP and the request/response cycle

***
### 01. Introduction
***
+ Overview of course

***
### 02. Environment Setup (skip if you have node installed already)
***
+ Simple, standard npm setup

***
### 03. Pre-Express
***
+ Get good at Express as a lead in into socket:io, mongo, react, etc...
+ Inner workings of HTTP
  * TCP = Reliable, 3 way handshake, packets in order
  * UDP = Fast, data shouts with or without interaction on other end
+ Make a NodeJS webserver
+ Layers of a Packet
  * Application // HTTP, FTP, SSH, SMTP
  * Transport // TCP/UDP
  * Network // IP
  * Link // Wi-Fi, Ethernet
  * Physical // Underground Cables
+ Use TCP and IP together
+ npm install nodemon ro auto refresh node server
  * terminal command becomes nodemon as opposed to node

***
### 04. Express 101
***
+ What is Express and why should I care
  * Node js is the language
  * Express is a node framework
+ Enter Express... the basics
+ Basic Routing in Express
+ Serving Static Files in Express

***
### 05. Express 201 - Middleware and Rendering
***
+ Middleware. (It's all Express really is.)
  * Express = req ---> middleware ---> res
  * Middleware is ANY function that has access to req, res and next object.
+ Putting on your Express helmet, and other awesome Express middleware
+ Responding with JSON
+ REVIEW
+ Chose your weapon - API or server side rendering
  * SSR // Wikipedia, etc.. use PHP and SQL to builds entire/fresh HTML, CSS, JS site on every request // res.render
  * API // Facebook, etc... Loads base on 1st load, then the single page app fills JSON in on each smaller ajax request // res.json
+ Wiring up Express with a view engine
+ Rendering in Express (with EJS)
+ Rendering Engine Option 2. Handlebars
+ Rendering Engine Option 3 PugJade

***
### 06. Express 301 - Req & Res revisited, the router, and the express generator
***
+ Getting data from the request object - forms and cookies
+ Getting data from the query string
+ Getting data from params (URL wildcards) - req.params and req.param()
+ Sending files, and headers already sent!
+ The Router
  * Modularize into files
+ The Express Generator
  * Scaffolding
  * sudo npm install express-generator -g
  * type express nameYouWant
    * type express nameYouWant --view=ejs (switches view engine to ejs)
  * nodemon to fire it up
  * add helmet
+ STOP - Checklist Update and Short Review
+ Don't fear the HTTP headers!!

***
### 07. Starter Project - Movie Fan App
***
***
### 08. Project - Building an API
***
***
### 09. Supplemental DB connection
***

***
### Provided API Data
***
+ API key: 1fb720b97cc13e580c2c35e1138f90f8
  * If you want to get your own (or this stops working), sign up here: https://www.themoviedb.org/documentation/api?language=en-US
  * API Docs: https://developers.themoviedb.org/3/getting-started/introduction
  * Starter files: https://github.com/ridiculous-inc/justExpress/tree/master/starterFiles/movieAppProj1
+ API vars:
  * const apiBaseUrl = 'http://api.themoviedb.org/3';
  * const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
  * const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';