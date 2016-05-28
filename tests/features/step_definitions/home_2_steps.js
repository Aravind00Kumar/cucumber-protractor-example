(function () {
    'use strict'

    function Steps() {

        this.Given(/^I am on the homepage$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });


        this.Then(/^I should see a title on it$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            callback(null, 'pending');
        });

    }


    module.exports = Steps;


})();