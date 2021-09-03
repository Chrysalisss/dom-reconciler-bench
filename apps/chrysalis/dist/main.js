/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/chrysalis.js/dist/chrysalis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/chrysalis.js/dist/chrysalis.esm.js ***!
  \*********************************************************/
/*! exports provided: h, render, createRef, Fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return T; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return Z; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRef\", function() { return q; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fragment\", function() { return z; });\n/**\n * Chrysalis v1.0.9-beta\n * Casper Søkol, 2020\n * Distributed under the MIT license\n */\n\nvar e=document,r=null,n={},t=\"function\",i=\"render\",o=\"string\",f=\"state\",a=\"props\",u=\"parentNode\",s=\"length\",v=\"children\",c=\"childNodes\",l=Array.isArray,p=\"push\",d=\"insertBefore\",y=\"oncreate\",h=\"ondestroy\",m=\"onremove\",b=\"onupdate\",g=\"oninit\",$=\"shouldUpdate\",w=\"forceUpdate\";function x(e,r){for(var n in r)e[n]=r[n];return e}function A(e){return\"object\"!=typeof e}function N(e){if(e&&(e=e[a]))return e.key}function C(e,r,n){n[m]&&n[m](),e.removeChild(r),n[h]&&n[h]()}function E(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}var k,L,S=0;function T(e,n){for(var i,o=[],f=[],a=arguments,u=a[s];u-- >2;)o[p](a[u]);for(;o[s]>0;)if(l(i=o.pop()))for(var c=i[s];c-- >0;)o[p](i[c]);else!1===i||!0===i||i==r||f[p](i);if(n=n||{},typeof e==t)return f[s]&&(n[v]=f),e(n);if(\"object\"==typeof e){var d=x({},e);return d.props=n,f[s]&&(n[v]=f),d.id=S,S++,d}return{n:e,props:n,childNodes:f}}function j(e){this.d[e.type](e)}function U(e,i,f,a){for(var u in E(i,f)){var s=i[u],c=f[u];if(\"key\"==u||u==v);else if(\"style\"==u)if(typeof value==o)e[u].cssText=s;else for(var l in typeof c==o&&(c=e[u].cssText=\"\"),x(s,c))(s||n)[l]==(c||n)[l]||e[u].setProperty(\"-\"==l[0]&&\"-\"==l[1]?l:l.replace(/[A-Z]/g,\"-$&\"),s&&l in s?\"number\"==typeof s[l]?s[l]+\"px\":s[l]:\"\");else\"o\"==u[0]&&\"n\"==u[1]?((e.d||(e.d={}))[u=u.substr(2).toLowerCase()]=s)?c||e.addEventListener(u,j):e.removeEventListener(u,j):\"ref\"==u?typeof s==t?s(e):s.current=e:!a&&\"list\"!=u&&u in e?e[u]=s==r?\"\":s:s==r||!1===s?e.removeAttribute(u):e.setAttribute(u,s)}}function B(r,o,v){function d(e,r,n){for(var t=n,i=r[s];t<i;t++)e.appendChild(B(r[t],o,v))}if(l(r)){var h=B(r[0]);return d(h,r,1),h}if(A(r))return e.createTextNode(r);if(r[i])return r[y]&&o[p](r[y].bind(r)),function(e,r){e[g]&&e[g](e[a]);var o=e[i](e[f],e[a]);return x(e,{setState:function(r,i){typeof r==t&&(r=r(e[f],e[a]));var o,u,s=E(e[f],r);e[b]&&(o=E(n,e[f]),u=E(n,e[a])),e[$]?e[$](s,i)&&(e[a]=i,e[f]=s,e[w](o,u,!0)):(e[f]=s,e[w](o,u,!0))},destroy:function(){C(e.$el[u],e.$el,e)},v:o,$el:B(o,r)}),e[w]=function(r,n,t){P(e.$el[u],e.$el,e.v,e.v=e[i](e[f],e[a])),t&&e[b]&&e[b](r,n)},e.$el}(r,o);var m=(v=v||\"svg\"==r.n)?e.createElementNS(\"http://www.w3.org/2000/svg\",r.n,{is:r[a].is}):e.createElement(r.n,{is:r[a].is});return U(m,r[a],n,v),d(m,r[c],0),m}function P(e,t,i,o,f){var u=[];if(o===i);else if(i!=r&&A(i)&&A(o)&&i!=o)t.data=o;else if(i==r)t=e[d](B(o,u,f),t);else if(i.id&&i.id==o.id){var v;if(function(e,r){for(var n in e)if(e[n]!==r[n])return!0;for(var n in r)if(e[n]!==r[n])return!0}(i[a],o[a]))i[b]&&(v=E(i[a],o[a])),i.setState(n,v)}else if(o.n&&o.n===i.n){f=f||\"svg\"==o.n,U(t,i[a],o[a],f);for(var l=o[c][s],p=i[c][s],y={},h=[],m={},g=0;g<p;g++){var $=t[c][g];h[g]=$;var w=i[c][g],x=N(w);r!=x&&(y[x]=[$,w])}for(var k=0,L=0;L<l;){var S=h[k],T=i[c][k],j=o[c][L],Z=N(T);if(m[Z])k++;else{var q=N(j),z=y[q]||[];r==q?(r==Z&&(P(t,S,T,j,f),L++),k++):(Z===q?(P(t,z[0],z[1],j,f),k++):z[0]?(t[d](z[0],S),P(t,z[0],z[1],j,f)):P(t,S,r,j,f),L++,m[q]=j)}}for(;k<p;){var D=i[c][k],F=N(D);r==F&&C(t,h[k],D),k++}for(var G in y){var H=y[G],I=H[1];m[I[a].key]||C(t,H[0],I)}}else if(o!==i){var J=t;e.replaceChild(t=B(o,u,f),J)}for(;u[s];)u.pop()();return t}function Z(e,r,n){k=P(r,k,L,L=e),n&&n()}function q(){return{}}function z(e){return e.children}\n\n\n//# sourceURL=webpack:///./node_modules/chrysalis.js/dist/chrysalis.esm.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var chrysalis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrysalis.js */ \"./node_modules/chrysalis.js/dist/chrysalis.esm.js\");\n\nvar ALL_TODOS = 'all';\nvar ACTIVE_TODOS = 'active';\nvar COMPLETED_TODOS = 'completed';\nvar ENTER_KEY = 13;\nvar ESCAPE_KEY = 27;\nvar api = API;\nvar store = API.store;\nvar TodoItem = {\n  oninit: function oninit(props) {\n    this.state = {\n      editText: props.todo.title\n    };\n  },\n  handleSubmit: function handleSubmit(event) {\n    var val = this.state.editText.trim();\n\n    if (val) {\n      this.props.onSave(val);\n      this.setState({\n        editText: val\n      });\n    } else {\n      this.props.onDestroy();\n    }\n  },\n  handleEdit: function handleEdit() {\n    this.props.onEdit();\n    this.setState({\n      editText: this.props.todo.title\n    });\n  },\n  handleKeyDown: function handleKeyDown(event) {\n    if (event.which === ESCAPE_KEY) {\n      this.setState({\n        editText: this.props.todo.title\n      });\n      this.props.onCancel(event);\n    } else if (event.which === ENTER_KEY) {\n      this.handleSubmit(event);\n    }\n  },\n  handleChange: function handleChange(event) {\n    this.setState({\n      editText: event.target.value\n    });\n  },\n  getInitialState: function getInitialState() {\n    return {\n      editText: this.props.todo.title\n    };\n  },\n\n  /**\n   * Safely manipulate the DOM after updating the state when invoking\n   * `this.props.onEdit()` in the `handleEdit` method above.\n   * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate\n   * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate\n   */\n  onupdate: function onupdate(prevProps) {\n    if (!prevProps.editing && this.props.editing) {\n      var node = this.textInput;\n      node.focus();\n      node.setSelectionRange(node.value.length, node.value.length);\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    var classes = classNames({\n      completed: this.props.todo.completed,\n      editing: this.props.editing\n    });\n    return Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", null, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"li\", {\n      className: classes\n    }, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", {\n      className: \"view\"\n    }, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"input\", {\n      className: \"toggle\",\n      type: \"checkbox\",\n      checked: this.props.todo.completed,\n      onChange: this.props.onToggle\n    }), Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"label\", {\n      onDoubleClick: this.handleEdit.bind(this)\n    }, this.props.todo.title), Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"button\", {\n      className: \"destroy\",\n      onClick: this.props.onDestroy\n    })), Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"input\", {\n      ref: function ref(input) {\n        return _this.textInput = input;\n      },\n      className: \"edit\",\n      value: this.state.editText,\n      onBlur: this.handleSubmit.bind(this),\n      onChange: this.handleChange.bind(this),\n      onKeyDown: this.handleKeyDown.bind(this)\n    })));\n  }\n};\n\nvar TodoFooter = function TodoFooter(props) {\n  var activeTodoWord = props.count == 1 ? 'item' : 'items';\n  var clearButton = null;\n\n  if (props.completedCount > 0) {\n    clearButton = Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"button\", {\n      className: \"clear-completed\",\n      onClick: props.onClearCompleted\n    }, \"Clear completed\");\n  }\n\n  var nowShowing = props.nowShowing;\n  return Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"footer\", {\n    className: \"footer\"\n  }, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"span\", {\n    className: \"todo-count\"\n  }, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"strong\", null, props.count), \" \", activeTodoWord, \" left\"), Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"ul\", {\n    className: \"filters\"\n  }, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"li\", null, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"a\", {\n    href: \"#/\",\n    className: classNames({\n      selected: nowShowing === ALL_TODOS\n    })\n  }, \"All\")), Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"li\", null, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"a\", {\n    href: \"#/active\",\n    className: classNames({\n      selected: nowShowing === ACTIVE_TODOS\n    })\n  }, \"Active\")), Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"li\", null, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"a\", {\n    href: \"#/completed\",\n    className: classNames({\n      selected: nowShowing === COMPLETED_TODOS\n    })\n  }, \"Completed\"))), clearButton);\n};\n\nvar TodoApp = {\n  state: {\n    nowShowing: ALL_TODOS,\n    editing: null\n  },\n  oncreate: function oncreate() {\n    global.__UPDATE__ = this.forceUpdate;\n    var ctx = this;\n    var setState = ctx.setState;\n    var router = Router({\n      '/': this.setState.bind(this, {\n        nowShowing: ALL_TODOS\n      }),\n      '/active': this.setState.bind(ctx, {\n        nowShowing: ACTIVE_TODOS\n      }),\n      '/completed': this.setState.bind(ctx, {\n        nowShowing: COMPLETED_TODOS\n      })\n    });\n    router.init('/');\n  },\n  handleNewTodoKeyDown: function handleNewTodoKeyDown(event) {\n    if (event.keyCode !== ENTER_KEY) {\n      return;\n    }\n\n    event.preventDefault(); // console.log(this.$el.children[0].children[1].value)\n    // const newValue = this.$el.children[0].children[1].value\n\n    var val = this.newField.value.trim();\n\n    if (val) {\n      this.props.api.addTodo(newValue);\n      this.newField.value = '';\n    }\n\n    global.__UPDATE__ = this.forceUpdate; // this.forceUpdate()\n    // this.$el.children[0].children[1].value = ''\n  },\n  toggleAll: function toggleAll(event) {\n    var checked = event.target.checked;\n    API.toggleAll(checked);\n  },\n  toggle: function toggle(todo) {\n    API.toggleTodo(todo);\n    this.forceUpdate();\n  },\n  _destroy: function _destroy(todo) {\n    API.removeTodo(todo);\n    this.forceUpdate();\n  },\n  edit: function edit(todo) {\n    this.setState({\n      editing: todo.id\n    });\n  },\n  save: function save(todo, text) {\n    API.renameTodo(todo, text);\n    this.setState({\n      editing: null\n    });\n  },\n  cancel: function cancel() {\n    this.setState({\n      editing: null\n    });\n  },\n  clearCompleted: function clearCompleted() {\n    API.clearCompleted();\n    this.forceUpdate();\n  },\n  render: function render() {\n    var footer;\n    var main;\n    var api = this.props.api;\n    var todos = api.todos();\n    var active = api.remaining();\n    var shownTodos = todos;\n\n    if (this.state.nowShowing == ACTIVE_TODOS) {\n      shownTodos = active;\n    } else if (this.state.nowShowing == COMPLETED_TODOS) {\n      shownTodos = api.completed();\n    } // var shownTodos = todos.filter(function (todo) {\n    // \tswitch (this.state.nowShowing) {\n    // \tcase ACTIVE_TODOS:\n    // \t\treturn !todo.completed;\n    // \tcase COMPLETED_TODOS:\n    // \t\treturn todo.completed;\n    // \tdefault:\n    // \t\treturn true;\n    // \t}\n    // }, this);\n\n\n    var todoItems = shownTodos.map(function (todo, index) {\n      return Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(TodoItem, {\n        key: todo.id,\n        todo: todo,\n        onToggle: this.toggle.bind(this, todo),\n        onDestroy: this._destroy.bind(this, todo),\n        onEdit: this.edit.bind(this, todo),\n        editing: this.state.editing === todo.id,\n        onSave: this.save.bind(this, todo),\n        onCancel: this.cancel\n      });\n    }, this); // var activeTodoCount = todos.reduce(function (accum, todo) {\n    // \treturn todo.completed ? accum : accum + 1;\n    // }, 0);\n\n    var completedCount = todos.length - active.length;\n\n    if (todos.length) {\n      footer = Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(TodoFooter, {\n        count: active.length,\n        completedCount: completedCount,\n        nowShowing: this.state.nowShowing,\n        onClearCompleted: this.clearCompleted.bind(this)\n      });\n    }\n\n    if (todos.length) {\n      main = Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"section\", {\n        className: \"main\"\n      }, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"ul\", {\n        className: \"todo-list\"\n      }, todoItems));\n    }\n\n    return Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", null, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"header\", {\n      className: \"header\"\n    }, Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"h1\", null, store.counter), Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"input\", {\n      className: \"new-todo\",\n      placeholder: \"What to do?\",\n      onKeyDown: this.handleNewTodoKeyDown.bind(this),\n      autoFocus: true\n    })), main, footer);\n  }\n};\nObject(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(chrysalis_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(TodoApp, {\n  api: API\n}), document.getElementsByClassName('todoapp')[0]);\nconsole.log(TodoApp);\n\nAPI.render = function () {\n  __UPDATE__();\n};\n\nAPI.READY = true;\nAPI.reset(6);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });