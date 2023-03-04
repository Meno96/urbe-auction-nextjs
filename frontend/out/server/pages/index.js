"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NFTBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6921);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moralis__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _constants_UrbEVehicleNft_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4640);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2810);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3uikit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _UpdateListingModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(479);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9648);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UpdateListingModal__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_12__]);
([_UpdateListingModal__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const truncateStr = (fullStr, strLen)=>{
    if (fullStr.length <= strLen) return fullStr;
    const separator = "...";
    const seperatorLength = separator.length;
    const charsToShow = strLen - seperatorLength;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);
    return fullStr.substring(0, frontChars) + separator + fullStr.substring(fullStr.length - backChars);
};
const toHHMMSS = (seconds)=>{
    var sec_num = seconds // don't forget the second param
    ;
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return hours + "h " + minutes + "m " + seconds + "s";
};
function NFTBox({ price , nftAddress , tokenId , urbEAuctionAddress  }) {
    const { isWeb3Enabled , account  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)();
    const { 0: imageURI1 , 1: setImageURI  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: tokenName , 1: setTokenName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: tokenDescription , 1: setTokenDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: highestBidder1 , 1: setHighestBidder  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: seller1 , 1: setSeller  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: endTime1 , 1: setEndTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: startTime , 1: setStartTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: isFlipped , 1: setIsFlipped  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: timeRemaining , 1: setTimeRemaining  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: deployer1 , 1: setDeployer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: intervalId , 1: setIntervalId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isTimeUp , 1: setIsTimeUp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showModal , 1: setShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const hideModal = ()=>setShowModal(false)
    ;
    const dispatch = (0,web3uikit__WEBPACK_IMPORTED_MODULE_6__.useNotification)();
    const csrfToken = js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("csrftoken");
    const { runContractFunction  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)();
    const { runContractFunction: getTokenURI  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({
        abi: _constants_UrbEVehicleNft_json__WEBPACK_IMPORTED_MODULE_4__,
        contractAddress: nftAddress,
        functionName: "tokenURI",
        params: {
            tokenId: tokenId
        }
    });
    const { runContractFunction: cancelListing  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({
        abi: _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_3__,
        contractAddress: urbEAuctionAddress,
        functionName: "cancelListing",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId
        }
    });
    const { runContractFunction: getDeployer  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({
        abi: _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_3__,
        contractAddress: urbEAuctionAddress,
        functionName: "getDeployer",
        params: {}
    });
    const { runContractFunction: getListing  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({
        abi: _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_3__,
        contractAddress: urbEAuctionAddress,
        functionName: "getListing",
        params: {
            nftAddress: nftAddress,
            tokenId: tokenId
        }
    });
    async function updateUI() {
        const tokenURI = await getTokenURI();
        if (tokenURI) {
            const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");
            const tokenURIResponse = await (await fetch(requestURL)).json();
            const imageURI = tokenURIResponse.image;
            const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/");
            setImageURI(imageURIURL);
            setTokenName(tokenURIResponse.name);
            setTokenDescription(tokenURIResponse.description);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isWeb3Enabled) {
            updateUI();
        }
    }, [
        isWeb3Enabled
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isWeb3Enabled) {
            async function initializeCard() {
                const listedItem = await getListing(nftAddress, tokenId);
                const endTime = listedItem.endTime;
                const highestBidder = listedItem.highestBidder;
                const seller = listedItem.seller;
                const deployer = await getDeployer();
                setDeployer(deployer);
                setHighestBidder(highestBidder);
                setSeller(seller);
                if (endTime != 0) {
                    setIntervalId(setInterval(async ()=>{
                        const currentTimestamp = Math.floor(Date.now() / 1000) // converti il timestamp corrente in secondi
                        ;
                        const timeRemainingInSeconds = endTime - currentTimestamp // calcola il tempo rimanente in secondi
                        ;
                        setTimeRemaining(timeRemainingInSeconds) // aggiorna lo stato del tempo rimanente
                        ;
                        if (timeRemainingInSeconds <= 0) {
                            setTimeRemaining(0);
                            clearInterval(intervalId);
                        }
                    }, 1000) // aggiorna il timer ogni secondo
                    );
                }
            }
            initializeCard();
        }
    }, [
        isWeb3Enabled,
        endTime1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (timeRemaining === 0 && !isTimeUp) {
            setIsTimeUp(true);
            callAuctionEnd();
        }
    }, [
        timeRemaining
    ]);
    async function callAuctionEnd() {
        try {
            const listedItem = await getListing(nftAddress, tokenId);
            const priceETH = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.formatEther(listedItem.price);
            const auctionData = {
                nftId: tokenId,
                winner: listedItem.highestBidder,
                priceETH: priceETH.toString()
            };
            const auctionJson = JSON.stringify(auctionData);
            const auctionBytes = new TextEncoder().encode(auctionJson);
            const auctionHexString = [];
            auctionBytes.forEach((byte)=>{
                auctionHexString.push(("0" + byte.toString(16)).slice(-2));
            });
            const auctionString = "0x" + auctionHexString.join("");
            const auctionEndOptions = {
                abi: _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_3__,
                contractAddress: urbEAuctionAddress,
                functionName: "auctionEnd",
                params: {
                    nftAddress: nftAddress,
                    tokenId: tokenId,
                    auctionJson: auctionString
                }
            };
            const tx1 = await runContractFunction({
                params: auctionEndOptions,
                onSuccess: (tx)=>handleAuctionEndSuccess(tx, listedItem)
                ,
                onError: (error)=>console.log(error)
            });
        } catch (error) {
            console.error(error);
        }
    }
    async function handleAuctionEndSuccess(tx, listedItem) {
        const receipt = await tx.wait();
        if (receipt.status === 1) {
            dispatch({
                type: "success",
                title: "Nft Transfered!",
                position: "topR"
            });
            const formData = new FormData();
            formData.append("nftId", tokenId);
            formData.append("winner", listedItem.highestBidder);
            formData.append("price", listedItem.price);
            formData.append("txHash", tx.hash);
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_11__["default"].post("/end-auction", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-CSRFToken": csrfToken
                    }
                });
            } catch (error) {
                console.error(error);
            }
        } else {
            dispatch({
                type: "error",
                title: "Nft Transfer failed!",
                position: "topR"
            });
        }
    }
    const isHighestBidder = highestBidder1.toLowerCase() === account.toLowerCase() || highestBidder1 === undefined;
    const formattedHighestBidderAddress = isHighestBidder ? "You" : truncateStr(highestBidder1 || "", 15);
    const handleCardClick = async ()=>{
        setIsFlipped(!isFlipped);
    };
    const handleButtonClick = async ()=>{
        const isSeller = seller1.toLowerCase() === account.toLowerCase() || seller1 === undefined;
        isSeller ? cancelListing({
            onError: (error)=>console.log(error)
            ,
            onSuccess: ()=>handleCancelItemSuccess()
        }) : setShowModal(true);
    };
    const handleCancelItemSuccess = ()=>{
        dispatch({
            type: "success",
            title: "Item canceled!",
            position: "topR"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "m-2",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: imageURI1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UpdateListingModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        isVisible: showModal,
                        tokenId: tokenId,
                        urbEAuctionAddress: urbEAuctionAddress,
                        nftAddress: nftAddress,
                        onClose: hideModal,
                        nftId: tokenId,
                        seller: seller1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "group [perspective:400px] hover:scale-110 transition-all duration-500",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: handleCardClick,
                            className: `relative h-[410px] !w-[250px] cursor-pointer rounded-3xl sc-iveFHk kKQXBH transition-all duration-500 [transform-style:preserve-3d]  ${isFlipped ? "[transform:rotateY(180deg)]" : ""}  `,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "absolute h-full w-full p-5 dark:text-gray-300 [backface-visibility:hidden]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                "#",
                                                                tokenId
                                                            ]
                                                        }),
                                                        timeRemaining <= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "italic text-sm",
                                                            children: "The auction has ended"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "italic text-sm",
                                                            children: toHHMMSS(timeRemaining)
                                                        })
                                                    ]
                                                }),
                                                highestBidder1.toLowerCase() != seller1.toLowerCase() ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mb-5 italic text-sm self-end",
                                                    children: [
                                                        "Highest bidder: ",
                                                        formattedHighestBidderAddress
                                                    ]
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mb-5 italic text-sm self-end",
                                                    children: "No Bid"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "h-[200px] w-[200px] relative",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        loader: ()=>imageURI1
                                                        ,
                                                        src: imageURI1,
                                                        layout: "fill",
                                                        objectFit: "contain"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mt-5 font-bold self-end",
                                                    children: [
                                                        ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.formatUnits(price, "ether"),
                                                        " ETH"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex justify-center mt-3 font-semibold text-lg",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: tokenName
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute h-full w-full p-5 flex justify-center transition duration-500 dark:text-gray-300 [transform:rotateY(180deg)] [backface-visibility:hidden]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center",
                                        children: account.toLowerCase() === seller1.toLowerCase() ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: handleButtonClick,
                                            className: "btn btn-outline-primary px-3 py-1 rounded-xl border-2 font-semibold text-[14px] hover:scale-125 transition ease-out duration-500 border-green-600 dark:bg-green-600 text-slate-800",
                                            children: "Cancel Listing"
                                        }) : timeRemaining > 0 && account.toLowerCase() !== deployer1.toLowerCase() && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: handleButtonClick,
                                            className: "btn btn-outline-primary px-3 py-1 rounded-xl border-2 font-semibold text-[14px] hover:scale-125 transition ease-out duration-500 border-green-600 dark:bg-green-600 text-slate-800",
                                            children: "Place a Bid!"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "Loading..."
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6921);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moralis__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8036);
/* harmony import */ var _constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9071);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_NFTBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8242);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2411);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9648);
/* harmony import */ var _utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6162);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_NFTBox__WEBPACK_IMPORTED_MODULE_7__, postcss__WEBPACK_IMPORTED_MODULE_9__, axios__WEBPACK_IMPORTED_MODULE_10__]);
([_components_NFTBox__WEBPACK_IMPORTED_MODULE_7__, postcss__WEBPACK_IMPORTED_MODULE_9__, axios__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Home() {
    const { chainId , isWeb3Enabled  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)();
    const chainString = chainId ? parseInt(chainId).toString() : null;
    const urbEAuctionAddress = chainId ? _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_4__[chainString].UrbEAuction[0] : null;
    const { globalState , setGlobalState  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_11__/* .GlobalStateContext */ .P);
    const { loading , error , data: listedNfts , startPolling , stopPolling ,  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_5__/* .GET_ACTIVE_ITEMS */ .Fr, {
        pollInterval: 1000
    });
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        if (isWeb3Enabled && chainId) {
            startPolling(1000) // avvia il polling all'avvio della componente
            ;
            return ()=>stopPolling() // ferma il polling quando la componente viene smontata
            ;
        }
    }, [
        isWeb3Enabled,
        chainId,
        startPolling,
        stopPolling
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container mx-auto",
        children: [
            globalState.checkIp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "p-5 text-red-600 font-semibold",
                    children: "Your actual ip address is different from the last login. We suggest you to change password."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "p-4 font-bold text-2xl",
                children: "Recently Listed"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-wrap",
                children: isWeb3Enabled && chainId ? loading || !listedNfts ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "Loading..."
                }) : listedNfts.activeItems.map((nft)=>{
                    const { price , nftAddress , tokenId  } = nft;
                    return urbEAuctionAddress ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NFTBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        price: price,
                        nftAddress: nftAddress,
                        tokenId: tokenId,
                        urbEAuctionAddress: urbEAuctionAddress
                    }, `${nftAddress}${tokenId}`) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Network error, please switch to a supported network."
                    });
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "Web3 Currently Not Enabled"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 2810:
/***/ ((module) => {

module.exports = require("web3uikit");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 2411:
/***/ ((module) => {

module.exports = import("postcss");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,119,41,417], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();