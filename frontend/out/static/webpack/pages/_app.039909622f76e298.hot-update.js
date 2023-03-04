"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/FetchUserInfo.js":
/*!********************************!*\
  !*** ./utils/FetchUserInfo.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FetchUserInfo; }\n/* harmony export */ });\n/* harmony import */ var _home_meno_Dev_Blockchain_UrbE_urbe_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_meno_Dev_Blockchain_UrbE_urbe_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_meno_Dev_Blockchain_UrbE_urbe_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GlobalStateContext */ \"./utils/GlobalStateContext.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction FetchUserInfo(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_3__.GlobalStateContext), globalState = ref.globalState, setGlobalState = ref.setGlobalState;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function fetchData() {\n            return _fetchData.apply(this, arguments);\n        }\n        function _fetchData() {\n            _fetchData = _asyncToGenerator(_home_meno_Dev_Blockchain_UrbE_urbe_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, userInfo, isStaff, username, checkIp;\n                return _home_meno_Dev_Blockchain_UrbE_urbe_django_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:8000/api/user-info/\");\n                        case 3:\n                            response = _ctx.sent;\n                            userInfo = response.data;\n                            isStaff = userInfo.isStaff;\n                            username = userInfo.username;\n                            checkIp = userInfo.checkIp;\n                            setGlobalState(_objectSpread({}, globalState, {\n                                isStaff: isStaff,\n                                username: username,\n                                checkIp: checkIp\n                            }));\n                            console.log();\n                            _ctx.next = 16;\n                            break;\n                        case 12:\n                            _ctx.prev = 12;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.error(\"Failed to fetch user info:\", _ctx.t0);\n                            setGlobalState(_objectSpread({}, globalState, {\n                                isStaff: false,\n                                username: null,\n                                checkIp: null\n                            }));\n                        case 16:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        12\n                    ]\n                ]);\n            }));\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        theme: props.theme,\n        themeToggler: props.themeToggler,\n        username: globalState.username,\n        isStaff: globalState.isStaff\n    }, void 0, false, {\n        fileName: \"/home/meno/Dev/Blockchain/UrbE/urbe-django/frontend/utils/FetchUserInfo.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n};\n_s(FetchUserInfo, \"44y9AvM6LUHZHZ5Hy07uHX/TLPo=\");\n_c = FetchUserInfo;\nvar _c;\n$RefreshReg$(_c, \"FetchUserInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9GZXRjaFVzZXJJbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDcEI7QUFDdUM7QUFDeEI7O0FBRXpCLFNBQVNLLGFBQWEsQ0FBQ0MsS0FBSyxFQUFFOztJQUN6QyxJQUF3Q04sR0FBOEIsR0FBOUJBLGlEQUFVLENBQUNHLHlFQUFrQixDQUFDLEVBQTlESSxXQUFXLEdBQXFCUCxHQUE4QixDQUE5RE8sV0FBVyxFQUFFQyxjQUFjLEdBQUtSLEdBQThCLENBQWpEUSxjQUFjO0lBRW5DUCxnREFBUyxDQUFDLFdBQU07aUJBQ0dRLFNBQVM7bUJBQVRBLFVBQVM7O2lCQUFUQSxVQUFTO1lBQVRBLFVBQVMsR0FBeEIsb01BQTJCO29CQUViQyxRQUFRLEVBQ1JDLFFBQVEsRUFDUkMsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLE9BQU87Ozs7OzttQ0FKVVosaURBQVMsQ0FBQyxzQ0FBc0MsQ0FBQzs7NEJBQWxFUSxRQUFRLFlBQTBEOzRCQUNsRUMsUUFBUSxHQUFHRCxRQUFRLENBQUNNLElBQUk7NEJBQ3hCSixPQUFPLEdBQUdELFFBQVEsQ0FBQ0MsT0FBTzs0QkFDMUJDLFFBQVEsR0FBR0YsUUFBUSxDQUFDRSxRQUFROzRCQUM1QkMsT0FBTyxHQUFHSCxRQUFRLENBQUNHLE9BQU87NEJBRWhDTixjQUFjLENBQUMsa0JBQ1JELFdBQVc7Z0NBQ2RLLE9BQU8sRUFBRUEsT0FBTztnQ0FDaEJDLFFBQVEsRUFBRUEsUUFBUTtnQ0FDbEJDLE9BQU8sRUFBRUEsT0FBTzs4QkFDbkIsQ0FBQzs0QkFFRkcsT0FBTyxDQUFDQyxHQUFHLEVBQUUsQ0FBQzs7Ozs7OzRCQUVkRCxPQUFPLENBQUNFLEtBQUssQ0FBQyw0QkFBNEIsVUFBUTs0QkFDbERYLGNBQWMsQ0FBQyxrQkFDUkQsV0FBVztnQ0FDZEssT0FBTyxFQUFFLEtBQUs7Z0NBQ2RDLFFBQVEsRUFBRSxJQUFJO2dDQUNkQyxPQUFPLEVBQUUsSUFBSTs4QkFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7YUFFVDttQkF6QmNMLFVBQVM7O1FBMkJ4QkEsU0FBUyxFQUFFO0tBQ2QsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDSSw4REFBQ0wsMERBQU07UUFDSGdCLEtBQUssRUFBRWQsS0FBSyxDQUFDYyxLQUFLO1FBQ2xCQyxZQUFZLEVBQUVmLEtBQUssQ0FBQ2UsWUFBWTtRQUNoQ1IsUUFBUSxFQUFFTixXQUFXLENBQUNNLFFBQVE7UUFDOUJELE9BQU8sRUFBRUwsV0FBVyxDQUFDSyxPQUFPOzs7OztZQUM5QixDQUNMO0NBQ0o7R0ExQ3VCUCxhQUFhO0FBQWJBLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvRmV0Y2hVc2VySW5mby5qcz9jODVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB7IEdsb2JhbFN0YXRlQ29udGV4dCB9IGZyb20gXCIuLi91dGlscy9HbG9iYWxTdGF0ZUNvbnRleHRcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZldGNoVXNlckluZm8ocHJvcHMpIHtcbiAgICBjb25zdCB7IGdsb2JhbFN0YXRlLCBzZXRHbG9iYWxTdGF0ZSB9ID0gdXNlQ29udGV4dChHbG9iYWxTdGF0ZUNvbnRleHQpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyLWluZm8vXCIpXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTdGFmZiA9IHVzZXJJbmZvLmlzU3RhZmZcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IHVzZXJJbmZvLnVzZXJuYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tJcCA9IHVzZXJJbmZvLmNoZWNrSXBcblxuICAgICAgICAgICAgICAgIHNldEdsb2JhbFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZ2xvYmFsU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGlzU3RhZmY6IGlzU3RhZmYsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJcDogY2hlY2tJcCxcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyIGluZm86XCIsIGVycm9yKVxuICAgICAgICAgICAgICAgIHNldEdsb2JhbFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZ2xvYmFsU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGlzU3RhZmY6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJcDogbnVsbCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIHRoZW1lPXtwcm9wcy50aGVtZX1cbiAgICAgICAgICAgIHRoZW1lVG9nZ2xlcj17cHJvcHMudGhlbWVUb2dnbGVyfVxuICAgICAgICAgICAgdXNlcm5hbWU9e2dsb2JhbFN0YXRlLnVzZXJuYW1lfVxuICAgICAgICAgICAgaXNTdGFmZj17Z2xvYmFsU3RhdGUuaXNTdGFmZn1cbiAgICAgICAgLz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwiR2xvYmFsU3RhdGVDb250ZXh0IiwiSGVhZGVyIiwiRmV0Y2hVc2VySW5mbyIsInByb3BzIiwiZ2xvYmFsU3RhdGUiLCJzZXRHbG9iYWxTdGF0ZSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwidXNlckluZm8iLCJpc1N0YWZmIiwidXNlcm5hbWUiLCJjaGVja0lwIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInRoZW1lIiwidGhlbWVUb2dnbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/FetchUserInfo.js\n");

/***/ })

});