(window["webpackJsonpto-do"]=window["webpackJsonpto-do"]||[]).push([[0],{16:function(e,t,a){e.exports={postSection:"NewsPreview_postSection__2VkAa",cardWrapper:"NewsPreview_cardWrapper__2HnB6",cardTitle:"NewsPreview_cardTitle__2yp5C",postInfo:"NewsPreview_postInfo__2SZT-",author:"NewsPreview_author__C30C8",date:"NewsPreview_date__3tuGh",title:"NewsPreview_title__3pL1x",description:"NewsPreview_description__39sMJ",darkerImg:"NewsPreview_darkerImg__XQ_Ch",img:"NewsPreview_img__1-Omg"}},19:function(e,t,a){e.exports={todoItem:"TodoItem_todoItem__2IiaL",todoItemDefault:"TodoItem_todoItemDefault__3RMUt",todoItemDone:"TodoItem_todoItemDone__17SVq",iconDone:"TodoItem_iconDone__2zmEV",iconDel:"TodoItem_iconDel__2cMEa",updateTaskTextDefault:"TodoItem_updateTaskTextDefault__1Rd9G",updateTaskTextDone:"TodoItem_updateTaskTextDone__eAMnH"}},20:function(e,t,a){e.exports={article:"Article_article__5YdEk",headline:"Article_headline__1zIic",authorAndDate:"Article_authorAndDate__J-nVS",title:"Article_title__1Mm6_",articleImageWrapper:"Article_articleImageWrapper__kSzPF",articleImage:"Article_articleImage__2g-qM",content:"Article_content__27sGh"}},23:function(e,t,a){e.exports={paginator:"Paginator_paginator__1Jk5L",pageNumber:"Paginator_pageNumber__KTADM",pages:"Paginator_pages__3c8B5",paginatorBtn:"Paginator_paginatorBtn__1k8zu"}},24:function(e,t,a){e.exports={container:"Weather_container__3jiyo",topContainer:"Weather_topContainer__2own-",imgWrapper:"Weather_imgWrapper__X4Ui0",bottomContainer:"Weather_bottomContainer__3UpY3",station:"Weather_station__2bZRB"}},26:function(e,t,a){e.exports={header:"Header_header__3aMD0"}},32:function(e,t,a){e.exports={buttonsBottom:"Footer_buttonsBottom__B4owN",amount:"Footer_amount__br43c",btn:"Footer_btn__FmJp2"}},54:function(e,t,a){e.exports={todoContainer:"TodoApp_todoContainer__1ig-a"}},55:function(e,t,a){e.exports={list:"TodoList_list__3uD_o"}},58:function(e,t,a){e.exports=a(91)},63:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),i=a.n(o),c=(a(63),a(4)),s=a(5),l=a(7),u=a(6),p=a(8),d=a(18),m=a(10),h=a(13),f=a(26),E=a.n(f),_=a(3),v=Object(d.f)(function(e){e.match;var t=e.location;e.history;switch(t.pathname){case"/news":return r.a.createElement("div",{className:E.a.header},r.a.createElement(_.b,{to:"/"},"To Do List"),r.a.createElement(_.b,{to:"/weather"},"Weather Channel"));case"/weather":return r.a.createElement("div",{className:E.a.header},r.a.createElement(_.b,{to:"/"},"To Do List"),r.a.createElement(_.b,{to:"/news"},"News Channel"));case"/news/:articleId":return r.a.createElement("div",{className:E.a.header},r.a.createElement(_.b,{to:"/"},"To Do List"),r.a.createElement(_.b,{to:"/news"},"News Channel"),r.a.createElement(_.b,{to:"/weather"},"Weather Channel"));default:return r.a.createElement("div",{className:E.a.header},r.a.createElement(_.b,{to:"/news"},"News Feed"),r.a.createElement(_.b,{to:"/weather"},"Weather Channel"))}}),g=a(54),T=a.n(g),b=function(e){var t=e.value,a=e.onChange,n=e.addTask;return r.a.createElement("div",null,r.a.createElement("i",null),r.a.createElement("input",{placeholder:"Add a task",value:t,onChange:a,onKeyPress:n}))},w=a(27),C=a.n(w),y=a(37),O=a(38),k=O.create({baseURL:"https://newsapi.org/v2/",headers:{"X-Api-Key":"40b5268a68a74369a4eabc0b9745407e"}}),N=(O.create({baseURL:"https://api.weatherbit.io/v2.0/"}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"apple",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"publishedAt",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return k.get("everything?language=en&q=".concat(e,"&sortBy=").concat(t,"&pageSize=").concat(a,"&page=").concat(n))}),j=function(e){return{type:"SET_TOPIC",topic:e}},A=function(e){return{type:"SET_SORT_BY",sortBy:e}},P=function(e){for(var t=e.articles.length,a=0;a<t;a++)e.articles[a].id=a,e.articles[a].publishedAt=new Date(e.articles[a].publishedAt).toLocaleString();return e},S=a(19),x=a.n(S),D=a(39),R=a(31),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1,taskText:a.props.text,id:null},a.timer=0,a.activateEditMode=function(e){a.setState({editMode:!0,id:e})},a.deactivateEditMode=function(){a.props.updateTaskTextAC(a.state.id,a.state.taskText),a.setState({editMode:!1})},a.onTaskTextChange=function(e){a.setState({taskText:e.currentTarget.value})},a.updateTaskText=function(e){"Enter"===e.key&&(a.props.updateTaskTextAC(a.state.id,a.state.taskText),a.setState({editMode:!1}))},a.mouseDownHandler=function(e){a.timer=setTimeout(a.activateEditMode,800,e)},a.mouseUpHandler=function(){clearTimeout(a.timer)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.text!==this.props.text&&this.setState({taskText:this.props.text})}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.isCompleted,o=t.completeTask,i=t.removeTask,c=this.state,s=c.editMode,l=c.taskText;return r.a.createElement("li",null,r.a.createElement("div",{className:x.a.todoItem},r.a.createElement(D.a,{icon:n?R.a:R.b,size:"lg",onClick:function(){return o(a)},className:x.a.iconDone}),!s&&r.a.createElement("span",{className:n?x.a.todoItemDone:x.a.todoItemDefault,onMouseDown:function(){return e.mouseDownHandler(a)},onMouseUp:this.mouseUpHandler},l),s&&r.a.createElement("input",{className:n?x.a.updateTaskTextDone:x.a.updateTaskTextDefault,onKeyPress:this.updateTaskText,onChange:this.onTaskTextChange,onBlur:this.deactivateEditMode,autoFocus:!0,value:l}),r.a.createElement(D.a,{icon:R.c,size:"lg",onClick:function(){return i(a)},className:x.a.iconDel})))}}]),t}(r.a.PureComponent),W=a(55),B=a.n(W),M=function(e){var t=e.tasks,a=e.completeTask,n=e.removeTask,o=e.updateTaskTextAC;return r.a.createElement("ul",{className:B.a.list},r.a.createElement("div",null,t.map(function(e){var t=e.id,i=e.text,c=e.isCompleted;return r.a.createElement(I,{key:t,id:t,text:i,isCompleted:c,completeTask:a,removeTask:n,updateTaskTextAC:o})})))},L=a(32),U=a.n(L),F=[{text:"All",id:"all"},{text:"Active",id:"active"},{text:"Completed",id:"completed"}],z=function(e){var t=e.amount,a=(e.currentFilter,e.changeFilter);return r.a.createElement("div",{className:U.a.buttonsBottom},r.a.createElement("span",{className:U.a.amount},"".concat(t," Left")),F.map(function(e){var t=e.id,n=e.text;return r.a.createElement("button",{className:U.a.btn,key:t,onClick:function(){return a(t)}},n)}))},H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={taskText:""},a.handleChange=function(e){var t=e.target.value;a.setState({taskText:t})},a.addTask=function(e){var t=e.key,n=a.state.taskText;n.length>3&&"Enter"===t&&((0,a.props.addTaskAC)((new Date).getTime(),n,!1),a.setState({taskText:""}))},a.getActiveTasksCounter=function(e){return e.filter(function(e){return!e.isCompleted}).length},a.getFilteredTasks=function(e,t){switch(t){case"active":return a.props.tasks.filter(function(e){return!e.isCompleted&&e});case"completed":return a.props.tasks.filter(function(e){return e.isCompleted&&e});default:return e}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.getActiveTasksCounter(this.props.tasks),t=this.getFilteredTasks(this.props.tasks,this.props.filters);return r.a.createElement("div",{className:T.a.todoContainer},r.a.createElement(b,{onChange:this.handleChange,addTask:this.addTask,value:this.state.taskText}),r.a.createElement(M,{tasks:t,completeTask:this.props.completeTaskAC,removeTask:this.props.removeTaskAC,updateTaskTextAC:this.props.updateTaskTextAC}),r.a.createElement(z,{amount:e,activeFilter:this.props.filters,changeFilter:this.props.changeFilterAC}))}}]),t}(r.a.PureComponent),K=Object(h.b)(function(e){return{tasks:e.tasksReducer.tasks,filters:e.filtersReducer}},{addTaskAC:function(e,t,a){return{type:"ADD_TASK",id:e,text:t,isCompleted:a}},removeTaskAC:function(e){return{type:"REMOVE_TASK",id:e}},completeTaskAC:function(e){return{type:"COMPLETE_TASK",id:e}},changeFilterAC:function(e){return{type:"CHANGE_FILTER",currentFilter:e}},updateTaskTextAC:function(e,t){return{type:"UPDATE_TASK_TEXT",id:e,text:t}}})(H),q=a(16),V=a.n(q),G=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.author,n=e.title,o=e.description,i=e.url,c=e.image,s=e.date,l=e.content,u=e.setCurrentArticle;return r.a.createElement("div",{className:V.a.postSection},r.a.createElement(_.b,{to:"/news/"+t,onClick:function(){return u(t,a,n,o,i,c,s,l)}},r.a.createElement("div",{className:V.a.cardWrapper},r.a.createElement("div",{className:V.a.darkerImg},r.a.createElement("img",{src:c,alt:"articleImage",className:V.a.img})),r.a.createElement("div",{className:V.a.cardTitle},r.a.createElement("div",{className:V.a.postInfo},r.a.createElement("span",{className:V.a.author},a),r.a.createElement("span",{className:V.a.date},s)),r.a.createElement("p",{className:V.a.title},n)))),r.a.createElement("div",null,r.a.createElement("p",{className:V.a.description},o)))}}]),t}(r.a.PureComponent),J=a(57),X=a(23),Y=a.n(X),Z=function(e){for(var t=e.totalNewsCount,a=e.currentPage,o=e.pageSize,i=e.topic,c=e.sortBy,s=e.onPageChanged,l=e.portionSize,u=void 0===l?15:l,p=Math.ceil(t/o),d=[],m=1;m<=p;m++)d.push(m);var h=Math.ceil(p/u),f=Object(n.useState)(1),E=Object(J.a)(f,2),_=E[0],v=E[1],g=(_-1)*u+1,T=_*u;return r.a.createElement("div",{className:Y.a.paginator},_>1&&r.a.createElement("button",{onClick:function(){return v(_-1)},className:Y.a.paginatorBtn},"PREV"),d.filter(function(e){return e>=g&&e<=T}).map(function(e){return r.a.createElement("span",{key:e,onClick:function(){return s(i,c,e)},className:a===e?Y.a.pageNumber:Y.a.pages},e)}),h>_&&r.a.createElement("button",{onClick:function(){return v(_+1)},className:Y.a.paginatorBtn},"NEXT"))},Q=function(e){var t=e.articles,a=e.totalNewsCount,n=e.currentPage,o=e.pageSize,i=e.topic,c=e.sortBy,s=e.onPageChanged,l=e.setCurrentArticle;return r.a.createElement("div",null,r.a.createElement(Z,{totalNewsCount:a,currentPage:n,pageSize:o,topic:i,sortBy:c,onPageChanged:s}),r.a.createElement("div",null,t.map(function(e){return r.a.createElement(G,{key:e.id,id:e.id,author:e.author,title:e.title,description:e.description,url:e.url,image:e.urlToImage,date:e.publishedAt,content:e.content,setCurrentArticle:l})})))},$=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.topic,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.sortBy,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.props.currentPage;a.props.requestNewsTC(e,t,a.props.pageSize,n)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.requestNewsTC(this.props.topic,this.props.sortBy,this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return r.a.createElement(Q,{articles:this.props.articles,totalNewsCount:this.props.totalNewsCount,currentPage:this.props.currentPage,pageSize:this.props.pageSize,topic:this.props.topic,sortBy:this.props.sortBy,onPageChanged:this.onPageChanged,setCurrentArticle:this.props.setCurrentArticle})}}]),t}(r.a.Component),ee=Object(m.d)(Object(h.b)(function(e){return{articles:e.newsReducer.articles,totalNewsCount:e.newsReducer.totalNewsCount,currentPage:e.newsReducer.currentPage,pageSize:e.newsReducer.pageSize,topic:e.newsReducer.topic,sortBy:e.newsReducer.sortBy}},{requestNewsTC:function(e,t,a,n){return function(){var r=Object(y.a)(C.a.mark(function r(o){var i,c;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o({type:"SET_CURRENT_PAGE",currentPage:n}),o(j(e)),o(A(t)),r.next=5,N(e,t,a,n);case 5:return i=r.sent,r.next=8,P(i.data);case 8:c=r.sent,o({type:"SET_ARTICLES",articles:c.articles}),o({type:"SET_TOTAL_NEWS_COUNT",totalNewsCount:c.totalResults});case 11:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},setCurrentArticle:function(e,t,a,n,r,o,i,c){return{type:"SET_CURRENT_ARTICLE",id:e,author:t,title:a,description:n,url:r,image:o,date:i,content:c}}}))($),te=a(24),ae=a.n(te),ne=function(e){var t=e.currentWeather,a=t.humidity,n=(t.partOfDay,t.pressure),o=t.lastObservationTime,i=t.clouds,c=t.city,s=t.windSpeed,l=t.windDirection,u=t.visibility,p=t.sunset,d=t.sunrise,m=(t.snowfall,t.weather),h=t.temperature,f=t.feelsLike,E="https://weatherbit.io/static/img/icons/".concat(m.icon,".png");return r.a.createElement("div",null,r.a.createElement("div",{className:ae.a.container},r.a.createElement("div",{className:ae.a.topContainer},r.a.createElement("h1",null,c),r.a.createElement("div",null,r.a.createElement("span",null,"Current t\xb0 - ",h,"\xb0C")),r.a.createElement("div",null,r.a.createElement("span",null,"Feels Like ",f,"\xb0C")),r.a.createElement("div",{className:ae.a.imgWrapper},r.a.createElement("span",null,m.description),r.a.createElement("img",{src:E,alt:"weatherIcon"}))),r.a.createElement("hr",null),r.a.createElement("div",{className:ae.a.bottomContainer},r.a.createElement("div",null,r.a.createElement("span",null,"Wind: ",s," m/s ",l)),r.a.createElement("div",null,r.a.createElement("span",null,"Visibility: ",u," km")),r.a.createElement("div",null,r.a.createElement("span",null,"Cloudiness: ",i,"%")),r.a.createElement("div",null,r.a.createElement("span",null,"Humidity: ",a,"%")),r.a.createElement("div",null,r.a.createElement("span",null,"Pressure: ",n," hPa")),r.a.createElement("div",null,r.a.createElement("span",null,"Sunrise: ",d)),r.a.createElement("div",null,r.a.createElement("span",null,"Sunset: ",p)),r.a.createElement("div",{className:ae.a.station},r.a.createElement("span",null,"There was the last respond from the station at: ",o)))))},re=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043b\u0430\u0441\u044c"),this.props.requestCurrentWeatherTC()}},{key:"render",value:function(){return r.a.createElement(ne,{currentWeather:this.props.currentWeather})}}]),t}(r.a.Component),oe=Object(h.b)(function(e){return{currentWeather:e.weatherReducer.currentWeather}},{requestCurrentWeatherTC:function(){return function(){var e=Object(y.a)(C.a.mark(function e(t){var a,n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\u0437\u0430\u0448\u043b\u0438 \u0432 \u0441\u0430\u043d\u043a\u0443"),e.prev=1,console.log("\u0437\u0430\u0448\u043b\u0438 \u0432 \u0442\u0440\u0430\u0439"),e.next=5,fetch("https://api.weatherbit.io/v2.0/current?key=90db46941f2d41eba9eef01407d850c5&lang=en&units=M&city_id=706483");case 5:return a=e.sent,e.next=8,console.log("\u0437\u0430\u043f\u0440\u043e\u0441 \u0443\u043b\u0435\u0442\u0435\u043b");case 8:return e.next=10,a.json();case 10:return n=e.sent,e.next=13,console.log("response \u0440\u0430\u0441\u043f\u0430\u0440\u0441\u0438\u043b\u0441\u044f");case 13:return e.next=15,console.log(n);case 15:return e.next=17,t({type:"SET_CURRENT_WEATHER",rh:(r=n.data[0]).rh,pod:r.pod,pres:r.pres,ob_time:r.ob_time,clouds:r.clouds,city_name:r.city_name,wind_spd:r.wind_spd,wind_cdir:r.wind_cdir,vis:r.vis,sunset:r.sunset,snow:r.snow,sunrise:r.sunrise,weather:r.weather,temp:r.temp,app_temp:r.app_temp});case 17:return e.next=19,console.log("\u0434\u0438\u0441\u043f\u0430\u0442\u0447 \u043f\u0440\u043e\u0448\u0435\u043b");case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),console.log(e.t0);case 24:case"end":return e.stop()}var r},e,null,[[1,21]])}));return function(t){return e.apply(this,arguments)}}()}})(re),ie=a(20),ce=a.n(ie),se=function(e){e.id;var t=e.author,a=e.title,n=(e.description,e.url),o=e.image,i=e.date,c=e.content;return r.a.createElement("div",{className:ce.a.article},r.a.createElement("div",{className:ce.a.headline},r.a.createElement("div",{className:ce.a.authorAndDate},r.a.createElement("span",null,t),r.a.createElement("span",null,i)),r.a.createElement("div",{className:ce.a.title},r.a.createElement("h1",null,a))),r.a.createElement("div",{className:ce.a.articleImageWrapper},r.a.createElement("img",{src:o,alt:"articleImage",className:ce.a.articleImage}),r.a.createElement("span",null,r.a.createElement("a",{href:n},"Article source here"))),r.a.createElement("div",{className:ce.a.content},c))},le=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.currentArticle,t=e.id,a=e.author,n=e.title,o=e.description,i=e.url,c=e.image,s=e.date,l=e.content;return r.a.createElement(se,{id:t,author:a,title:n,description:o,url:i,image:c,date:s,content:l})}}]),t}(r.a.PureComponent),ue=Object(m.d)(Object(h.b)(function(e){return{currentArticle:e.newsReducer.currentArticle}},{unsetCurrentArticle:function(){return{type:"UNSET_CURRENT_ARTICLE"}}}),d.f)(le),pe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(v,{title:"To do list"}),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/news/:articleId",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(d.a,{path:"/news",render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(d.a,{path:"/weather",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(d.a,{path:"/",render:function(){return r.a.createElement(K,null)}})))}}]),t}(r.a.PureComponent),de=Object(m.d)(d.f,Object(h.b)())(pe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(30),he=a(22);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(a,!0).forEach(function(t){Object(he.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var _e={tasks:[{id:322,text:"\u042d\u0442\u043e \u0437\u0430\u0445\u0430\u0440\u0434\u043a\u043e\u0434\u0436\u0435\u043d\u0430\u044f \u0442\u0430\u0441\u043a\u0430, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0439 \u0441\u0432\u043e\u0438 \u043f\u043b\u0437",isCompleted:!1}]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":var a={id:t.id,text:t.text,isCompleted:t.isCompleted};return Ee({},e,{tasks:[].concat(Object(me.a)(e.tasks),[a])});case"COMPLETE_TASK":return Ee({},e,{tasks:e.tasks.map(function(e){return e.id===t.id?Ee({},e,{isCompleted:!e.isCompleted}):e})});case"REMOVE_TASK":return Ee({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.id})});case"UPDATE_TASK_TEXT":return Ee({},e,{tasks:e.tasks.map(function(e){return e.id===t.id?Ee({},e,{text:t.text}):e})});default:return e}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FILTER":return t.currentFilter;default:return e}};function Te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Te(a,!0).forEach(function(t){Object(he.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Te(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var we={articles:[],totalNewsCount:0,currentPage:1,pageSize:20,topic:"apple",sortBy:"publishedAt",currentArticle:{}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARTICLES":return be({},e,{articles:Object(me.a)(t.articles)});case"SET_CURRENT_PAGE":return be({},e,{currentPage:t.currentPage});case"SET_TOTAL_NEWS_COUNT":return be({},e,{totalNewsCount:t.totalNewsCount});case"SET_TOPIC":return be({},e,{topic:t.topic});case"SET_SORT_BY":return be({},e,{sortBy:t.sortBy});case"SET_CURRENT_ARTICLE":return be({},e,{currentArticle:be({},e.currentArticle,{id:t.id,author:t.author,title:t.title,description:t.description,url:t.url,image:t.image,date:t.date,content:t.content})});case"UNSET_CURRENT_ARTICLE":return be({},e,{currentArticle:{}});default:return e}},ye=a(41),Oe=a(56);function ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ke(a,!0).forEach(function(t){Object(he.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ke(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var je={currentWeather:{humidity:null,partOfDay:null,pressure:null,lastObservationTime:null,clouds:null,city:null,windSpeed:null,windDirection:null,visibility:null,sunset:null,sunrise:null,snowfall:null,weather:{icon:null,code:null,description:null},temperature:null,feelsLike:null},twoDayForecast:{}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_WEATHER":return Ne({},e,{currentWeather:Ne({},e.currentWeather,{humidity:t.rh,partOfDay:t.pod,pressure:t.pres,lastObservationTime:t.ob_time,clouds:t.clouds,city:t.city_name,windSpeed:t.wind_spd,windDirection:t.wind_cdir,visibility:t.vis,sunset:t.sunset,sunrise:t.sunrise,snowfall:t.snow,weather:t.weather,temperature:t.temp,feelsLike:t.app_temp})});default:return e}},Pe=Object(m.c)({tasksReducer:ve,filtersReducer:ge,newsReducer:Ce,weatherReducer:Ae}),Se=Object(m.a)(Object(ye.save)({namespace:"todo-app"}),Oe.a)(m.e)(Pe,Object(ye.load)({namespace:"todo-app"}));i.a.render(r.a.createElement(_.a,{basename:"/to-do"},r.a.createElement(h.a,{store:Se},r.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,1,2]]]);
//# sourceMappingURL=main.df93c4bb.chunk.js.map