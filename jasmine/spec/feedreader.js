'use strict';

/*global $, describe, it, expect, allFeeds, beforeEach, loadFeed */

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the RSS feeds application.
 */

/* I'm placing all of my tests within the $() function,
 * since some of these tests may require DOM elements. I want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have an URL defined and URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });

        /* Loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have an name defined and name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });

    describe('The menu', function() {
        /* Ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            var body = document.getElementsByTagName('body')[0];
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

         /* Ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('menu is displayed or hided when clicked', function() {
            var body = document.getElementsByTagName('body')[0];
            // Show menu
            $('.menu-icon-link').click();
            expect(body.classList.contains('menu-hidden')).not.toBe(true);
            // Hide menu
            $('.menu-icon-link').click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
         });
    });

    describe('Initial Entries', function() {
        /* Ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('has loaded at least one .entry in the the .feed container', function(done) {
            var entries = document.querySelectorAll('.feed .entry-link');
            expect(entries.length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        /* Ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var firstEntryTitleFirstFeed,
            firstEntryTitleSecondFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                firstEntryTitleFirstFeed = document.querySelector('.feed .entry-link h2').textContent;
                loadFeed(1, function() {
                    firstEntryTitleSecondFeed = document.querySelector('.feed .entry-link h2').textContent;
                    done();
                });
            });
        });

        it('has changed the content when a new feed is loaded', function(done) {
            expect(firstEntryTitleFirstFeed).not.toEqual(firstEntryTitleSecondFeed);
            done();
        });
    });
}());
