(this.webpackJsonpinvestandmultiply=this.webpackJsonpinvestandmultiply||[]).push([[0],{102:function(e,t){},115:function(e,t){},218:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),s=a(69),o=a.n(s),c=a(2),l=a.n(c),i=a(15),d=a(70),m=a.n(d),u={tronWeb:!1,contract:!1,setTronWeb(e){this.tronWeb=e},setContract(e,t){var a=this;return Object(i.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.contract().at(t);case 2:a.contract=n.sent;case 3:case"end":return n.stop()}}),n)})))()}},p=a(3),v=a(4),b=a(9),h=a(7),w=a(6),f="T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb",E="TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",g="TEEuz4218xVwT1EJ61DqxywPgqGDmS9SqW",x=function(e){Object(h.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={min:10},n.deposit=n.deposit.bind(Object(b.a)(n)),n.estado=n.estado.bind(Object(b.a)(n)),n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.setContract(window.tronWeb,g);case 2:this.estado(),setInterval((function(){return t.estado()}),3e3);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"estado",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r,s,o,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:return t=e.sent,t=window.tronWeb.address.fromHex(t.address),a=t.substr(0,4),n=t.substr(-4),r=a+"..."+n,document.getElementById("login").innerHTML='<a href="https://tronscan.io/#/address/'+t+'" class="logibtn gradient-btn">'+r+"</a>",document.getElementById("contrato").innerHTML='<a class="scroll" target="_black" rel="noopener noreferrer" href="https://tronscan.io/#/contract/'+g+'/code">Contrato</a>',s=10,e.next=12,window.tronWeb;case 12:return o=e.sent,e.next=15,o.contract().at(E);case 15:return c=e.sent,e.next=18,c.allowance(t,g).call();case 18:i=e.sent,i=(i=parseInt(i.remaining._hex))>0?"Depositar":"Aprobar",this.setState({min:s,deposito:i});case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deposit",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r,s,o,c,i,d,m,p,v,b,h,w,x;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.min,a=document.getElementById("amount").value,a=parseFloat(a),a=parseInt(1e6*a),e.next=6,window.tronWeb.trx.getAccount();case 6:return n=e.sent,n=window.tronWeb.address.fromHex(n.address),e.next=10,window.tronWeb;case 10:return r=e.sent,e.next=13,r.contract().at(E);case 13:return s=e.sent,e.next=16,s.allowance(n,g).call();case 16:if(o=e.sent,!((o=parseInt(o.remaining._hex))>=a)){e.next=53;break}if(!((c=document.location.href).indexOf("?")>0)){e.next=37;break}for(i=c.split("?")[1],d=i.split("&"),m={},p=0,v=d.length;p<v;p++)b=d[p].split("="),m[b[0]]=unescape(decodeURI(b[1]));if(!m.ref){e.next=34;break}return b=m.ref.split("#"),e.next=29,u.contract.investors(b[0]).call();case 29:h=e.sent,console.log(h),h.registered?document.getElementById("sponsor").value=b[0]:document.getElementById("sponsor").value=f,e.next=35;break;case 34:document.getElementById("sponsor").value=f;case 35:e.next=38;break;case 37:document.getElementById("sponsor").value=f;case 38:return w=document.getElementById("sponsor").value,e.next=41,u.contract.investors(n).call();case 41:if((x=e.sent).registered&&(w=x.sponsor),!(a>=t)){e.next=49;break}return document.getElementById("amount").value="",e.next=47,u.contract.deposit(a,w).send();case 47:e.next=51;break;case 49:window.alert("Please enter an amount greater than 10 USDT"),document.getElementById("amount").value=10;case 51:e.next=63;break;case 53:if(!(a>10&&o>10)){e.next=57;break}a>o?o<=0?(document.getElementById("amount").value=10,window.alert("You do not have enough funds in your account you place at least 10 USDT")):(document.getElementById("amount").value=10,window.alert("You must leave 50 TRX free in your account to make the transaction")):(document.getElementById("amount").value=a,window.alert("You must leave 50 TRX free in your account to make the transaction")),e.next=63;break;case 57:if(!(o<=0)){e.next=62;break}return e.next=60,s.approve(g,"115792089237316195423570985008687907853269984665640564039457584007913129639935").send();case 60:e.next=63;break;case 62:window.alert("You do not have enough funds in your account you place at least 250 TRX");case 63:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.min;return t="Min. "+t+" USDT",r.a.createElement("div",null,r.a.createElement("h6",{className:"text-center"},"Return: ",r.a.createElement("strong",null,"200%"),r.a.createElement("br",null)),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("input",{type:"number",className:"form-control mb-20 text-center",id:"amount",placeholder:t}),r.a.createElement("p",{className:"card-text"},"You must have ~ 50 TRX to make the transaction"),r.a.createElement("a",{href:"#amount",className:"gradient-btn v2",onClick:function(){return e.deposit()}},this.state.deposito)))}}]),a}(n.Component);class k extends n.Component{constructor(e){super(e),this.state={totalInvestors:0,totalInvested:0,totalRefRewards:0},this.totalInvestors=this.totalInvestors.bind(this)}componentDidMount(){var e=this;return Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,g);case 2:setInterval((()=>e.totalInvestors()),1e3);case 3:case"end":return t.stop()}}),t)})))()}totalInvestors(){var e=this;return Object(i.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.contract.setstate().call();case 2:a=t.sent,e.setState({totalInvestors:parseInt(a.Investors._hex),totalInvested:parseInt(a.Invested._hex)/1e6,totalRefRewards:parseInt(a.RefRewards._hex)/1e6});case 4:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.totalInvestors,a=e.totalInvested,n=e.totalRefRewards,s="https://tronscan.io/#/contract/"+g+"/code";return r.a.createElement("div",{className:"single-about-area wow fadeInUp"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("a",{href:s,className:"single-about"},r.a.createElement("div",{className:"single-about-img"},r.a.createElement("img",{src:"assets/img/about-icon-1.png",alt:""})),r.a.createElement("div",{className:"single-about-text"},r.a.createElement("h1",null,t),r.a.createElement("p",null,"Global Investors")))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("a",{href:s,className:"single-about"},r.a.createElement("div",{className:"single-about-img"},r.a.createElement("img",{src:"assets/img/about-icon-2.png",alt:""})),r.a.createElement("div",{className:"single-about-text"},r.a.createElement("h1",null,a," USDT"),r.a.createElement("p",null,"Global Inverted")))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("a",{href:s,className:"single-about"},r.a.createElement("div",{className:"single-about-img"},r.a.createElement("img",{src:"assets/img/about-icon-3.png",alt:""})),r.a.createElement("div",{className:"single-about-text"},r.a.createElement("h1",null,n," USDT"),r.a.createElement("p",null,"Global Referral Rewards")))))),r.a.createElement("div",{class:"space-90"}))}}var I=a(74);class N extends n.Component{constructor(e){super(e),this.state={direccion:"",link:"Haz una inversi\xf3n para obtener el LINK de referido",registered:!1,balanceRef:0,totalRef:0,invested:0,paidAt:0,my:0,withdrawn:0},this.Investors=this.Investors.bind(this),this.Link=this.Link.bind(this),this.withdraw=this.withdraw.bind(this)}componentDidMount(){var e=this;return Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,g);case 2:setInterval((()=>e.Investors()),300),setInterval((()=>e.Link()),1e3);case 4:case"end":return t.stop()}}),t)})))()}Link(){var e=this;return Object(i.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.registered){t.next=12;break}return(a=document.location.href).indexOf("?")>0&&(a=a.split("?")[0]),t.next=6,window.tronWeb.trx.getAccount();case 6:n=t.sent,n=window.tronWeb.address.fromHex(n.address),n=a+"?ref="+n,e.setState({link:n}),t.next=13;break;case 12:e.setState({link:"Haz una inversi\xf3n para obtener el LINK de referido"});case 13:case"end":return t.stop()}}),t)})))()}Investors(){var e=this;return Object(i.a)(l.a.mark((function t(){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getAccount();case 2:return a=t.sent,t.next=5,u.contract.investors(a.address).call();case 5:return n=t.sent,t.next=8,u.contract.MYwithdrawable().call();case 8:r=t.sent,e.setState({direccion:window.tronWeb.address.fromHex(a.address),registered:n.registered,balanceRef:parseInt(n.balanceRef._hex)/1e6,totalRef:parseInt(n.totalRef._hex)/1e6,invested:parseInt(n.invested._hex)/1e6,paidAt:parseInt(n.paidAt._hex)/1e6,my:parseInt(r.amount._hex)/1e6,withdrawn:parseInt(n.withdrawn._hex)/1e6});case 10:case"end":return t.stop()}}),t)})))()}withdraw(){return Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.contract.withdraw().send();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})))()}render(){var e=this.state,t=e.balanceRef,a=e.totalRef,n=e.invested,s=e.withdrawn,o=e.my,c=e.direccion,l=e.link,i=t+o;return i=i.toFixed(6),i=parseFloat(i),t=t.toFixed(2),t=parseFloat(t),a=a.toFixed(2),a=parseFloat(a),n=n.toFixed(2),n=parseFloat(n),s=s.toFixed(2),s=parseFloat(s),o=o.toFixed(6),o=parseFloat(o),r.a.createElement("section",{id:"office",className:"simple-services-area section-gap"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("header",{className:"section-header"},r.a.createElement("h3",{className:"white"},r.a.createElement("span",{style:{fontweight:"bold"}},"Mi Oficina:")),r.a.createElement("p",null,c),r.a.createElement("br",null),r.a.createElement("h3",{className:"white"},"Link de referido:"),r.a.createElement("h6",{className:"aboutus-area",style:{padding:"1.5em",fontSize:"11px"}},r.a.createElement("a",{href:l},l),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(I.CopyToClipboard,{text:l},r.a.createElement("button",{type:"button",style:{cursor:"pointer"},className:"btn btn-primary"},"Copiar al portapapeles"))),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},n," USDT"),r.a.createElement("p",null,"Total invertido")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},a," USDT"),r.a.createElement("p",null,"Ganado por referidos")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},o," USDT"),r.a.createElement("p",null,"Ganancias")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},i," USDT"),r.a.createElement("p",null,"Disponible")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},i," USDT"),r.a.createElement("p",null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:()=>this.withdraw()},"Retirar"))),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},s," USDT"),r.a.createElement("p",null,"Retirado")))))}}var y=a(75),W=a.n(y),T="https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/",R=r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("img",{src:W.a,className:"img-fluid",alt:"TronLink logo"})),j=()=>{window.open(T,"_blank")},S=e=>{var t=e.installed;return void 0!==t&&t?r.a.createElement(r.a.Fragment,null,"  ",r.a.createElement("a",{href:"/"},r.a.createElement("div",{className:"tronLink row",style:{padding:"3em",decoration:"none",color:"black"}},r.a.createElement("div",{className:"info col-sm-8"},r.a.createElement("h1",null,"Log in Required"),r.a.createElement("p",null,"TronLink is installed but you must first log in. Open TronLink from the browser bar and set up your first wallet or decrypt a previously created wallet.")),R))):r.a.createElement("div",{className:"row",onClick:j},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("h1",null,"TronLink Required"),r.a.createElement("p",null,"To create a post or tip others you must install TronLink. TronLink is a TRON wallet for the browser that can be ",r.a.createElement("a",{href:T,target:"_blank",rel:"noopener noreferrer"},"installed from the Chrome Webstore"),". Once installed, return back and refresh the page.")),R)},O="TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg";class D extends n.Component{constructor(e){super(e),this.state={tronWeb:{installed:!1,loggedIn:!1}}}componentDidMount(){var e=this;return Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((t=>{var a={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(a.installed)return e.setState({tronWeb:a}),t();var n=0,r=setInterval((()=>{if(n>=10){var s="https://api.trongrid.io";return window.tronWeb=new m.a(s,s,s),e.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),t()}if(a.installed=!!window.tronWeb,a.loggedIn=window.tronWeb&&window.tronWeb.ready,!a.installed)return n++;e.setState({tronWeb:a}),t()}),100)}));case 2:e.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex(O),base58:O},window.tronWeb.on("addressChange",(()=>{e.state.tronWeb.loggedIn||e.setState({tronWeb:{installed:!0,loggedIn:!0}})}))),u.setTronWeb(window.tronWeb);case 4:case"end":return t.stop()}}),t)})))()}render(){return this.state.tronWeb.installed?this.state.tronWeb.loggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"convert-area",id:"convert"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"convert-wrap"},r.a.createElement("div",{className:"row justify-content-center align-items-center flex-column pb-30"},r.a.createElement("h1",{className:"text-white"},"Make your investment")),r.a.createElement("div",{className:"row justify-content-center align-items-start"},r.a.createElement("div",{className:"col-lg-12 cols"},r.a.createElement(x,null)))))),r.a.createElement(N,null),r.a.createElement("div",{class:"space-90"}),r.a.createElement(k,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(S,{installed:!0}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(S,null)))}}var L=D,C=document.getElementById("root");o.a.render(r.a.createElement(L,null),C)},75:function(e,t,a){e.exports=a.p+"static/media/TronLinkLogo.d3a8f115.png"},78:function(e,t,a){e.exports=a(218)}},[[78,1,2]]]);
//# sourceMappingURL=main.2b63b7cf.chunk.js.map