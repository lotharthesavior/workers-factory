(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1410:function(e,t,n){},1411:function(e,t,n){"use strict";n.r(t);var r,o,a=n(4),c=n.n(a),i=n(163),u=n.n(i),s=n(68),d=n(97),l=n(99),h=n(98),p=n(100),f=n(121),O=n.n(f),b=n(164),m=n(123),w=function e(t){Object(s.a)(this,e),this.speed=t},k={time:0,last_update_time:0,count:0,workers:[]},v=Object(b.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;switch((arguments.length>1?arguments[1]:void 0).type){case"ADD_PRODUCT":return Object(m.a)({},e,{count:e.count+1});case"ADD_TIME":return Object(m.a)({},e,{time:e.time+1});case"ADD_WORKER":var t=e.workers;return t.push(new w(.5)),console.log(t),Object(m.a)({},e,{workers:t});case"UPDATE_WORKER_WORK":var n=Math.round(e.time/100);if(0===n-e.last_update_time)return e;var r=e.workers.map(function(e){return e.speed}).reduce(function(e,t){return e+t});return Object(m.a)({},e,{count:e.count+r,last_update_time:n});default:return e}}),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"create",value:function(){(r=this.add.text(0,0,"Add Product",{backgroundColor:"white",color:"black",fontSize:48})).setInteractive({useHandCursor:!0}),r.on("pointerup",function(){v.dispatch({type:"ADD_PRODUCT"})}),(o=this.add.text(0,50,"Add Worker",{backgroundColor:"white",color:"black",fontSize:48})).setInteractive({useHandCursor:!0}),o.on("pointerup",function(){v.dispatch({type:"ADD_WORKER"})})}},{key:"update",value:function(e){v.dispatch({type:"ADD_TIME"}),v.getState().workers.length>0&&v.dispatch({type:"UPDATE_WORKER_WORK"}),r.setText("Add Product: "+Math.round(v.getState().count)),o.setText("Add Worker: "+v.getState().workers.length)}}]),t}(f.Scene),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e={type:O.a.AUTO,width:800,height:640,parent:"phaser-game",scene:[j]};new O.a.Game(e)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return a.createElement("div",{id:"phaser-game",style:{backgroundColor:"#fff"}})}}]),t}(a.Component),g=n(517),D=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement(g.a,{store:v},c.a.createElement("div",{style:{display:"flex",alignContent:"center",justifyContent:"center",flexDirection:"row",height:"100vh"}},c.a.createElement(y,null)))}}]),t}(a.Component);n(1410),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},518:function(e,t,n){e.exports=n(1411)}},[[518,1,2]]]);
//# sourceMappingURL=main.da3cfd71.chunk.js.map