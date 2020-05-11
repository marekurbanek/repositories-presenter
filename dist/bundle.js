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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.container {\n  width: 1280px;\n  height: 100vh;\n  margin: 0 auto;\n}\n\n#repositories-app {\n  margin: 2em 0;\n}\n\n.repository {\n  margin: 2em 0;\n  padding: 2em;\n  width: 100%;\n  box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.05);\n}\n.repository__owner {\n  font-size: 2em;\n}\n.repository__url {\n  text-decoration: none;\n  font-weight: bold;\n  color: #5f9ea0;\n}\n\ntable {\n  border-collapse: collapse;\n}\ntable thead td {\n  font-weight: bold;\n  white-space: nowrap;\n}\ntable td {\n  border: 1px solid #cecece;\n  padding: 1em;\n}\n\n.errors {\n  margin: 1em 0;\n  padding: 2em;\n  background: rgba(255, 0, 0, 0.15);\n  display: none;\n}\n.errors--show {\n  display: inline-block;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/Repository.ts":
/*!**************************************!*\
  !*** ./src/components/Repository.ts ***!
  \**************************************/
/*! exports provided: getReposElements, getReposTagsData, addRepositoriesToPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReposElements", function() { return getReposElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReposTagsData", function() { return getReposTagsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRepositoriesToPage", function() { return addRepositoriesToPage; });
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "./src/components/Table.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _services_errorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/errorService */ "./src/services/errorService.ts");



const getReposElements = () => document.getElementsByTagName("repos");
const getReposTagsData = (repos) => {
    const repositoriesData = [];
    for (let i = 0; i < repos.length; i++) {
        const repository = repos[i];
        const username = repository.getAttribute("data-user");
        const updated = repository.getAttribute("data-update");
        if (username && updated) {
            const date = new Date(updated);
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isValidDate"])(date)) {
                repositoriesData.push({ username, updated: date });
            }
            else {
                Object(_services_errorService__WEBPACK_IMPORTED_MODULE_2__["addError"])(`Date "${updated}" is not valid date.`);
            }
        }
        else {
            Object(_services_errorService__WEBPACK_IMPORTED_MODULE_2__["addError"])(`data-user: "${username}" or data-update: "${updated}" value is empty`);
        }
    }
    const uniqueUsersRepositories = removeDuplicatedUsers(repositoriesData);
    return uniqueUsersRepositories;
};
const removeDuplicatedUsers = (repositoriesData) => {
    // In case if more than 1 user tag is present - get tag with oldest date to present more data
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["sortByPropAsc"])(repositoriesData, "updated");
    let uniqueUsersRepositories = [];
    repositoriesData.forEach((repo) => {
        if (!uniqueUsersRepositories.find((uniqueRepo) => uniqueRepo.username === repo.username)) {
            uniqueUsersRepositories.push(repo);
        }
    });
    return uniqueUsersRepositories;
};
const addRepositoriesToPage = (usersRepositories) => {
    const container = document.getElementById("repositories-app");
    const repositoriesHtml = getHtmlRepositories(usersRepositories);
    if (repositoriesHtml.length > 0) {
        container.innerHTML = repositoriesHtml;
    }
    else {
        Object(_services_errorService__WEBPACK_IMPORTED_MODULE_2__["addError"])("Unable to find any repositories for provided data.");
    }
};
const getHtmlRepositories = (usersRepositories) => usersRepositories
    .map((user) => `<div class="repository">
              <p class="repository__owner">Repositories for user ${user.username}</p>
              ${Object(_Table__WEBPACK_IMPORTED_MODULE_0__["Table"])(columns, user.repositories)}
         </div>`)
    .join("");
const columns = [
    {
        name: "name",
        label: "Name",
    },
    {
        name: "description",
        label: "Description",
    },
    {
        name: "updated_at",
        label: "Updated at",
        customRender: (date) => new Date(date).toLocaleDateString(),
    },
    {
        name: "html_url",
        label: "Download link",
        customRender: (url) => `<a href="${url}" target="_blank" class="repository__url">GitHub</a>`,
    },
];


