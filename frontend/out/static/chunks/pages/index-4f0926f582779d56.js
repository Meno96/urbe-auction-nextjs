(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{78581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(70768)}])},90479:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(34051),s=t.n(r),i=t(85893),a=t(83866),o=t(83078),c=t(50041),u=t(25009),l=t(67294),d=t(8433),f=t(31955);function p(e,n,t,r,s,i,a){try{var o=e[i](a),c=o.value}catch(u){return void t(u)}o.done?n(c):Promise.resolve(c).then(r,s)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function a(e){p(i,r,s,a,o,"next",e)}function o(e){p(i,r,s,a,o,"throw",e)}a(void 0)}))}}function x(e){var n=e.nftAddress,t=e.tokenId,r=e.isVisible,p=e.urbEAuctionAddress,x=e.onClose,v=e.nftId,m=e.seller,b=(0,o.Nr)(),w=b.isWeb3Enabled,k=b.account,g=(0,a.lm)(),y=(0,o.JX)().runContractFunction,N=f.Z.get("csrftoken"),j=(0,l.useState)(0),C=j[0],A=j[1],I=(0,l.useState)(null),E=I[0],S=I[1],L=(0,o.JX)({abi:c,contractAddress:p,functionName:"getListing",params:{nftAddress:n,tokenId:t}}).runContractFunction;function P(e){return T.apply(this,arguments)}function T(){return(T=h(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x&&x(),e.next=4,n.wait();case 4:if(1!==e.sent.status){e.next=23;break}return g({type:"success",title:"Bid Placed!",position:"topR"}),(t=new FormData).append("bidPrice",C),t.append("bidder",k),t.append("nftId",v),e.prev=11,e.next=14,d.Z.post("/",t,{headers:{"Content-Type":"multipart/form-data","X-CSRFToken":N}});case 14:e.sent,e.next=20;break;case 17:e.prev=17,e.t0=e.catch(11),console.error(e.t0);case 20:A("0"),e.next=24;break;case 23:console.error("Transaction failed"),g({type:"error",title:"Transaction failed",position:"topR"});case 24:e.next=30;break;case 26:e.prev=26,e.t1=e.catch(0),console.error(e.t1),g({type:"error",title:"Transaction failed",position:"topR"});case 30:case"end":return e.stop()}}),e,null,[[0,26],[11,17]])})))).apply(this,arguments)}function F(){return(F=h(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(C>E)){e.next=6;break}return r={abi:c,contractAddress:p,functionName:"placeBid",msgValue:C,params:{nftAddress:n,tokenId:t}},e.next=4,y({params:r,onError:function(e){console.log(e)},onSuccess:function(e){return P(e)}});case 4:e.next=7;break;case 6:console.log("Price too low!");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){if(w){function e(){return r.apply(this,arguments)}function r(){return(r=h(s().mark((function e(){var r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(n,t);case 2:r=e.sent,i=r.price,S(i);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e()}}),[w]),(0,i.jsxs)(a.u_,{isVisible:r&&k.toLowerCase()!==m.toLowerCase(),onCancel:x,onCloseButtonPressed:x,width:"400px",onOk:function(){return F.apply(this,arguments)},children:[C<=E&&C>0&&(0,i.jsx)("div",{className:"mb-5 text-red-600",children:"Price too low."}),(0,i.jsx)(a.II,{label:"Update listing price in L1 Currency (ETH)",name:"New listing price",type:"number",onChange:function(e){A(u.fi(e.target.value||"0"))}})]})}},69071:function(e,n,t){"use strict";t.d(n,{Fr:function(){return c},sU:function(){return l},t3:function(){return u}});var r=t(17283);function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function i(){var e=s(['\n    {\n        activeItems(first: 20, where: { winner: "0x0000000000000000000000000000000000000000" }) {\n            id\n            buyer\n            winner\n            nftAddress\n            tokenId\n            price\n        }\n    }\n']);return i=function(){return e},e}function a(){var e=s(["\n    query GetAccountNfts($account: String!, $deployer: String!) {\n        auctionEndeds(where: { winner: $account, winner_not: $deployer }) {\n            id\n            winner\n            seller\n            nftAddress\n            tokenId\n            price\n        }\n    }\n"]);return a=function(){return e},e}function o(){var e=s(["\n    query GetAccountNfts($seller: String!) {\n        auctionEndeds(where: { seller: $seller }) {\n            id\n            winner\n            seller\n            nftAddress\n            tokenId\n            price\n        }\n    }\n"]);return o=function(){return e},e}var c=(0,r.Ps)(i()),u=(0,r.Ps)(a()),l=(0,r.Ps)(o())},70768:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var r=t(85893),s=(t(9008),t(25675)),i=t.n(s),a=t(83078),o=t(48036),c=t(69071),u=t(3056),l=t(34051),d=t.n(l),f=t(67294),p=t(50041),h=t(34640),x=t(83866),v=t(25009),m=t(90479),b=(t(37918),t(8433)),w=t(31955);function k(e,n,t,r,s,i,a){try{var o=e[i](a),c=o.value}catch(u){return void t(u)}o.done?n(c):Promise.resolve(c).then(r,s)}function g(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function a(e){k(i,r,s,a,o,"next",e)}function o(e){k(i,r,s,a,o,"throw",e)}a(void 0)}))}}var y=function(e){var n=e,t=Math.floor(n/3600),r=Math.floor((n-3600*t)/60);e=n-3600*t-60*r;return t<10&&(t="0"+t),r<10&&(r="0"+r),e<10&&(e="0"+e),t+"h "+r+"m "+e+"s"};function N(e){var n=e.price,t=e.nftAddress,s=e.tokenId,o=e.urbEAuctionAddress,c=(0,a.Nr)(),u=c.isWeb3Enabled,l=c.account,k=(0,f.useState)(""),N=k[0],j=k[1],C=(0,f.useState)(""),A=C[0],I=C[1],E=(0,f.useState)(""),S=(E[0],E[1]),L=(0,f.useState)(""),P=L[0],T=L[1],F=(0,f.useState)(""),_=F[0],X=F[1],R=(0,f.useState)(""),B=R[0],J=(R[1],(0,f.useState)("")),H=(J[0],J[1],(0,f.useState)(!1)),O=H[0],M=H[1],Z=(0,f.useState)(""),$=Z[0],W=Z[1],D=(0,f.useState)(!0),U=D[0],V=D[1],Y=(0,f.useState)(null),G=Y[0],q=Y[1],z=(0,f.useState)(null),K=(z[0],z[1],(0,f.useState)(!1)),Q=K[0],ee=K[1],ne=(0,f.useState)(!1),te=ne[0],re=ne[1],se=(0,x.lm)(),ie=w.Z.get("csrftoken"),ae=(0,a.JX)().runContractFunction,oe=(0,a.JX)({abi:h,contractAddress:t,functionName:"tokenURI",params:{tokenId:s}}).runContractFunction,ce=(0,a.JX)({abi:p,contractAddress:o,functionName:"cancelListing",params:{nftAddress:t,tokenId:s}}).runContractFunction,ue=(0,a.JX)({abi:p,contractAddress:o,functionName:"getDeployer",params:{}}).runContractFunction,le=(0,a.JX)({abi:p,contractAddress:o,functionName:"getListing",params:{nftAddress:t,tokenId:s}}).runContractFunction;function de(){return(de=g(d().mark((function e(){var n,t,r,s,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:if(!(n=e.sent)){e.next=15;break}return t=n.replace("ipfs://","https://ipfs.io/ipfs/"),e.next=7,fetch(t);case 7:return e.next=9,e.sent.json();case 9:r=e.sent,s=r.image,i=s.replace("ipfs://","https://ipfs.io/ipfs/"),j(i),I(r.name),S(r.description);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return(fe=g(d().mark((function e(){var n,r,i,a,c,u,l,f;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le(t,s);case 3:return n=e.sent,r=v.dF(n.price),i={nftId:s,winner:n.highestBidder,priceETH:r.toString()},a=JSON.stringify(i),c=(new TextEncoder).encode(a),u=[],c.forEach((function(e){u.push(("0"+e.toString(16)).slice(-2))})),l="0x"+u.join(""),f={abi:p,contractAddress:o,functionName:"auctionEnd",params:{nftAddress:t,tokenId:s,auctionJson:l}},e.next=14,ae({params:f,onSuccess:function(e){return pe(e,n)},onError:function(e){return console.log(e)}});case 14:e.sent,e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}function pe(e,n){return he.apply(this,arguments)}function he(){return(he=g(d().mark((function e(n,t){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.wait();case 2:if(1!==e.sent.status){e.next=21;break}return se({type:"success",title:"Nft Transfered!",position:"topR"}),(r=new FormData).append("nftId",s),r.append("winner",t.highestBidder),r.append("price",t.price),r.append("txHash",n.hash),e.prev=10,e.next=13,b.Z.post("/end-auction",r,{headers:{"Content-Type":"multipart/form-data","X-CSRFToken":ie}});case 13:e.sent,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(10),console.error(e.t0);case 19:e.next=22;break;case 21:se({type:"error",title:"Nft Transfer failed!",position:"topR"});case 22:case"end":return e.stop()}}),e,null,[[10,16]])})))).apply(this,arguments)}(0,f.useEffect)((function(){u&&function(){de.apply(this,arguments)}()}),[u]),(0,f.useEffect)((function(){if(u){function e(){return n.apply(this,arguments)}function n(){return(n=g(d().mark((function e(){var n,r,i,a,o;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(t,s);case 2:return n=e.sent,r=n.endTime,i=n.highestBidder,a=n.seller,e.next=8,ue();case 8:o=e.sent,V(o),T(i),X(a),0!=r&&q(setInterval(g(d().mark((function e(){var n,t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Math.floor(Date.now()/1e3),W(t=r-n),t<=0&&(W(0),clearInterval(G));case 4:case"end":return e.stop()}}),e)}))),1e3));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e()}}),[u,B]),(0,f.useEffect)((function(){0!==$||Q||(ee(!0),function(){fe.apply(this,arguments)}())}),[$]);var xe=P.toLowerCase()===l.toLowerCase()||void 0===P?"You":function(e,n){if(e.length<=n)return e;var t=n-"...".length,r=Math.ceil(t/2),s=Math.floor(t/2);return e.substring(0,r)+"..."+e.substring(e.length-s)}(P||"",15),ve=function(){var e=g(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M(!O);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=g(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.toLowerCase()===l.toLowerCase()||void 0===_?ce({onError:function(e){return console.log(e)},onSuccess:function(){return be()}}):re(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){se({type:"success",title:"Item canceled!",position:"topR"})};return(0,r.jsx)("div",{className:"m-2",children:(0,r.jsx)("div",{children:N?(0,r.jsxs)("div",{children:[(0,r.jsx)(m.Z,{isVisible:te,tokenId:s,urbEAuctionAddress:o,nftAddress:t,onClose:function(){return re(!1)},nftId:s,seller:_}),(0,r.jsx)("div",{className:"group [perspective:400px] hover:scale-110 transition-all duration-500",children:(0,r.jsxs)("div",{onClick:ve,className:"relative h-[410px] !w-[250px] cursor-pointer rounded-3xl sc-iveFHk kKQXBH transition-all duration-500 [transform-style:preserve-3d]  ".concat(O?"[transform:rotateY(180deg)]":"","  "),children:[(0,r.jsxs)("div",{className:"absolute h-full w-full p-5 dark:text-gray-300 [backface-visibility:hidden]",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,r.jsxs)("div",{children:["#",s]}),$<=0?(0,r.jsx)("div",{className:"italic text-sm",children:"The auction has ended"}):(0,r.jsx)("div",{className:"italic text-sm",children:y($)})]}),P.toLowerCase()!=_.toLowerCase()?(0,r.jsxs)("div",{className:"mb-5 italic text-sm self-end",children:["Highest bidder: ",xe]}):(0,r.jsx)("div",{className:"mb-5 italic text-sm self-end",children:"No Bid"}),(0,r.jsx)("div",{className:"h-[200px] w-[200px] relative",children:(0,r.jsx)(i(),{loader:function(){return N},src:N,layout:"fill",objectFit:"contain"})}),(0,r.jsxs)("div",{className:"mt-5 font-bold self-end",children:[v.bM(n,"ether")," ETH"]})]}),(0,r.jsx)("div",{className:"flex justify-center mt-3 font-semibold text-lg",children:(0,r.jsx)("h2",{children:A})})]}),(0,r.jsx)("div",{className:"absolute h-full w-full p-5 flex justify-center transition duration-500 dark:text-gray-300 [transform:rotateY(180deg)] [backface-visibility:hidden]",children:(0,r.jsx)("div",{className:"flex items-center",children:l.toLowerCase()===_.toLowerCase()?(0,r.jsx)("button",{onClick:me,className:"btn btn-outline-primary px-3 py-1 rounded-xl border-2 font-semibold text-[14px] hover:scale-125 transition ease-out duration-500 border-green-600 dark:bg-green-600 text-slate-800",children:"Cancel Listing"}):$>0&&l.toLowerCase()!==U.toLowerCase()&&(0,r.jsx)("button",{onClick:me,className:"btn btn-outline-primary px-3 py-1 rounded-xl border-2 font-semibold text-[14px] hover:scale-125 transition ease-out duration-500 border-green-600 dark:bg-green-600 text-slate-800",children:"Place a Bid!"})})})]})})]}):(0,r.jsx)("div",{children:"Loading..."})})})}t(39973);var j=t(16162);function C(){var e=(0,a.Nr)(),n=e.chainId,t=e.isWeb3Enabled,s=n?parseInt(n).toString():null,i=n?o[s].UrbEAuction[0]:null,l=(0,f.useContext)(j.P),d=l.globalState,p=(l.setGlobalState,(0,u.a)(c.Fr,{pollInterval:1e3})),h=p.loading,x=(p.error,p.data),v=p.startPolling,m=p.stopPolling;return(0,f.useEffect)((function(){if(t&&n)return v(1e3),function(){return m()}}),[t,n,v,m]),(0,r.jsxs)("div",{className:"container mx-auto",children:[d.checkIp&&(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)("p",{className:"p-5 text-red-600 font-semibold",children:"Your actual ip address is different from the last login. We suggest you to change password."})}),(0,r.jsx)("h1",{className:"p-4 font-bold text-2xl",children:"Recently Listed"}),(0,r.jsx)("div",{className:"flex flex-wrap",children:t&&n?h||!x?(0,r.jsx)("div",{children:"Loading..."}):x.activeItems.map((function(e){var n=e.price,t=e.nftAddress,s=e.tokenId;return i?(0,r.jsx)(N,{price:n,nftAddress:t,tokenId:s,urbEAuctionAddress:i},"".concat(t).concat(s)):(0,r.jsx)("div",{children:"Network error, please switch to a supported network."})})):(0,r.jsx)("div",{children:"Web3 Currently Not Enabled"})})]})}},22868:function(){},14777:function(){},99830:function(){},70209:function(){}},function(e){e.O(0,[8543,1333,9973,9774,2888,179],(function(){return n=78581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);