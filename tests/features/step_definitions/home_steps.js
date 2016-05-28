(function () {
    'use strict'

    function Steps() {


        this.Given(/^I am on the homepage$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            browser.get('http://localhost:3000/#/home');
            callback();
        });


        this.Then(/^I should see navigation bar$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });


        this.Then(/^I should see a "([^"]*)" link$/, function (arg1, callback) {
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });


        this.Then(/^I should see a "([^"]*)" link$/, function (arg1, callback) {
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });

    }


    module.exports = Steps;


})();