/***/ }),

/***/ "./src/components/Table.ts":
/*!*********************************!*\
  !*** ./src/components/Table.ts ***!
  \*********************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
const TableHead = (columns) => `<thead>
    ${columns.map((column) => `<td>${column.label}</td>`).join("")}
  </thead>`;
const TableCell = (column, row) => column.customRender ? `<td>${column.customRender(row[column.name])}</td>` : `<td>${row[column.name] || ""}</td>`;
const TableBody = (columns, data) => data
    .map((row) => `<tr>
            ${columns.map((column) => TableCell(column, row)).join("")}
        </tr>`)
    .join("");
const Table = (columns, data) => `
    <table>
        ${TableHead(columns)}
        ${TableBody(columns, data)}
    </table>
  `;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_repositoryService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/repositoryService */ "./src/services/repositoryService.ts");
/* harmony import */ var _components_Repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Repository */ "./src/components/Repository.ts");
/* harmony import */ var _services_errorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/errorService */ "./src/services/errorService.ts");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const repos = Object(_components_Repository__WEBPACK_IMPORTED_MODULE_1__["getReposElements"])();
    const reposTagsData = Object(_components_Repository__WEBPACK_IMPORTED_MODULE_1__["getReposTagsData"])(repos);
    const usersRepositories = yield Object(_services_repositoryService__WEBPACK_IMPORTED_MODULE_0__["getRepositories"])(reposTagsData);
    Object(_components_Repository__WEBPACK_IMPORTED_MODULE_1__["addRepositoriesToPage"])(usersRepositories);
    Object(_services_errorService__WEBPACK_IMPORTED_MODULE_2__["showErrorsIfExists"])();
});
main();


/***/ }),

/***/ "./src/services/errorService.ts":
/*!**************************************!*\
  !*** ./src/services/errorService.ts ***!
  \**************************************/
/*! exports provided: showErrorsIfExists, addError, addFailedResponsesToErrorIfExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showErrorsIfExists", function() { return showErrorsIfExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addError", function() { return addError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFailedResponsesToErrorIfExists", function() { return addFailedResponsesToErrorIfExists; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let errors = [];
const showErrorsIfExists = () => {
    const errorDiv = document.querySelector(".errors");
    if (errors.length > 0) {
        errorDiv.classList.add("errors--show");
        errorDiv.innerText = "Errors: \n" + errors.join(", \n");
    }
};
const addError = (error) => errors.push(error);
const addFailedResponsesToErrorIfExists = (responses) => __awaiter(void 0, void 0, void 0, function* () {
    const failedResponses = responses.filter((res) => !res.ok);
    if (failedResponses.length > 0) {
        failedResponses.forEach((res) => {
            addError(`Failed to fetch data for url: ${res.url}`);
        });
    }
});


/***/ }),

/***/ "./src/services/repositoryService.ts":
/*!*******************************************!*\
  !*** ./src/services/repositoryService.ts ***!
  \*******************************************/
