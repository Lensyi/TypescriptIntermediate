"use strict";
var CompassDirection;
(function (CompassDirection) {
    CompassDirection[CompassDirection["North"] = 0] = "North";
    CompassDirection[CompassDirection["East"] = 1] = "East";
    CompassDirection[CompassDirection["South"] = 2] = "South";
    CompassDirection[CompassDirection["West"] = 3] = "West";
})(CompassDirection || (CompassDirection = {}));
//console.log(CompassDirection.North)
var Statuscodes;
(function (Statuscodes) {
    Statuscodes[Statuscodes["OK"] = 200] = "OK";
    Statuscodes[Statuscodes["BadRequest"] = 400] = "BadRequest";
    Statuscodes[Statuscodes["Unauthorized"] = 401] = "Unauthorized";
    Statuscodes[Statuscodes["PaymentRequired"] = 402] = "PaymentRequired";
    Statuscodes[Statuscodes["Forbidden"] = 403] = "Forbidden";
    Statuscodes[Statuscodes["NotFound"] = 404] = "NotFound";
})(Statuscodes || (Statuscodes = {}));
var startingDirection = CompassDirection.East;
var currentStatus = Statuscodes.OK;
var okNumber = Statuscodes.OK;
var okNumberIndex = Statuscodes["OK"];
var stringBadRequest = Statuscodes[400];
var GamePadInput;
(function (GamePadInput) {
    GamePadInput["Up"] = "UP";
    GamePadInput["Down"] = "DOWN";
    GamePadInput["Left"] = "LEFT";
    GamePadInput["Right"] = "RIGHT";
})(GamePadInput || (GamePadInput = {}));
var message1 = "Hello";
var message2;
var message3 = "Hello";
var message4;
message4 = "test";
message4 = 5;
// console.log(typeof(message1))
// console.log(typeof(message2))
// console.log(typeof(message3))
// console.log(typeof(message4))
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        if (message === void 0) { message = "Default value"; }
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log(this.greeting);
    };
    return Greeter;
}());
var greet = new Greeter("test");
// greet.greet();
console.log(greet.greeting);
var _imagedim = {
    width: "200px",
    height: "300px"
};
console.log(_imagedim.height);
var ob = {
    id: "123",
    pages: 123,
    companyID: "123a"
};
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sum(2, 2, 6, 10, 5));
//# sourceMappingURL=app.js.map