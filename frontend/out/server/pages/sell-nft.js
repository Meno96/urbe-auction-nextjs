"use strict";
(() => {
var exports = {};
exports.id = 430;
exports.ids = [430];
exports.modules = {

/***/ 4082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SellNft)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3uikit_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5372);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2810);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3uikit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6921);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moralis__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_UrbEVehicleNft_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4640);
/* harmony import */ var _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8036);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









function SellNft() {
    const { chainId , isWeb3Enabled , account  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)();
    const chainString = chainId ? parseInt(chainId).toString() : null;
    const urbEAuctionAddress = chainId ? _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_6__[chainString].UrbEAuction[0] : null;
    const urbEVehicleNftAddress = chainId ? _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_6__[chainString].UrbEVehicleNft[0] : null;
    const { 0: selectNames1 , 1: setSelectNames  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const { 0: selectedId , 1: setSelectedId  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const { 0: names1 , 1: setNames  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const dispatch = (0,web3uikit__WEBPACK_IMPORTED_MODULE_1__.useNotification)();
    const { runContractFunction  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)();
    async function sellNfts(data) {
        console.log("Minting...");
        const nftAddress = urbEVehicleNftAddress;
        const index = selectedId;
        const price = data.data[1].inputResult ? ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.parseUnits(data.data[1].inputResult, "ether").toString() : "0";
        const biddingTime = data.data[2].inputResult.toString();
        const tokenId = await getTokenCounter();
        const mintOptions = {
            abi: _constants_UrbEVehicleNft_json__WEBPACK_IMPORTED_MODULE_4__,
            contractAddress: nftAddress,
            functionName: "mintNft",
            params: {
                index: index
            }
        };
        await runContractFunction({
            params: mintOptions,
            onSuccess: (tx)=>handleMintSuccess(tx, nftAddress, tokenId, price, biddingTime)
            ,
            onError: (error)=>{
                console.log(error);
            }
        });
    }
    async function handleMintSuccess(tx1, nftAddress, tokenId, price, biddingTime) {
        console.log("Approving...");
        const receipt = await tx1.wait();
        if (receipt.status === 1) {
            dispatch({
                type: "success",
                title: "Minted!",
                position: "topR"
            });
            const approveOptions = {
                abi: _constants_UrbEVehicleNft_json__WEBPACK_IMPORTED_MODULE_4__,
                contractAddress: nftAddress,
                functionName: "approve",
                params: {
                    to: urbEAuctionAddress,
                    tokenId: tokenId
                }
            };
            await runContractFunction({
                params: approveOptions,
                onSuccess: (tx)=>handleApproveSuccess(tx, nftAddress, tokenId, price, biddingTime)
                ,
                onError: (error)=>{
                    console.log(error);
                }
            });
        } else {
            console.error("Transaction failed");
            dispatch({
                type: "error",
                title: "Mint failed",
                position: "topR"
            });
        }
    }
    async function handleApproveSuccess(tx2, nftAddress, tokenId, price, biddingTime) {
        console.log("Ok! Now time to list");
        const receipt = await tx2.wait();
        if (receipt.status === 1) {
            dispatch({
                type: "success",
                title: "Approved!",
                position: "topR"
            });
            const listOptions = {
                abi: _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_5__,
                contractAddress: urbEAuctionAddress,
                functionName: "listItem",
                params: {
                    nftAddress: nftAddress,
                    tokenId: tokenId,
                    price: price,
                    biddingTime: biddingTime
                }
            };
            await runContractFunction({
                params: listOptions,
                onSuccess: (tx)=>handleListSuccess(tx)
                ,
                onError: (error)=>{
                    console.log(error);
                }
            });
        } else {
            console.error("Transaction failed");
            dispatch({
                type: "error",
                title: "Approve failed",
                position: "topR"
            });
        }
    }
    async function handleListSuccess(tx) {
        console.log("NFT listed!");
        const receipt = await tx.wait();
        if (receipt.status === 1) {
            dispatch({
                type: "success",
                title: "NFT listed!",
                position: "topR"
            });
        } else {
            console.error("Transaction failed");
            dispatch({
                type: "error",
                title: "List failed",
                position: "topR"
            });
        }
    }
    const { runContractFunction: getNftInfos  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({
        abi: _constants_UrbEVehicleNft_json__WEBPACK_IMPORTED_MODULE_4__,
        contractAddress: urbEVehicleNftAddress,
        functionName: "getNftInfos",
        params: {}
    });
    const { runContractFunction: getTokenCounter  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({
        abi: _constants_UrbEVehicleNft_json__WEBPACK_IMPORTED_MODULE_4__,
        contractAddress: urbEVehicleNftAddress,
        functionName: "getTokenCounter",
        params: {}
    });
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (isWeb3Enabled) {
            async function getNameNfts() {
                const nfts = await getNftInfos();
                const names = [];
                for (const nft of nfts){
                    const name = nft.name;
                    names.push(name);
                }
                setNames(names);
                const selectNames = names.map((name, index)=>{
                    return {
                        id: index,
                        label: name
                    };
                });
                setSelectNames(selectNames);
            }
            getNameNfts();
        }
    }, [
        isWeb3Enabled
    ]);
    function handleNftNameChange(e) {
        if (e.target.id === "Nft Name_0") {
            setSelectedId(e.target.value);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "m-5",
            children: isWeb3Enabled && chainId && selectNames1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3uikit_core__WEBPACK_IMPORTED_MODULE_8__.F, {
                buttonConfig: {
                    onClick: function noRefCheck() {},
                    theme: "outline"
                },
                onSubmit: sellNfts,
                data: [
                    {
                        name: "Nft Name",
                        id: "select",
                        selectOptions: selectNames1,
                        type: "select",
                        value: "",
                        validation: {
                            required: true
                        }
                    },
                    {
                        name: "Price (in ETH)",
                        type: "number",
                        value: "0",
                        key: "price"
                    },
                    {
                        name: "Auction Time (in hour)",
                        type: "number",
                        value: "",
                        key: "time",
                        validation: {
                            required: true
                        }
                    }, 
                ],
                onChange: handleNftNameChange,
                title: "Sell an NFT!",
                id: "Sell NFT Form"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "Web3 Currently Not Enabled"
            })
        })
    });
};


/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

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

/***/ 2810:
/***/ ((module) => {

module.exports = require("web3uikit");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [372,119,41], () => (__webpack_exec__(4082)));
module.exports = __webpack_exports__;

})();