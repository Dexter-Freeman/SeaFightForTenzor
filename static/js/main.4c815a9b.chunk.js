(this["webpackJsonpsea-fight-for-tenzor"]=this["webpackJsonpsea-fight-for-tenzor"]||[]).push([[0],{10:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);a(10);var n=a(0),r=a.n(n),s=a(3),i=a.n(s),l=a(1),o=a(4),c=a(5),m=a(7),u=a(6),p=a(8);a(15);function h(e){var t,a=e.x,n=e.y,s=e.hasShip,i=e.shooted,l=e.isShipVisible,o=e.shoot,c=0===a,m=0===n;return t=s?i?"X":"":i?"\xb7":"",r.a.createElement("div",{className:"cell ".concat(s&&l?"visibleShip":""),onClick:o},r.a.createElement("div",{className:"marker"},t),c?r.a.createElement("span",{className:"leftColumn"},["1","2","3","4","5","6","7","8","9","10"][n]):"",m?r.a.createElement("span",{className:"topLine"},["\u0420","\u0415","\u0421","\u041f","\u0423","\u0411","\u041b","\u0418","\u041a","\u0410"][a]):"")}function d(e){return r.a.createElement("div",{className:"field"},r.a.createElement("div",null,e.field.map((function(t){return r.a.createElement(h,{x:t.x,y:t.y,id:t.id,key:t.id,hasShip:t.hasShip,shooted:t.shooted,isShipVisible:t.isShipVisible,shoot:e.shoot?function(a){return e.shoot(t.id)}:function(){}})}))),r.a.createElement("div",{className:"field-name"},r.a.createElement("span",null,e.whose)))}var f=[4,3,3,2,2,2,1,1,1,1],v=function(e,t,a,n){return{hasShip:!1,x:e,y:t,id:a,shooted:!1,isShipVisible:n}},S=function(e){return Math.floor(Math.random()*e)},y=function(e){for(var t=[],a=0,n=0;n<10;n++)for(var r=0;r<10;r++)t.push(v(r,n,a,e)),a+=1;return t},g=function(){return S(100)},E=function(e){return e.map((function(e){return Object(l.a)({},e)}))},N=function e(t,a){var n,r,s=S(100)>50,i=g(),l=E(t),o=a,c=!0,m=t[i].x,u=t[i].y,p=m-1<0?0:m-1,h=u-1<0?0:u-1;if(s){if(h+a>9)return e(t,a);n=m+1>9?9:m+1,r=u+a>9?9:u+a}else{if(p+a>9)return e(t,a);n=m+a>9?9:m+a,r=u+1>9?9:u+1}for(var d=h;d<=r;d++)for(var f=p;f<=n;f++){t[10*d+f].hasShip&&(c=!1)}if(!c)return e(t,a);var v=i;if(s)do{l[v].hasShip=!0,v+=10,o-=1}while(o>0);else do{l[v].hasShip=!0,v+=1,o-=1}while(o>0);return l},b=function e(t,a){if(0===a.length)return t;var n=a[0];return e(N(t,n),a.slice(1))};function F(e){return r.a.createElement("div",{className:"fields"},r.a.createElement(d,{whose:e.playerName,field:e.playerField}),r.a.createElement(d,{whose:"Comp",field:e.compField,shoot:function(t){return e.shoot(t)}}))}function O(e){return r.a.createElement("div",{className:"message centered"},r.a.createElement("div",{className:"message-text"},e.message),r.a.createElement("div",{className:"score"},r.a.createElement("span",null,"\u0422\u044b \u043f\u043e\u043f\u0430\u043b: ",r.a.createElement("strong",null,e.playerScore)," \u0440\u0430\u0437."),r.a.createElement("span",null,"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u043f\u043e\u043f\u0430\u043b: ",r.a.createElement("strong",null,e.compScore)," \u0440\u0430\u0437.")))}function k(e){return r.a.createElement("div",{className:"again centered"},r.a.createElement("button",{onClick:e.again,className:"button button-again"},"\u0418\u0433\u0440\u0430\u0442\u044c \u0435\u0449\u0435!"))}function w(e){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"greeting centered"},r.a.createElement("span",null,"\u041f\u0440\u0438\u0432\u0435\u0442 ",r.a.createElement("strong",null,e.playerName),"!")),r.a.createElement("div",{className:"propose centered"},r.a.createElement("span",null,"\u0421\u044b\u0433\u0440\u0430\u0435\u043c \u0432 \u043c\u043e\u0440\u0441\u043a\u043e\u0439 \u0431\u043e\u0439?")),r.a.createElement("form",{onSubmit:e.onGameStart,className:"centered"},r.a.createElement("div",null,r.a.createElement("input",{required:!0,type:"text",onChange:e.onNameInput,value:e.playerName,placeholder:"\u0412\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f",className:"name-input"})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"button button-start"},"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443!"))))}var j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={playerName:"",gameStart:!1,playerScore:0,compScore:0,playerField:[],compField:[],gameOver:!1,message:"\u0422\u044b \u0441\u0442\u0440\u0435\u043b\u044f\u0435\u0448\u044c"},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onNameInput",value:function(e){this.setState({playerName:e.target.value})}},{key:"onGameStart",value:function(e){e.preventDefault(),this.setState({gameStart:!0})}},{key:"componentDidMount",value:function(){this.setState({compField:b(y(!1),f),playerField:b(y(!0),f)})}},{key:"playerShoot",value:function(e){var t=Object(l.a)({},this.state),a=t.playerScore,n=t.gameOver,r=t.compField,s=t.message;if(n||r[e].shooted)return!1;var i=E(r);return i[e].shooted=!0,i[e].hasShip&&(i[e].isShipVisible=!0,a+=1),s="\u0421\u0442\u0440\u0435\u043b\u044f\u0435\u0442 \u043a\u043e\u043c\u043f\u044c\u0442\u0435\u0440",20===a&&(n=!0,s="\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430. \u0422\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b! \u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e!"),this.setState({gameOver:n,playerScore:a,compField:i,message:s})}},{key:"compShoot",value:function(){var e=Object(l.a)({},this.state),t=e.gameOver,a=e.playerField,n=e.compScore,r=e.message,s=g();if(t)return!1;if(!0===a[s].shooted)return this.compShoot();var i=E(a);return i[s].shooted=!0,i[s].hasShip&&(n+=1),r="\u0422\u044b \u0441\u0442\u0440\u0435\u043b\u044f\u0435\u0448\u044c",20===n&&(t=!0,r="\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430. \u041f\u043e\u0431\u0435\u0434\u0438\u043b \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440. \u041d\u0435 \u0440\u0430\u0441\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0439\u0441\u044f, \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437 \u043f\u043e\u0432\u0435\u0437\u0435\u0442!"),this.setState({gameOver:t,compScore:n,playerField:i,message:r})}},{key:"shoot",value:function(e){this.playerShoot(e),setTimeout(this.compShoot.bind(this),1e3)}},{key:"again",value:function(){return this.setState({playerName:this.state.playerName,playerScore:19,compScore:0,compField:b(y(!1),f),playerField:b(y(!0),f),gameOver:!1,message:"\u0422\u044b \u0441\u0442\u0440\u0435\u043b\u044f\u0435\u0448\u044c"})}},{key:"render",value:function(){return this.state.gameStart?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"game centered"},r.a.createElement("span",{className:"game-header"},"\u041d\u0443 \u0434\u0430\u0432\u0430\u0439 \u0438\u0433\u0440\u0430\u0442\u044c ",r.a.createElement("strong",null,this.state.playerName)),r.a.createElement(F,{playerField:this.state.playerField,compField:this.state.compField,shoot:this.shoot.bind(this),playerName:this.state.playerName,className:"game-fields"}),r.a.createElement(O,{message:this.state.message,playerScore:this.state.playerScore,compScore:this.state.compScore,className:"game-message"}),this.state.gameOver?r.a.createElement(k,{again:this.again.bind(this)}):"")):r.a.createElement(w,{playerName:this.state.playerName,onGameStart:this.onGameStart.bind(this),onNameInput:this.onNameInput.bind(this)})}}]),t}(r.a.Component);i.a.render(r.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.4c815a9b.chunk.js.map