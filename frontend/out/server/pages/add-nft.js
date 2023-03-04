"use strict";
(() => {
var exports = {};
exports.id = 526;
exports.ids = [526];
exports.modules = {

/***/ 7672:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddNft)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3uikit_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5372);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6921);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moralis__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8036);
/* harmony import */ var _constants_UrbEVehicleNft_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4640);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function AddNft() {
    const { chainId  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)();
    const chainString = chainId ? parseInt(chainId).toString() : null;
    const urbEVehicleNftAddress = chainId ? _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__[chainString].UrbEVehicleNft[0] : null;
    const { 0: tokenUri1 , 1: setTokenUri  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: nftName , 1: setNftName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { runContractFunction: updateMappingNft  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract)({
        abi: _constants_UrbEVehicleNft_json__WEBPACK_IMPORTED_MODULE_5__,
        contractAddress: urbEVehicleNftAddress,
        functionName: "updateMappingNft",
        params: {
            _uri: tokenUri1,
            _name: nftName
        }
    });
    async function handleSubmit(data) {
        const name = data.data[0].inputResult;
        setNftName(name);
        const imageFile = data.data[1].inputResult;
        // console.log(imageFile)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", imageFile);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/add-nft", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            const tokenUri = response.data.tokenUri;
            setTokenUri(tokenUri);
        } catch (error) {
            console.error(error);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (tokenUri1) {
            updateMappingNft();
        }
    }, [
        tokenUri1,
        updateMappingNft
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "m-5",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3uikit_core__WEBPACK_IMPORTED_MODULE_6__.F, {
                buttonConfig: {
                    onClick: function noRefCheck() {},
                    theme: "outline"
                },
                onSubmit: handleSubmit,
                data: [
                    {
                        name: "NFT Name",
                        type: "text",
                        validation: {
                            required: true
                        },
                        inputWidth: "50%",
                        value: "",
                        key: "nftName"
                    },
                    {
                        inputWidth: "100%",
                        name: "Image",
                        type: "file",
                        validation: {
                            required: true
                        },
                        value: "",
                        key: "nftImage"
                    }, 
                ],
                title: "Add NFT to URI Array!",
                id: "Add NFT Form"
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6921:
/***/ ((module) => {

module.exports = require("react-moralis");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_exports__ = __webpack_require__.X(0, [372,119], () => (__webpack_exec__(7672)));
module.exports = __webpack_exports__;

})();