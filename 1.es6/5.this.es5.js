'use strict';

var person = {
    name: 'zfpx',
    getName: function getName() {
        var _this = this;
        setTimeout(function () {
            console.log(_this);
        }, 1000);
    }
};
person.getName();
