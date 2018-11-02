(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)
var $app_template$ = __webpack_require__(35)
var $app_style$ = __webpack_require__(36)
var $app_script$ = __webpack_require__(37)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = {
  "type": "tabs",
  "attr": {},
  "classList": [
    "page-index"
  ],
  "children": [
    {
      "type": "tab-content",
      "attr": {},
      "children": [
        {
          "type": "topic-list",
          "attr": {}
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "topic-list",
              "attr": {
                "type": "good"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "tab3"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "tab-bar",
      "attr": {},
      "classList": [
        "tab-bar"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "全部"
          },
          "classList": [
            "tab-bar-item"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "精华"
          },
          "classList": [
            "tab-bar-item"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "更多"
          },
          "classList": [
            "tab-bar-item"
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = {
  ".page-index .tab-bar": {
    "backgroundColor": "#bdc3c7",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "page-index"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        }
      ]
    }
  },
  ".page-index .tab-bar .tab-bar-item": {
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "page-index"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar-item"
        }
      ]
    }
  }
}

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(39)
var $app_style$ = __webpack_require__(40)
var $app_script$ = __webpack_require__(41)

$app_define$('@app-component/topic-list', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = {
  "type": "list",
  "attr": {},
  "classList": [
    "topic-list"
  ],
  "children": [
    {
      "type": "list-item",
      "attr": {
        "type": "topic"
      },
      "classList": [
        "topic-item"
      ],
      "repeat": function () {return this.topicList},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "item-top"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.getBadgeText(this.$item)}
              },
              "classList": function () {return ['badge', this.$item.top?'badge-stick':'badge-tab']}
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "item-top-text"
              ],
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.$item.reply_count}
                  },
                  "classList": [
                    "reply-count"
                  ]
                },
                {
                  "type": "span",
                  "attr": {
                    "value": " / "
                  },
                  "classList": [
                    "separator"
                  ]
                },
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.$item.visit_count}
                  }
                },
                {
                  "type": "span",
                  "attr": {
                    "value": " • "
                  },
                  "classList": [
                    "separator"
                  ]
                },
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.$item.date.human}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$item.title}
          },
          "classList": [
            "title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$item.content}
          },
          "classList": [
            "content"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "item-bottom"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.$item.author.avatar_url}
                  },
                  "classList": [
                    "avatar"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.author.loginname}
                  },
                  "classList": [
                    "username"
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return '创建于: ' + (this.$item.date.str)}
              },
              "classList": [
                "created-at"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = {
  ".topic-list": {
    "backgroundColor": "#e5e7e9",
    "fontSize": "32px",
    "color": "#bdc3c7"
  },
  ".topic-list .topic-item": {
    "flexDirection": "column",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "marginBottom": "20px",
    "backgroundColor": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        }
      ]
    }
  },
  ".topic-list .topic-item .item-top": {
    "justifyContent": "space-between",
    "marginBottom": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-top"
        }
      ]
    }
  },
  ".topic-list .topic-item .badge": {
    "paddingTop": "2px",
    "paddingRight": "6px",
    "paddingBottom": "2px",
    "paddingLeft": "6px",
    "borderRadius": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "badge"
        }
      ]
    },
    "fontSize": "24px"
  },
  ".topic-list .topic-item .badge-stick": {
    "color": "#ffffff",
    "backgroundColor": "#80bd01",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "badge-stick"
        }
      ]
    }
  },
  ".topic-list .topic-item .badge-tab": {
    "color": "#8d8d8d",
    "backgroundColor": "#e5e7e9",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "badge-tab"
        }
      ]
    }
  },
  ".topic-list .topic-item .item-top-text": {
    "fontSize": "24px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-top-text"
        }
      ]
    }
  },
  ".topic-list .topic-item .reply-count": {
    "color": "#80bd01",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "reply-count"
        }
      ]
    }
  },
  ".topic-list .topic-item .title": {
    "color": "#333333",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        }
      ]
    }
  },
  ".topic-list .topic-item .content": {
    "lines": 4,
    "textOverflow": "ellipsis",
    "paddingBottom": "30px",
    "marginTop": "10px",
    "marginRight": "0px",
    "marginBottom": "10px",
    "marginLeft": "0px",
    "borderBottomWidth": "1px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#e0e0e0",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        }
      ]
    }
  },
  ".topic-list .topic-item .item-bottom": {
    "height": "40px",
    "justifyContent": "space-between",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-bottom"
        }
      ]
    }
  },
  ".topic-list .topic-item .avatar": {
    "height": "100%",
    "borderRadius": "20px",
    "marginRight": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "avatar"
        }
      ]
    }
  },
  ".topic-list .topic-item .username": {
    "color": "#333333",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "username"
        }
      ]
    },
    "fontSize": "24px"
  },
  ".topic-list .topic-item .created-at": {
    "fontSize": "24px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "topic-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "created-at"
        }
      ]
    }
  }
}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _topic = __webpack_require__(42);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var newLineRE = /\n+|\r\n+|\r+/g;

