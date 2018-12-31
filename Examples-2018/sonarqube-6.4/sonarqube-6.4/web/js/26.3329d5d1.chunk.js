webpackJsonp([26],{236:function(e,t,a){var n=a(5);e.exports=(n.default||n).template({1:function(e,t,n,r){var l=this.escapeExpression;return l(a(3).call(e,"save",{name:"t",hash:{},data:r}))},3:function(e,t,n,r){var l=this.escapeExpression;return l(a(3).call(e,"copy",{name:"t",hash:{},data:r}))},5:function(e,t,n,r){var l=this.escapeExpression;return l(a(3).call(e,"create",{name:"t",hash:{},data:r}))},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var l,i=this.escapeExpression,u=this.lambda,o='<form id="quality-gate-form">\n  <div class="modal-head">\n    <h2>'+i(a(3).call(e,"quality_gates",null!=e?e.method:e,{name:"t",hash:{},data:r}))+'</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <div class="modal-field">\n      <label for="quality-gate-form-name">'+i(a(3).call(e,"name",{name:"t",hash:{},data:r}))+' <em class="mandatory">*</em></label>\n      <input id="quality-gate-form-name" type="text" size="50" maxlength="100" value="'+i(u(null!=e?e.name:e,e))+'" required>\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="quality-gate-form-submit">\n      ';return l=a(13).call(e,null!=e?e.method:e,"rename",{name:"eq",hash:{},fn:this.program(1,r),inverse:this.noop,data:r}),null!=l&&(o+=l),o+="\n      ",l=a(13).call(e,null!=e?e.method:e,"copy",{name:"eq",hash:{},fn:this.program(3,r),inverse:this.noop,data:r}),null!=l&&(o+=l),o+="\n      ",l=a(13).call(e,null!=e?e.method:e,"create",{name:"eq",hash:{},fn:this.program(5,r),inverse:this.noop,data:r}),null!=l&&(o+=l),o+'\n    </button>\n    <a id="quality-gate-form-cancel" href="#" class="js-modal-close">'+i(a(3).call(e,"cancel",{name:"t",hash:{},data:r}))+"</a>\n  </div>\n</form>\n"},useData:!0})},1155:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.qualityGates;return i.default.createElement("div",{className:"list-group"},t.map(function(e){return i.default.createElement(u.Link,{key:e.id,to:"/quality_gates/show/"+e.id,activeClassName:"active",className:"list-group-item","data-id":e.id},i.default.createElement("table",null,i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("td",{className:"text-top"},e.name),i.default.createElement("td",{className:"text-top thin nowrap spacer-left"},e.isDefault&&i.default.createElement("span",{className:"badge pull-right"},(0,o.translate)("default")))))))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var l=a(1),i=n(l),u=a(9),o=a(2)},1156:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(e){e.preventDefault(),new o.default({onAdd:n}).render()}var a=e.canEdit,n=e.onAdd;return i.default.createElement("div",null,i.default.createElement("h1",{className:"page-title"},(0,s.translate)("quality_gates.page")),a&&i.default.createElement("div",{className:"page-actions"},i.default.createElement("div",{className:"button-group"},i.default.createElement("button",{id:"quality-gate-add",onClick:t},(0,s.translate)("create")))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var l=a(1),i=n(l),u=a(1166),o=n(u),s=a(2)},1158:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(o){r=!0,l=o}finally{try{!n&&u.return&&u.return()}finally{if(r)throw l}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(1),c=n(s),d=a(15),f=n(d),p=a(1156),m=n(p),h=a(1155),y=n(h),v=a(82),g=a(2);a(1911);var b=function(e){function t(){var e,a,n,i;r(this,t);for(var u=arguments.length,o=Array(u),s=0;s<u;s++)o[s]=arguments[s];return a=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.state={},i=a,l(n,i)}return i(t,e),o(t,[{key:"componentDidMount",value:function(){this.fetchQualityGates()}},{key:"fetchQualityGates",value:function(){var e=this;Promise.all([(0,v.fetchQualityGatesAppDetails)(),(0,v.fetchQualityGates)()]).then(function(t){var a=u(t,2),n=a[0],r=a[1],l=e.props.updateStore;l(Object.assign({},n,{qualityGates:r}))})}},{key:"handleAdd",value:function(e){var t=this.props.addQualityGate,a=this.context.router;t(e),a.push("/quality_gates/show/"+e.id)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.qualityGates,n=e.edit,r=(0,g.translate)("quality_gates.page");return c.default.createElement("div",{className:"search-navigator sticky search-navigator-extended-view"},c.default.createElement(f.default,{defaultTitle:r,titleTemplate:"%s - "+r}),c.default.createElement("div",{className:"search-navigator-side search-navigator-side-light",style:{top:30}},c.default.createElement("div",{className:"search-navigator-filters"},c.default.createElement(m.default,{canEdit:n,onAdd:this.handleAdd.bind(this)})),c.default.createElement("div",{className:"quality-gates-results panel"},a&&c.default.createElement(y.default,{qualityGates:a}))),!!a&&t)}}]),t}(s.Component);t.default=b,b.contextTypes={router:c.default.PropTypes.object.isRequired}},1161:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),l=a(288),i=a(1158),u=n(i),o=a(8),s=function(e){return(0,o.getQualityGatesAppState)(e)},c=function(e){return{updateStore:function(t){return e((0,l.setState)(t))},addQualityGate:function(t){return e((0,l.addQualityGate)(t))},deleteQualityGate:function(t){return e((0,l.deleteQualityGate)(t))}}};t.default=(0,r.connect)(s,c)(u.default)},1166:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(17),l=n(r),i=a(236),u=n(i),o=a(82),s=a(28);t.default=l.default.extend({template:u.default,onFormSubmit:function(){l.default.prototype.onFormSubmit.apply(this,arguments),this.disableForm(),this.sendRequest()},sendRequest:function(){var e=this,t=this.$("#quality-gate-form-name").val();(0,o.createQualityGate)(t).then(function(t){e.destroy(),e.options.onAdd(t)},function(t){e.enableForm(),(0,s.parseError)(t).then(function(t){return e.showErrors([{msg:t}])})})},serializeData:function(){return{method:"create"}}})},1557:function(e,t,a){t=e.exports=a(22)(),t.push([e.id,".quality-gate-section{max-width:1440px}.quality-gate-section+.quality-gate-section{margin-top:10px;padding-top:20px}",""])},1911:[1947,1557]});