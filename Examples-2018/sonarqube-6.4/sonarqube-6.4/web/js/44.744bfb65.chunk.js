webpackJsonp([44],{1103:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),c=r(1),a=o(c),l=r(7),d=r(9),f=r(457),h=o(f),p=r(8),y=r(134),b=r(30),v=function(e){function t(e){n(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={},r}return s(t,e),u(t,[{key:"componentDidMount",value:function(){this.defineIfShouldBeRedirected()}},{key:"componentDidUpdate",value:function(e){e.location!==this.props.location?this.defineIfShouldBeRedirected():this.state.shouldBeRedirected===!0&&this.props.router.replace("/projects/favorite")}},{key:"defineIfShouldBeRedirected",value:function(){var e=this;Object.keys(this.props.location.query).length>0?this.setState({shouldBeRedirected:!1}):this.props.currentUser.isLoggedIn?(0,y.isFavoriteSet)()?this.setState({shouldBeRedirected:!0}):(0,y.isAllSet)()?this.setState({shouldBeRedirected:!1}):(this.setState({shouldBeRedirected:void 0}),(0,b.searchProjects)({filter:"isFavorite",ps:1}).then(function(t){e.setState({shouldBeRedirected:t.paging.total>0})})):this.setState({shouldBeRedirected:!1})}},{key:"render",value:function(){return null==this.state.shouldBeRedirected||this.state.shouldBeRedirected===!0?null:a.default.createElement(h.default,{isFavorite:!1,location:this.props.location,user:this.props.currentUser})}}]),t}(a.default.PureComponent),R=function(e){return{currentUser:(0,p.getCurrentUser)(e)}};t.default=(0,l.connect)(R)((0,d.withRouter)(v))}});