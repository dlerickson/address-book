(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(15),n(1)),s=n(2),l=n(5),d=n(4),u=n(3),m=n(6),p=[{firstName:"Michael",lastName:"Scott",addressLineOne:"345 Pine Ridge",addressLineTwo:"suite #9",city:"Scranton",state:"PA",zipCode:"32456",country:"USA",officeURL:"https://vignette.wikia.nocookie.net/theoffice/images/9/96/Prisonmike.png/revision/latest/scale-to-width-down/350?cb=20100327171549"},{firstName:"Jim",lastName:"Halpert",addressLineOne:"9999 Forest Ave",addressLineTwo:null,city:"North Scranton",state:"PA",zipCode:"33456",country:"USA",officeURL:"https://vignette.wikia.nocookie.net/theoffice/images/3/3c/R05cmfb265121.jpg/revision/latest/scale-to-width-down/174?cb=20190206014014"},{firstName:"Creed",lastName:"Bratton",addressLineOne:"street",addressLineTwo:"apartment",city:"Yes",state:"Here",zipCode:"what",country:"America. Or Canada.",officeURL:"https://i.redd.it/4z3r92b8rly01.png"},{firstName:"Pam",lastName:"Beesly",addressLineOne:"31 Cottage Way",addressLineTwo:"apartment #13",city:"Scranton",state:"PA",zipCode:"33456",country:"USA",officeURL:"https://media.giphy.com/media/FqHvakENy6Oe4/giphy.gif"},{firstName:"Dwight",lastName:"Schrute",addressLineOne:"123 Schrute Drive",addressLineTwo:null,city:"Farmville",state:"PA",zipCode:"34567",country:"USA",officeURL:"https://i.etsystatic.com/17916587/r/il/888eb5/1793739028/il_794xN.1793739028_c069.jpg"}],f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.contact,n=e.onClickFunction;return r.a.createElement("button",{className:"preview-button",onClick:function(){return n(t)}},r.a.createElement("p",null,t.firstName),r.a.createElement("p",null,t.lastName),r.a.createElement("p",null,t.addressLineOne))}}]),t}(a.Component),h=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={addresses:[],selectedIndex:0},n._onNext=n._onNext.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"_onNext",value:function(){this.state.selectedIndex!==this.state.addresses.length-1&&this.setState(function(e){return{selectedIndex:e.selectedIndex+1}})}},{key:"render",value:function(){var e=this.props,t=(e.addresses,e.currentRolodex);return r.a.createElement("div",{className:"rolodexFull"},r.a.createElement("div",null,r.a.createElement("img",{alt:t.lastName,className:"face",src:t.officeURL,width:300})),r.a.createElement("div",{className:"rolo-info"},r.a.createElement("p",null,"First Name: ",t.firstName),r.a.createElement("p",null,"Last Name: ",t.lastName),r.a.createElement("p",null,"Address: ",t.addressLineOne),r.a.createElement("p",null,"Address: ",t.addressLineTwo),r.a.createElement("p",null,"City: ",t.city),r.a.createElement("p",null,"State: ",t.state,"/10"),r.a.createElement("p",null,"Zip: ",t.zipCode),r.a.createElement("p",null,"Country: ",t.country)))}}]),t}(a.Component),N=(n(16),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).setCurrentRolodex=function(e){n.setState({currentRolodex:e})},n.changeCurrentRolodex=n.setCurrentRolodex.bind(Object(u.a)(n)),n.state={currentRolodex:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.currentRolodex),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"rolo-mini-col"},r.a.createElement("ul",null," ",p.map(function(t){return r.a.createElement("li",{key:t.firstName},r.a.createElement(f,{contact:t,onClickFunction:e.changeCurrentRolodex})," ")})," ")," ")," "," ",r.a.createElement("div",{className:"rolo-full-contact"}," ",this.state.currentRolodex?r.a.createElement(h,{currentRolodex:this.state.currentRolodex}):r.a.createElement("div",{className:"select-contact"},r.a.createElement("p",null," Welcome to the Dunderdex. "),"  ")),"   ")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.a88fb16f.chunk.js.map