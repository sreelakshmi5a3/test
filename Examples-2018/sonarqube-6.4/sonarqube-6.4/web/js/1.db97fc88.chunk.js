webpackJsonp([1],{111:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),l=r(f),s=n(7),p=n(9),y=n(8),b=function(e){var t=function(t){function n(){return u(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),c(n,[{key:"render",value:function(){var t=this.props,n=t.customOrganizations,r=t.router,u=o(t,["customOrganizations","router"]);return n?(r.replace("/not_found"),null):l.default.createElement(e,u)}}]),n}(l.default.PureComponent);t.displayName="forSingleOrganization("+e.displayName+")}";var n=function(e){return{customOrganizations:(0,y.areThereCustomOrganizations)(e)}};return(0,s.connect)(n)((0,p.withRouter)(t))};t.default=b}});