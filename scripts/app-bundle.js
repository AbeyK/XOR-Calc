define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.message = 'XOR CALCULATOR';
    }

    App.prototype.xor = function xor(str) {
      var total;
      var tempDigit = '';
      str = str + " ";
      for (var i = 0; i < str.length; i++) {
        if (!isNaN(str.charAt(i)) & str.charAt(i) != " ") {
          tempDigit += str.charAt(i);
        } else {
          if (total != null) {
            total ^= Number(tempDigit);
          } else {
            total = Number(tempDigit);
          }
          tempDigit = '';
        }
      }
      alert(total);
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1><div><input type=\"text\" value.bind=\"email\"><br><br><button click.delegate=\"xor(email)\">XOR!</button></div></template>"; });
//# sourceMappingURL=app-bundle.js.map