exports.default = {
  props: {
    type: String,
    default: ''
  },

  data: function data() {
    return {
      topicList: [],
      page: 1
    };
  },
  onInit: function onInit() {
    this._getTopicList();
  },
  getBadgeText: function getBadgeText(item) {
    if (item.top) return '置顶';
    switch (item.tab) {
      case 'good':
        return '精华';
      case 'share':
        return '分享';
      case 'ask':
        return '问答';
      default:
        return '未知';
    }
  },
  _getTopicList: function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var list;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              list = void 0;
              _context.prev = 1;
              _context.next = 4;
              return (0, _topic.getTopicList)({ page: this.page, tab: this.type });

            case 4:
              list = _context.sent;
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](1);

              prompt.showToast({ message: '获取主题出错' });
              return _context.abrupt('return', console.error(_context.t0));

            case 11:

              list.forEach(function (item) {
                item.date = _.formatDate(item.create_at, true);
                item.content = item.content.slice(0, 200).replace(newLineRE, '');
                delete item.create_at;
              });

              console.log(list);

              this.topicList = this.topicList.concat(list);
              this.page += 1;

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 7]]);
    }));

    function _getTopicList() {
      return _ref.apply(this, arguments);
    }

    return _getTopicList;
  }()
};}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShareTopicList = exports.getAskTopicList = exports.getJobTopicList = exports.getGoodTopicList = exports.getTopicList = undefined;

var _fetch = __webpack_require__(43);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 全部
function getTopicList() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var page = options.page || 1;
  var tab = options.tab || '';
  var limit = options.limit || 20;
  var mdrender = options.mdrender ? options.mdrender : false;

  return (0, _fetch2.default)({
    method: 'GET',
    url: '/topics',
    data: {
      page: page,
      tab: tab,
      limit: limit,
      mdrender: mdrender
    }
  });
}

// 精华
function getGoodTopicList() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options.tab = 'good';
  return getTopicList(options);
}

// 招聘
function getJobTopicList() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options.tab = 'job';
  return getTopicList(options);
}

// 问答
function getAskTopicList() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options.tab = 'ask';
  return getTopicList(options);
}

// 分享
function getShareTopicList() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options.tab = 'share';
  return getTopicList(options);
}

exports.getTopicList = getTopicList;
exports.getGoodTopicList = getGoodTopicList;
exports.getJobTopicList = getJobTopicList;
exports.getAskTopicList = getAskTopicList;
exports.getShareTopicList = getShareTopicList;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _fetch;
var baseURL = 'https://cnodejs.org/api/v1';

function _fetch(options) {
  return new Promise(function (resolve, reject) {
    var o = {
      success: function success(res) {
        res = JSON.parse(res.data);
        if (!res.data) {
          return reject(res.msg || '服务器出错');
        }
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
      },

      header: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    };

    options.url = baseURL + options.url;

    fetch.fetch(Object.assign(options, o));
  });
}

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map