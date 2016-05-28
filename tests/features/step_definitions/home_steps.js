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
            element(by.tagName('nav')).getText().then(function (name) {
                callback();
            });
        });

        this.Then(/^I should see a (.*) link at (.*)$/, function (title, count, callback) {
            var li = browser.findElement(by.xpath('/html/body/nav/a[' + count + ']'));
            li.getText().then(function (text) {
                if (text === title)
                    callback();
            });
        });
    }
    module.exports = Steps;

})();