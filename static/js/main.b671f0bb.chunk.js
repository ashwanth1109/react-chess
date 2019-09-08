(window["webpackJsonpreact-chess"]=window["webpackJsonpreact-chess"]||[]).push([[0],{16:function(e,n,t){e.exports=t(26)},26:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),r=t(10),u=t.n(r),l=t(3),a=t(11),o=t.n(a),s=t(1),f=t(2);function p(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return p=function(){return e},e}function d(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return d=function(){return e},e}function h(){var e=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n"]);return h=function(){return e},e}var b=Object(f.a)(h()),v=Object(f.a)(d()),k=Object(f.a)(p()),y="#5096F3",w="#EFF5FD",S="#000000",q="#CC0000",x="#545454",g="#454545",m="#D94545";function P(){var e=Object(s.a)(["\n  font-size: 50px;\n  color: ",";\n"]);return P=function(){return e},e}function j(){var e=Object(s.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: ",";\n"]);return j=function(){return e},e}function O(){var e=Object(s.a)(["\n  ","\n  width: 75px;\n  height: 75px;\n  cursor: pointer;\n  position: relative;\n  background: ",";\n"]);return O=function(){return e},e}function E(){var e=Object(s.a)(["\n  ","\n  width: 100%;\n  height: 75px;\n"]);return E=function(){return e},e}function C(){var e=Object(s.a)(["\n  width: 600px;\n  height: 600px;\n"]);return C=function(){return e},e}function F(){var e=Object(s.a)(["\n  "," \n  background: ",";\n"]);return F=function(){return e},e}function L(){var e=Object(s.a)(["\n  ","\n"]);return L=function(){return e},e}var D="".concat(b," ").concat(v),J=f.b.div(L(),D),N=f.b.div(F(),D,x),z=f.b.div(C()),A=f.b.div(E(),k),B=f.b.div(O(),v,function(e){return e.isLight?w:y}),I=f.b.div(j(),function(e){return e.player1?m:g}),G=f.b.div(P(),function(e){return e.player1?q:S}),H=t(4),K=t(5),M=function(){function e(n,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(H.a)(this,e),this.row=n,this.col=t,this.piece=c,this.isLight=(n+t)%2===0,this.up=null,this.down=null,this.left=null,this.right=null}return Object(K.a)(e,[{key:"setNeighbours",value:function(e,n,t,c){this.up=e,this.down=n,this.left=t,this.right=c}},{key:"removePiece",value:function(){this.piece=null}},{key:"setPiece",value:function(e){this.piece=e}}]),e}(),Q=function(){function e(n,t,c){Object(H.a)(this,e),this.player=t,this.name=n.name,this.symbol=n.symbol,this.square=c}return Object(K.a)(e,[{key:"changeSquare",value:function(e){this.square=e}}]),e}(),R={symbol:"\u265c",name:"rook"},T={symbol:"\u265d",name:"bishop"},U={symbol:"\u265e",name:"knight"},V={symbol:"\u265f",name:"pawn"},W=[R,U,T,{symbol:"\u265b",name:"queen"},{symbol:"\u265a",name:"king"},T,U,R],X=function e(){Object(H.a)(this,e),this.board=[];for(var n=1;n<=8;n++){for(var t=[],c=1;c<=8;c++){var i=null,r=new M(n,c);1===n?i=new Q(W[c-1],1,r):8===n?i=new Q(W[8-c],2,r):2===n?i=new Q(V,1,r):7===n&&(i=new Q(V,2,r)),r.setPiece(i),t.push(r)}this.board.push(t)}for(var u=0;u<8;u++)for(var l=0;l<8;l++){var a=this.board[u][l],o=u-1>=0?this.board[u-1][l]:null,s=u+1<8?this.board[u+1][l]:null,f=l-1>=0?this.board[u][l-1]:null,p=l+1<8?this.board[u][l+1]:null;a.setNeighbours(o,s,f,p)}},Y=function(e){var n=e.clickedPiece,t=e.nextSquare,c=e.moveSuccessfully,i=n.square;(function(){var e=1===n.player&&(2===i.row&&(i.down.down===t||i.down===t)||i.down===t),c=2===n.player&&(7===i.row&&(i.up.up===t||i.up===t)||i.up===t),r=null===t.piece&&(e||c),u=i.down.right===t||i.down.left===t,l=i.up.right===t||i.up.left===t,a=null!==t.piece&&(1===n.player&&u||2===n.player&&l);return r||a})()&&c()},Z=function(e){var n=e.clickedPiece,t=e.nextSquare,c=e.moveSuccessfully,i=n.square;t.up!==i&&t.left!==i&&t.right!==i&&t.down!==i&&t.up.left!==i&&t.up.right!==i&&t.down.left!==i&&t.down.right!==i||c()},$=function(e,n,t){var c=n.clickedPiece,i=n.nextSquare,r=c.square;if(null!==r[e]&&t){for(;null!==r[e]&&null===r[e].piece;){if(r[e]===i)return!0;r=r[e]}if(null!==r[e]&&null!==r[e].piece&&r[e]===i&&r[e].piece.player!==c.player)return!0}return!1},_=function(e,n,t){var c=Object(l.a)(e,2),i=c[0],r=c[1],u=n.clickedPiece,a=n.nextSquare,o=u.square;if(null!==o[i]&&null!==o[i][r]&&t){for(;null!==o[i]&&null!==o[i][r]&&null===o[i][r].piece;){if(o[i][r]===a)return!0;o=o[i][r]}if(null!==o[i]&&null!==o[i][r]&&null!==o[i][r].piece&&o[i][r]===a&&o[i][r].piece.player!==u.player)return!0}return!1},ee=function(e,n){var t=Object(l.a)(e,2),c=t[0],i=t[1],r=n.clickedPiece,u=n.nextSquare,a=r.square;return!(!(a[c]&&a[c][c]&&a[c][c][i]&&a[c][c][i]===u||a[i]&&a[i][i]&&a[i][i][c]&&a[i][i][c]===u)||null!==u.piece&&u.piece.player===r.player)},ne=function(e){var n=e.clickedPiece,t=e.nextSquare,c=e.moveSuccessfully;($("up",{clickedPiece:n,nextSquare:t},!0)||$("down",{clickedPiece:n,nextSquare:t},!0)||$("left",{clickedPiece:n,nextSquare:t},!0)||$("right",{clickedPiece:n,nextSquare:t},!0)||_(["up","left"],{clickedPiece:n,nextSquare:t},!0)||_(["up","right"],{clickedPiece:n,nextSquare:t},!0)||_(["down","left"],{clickedPiece:n,nextSquare:t},!0)||_(["down","right"],{clickedPiece:n,nextSquare:t},!0))&&c()},te=function(e){var n=e.clickedPiece,t=e.nextSquare,c=e.moveSuccessfully;($("up",{clickedPiece:n,nextSquare:t},!0)||$("down",{clickedPiece:n,nextSquare:t},!0)||$("left",{clickedPiece:n,nextSquare:t},!0)||$("right",{clickedPiece:n,nextSquare:t},!0))&&c()},ce=function(e){var n=e.clickedPiece,t=e.nextSquare,c=e.moveSuccessfully;(_(["up","left"],{clickedPiece:n,nextSquare:t},!0)||_(["up","right"],{clickedPiece:n,nextSquare:t},!0)||_(["down","left"],{clickedPiece:n,nextSquare:t},!0)||_(["down","right"],{clickedPiece:n,nextSquare:t},!0))&&c()},ie=function(e){var n=e.clickedPiece,t=e.nextSquare,c=e.moveSuccessfully;(ee(["up","left"],{clickedPiece:n,nextSquare:t})||ee(["up","right"],{clickedPiece:n,nextSquare:t})||ee(["down","left"],{clickedPiece:n,nextSquare:t})||ee(["down","right"],{clickedPiece:n,nextSquare:t}))&&c()},re=function(e,n,t,c){var i=function(){e.square.removePiece(),e.changeSquare(n),n.setPiece(e),t(null),c(function(e){return!e})},r={clickedPiece:e,nextSquare:n,moveSuccessfully:i};switch(e.name){case"pawn":Y(r);break;case"king":Z(r);break;case"queen":ne(r);break;case"rook":te(r);break;case"bishop":ce(r);break;case"knight":ie(r);break;default:i()}},ue=function(e,n,t){null!==n.piece&&(e&&1===n.piece.player||!e&&2===n.piece.player)&&t(n.piece)},le=function(){var e=o()(),n=e.vw,t=e.vh,r=Object(c.useState)(new X),u=Object(l.a)(r,2),a=u[0],s=(u[1],Object(c.useState)(null)),f=Object(l.a)(s,2),p=f[0],d=f[1],h=Object(c.useState)(!0),b=Object(l.a)(h,2),v=b[0],k=b[1],y=Object(c.useCallback)(function(e){var n=null===p,t=null!==e.piece&&e.piece.player===(v?1:2);n||t?ue(v,e,d):re(p,e,d,k)},[p,v]);return n<800||t<600?i.a.createElement(J,null,"Sorry, App only works on screens larger than 800px wide and 600px high"):i.a.createElement(N,null,i.a.createElement(z,null,a.board.map(function(e,n){return i.a.createElement(A,{key:n},e.map(function(e,n){return i.a.createElement(B,{key:n,onClick:function(){return y(e)},isLight:e.isLight},null!==p&&p===e.piece?i.a.createElement(I,{player1:1===e.piece.player}):null,e.piece?i.a.createElement(G,{player1:1===e.piece.player},e.piece.symbol):null)}))})))};u.a.render(i.a.createElement(le,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b671f0bb.chunk.js.map