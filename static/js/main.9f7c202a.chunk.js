(window["webpackJsonpto-do"]=window["webpackJsonpto-do"]||[]).push([[0],{16:function(e,t,a){e.exports={postSection:"NewsPreview_postSection__2VkAa",cardWrapper:"NewsPreview_cardWrapper__2HnB6",cardTitle:"NewsPreview_cardTitle__2yp5C",postInfo:"NewsPreview_postInfo__2SZT-",author:"NewsPreview_author__C30C8",date:"NewsPreview_date__3tuGh",title:"NewsPreview_title__3pL1x",description:"NewsPreview_description__39sMJ",darkerImg:"NewsPreview_darkerImg__XQ_Ch",img:"NewsPreview_img__1-Omg"}},19:function(e,t,a){e.exports={todoItem:"TodoItem_todoItem__2IiaL",todoItemDefault:"TodoItem_todoItemDefault__3RMUt",todoItemDone:"TodoItem_todoItemDone__17SVq",iconDone:"TodoItem_iconDone__2zmEV",iconDel:"TodoItem_iconDel__2cMEa",updateTaskTextDefault:"TodoItem_updateTaskTextDefault__1Rd9G",updateTaskTextDone:"TodoItem_updateTaskTextDone__eAMnH"}},20:function(e,t,a){e.exports={article:"Article_article__5YdEk",headline:"Article_headline__1zIic",authorAndDate:"Article_authorAndDate__J-nVS",title:"Article_title__1Mm6_",articleImageWrapper:"Article_articleImageWrapper__kSzPF",articleImage:"Article_articleImage__2g-qM",content:"Article_content__27sGh"}},24:function(e,t,a){e.exports={paginator:"Paginator_paginator__1Jk5L",pageNumber:"Paginator_pageNumber__KTADM",pages:"Paginator_pages__3c8B5",paginatorBtn:"Paginator_paginatorBtn__1k8zu"}},26:function(e,t,a){e.exports={header:"Header_header__3aMD0"}},27:function(e,t,a){e.exports={container:"Weather_container__3jiyo",topContainer:"Weather_topContainer__2own-",imgWrapper:"Weather_imgWrapper__X4Ui0",bottomContainer:"Weather_bottomContainer__3UpY3"}},33:function(e,t,a){e.exports={buttonsBottom:"Footer_buttonsBottom__B4owN",amount:"Footer_amount__br43c",btn:"Footer_btn__FmJp2"}},54:function(e,t,a){e.exports={todoContainer:"TodoApp_todoContainer__1ig-a"}},56:function(e,t,a){e.exports={list:"TodoList_list__3uD_o"}},59:function(e,t,a){e.exports=a(92)},64:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),c=a.n(i),o=(a(64),a(4)),s=a(5),l=a(7),u=a(6),p=a(8),d=a(18),m=a(10),h=a(13),f=a(26),E=a.n(f),g=a(3),v=function(e){switch(document.location.pathname){case"/news":return r.a.createElement("div",{className:E.a.header},r.a.createElement(g.b,{to:"/"},"To Do List"),r.a.createElement(g.b,{to:"/weather"},"Weather Channel"));case"/weather":return r.a.createElement("div",{className:E.a.header},r.a.createElement(g.b,{to:"/"},"To Do List"),r.a.createElement(g.b,{to:"/news"},"News Channel"));case"/news/:articleId":return r.a.createElement("div",{className:E.a.header},r.a.createElement(g.b,{to:"/"},"To Do List"),r.a.createElement(g.b,{to:"/news"},"News Channel"),r.a.createElement(g.b,{to:"/weather"},"Weather Channel"));default:return r.a.createElement("div",{className:E.a.header},r.a.createElement(g.b,{to:"/news"},"News Feed"),r.a.createElement(g.b,{to:"/weather"},"Weather Channel"))}},_=a(54),T=a.n(_),b=function(e){var t=e.value,a=e.onChange,n=e.addTask;return r.a.createElement("div",null,r.a.createElement("i",null),r.a.createElement("input",{placeholder:"Add a task",value:t,onChange:a,onKeyPress:n}))},w=a(21),C=a.n(w),y=a(31),O=(a(55),a(38)),k=O.create({baseURL:"https://newsapi.org/v2/",headers:{"X-Api-Key":"40b5268a68a74369a4eabc0b9745407e"}}),N=O.create({baseURL:"http://api.openweathermap.org/data/2.5/"}),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"apple",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"publishedAt",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return k.get("everything?language=en&q=".concat(e,"&sortBy=").concat(t,"&pageSize=").concat(a,"&page=").concat(n))},j=function(){return N.get("weather?id=706483&units=metric&APPID=a8e26109a999b36c455b988c3c998bca")},P=function(e){return{type:"SET_TOPIC",topic:e}},S=function(e){return{type:"SET_SORT_BY",sortBy:e}},x=function(e){for(var t=e.articles.length,a=0;a<t;a++)e.articles[a].id=a,e.articles[a].publishedAt=new Date(e.articles[a].publishedAt).toLocaleString();return e},D=a(19),R=a.n(D),I=a(39),W=a(32),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1,taskText:a.props.text,id:null},a.timer=0,a.activateEditMode=function(e){a.setState({editMode:!0,id:e})},a.deactivateEditMode=function(){a.props.updateTaskTextAC(a.state.id,a.state.taskText),a.setState({editMode:!1})},a.onTaskTextChange=function(e){a.setState({taskText:e.currentTarget.value})},a.updateTaskText=function(e){"Enter"===e.key&&(a.props.updateTaskTextAC(a.state.id,a.state.taskText),a.setState({editMode:!1}))},a.mouseDownHandler=function(e){a.timer=setTimeout(a.activateEditMode,800,e)},a.mouseUpHandler=function(){clearTimeout(a.timer)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.text!==this.props.text&&this.setState({taskText:this.props.text})}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.isCompleted,i=t.completeTask,c=t.removeTask,o=this.state,s=o.editMode,l=o.taskText;return r.a.createElement("li",null,r.a.createElement("div",{className:R.a.todoItem},r.a.createElement(I.a,{icon:n?W.a:W.b,size:"lg",onClick:function(){return i(a)},className:R.a.iconDone}),!s&&r.a.createElement("span",{className:n?R.a.todoItemDone:R.a.todoItemDefault,onMouseDown:function(){return e.mouseDownHandler(a)},onMouseUp:this.mouseUpHandler},l),s&&r.a.createElement("input",{className:n?R.a.updateTaskTextDone:R.a.updateTaskTextDefault,onKeyPress:this.updateTaskText,onChange:this.onTaskTextChange,onBlur:this.deactivateEditMode,autoFocus:!0,value:l}),r.a.createElement(I.a,{icon:W.c,size:"lg",onClick:function(){return c(a)},className:R.a.iconDel})))}}]),t}(r.a.PureComponent),M=a(56),L=a.n(M),U=function(e){var t=e.tasks,a=e.completeTask,n=e.removeTask,i=e.updateTaskTextAC;return r.a.createElement("ul",{className:L.a.list},r.a.createElement("div",null,t.map(function(e){var t=e.id,c=e.text,o=e.isCompleted;return r.a.createElement(B,{key:t,id:t,text:c,isCompleted:o,completeTask:a,removeTask:n,updateTaskTextAC:i})})))},F=a(33),z=a.n(F),H=[{text:"All",id:"all"},{text:"Active",id:"active"},{text:"Completed",id:"completed"}],K=function(e){var t=e.amount,a=(e.currentFilter,e.changeFilter);return r.a.createElement("div",{className:z.a.buttonsBottom},r.a.createElement("span",{className:z.a.amount},"".concat(t," Left")),H.map(function(e){var t=e.id,n=e.text;return r.a.createElement("button",{className:z.a.btn,key:t,onClick:function(){return a(t)}},n)}))},V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={taskText:""},a.handleChange=function(e){var t=e.target.value;a.setState({taskText:t})},a.addTask=function(e){var t=e.key,n=a.state.taskText;n.length>3&&"Enter"===t&&((0,a.props.addTaskAC)((new Date).getTime(),n,!1),a.setState({taskText:""}))},a.getActiveTasksCounter=function(e){return e.filter(function(e){return!e.isCompleted}).length},a.getFilteredTasks=function(e,t){switch(t){case"active":return a.props.tasks.filter(function(e){return!e.isCompleted&&e});case"completed":return a.props.tasks.filter(function(e){return e.isCompleted&&e});default:return e}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.getActiveTasksCounter(this.props.tasks),t=this.getFilteredTasks(this.props.tasks,this.props.filters);return r.a.createElement("div",{className:T.a.todoContainer},r.a.createElement(b,{onChange:this.handleChange,addTask:this.addTask,value:this.state.taskText}),r.a.createElement(U,{tasks:t,completeTask:this.props.completeTaskAC,removeTask:this.props.removeTaskAC,updateTaskTextAC:this.props.updateTaskTextAC}),r.a.createElement(K,{amount:e,activeFilter:this.props.filters,changeFilter:this.props.changeFilterAC}))}}]),t}(r.a.PureComponent),q=Object(h.b)(function(e){return{tasks:e.tasksReducer.tasks,filters:e.filtersReducer}},{addTaskAC:function(e,t,a){return{type:"ADD_TASK",id:e,text:t,isCompleted:a}},removeTaskAC:function(e){return{type:"REMOVE_TASK",id:e}},completeTaskAC:function(e){return{type:"COMPLETE_TASK",id:e}},changeFilterAC:function(e){return{type:"CHANGE_FILTER",currentFilter:e}},updateTaskTextAC:function(e,t){return{type:"UPDATE_TASK_TEXT",id:e,text:t}}})(V),G=a(16),J=a.n(G),X=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.author,n=e.title,i=e.description,c=e.url,o=e.image,s=e.date,l=e.content,u=e.setCurrentArticle;return r.a.createElement("div",{className:J.a.postSection},r.a.createElement(g.b,{to:"/news/"+t,onClick:function(){return u(t,a,n,i,c,o,s,l)}},r.a.createElement("div",{className:J.a.cardWrapper},r.a.createElement("div",{className:J.a.darkerImg},r.a.createElement("img",{src:o,alt:"articleImage",className:J.a.img})),r.a.createElement("div",{className:J.a.cardTitle},r.a.createElement("div",{className:J.a.postInfo},r.a.createElement("span",{className:J.a.author},a),r.a.createElement("span",{className:J.a.date},s)),r.a.createElement("p",{className:J.a.title},n)))),r.a.createElement("div",null,r.a.createElement("p",{className:J.a.description},i)))}}]),t}(r.a.PureComponent),Y=a(58),Q=a(24),Z=a.n(Q),$=function(e){for(var t=e.totalNewsCount,a=e.currentPage,i=e.pageSize,c=e.topic,o=e.sortBy,s=e.onPageChanged,l=e.portionSize,u=void 0===l?15:l,p=Math.ceil(t/i),d=[],m=1;m<=p;m++)d.push(m);var h=Math.ceil(p/u),f=Object(n.useState)(1),E=Object(Y.a)(f,2),g=E[0],v=E[1],_=(g-1)*u+1,T=g*u;return r.a.createElement("div",{className:Z.a.paginator},g>1&&r.a.createElement("button",{onClick:function(){return v(g-1)},className:Z.a.paginatorBtn},"PREV"),d.filter(function(e){return e>=_&&e<=T}).map(function(e){return r.a.createElement("span",{key:e,onClick:function(){return s(c,o,e)},className:a===e?Z.a.pageNumber:Z.a.pages},e)}),h>g&&r.a.createElement("button",{onClick:function(){return v(g+1)},className:Z.a.paginatorBtn},"NEXT"))},ee=function(e){var t=e.articles,a=e.totalNewsCount,n=e.currentPage,i=e.pageSize,c=e.topic,o=e.sortBy,s=e.onPageChanged,l=e.setCurrentArticle;return r.a.createElement("div",null,r.a.createElement($,{totalNewsCount:a,currentPage:n,pageSize:i,topic:c,sortBy:o,onPageChanged:s}),r.a.createElement("div",null,t.map(function(e){return r.a.createElement(X,{key:e.id,id:e.id,author:e.author,title:e.title,description:e.description,url:e.url,image:e.urlToImage,date:e.publishedAt,content:e.content,setCurrentArticle:l})})))},te=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.topic,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.sortBy,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.props.currentPage;a.props.requestNewsTC(e,t,a.props.pageSize,n)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.requestNewsTC(this.props.topic,this.props.sortBy,this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return r.a.createElement(ee,{articles:this.props.articles,totalNewsCount:this.props.totalNewsCount,currentPage:this.props.currentPage,pageSize:this.props.pageSize,topic:this.props.topic,sortBy:this.props.sortBy,onPageChanged:this.onPageChanged,setCurrentArticle:this.props.setCurrentArticle})}}]),t}(r.a.PureComponent),ae=Object(m.d)(Object(h.b)(function(e){return{articles:e.newsReducer.articles,totalNewsCount:e.newsReducer.totalNewsCount,currentPage:e.newsReducer.currentPage,pageSize:e.newsReducer.pageSize,topic:e.newsReducer.topic,sortBy:e.newsReducer.sortBy}},{requestNewsTC:function(e,t,a,n){return function(){var r=Object(y.a)(C.a.mark(function r(i){var c,o;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i({type:"SET_CURRENT_PAGE",currentPage:n}),i(P(e)),i(S(t)),r.next=5,A(e,t,a,n);case 5:return c=r.sent,r.next=8,x(c.data);case 8:o=r.sent,i({type:"SET_ARTICLES",articles:o.articles}),i({type:"SET_TOTAL_NEWS_COUNT",totalNewsCount:o.totalResults});case 11:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},setCurrentArticle:function(e,t,a,n,r,i,c,o){return{type:"SET_CURRENT_ARTICLE",id:e,author:t,title:a,description:n,url:r,image:i,date:c,content:o}}}))(te),ne=a(27),re=a.n(ne),ie=function(e){var t=e.weather,a=e.main,n=e.visibility,i=e.wind,c=e.clouds,o=(e.dt,e.sys),s=e.name,l="https://openweathermap.org/img/w/"+t[0].icon+".png",u=new Date(1e3*o.sunrise),p=u.getHours(),d=u.getMinutes(),m=new Date(1e3*o.sunset),h=m.getHours(),f=m.getMinutes();return r.a.createElement("div",null,r.a.createElement("div",{className:re.a.container},r.a.createElement("div",{className:re.a.topContainer},r.a.createElement("h1",null,s),r.a.createElement("div",null,r.a.createElement("span",null,"Current temperature: ",a.temp,"\xb0C")),r.a.createElement("div",null,r.a.createElement("span",null,"Varies from ",a.temp_min,"\xb0C to ",a.temp_max,"\xb0C")),r.a.createElement("div",{className:re.a.imgWrapper},r.a.createElement("span",null,t[0].main),r.a.createElement("img",{src:l,alt:"weatherIcon"}))),r.a.createElement("hr",null),r.a.createElement("div",{className:re.a.bottomContainer},r.a.createElement("div",null,r.a.createElement("span",null,"Wind: ",i.deg,"\xb0 ",i.speed," m/s")),r.a.createElement("div",null,r.a.createElement("span",null,"Visibility: ",n," m")),r.a.createElement("div",null,r.a.createElement("span",null,"Cloudiness: ",c.all,"%")),r.a.createElement("div",null,r.a.createElement("span",null,"Humidity: ",a.humidity,"%")),r.a.createElement("div",null,r.a.createElement("span",null,"Pressure: ",a.pressure," hPa")),r.a.createElement("div",null,r.a.createElement("span",null,"Sunrise: ",p,":",d)),r.a.createElement("div",null,r.a.createElement("span",null,"Sunset: ",h,":",f)))))},ce=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.requestCurrentWeatherTC()}},{key:"render",value:function(){var e=this.props.currentWeather,t=e.weather,a=e.main,n=e.visibility,i=e.wind,c=e.clouds,o=e.dt,s=e.sys,l=e.name;return r.a.createElement(ie,{weather:t,main:a,visibility:n,wind:i,clouds:c,dt:o,sys:s,name:l})}}]),t}(r.a.PureComponent),oe=Object(h.b)(function(e){return{currentWeather:e.weatherReducer.currentWeather}},{requestCurrentWeatherTC:function(){return function(){var e=Object(y.a)(C.a.mark(function e(t){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:a=e.sent,t({type:"SET_CURRENT_WEATHER",weather:(n=a.data).weather,main:n.main,visibility:n.visibility,wind:n.wind,clouds:n.clouds,dt:n.dt,sys:n.sys,name:n.name});case 4:case"end":return e.stop()}var n},e)}));return function(t){return e.apply(this,arguments)}}()}})(ce),se=a(20),le=a.n(se),ue=function(e){e.id;var t=e.author,a=e.title,n=(e.description,e.url),i=e.image,c=e.date,o=e.content;return r.a.createElement("div",{className:le.a.article},r.a.createElement("div",{className:le.a.headline},r.a.createElement("div",{className:le.a.authorAndDate},r.a.createElement("span",null,t),r.a.createElement("span",null,c)),r.a.createElement("div",{className:le.a.title},r.a.createElement("h1",null,a))),r.a.createElement("div",{className:le.a.articleImageWrapper},r.a.createElement("img",{src:i,alt:"articleImage",className:le.a.articleImage}),r.a.createElement("span",null,r.a.createElement("a",{href:n},"Article source here"))),r.a.createElement("div",{className:le.a.content},o))},pe=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.currentArticle,t=e.id,a=e.author,n=e.title,i=e.description,c=e.url,o=e.image,s=e.date,l=e.content;return r.a.createElement(ue,{id:t,author:a,title:n,description:i,url:c,image:o,date:s,content:l})}}]),t}(r.a.PureComponent),de=Object(m.d)(Object(h.b)(function(e){return{currentArticle:e.newsReducer.currentArticle}},{unsetCurrentArticle:function(){return{type:"UNSET_CURRENT_ARTICLE"}}}),d.f)(pe),me=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(v,{title:"To do list"}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/news/:articleId",render:function(){return r.a.createElement(de,null)}}),r.a.createElement(d.a,{exact:!0,path:"/news",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(d.a,{exact:!0,path:"/weather",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(d.a,{path:"/",render:function(){return r.a.createElement(q,null)}})))}}]),t}(r.a.PureComponent),he=Object(m.d)(d.f,Object(h.b)())(me);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=a(30),Ee=a(23);function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(a,!0).forEach(function(t){Object(Ee.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var _e={tasks:[{id:322,text:"\u042d\u0442\u043e initialState, redux state \u0435\u0449\u0435 \u043d\u0435\u0442 \u0438\u043b\u0438 \u043e\u0442\u0432\u0430\u043b\u0438\u043b\u0441\u044f",isCompleted:!1}]},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":var a={id:t.id,text:t.text,isCompleted:t.isCompleted};return ve({},e,{tasks:[].concat(Object(fe.a)(e.tasks),[a])});case"COMPLETE_TASK":return ve({},e,{tasks:e.tasks.map(function(e){return e.id===t.id?ve({},e,{isCompleted:!e.isCompleted}):e})});case"REMOVE_TASK":return ve({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.id})});case"UPDATE_TASK_TEXT":return ve({},e,{tasks:e.tasks.map(function(e){return e.id===t.id?ve({},e,{text:t.text}):e})});default:return e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FILTER":return t.currentFilter;default:return e}};function we(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?we(a,!0).forEach(function(t){Object(Ee.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):we(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ye={articles:[],totalNewsCount:0,currentPage:1,pageSize:20,topic:"apple",sortBy:"publishedAt",currentArticle:{}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARTICLES":return Ce({},e,{articles:Object(fe.a)(t.articles)});case"SET_CURRENT_PAGE":return Ce({},e,{currentPage:t.currentPage});case"SET_TOTAL_NEWS_COUNT":return Ce({},e,{totalNewsCount:t.totalNewsCount});case"SET_TOPIC":return Ce({},e,{topic:t.topic});case"SET_SORT_BY":return Ce({},e,{sortBy:t.sortBy});case"SET_CURRENT_ARTICLE":return Ce({},e,{currentArticle:Ce({},e.currentArticle,{id:t.id,author:t.author,title:t.title,description:t.description,url:t.url,image:t.image,date:t.date,content:t.content})});case"UNSET_CURRENT_ARTICLE":return Ce({},e,{currentArticle:{}});default:return e}},ke=a(41),Ne=a(57);function Ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ae(a,!0).forEach(function(t){Object(Ee.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ae(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Pe={currentWeather:{},fiveDayForecast:{}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_WEATHER":return je({},e,{currentWeather:je({},e.currentWeather,{weather:t.weather,main:t.main,visibility:t.visibility,wind:t.wind,clouds:t.clouds,dt:t.dt,sys:t.sys,name:t.name})});default:return e}},xe=Object(m.c)({tasksReducer:Te,filtersReducer:be,newsReducer:Oe,weatherReducer:Se}),De=Object(m.a)(Object(ke.save)({namespace:"todo-app"}),Ne.a)(m.e)(xe,Object(ke.load)({namespace:"todo-app"}));c.a.render(r.a.createElement(g.a,{basename:"/to-do"},r.a.createElement(h.a,{store:De},r.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[59,1,2]]]);
//# sourceMappingURL=main.9f7c202a.chunk.js.map