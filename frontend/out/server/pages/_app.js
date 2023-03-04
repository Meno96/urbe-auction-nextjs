"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  body {
    background: ${({ theme  })=>theme.body
};
    color: ${({ theme  })=>theme.text
};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;


/***/ }),

/***/ 292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2810);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3uikit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4137);
/* harmony import */ var _components_Themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1123);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_useDarkMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2581);
/* harmony import */ var _components_Toggler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1741);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41);
/* harmony import */ var _constants_UrbEVehicleNft_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4640);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6921);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_moralis__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8036);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9648);
/* harmony import */ var _utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6162);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_15__]);
axios__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















function Header(props) {
    const { isWeb3Enabled  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_12__.useMoralis)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const currentPath = router.asPath.split("?")[0];
    const { globalState  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_16__/* .GlobalStateContext */ .P);
    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const { 0: isStaff , 1: setIsStaff  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setUsername(globalState.username);
        setIsStaff(globalState.isStaff);
    }, [
        globalState.username,
        globalState.isStaff
    ]);
    async function handleLogout() {
        try {
            await axios__WEBPACK_IMPORTED_MODULE_15__["default"].post("/logout");
            router.push("/sign-in");
        } catch (error) {
            console.error(error);
        }
    }
    if (username == null || isStaff == null) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "px-5 border-b-[1px] border-green-600 shadow-md sticky top-0 z-10 ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-7xl mx-auto flex flex-row items-center justify-between backdrop-blur-lg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-1 w-[190px] h-[60px] cursor-pointer hover:scale-125 flex items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    src: "next/Logo.png",
                                    height: "60",
                                    width: "190"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row flex-none items-center justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: `mr-4 p-6 hover:scale-125 ${currentPath === "/" ? "text-green-600 hover:text-green-600" : "hover:text-slate-500 dark:hover:text-gray-100"} `,
                                    children: "Home"
                                })
                            }),
                            isStaff && isWeb3Enabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/add-nft",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: `mr-4 p-6 hover:scale-125 ${currentPath === "/add-nft" ? "text-green-600 hover:text-green-600" : "hover:text-slate-500 dark:hover:text-gray-100"} `,
                                    children: "Add NFT"
                                })
                            }),
                            isStaff && isWeb3Enabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/sell-nft",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: `mr-4 p-6 hover:scale-125 ${currentPath === "/sell-nft" ? "text-green-600 hover:text-green-600" : "hover:text-slate-500 dark:hover:text-gray-100"} `,
                                    children: "Sell NFT"
                                })
                            }),
                            isWeb3Enabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/account",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: `mr-4 p-6 hover:scale-125 ${currentPath === "/account" ? "text-green-600 hover:text-green-600" : "hover:text-slate-500 dark:hover:text-gray-100"} `,
                                    children: "Account"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row flex-1 w-[330px] items-center justify-end",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    "Hello, ",
                                                    username
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                className: "ml-3 text-green-600 italic hover:scale-125",
                                                onClick: handleLogout,
                                                children: "Logout"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(web3uikit__WEBPACK_IMPORTED_MODULE_1__.ConnectButton, {
                                        moralisAuth: false
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Toggler__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                theme: props.theme,
                                toggleTheme: props.themeToggler
                            })
                        ]
                    })
                ]
            })
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ darkTheme),
/* harmony export */   "W": () => (/* binding */ lightTheme)
/* harmony export */ });
const lightTheme = {
    text: "#111827",
    background: "#F2F6FF",
    transition: "all 3s ease-in-out",
    cardBorderColor: "#f3f4f6;",
    hover: {
        text: "#1e293b",
        background: "linear-gradient(-45deg, #cffafe 10%, 50%, #ecfeff 70%)"
    }
};
const darkTheme = {
    text: "#9ca3af",
    cardText: "#FFF",
    background: "#1e293b",
    transition: "all 3s ease-in-out",
    cardBorderColor: "#3f3f46;",
    hover: {
        text: "#FFF",
        background: "linear-gradient(-45deg, #0f172a 10%, 50%, #334155 80%)"
    }
};


/***/ }),

/***/ 1741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Toggler)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
;// CONCATENATED MODULE: ./components/Toggler.js



