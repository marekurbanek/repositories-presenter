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
    return repositoriesData;
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
/*! exports provided: isValidDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return isValidDate; });
const isValidDate = (date) => !isNaN(Date.parse(date));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9lcnJvclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3JlcG9zaXRvcnlTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLGNBQWMsZUFBZSx3Q0FBd0MsR0FBRyxnQkFBZ0Isa0JBQWtCLGtCQUFrQixtQkFBbUIsR0FBRyx1QkFBdUIsa0JBQWtCLEdBQUcsaUJBQWlCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHFEQUFxRCxHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyxvQkFBb0IsMEJBQTBCLHNCQUFzQixtQkFBbUIsR0FBRyxXQUFXLDhCQUE4QixHQUFHLGtCQUFrQixzQkFBc0Isd0JBQXdCLEdBQUcsWUFBWSw4QkFBOEIsaUJBQWlCLEdBQUcsYUFBYSxrQkFBa0IsaUJBQWlCLHNDQUFzQyxrQkFBa0IsR0FBRyxpQkFBaUIsMEJBQTBCLEdBQUc7QUFDdHlCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFFTztBQUNhO0FBRTdDLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXRFLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFxQixFQUF1QixFQUFFO0lBQzdFLE1BQU0sZ0JBQWdCLEdBQXdCLEVBQUUsQ0FBQztJQUNqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXZELElBQUksUUFBUSxJQUFJLE9BQU8sRUFBRTtZQUN2QixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixJQUFJLDBEQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNwRDtpQkFBTTtnQkFDTCx1RUFBUSxDQUFDLFNBQVMsT0FBTyxzQkFBc0IsQ0FBQyxDQUFDO2FBQ2xEO1NBQ0Y7YUFBTTtZQUNMLHVFQUFRLENBQUMsZUFBZSxRQUFRLHNCQUFzQixPQUFPLGtCQUFrQixDQUFDLENBQUM7U0FDbEY7S0FDRjtJQUNELE9BQU8sZ0JBQWdCLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0FBRUssTUFBTSxxQkFBcUIsR0FBRyxDQUFDLGlCQUFzQyxFQUFFLEVBQUU7SUFDOUUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBRSxDQUFDO0lBQy9ELE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNoRSxJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDL0IsU0FBUyxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztLQUN4QztTQUFNO1FBQ0wsdUVBQVEsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0tBQ2hFO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLGlCQUFpQixFQUFVLEVBQUUsQ0FDeEQsaUJBQWlCO0tBQ2QsR0FBRyxDQUNGLENBQUMsSUFBdUIsRUFBRSxFQUFFLENBQzFCO21FQUMyRCxJQUFJLENBQUMsUUFBUTtnQkFDaEUsb0RBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDakMsQ0FDWDtLQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVkLE1BQU0sT0FBTyxHQUFhO0lBQ3hCO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixLQUFLLEVBQUUsYUFBYTtLQUNyQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsS0FBSyxFQUFFLFlBQVk7UUFDbkIsWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRTtLQUM1RDtJQUNEO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLGVBQWU7UUFDdEIsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEdBQUcsc0RBQXNEO0tBQzdGO0NBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xFRjtBQUFBO0FBQUEsTUFBTSxTQUFTLEdBQUcsQ0FBQyxPQUFpQixFQUFFLEVBQUUsQ0FDdEM7TUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7V0FDdkQsQ0FBQztBQUVaLE1BQU0sU0FBUyxHQUFHLENBQUMsTUFBYyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQ3hDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO0FBRW5ILE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBaUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUM1QyxJQUFJO0tBQ0QsR0FBRyxDQUNGLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztjQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2NBQ3hELENBQ1Q7S0FDQSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFUCxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUNyQzs7VUFFUSxTQUFTLENBQUMsT0FBTyxDQUFDO1VBQ2xCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDOztHQUUvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEIyRDtBQUNxQztBQUN2QztBQUNoQztBQUU3QixNQUFNLElBQUksR0FBRyxHQUFTLEVBQUU7SUFDdEIsTUFBTSxLQUFLLEdBQW1CLCtFQUFnQixFQUFFLENBQUM7SUFDakQsTUFBTSxhQUFhLEdBQXdCLCtFQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25FLE1BQU0saUJBQWlCLEdBQXdCLE1BQU0sbUZBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRixvRkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pDLGlGQUFrQixFQUFFLENBQUM7QUFDdkIsQ0FBQyxFQUFDO0FBRUYsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZFAsSUFBSSxNQUFNLEdBQWEsRUFBRSxDQUFDO0FBRW5CLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFO0lBQ3JDLE1BQU0sUUFBUSxHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZFLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDckIsUUFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEMsUUFBUyxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxRDtBQUNILENBQUMsQ0FBQztBQUVLLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRS9DLE1BQU0saUNBQWlDLEdBQUcsQ0FBTyxTQUFxQixFQUFFLEVBQUU7SUFDL0UsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0QsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUM5QixlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDOUIsUUFBUSxDQUFDLGlDQUFpQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakIyRTtBQUU3RSxNQUFNLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQztBQUV4QyxNQUFNLGVBQWUsR0FBRyxDQUFPLGFBQWtDLEVBQUUsRUFBRTtJQUMxRSxNQUFNLFdBQVcsR0FBd0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ2xFLEtBQUssQ0FBQyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxvQ0FBb0MsQ0FBQyxDQUN2RSxDQUFDO0lBQ0YsTUFBTSxTQUFTLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELHVGQUFpQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sY0FBYyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9HLE9BQU8sK0JBQStCLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3hFLENBQUMsRUFBQztBQUVGLE1BQU0sK0JBQStCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUF1QixFQUFFO0lBQzdGLElBQUksY0FBYyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQy9DLE9BQU8sY0FBYzthQUNsQixHQUFHLENBQUMsQ0FBQyxZQUFrQyxFQUFFLEVBQUU7WUFDMUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDeEMsTUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sb0JBQW9CLEdBQUcsbUJBQW1CLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0tBQ3BDO1NBQU07UUFDTCxPQUFPLEVBQUUsQ0FBQztLQUNYO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLElBQXVCLEVBQUUsRUFBRTtJQUMxRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNoQyxPQUFPLElBQUksQ0FBQztLQUNiO1NBQU07UUFDTCw4REFBUSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsaURBQWlELENBQUMsQ0FBQztRQUNqRixPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLEtBQUssRUFBRSxhQUFrQyxFQUFRLEVBQUU7SUFDL0UsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUUsQ0FBQyxPQUFPLENBQUM7SUFDM0csT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUM7QUFFRixNQUFNLG1CQUFtQixHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQ3hELFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL0NyRixVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGdOQUFxRzs7QUFFdkk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQU8sTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEyODBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI3JlcG9zaXRvcmllcy1hcHAge1xcbiAgbWFyZ2luOiAyZW0gMDtcXG59XFxuXFxuLnJlcG9zaXRvcnkge1xcbiAgbWFyZ2luOiAyZW0gMDtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG4ucmVwb3NpdG9yeV9fb3duZXIge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcbi5yZXBvc2l0b3J5X191cmwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzVmOWVhMDtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxudGFibGUgdGhlYWQgdGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG50YWJsZSB0ZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZWNlO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uZXJyb3JzIHtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBwYWRkaW5nOiAyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4xNSk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZXJyb3JzLS1zaG93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4vVGFibGVcIjtcclxuaW1wb3J0IHsgVXNlcnNSZXBvc2l0b3JpZXMsIENvbHVtbiwgUmVwb3NpdG9yeVRhZ0RhdGEgfSBmcm9tIFwiLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBpc1ZhbGlkRGF0ZSB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBhZGRFcnJvciB9IGZyb20gXCIuLi9zZXJ2aWNlcy9lcnJvclNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZXBvc0VsZW1lbnRzID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJyZXBvc1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZXBvc1RhZ3NEYXRhID0gKHJlcG9zOiBIVE1MQ29sbGVjdGlvbik6IFJlcG9zaXRvcnlUYWdEYXRhW10gPT4ge1xyXG4gIGNvbnN0IHJlcG9zaXRvcmllc0RhdGE6IFJlcG9zaXRvcnlUYWdEYXRhW10gPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gcmVwb3NbaV07XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcG9zaXRvcnkuZ2V0QXR0cmlidXRlKFwiZGF0YS11c2VyXCIpO1xyXG4gICAgY29uc3QgdXBkYXRlZCA9IHJlcG9zaXRvcnkuZ2V0QXR0cmlidXRlKFwiZGF0YS11cGRhdGVcIik7XHJcblxyXG4gICAgaWYgKHVzZXJuYW1lICYmIHVwZGF0ZWQpIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHVwZGF0ZWQpO1xyXG4gICAgICBpZiAoaXNWYWxpZERhdGUoZGF0ZSkpIHtcclxuICAgICAgICByZXBvc2l0b3JpZXNEYXRhLnB1c2goeyB1c2VybmFtZSwgdXBkYXRlZDogZGF0ZSB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhZGRFcnJvcihgRGF0ZSBcIiR7dXBkYXRlZH1cIiBpcyBub3QgdmFsaWQgZGF0ZS5gKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkRXJyb3IoYGRhdGEtdXNlcjogXCIke3VzZXJuYW1lfVwiIG9yIGRhdGEtdXBkYXRlOiBcIiR7dXBkYXRlZH1cIiB2YWx1ZSBpcyBlbXB0eWApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVwb3NpdG9yaWVzRGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRSZXBvc2l0b3JpZXNUb1BhZ2UgPSAodXNlcnNSZXBvc2l0b3JpZXM6IFVzZXJzUmVwb3NpdG9yaWVzW10pID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcG9zaXRvcmllcy1hcHBcIikhO1xyXG4gIGNvbnN0IHJlcG9zaXRvcmllc0h0bWwgPSBnZXRIdG1sUmVwb3NpdG9yaWVzKHVzZXJzUmVwb3NpdG9yaWVzKTtcclxuICBpZiAocmVwb3NpdG9yaWVzSHRtbC5sZW5ndGggPiAwKSB7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcmVwb3NpdG9yaWVzSHRtbDtcclxuICB9IGVsc2Uge1xyXG4gICAgYWRkRXJyb3IoXCJVbmFibGUgdG8gZmluZCBhbnkgcmVwb3NpdG9yaWVzIGZvciBwcm92aWRlZCBkYXRhLlwiKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRIdG1sUmVwb3NpdG9yaWVzID0gKHVzZXJzUmVwb3NpdG9yaWVzKTogc3RyaW5nID0+XHJcbiAgdXNlcnNSZXBvc2l0b3JpZXNcclxuICAgIC5tYXAoXHJcbiAgICAgICh1c2VyOiBVc2Vyc1JlcG9zaXRvcmllcykgPT5cclxuICAgICAgICBgPGRpdiBjbGFzcz1cInJlcG9zaXRvcnlcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInJlcG9zaXRvcnlfX293bmVyXCI+UmVwb3NpdG9yaWVzIGZvciB1c2VyICR7dXNlci51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgJHtUYWJsZShjb2x1bW5zLCB1c2VyLnJlcG9zaXRvcmllcyl9XHJcbiAgICAgICAgIDwvZGl2PmBcclxuICAgIClcclxuICAgIC5qb2luKFwiXCIpO1xyXG5cclxuY29uc3QgY29sdW1uczogQ29sdW1uW10gPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJuYW1lXCIsXHJcbiAgICBsYWJlbDogXCJOYW1lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJ1cGRhdGVkX2F0XCIsXHJcbiAgICBsYWJlbDogXCJVcGRhdGVkIGF0XCIsXHJcbiAgICBjdXN0b21SZW5kZXI6IChkYXRlKSA9PiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiaHRtbF91cmxcIixcclxuICAgIGxhYmVsOiBcIkRvd25sb2FkIGxpbmtcIixcclxuICAgIGN1c3RvbVJlbmRlcjogKHVybCkgPT4gYDxhIGhyZWY9XCIke3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cInJlcG9zaXRvcnlfX3VybFwiPkdpdEh1YjwvYT5gLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7IENvbHVtbiB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuY29uc3QgVGFibGVIZWFkID0gKGNvbHVtbnM6IENvbHVtbltdKSA9PlxyXG4gIGA8dGhlYWQ+XHJcbiAgICAke2NvbHVtbnMubWFwKChjb2x1bW4pID0+IGA8dGQ+JHtjb2x1bW4ubGFiZWx9PC90ZD5gKS5qb2luKFwiXCIpfVxyXG4gIDwvdGhlYWQ+YDtcclxuXHJcbmNvbnN0IFRhYmxlQ2VsbCA9IChjb2x1bW46IENvbHVtbiwgcm93KSA9PlxyXG4gIGNvbHVtbi5jdXN0b21SZW5kZXIgPyBgPHRkPiR7Y29sdW1uLmN1c3RvbVJlbmRlcihyb3dbY29sdW1uLm5hbWVdKX08L3RkPmAgOiBgPHRkPiR7cm93W2NvbHVtbi5uYW1lXSB8fCBcIlwifTwvdGQ+YDtcclxuXHJcbmNvbnN0IFRhYmxlQm9keSA9IChjb2x1bW5zOiBDb2x1bW5bXSwgZGF0YSkgPT5cclxuICBkYXRhXHJcbiAgICAubWFwKFxyXG4gICAgICAocm93KSA9PiBgPHRyPlxyXG4gICAgICAgICAgICAke2NvbHVtbnMubWFwKChjb2x1bW4pID0+IFRhYmxlQ2VsbChjb2x1bW4sIHJvdykpLmpvaW4oXCJcIil9XHJcbiAgICAgICAgPC90cj5gXHJcbiAgICApXHJcbiAgICAuam9pbihcIlwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBUYWJsZSA9IChjb2x1bW5zLCBkYXRhKSA9PlxyXG4gIGBcclxuICAgIDx0YWJsZT5cclxuICAgICAgICAke1RhYmxlSGVhZChjb2x1bW5zKX1cclxuICAgICAgICAke1RhYmxlQm9keShjb2x1bW5zLCBkYXRhKX1cclxuICAgIDwvdGFibGU+XHJcbiAgYDtcclxuIiwiaW1wb3J0IHsgUmVwb3NpdG9yeVRhZ0RhdGEsIFVzZXJzUmVwb3NpdG9yaWVzIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0UmVwb3NpdG9yaWVzIH0gZnJvbSBcIi4vc2VydmljZXMvcmVwb3NpdG9yeVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgYWRkUmVwb3NpdG9yaWVzVG9QYWdlLCBnZXRSZXBvc0VsZW1lbnRzLCBnZXRSZXBvc1RhZ3NEYXRhIH0gZnJvbSBcIi4vY29tcG9uZW50cy9SZXBvc2l0b3J5XCI7XHJcbmltcG9ydCB7IHNob3dFcnJvcnNJZkV4aXN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2Vycm9yU2VydmljZVwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcG9zOiBIVE1MQ29sbGVjdGlvbiA9IGdldFJlcG9zRWxlbWVudHMoKTtcclxuICBjb25zdCByZXBvc1RhZ3NEYXRhOiBSZXBvc2l0b3J5VGFnRGF0YVtdID0gZ2V0UmVwb3NUYWdzRGF0YShyZXBvcyk7XHJcbiAgY29uc3QgdXNlcnNSZXBvc2l0b3JpZXM6IFVzZXJzUmVwb3NpdG9yaWVzW10gPSBhd2FpdCBnZXRSZXBvc2l0b3JpZXMocmVwb3NUYWdzRGF0YSk7XHJcbiAgYWRkUmVwb3NpdG9yaWVzVG9QYWdlKHVzZXJzUmVwb3NpdG9yaWVzKTtcclxuICBzaG93RXJyb3JzSWZFeGlzdHMoKTtcclxufTtcclxuXHJcbm1haW4oKTtcclxuIiwibGV0IGVycm9yczogU3RyaW5nW10gPSBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93RXJyb3JzSWZFeGlzdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZXJyb3JEaXY6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JzXCIpO1xyXG4gIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgZXJyb3JEaXYhLmNsYXNzTGlzdC5hZGQoXCJlcnJvcnMtLXNob3dcIik7XHJcbiAgICBlcnJvckRpdiEuaW5uZXJUZXh0ID0gXCJFcnJvcnM6IFxcblwiICsgZXJyb3JzLmpvaW4oXCIsIFxcblwiKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkRXJyb3IgPSAoZXJyb3IpID0+IGVycm9ycy5wdXNoKGVycm9yKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRGYWlsZWRSZXNwb25zZXNUb0Vycm9ySWZFeGlzdHMgPSBhc3luYyAocmVzcG9uc2VzOiBSZXNwb25zZVtdKSA9PiB7XHJcbiAgY29uc3QgZmFpbGVkUmVzcG9uc2VzID0gcmVzcG9uc2VzLmZpbHRlcigocmVzKSA9PiAhcmVzLm9rKTtcclxuICBpZiAoZmFpbGVkUmVzcG9uc2VzLmxlbmd0aCA+IDApIHtcclxuICAgIGZhaWxlZFJlc3BvbnNlcy5mb3JFYWNoKChyZXMpID0+IHtcclxuICAgICAgYWRkRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBkYXRhIGZvciB1cmw6ICR7cmVzLnVybH1gKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgVXNlcnNSZXBvc2l0b3JpZXMsIFJlcG9zaXRvcnlSZXNwb25zZSB9IGZyb20gXCIuLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnlUYWdEYXRhIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGFkZEZhaWxlZFJlc3BvbnNlc1RvRXJyb3JJZkV4aXN0cywgYWRkRXJyb3IgfSBmcm9tIFwiLi9lcnJvclNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZXBvc2l0b3JpZXMgPSBhc3luYyAocmVwb3NUYWdzRGF0YTogUmVwb3NpdG9yeVRhZ0RhdGFbXSkgPT4ge1xyXG4gIGNvbnN0IHJlcXVlc3RMaXN0OiBQcm9taXNlPFJlc3BvbnNlPltdID0gcmVwb3NUYWdzRGF0YS5tYXAoKHJlcG8pID0+XHJcbiAgICBmZXRjaChgJHtiYXNlVXJsfS8ke3JlcG8udXNlcm5hbWV9L3JlcG9zP3NvcnQ9dXBkYXRlZCZkaXJlY3Rpb249ZGVzY2ApXHJcbiAgKTtcclxuICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0TGlzdCk7XHJcbiAgYWRkRmFpbGVkUmVzcG9uc2VzVG9FcnJvcklmRXhpc3RzKHJlc3BvbnNlcyk7XHJcbiAgY29uc3QgcmVzcG9uc2VzSnNvbnMgPSBhd2FpdCBQcm9taXNlLmFsbChyZXNwb25zZXMuZmlsdGVyKChyZXMpID0+IHJlcy5vaykubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSk7XHJcblxyXG4gIHJldHVybiByZXBvc1Jlc3BvbnNlVG9Vc2VyUmVwb3NpdG9yaWVzKHJlc3BvbnNlc0pzb25zLCByZXBvc1RhZ3NEYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IHJlcG9zUmVzcG9uc2VUb1VzZXJSZXBvc2l0b3JpZXMgPSAodXNlcnNSZXNwb25zZXMsIHJlcG9zVGFnc0RhdGEpOiBVc2Vyc1JlcG9zaXRvcmllc1tdID0+IHtcclxuICBpZiAodXNlcnNSZXNwb25zZXMgJiYgdXNlcnNSZXNwb25zZXMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHVzZXJzUmVzcG9uc2VzXHJcbiAgICAgIC5tYXAoKHVzZXJSZXNwb25zZTogUmVwb3NpdG9yeVJlc3BvbnNlW10pID0+IHtcclxuICAgICAgICBjb25zdCB7IGxvZ2luIH0gPSB1c2VyUmVzcG9uc2VbMF0ub3duZXI7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZERhdGUgPSBnZXRVcGRhdGVEYXRlRm9yVXNlcihsb2dpbiwgcmVwb3NUYWdzRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRSZXBvc2l0b3JpZXMgPSBmaWx0ZXJCeVVwZGF0ZWREYXRlKHVzZXJSZXNwb25zZSwgdXBkYXRlZERhdGUpO1xyXG4gICAgICAgIHJldHVybiB7IHVzZXJuYW1lOiBsb2dpbiwgcmVwb3NpdG9yaWVzOiBmaWx0ZXJlZFJlcG9zaXRvcmllcyB9O1xyXG4gICAgICB9KVxyXG4gICAgICAuZmlsdGVyKGhhc0F0TGVhc3RPbmVSZXBvc2l0b3J5KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGhhc0F0TGVhc3RPbmVSZXBvc2l0b3J5ID0gKHVzZXI6IFVzZXJzUmVwb3NpdG9yaWVzKSA9PiB7XHJcbiAgaWYgKHVzZXIucmVwb3NpdG9yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhZGRFcnJvcihgVXNlciAke3VzZXIudXNlcm5hbWV9IGZvciBwcm92aWRlZCBcImRhdGEtdXBkYXRlXCIgaGFzIG5vIHJlcG9zaXRvcmllc2ApO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFVwZGF0ZURhdGVGb3JVc2VyID0gKGxvZ2luLCByZXBvc1RhZ3NEYXRhOiBSZXBvc2l0b3J5VGFnRGF0YVtdKTogRGF0ZSA9PiB7XHJcbiAgY29uc3QgdXBkYXRlZCA9IHJlcG9zVGFnc0RhdGEuZmluZCgocmVwbykgPT4gcmVwby51c2VybmFtZS50b1VwcGVyQ2FzZSgpID09PSBsb2dpbi50b1VwcGVyQ2FzZSgpKSEudXBkYXRlZDtcclxuICByZXR1cm4gbmV3IERhdGUodXBkYXRlZCk7XHJcbn07XHJcblxyXG5jb25zdCBmaWx0ZXJCeVVwZGF0ZWREYXRlID0gKHJlcG9zaXRvcmllcywgdXBkYXRlZERhdGUpID0+XHJcbiAgcmVwb3NpdG9yaWVzLmZpbHRlcigocmVwb3NpdG9yeSkgPT4gbmV3IERhdGUocmVwb3NpdG9yeS51cGRhdGVkX2F0KSA+IHVwZGF0ZWREYXRlKTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgY29uc3QgaXNWYWxpZERhdGUgPSAoZGF0ZTogYW55KSA9PiAhaXNOYU4oRGF0ZS5wYXJzZShkYXRlKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=