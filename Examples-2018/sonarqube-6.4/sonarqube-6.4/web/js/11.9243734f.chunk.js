webpackJsonp([11],{206:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),o=n(19),r=a(o);t.default=r.default.Model.extend({idAttribute:"id",urlRoot:function(){return window.baseUrl+"/api/metrics"},sync:function(e,t,n){var a=n||{};return"create"===e&&(0,s.defaults)(a,{url:this.urlRoot()+"/create",type:"POST",data:(0,s.pick)(t.toJSON(),"key","name","description","domain","type")}),"update"===e&&(0,s.defaults)(a,{url:this.urlRoot()+"/update",type:"POST",data:(0,s.pick)(t.toJSON(),"id","key","name","description","domain","type")}),"delete"===e&&(0,s.defaults)(a,{url:this.urlRoot()+"/delete",type:"POST",data:{ids:this.id}}),r.default.ajax(a)}})},272:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(19),o=a(s),r=n(206),i=a(r);t.default=o.default.Collection.extend({model:i.default,url:function(){return window.baseUrl+"/api/metrics/search"},parse:function(e){return this.total=e.total,this.p=e.p,this.ps=e.ps,e.metrics},fetch:function(e){var t=Object.assign({data:{}},e);return this.q=t.data.q,t.data.isCustom=!0,o.default.Collection.prototype.fetch.call(this,t)},fetchMore:function(){var e=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:e,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps}})},431:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),o=n(19),r=a(o);t.default=r.default.Model.extend({idAttribute:"id",urlRoot:function(){return window.baseUrl+"/api/custom_measures"},sync:function(e,t,n){var a=n||{};return"create"===e&&(0,s.defaults)(a,{url:this.urlRoot()+"/create",type:"POST",data:(0,s.pick)(t.toJSON(),"metricId","value","description","projectId")}),"update"===e&&(0,s.defaults)(a,{url:this.urlRoot()+"/update",type:"POST",data:(0,s.pick)(t.toJSON(),"id","value","description")}),"delete"===e&&(0,s.defaults)(a,{url:this.urlRoot()+"/delete",type:"POST",data:{id:this.id}}),r.default.ajax(a)}})},432:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(17),o=a(s),r=n(272),i=a(r),l=n(1642),u=a(l);t.default=o.default.extend({template:u.default,initialize:function(){this.metrics=new i.default,this.listenTo(this.metrics,"reset",this.render),this.metrics.fetch({reset:!0})},onRender:function(){o.default.prototype.onRender.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"}),this.$("#create-custom-measure-metric").select2({width:"250px",minimumResultsForSearch:20})},onDestroy:function(){o.default.prototype.onDestroy.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip("destroy")},onFormSubmit:function(){o.default.prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},getAvailableMetrics:function(){var e=this.collection.getTakenMetrics();return this.metrics.toJSON().filter(function(t){return e.indexOf(t.id)===-1})},serializeData:function(){var e=this.getAvailableMetrics(),t=!this.model;return Object.assign({},o.default.prototype.serializeData.apply(this,arguments),{metrics:e,canCreateMetric:!t||e.length>0})}})},880:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),u=a(l),c=n(15),d=a(c),f=n(7),m=n(885),p=a(m),h=n(8),v=n(2),b=function(e){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"componentDidMount",value:function(){(0,p.default)(this.refs.container,this.props.component)}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(d.default,{title:(0,v.translate)("custom_measures.page")}),u.default.createElement("div",{ref:"container"}))}}]),t}(u.default.PureComponent),y=function(e,t){return{component:(0,h.getComponent)(e,t.location.query.id)}};t.default=(0,f.connect)(y)(b)},881:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(431),o=a(s),r=n(432),i=a(r);t.default=i.default.extend({sendRequest:function(){var e=this,t=new o.default({metricId:this.$("#create-custom-measure-metric").val(),value:this.$("#create-custom-measure-value").val(),description:this.$("#create-custom-measure-description").val(),projectId:this.options.projectId});return this.disableForm(),t.save(null,{statusCode:{400:null}}).done(function(){e.collection.refresh(),e.destroy()}).fail(function(t){e.enableForm(),e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},882:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),o=n(19),r=a(o),i=n(431),l=a(i);t.default=r.default.Collection.extend({model:l.default,initialize:function(e){this.projectId=e.projectId},url:function(){return window.baseUrl+"/api/custom_measures/search"},parse:function(e){return this.total=e.total,this.p=e.p,this.ps=e.ps,e.customMeasures},fetch:function(e){var t=Object.assign({data:{}},e);return this.q=t.data.q,t.data.projectId=this.projectId,r.default.Collection.prototype.fetch.call(this,t)},fetchMore:function(){var e=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:e,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps},getTakenMetrics:function(){var e=this.map(function(e){return e.get("metric").id});return(0,s.uniq)(e)}})},883:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(17),o=a(s),r=n(1641),i=a(r);t.default=o.default.extend({template:i.default,onFormSubmit:function(){o.default.prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},sendRequest:function(){var e=this,t=this.model.collection;return this.model.destroy({wait:!0,statusCode:{400:null}}).done(function(){t.refresh(),e.destroy()}).fail(function(t){e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},884:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(11),o=a(s),r=n(881),i=a(r),l=n(1643),u=a(l);t.default=o.default.ItemView.extend({template:u.default,events:{"click #custom-measures-create":"onCreateClick"},onCreateClick:function(e){e.preventDefault(),this.createCustomMeasure()},createCustomMeasure:function(){new i.default({collection:this.collection,projectId:this.options.projectId}).render()}})},885:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){v.start({el:e,component:t})};var s=n(11),o=a(s),r=n(886),i=a(r),l=n(882),u=a(l),c=n(884),d=a(c),f=n(889),m=a(f),p=n(887),h=a(p),v=new o.default.Application,b=function(e,t){this.layout=new i.default({el:e}),this.layout.render(),this.customMeasures=new u.default({projectId:t.id}),this.headerView=new d.default({collection:this.customMeasures,projectId:t.id}),this.layout.headerRegion.show(this.headerView),this.listView=new m.default({collection:this.customMeasures}),this.layout.listRegion.show(this.listView),this.listFooterView=new h.default({collection:this.customMeasures}),this.layout.listFooterRegion.show(this.listFooterView),this.customMeasures.fetch()};v.on("start",function(e){b.call(v,e.el,e.component)})},886:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(11),o=a(s),r=n(1644),i=a(r);t.default=o.default.LayoutView.extend({template:i.default,regions:{headerRegion:"#custom-measures-header",listRegion:"#custom-measures-list",listFooterRegion:"#custom-measures-list-footer"}})},887:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(11),o=a(s),r=n(1645),i=a(r);t.default=o.default.ItemView.extend({template:i.default,collectionEvents:{all:"render"},events:{"click #custom-measures-fetch-more":"onMoreClick"},onMoreClick:function(e){e.preventDefault(),this.fetchMore()},fetchMore:function(){this.collection.fetchMore()},serializeData:function(){return Object.assign({},o.default.ItemView.prototype.serializeData.apply(this,arguments),{total:this.collection.total,count:this.collection.length,more:this.collection.hasMore()})}})},888:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(11),o=a(s),r=n(891),i=a(r),l=n(883),u=a(l),c=n(1646),d=a(c);t.default=o.default.ItemView.extend({tagName:"tr",template:d.default,events:{"click .js-custom-measure-update":"onUpdateClick","click .js-custom-measure-delete":"onDeleteClick"},onRender:function(){this.$el.attr("data-id",this.model.id),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){this.$('[data-toggle="tooltip"]').tooltip("destroy")},onUpdateClick:function(e){e.preventDefault(),this.updateCustomMeasure()},onDeleteClick:function(e){e.preventDefault(),this.deleteCustomMeasure()},updateCustomMeasure:function(){new i.default({model:this.model,collection:this.model.collection}).render()},deleteCustomMeasure:function(){new u.default({model:this.model}).render()}})},889:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(11),o=a(s),r=n(888),i=a(r),l=n(1647),u=a(l);t.default=o.default.CompositeView.extend({template:u.default,childView:i.default,childViewContainer:"tbody"})},891:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(432),o=a(s);t.default=o.default.extend({sendRequest:function(){var e=this;return this.model.set({value:this.$("#create-custom-measure-value").val(),description:this.$("#create-custom-measure-description").val()}),this.disableForm(),this.model.save(null,{statusCode:{400:null}}).done(function(){e.collection.refresh(),e.destroy()}).fail(function(t){e.enableForm(),e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},1641:function(e,t,n){var a=n(5);e.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){var s,o=this.lambda,r=this.escapeExpression;return'<form id="delete-custom-measure-form">\n  <div class="modal-head">\n    <h2>Delete Custom Measure</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    Are you sure you want to delete custom measure "'+r(o(null!=(s=null!=e?e.metric:e)?s.name:s,e))+'"?\n  </div>\n  <div class="modal-foot">\n    <button id="delete-custom-measure-submit" class="button-red">Delete</button>\n    <a href="#" class="js-modal-close" id="delete-custom-measure-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0})},1642:function(e,t,n){var a=n(5);e.exports=(a.default||a).template({1:function(e,t,n,a){return"Update"},3:function(e,t,n,a){return"Create"},5:function(e,t,n,a,s){var o,r="";return o=t.if.call(e,null!=e?e.canCreateMetric:e,{name:"if",hash:{},fn:this.program(6,a,s),inverse:this.program(10,a,s),data:a}),null!=o&&(r+=o),r},6:function(e,t,n,a,s){var o,r='        <div class="modal-field">\n          <label for="create-custom-measure-metric">Metric<em class="mandatory">*</em></label>\n          <select id="create-custom-measure-metric" name="metric" required>\n';return o=t.each.call(e,null!=e?e.metrics:e,{name:"each",hash:{},fn:this.program(7,a,s),inverse:this.noop,data:a}),null!=o&&(r+=o),r+"          </select>\n        </div>\n"},7:function(e,t,a,s,o){var r,i=this.lambda,l=this.escapeExpression,u='              <option value="'+l(i(null!=e?e.id:e,e))+'" ';return r=n(13).call(e,null!=e?e.id:e,null!=(r=null!=o[1]?o[1].metric:o[1])?r.id:r,{name:"eq",hash:{},fn:this.program(8,s,o),inverse:this.noop,data:s}),null!=r&&(u+=r),u+">"+l(i(null!=e?e.name:e,e))+"</option>\n"},8:function(e,t,n,a){return"selected"},10:function(e,t,a,s){var o=this.escapeExpression;return'        <div class="alert alert-warning">'+o(n(3).call(e,"custom_measures.all_metrics_taken",{name:"t",hash:{},data:s}))+"</div>\n"},12:function(e,t,n,a){return"disabled"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a,s){var o,r=this.lambda,i=this.escapeExpression,l='<form id="create-custom-measure-form" autocomplete="off">\n  <div class="modal-head">\n    <h2>';return o=t.if.call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(1,a,s),inverse:this.program(3,a,s),data:a}),null!=o&&(l+=o),l+=' Custom Measure</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n\n',o=t.unless.call(e,null!=e?e.id:e,{name:"unless",hash:{},fn:this.program(5,a,s),inverse:this.noop,data:a}),null!=o&&(l+=o),l+='\n    <div class="modal-field">\n      <label for="create-custom-measure-value">Value<em class="mandatory">*</em></label>\n      <input id="create-custom-measure-value" name="value" type="text" maxlength="200" required value="'+i(r(null!=e?e.value:e,e))+'">\n    </div>\n\n    <div class="modal-field">\n      <label for="create-custom-measure-description">Description</label>\n      <textarea id="create-custom-measure-description" name="description">'+i(r(null!=e?e.description:e,e))+'</textarea>\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="create-custom-measure-submit" ',o=t.unless.call(e,null!=e?e.canCreateMetric:e,{name:"unless",hash:{},fn:this.program(12,a,s),inverse:this.noop,data:a}),null!=o&&(l+=o),l+=">\n      ",o=t.if.call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(1,a,s),inverse:this.program(3,a,s),data:a}),null!=o&&(l+=o),l+'\n    </button>\n    <a href="#" class="js-modal-close" id="create-custom-measure-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0,useDepths:!0})},1643:function(e,t,n){var a=n(5);e.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,s){var o=this.escapeExpression;return'<header class="page-header">\n  <h1 class="page-title">'+o(n(3).call(e,"custom_measures.page",{name:"t",hash:{},data:s}))+'</h1>\n  <div class="page-actions">\n    <div class="button-group">\n      <button id="custom-measures-create">'+o(n(3).call(e,"create",{name:"t",hash:{},data:s}))+'</button>\n    </div>\n  </div>\n  <p class="page-description">'+o(n(3).call(e,"custom_measures.page.description",{name:"t",hash:{},data:s}))+"</p>\n</header>\n"},useData:!0})},1644:function(e,t,n){var a=n(5);e.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){return'<div class="page page-limited">\n  <div id="custom-measures-header"></div>\n  <div id="custom-measures-list"></div>\n  <div id="custom-measures-list-footer"></div>\n</div>\n'},useData:!0})},1645:function(e,t,n){var a=n(5);e.exports=(a.default||a).template({1:function(e,t,n,a){return'    <a id="custom-measures-fetch-more" class="spacer-left" href="#">show more</a>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){var s,o,r="function",i=t.helperMissing,l=this.escapeExpression,u='<footer class="spacer-top note text-center">\n  '+l((o=null!=(o=t.count||(null!=e?e.count:e))?o:i,typeof o===r?o.call(e,{name:"count",hash:{},data:a}):o))+"/"+l((o=null!=(o=t.total||(null!=e?e.total:e))?o:i,typeof o===r?o.call(e,{name:"total",hash:{},data:a}):o))+" shown\n";return s=t.if.call(e,null!=e?e.more:e,{name:"if",hash:{},fn:this.program(1,a),inverse:this.noop,data:a}),null!=s&&(u+=s),u+"</footer>\n"},useData:!0})},1646:function(e,t,n){var a=n(5);e.exports=(a.default||a).template({1:function(e,t,a,s){var o=this.escapeExpression;return'      <span class="js-custom-measure-pending badge badge-warning spacer-left"\n            title="'+o(n(3).call(e,"custom_measures.pending_tooltip",{name:"t",hash:{},data:s}))+'"\n            data-toggle="tooltip" data-placement="bottom">'+o(n(3).call(e,"custom_measures.pending",{name:"t",hash:{},data:s}))+"</span>\n"},3:function(e,t,a,s){var o=this.escapeExpression;return'    Updated on <span class="js-custom-measure-created-at">'+o(n(102).call(e,null!=e?e.updatedAt:e,{name:"d",hash:{},data:s}))+"</span>\n"},5:function(e,t,a,s){var o=this.escapeExpression;return'    Created on <span class="js-custom-measure-created-at">'+o(n(102).call(e,null!=e?e.createdAt:e,{name:"d",hash:{},data:s}))+"</span>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,s){var o,r=this.lambda,i=this.escapeExpression,l='<td class="nowrap">\n  <div>\n    <span class="js-custom-measure-metric-name">'+i(r(null!=(o=null!=e?e.metric:e)?o.name:o,e))+"</span>\n";return o=t.if.call(e,null!=e?e.pending:e,{name:"if",hash:{},fn:this.program(1,s),inverse:this.noop,data:s}),null!=o&&(l+=o),l+='  </div>\n  <span class="js-custom-measure-domain note">'+i(r(null!=(o=null!=e?e.metric:e)?o.domain:o,e))+'</span>\n</td>\n\n<td class="nowrap">\n  <strong class="js-custom-measure-value">'+i(n(117).call(e,null!=e?e.value:e,null!=(o=null!=e?e.metric:e)?o.type:o,{name:"formatMeasure",hash:{},data:s}))+'</strong>\n</td>\n\n<td class="">\n  <span class="js-custom-measure-description">'+i(r(null!=e?e.description:e,e))+'</span>\n</td>\n\n<td class="">\n',o=t.if.call(e,null!=e?e.updatedAt:e,{name:"if",hash:{},fn:this.program(3,s),inverse:this.program(5,s),data:s}),null!=o&&(l+=o),l+'  by <span class="js-custom-measure-user">'+i(r(null!=(o=null!=e?e.user:e)?o.name:o,e))+'</span>\n</td>\n\n<td class="thin nowrap">\n  <a class="js-custom-measure-update icon-edit" title="Update" data-toggle="tooltip" href="#"></a>\n  <a class="js-custom-measure-delete icon-delete" title="Delete" data-toggle="tooltip" href="#"></a>\n</td>\n'},useData:!0})},1647:function(e,t,n){var a=n(5);e.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){return'<table class="data zebra">\n  <thead>\n  <tr>\n    <th>Metric</th>\n    <th>Value</th>\n    <th>Description</th>\n    <th>Date</th>\n    <th>&nbsp;</th>\n  </tr>\n  </thead>\n  <tbody></tbody>\n</table>\n'},useData:!0})}});