const Toggle = ({ theme , toggleTheme  })=>{
    if (theme == "light") {
        return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            onClick: toggleTheme,
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "1.5",
            stroke: "currentColor",
            className: "w-6 h-6 w-min-6 h-min-6 cursor-pointer hover:scale-125 dark:hover:text-gray-100 hover:text-slate-500",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            })
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            onClick: toggleTheme,
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "1.5",
            stroke: "currentColor",
            className: "w-6 h-6 w-min-6 h-min-6 cursor-pointer hover:scale-125 dark:hover:text-gray-100 hover:text-slate-500",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            })
        });
    }
};
Toggle.propTypes = {
    theme: external_prop_types_namespaceObject.string.isRequired,
    toggleTheme: external_prop_types_namespaceObject.func.isRequired
};
/* harmony default export */ const Toggler = (Toggle);


/***/ }),

/***/ 2581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ useDarkMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDarkMode = ()=>{
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{
        if (false) {}
        return "light";
    });
    const colorTheme = theme === "dark" ? "light" : "dark";
    const setMode = (mode)=>{
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };
    const themeToggler = ()=>{
        theme === "light" ? setMode("dark") : setMode("light");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const root = window.document.documentElement;
        const localTheme = window.localStorage.getItem("theme");
        root.classList.remove(colorTheme);
        root.classList.add(localTheme);
    }, [
        theme
    ]);
    return [
        theme,
        themeToggler
    ];
};


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6921);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moralis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Toggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1741);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2810);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3uikit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_GlobalStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4137);
/* harmony import */ var _components_useDarkMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2581);
/* harmony import */ var _components_Themes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1123);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6162);
/* harmony import */ var _utils_FetchUserInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(678);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_FetchUserInfo__WEBPACK_IMPORTED_MODULE_12__]);
_utils_FetchUserInfo__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloClient({
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.InMemoryCache(),
    uri: "https://api.studio.thegraph.com/query/41463/urbe-auction/0.0.21"
});
function App({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const isSignInPage = router.pathname === "/sign-in";
    const isSignUpPage = router.pathname === "/sign-up";
    const [theme, themeToggler] = (0,_components_useDarkMode__WEBPACK_IMPORTED_MODULE_8__/* .useDarkMode */ .v)();
    const themeMode = theme === "light" ? _components_Themes__WEBPACK_IMPORTED_MODULE_9__/* .lightTheme */ .W : _components_Themes__WEBPACK_IMPORTED_MODULE_9__/* .darkTheme */ .$;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_11__/* .GlobalStateProvider */ .M, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: "UrbE Auction"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: "UrbE Auction"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            href: "/next/img.png"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
                    theme: themeMode,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GlobalStyles__WEBPACK_IMPORTED_MODULE_7__/* .GlobalStyles */ .n, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_moralis__WEBPACK_IMPORTED_MODULE_1__.MoralisProvider, {
                            initializeOnMount: false,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloProvider, {
                                client: client,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(web3uikit__WEBPACK_IMPORTED_MODULE_4__.NotificationProvider, {
                                    children: [
                                        !isSignInPage && !isSignUpPage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_FetchUserInfo__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            theme: theme,
                                            themeToggler: themeToggler
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute top-3 right-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Toggler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                theme: theme,
                                                toggleTheme: themeToggler
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FetchUserInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6162);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _components_Header__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, _components_Header__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function FetchUserInfo(props) {
    const { globalState , setGlobalState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_3__/* .GlobalStateContext */ .P);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchData() {
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/api/user-info/");
                const userInfo = response.data;
                const isStaff = userInfo.isStaff;
                const username = userInfo.username;
                const checkIp = userInfo.checkIp;
                setGlobalState({
                    ...globalState,
                    isStaff: isStaff,
                    username: username,
                    checkIp: checkIp
                });
            } catch (error) {
                console.error("Failed to fetch user info:", error);
                setGlobalState({
                    ...globalState,
                    isStaff: false,
                    username: null,
                    checkIp: null
                });
            }
        }
        fetchData();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        theme: props.theme,
        themeToggler: props.themeToggler,
        username: globalState.username,
        isStaff: globalState.isStaff
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

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6921:
/***/ ((module) => {

module.exports = require("react-moralis");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 2810:
/***/ ((module) => {

module.exports = require("web3uikit");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664,119,41], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();