/*! exports provided: getRepositories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRepositories", function() { return getRepositories; });
/* harmony import */ var _errorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorService */ "./src/services/errorService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const baseUrl = "https://api.github.com/users";
const getRepositories = (reposTagsData) => __awaiter(void 0, void 0, void 0, function* () {
    const requestList = reposTagsData.map((repo) => fetch(`${baseUrl}/${repo.username}/repos?sort=updated&direction=desc`));
    const responses = yield Promise.all(requestList);
    Object(_errorService__WEBPACK_IMPORTED_MODULE_0__["addFailedResponsesToErrorIfExists"])(responses);
    const responsesJsons = yield Promise.all(responses.filter((res) => res.ok).map((response) => response.json()));
    return reposResponseToUserRepositories(responsesJsons, reposTagsData);
});
const reposResponseToUserRepositories = (usersResponses, reposTagsData) => {
    if (usersResponses && usersResponses.length > 0) {
        return usersResponses
            .map((userResponse) => {
            const { login } = userResponse[0].owner;
            const updatedDate = getUpdateDateForUser(login, reposTagsData);
            const filteredRepositories = filterByUpdatedDate(userResponse, updatedDate);
            return { username: login, repositories: filteredRepositories };
        })
            .filter(hasAtLeastOneRepository);
    }
    else {
        return [];
    }
};
const hasAtLeastOneRepository = (user) => {
    if (user.repositories.length > 0) {
        return true;
    }
    else {
        Object(_errorService__WEBPACK_IMPORTED_MODULE_0__["addError"])(`User ${user.username} for provided "data-update" has no repositories`);
        return false;
    }
};
const getUpdateDateForUser = (login, reposTagsData) => {
    const updated = reposTagsData.find((repo) => repo.username.toUpperCase() === login.toUpperCase()).updated;
    return new Date(updated);
};
const filterByUpdatedDate = (repositories, updatedDate) => repositories.filter((repository) => new Date(repository.updated_at) > updatedDate);


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: isValidDate, sortByPropAsc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return isValidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByPropAsc", function() { return sortByPropAsc; });
const isValidDate = (date) => !isNaN(Date.parse(date));
const sortByPropAsc = (array, prop) => array.sort((o1, o2) => {
    return o1[prop] - o2[prop];
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9lcnJvclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3JlcG9zaXRvcnlTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFD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QzdGLDBCQUEwQixtQkFBTyxDQUFDLGdOQUFxRzs7QUFFdkk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBTyxNQUFNLFdBQVcsR0FBRyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRTVELE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBWSxFQUFFLElBQVksRUFBRSxFQUFFLENBQzFELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDcEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTI4MHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jcmVwb3NpdG9yaWVzLWFwcCB7XFxuICBtYXJnaW46IDJlbSAwO1xcbn1cXG5cXG4ucmVwb3NpdG9yeSB7XFxuICBtYXJnaW46IDJlbSAwO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcbi5yZXBvc2l0b3J5X19vd25lciB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuLnJlcG9zaXRvcnlfX3VybCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjNWY5ZWEwO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG50YWJsZSB0aGVhZCB0ZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbnRhYmxlIHRkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5lcnJvcnMge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjE1KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5lcnJvcnMtLXNob3cge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi9UYWJsZVwiO1xyXG5pbXBvcnQgeyBVc2Vyc1JlcG9zaXRvcmllcywgQ29sdW1uLCBSZXBvc2l0b3J5VGFnRGF0YSB9IGZyb20gXCIuLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGlzVmFsaWREYXRlLCBzb3J0QnlQcm9wQXNjIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGFkZEVycm9yIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Vycm9yU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlcG9zRWxlbWVudHMgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInJlcG9zXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlcG9zVGFnc0RhdGEgPSAocmVwb3M6IEhUTUxDb2xsZWN0aW9uKTogUmVwb3NpdG9yeVRhZ0RhdGFbXSA9PiB7XHJcbiAgY29uc3QgcmVwb3NpdG9yaWVzRGF0YTogUmVwb3NpdG9yeVRhZ0RhdGFbXSA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVwb3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHJlcG9zaXRvcnkgPSByZXBvc1tpXTtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVwb3NpdG9yeS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXVzZXJcIik7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gcmVwb3NpdG9yeS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXVwZGF0ZVwiKTtcclxuXHJcbiAgICBpZiAodXNlcm5hbWUgJiYgdXBkYXRlZCkge1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodXBkYXRlZCk7XHJcbiAgICAgIGlmIChpc1ZhbGlkRGF0ZShkYXRlKSkge1xyXG4gICAgICAgIHJlcG9zaXRvcmllc0RhdGEucHVzaCh7IHVzZXJuYW1lLCB1cGRhdGVkOiBkYXRlIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFkZEVycm9yKGBEYXRlIFwiJHt1cGRhdGVkfVwiIGlzIG5vdCB2YWxpZCBkYXRlLmApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhZGRFcnJvcihgZGF0YS11c2VyOiBcIiR7dXNlcm5hbWV9XCIgb3IgZGF0YS11cGRhdGU6IFwiJHt1cGRhdGVkfVwiIHZhbHVlIGlzIGVtcHR5YCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHVuaXF1ZVVzZXJzUmVwb3NpdG9yaWVzID0gcmVtb3ZlRHVwbGljYXRlZFVzZXJzKHJlcG9zaXRvcmllc0RhdGEpO1xyXG4gIHJldHVybiB1bmlxdWVVc2Vyc1JlcG9zaXRvcmllcztcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZUR1cGxpY2F0ZWRVc2VycyA9IChyZXBvc2l0b3JpZXNEYXRhOiBSZXBvc2l0b3J5VGFnRGF0YVtdKTogUmVwb3NpdG9yeVRhZ0RhdGFbXSA9PiB7XHJcbiAgLy8gSW4gY2FzZSBpZiBtb3JlIHRoYW4gMSB1c2VyIHRhZyBpcyBwcmVzZW50IC0gZ2V0IHRhZyB3aXRoIG9sZGVzdCBkYXRlIHRvIHByZXNlbnQgbW9yZSBkYXRhXHJcbiAgc29ydEJ5UHJvcEFzYyhyZXBvc2l0b3JpZXNEYXRhLCBcInVwZGF0ZWRcIik7XHJcbiAgbGV0IHVuaXF1ZVVzZXJzUmVwb3NpdG9yaWVzOiBSZXBvc2l0b3J5VGFnRGF0YVtdID0gW107XHJcblxyXG4gIHJlcG9zaXRvcmllc0RhdGEuZm9yRWFjaCgocmVwbzogUmVwb3NpdG9yeVRhZ0RhdGEpID0+IHtcclxuICAgIGlmICghdW5pcXVlVXNlcnNSZXBvc2l0b3JpZXMuZmluZCgodW5pcXVlUmVwbykgPT4gdW5pcXVlUmVwby51c2VybmFtZSA9PT0gcmVwby51c2VybmFtZSkpIHtcclxuICAgICAgdW5pcXVlVXNlcnNSZXBvc2l0b3JpZXMucHVzaChyZXBvKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gdW5pcXVlVXNlcnNSZXBvc2l0b3JpZXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUmVwb3NpdG9yaWVzVG9QYWdlID0gKHVzZXJzUmVwb3NpdG9yaWVzOiBVc2Vyc1JlcG9zaXRvcmllc1tdKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXBvc2l0b3JpZXMtYXBwXCIpITtcclxuICBjb25zdCByZXBvc2l0b3JpZXNIdG1sID0gZ2V0SHRtbFJlcG9zaXRvcmllcyh1c2Vyc1JlcG9zaXRvcmllcyk7XHJcbiAgaWYgKHJlcG9zaXRvcmllc0h0bWwubGVuZ3RoID4gMCkge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHJlcG9zaXRvcmllc0h0bWw7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFkZEVycm9yKFwiVW5hYmxlIHRvIGZpbmQgYW55IHJlcG9zaXRvcmllcyBmb3IgcHJvdmlkZWQgZGF0YS5cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0SHRtbFJlcG9zaXRvcmllcyA9ICh1c2Vyc1JlcG9zaXRvcmllcyk6IHN0cmluZyA9PlxyXG4gIHVzZXJzUmVwb3NpdG9yaWVzXHJcbiAgICAubWFwKFxyXG4gICAgICAodXNlcjogVXNlcnNSZXBvc2l0b3JpZXMpID0+XHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJyZXBvc2l0b3J5XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXBvc2l0b3J5X19vd25lclwiPlJlcG9zaXRvcmllcyBmb3IgdXNlciAke3VzZXIudXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICR7VGFibGUoY29sdW1ucywgdXNlci5yZXBvc2l0b3JpZXMpfVxyXG4gICAgICAgICA8L2Rpdj5gXHJcbiAgICApXHJcbiAgICAuam9pbihcIlwiKTtcclxuXHJcbmNvbnN0IGNvbHVtbnM6IENvbHVtbltdID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwibmFtZVwiLFxyXG4gICAgbGFiZWw6IFwiTmFtZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxyXG4gICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwidXBkYXRlZF9hdFwiLFxyXG4gICAgbGFiZWw6IFwiVXBkYXRlZCBhdFwiLFxyXG4gICAgY3VzdG9tUmVuZGVyOiAoZGF0ZSkgPT4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCksXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImh0bWxfdXJsXCIsXHJcbiAgICBsYWJlbDogXCJEb3dubG9hZCBsaW5rXCIsXHJcbiAgICBjdXN0b21SZW5kZXI6ICh1cmwpID0+IGA8YSBocmVmPVwiJHt1cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJyZXBvc2l0b3J5X191cmxcIj5HaXRIdWI8L2E+YCxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBDb2x1bW4gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IFRhYmxlSGVhZCA9IChjb2x1bW5zOiBDb2x1bW5bXSkgPT5cclxuICBgPHRoZWFkPlxyXG4gICAgJHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiBgPHRkPiR7Y29sdW1uLmxhYmVsfTwvdGQ+YCkuam9pbihcIlwiKX1cclxuICA8L3RoZWFkPmA7XHJcblxyXG5jb25zdCBUYWJsZUNlbGwgPSAoY29sdW1uOiBDb2x1bW4sIHJvdykgPT5cclxuICBjb2x1bW4uY3VzdG9tUmVuZGVyID8gYDx0ZD4ke2NvbHVtbi5jdXN0b21SZW5kZXIocm93W2NvbHVtbi5uYW1lXSl9PC90ZD5gIDogYDx0ZD4ke3Jvd1tjb2x1bW4ubmFtZV0gfHwgXCJcIn08L3RkPmA7XHJcblxyXG5jb25zdCBUYWJsZUJvZHkgPSAoY29sdW1uczogQ29sdW1uW10sIGRhdGEpID0+XHJcbiAgZGF0YVxyXG4gICAgLm1hcChcclxuICAgICAgKHJvdykgPT4gYDx0cj5cclxuICAgICAgICAgICAgJHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiBUYWJsZUNlbGwoY29sdW1uLCByb3cpKS5qb2luKFwiXCIpfVxyXG4gICAgICAgIDwvdHI+YFxyXG4gICAgKVxyXG4gICAgLmpvaW4oXCJcIik7XHJcblxyXG5leHBvcnQgY29uc3QgVGFibGUgPSAoY29sdW1ucywgZGF0YSkgPT5cclxuICBgXHJcbiAgICA8dGFibGU+XHJcbiAgICAgICAgJHtUYWJsZUhlYWQoY29sdW1ucyl9XHJcbiAgICAgICAgJHtUYWJsZUJvZHkoY29sdW1ucywgZGF0YSl9XHJcbiAgICA8L3RhYmxlPlxyXG4gIGA7XHJcbiIsImltcG9ydCB7IFJlcG9zaXRvcnlUYWdEYXRhLCBVc2Vyc1JlcG9zaXRvcmllcyB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFJlcG9zaXRvcmllcyB9IGZyb20gXCIuL3NlcnZpY2VzL3JlcG9zaXRvcnlTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGFkZFJlcG9zaXRvcmllc1RvUGFnZSwgZ2V0UmVwb3NFbGVtZW50cywgZ2V0UmVwb3NUYWdzRGF0YSB9IGZyb20gXCIuL2NvbXBvbmVudHMvUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQgeyBzaG93RXJyb3JzSWZFeGlzdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lcnJvclNlcnZpY2VcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXBvczogSFRNTENvbGxlY3Rpb24gPSBnZXRSZXBvc0VsZW1lbnRzKCk7XHJcbiAgY29uc3QgcmVwb3NUYWdzRGF0YTogUmVwb3NpdG9yeVRhZ0RhdGFbXSA9IGdldFJlcG9zVGFnc0RhdGEocmVwb3MpO1xyXG4gIGNvbnN0IHVzZXJzUmVwb3NpdG9yaWVzOiBVc2Vyc1JlcG9zaXRvcmllc1tdID0gYXdhaXQgZ2V0UmVwb3NpdG9yaWVzKHJlcG9zVGFnc0RhdGEpO1xyXG4gIGFkZFJlcG9zaXRvcmllc1RvUGFnZSh1c2Vyc1JlcG9zaXRvcmllcyk7XHJcbiAgc2hvd0Vycm9yc0lmRXhpc3RzKCk7XHJcbn07XHJcblxyXG5tYWluKCk7XHJcbiIsImxldCBlcnJvcnM6IFN0cmluZ1tdID0gW107XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0Vycm9yc0lmRXhpc3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVycm9yRGl2OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yc1wiKTtcclxuICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgIGVycm9yRGl2IS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JzLS1zaG93XCIpO1xyXG4gICAgZXJyb3JEaXYhLmlubmVyVGV4dCA9IFwiRXJyb3JzOiBcXG5cIiArIGVycm9ycy5qb2luKFwiLCBcXG5cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZEVycm9yID0gKGVycm9yKSA9PiBlcnJvcnMucHVzaChlcnJvcik7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkRmFpbGVkUmVzcG9uc2VzVG9FcnJvcklmRXhpc3RzID0gYXN5bmMgKHJlc3BvbnNlczogUmVzcG9uc2VbXSkgPT4ge1xyXG4gIGNvbnN0IGZhaWxlZFJlc3BvbnNlcyA9IHJlc3BvbnNlcy5maWx0ZXIoKHJlcykgPT4gIXJlcy5vayk7XHJcbiAgaWYgKGZhaWxlZFJlc3BvbnNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBmYWlsZWRSZXNwb25zZXMuZm9yRWFjaCgocmVzKSA9PiB7XHJcbiAgICAgIGFkZEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggZGF0YSBmb3IgdXJsOiAke3Jlcy51cmx9YCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IFVzZXJzUmVwb3NpdG9yaWVzLCBSZXBvc2l0b3J5UmVzcG9uc2UgfSBmcm9tIFwiLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBSZXBvc2l0b3J5VGFnRGF0YSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBhZGRGYWlsZWRSZXNwb25zZXNUb0Vycm9ySWZFeGlzdHMsIGFkZEVycm9yIH0gZnJvbSBcIi4vZXJyb3JTZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBiYXNlVXJsID0gXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVwb3NpdG9yaWVzID0gYXN5bmMgKHJlcG9zVGFnc0RhdGE6IFJlcG9zaXRvcnlUYWdEYXRhW10pID0+IHtcclxuICBjb25zdCByZXF1ZXN0TGlzdDogUHJvbWlzZTxSZXNwb25zZT5bXSA9IHJlcG9zVGFnc0RhdGEubWFwKChyZXBvKSA9PlxyXG4gICAgZmV0Y2goYCR7YmFzZVVybH0vJHtyZXBvLnVzZXJuYW1lfS9yZXBvcz9zb3J0PXVwZGF0ZWQmZGlyZWN0aW9uPWRlc2NgKVxyXG4gICk7XHJcbiAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdExpc3QpO1xyXG4gIGFkZEZhaWxlZFJlc3BvbnNlc1RvRXJyb3JJZkV4aXN0cyhyZXNwb25zZXMpO1xyXG4gIGNvbnN0IHJlc3BvbnNlc0pzb25zID0gYXdhaXQgUHJvbWlzZS5hbGwocmVzcG9uc2VzLmZpbHRlcigocmVzKSA9PiByZXMub2spLm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkpO1xyXG5cclxuICByZXR1cm4gcmVwb3NSZXNwb25zZVRvVXNlclJlcG9zaXRvcmllcyhyZXNwb25zZXNKc29ucywgcmVwb3NUYWdzRGF0YSk7XHJcbn07XHJcblxyXG5jb25zdCByZXBvc1Jlc3BvbnNlVG9Vc2VyUmVwb3NpdG9yaWVzID0gKHVzZXJzUmVzcG9uc2VzLCByZXBvc1RhZ3NEYXRhKTogVXNlcnNSZXBvc2l0b3JpZXNbXSA9PiB7XHJcbiAgaWYgKHVzZXJzUmVzcG9uc2VzICYmIHVzZXJzUmVzcG9uc2VzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiB1c2Vyc1Jlc3BvbnNlc1xyXG4gICAgICAubWFwKCh1c2VyUmVzcG9uc2U6IFJlcG9zaXRvcnlSZXNwb25zZVtdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBsb2dpbiB9ID0gdXNlclJlc3BvbnNlWzBdLm93bmVyO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWREYXRlID0gZ2V0VXBkYXRlRGF0ZUZvclVzZXIobG9naW4sIHJlcG9zVGFnc0RhdGEpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUmVwb3NpdG9yaWVzID0gZmlsdGVyQnlVcGRhdGVkRGF0ZSh1c2VyUmVzcG9uc2UsIHVwZGF0ZWREYXRlKTtcclxuICAgICAgICByZXR1cm4geyB1c2VybmFtZTogbG9naW4sIHJlcG9zaXRvcmllczogZmlsdGVyZWRSZXBvc2l0b3JpZXMgfTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbHRlcihoYXNBdExlYXN0T25lUmVwb3NpdG9yeSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBoYXNBdExlYXN0T25lUmVwb3NpdG9yeSA9ICh1c2VyOiBVc2Vyc1JlcG9zaXRvcmllcykgPT4ge1xyXG4gIGlmICh1c2VyLnJlcG9zaXRvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWRkRXJyb3IoYFVzZXIgJHt1c2VyLnVzZXJuYW1lfSBmb3IgcHJvdmlkZWQgXCJkYXRhLXVwZGF0ZVwiIGhhcyBubyByZXBvc2l0b3JpZXNgKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRVcGRhdGVEYXRlRm9yVXNlciA9IChsb2dpbiwgcmVwb3NUYWdzRGF0YTogUmVwb3NpdG9yeVRhZ0RhdGFbXSk6IERhdGUgPT4ge1xyXG4gIGNvbnN0IHVwZGF0ZWQgPSByZXBvc1RhZ3NEYXRhLmZpbmQoKHJlcG8pID0+IHJlcG8udXNlcm5hbWUudG9VcHBlckNhc2UoKSA9PT0gbG9naW4udG9VcHBlckNhc2UoKSkhLnVwZGF0ZWQ7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKHVwZGF0ZWQpO1xyXG59O1xyXG5cclxuY29uc3QgZmlsdGVyQnlVcGRhdGVkRGF0ZSA9IChyZXBvc2l0b3JpZXMsIHVwZGF0ZWREYXRlKSA9PlxyXG4gIHJlcG9zaXRvcmllcy5maWx0ZXIoKHJlcG9zaXRvcnkpID0+IG5ldyBEYXRlKHJlcG9zaXRvcnkudXBkYXRlZF9hdCkgPiB1cGRhdGVkRGF0ZSk7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGNvbnN0IGlzVmFsaWREYXRlID0gKGRhdGU6IGFueSkgPT4gIWlzTmFOKERhdGUucGFyc2UoZGF0ZSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvcnRCeVByb3BBc2MgPSAoYXJyYXk6IGFueVtdLCBwcm9wOiBzdHJpbmcpID0+XHJcbiAgYXJyYXkuc29ydCgobzEsIG8yKSA9PiB7XHJcbiAgICByZXR1cm4gbzFbcHJvcF0gLSBvMltwcm9wXTtcclxuICB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==