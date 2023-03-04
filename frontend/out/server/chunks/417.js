"use strict";
exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 479:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UpdateListingModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2810);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3uikit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6921);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moralis__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_7__]);
([axios__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function UpdateListingModal({ nftAddress , tokenId , isVisible , urbEAuctionAddress , onClose , nftId , seller ,  }) {
    const { isWeb3Enabled , account  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)();
    const dispatch = (0,web3uikit__WEBPACK_IMPORTED_MODULE_1__.useNotification)();
    const { runContractFunction  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)();
    const csrfToken = js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("csrftoken");
    const { 0: priceToUpdateListingWith , 1: setPriceToUpdateListingWith  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const { 0: price1 , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { runContractFunction: getListing  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({
        abi: _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_3__,
        contractAddress: urbEAuctionAddress,
        functionName: "getListing",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (isWeb3Enabled) {
            async function getPrice() {
                const listedItem = await getListing(nftAddress, tokenId);
                const price = listedItem.price;
                setPrice(price);
            }
            getPrice();
        }
    }, [
        isWeb3Enabled
    ]);
    async function handleUpdateListingSuccess(tx) {
        try {
            onClose && onClose();
            const receipt = await tx.wait();
            if (receipt.status === 1) {
                dispatch({
                    type: "success",
                    title: "Bid Placed!",
                    position: "topR"
                });
                const formData = new FormData();
                formData.append("bidPrice", priceToUpdateListingWith);
                formData.append("bidder", account);
                formData.append("nftId", nftId);
                try {
                    const response = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].post("/", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "X-CSRFToken": csrfToken
                        }
                    });
                } catch (error) {
                    console.error(error);
                }
                setPriceToUpdateListingWith("0");
            } else {
                console.error("Transaction failed");
                dispatch({
                    type: "error",
                    title: "Transaction failed",
                    position: "topR"
                });
            }
        } catch (error) {
            console.error(error);
            dispatch({
                type: "error",
                title: "Transaction failed",
                position: "topR"
            });
        }
    }
    async function handleSubmit() {
        if (priceToUpdateListingWith > price1) {
            const placeBidOptions = {
                abi: _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_3__,
                contractAddress: urbEAuctionAddress,
                functionName: "placeBid",
                msgValue: priceToUpdateListingWith,
                params: {
                    nftAddress: nftAddress,
                    tokenId: tokenId
                }
            };
            await runContractFunction({
                params: placeBidOptions,
                onError: (error)=>{
                    console.log(error);
                },
                onSuccess: (tx)=>handleUpdateListingSuccess(tx)
            });
        } else {
            console.log("Price too low!");
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(web3uikit__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        isVisible: isVisible && account.toLowerCase() !== seller.toLowerCase(),
        onCancel: onClose,
        onCloseButtonPressed: onClose,
        width: "400px",
        onOk: handleSubmit,
        children: [
            priceToUpdateListingWith <= price1 && priceToUpdateListingWith > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-5 text-red-600",
                children: "Price too low."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(web3uikit__WEBPACK_IMPORTED_MODULE_1__.Input, {
                label: "Update listing price in L1 Currency (ETH)",
                name: "New listing price",
                type: "number",
                onChange: (event)=>{
                    setPriceToUpdateListingWith(ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(event.target.value || "0"));
                }
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fr": () => (/* binding */ GET_ACTIVE_ITEMS),
/* harmony export */   "sU": () => (/* binding */ GET_SOLD_ITEMS),
/* harmony export */   "t3": () => (/* binding */ GET_BUYED_ITEMS)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_ACTIVE_ITEMS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    {
        activeItems(first: 20, where: { winner: "0x0000000000000000000000000000000000000000" }) {
            id
            buyer
            winner
            nftAddress
            tokenId
            price
        }
    }
`;
const GET_BUYED_ITEMS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetAccountNfts($account: String!, $deployer: String!) {
        auctionEndeds(where: { winner: $account, winner_not: $deployer }) {
            id
            winner
            seller
            nftAddress
            tokenId
            price
        }
    }
`;
const GET_SOLD_ITEMS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetAccountNfts($seller: String!) {
        auctionEndeds(where: { seller: $seller }) {
            id
            winner
            seller
            nftAddress
            tokenId
            price
        }
    }
`;


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


/***/ })

};
;