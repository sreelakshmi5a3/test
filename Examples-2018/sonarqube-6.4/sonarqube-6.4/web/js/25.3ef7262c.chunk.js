webpackJsonp([25],{58:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(){return s}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var a=n(1),o=i(a),s=o.default.createElement("i",{className:"spinner spinner-margin"})},260:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.domains={Reliability:{main:["bugs","new_bugs","reliability_rating"],order:["bugs","new_bugs","reliability_rating","reliability_remediation_effort","new_reliability_remediation_effort"]},Security:{main:["vulnerabilities","new_vulnerabilities","security_rating"],order:["vulnerabilities","new_vulnerabilities","security_rating","security_remediation_effort","new_security_remediation_effort"]},Maintainability:{main:["code_smells","new_code_smells","sqale_rating"],order:["code_smells","new_code_smells","sqale_rating","sqale_index","new_technical_debt","sqale_debt_ratio","new_sqale_debt_ratio","effort_to_reach_maintainability_rating_a"]},Coverage:{main:["coverage","new_coverage","tests"],order:["coverage","new_coverage","line_coverage","new_line_coverage","branch_coverage","new_branch_coverage","uncovered_lines","new_uncovered_lines","uncovered_conditions","new_uncovered_conditions","new_lines_to_cover","lines_to_cover","tests","test_success","test_errors","test_failures","skipped_tests","test_success_density","test_execution_time"]},Duplications:{main:["duplicated_lines_density","new_duplicated_lines_density"],order:["duplicated_lines_density","new_duplicated_lines_density","duplicated_blocks","new_duplicated_blocks","duplicated_lines","new_duplicated_lines","duplicated_files"]},Size:{main:["ncloc"],order:["ncloc","lines","new_lines","statements","functions","classes","files","directories"]},Complexity:{main:["complexity"],order:["complexity","function_complexity","file_complexity","class_complexity"]},Releasability:{main:["alert_status","releasability_rating"],order:["alert_status"]},Issues:{main:["violations","new_violations"],order:["violations","new_violations","blocker_violations","new_blocker_violations","critical_violations","new_critical_violations","major_violations","new_major_violations","minor_violations","new_minor_violations","info_violations","new_info_violations","open_issues","reopened_issues","confirmed_issues","false_positive_issues"]}}},269:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){var n=(0,c.partition)(e,function(e){return t.includes(e.metric.key)}),i=s(n,2),a=i[0],o=i[1];return[].concat(r((0,c.sortBy)(a,function(e){return t.indexOf(e.metric.key)})),r((0,c.sortBy)(o,function(e){return(0,_.getLocalizedMetricName)(e.metric)})))}function o(e){var t=["blocker_violations","new_blocker_violations","critical_violations","new_critical_violations","major_violations","new_major_violations","minor_violations","new_minor_violations","info_violations","new_info_violations"];return e.filter(function(e){return!t.includes(e.metric.key)})}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(l){r=!0,a=l}finally{try{!i&&s.return&&s.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=n(1),u=i(l),c=n(4),d=n(271),m=i(d),f=n(260),_=n(2),p=function(e){var t=e.domain,n=e.component,i=t.measures,r=t.name,l=f.domains[r]||{},d=o(i),_=l.main||[],p=(0,c.partition)(d,function(e){return _.includes(e.metric.key)}),y=s(p,2),v=y[0],h=y[1],b=l.order||[],M=a(v,b),g=a(h,b);return u.default.createElement("div",{className:"home-measures-list clearfix"},M.length>0&&u.default.createElement(m.default,{className:"main-domain-measures",measures:M,component:n,spaces:[]}),g.length>0&&u.default.createElement(m.default,{measures:g,component:n,spaces:[]}))};t.default=p},270:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=i(r),o=n(97),s=i(o),l=n(59),u=function(e){var t=e.measure,n=t.metric;return(0,l.isDiffMetric)(n)?a.default.createElement("div",{id:"measure-"+t.metric.key+"-leak",className:"domain-measures-value domain-measures-leak"},a.default.createElement(s.default,{measure:t})):a.default.createElement("div",{id:"measure-"+t.metric.key+"-value",className:"domain-measures-value"},a.default.createElement(s.default,{measure:t}))};t.default=u},271:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=i(r),o=n(9),s=n(270),l=i(s),u=n(2),c=n(68),d=i(c),m=function(e){var t=e.measures,n=e.component,i=e.className,r=void 0===i?"domain-measures":i;return a.default.createElement("ul",{className:r},t.map(function(e){return a.default.createElement("li",{key:e.metric.key,id:"measure-"+e.metric.key},a.default.createElement(o.Link,{to:{pathname:"/component_measures/metric/"+e.metric.key,query:{id:n.key}}},a.default.createElement("div",{className:"domain-measures-name"},a.default.createElement(d.default,{query:e.metric.key,className:"little-spacer-right"}),a.default.createElement("span",{id:"measure-"+e.metric.key+"-name"},(0,u.getLocalizedMetricName)(e.metric))),a.default.createElement(l.default,{measure:e})))}))};t.default=m},849:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return Number(e.measures[t])||0}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(1),c=i(u),d=n(58),m=i(d),f=n(299),_=i(f),p=n(426),y=i(p),v=n(30),h=n(16),b=n(116),M=i(b),g=n(20),k=n(2),w=500,E=500,x=c.default.createElement(m.default,null),N=function(e){function t(){var e,n,i,o;r(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=i=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.state={fetching:0,files:[]},o=n,a(i,o)}return o(t,e),l(t,[{key:"componentWillMount",value:function(){this.updateMetrics(this.props)}},{key:"componentDidMount",value:function(){this.mounted=!0,this.fetchFiles()}},{key:"componentWillUpdate",value:function(e){this.updateMetrics(e)}},{key:"componentDidUpdate",value:function(e){e.domainName!==this.props.domainName&&this.fetchFiles()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateMetrics",value:function(e){var t=e.metrics,n=e.domainName,i=y.default[n];this.xMetric=t.find(function(e){return e.key===i.x}),this.yMetric=t.find(function(e){return e.key===i.y}),this.sizeMetric=t.find(function(e){return e.key===i.size})}},{key:"fetchFiles",value:function(){var e=this,t=this.props.component,n=[this.xMetric.key,this.yMetric.key,this.sizeMetric.key],i={s:"metric",metricSort:this.sizeMetric.key,asc:!1,ps:E};this.mounted&&this.setState({fetching:this.state.fetching+1}),(0,v.getComponentLeaves)(t.key,n,i).then(function(t){var n=t.components.map(function(e){var t={};return e.measures.forEach(function(e){t[e.metric]=e.value}),Object.assign({},e,{measures:t})});e.mounted&&e.setState({files:n,fetching:e.state.fetching-1,total:n.length})})}},{key:"getTooltip",value:function(e){var t=(0,h.formatMeasure)(s(e,this.xMetric.key),this.xMetric.type),n=(0,h.formatMeasure)(s(e,this.yMetric.key),this.yMetric.type),i=(0,h.formatMeasure)(s(e,this.sizeMetric.key),this.sizeMetric.type),r=[e.name,this.xMetric.name+": "+t,this.yMetric.name+": "+n,this.sizeMetric.name+": "+i].join("<br>");return'<div class="text-left">'+r+"</div>"}},{key:"handleBubbleClick",value:function(e){["FIL","UTS"].includes(e.qualifier)?M.default.openComponent({key:e.key}):window.location=(0,g.getComponentUrl)(e.refKey||e.key)}},{key:"renderBubbleChart",value:function(){var e=this,t=this.state.files.map(function(t){return{x:s(t,e.xMetric.key),y:s(t,e.yMetric.key),size:s(t,e.sizeMetric.key),link:t,tooltip:e.getTooltip(t)}}),n=function(t){return(0,h.formatMeasure)(t,e.xMetric.type)},i=function(t){return(0,h.formatMeasure)(t,e.yMetric.type)};return c.default.createElement(_.default,{items:t,height:w,padding:[25,60,50,60],formatXTick:n,formatYTick:i,onBubbleClick:this.handleBubbleClick.bind(this)})}},{key:"render",value:function(){var e=this.state.fetching;return e?c.default.createElement("div",{className:"measure-details-bubble-chart"},c.default.createElement("div",{className:"note text-center",style:{lineHeight:w+"px"}},x)):c.default.createElement("div",{className:"measure-details-bubble-chart"},c.default.createElement("div",null,this.renderBubbleChart()),c.default.createElement("div",{className:"measure-details-bubble-chart-axis x"},(0,k.getLocalizedMetricName)(this.xMetric)),c.default.createElement("div",{className:"measure-details-bubble-chart-axis y"},(0,k.getLocalizedMetricName)(this.yMetric)),c.default.createElement("div",{className:"measure-details-bubble-chart-axis size"},(0,k.translateWithParameters)("component_measures.legend.size_x",(0,k.getLocalizedMetricName)(this.sizeMetric))))}}]),t}(c.default.PureComponent);t.default=N},850:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),a=n(849),o=i(a),s=n(8),l=function(e){return{component:(0,s.getMeasuresAppComponent)(e),metrics:(0,s.getMeasuresAppAllMetrics)(e)}},u=function(){return{}};t.default=(0,r.connect)(l,u)(o.default)},868:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.component,n=e.domains,i=e.params.domainName,r=n.find(function(e){return e.name===i});return o.default.createElement("section",{id:"component-measures-domain"},o.default.createElement(l.default,{domain:r,component:t}),(0,d.hasBubbleChart)(i)&&o.default.createElement(c.default,{domainName:i}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var a=n(1),o=i(a),s=n(269),l=i(s),u=n(850),c=i(u),d=n(59)},869:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),a=n(868),o=i(a),s=n(8),l=function(e){return{component:(0,s.getMeasuresAppComponent)(e),domains:(0,s.getMeasuresAppHomeDomains)(e),periods:(0,s.getMeasuresAppHomePeriods)(e)}};t.default=(0,r.connect)(l)(o.default)}});