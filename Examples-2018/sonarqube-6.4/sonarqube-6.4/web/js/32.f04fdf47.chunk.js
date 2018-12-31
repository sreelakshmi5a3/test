webpackJsonp([32],{58:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){return s}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var i=r(1),o=n(i),s=o.default.createElement("i",{className:"spinner spinner-margin"})},863:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),p=r(80),d=r(58),f=n(d),m=r(59),h=r(1332),y=r(30),b=r(16),g=r(2),v=r(20),k=r(116),_=n(k),T=500,C=c.default.createElement(f.default,null),E=function(e){function t(){var e,r,n,a;i(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={fetching:!0,components:[],breadcrumbs:[]},a=r,o(n,a)}return s(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.props.component;this.mounted=!0,this.fetchComponents(e.key)}},{key:"componentDidUpdate",value:function(e){e.metric!==this.props.metric&&this.fetchComponents(this.props.component.key)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"fetchComponents",value:function(e){var t=this,r=this.props.metric,n=["ncloc",r.key],a={s:"metric",metricSort:"ncloc",asc:!1};return(0,y.getChildren)(e,n,a).then(function(e){var r=e.components.map(function(e){var t={},r=e.refKey||e.key;return e.measures.forEach(function(e){var r=0===e.metric.indexOf("new_");t[e.metric]=r?(0,m.getLeakValue)(e):e.value}),Object.assign({},e,{measures:t,key:r})});t.setState({components:r,fetching:!1})})}},{key:"getTooltip",value:function(e){var t=this.props.metric,r=[e.name,(0,g.translate)("metric.ncloc.name")+": "+(0,b.formatMeasure)(e.measures.ncloc,"INT")],n=e.measures[t.key],a=null!=n?(0,b.formatMeasure)(n,t.type):"—";return r.push((0,g.getLocalizedMetricName)(t)+": "+a),r=r.join("<br>"),'<div class="text-left">'+r+"</div>"}},{key:"getPercentColorScale",value:function(e){var t=(0,p.scaleLinear)().domain([0,25,50,75,100]);return t.range(1===e.direction?["#d4333f","#ed7d20","#eabe06","#b0d513","#00aa00"]:["#00aa00","#b0d513","#eabe06","#ed7d20","#d4333f"]),t}},{key:"getRatingColorScale",value:function(){return(0,p.scaleLinear)().domain([1,2,3,4,5]).range(["#00aa00","#b0d513","#eabe06","#ed7d20","#d4333f"])}},{key:"getLevelColorScale",value:function(){return(0,p.scaleOrdinal)().domain(["ERROR","WARN","OK","NONE"]).range(["#d4333f","#ed7d20","#00aa00","#b4b4b4"])}},{key:"getScale",value:function(){var e=this.props.metric;return"LEVEL"===e.type?this.getLevelColorScale():"RATING"===e.type?this.getRatingColorScale():this.getPercentColorScale(e)}},{key:"handleRectangleClick",value:function(e){var t=this,r="FIL"===e.qualifier||"UTS"===e.qualifier;return r?void _.default.openComponent({key:e.key}):void this.fetchComponents(e.key).then(function(){var r=[].concat(a(t.state.breadcrumbs)),n=t.state.breadcrumbs.findIndex(function(t){return t.key===e.key});n!==-1&&(r=r.slice(0,n)),r=[].concat(a(r),[{key:e.key,name:e.name,qualifier:e.qualifier}]),t.setState({breadcrumbs:r})})}},{key:"handleReset",value:function(){var e=this,t=this.props.component;this.fetchComponents(t.key).then(function(){e.setState({breadcrumbs:[]})})}},{key:"renderTreemap",value:function(){var e=this,t=this.props.metric,r=this.getScale(),n=this.state.components.filter(function(e){return e.measures.ncloc}).map(function(n){var a=n.measures[t.key];return{id:n.id,key:n.key,name:n.name,qualifier:n.qualifier,size:n.measures.ncloc,color:null!=a?r(a):"#777",tooltip:e.getTooltip(n),label:n.name,link:(0,v.getComponentUrl)(n.key)}});return c.default.createElement(h.Treemap,{items:n,breadcrumbs:this.state.breadcrumbs,height:T,canBeClicked:function(){return!0},onRectangleClick:this.handleRectangleClick.bind(this),onReset:this.handleReset.bind(this)})}},{key:"render",value:function(){var e=this.props.metric,t=this.state.fetching;return t?c.default.createElement("div",{className:"measure-details-treemap"},c.default.createElement("div",{className:"note text-center",style:{lineHeight:T+"px"}},C)):c.default.createElement("div",{className:"measure-details-treemap"},c.default.createElement("ul",{className:"list-inline note measure-details-treemap-legend"},c.default.createElement("li",null,(0,g.translateWithParameters)("component_measures.legend.color_x",(0,g.getLocalizedMetricName)(e))),c.default.createElement("li",null,(0,g.translateWithParameters)("component_measures.legend.size_x",(0,g.translate)("metric.ncloc.name")))),this.renderTreemap())}}]),t}(c.default.PureComponent);t.default=E},864:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(7),i=r(863),o=n(i),s=r(8),l=function(e){return{component:(0,s.getMeasuresAppComponent)(e),metric:(0,s.getMeasuresAppDetailsMetric)(e)}},u=function(){return{}};t.default=(0,a.connect)(l,u)(o.default)},1331:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TreemapBreadcrumbs=void 0;var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),u=n(l),c=r(37),p=n(c),d=u.default.createElement("i",{className:"icon-chevron-right"}),f=t.TreemapBreadcrumbs=function(e){function t(){var e,r,n,o;a(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.handleItemClick=function(e,t){t.preventDefault(),n.props.onRectangleClick(e)},n.handleReset=function(e){e.preventDefault(),n.props.onReset()},n.renderHome=function(){return u.default.createElement("span",{className:"treemap-breadcrumbs-item"},u.default.createElement("a",{onClick:n.handleReset,className:"icon-home",href:"#"}))},n.renderBreadcrumbsItems=function(e){return u.default.createElement("span",{key:e.key,className:"treemap-breadcrumbs-item",title:e.name},d,u.default.createElement(p.default,{qualifier:e.qualifier}),u.default.createElement("a",{onClick:n.handleItemClick.bind(n,e),href:"#"},e.name))},o=r,i(n,o)}return o(t,e),s(t,[{key:"render",value:function(){var e=this.props.breadcrumbs.map(this.renderBreadcrumbsItems);return u.default.createElement("div",{className:"treemap-breadcrumbs"},this.props.breadcrumbs.length?this.renderHome():null,e)}}]),t}(u.default.PureComponent);f.propTypes={breadcrumbs:u.default.PropTypes.arrayOf(u.default.PropTypes.shape({key:u.default.PropTypes.string.isRequired,name:u.default.PropTypes.string.isRequired,qualifier:u.default.PropTypes.string.isRequired}).isRequired).isRequired}},1332:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=e.slice(0).sort(),r=t[0],n=r.length,a=t[t.length-1],i=0;i<n&&r.charAt(i)===a.charAt(i);)i++;var o=r.substr(0,i),s=o.split(/[\s\\\/]/),l=s[s.length-1];return o.substr(0,o.length-l.length)}Object.defineProperty(t,"__esModule",{value:!0}),t.Treemap=t.TreemapRect=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(1),s=n(o),l=r(80),u=r(529),c=r(1331),p=r(101),d=r(31),f=r(2),m=(0,l.scaleLinear)().domain([3,15]).range([11,18]).clamp(!0),h=s.default.createElement("span",{className:"icon-link"}),y=t.TreemapRect=s.default.createClass({displayName:"TreemapRect",propTypes:{x:s.default.PropTypes.number.isRequired,y:s.default.PropTypes.number.isRequired,width:s.default.PropTypes.number.isRequired,height:s.default.PropTypes.number.isRequired,fill:s.default.PropTypes.string.isRequired,label:s.default.PropTypes.string.isRequired,onClick:s.default.PropTypes.func},renderLink:function(){return this.props.link?this.props.width<24||this.props.height<24?null:s.default.createElement("a",{onClick:function(e){return e.stopPropagation()},className:"treemap-link",href:this.props.link,style:{fontSize:12}},h):null},render:function(){var e={};this.props.tooltip&&(e={"data-toggle":"tooltip","data-title":this.props.tooltip});var t={left:this.props.x,top:this.props.y,width:this.props.width,height:this.props.height,backgroundColor:this.props.fill,fontSize:m(this.props.width/this.props.label.length),lineHeight:this.props.height+"px",cursor:"function"==typeof this.props.onClick?"pointer":"default"},r=this.props.width>=40&&this.props.height>=40;return s.default.createElement("div",i({className:"treemap-cell"},e,{style:t,onClick:this.props.onClick}),s.default.createElement("div",{className:"treemap-inner",dangerouslySetInnerHTML:{__html:this.props.label},style:{maxWidth:this.props.width,visibility:r?"visible":"hidden"}}),this.renderLink())}}),b=s.default.createElement("div",null," ");t.Treemap=s.default.createClass({displayName:"Treemap",propTypes:{items:s.default.PropTypes.arrayOf(s.default.PropTypes.object).isRequired,height:s.default.PropTypes.number,onRectangleClick:s.default.PropTypes.func},mixins:[p.ResizeMixin,d.TooltipsMixin],getInitialState:function(){return{width:this.props.width,height:this.props.height}},renderWhenNoData:function(){return s.default.createElement("div",{className:"sonar-d3"},s.default.createElement("div",{className:"treemap-container",style:{width:this.state.width,height:this.state.height}},(0,f.translate)("no_data")),s.default.createElement(c.TreemapBreadcrumbs,this.props))},render:function(){var e=this;if(!this.state.width||!this.state.height)return b;if(!this.props.items.length)return this.renderWhenNoData();var t=(0,u.hierarchy)({children:this.props.items}).sum(function(e){return e.size}).sort(function(e,t){return t.value-e.value}),r=(0,u.treemap)().round(!0).size([this.state.width,this.state.height]),n=r(t).leaves(),i=a(this.props.items.map(function(e){return e.label})),o=i.length,l=n.map(function(t){var r=t.data.label,n=o?i+"<br>"+t.data.label.substr(o):t.data.label,a=e.props.canBeClicked(t.data)?function(){return e.props.onRectangleClick(t.data)}:null;return s.default.createElement(y,{key:r,x:t.x0,y:t.y0,width:t.x1-t.x0,height:t.y1-t.y0,fill:t.data.color,label:n,prefix:i,tooltip:t.data.tooltip,link:t.data.link,onClick:a})});return s.default.createElement("div",{className:"sonar-d3"},s.default.createElement("div",{className:"treemap-container",style:{width:this.state.width,height:this.state.height}},l),s.default.createElement(c.TreemapBreadcrumbs,this.props))}})}});