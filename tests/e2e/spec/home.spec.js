describe('home', function () {
    // var homePage;
    // beforeEach(function(){
    //     browser.get('#/home');
    // });

    it('should contains header text', function () {
        browser.get('http://localhost:3000/#/home');
        var message = element(by.binding('homeCtrl.title')).getText();
        expect(message).toContain('Home');
    });

})