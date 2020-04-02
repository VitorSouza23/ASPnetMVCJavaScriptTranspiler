"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function teste() {
    console.log(Array.from(arguments));
}

var Teste = (function () {
    function Teste() {
        _classCallCheck(this, Teste);

        this._juliana = "Juliana";
    }

    _createClass(Teste, [{
        key: "cadeMeuOculus",
        value: function cadeMeuOculus() {
            console.log(this._juliana + " vc viu meu óculos?");
        }
    }]);

    return Teste;
})();

$(document).ready(function (e) {
    console.log("deu certo");
    teste(1, 2, 3);

    var t = new Teste();
    t.cadeMeuOculus();
});

