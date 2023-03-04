"use strict";
(() => {
var exports = {};
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 814:
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
/* harmony import */ var _utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6162);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UpdateListingModal__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_12__]);
([_UpdateListingModal__WEBPACK_IMPORTED_MODULE_8__, axios__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const truncateStr = (fullStr, strLen)=>{
    if (fullStr.length <= strLen) return fullStr;
    const separator = "...";
    const seperatorLength = separator.length;
    const charsToShow = strLen - seperatorLength;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);
    return fullStr.substring(0, frontChars) + separator + fullStr.substring(fullStr.length - backChars);
};
function NFTBox({ price , nftAddress , tokenId , urbEAuctionAddress , sellerWinner  }) {
    const { chainId , isWeb3Enabled , account  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)();
    const chainString = chainId ? parseInt(chainId).toString() : null;
    const { 0: imageURI1 , 1: setImageURI  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: tokenName , 1: setTokenName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: tokenDescription , 1: setTokenDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: highestBidder1 , 1: setHighestBidder  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: deployer1 , 1: setDeployer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: seller1 , 1: setSeller  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: intervalId , 1: setIntervalId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isTimeUp , 1: setIsTimeUp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showModal , 1: setShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isFlipped , 1: setIsFlipped  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const hideModal = ()=>setShowModal(false)
    ;
    const dispatch = (0,web3uikit__WEBPACK_IMPORTED_MODULE_6__.useNotification)();
    const { globalState , setGlobalState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_11__/* .GlobalStateContext */ .P);
    const { runContractFunction: getTokenURI  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({
        abi: _constants_UrbEVehicleNft_json__WEBPACK_IMPORTED_MODULE_4__,
        contractAddress: nftAddress,
        functionName: "tokenURI",
        params: {
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
    const { runContractFunction: auctionEnd  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({
        abi: _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_3__,
        contractAddress: urbEAuctionAddress,
        functionName: "auctionEnd",
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
                const highestBidder = listedItem.highestBidder;
                const seller = listedItem.seller;
                const deployer = await getDeployer();
                setDeployer(deployer);
                setHighestBidder(highestBidder);
                setSeller(seller);
            }
            initializeCard();
        }
    }, [
        isWeb3Enabled
    ]);
    const handleCardClick = async ()=>{
        setIsFlipped(!isFlipped);
    };
    const handleButtonClick = async ()=>{
        async function fetchTxHash() {
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_12__["default"].get("/api/fetch-txHash/", {
                    headers: {
                        tokenId: tokenId
                    }
                });
                const txHash = response.data.txHash;
                if (txHash) {
                    let etherscanLink = "";
                    if (chainString === "5") {
                        etherscanLink = `https://goerli.etherscan.io/tx/${txHash}`;
                    } else if (chainString === "1") {
                        etherscanLink = `https://etherscan.io/tx/${txHash}`;
                    }
                    window.open(etherscanLink, "_blank");
                }
            } catch (error) {
                console.error("Failed to fetch:", error);
            }
        }
        fetchTxHash();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "m-2",
        children: imageURI1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "group [perspective:400px] hover:scale-110 transition-all duration-500",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: handleCardClick,
                className: `h-[410px] w-[250px] relative cursor-pointer rounded-3xl transition-all duration-500 [transform-style:preserve-3d] bg-white bg-opacity-50 dark:bg-slate-800 dark:bg-opacity-50 border-solid border border-gray-200 dark:border-gray-700 ${isFlipped ? "[transform:rotateY(180deg)]" : ""}  `,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute h-full w-full p-5 dark:text-gray-300 [backface-visibility:hidden]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " flex flex-col gap-2 ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    "#",
                                                    tokenId
                                                ]
                                            }),
                                            globalState.isStaff ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "italic text-sm",
                                                children: [
                                                    "Winner: ",
                                                    truncateStr(sellerWinner || "", 15)
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "italic text-sm",
                                                children: [
                                                    "Sold by: ",
                                                    truncateStr(sellerWinner || "", 15)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-[250px] w-[200px]",
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
                                className: "flex justify-center mt-3 font-semibold text-lg text-sky-500",
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handleButtonClick,
                                className: "btn btn-outline-primary px-3 py-1 rounded-xl border-2 font-semibold text-[14px] hover:scale-125 transition ease-out duration-500 border-green-600 dark:bg-green-600 text-slate-800",
                                children: "Check Etherscan!"
                            })
                        })
                    })
                ]
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3uikit_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5372);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2810);
/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3uikit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9071);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6921);
/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_moralis__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8036);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_OwnedNFTBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(814);
/* harmony import */ var _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6162);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_OwnedNFTBox__WEBPACK_IMPORTED_MODULE_7__]);
_components_OwnedNFTBox__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function Account() {
    const { chainId , isWeb3Enabled , account  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_4__.useMoralis)();
    const chainString = chainId ? parseInt(chainId).toString() : null;
    const urbEAuctionAddress = chainId ? _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_5__[chainString].UrbEAuction[0] : null;
    const { runContractFunction  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_4__.useWeb3Contract)();
    const dispatch = (0,web3uikit__WEBPACK_IMPORTED_MODULE_1__.useNotification)();
    const { globalState , setGlobalState  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_utils_GlobalStateContext__WEBPACK_IMPORTED_MODULE_10__/* .GlobalStateContext */ .P);
    const { 0: deployer1 , 1: setDeployer  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const { 0: proceeds , 1: setProceeds  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("0");
    const { runContractFunction: getDeployer  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_4__.useWeb3Contract)({
        abi: _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_8__,
        contractAddress: urbEAuctionAddress,
        functionName: "getDeployer",
        params: {},
        onError: (error)=>console.log(error)
    });
    const { runContractFunction: getProceeds  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_4__.useWeb3Contract)({
        abi: _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_8__,
        contractAddress: urbEAuctionAddress,
        functionName: "getProceeds",
        params: {
            seller: account
        },
        onError: (error)=>console.log(error)
    });
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (isWeb3Enabled) {
            async function fetchDeployer() {
                const deployer = await getDeployer();
                setDeployer(deployer);
            }
            fetchDeployer();
        }
    }, [
        isWeb3Enabled
    ]);
    const { loading , error: error1 , data: ownedNfts ,  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_2__/* .GET_BUYED_ITEMS */ .t3, {
        pollInterval: 5000,
        variables: {
            account: account,
            deployer: deployer1
        }
    });
    const { loading: loadingSold , error: errorSold , data: soldNfts ,  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_2__/* .GET_SOLD_ITEMS */ .sU, {
        pollInterval: 5000,
        variables: {
            seller: account
        }
    });
    async function setupUI() {
        const returnedProceeds = await getProceeds();
        if (returnedProceeds) {
            setProceeds(returnedProceeds.toString());
        }
    }
    const handleWithdrawSuccess = ()=>{
        dispatch({
            type: "success",
            message: "Withdrawing proceeds",
            position: "topR"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setupUI();
    }, [
        proceeds,
        account,
        isWeb3Enabled,
        chainId
    ]);
    return(// <div className="max-w-[1536px] min-w-[880px] w-auto mx-auto flex flex-col">
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border-4 border-solid border-green-600 rounded-2xl p-4 m-5 max-w-[1536px] flex flex-col transition-all duration-500 bg-white bg-opacity-25 dark:bg-slate-900 dark:bg-opacity-20 backdrop-blur-md",
                children: [
                    globalState.isStaff ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mb-5 font-bold text-2xl",
                        children: "Sold NFTs"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mb-5 font-bold text-2xl",
                        children: "Owned NFTs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-row flex-wrap justify-center",
                        children: globalState.isStaff ? isWeb3Enabled && chainId && soldNfts ? loadingSold ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Loading..."
                        }) : soldNfts.auctionEndeds.length ? soldNfts.auctionEndeds.map((nft)=>{
                            const { price , nftAddress , tokenId , winner  } = nft;
                            return urbEAuctionAddress ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OwnedNFTBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                price: price,
                                nftAddress: nftAddress,
                                tokenId: tokenId,
                                urbEAuctionAddress: urbEAuctionAddress,
                                sellerWinner: winner
                            }, `${nftAddress}${tokenId}`) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Network error, please switch to a supported network."
                            });
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "No NFTs sold"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Web3 Currently Not Enabled"
                        }) : isWeb3Enabled && chainId && ownedNfts ? loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Loading..."
                        }) : ownedNfts.auctionEndeds.length ? ownedNfts.auctionEndeds.map((nft)=>{
                            const { price , nftAddress , tokenId , seller  } = nft;
                            return urbEAuctionAddress ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OwnedNFTBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                price: price,
                                nftAddress: nftAddress,
                                tokenId: tokenId,
                                urbEAuctionAddress: urbEAuctionAddress,
                                sellerWinner: seller
                            }, `${nftAddress}${tokenId}`) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Network error, please switch to a supported network."
                            });
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "No NFTs owned"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "Web3 Currently Not Enabled"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border-4 border-solid border-green-600 rounded-2xl p-4 m-5 self-center transition-all duration-500 bg-white bg-opacity-25 dark:bg-slate-900 dark:bg-opacity-20 backdrop-blur-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mb-5 font-bold text-2xl",
                        children: "Withdraw Proceeds"
                    }),
                    proceeds != 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            "Withdraw ",
                            ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.formatEther(proceeds),
                            " ETH"
                        ]
                    }),
                    proceeds != "0" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3uikit_core__WEBPACK_IMPORTED_MODULE_11__.i, {
                        theme: "outline",
                        onClick: ()=>{
                            runContractFunction({
                                params: {
                                    abi: _constants_UrbEAuction_json__WEBPACK_IMPORTED_MODULE_8__,
                                    contractAddress: urbEAuctionAddress,
                                    functionName: "withdrawProceeds",
                                    params: {}
                                },
                                onError: (error)=>console.log(error)
                                ,
                                onSuccess: ()=>handleWithdrawSuccess
                            });
                        },
                        text: "Withdraw",
                        type: "button"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "No proceeds detected"
                    })
                ]
            })
        ]
    }));
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,372,675,119,41,417], () => (__webpack_exec__(6156)));
module.exports = __webpack_exports__;

})();