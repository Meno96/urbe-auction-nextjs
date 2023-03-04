"use strict";
(() => {
var exports = {};
exports.id = 312;
exports.ids = [312];
exports.modules = {

/***/ 938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignIn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9819);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9915);
/* harmony import */ var _utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6162);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function SignIn() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const csrfToken = js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("csrftoken");
    const { globalState , setGlobalState  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_8__/* .GlobalStateContext */ .P);
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const { 0: showPassword , 1: setShowPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setMessage(querystring__WEBPACK_IMPORTED_MODULE_5___default().parse(router.asPath.split(/\?/)[1]).message);
    }, [
        router.asPath
    ]);
    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
    const onSubmit = async (data)=>{
        const username = data.username;
        const password = data.password;
        setGlobalState({
            ...globalState,
            isStaff: false,
            username: username
        });
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/sign-in", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "X-CSRFToken": csrfToken
                }
            });
            if (response.data.success) {
                const isUserStaff = response.data.isStaff;
                if (isUserStaff) {
                    setGlobalState({
                        ...globalState,
                        isStaff: true,
                        username: username
                    });
                }
                router.push("/");
            } else {
                let errorMessage = response.data.messages[0].message;
                setError(errorMessage);
                console.log("Wrong username or password.");
            }
        } catch (error) {
            console.error(error);
        }
    };
    const toggleShowPassword = ()=>{
        setShowPassword((prevState)=>!prevState
        );
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-[100%] h-[100vh] flex flex-col",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-[100%] flex flex-col justify-center items-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: message && message.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-green-600 mb-3",
                            children: message
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit(onSubmit),
                        className: "w-[360px] p-4 transition duration-700 text-gray-900 dark:text-gray-400 border-4 border-solid border-green-600 rounded-2xl bg-white bg-opacity-25 dark:bg-slate-900 dark:bg-opacity-20 backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xl text-slate-500 dark:text-slate-400 mt-2",
                                children: "Sign In!"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative form-group my-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "username",
                                        placeholder: " ",
                                        className: `rounded-2xl w-[100%] bg-transparent border hover:border-sky-600 transition duration-500 p-2 px-4 form-control focus:outline-none focus:ring-0 focus:border-sky-600 peer autofill:bg-transparent ${errors.username ? "is-invalid border-red-500" : ""}`,
                                        ...register("username", {
                                            required: true
                                        })
                                    }),
                                    errors.username && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: "invalid-feedback text-red-500 ml-5 text-[12px] font-sans font-medium",
                                        children: "This field is required"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "username",
                                        className: `absolute left-3 top-1 text-gray-900 dark:text-gray-400 transition duration-500 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white dark:bg-slate-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-0 peer-focus:left-3 peer-focus:scale-75 peer-focus:-translate-y-4 ${errors.username ? "is-invalid" : ""}`,
                                        children: "Username*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative form-group my-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: showPassword ? "text" : "password",
                                        id: "password",
                                        placeholder: " ",
                                        className: `rounded-2xl w-[100%] bg-transparent border hover:border-sky-600 transition duration-500 p-2 px-4 form-control focus:outline-none focus:ring-0 focus:border-sky-600 peer ${errors.password ? "is-invalid border-red-500" : ""}`,
                                        ...register("password", {
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "absolute top-2 right-5 text-gray-900 dark:text-gray-400 hover:text-sky-600 transition duration-500",
                                        onClick: toggleShowPassword,
                                        children: showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "1.5",
                                            stroke: "currentColor",
                                            className: "w-6 h-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                            })
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "1.5",
                                            stroke: "currentColor",
                                            className: "w-6 h-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                })
                                            ]
                                        })
                                    }),
                                    errors.password && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: "invalid-feedback text-red-500 ml-5 text-[12px] font-sans font-medium",
                                        children: "This field is required"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "password",
                                        className: `absolute left-3 top-1 text-gray-900 dark:text-gray-400 transition duration-500 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white dark:bg-slate-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-0 peer-focus:left-3 peer-focus:scale-75 peer-focus:-translate-y-4   ${errors.password ? "is-invalid" : ""}`,
                                        children: "Password*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "btn btn-outline-primary px-3 py-1 rounded-xl border-2 font-semibold text-[14px] hover:scale-125 transition ease-out duration-500 border-green-600 dark:bg-green-600 text-slate-800",
                                children: "Submit"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex mt-3 self-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Don't have an account yet? "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2 hover:scale-125",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/sign-up",
                                    className: "cursor-pointer text-green-600 ",
                                    children: "Sign Up!"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: error1 && error1.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-3 text-red-500",
                            children: [
                                "- ",
                                error1
                            ]
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ GlobalStateProvider),
/* harmony export */   "P": () => (/* binding */ GlobalStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const GlobalStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const GlobalStateProvider = ({ children  })=>{
    const { 0: globalState , 1: setGlobalState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        isStaff: false,
        username: null,
        checkIp: null
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalStateContext.Provider, {
        value: {
            globalState,
            setGlobalState
        },
        children: children
    });
};


/***/ }),

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9819:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(938));
module.exports = __webpack_exports__;

})();