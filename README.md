RSS Feeds Reader
================

This project is part of the [Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). In this project, I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, he has already included [Jasmine](http://jasmine.github.io/) and even started writing his first test suite! Unfortunately, he decided to move on to start his own company and I was left with an application with an incomplete test suite.

## Why testing?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

### Why it's so important?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

## What I learned?

I leaned how to use Jasmine to write a number of tests against a pre-existing application. These test the underlying business logic of the application as well as the event handling and DOM manipulation.

# What has been tested?

To finalize the project, I added tests for the following components :

* RSS Feeds
    * Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
    * Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
* The Menu
    * Test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
    * Test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
* Initial Entries
    * Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
* New Feed Selection
    * Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.

# Demo

[Try it!](http://rachkoud.github.io/frontend-nanodegree-feedreader/index.html)

At the bottom of the app, you should see that all the above tests have passed.

# Quickstart

### Install
This will run the server on http://localhost:1111/ from the root directory

    npm install
    gulp

### Development

    gulp

This will run the webserver from the root directory with livereload

### License

`RSS Feeds Reader` is a public domain work, dedicated using
[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Feel free to do
whatever you want with it.