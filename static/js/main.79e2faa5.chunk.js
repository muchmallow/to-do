(window["webpackJsonpto-do"]=window["webpackJsonpto-do"]||[]).push([[0],{16:function(e,t,a){e.exports={container:"Weather_container__3jiyo",topContainer:"Weather_topContainer__2own-",animateWrapper:"Weather_animateWrapper__xgnE_",list:"Weather_list__3SXR7",listIcon:"Weather_listIcon__1HApB",listItem:"Weather_listItem__196hW",listItemBtn:"Weather_listItemBtn__1RycA",cityArrow:"Weather_cityArrow__3S7VW",imgWrapper:"Weather_imgWrapper__X4Ui0",scrollParent:"Weather_scrollParent__2Pacz",station:"Weather_station__2bZRB"}},17:function(e,t,a){e.exports={postSection:"NewsPreview_postSection__2VkAa",cardWrapper:"NewsPreview_cardWrapper__2HnB6",cardTitle:"NewsPreview_cardTitle__2yp5C",postInfo:"NewsPreview_postInfo__2SZT-",author:"NewsPreview_author__C30C8",date:"NewsPreview_date__3tuGh",title:"NewsPreview_title__3pL1x",description:"NewsPreview_description__39sMJ",darkerImg:"NewsPreview_darkerImg__XQ_Ch",img:"NewsPreview_img__1-Omg"}},19:function(e,t,a){e.exports={header:"Header_header__3aMD0",navlinkContainer:"Header_navlinkContainer__2pGzW"}},21:function(e,t,a){e.exports={todoItem:"TodoItem_todoItem__2IiaL",todoItemDefault:"TodoItem_todoItemDefault__3RMUt",todoItemDone:"TodoItem_todoItemDone__17SVq",iconDone:"TodoItem_iconDone__2zmEV",iconDel:"TodoItem_iconDel__2cMEa",updateTaskTextDefault:"TodoItem_updateTaskTextDefault__1Rd9G",updateTaskTextDone:"TodoItem_updateTaskTextDone__eAMnH"}},22:function(e,t,a){e.exports={article:"Article_article__5YdEk",headline:"Article_headline__1zIic",authorAndDate:"Article_authorAndDate__J-nVS",title:"Article_title__1Mm6_",articleImageWrapper:"Article_articleImageWrapper__kSzPF",articleImage:"Article_articleImage__2g-qM",content:"Article_content__27sGh"}},24:function(e,t,a){e.exports={forecastElementsContainer:"Forecast_forecastElementsContainer__32Ork",forecastElements:"Forecast_forecastElements__3-RB-",forecastHour:"Forecast_forecastHour__BitDN",forecastIcon:"Forecast_forecastIcon__13wes",forecastChanceOfRain:"Forecast_forecastChanceOfRain__2cGqA",forecastTemperature:"Forecast_forecastTemperature__2MuCf"}},28:function(e,t,a){e.exports={paginator:"Paginator_paginator__1Jk5L",pageNumber:"Paginator_pageNumber__KTADM",pages:"Paginator_pages__3c8B5",paginatorBtn:"Paginator_paginatorBtn__1k8zu"}},34:function(e,t,a){e.exports={buttonsBottom:"Footer_buttonsBottom__B4owN",amount:"Footer_amount__br43c",btn:"Footer_btn__FmJp2"}},55:function(e,t,a){e.exports={todoContainer:"TodoApp_todoContainer__1ig-a"}},56:function(e,t,a){e.exports={list:"TodoList_list__3uD_o"}},60:function(e,t,a){e.exports=a(94)},65:function(e,t,a){},90:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),o=a.n(s),i=(a(65),a(6)),c=a(7),l=a(9),u=a(8),p=a(10),d=a(20),m=a(14),h=a(13),_=a(19),f=a.n(_),E=a(4),T=Object(d.f)(function(e){e.match;var t=e.location;e.history;switch(t.pathname){case"/news":return r.a.createElement("div",{className:f.a.header},r.a.createElement("div",{className:f.a.navlinkContainer},r.a.createElement(E.b,{to:"/"},"To Do List"),r.a.createElement(E.b,{to:"/weather"},"Weather Channel")));case"/weather":return r.a.createElement("div",{className:f.a.header},r.a.createElement("div",{className:f.a.navlinkContainer},r.a.createElement(E.b,{to:"/"},"To Do List"),r.a.createElement(E.b,{to:"/news"},"News Channel")));case"/news/:articleId":return r.a.createElement("div",{className:f.a.header},r.a.createElement("div",{className:f.a.navlinkContainer},r.a.createElement(E.b,{to:"/"},"To Do List"),r.a.createElement(E.b,{to:"/news"},"News Channel"),r.a.createElement(E.b,{to:"/weather"},"Weather Channel")));default:return r.a.createElement("div",{className:f.a.header},r.a.createElement("div",{className:f.a.navlinkContainer},r.a.createElement(E.b,{to:"/news"},"News Feed"),r.a.createElement(E.b,{to:"/weather"},"Weather Channel")))}}),g=a(55),v=a.n(g),w=function(e){var t=e.value,a=e.onChange,n=e.addTask;return r.a.createElement("div",null,r.a.createElement("i",null),r.a.createElement("input",{placeholder:"Add a task",value:t,onChange:a,onKeyPress:n}))},C=a(23),y=a.n(C),b=a(32),k=a(39),O=k.create({baseURL:"https://newsapi.org/v2/",headers:{"X-Api-Key":"40b5268a68a74369a4eabc0b9745407e"}}),N=k.create({baseURL:"https://api.weatherbit.io/v2.0/"}),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"apple",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"publishedAt",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return O.get("everything?language=en&q=".concat(e,"&sortBy=").concat(t,"&pageSize=").concat(a,"&page=").concat(n))},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"706483";return N.get("forecast/hourly?key=90db46941f2d41eba9eef01407d850c5&lang=en&units=M&city_id=".concat(e,"&hours=24"))},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"706483";return N.get("current?key=90db46941f2d41eba9eef01407d850c5&lang=en&units=M&city_id=".concat(e))},j=function(e){return{type:"SET_TOPIC",topic:e}},D=function(e){return{type:"SET_SORT_BY",sortBy:e}},P=function(e){for(var t=e.articles.length,a=0;a<t;a++)e.articles[a].id=a,e.articles[a].publishedAt=new Date(e.articles[a].publishedAt).toLocaleString();return e},x=a(21),I=a.n(x),W=a(40),F=a(33),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1,taskText:a.props.text,id:null},a.timer=0,a.activateEditMode=function(e){a.setState({editMode:!0,id:e})},a.deactivateEditMode=function(){a.props.updateTaskTextAC(a.state.id,a.state.taskText),a.setState({editMode:!1})},a.onTaskTextChange=function(e){a.setState({taskText:e.currentTarget.value})},a.updateTaskText=function(e){"Enter"===e.key&&(a.props.updateTaskTextAC(a.state.id,a.state.taskText),a.setState({editMode:!1}))},a.mouseDownHandler=function(e){a.timer=setTimeout(a.activateEditMode,800,e)},a.mouseUpHandler=function(){clearTimeout(a.timer)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.text!==this.props.text&&this.setState({taskText:this.props.text})}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.isCompleted,s=t.completeTask,o=t.removeTask,i=this.state,c=i.editMode,l=i.taskText;return r.a.createElement("li",null,r.a.createElement("div",{className:I.a.todoItem},r.a.createElement(W.a,{icon:n?F.a:F.b,size:"lg",onClick:function(){return s(a)},className:I.a.iconDone}),!c&&r.a.createElement("span",{className:n?I.a.todoItemDone:I.a.todoItemDefault,onMouseDown:function(){return e.mouseDownHandler(a)},onMouseUp:this.mouseUpHandler},l),c&&r.a.createElement("input",{className:n?I.a.updateTaskTextDone:I.a.updateTaskTextDefault,onKeyPress:this.updateTaskText,onChange:this.onTaskTextChange,onBlur:this.deactivateEditMode,autoFocus:!0,value:l}),r.a.createElement(W.a,{icon:F.c,size:"lg",onClick:function(){return o(a)},className:I.a.iconDel})))}}]),t}(r.a.PureComponent),M=a(56),L=a.n(M),q=function(e){var t=e.tasks,a=e.completeTask,n=e.removeTask,s=e.updateTaskTextAC;return r.a.createElement("ul",{className:L.a.list},r.a.createElement("div",null,t.map(function(e){var t=e.id,o=e.text,i=e.isCompleted;return r.a.createElement(B,{key:t,id:t,text:o,isCompleted:i,completeTask:a,removeTask:n,updateTaskTextAC:s})})))},U=a(34),H=a.n(U),z=[{text:"All",id:"all"},{text:"Active",id:"active"},{text:"Completed",id:"completed"}],K=function(e){var t=e.amount,a=(e.currentFilter,e.changeFilter);return r.a.createElement("div",{className:H.a.buttonsBottom},r.a.createElement("span",{className:H.a.amount},"".concat(t," Left")),z.map(function(e){var t=e.id,n=e.text;return r.a.createElement("button",{className:H.a.btn,key:t,onClick:function(){return a(t)}},n)}))},G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={taskText:""},a.handleChange=function(e){var t=e.target.value;a.setState({taskText:t})},a.addTask=function(e){var t=e.key,n=a.state.taskText;n.length>3&&"Enter"===t&&((0,a.props.addTaskAC)((new Date).getTime(),n,!1),a.setState({taskText:""}))},a.getActiveTasksCounter=function(e){return e.filter(function(e){return!e.isCompleted}).length},a.getFilteredTasks=function(e,t){switch(t){case"active":return a.props.tasks.filter(function(e){return!e.isCompleted&&e});case"completed":return a.props.tasks.filter(function(e){return e.isCompleted&&e});default:return e}},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.getActiveTasksCounter(this.props.tasks),t=this.getFilteredTasks(this.props.tasks,this.props.filters);return r.a.createElement("div",{className:v.a.todoContainer},r.a.createElement(w,{onChange:this.handleChange,addTask:this.addTask,value:this.state.taskText}),r.a.createElement(q,{tasks:t,completeTask:this.props.completeTaskAC,removeTask:this.props.removeTaskAC,updateTaskTextAC:this.props.updateTaskTextAC}),r.a.createElement(K,{amount:e,activeFilter:this.props.filters,changeFilter:this.props.changeFilterAC}))}}]),t}(r.a.PureComponent),V=Object(h.b)(function(e){return{tasks:e.tasksReducer.tasks,filters:e.filtersReducer}},{addTaskAC:function(e,t,a){return{type:"ADD_TASK",id:e,text:t,isCompleted:a}},removeTaskAC:function(e){return{type:"REMOVE_TASK",id:e}},completeTaskAC:function(e){return{type:"COMPLETE_TASK",id:e}},changeFilterAC:function(e){return{type:"CHANGE_FILTER",currentFilter:e}},updateTaskTextAC:function(e,t){return{type:"UPDATE_TASK_TEXT",id:e,text:t}}})(G),Y=a(17),X=a.n(Y),J=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.author,n=e.title,s=e.description,o=e.url,i=e.image,c=e.date,l=e.content,u=e.setCurrentArticle;return r.a.createElement("div",{className:X.a.postSection},r.a.createElement(E.b,{to:"/news/"+t,onClick:function(){return u(t,a,n,s,o,i,c,l)}},r.a.createElement("div",{className:X.a.cardWrapper},r.a.createElement("div",{className:X.a.darkerImg},r.a.createElement("img",{src:i,alt:"articleImage",className:X.a.img})),r.a.createElement("div",{className:X.a.cardTitle},r.a.createElement("div",{className:X.a.postInfo},r.a.createElement("span",{className:X.a.author},a),r.a.createElement("span",{className:X.a.date},c)),r.a.createElement("p",{className:X.a.title},n)))),r.a.createElement("div",null,r.a.createElement("p",{className:X.a.description},s)))}}]),t}(r.a.PureComponent),Q=a(58),Z=a(28),$=a.n(Z),ee=function(e){for(var t=e.totalNewsCount,a=e.currentPage,s=e.pageSize,o=e.topic,i=e.sortBy,c=e.onPageChanged,l=e.portionSize,u=void 0===l?15:l,p=Math.ceil(t/s),d=[],m=1;m<=p;m++)d.push(m);var h=Math.ceil(p/u),_=Object(n.useState)(1),f=Object(Q.a)(_,2),E=f[0],T=f[1],g=(E-1)*u+1,v=E*u;return r.a.createElement("div",{className:$.a.paginator},E>1&&r.a.createElement("button",{onClick:function(){return T(E-1)},className:$.a.paginatorBtn},"PREV"),d.filter(function(e){return e>=g&&e<=v}).map(function(e){return r.a.createElement("span",{key:e,onClick:function(){return c(o,i,e)},className:a===e?$.a.pageNumber:$.a.pages},e)}),h>E&&r.a.createElement("button",{onClick:function(){return T(E+1)},className:$.a.paginatorBtn},"NEXT"))},te=function(e){var t=e.articles,a=e.totalNewsCount,n=e.currentPage,s=e.pageSize,o=e.topic,i=e.sortBy,c=e.onPageChanged,l=e.setCurrentArticle;return r.a.createElement("div",null,r.a.createElement(ee,{totalNewsCount:a,currentPage:n,pageSize:s,topic:o,sortBy:i,onPageChanged:c}),r.a.createElement("div",null,t.map(function(e){return r.a.createElement(J,{key:e.id,id:e.id,author:e.author,title:e.title,description:e.description,url:e.url,image:e.urlToImage,date:e.publishedAt,content:e.content,setCurrentArticle:l})})))},ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.topic,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.sortBy,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.props.currentPage;a.props.requestNewsTC(e,t,a.props.pageSize,n)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){Date.now()-this.props.lastNewsRequestTime>9e5&&this.props.requestNewsTC(this.props.topic,this.props.sortBy,this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return r.a.createElement(te,{articles:this.props.articles,totalNewsCount:this.props.totalNewsCount,currentPage:this.props.currentPage,pageSize:this.props.pageSize,topic:this.props.topic,sortBy:this.props.sortBy,onPageChanged:this.onPageChanged,setCurrentArticle:this.props.setCurrentArticle})}}]),t}(r.a.Component),ne=Object(m.d)(Object(h.b)(function(e){return{articles:e.newsReducer.articles,totalNewsCount:e.newsReducer.totalNewsCount,currentPage:e.newsReducer.currentPage,pageSize:e.newsReducer.pageSize,topic:e.newsReducer.topic,sortBy:e.newsReducer.sortBy,lastNewsRequestTime:e.newsReducer.lastNewsRequestTime}},{requestNewsTC:function(e,t,a,n){return function(){var r=Object(b.a)(y.a.mark(function r(s){var o,i;return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("requested news"),r.prev=1,r.next=4,s({type:"SET_CURRENT_PAGE",currentPage:n});case 4:return r.next=6,s(j(e));case 6:return r.next=8,s(D(t));case 8:return r.next=10,A(e,t,a,n);case 10:return o=r.sent,r.next=13,s({type:"newsReducer/SET_LAST_NEWS_REQUEST_TIME",lastNewsRequestTime:Date.now()});case 13:return r.next=15,P(o.data);case 15:return i=r.sent,r.next=18,s({type:"SET_ARTICLES",articles:i.articles});case 18:return r.next=20,s({type:"SET_TOTAL_NEWS_COUNT",totalNewsCount:i.totalResults});case 20:r.next=25;break;case 22:r.prev=22,r.t0=r.catch(1),console.log(r.t0);case 25:case"end":return r.stop()}},r,null,[[1,22]])}));return function(e){return r.apply(this,arguments)}}()},setCurrentArticle:function(e,t,a,n,r,s,o,i){return{type:"SET_CURRENT_ARTICLE",id:e,author:t,title:a,description:n,url:r,image:s,date:o,content:i}}}))(ae),re=a(16),se=a.n(re),oe=(a(90),a(96)),ie=a(24),ce=a.n(ie),le=function(e){var t=e.time,a=e.precipitation,n=e.weatherIcon,s=e.temperature,o="https://weatherbit.io/static/img/icons/".concat(n,".png");return r.a.createElement("div",{className:ce.a.forecastElementsContainer},r.a.createElement("div",{className:ce.a.forecastElements},r.a.createElement("div",{className:ce.a.forecastHour},new Date(t).getHours()),r.a.createElement("div",{className:ce.a.forecastIcon},r.a.createElement("div",{className:ce.a.forecastChanceOfRain},a>9&&"".concat(a,"%")),r.a.createElement("img",{src:o,alt:"forecastIcon"})),r.a.createElement("div",{className:ce.a.forecastTemperature},s,"\xb0")))},ue=function(e){var t=e.currentWeather,a=e.isChoosing,n=e.towns,s=e.toggleChoosing,o=e.closeChoosing,i=e.finishingToChoose,c=e.getAngle,l=e.twoDayForecast,u=(e.handleScroll,t.humidity),p=(t.partOfDay,t.pressure),d=t.lastObservationTime,m=t.clouds,h=t.city,_=t.windSpeed,f=t.windDirection,E=t.visibility,T=t.sunset,g=t.sunrise,v=(t.snowfall,t.weather),w=t.temperature,C=t.feelsLike,y="https://weatherbit.io/static/img/icons/".concat(v.icon,".png"),b=n.map(function(e){return r.a.createElement("li",{key:e.id,id:e.id,onClick:function(){i(e.id)},className:se.a.listItem},r.a.createElement("button",{className:se.a.listItemBtn},e.name))}),k=l.map(function(e){return r.a.createElement(le,{key:e.ts,time:e.timestamp_local,precipitation:e.pop,weatherIcon:e.weather.icon,temperature:e.temp})});return r.a.createElement("div",{className:se.a.container},r.a.createElement("div",{className:se.a.topContainer},r.a.createElement("h1",{onClick:function(){return s()}},h,r.a.createElement("i",{style:{transform:"rotate(".concat(c(a),"deg)")},className:se.a.cityArrow},"\u27a4")),r.a.createElement("div",{className:se.a.animateWrapper},r.a.createElement(oe.a,{in:a,timeout:350,classNames:"dropDown",unmountOnExit:!0},r.a.createElement("ul",{className:se.a.list},r.a.createElement("i",{className:se.a.listIcon,onClick:function(){return o()}},"\u2715"),b))),r.a.createElement("div",null,r.a.createElement("span",null,"Current t\xb0 ",w,"\xb0C")),r.a.createElement("div",null,r.a.createElement("span",null,"Feels Like ",C,"\xb0C")),r.a.createElement("div",{className:se.a.imgWrapper},r.a.createElement("span",null,v.description),r.a.createElement("img",{src:y,alt:"weatherIcon"})),r.a.createElement("div",{className:se.a.scrollParent},k),r.a.createElement("div",null,r.a.createElement("span",null,"Wind: ",_," m/s ",f)),r.a.createElement("div",null,r.a.createElement("span",null,"Visibility: ",E," km")),r.a.createElement("div",null,r.a.createElement("span",null,"Cloudiness: ",m,"%")),r.a.createElement("div",null,r.a.createElement("span",null,"Humidity: ",u,"%")),r.a.createElement("div",null,r.a.createElement("span",null,"Pressure: ",p," hPa")),r.a.createElement("div",null,r.a.createElement("span",null,"Sunrise: ",g)),r.a.createElement("div",null,r.a.createElement("span",null,"Sunset: ",T)),r.a.createElement("div",{className:se.a.station},r.a.createElement("span",null,"There was the last respond from the station at: ",d))))},pe=[{name:"Kharkiv",id:"706483"},{name:"Kiev",id:"703448"},{name:"Moscow",id:"524901"},{name:"Berlin",id:"2950159"},{name:"London",id:"2643743"}],de=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isChoosing:!1,pixels:0},a.toggleChoosing=function(){a.setState({isChoosing:!a.state.isChoosing})},a.closeChoosing=function(){a.setState({isChoosing:!1})},a.finishingToChoose=function(e){a.props.setChosenCity(e),a.closeChoosing()},a.getAngle=function(e){var t=90;return e?t=270:t},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){Date.now()-this.props.lastWeatherRequestTime>36e5&&(this.props.requestCurrentWeatherTC(this.props.chosenCity),this.props.requestTwoDayForecastTC(this.props.chosenCity))}},{key:"componentDidUpdate",value:function(e,t,a){e.chosenCity!==this.props.chosenCity&&(this.props.requestCurrentWeatherTC(this.props.chosenCity),this.props.requestTwoDayForecastTC(this.props.chosenCity))}},{key:"render",value:function(){if(0!==this.props.twoDayForecast.length)return console.log(this.props.twoDayForecast),r.a.createElement(ue,{currentWeather:this.props.currentWeather,isChoosing:this.state.isChoosing,towns:pe,toggleChoosing:this.toggleChoosing,closeChoosing:this.closeChoosing,finishingToChoose:this.finishingToChoose,getAngle:this.getAngle,twoDayForecast:this.props.twoDayForecast,handleScroll:this.handleScroll})}}]),t}(r.a.Component),me=Object(h.b)(function(e){return{currentWeather:e.weatherReducer.currentWeather,chosenCity:e.weatherReducer.chosenCity,lastWeatherRequestTime:e.weatherReducer.lastWeatherRequestTime,twoDayForecast:e.weatherReducer.twoDayForecast}},{setChosenCity:function(e){return{type:"SET_CHOSEN_CITY",chosenCity:e}},requestCurrentWeatherTC:function(e){return function(){var t=Object(b.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("requested new weather"),t.prev=1,t.next=4,R(e);case 4:return n=t.sent,t.next=7,a({type:"weatherReducer/SET_LAST_WEATHER_REQUEST_TIME",lastWeatherRequestTime:Date.now()});case 7:return t.next=9,a({type:"SET_CURRENT_WEATHER",rh:(r=n.data.data[0]).rh,pod:r.pod,pres:r.pres,ob_time:r.ob_time,clouds:r.clouds,city_name:r.city_name,wind_spd:r.wind_spd,wind_cdir:r.wind_cdir,vis:r.vis,sunset:r.sunset,snow:r.snow,sunrise:r.sunrise,weather:r.weather,temp:r.temp,app_temp:r.app_temp});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}var r},t,null,[[1,11]])}));return function(e){return t.apply(this,arguments)}}()},requestTwoDayForecastTC:function(e){return function(){var t=Object(b.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:return n=t.sent,t.next=5,a({type:"SET_TWO_DAY_FORECAST",twoDayForecast:n.data.data});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(de),he=a(22),_e=a.n(he),fe=function(e){e.id;var t=e.author,a=e.title,n=(e.description,e.url),s=e.image,o=e.date,i=e.content;return r.a.createElement("div",{className:_e.a.article},r.a.createElement("div",{className:_e.a.headline},r.a.createElement("div",{className:_e.a.authorAndDate},r.a.createElement("span",null,t),r.a.createElement("span",null,o)),r.a.createElement("div",{className:_e.a.title},r.a.createElement("h1",null,a))),r.a.createElement("div",{className:_e.a.articleImageWrapper},r.a.createElement("img",{src:s,alt:"articleImage",className:_e.a.articleImage}),r.a.createElement("span",null,r.a.createElement("a",{href:n},"Article source here"))),r.a.createElement("div",{className:_e.a.content},i))},Ee=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.currentArticle,t=e.id,a=e.author,n=e.title,s=e.description,o=e.url,i=e.image,c=e.date,l=e.content;return r.a.createElement(fe,{id:t,author:a,title:n,description:s,url:o,image:i,date:c,content:l})}}]),t}(r.a.PureComponent),Te=Object(m.d)(Object(h.b)(function(e){return{currentArticle:e.newsReducer.currentArticle}},{unsetCurrentArticle:function(){return{type:"UNSET_CURRENT_ARTICLE"}}}),d.f)(Ee),ge=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(T,{title:"To do list"}),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/news/:articleId",render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(d.a,{path:"/news",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(d.a,{path:"/weather",render:function(){return r.a.createElement(me,null)}}),r.a.createElement(d.a,{path:"/",render:function(){return r.a.createElement(V,null)}})))}}]),t}(r.a.PureComponent),ve=Object(m.d)(d.f,Object(h.b)())(ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=a(31),Ce=a(27);function ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ye(a,!0).forEach(function(t){Object(Ce.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ye(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ke={tasks:[{id:322,text:"\u042d\u0442\u043e \u0437\u0430\u0445\u0430\u0440\u0434\u043a\u043e\u0434\u0436\u0435\u043d\u0430\u044f \u0442\u0430\u0441\u043a\u0430, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0439 \u0441\u0432\u043e\u0438 \u043f\u043b\u0437",isCompleted:!1}]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":var a={id:t.id,text:t.text,isCompleted:t.isCompleted};return be({},e,{tasks:[].concat(Object(we.a)(e.tasks),[a])});case"COMPLETE_TASK":return be({},e,{tasks:e.tasks.map(function(e){return e.id===t.id?be({},e,{isCompleted:!e.isCompleted}):e})});case"REMOVE_TASK":return be({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.id})});case"UPDATE_TASK_TEXT":return be({},e,{tasks:e.tasks.map(function(e){return e.id===t.id?be({},e,{text:t.text}):e})});default:return e}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FILTER":return t.currentFilter;default:return e}};function Ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ae(a,!0).forEach(function(t){Object(Ce.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ae(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Re={articles:[],totalNewsCount:0,currentPage:1,pageSize:20,topic:"apple",sortBy:"publishedAt",lastNewsRequestTime:0,currentArticle:{}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARTICLES":return Se({},e,{articles:Object(we.a)(t.articles)});case"SET_CURRENT_PAGE":return Se({},e,{currentPage:t.currentPage});case"SET_TOTAL_NEWS_COUNT":return Se({},e,{totalNewsCount:t.totalNewsCount});case"SET_TOPIC":return Se({},e,{topic:t.topic});case"SET_SORT_BY":return Se({},e,{sortBy:t.sortBy});case"SET_CURRENT_ARTICLE":return Se({},e,{currentArticle:Se({},e.currentArticle,{id:t.id,author:t.author,title:t.title,description:t.description,url:t.url,image:t.image,date:t.date,content:t.content})});case"UNSET_CURRENT_ARTICLE":return Se({},e,{currentArticle:{}});case"newsReducer/SET_LAST_NEWS_REQUEST_TIME":return Se({},e,{lastNewsRequestTime:t.lastNewsRequestTime});default:return e}},De=a(42),Pe=a(57);function xe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?xe(a,!0).forEach(function(t){Object(Ce.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):xe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var We={currentWeather:{humidity:null,partOfDay:null,pressure:null,lastObservationTime:null,clouds:null,city:null,windSpeed:null,windDirection:null,visibility:null,sunset:null,sunrise:null,snowfall:null,weather:{icon:null,code:null,description:null},temperature:null,feelsLike:null},chosenCity:null,lastWeatherRequestTime:0,twoDayForecast:[]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_WEATHER":return Ie({},e,{currentWeather:Ie({},e.currentWeather,{humidity:t.rh,partOfDay:t.pod,pressure:t.pres,lastObservationTime:t.ob_time,clouds:t.clouds,city:t.city_name,windSpeed:t.wind_spd,windDirection:t.wind_cdir,visibility:t.vis,sunset:t.sunset,sunrise:t.sunrise,snowfall:t.snow,weather:t.weather,temperature:t.temp,feelsLike:t.app_temp})});case"SET_CHOSEN_CITY":return Ie({},e,{chosenCity:t.chosenCity});case"SET_ARRAY_OF_CITIES":return Ie({},e,{towns:t.towns});case"weatherReducer/SET_LAST_WEATHER_REQUEST_TIME":return Ie({},e,{lastWeatherRequestTime:t.lastWeatherRequestTime});case"SET_TWO_DAY_FORECAST":return Ie({},e,{twoDayForecast:t.twoDayForecast});default:return e}},Be=Object(m.c)({tasksReducer:Oe,filtersReducer:Ne,newsReducer:je,weatherReducer:Fe}),Me=Object(m.a)(Object(De.save)({namespace:"todo-app"}),Pe.a)(m.e)(Be,Object(De.load)({namespace:"todo-app"}));o.a.render(r.a.createElement(E.a,{basename:"/to-do"},r.a.createElement(h.a,{store:Me},r.a.createElement(ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[60,1,2]]]);
//# sourceMappingURL=main.79e2faa5.chunk.js.map