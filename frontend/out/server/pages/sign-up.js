"use strict";
(() => {
var exports = {};
exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 7837:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_5__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function SignIn() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const csrfToken = js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].get("csrftoken");
    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
    const { 0: error1 , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: showPassword1 , 1: setShowPassword1  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: showPassword2 , 1: setShowPassword2  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const onSubmit = async (data)=>{
        const username = data.username;
        const email = data.email;
        const password1 = data.password1;
        const password2 = data.password2;
        if (password1 !== password2) {
            setErrors([
                "The passwords do not match."
            ]);
        } else {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("email", email);
            formData.append("password1", password1);
            formData.append("password2", password2);
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/sign-up", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-CSRFToken": csrfToken
                    }
                });
                if (response.data.success) {
                    router.push({
                        pathname: "/sign-in",
                        query: {
                            message: `Account ${username} successfully created.`
                        }
                    });
                } else {
                    let errorMessages = response.data.messages.map((message)=>message.message
                    );
                    setErrors(errorMessages);
                    console.log("Check that you have filled in all the required fields correctly.");
                }
            } catch (error) {
                console.error(error);
            }
        }
    };
    const toggleShowPassword1 = ()=>{
        setShowPassword1((prevState)=>!prevState
        );
    };
    const toggleShowPassword2 = ()=>{
        setShowPassword2((prevState)=>!prevState
        );
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-[100%] h-[100vh] flex flex-col",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-[100%] flex flex-col justify-center items-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit(onSubmit),
                        className: "w-[360px] p-4 transition duration-700 text-gray-900 dark:text-gray-400 dark:bg-slate-800 border-4 border-solid border-green-600 rounded-2xl bg-white bg-opacity-25 dark:bg-slate-900 dark:bg-opacity-20 backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xl text-slate-500 dark:text-slate-400 mt-2",
                                children: "Sign Up!"
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
                                        for: "username",
                                        className: `absolute left-3 top-1 text-gray-900 dark:text-gray-400 transition duration-500 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white dark:bg-slate-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-0 peer-focus:left-3 peer-focus:scale-75 peer-focus:-translate-y-4 ${errors.username ? "is-invalid" : ""}`,
                                        children: "Username*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative form-group my-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        id: "email",
                                        placeholder: " ",
                                        className: `rounded-2xl w-[100%] bg-transparent border hover:border-sky-600 transition duration-500 p-2 px-4 form-control focus:outline-none focus:ring-0 focus:border-sky-600 peer autofill:bg-transparent autofill:!bg-black ${errors.email ? "is-invalid border-red-500" : ""}`,
                                        ...register("email", {
                                            required: true
                                        })
                                    }),
                                    errors.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: "invalid-feedback text-red-500 ml-5 text-[12px] font-sans font-medium",
                                        children: "This field is required"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "email",
                                        for: "email",
                                        className: `absolute left-3 top-1 text-gray-900 dark:text-gray-400 transition duration-500 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white dark:bg-slate-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-0 peer-focus:left-3 peer-focus:scale-75 peer-focus:-translate-y-4 ${errors.email ? "is-invalid" : ""}`,
                                        children: "Email*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative form-group my-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: showPassword1 ? "text" : "password",
                                        id: "password1",
                                        placeholder: " ",
                                        className: `rounded-2xl w-[100%] bg-transparent border hover:border-sky-600 transition duration-500 p-2 px-4 form-control focus:outline-none focus:ring-0 focus:border-sky-600 peer ${errors.password1 ? "is-invalid border-red-500" : ""}`,
                                        ...register("password1", {
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "absolute top-2 right-5 text-gray-900 dark:text-gray-400 hover:text-sky-600 transition duration-500",
                                        onClick: toggleShowPassword1,
                                        children: showPassword1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "currentColor",
                                            class: "w-6 h-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                            })
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "currentColor",
                                            class: "w-6 h-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                })
                                            ]
                                        })
                                    }),
                                    errors.password1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: "invalid-feedback text-red-500 ml-5 text-[12px] font-sans font-medium",
                                        children: "This field is required"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "password1",
                                        for: "password1",
                                        className: `absolute left-3 top-1 text-gray-900 dark:text-gray-400 transition duration-500 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white dark:bg-slate-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-0 peer-focus:left-3 peer-focus:scale-75 peer-focus:-translate-y-4   ${errors.password1 ? "is-invalid" : ""}`,
                                        children: "Password*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative form-group my-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: showPassword2 ? "text" : "password",
                                        id: "password2",
                                        placeholder: " ",
                                        className: `rounded-2xl w-[100%] bg-transparent border hover:border-sky-600 transition duration-500 p-2 px-4 form-control focus:outline-none focus:ring-0 focus:border-sky-600 peer ${errors.password2 ? "is-invalid border-red-500" : ""}`,
                                        ...register("password2", {
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "absolute top-2 right-5 text-gray-900 dark:text-gray-400 hover:text-sky-600 transition duration-500",
                                        onClick: toggleShowPassword2,
                                        children: showPassword2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "currentColor",
                                            class: "w-6 h-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                            })
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "currentColor",
                                            class: "w-6 h-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                })
                                            ]
                                        })
                                    }),
                                    errors.password2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: "invalid-feedback text-red-500 ml-5 text-[12px] font-sans font-medium",
                                        children: "This field is required"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "password2",
                                        for: "password2",
                                        className: `absolute left-3 top-1 text-gray-900 dark:text-gray-400 transition duration-500 transform -translate-y-4 scale-75 z-10 origin-[0] bg-white dark:bg-slate-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-0 peer-focus:left-3 peer-focus:scale-75 peer-focus:-translate-y-4   ${errors.password2 ? "is-invalid" : ""}`,
                                        children: "Password Confirmation*"
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
                                children: "Already have an account? "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "ml-2 hover:scale-125",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/sign-in",
                                    className: "cursor-pointer text-green-600 ",
                                    children: "Sign In!"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: error1 && error1.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-3 text-red-500",
                            children: error1.map((error, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "- ",
                                        error
                                    ]
                                }, index)
                            )
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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__(7837));
module.exports = __webpack_exports__;

})();