describe("Babble", function () {
    var Babble = require('../models/Babble');

    var babble;

    beforeAll(function () {
        babble = new Babble();
    });

    var numOfMessages;

    it("should be abele to  get Messages", function () {
        numOfMessages = babble.getMessages();
        expect(numOfMessages.length).toBeGreaterThan(0);
    });

    it("should be able to post Messages", function () {
        babble.postMessage();
        setTimeout(function () {
            var messages = babble.getMessages();
            expect(messages.length).toBe(numOfMessages.length + 1);
        }, 100);

    });


    it("should be able to delete Messages", function () {
        babble.deleteMessage(1);
        setTimeout(function () {
            var messages = babble.getMessages();
            expect(messages.length).toBe(numOfMessages.length - 1);
        }, 100);

    });

});
