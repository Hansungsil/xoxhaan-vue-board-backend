webpackJsonp([1],{"/Fm9":function(t,e){},"0gjP":function(t,e){},"2nie":function(t,e){},"3c1o":function(t,e){},"42j6":function(t,e){},BOUE:function(t,e){},EAQZ:function(t,e){},FKTq:function(t,e){},I7Bh:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},s,!1,function(t){a("ymcE")},null,null).exports,o=a("/ocq"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"firstMain"}},[a("transition",{attrs:{name:"logoShow",appear:""}},[a("h1",{staticClass:"logo"},[a("p",[t._v("VUE")]),a("div",{staticClass:"logoCenterLine"}),a("p",[t._v("BOARD PROJECT")])])]),t._v(" "),a("nav",{staticClass:"nav"},[a("ul",[a("transition",{attrs:{name:"loginBtnShow",appear:""}},[t.loggedIn?a("li",[a("router-link",{attrs:{to:"/login"},on:{mouseover:t.loginBtnOver}},[t._v("LOGIN")])],1):t._e()]),t._v(" "),a("transition",{attrs:{name:"boardBtnShow",appear:""}},[a("li",[a("router-link",{attrs:{to:"/board/list"}},[t._v("BOARD")])],1)])],1)])],1)},staticRenderFns:[]};var l=a("VU/8")({name:"firstMain",data:function(){return{loggedIn:!0}},created:function(){this.$cookie.get("uid")&&(this.loggedIn=!1)},methods:{loginBtnOver:function(){this.loginBtnToggle="loginBtnToggle"}}},r,!1,function(t){a("f5Rl")},"data-v-3a9b3c3a",null).exports,c={name:"allHeader",data:function(){return{loggedIn:!1,loginNull:!1,userName:""}},created:function(){var t=this;this.$eventBus.$on("userNameEventBus",function(e){t.userName=e,t.loggedIn=!t.loggedIn}),"/board/list"===this.$router.history.current.path&&(this.loginNull=!0)},watch:{$route:"loginBtnShow"},mounted:function(){var t=this.$cookie.get("userName");null!==t&&(this.loggedIn=!this.loggedIn,this.userName=t)},methods:{logout:function(){var t=this.$cookie.get("uid"),e=this.$cookie.get("userName");t&&e&&(this.$cookie.delete("id"),this.$cookie.delete("uid"),this.$cookie.delete("userName"))},loginBtnShow:function(){var t=this.$router.history.current.path;console.log(t),this.loginNull="/board/list"===t}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"allHeader"}},[a("transition",{attrs:{name:"subLogoShow",appear:""}},[a("p",[t._v("BOARD "),a("span",[t._v("PROJECT")])])]),t._v(" "),t.loggedIn?a("div",{staticClass:"loginWrap"},[a("span",{staticClass:"userName"},[t._v(t._s(t.userName))]),t._v(" "),a("button",{staticClass:"loginBtn",on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("router-link",{attrs:{to:"/logout"}},[t._v("LOGOUT")])],1)]):t._e(),t._v(" "),t.loggedIn?t._e():a("div",{directives:[{name:"show",rawName:"v-show",value:t.loginNull,expression:"loginNull"}],staticClass:"loginWrap"},[a("button",{staticClass:"loginBtn"},[a("router-link",{attrs:{to:"/login"}},[t._v("LOGIN")])],1)])],1)},staticRenderFns:[]};var d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"allFooter"}},[e("footer",[e("small",[this._v("\n      ©copyright 2018 | All Rights Reserved\n      "),e("address",[this._v("xoxhaan <xoxhaan@gmail.com>")])])])])}]};var p={name:"indexForm",components:{allHeader:a("VU/8")(c,u,!1,function(t){a("twQF")},"data-v-5374bfc8",null).exports,allFooter:a("VU/8")({name:"allFooter"},d,!1,function(t){a("RMZ6")},"data-v-b7435dac",null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"indexForm"}},[e("all-header"),this._v(" "),e("router-view",{staticClass:"contentWrap"}),this._v(" "),e("all-footer")],1)},staticRenderFns:[]};var m=a("VU/8")(p,h,!1,function(t){a("FKTq")},null,null).exports,v={name:"login",data:function(){return{id:"",pw:"",userName:""}},methods:{login:function(){var t=this,e=document.getElementById("id").value,a=document.getElementById("pw").value;return""===e?(alert("아이디를 입력해 주세요."),!1):""===a?(alert("비밀번호를 입력해 주세요."),!1):void this.$http.post("/api/login/loginCheck",{userid:e,userpw:a}).then(function(e){alert(e.data.text);var a=e.data.rows.id,n=e.data.rows.uid;t.userName=e.data.rows.name,t.userName.length>=1&&(t.$eventBus.$emit("userNameEventBus",t.userName),t.id="",t.pw="",t.$cookie.set("id",a,1),t.$cookie.set("uid",n,1),t.$cookie.set("userName",t.userName,1),t.$router.replace(t.$route.query.redirect||"/board/list"))}).catch(function(t){console.log(t)})}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("transition",{attrs:{name:"subTitleShow",appear:""}},[a("p",{staticClass:"subTitle"},[t._v("SIGN IN")])]),t._v(" "),a("form",{staticClass:"loginForm",attrs:{action:"post"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("transition",{attrs:{name:"keyupShow",appear:""}},[a("label",{attrs:{for:"id"}},[a("font-awesome-icon",{staticClass:"loginIcon",attrs:{icon:["far","envelope"]}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text",id:"id"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})],1)]),t._v(" "),a("transition",{attrs:{name:"keyupShow",appear:""}},[a("label",{attrs:{for:"pw"}},[a("font-awesome-icon",{staticClass:"pwIcon",attrs:{icon:"lock"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pw,expression:"pw"}],attrs:{type:"password",id:"pw"},domProps:{value:t.pw},on:{input:function(e){e.target.composing||(t.pw=e.target.value)}}})],1)]),t._v(" "),a("transition",{attrs:{name:"btnShow",appear:""}},[a("button",{staticClass:"loginBtn",attrs:{type:"submit"}},[t._v("LOGIN")])]),t._v(" "),a("transition",{attrs:{name:"btnShow",appear:""}},[a("router-link",{staticClass:"joinBtn",attrs:{to:"/join"}},[t._v("JOIN")])],1)],1)],1)},staticRenderFns:[]};var f=a("VU/8")(v,g,!1,function(t){a("0gjP")},"data-v-9807868c",null).exports,_={name:"join",data:function(){return{id:"",pw1:"",pw2:"",name:"",userText:"",userColumn:"",IDvalidateText:"",PW1validateText:"",PW2validateText:"",NAMEvalidateText:"",success:"",IDCheckSuccess:"",NAMECheckSuccess:"",resultSuccess:!1,resultFail:!1}},methods:{emailValidate:function(){var t=/^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/,e=document.getElementById("id").value;if(t.test(e))this.IDvalidateText="",this.success="success";else if(""===e)this.IDvalidateText="";else if(!t.test(e))return this.IDvalidateText="이메일 형식이 올바르지 않습니다.",this.resultFail=!0,!1},pw1Validate:function(){var t=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,20}$/,e=document.getElementById("pw1").value;if(t.test(e))this.PW1validateText="",this.resultFail=!1;else if(""===e)this.PW1validateText="";else if(!t.test(e))return this.PW1validateText="최소 8자리, 최대 20자리 숫자, 문자, 특수문자 각각 1개 이상 포함해야 합니다.",this.resultFail=!0,!1},pw2Validate:function(){var t=document.getElementById("pw1").value,e=document.getElementById("pw2").value;if(""===e)this.PW2validateText="";else if(t===e)this.PW2validateText="비밀번호가 일치합니다.",this.resultSuccess=!0,this.resultFail=!1;else if(t!==e)return this.PW2validateText="비밀번호가 일치하지 않습니다.",this.resultFail=!0,!1},nameValidate:function(){var t=/^[A-Za-z가-힣]+$/,e=document.getElementById("name").value;if(t.test(e))this.NAMEvalidateText="",this.success="success";else if(""===e)this.NAMEvalidateText="";else if(!t.test(e))return this.NAMEvalidateText="최소 2자리, 최대 10자리 한글, 영문만 사용 가능합니다.",this.resultFail=!0,!1},signUp:function(){var t=this,e=document.getElementById("id").value,a=document.getElementById("pw1").value,n=document.getElementById("pw2").value,s=document.getElementById("name").value;return null===e?(document.getElementById("id").focus(),!1):null===a?(document.getElementById("pw1").focus(),!1):null===n?(document.getElementById("pw2").focus(),!1):null===s?(document.getElementById("name").focus(),!1):""===this.IDCheckSuccess?(alert("아이디 중복체크 해주세요."),!1):""===this.NAMECheckSuccess?(alert("이름 중복체크 해주세요."),!1):this.pw1!==this.pw2||"idCheckOK"!==this.IDCheckSuccess||"nameCheckOK"!==this.NAMECheckSuccess?(alert("가입이 실패 했습니다."),!1):(this.$http.post("/api/login/signUp",{userid:this.id,userpw1:this.pw1,userpw2:this.pw2,username:this.name}).then(function(e){console.log(e),alert(e.data),t.$router.replace("/login")}).catch(function(t){console.log(t)}),void(this.userCheckSuccess=""))},userCheck:function(t){var e=this;console.log(t);var a=t.path[0].id,n=t.target.previousElementSibling.control.value;if("idCheck"===a?(this.userColumn="uid",this.userText=this.id):(this.userColumn="name",this.userText=this.name),0===n.length||"success"!==this.success)return!1;this.$http.get("/api/login/"+a,{params:{userColumn:this.userColumn,userText:this.userText}}).then(function(t){console.log(t),e.resultSuccess=!0,e.resultFail=!1,"uid"===t.data.column?(e.IDvalidateText=t.data.text,e.IDCheckSuccess="idCheckOK"):(e.NAMEvalidateText=t.data.text,e.NAMECheckSuccess="nameCheckOK")}).catch(function(t){console.log(t)}),this.success=""}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"join"}},[a("transition",{attrs:{name:"subTitleShow",appear:""}},[a("p",{staticClass:"subTitle"},[t._v("CREATE ACCOUNT")])]),t._v(" "),a("form",{staticClass:"joinForm clearfix",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.signUp(e)}}},[a("transition",{attrs:{name:"idKeyupShow",appear:""}},[a("label",{attrs:{for:"id"}},[a("font-awesome-icon",{staticClass:"emailIcon",attrs:{icon:["far","envelope"]}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"email",id:"id",required:""},domProps:{value:t.id},on:{keyup:t.emailValidate,input:function(e){e.target.composing||(t.id=e.target.value)}}})],1)]),t._v(" "),a("transition",{attrs:{name:"idKeyupShow",appear:""}},[a("button",{staticClass:"doubleCheck",attrs:{id:"idCheck"},on:{click:function(e){return e.preventDefault(),t.userCheck(e)}}},[t._v("Email Check")])]),t._v(" "),a("output",{staticClass:"validateText",class:{outputSuccess:t.resultSuccess,outputFail:t.resultFail}},[t._v("\n      "+t._s(t.IDvalidateText)+"\n    ")]),t._v(" "),a("transition",{attrs:{name:"pwKeyupShow",appear:""}},[a("label",{attrs:{for:"pw1"}},[a("font-awesome-icon",{staticClass:"pwIcon",attrs:{icon:"unlock"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pw1,expression:"pw1"}],attrs:{type:"password",id:"pw1",required:"",minlength:"6",maxlength:"20"},domProps:{value:t.pw1},on:{keyup:t.pw1Validate,input:function(e){e.target.composing||(t.pw1=e.target.value)}}})],1)]),t._v(" "),a("output",{staticClass:"validateText",class:{outputSuccess:t.resultSuccess,outputFail:t.resultFail}},[t._v("\n      "+t._s(t.PW1validateText)+"\n    ")]),t._v(" "),a("transition",{attrs:{name:"pwKeyupShow",appear:""}},[a("label",{attrs:{for:"pw2"}},[a("font-awesome-icon",{staticClass:"pwIcon",attrs:{icon:"lock"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pw2,expression:"pw2"}],attrs:{type:"password",id:"pw2",required:"",minlength:"6",maxlength:"20"},domProps:{value:t.pw2},on:{keyup:t.pw2Validate,input:function(e){e.target.composing||(t.pw2=e.target.value)}}})],1)]),t._v(" "),a("output",{staticClass:"validateText",class:{outputSuccess:t.resultSuccess,outputFail:t.resultFail}},[t._v("\n      "+t._s(t.PW2validateText)+"\n    ")]),t._v(" "),a("transition",{attrs:{name:"nameKeyupShow",appear:""}},[a("label",{attrs:{for:"name"}},[a("font-awesome-icon",{staticClass:"userIcon",attrs:{icon:"user-edit"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name",required:"",minlength:"2",maxlength:"10"},domProps:{value:t.name},on:{keyup:t.nameValidate,input:function(e){e.target.composing||(t.name=e.target.value)}}})],1)]),t._v(" "),a("transition",{attrs:{name:"nameKeyupShow",appear:""}},[a("button",{staticClass:"doubleCheck",attrs:{id:"nameCheck"},on:{click:function(e){return e.preventDefault(),t.userCheck(e)}}},[t._v("Name Check")])]),t._v(" "),a("output",{staticClass:"validateText",class:{outputSuccess:t.resultSuccess,outputFail:t.resultFail}},[t._v("\n      "+t._s(t.NAMEvalidateText)+"\n    ")]),t._v(" "),a("transition",{attrs:{name:"btnShow",appear:""}},[a("button",{staticClass:"signUpBtn",attrs:{type:"submit"}},[t._v("\n        SIGN UP\n      ")])]),t._v(" "),a("transition",{attrs:{name:"btnShow",appear:""}},[a("div",{staticClass:"btnLine"})]),t._v(" "),a("transition",{attrs:{name:"btnShow",appear:""}},[a("router-link",{staticClass:"cancleBtn",attrs:{to:"/login"}},[a("font-awesome-icon",{staticClass:"cancleIcon",attrs:{icon:["far","trash-alt"]}}),t._v("\n        CANCLE\n      ")],1)],1)],1)],1)},staticRenderFns:[]};var C=a("VU/8")(_,w,!1,function(t){a("2nie")},"data-v-8ac69eb2",null).exports,b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"boardWrap"}},[e("router-view")],1)},staticRenderFns:[]};var x=a("VU/8")({name:"boardWrap"},b,!1,function(t){a("42j6")},"data-v-432958ed",null).exports,I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"boardSearch"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"searchText",attrs:{type:"text"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),a("button",{staticClass:"searchBtn",attrs:{type:"submit"}},[a("font-awesome-icon",{staticClass:"searchIcon",attrs:{icon:"search"}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("select",{staticClass:"searchOption"},[e("option",{attrs:{value:"제목"}},[this._v("제    목")]),this._v(" "),e("option",{attrs:{value:"글쓴이"}},[this._v("글 쓴 이")])])}]};var P=a("VU/8")({name:"boardSearch",data:function(){return{searchOption:"",searchText:""}},methods:{search:function(t){this.searchOption=t.target[0].value,this.$eventBus.$emit("searchBtn",this.searchText,this.searchOption)}}},I,!1,function(t){a("Nuw+")},"data-v-22ef5299",null).exports,E=a("WMpb"),T={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"listPage"}},[this._t("default")],2)},staticRenderFns:[]};var N=a("VU/8")({name:"listPage"},T,!1,function(t){a("T1eo")},"data-v-66f888fc",null).exports,k={name:"boardList",props:["lists","template","totalCount","page","listCount"],components:{VRuntimeTemplate:E.a,listPage:N},methods:{movePage:function(t){this.$eventBus.$emit("movePage",t)},countUp:function(){this.$http.put("/api/board/countUp",{id:this.$route.params.id}).then(function(t){console.log(t.data)}).catch(function(t){console.log(t)})}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"boardList"}},[a("table",{staticClass:"boardListWrap"},[t._m(0),t._v(" "),a("tbody",t._l(t.lists,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(t.totalCount-n-(t.page-1)*t.listCount))]),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"boardPost",params:{id:e.id}}},nativeOn:{click:function(e){return t.countUp(e)}}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.count))]),t._v(" "),a("td",[t._v(t._s(e.date.substr(0,10)))])])}))]),t._v(" "),a("div",{staticClass:"pagingWrap"},[a("v-runtime-template",{attrs:{template:t.template}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("No")]),t._v(" "),a("th",[t._v("Title")]),t._v(" "),a("th",[t._v("Writer")]),t._v(" "),a("th",[t._v("Views")]),t._v(" "),a("th",[t._v("Date")])])])}]};var y=a("VU/8")(k,$,!1,function(t){a("BOUE")},"data-v-fbc0c85c",null).exports,B=a("Y81h"),S=a.n(B),F={name:"boardList",components:{search:P,list:y},data:function(){return{lists:[],page:1,totalCount:null,totalPages:null,listCount:5,pageCount:5,groupNum:null,startPage:null,endPage:null,template:"",templateInnerHtml:"",searchOptionParam:"",searchTextParam:"",searchResult:!0}},beforeCreate:function(){S.a.start(),S.a.set(.4)},created:function(){var t=this;this.getPageCount(),this.getList(),this.$eventBus.$on("movePage",function(e){t.movePage(e)}),this.getSearchList()},methods:{getList:function(){var t=this;this.$http.get("/api/board/lists",{params:{pageNum:this.page,listCount:this.listCount,searchText:this.searchTextParam,searchOption:this.searchOptionParam}}).then(function(e){t.lists=e.data.result,0===t.lists?(alert("검색 결과가 없습니다."),t.searchResult=!1,S.a.done()):(t.searchResult=!0,t.paging(),t.template='\n              <list-page><ul class="clearfix">\n              '+t.templateInnerHtml+"\n              </ul></list-page>\n            ")}).catch(function(t){console.log(t)})},getPageCount:function(){var t=this;this.$http.get("/api/board/listTotalCount",{params:{searchText:this.searchTextParam,searchOption:this.searchOptionParam}}).then(function(e){t.totalCount=e.data.totalCount}).catch(function(t){console.log(t)})},movePage:function(t){S.a.start(),S.a.set(.4),this.page=t,this.receivePageNum=t,this.getList()},paging:function(){this.totalPages=Math.ceil(this.totalCount/this.listCount),this.totalPages<this.page&&(this.page=this.totalPages),this.groupNum=Math.floor(this.page/this.pageCount+(this.page%this.pageCount>0?1:0)),this.endPage=this.groupNum*this.pageCount,this.startPage=this.endPage-(this.pageCount-1),this.endPage>this.totalPages&&(this.endPage=this.totalPages),this.templateInnerHtml="",1===this.page?this.templateInnerHtml+='\n        <li class="pageNumList">\n          <span>\n            <font-awesome-icon icon="angle-double-left"/>\n          </span>\n        </li>':this.page>1?this.templateInnerHtml+="\n        <li class=\"pageNumList\">\n          <a href='#' @click.prevent=movePage("+this.startPage+')>\n            <font-awesome-icon icon="angle-double-left" class="angleIcon"/>\n          </a>\n        </li>':this.startPage>1&&(this.templateInnerHtml+="\n        <li class=\"pageNumList\">\n          <a href='#' @click.prevent=movePage("+this.startPage+')>\n            <font-awesome-icon icon="angle-double-left" class="angleIcon"/>\n          </a>\n        </li>'),1===this.page?this.templateInnerHtml+='\n        <li class="pageNumList anglePrev">\n          <span>\n            <font-awesome-icon icon="angle-left"/>\n          </span>\n        </li>':this.page>1&&(this.templateInnerHtml+="\n        <li class=\"pageNumList anglePrev\">\n          <a href='#' @click.prevent=movePage("+(this.page-1)+')>\n            <font-awesome-icon icon="angle-left" class="angleIcon"/>\n          </a>\n        </li>');for(var t=this.startPage;t<=this.endPage;t++)t===this.page?this.templateInnerHtml+='\n          <li class="pageNumList clickPageNumColor">\n            '+t+"\n          </li>":this.templateInnerHtml+='\n          <li class="pageNumList">\n            <a href=\'/'+t+"' @click.prevent=movePage("+t+")>"+t+"</a>\n          </li>";this.page<this.totalPages?this.templateInnerHtml+="\n        <li class=\"pageNumList angleNext\">\n          <a href='#' @click.prevent=movePage("+(this.page+1)+')>\n            <font-awesome-icon icon="angle-right" class="angleIcon"/>\n          </a>\n        </li>':this.page===this.totalPages&&(this.templateInnerHtml+='\n        <li class="pageNumList angleNext">\n          <span>\n            <font-awesome-icon icon="angle-right"/>\n          </span>\n        </li>'),this.page<this.totalPages?this.templateInnerHtml+="\n        <li class=\"pageNumList\">\n          <a href='#' @click.prevent=movePage("+this.endPage+')>\n            <font-awesome-icon icon="angle-double-right" class="angleIcon"/>\n          </a>\n        </li>':this.endPage===this.totalPages&&(this.templateInnerHtml+='\n        <li class="pageNumList">\n          <span>\n            <font-awesome-icon icon="angle-double-right"/>\n          </span>\n        </li>'),S.a.done()},getSearchList:function(){var t=this;this.$eventBus.$on("searchBtn",function(e,a){S.a.start(),S.a.set(.4),t.searchTextParam=e,t.searchOptionParam="제목"===a?"title":"name",t.getPageCount(),t.getList()})}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"boardWrap"}},[a("div",[a("search"),t._v(" "),a("button",{staticClass:"writeBtn",attrs:{type:"button"}},[a("router-link",{attrs:{to:"/board/write"}},[t._v("WRITE")])],1),t._v(" "),t.searchResult?a("list",{attrs:{lists:t.lists,template:t.template,totalCount:t.totalCount,page:t.page,listCount:t.listCount}}):t._e()],1)])},staticRenderFns:[]};var L=a("VU/8")(F,A,!1,function(t){a("/Fm9")},"data-v-762eaf64",null).exports,R={name:"boardWrite",data:function(){return{title:"",writer:"",date:"",content:""}},created:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();a<10&&(a="0"+a),n<10&&(n="0"+n);var s=t.getHours(),i=t.getMinutes(),o=t.getSeconds();this.date=e+"-"+a+"-"+n+" "+s+":"+i+":"+o,this.writer=this.$cookie.get("userName")},methods:{write:function(){var t=this,e=document.getElementById("title").value,a=document.getElementById("content").value;return""===e&&""===a?(alert("글이 작성 되지 않았습니다."),!1):""===e?(alert("제목이 작성 되지 않았습니다."),e.focus(),!1):""===a?(alert("내용이 작성 되지 않았습니다."),a.focus(),!1):void this.$http.post("/api/board/write",{name:this.writer,title:this.title,content:this.content.replace(/(\n|\r\n)/g,"<br />"),date:this.date,author_id:this.$cookie.get("id")}).then(function(e){alert(e.data.text),t.$router.push("/board/list")}).catch(function(t){console.log(t)})},contentAutoHeight:function(){var t=document.querySelector("#content");t.style.height="1px",t.style.height=16+t.scrollHeight+"px"}}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"boardWrite"}},[a("form",{attrs:{action:"post"},on:{submit:function(e){return e.preventDefault(),t.write(e)}}},[a("table",{staticClass:"writeWrap"},[a("tr",{staticClass:"writeTitle"},[a("th",[t._v("TITLE")]),t._v(" "),a("td",{attrs:{colspan:"3"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),a("tr",{staticClass:"writeInfo"},[a("th",[t._v("WRITER")]),t._v(" "),a("td",[t._v(t._s(t.writer))]),t._v(" "),a("th",[t._v("DATE")]),t._v(" "),a("td",[t._v(t._s(t.date.substr(0,10)))])]),t._v(" "),a("tr",{staticClass:"writeText"},[a("td",{attrs:{colspan:"4"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{rows:"10",id:"content"},domProps:{value:t.content},on:{keyup:t.contentAutoHeight,keydown:t.contentAutoHeight,input:function(e){e.target.composing||(t.content=e.target.value)}}})])])]),t._v(" "),a("button",{staticClass:"saveBtn",attrs:{type:"submit"}},[t._v("\n      SAVE\n    ")]),t._v(" "),a("div",{staticClass:"btnLine"}),t._v(" "),a("router-link",{staticClass:"cancleBtn",attrs:{to:"/board/list"}},[a("font-awesome-icon",{staticClass:"cancleIcon",attrs:{icon:["far","trash-alt"]}}),t._v("\n      CANCEL\n    ")],1)],1)])},staticRenderFns:[]};var U=a("VU/8")(R,W,!1,function(t){a("EAQZ")},"data-v-eab7e764",null).exports,O={name:"baordPost",data:function(){return{title:"",writer:"",date:"",count:"",content:"",myPost:!1,listId:this.$route.params}},created:function(){var t=this;this.$http.get("/api/board/list",{params:{id:this.listId.id}}).then(function(e){t.title=e.data[0].title,t.writer=e.data[0].name,t.date=e.data[0].date,t.count=e.data[0].count,t.content=e.data[0].content,parseFloat(t.$cookie.get("id"))===e.data[0].author_id&&(t.myPost=!0)}).catch(function(t){console.log(t)})},methods:{deletePost:function(){var t=this;this.$http.delete("/api/board/delete",{params:{id:this.listId.id}}).then(function(e){alert(e.data),t.$router.push("/board/list")}).catch(function(t){console.log(t)})}}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"baordPost"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.deletePost(e)}}},[a("table",{staticClass:"postWrap"},[a("tr",{staticClass:"postTitle"},[a("th",[t._v("TITLE")]),t._v(" "),a("td",{attrs:{colspan:"5"}},[t._v(t._s(t.title))])]),t._v(" "),a("tr",{staticClass:"postInfo"},[a("th",[t._v("WRITER")]),t._v(" "),a("td",[t._v(t._s(t.writer))]),t._v(" "),a("th",[t._v("VIEWS")]),t._v(" "),a("td",[t._v(t._s(t.count))]),t._v(" "),a("th",[t._v("DATE")]),t._v(" "),a("td",[t._v(t._s(t.date.substr(0,10)))])]),t._v(" "),a("tr",{staticClass:"postText"},[a("td",{attrs:{colspan:"6"},domProps:{innerHTML:t._s(t.content)}},[t._v("\n          "+t._s(t.content)+"\n        ")])])]),t._v(" "),t.myPost?a("div",{staticClass:"postBtnWrap"},[a("router-link",{attrs:{to:{name:"boardUpdate",params:{id:this.$route.params.id}}}},[t._v("UPDATE")]),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("DELETE")])],1):t._e()])])},staticRenderFns:[]};var D=a("VU/8")(O,V,!1,function(t){a("3c1o")},"data-v-b2db1ec2",null).exports,H={name:"baordUpdate",data:function(){return{title:"",writer:"",date:"",count:"",content:"",myPost:!1,listId:this.$route.params}},created:function(){var t=this;this.$http.get("/api/board/list",{params:{id:this.listId.id}}).then(function(e){t.title=e.data[0].title,t.writer=e.data[0].name,t.date=e.data[0].date,t.count=e.data[0].count,t.content=e.data[0].content.replace(/(<br>|<br\/>|<br \/>)/g,"\r\n")}).catch(function(t){console.log(t)})},methods:{updatePost:function(){var t=this,e=document.getElementById("title").value,a=document.getElementById("content").value;return""===e&&""===a?(alert("글이 작성 되지 않았습니다."),!1):""===e?(alert("제목이 작성 되지 않았습니다."),e.focus(),!1):""===a?(alert("내용이 작성 되지 않았습니다."),a.focus(),!1):void this.$http.put("/api/board/update",{id:this.listId.id,title:this.title,content:this.content.replace(/(\n|\r\n)/g,"<br />")}).then(function(e){alert("글이 수정 되었습니다."),console.log(e.data),t.$router.push("/board/list")}).catch(function(t){console.log(t)})},contentAutoHeight:function(){var t=document.querySelector("#content");console.log(t),t.style.height="1px",t.style.height=16+t.scrollHeight+"px"}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"baordUpdate"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.updatePost(e)}}},[a("table",{staticClass:"updateWrap"},[a("tr",{staticClass:"updateTitle"},[a("th",[t._v("TITLE")]),t._v(" "),a("td",{attrs:{colspan:"5"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),a("tr",{staticClass:"updateInfo"},[a("th",[t._v("WRITER")]),t._v(" "),a("td",[t._v(t._s(t.writer))]),t._v(" "),a("th",[t._v("VIEWS")]),t._v(" "),a("td",[t._v(t._s(t.count))]),t._v(" "),a("th",[t._v("DATE")]),t._v(" "),a("td",[t._v(t._s(t.date.substr(0,10)))])]),t._v(" "),a("tr",{staticClass:"updateText"},[a("td",{attrs:{colspan:"6"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{rows:"10",id:"content"},domProps:{value:t.content},on:{keyup:t.contentAutoHeight,keydown:t.contentAutoHeight,input:function(e){e.target.composing||(t.content=e.target.value)}}})])])]),t._v(" "),a("button",{staticClass:"saveBtn",attrs:{type:"submit"}},[t._v("\n      SAVE\n    ")]),t._v(" "),a("div",{staticClass:"btnLine"}),t._v(" "),a("router-link",{staticClass:"cancleBtn",attrs:{to:"/board/list"}},[a("font-awesome-icon",{staticClass:"cancleIcon",attrs:{icon:["far","trash-alt"]}}),t._v("\n      CANCLE\n    ")],1)],1)])},staticRenderFns:[]};var K=a("VU/8")(H,M,!1,function(t){a("I7Bh")},"data-v-2631e96e",null).exports;n.a.use(o.a);var q=new o.a({mode:"history",routes:[{path:"/",component:l},{path:"/indexForm",component:m,children:[{path:"/login",component:f},{path:"/logout",beforeEnter:function(t,e,a){a("/")}},{path:"/join",component:C},{path:"/board",component:x,children:[{path:"list",component:L},{path:"write",component:U,beforeEnter:function(t,e,a){if(n.a.cookie.get("uid"))return a();a({path:"/login",query:{redirect:t.fullPath}})}},{path:":id",name:"boardPost",component:D},{path:":id/update",name:"boardUpdate",component:K}]}]}]}),j=a("mtWM"),Z=a.n(j),z=a("K/Lq"),G=a.n(z),Q=a("C/JF"),J=a("fhbW"),Y=a("Yu89"),X=a("1e6/");n.a.prototype.$http=Z.a,n.a.prototype.$eventBus=new n.a,n.a.use(G.a),Q.c.add(J.e,J.g,J.h,J.f,Y.a,Y.b,J.a,J.c,J.d,J.b),n.a.component("font-awesome-icon",X.a),a("erWL"),a("QsYS"),a("UVIz"),n.a.config.productionTip=!1,new n.a({el:"#app",router:q,components:{App:i},template:"<App/>"})},"Nuw+":function(t,e){},QsYS:function(t,e){},RMZ6:function(t,e){},T1eo:function(t,e){},UVIz:function(t,e){},erWL:function(t,e){},f5Rl:function(t,e){},twQF:function(t,e){},ymcE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.253df0e83bd56d6509fb.js.map