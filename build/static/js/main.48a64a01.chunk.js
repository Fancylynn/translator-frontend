(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(63)},33:function(e,t,a){},34:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),s=(a(33),a(6)),o=a(7),i=a(9),u=a(8),m=a(10),h=a(64),d=a(65),p=a(26),b=(a(34),a(11)),v=a.n(b),E=a(12),f=a(15),g=a.n(f),x="http://52.87.247.76:8000/restapi",y=function(e){var t=new FormData;return t.append("input_text",e),g.a.post(x+"/translate/",t).then(function(e){return console.log(e),e.data}).catch(function(e){return console.log(e)})},w=function(e){var t="/translate/"+e+"/";return g.a.get(x+t).then(function(e){return e.data}).catch(function(e){return console.log(e)})},N=(a(56),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],loading:!0},a.selectTargetTranslateHistory=function(e){a.props.history.push("/detail/"+e)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getTranslateHistoryList()}},{key:"getTranslateHistoryList",value:function(){var e=Object(E.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(x+"/translate/").then(function(e){return e.data}).catch(function(e){return console.log(e)});case 3:t=e.sent,this.setState({items:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,this.setState({loading:!1}),e.finish(10);case 13:case"end":return e.stop()}},e,this,[[0,7,10,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.items&&this.state.items.map(function(t,a){return r.a.createElement("tr",{key:a,className:"table-tr",onClick:function(){return e.selectTargetTranslateHistory(t.id)}},r.a.createElement("td",null,t.id),t.input_text.length>500?r.a.createElement("td",null,t.input_text.substring(0,400)+"..."):r.a.createElement("td",null,t.input_text),r.a.createElement("td",null,t.language),t.translation.length>500?r.a.createElement("td",null,t.translation.substring(0,500)+"..."):r.a.createElement("td",null,t.translation))});return r.a.createElement("div",null,r.a.createElement("div",{className:"note"},"* Click each row to view translation detail!"),this.state.loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("table",{className:"list-table"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table-headers"},r.a.createElement("th",{className:"narrow-column table-header"},"ID"),r.a.createElement("th",{className:"wide-column table-header"},"Input Text"),r.a.createElement("th",{className:"narrow-column table-header"},"Detected Language"),r.a.createElement("th",{className:"wide-column table-header"},"Translated Text")),t.length>0&&t)),!this.state.loading&&0===t.length&&r.a.createElement("span",{className:"welcome-message"},"View previously translated words and phrases here!"))}}]),t}(n.Component)),j=(a(57),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],loading:!0,inputText:"",translatedText:""},a.onInputTextChange=function(e){a.setState({inputText:e.target.value})},a.translate=Object(E.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(a.state.inputText);case 3:t=e.sent,a.setState({translatedText:t.translation}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"translate-page-container"},r.a.createElement("div",{className:"translate-text-area-container"},r.a.createElement("textarea",{className:"text-area input-text-area",onChange:this.onInputTextChange,value:this.state.inputText,placeholder:"Please input the sentence you want to translate!"}),r.a.createElement("textarea",{className:"text-area translated-text-area",value:this.state.translatedText,placeholder:"Translation result! The result cannot be changed!",disabled:!0})),r.a.createElement("button",{className:"my-button button-translate",onClick:this.translate},"Translate"))}}]),t}(n.Component)),O=a(66),k=(a(58),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"my-button button-translate"},r.a.createElement(O.a,{to:"/translateHistory",className:"link-text"},"Check Translate History"))),r.a.createElement(j,null))}}]),t}(n.Component)),T=(a(62),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={detail:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getDetail()}},{key:"getDetail",value:function(){var e=Object(E.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.prev=1,e.next=4,w(t);case 4:a=e.sent,this.setState({detail:a}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error"),console.log(e.t0),alert(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.detail;return r.a.createElement("div",null,this.state.detail&&r.a.createElement("div",null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"label"},"ID"),r.a.createElement("input",{className:"text-box",value:e.id})),r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"label"},"Detected Language"),r.a.createElement("input",{className:"text-box",value:e.language})),r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"label"},"Created At"),r.a.createElement("input",{className:"text-box",value:e.timestamp})),r.a.createElement("table",{className:"list-table"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table-headers"},r.a.createElement("th",{className:"wide-column table-header"},"Input Text"),r.a.createElement("th",{className:"wide-column table-header"},"Translated Text")),r.a.createElement("tr",null,r.a.createElement("td",null,e.input_text),r.a.createElement("td",null,e.translation))))))}}]),t}(n.Component)),C=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("h2",{className:"container-home"},r.a.createElement(O.a,{to:"/",className:"container-title"},"Translator")),r.a.createElement("p",{className:"note"},"*Click title to return homepage!"),r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:k}),r.a.createElement(p.a,{exact:!0,path:"/translate",component:j}),r.a.createElement(p.a,{exact:!0,path:"/translateHistory",component:N}),r.a.createElement(p.a,{exact:!0,path:"/detail/:id",component:T}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.48a64a01.chunk.js.map