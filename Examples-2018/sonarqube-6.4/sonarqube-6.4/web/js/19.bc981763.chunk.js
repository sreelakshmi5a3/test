webpackJsonp([19],{114:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=n(1),c=a(f),p=n(9),d=n(41),m=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.language,a=e.organization,o=e.children,l=r(e,["name","language","organization","children"]);return c.default.createElement(p.Link,u({to:(0,d.getProfilePath)(t,n,a),activeClassName:"link-no-underline"},l),o)}}]),t}(c.default.PureComponent);t.default=m},289:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),f=n(9),c=n(293),p=a(c),d=n(291),m=a(d),h=n(292),y=a(h),b=n(2),g=n(20),v=n(36),_=n(41),E=function(e){function t(){var e,n,a,l;r(this,t);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.handleRenameClick=function(e){e.preventDefault(),new p.default({profile:a.props.profile}).on("done",function(e){a.props.updateProfiles().then(function(){a.props.fromList||a.context.router.replace((0,_.getProfilePath)(e,a.props.profile.language,a.props.organization))})}).render()},a.handleCopyClick=function(e){e.preventDefault(),new m.default({profile:a.props.profile}).on("done",function(e){a.props.updateProfiles().then(function(){a.context.router.push((0,_.getProfilePath)(e.name,e.language,a.props.organization))})}).render()},a.handleSetDefaultClick=function(e){e.preventDefault(),(0,v.setDefaultProfile)(a.props.profile.key).then(a.props.updateProfiles)},a.handleDeleteClick=function(e){e.preventDefault(),new y.default({profile:a.props.profile}).on("done",function(){a.context.router.replace((0,_.getProfilesPath)(a.props.organization)),a.props.updateProfiles()}).render()},l=n,o(a,l)}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.profile,n=e.canAdmin,a=window.baseUrl+"/api/qualityprofiles/backup?profileKey="+encodeURIComponent(t.key),r=(0,g.getRulesUrl)({qprofile:t.key,activation:"false"},this.props.organization);return s.default.createElement("ul",{className:"dropdown-menu dropdown-menu-right"},n&&s.default.createElement("li",null,s.default.createElement(f.Link,{to:r},(0,b.translate)("quality_profiles.activate_more_rules"))),s.default.createElement("li",null,s.default.createElement("a",{id:"quality-profile-backup",href:a},(0,b.translate)("backup_verb"))),s.default.createElement("li",null,s.default.createElement(f.Link,{to:(0,_.getProfileComparePath)(t.name,t.language,this.props.organization),id:"quality-profile-compare"},(0,b.translate)("compare"))),n&&s.default.createElement("li",null,s.default.createElement("a",{id:"quality-profile-copy",href:"#",onClick:this.handleCopyClick},(0,b.translate)("copy"))),n&&s.default.createElement("li",null,s.default.createElement("a",{id:"quality-profile-rename",href:"#",onClick:this.handleRenameClick},(0,b.translate)("rename"))),n&&!t.isDefault&&s.default.createElement("li",null,s.default.createElement("a",{id:"quality-profile-set-as-default",href:"#",onClick:this.handleSetDefaultClick},(0,b.translate)("set_as_default"))),n&&!t.isDefault&&s.default.createElement("li",null,s.default.createElement("a",{id:"quality-profile-delete",href:"#",onClick:this.handleDeleteClick},(0,b.translate)("delete"))))}}]),t}(s.default.PureComponent);E.defaultProps={fromList:!1},E.contextTypes={router:s.default.PropTypes.object},t.default=E},290:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),f=n(6),c=a(f),p=n(2),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props.date;return e?s.default.createElement("span",{title:(0,c.default)(e).format("LLL"),"data-toggle":"tooltip"},(0,c.default)(e).fromNow()):s.default.createElement("span",null,(0,p.translate)("never"))}}]),t}(s.default.PureComponent);t.default=d},291:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),o=a(r),l=n(352),i=a(l),u=n(36);t.default=o.default.extend({template:i.default,onFormSubmit:function(){o.default.prototype.onFormSubmit.apply(this,arguments),this.disableForm(),this.sendRequest()},sendRequest:function(){var e=this,t=this.$("#copy-profile-name").val();(0,u.copyProfile)(this.options.profile.key,t).then(function(t){e.destroy(),e.trigger("done",t)}).catch(function(t){400===t.response.status&&(e.enableForm(),t.response.json().then(function(t){return e.showErrors(t.errors,t.warnings)}))})},serializeData:function(){return this.options.profile}})},292:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),o=a(r),l=n(353),i=a(l),u=n(36);t.default=o.default.extend({template:i.default,modelEvents:{destroy:"destroy"},onFormSubmit:function(){o.default.prototype.onFormSubmit.apply(this,arguments),this.disableForm(),this.sendRequest()},sendRequest:function(){var e=this;(0,u.deleteProfile)(this.options.profile.key).then(function(){e.destroy(),e.trigger("done")}).catch(function(t){400===t.response.status&&(e.enableForm(),t.response.json().then(function(t){return e.showErrors(t.errors,t.warnings)}))})},serializeData:function(){return this.options.profile}})},293:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),o=a(r),l=n(354),i=a(l),u=n(36);t.default=o.default.extend({template:i.default,onFormSubmit:function(){o.default.prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},sendRequest:function(){var e=this,t=this.$("#rename-profile-name").val();(0,u.renameProfile)(this.options.profile.key,t).then(function(){e.destroy(),e.trigger("done",t)}).catch(function(t){400===t.response.status&&(e.enableForm(),t.response.json().then(function(t){return e.showErrors(t.errors,t.warnings)}))})},serializeData:function(){return this.options.profile}})},352:function(e,t,n){var a=n(5);e.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,r){var o=this.escapeExpression;return'<form id="copy-profile-form">\n  <div class="modal-head">\n    <h2>'+o(n(26).call(e,"quality_profiles.copy_x_title",null!=e?e.name:e,null!=e?e.languageName:e,{name:"tp",hash:{},data:r}))+'</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <div class="modal-field">\n      <label for="copy-profile-name">'+o(n(3).call(e,"quality_profiles.copy_new_name",{name:"t",hash:{},data:r}))+'<em class="mandatory">*</em></label>\n      <input id="copy-profile-name" name="name" type="text" size="50" maxlength="100" required>\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="copy-profile-submit">'+o(n(3).call(e,"copy",{name:"t",hash:{},data:r}))+'</button>\n    <a href="#" class="js-modal-close" id="copy-profile-cancel">'+o(n(3).call(e,"cancel",{name:"t",hash:{},data:r}))+"</a>\n  </div>\n</form>\n"},useData:!0})},353:function(e,t,n){var a=n(5);e.exports=(a.default||a).template({1:function(e,t,a,r){var o=this.escapeExpression;return'      <div class="alert alert-warning">'+o(n(3).call(e,"quality_profiles.this_profile_has_descendants",{name:"t",hash:{},data:r}))+"</div>\n      <p>"+o(n(26).call(e,"quality_profiles.are_you_sure_want_delete_profile_x_and_descendants",null!=e?e.name:e,null!=e?e.languageName:e,{name:"tp",hash:{},data:r}))+"</p>\n"},3:function(e,t,a,r){var o=this.escapeExpression;return"      <p>"+o(n(26).call(e,"quality_profiles.are_you_sure_want_delete_profile_x",null!=e?e.name:e,null!=e?e.languageName:e,{name:"tp",hash:{},data:r}))+"</p>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,r){var o,l=this.escapeExpression,i='<form id="delete-profile-form">\n  <div class="modal-head">\n    <h2>'+l(n(3).call(e,"quality_profiles.delete_confirm_title",{name:"t",hash:{},data:r}))+'</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n';return o=t.if.call(e,null!=e?e.childrenCount:e,{name:"if",hash:{},fn:this.program(1,r),inverse:this.program(3,r),data:r}),null!=o&&(i+=o),i+'  </div>\n  <div class="modal-foot">\n    <button id="delete-profile-submit">'+l(n(3).call(e,"delete",{name:"t",hash:{},data:r}))+'</button>\n    <a href="#" class="js-modal-close" id="delete-profile-cancel">'+l(n(3).call(e,"cancel",{name:"t",hash:{},data:r}))+"</a>\n  </div>\n</form>\n"},useData:!0})},354:function(e,t,n){var a=n(5);e.exports=(a.default||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,a,r){var o=this.escapeExpression,l=this.lambda;return'<form id="rename-profile-form">\n  <div class="modal-head">\n    <h2>'+o(n(26).call(e,"quality_profiles.rename_x_title",null!=e?e.name:e,null!=e?e.languageName:e,{name:"tp",hash:{},data:r}))+'</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <div class="modal-field">\n      <label for="rename-profile-name">'+o(n(3).call(e,"quality_profiles.new_name",{name:"t",hash:{},data:r}))+' <em class="mandatory">*</em></label>\n      <input id="rename-profile-name" name="name" type="text" size="50" maxlength="100" value="'+o(l(null!=e?e.name:e,e))+'" required>\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="rename-profile-submit">'+o(n(3).call(e,"rename",{name:"t",hash:{},data:r}))+'</button>\n    <a href="#" class="js-modal-close" id="rename-profile-cancel">'+o(n(3).call(e,"cancel",{name:"t",hash:{},data:r}))+"</a>\n  </div>\n</form>\n"},useData:!0})},1184:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),f=a(s),c=n(15),p=a(c),d=n(1185),m=a(d),h=n(1188),y=a(h),b=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.profiles,a=e.router;if(t.query.key){var r=n.find(function(e){return e.key===t.query.key});r&&a.replace({pathname:t.pathname,query:{language:r.language,name:r.name}})}}},{key:"render",value:function(){var e=this.props,t=e.organization,n=e.profiles,a=e.location,o=r(e,["organization","profiles","location"]),l=a.query,i=l.key,u=l.language,s=l.name;if(i){var c=n.find(function(e){return e.key===a.query.key});return c?null:f.default.createElement(m.default,{organization:t})}var d=n.find(function(e){return e.language===u&&e.name===s});if(!d)return f.default.createElement(m.default,{organization:t});var h=f.default.cloneElement(this.props.children,Object.assign({organization:t,profile:d,profiles:n},o));return f.default.createElement("div",null,f.default.createElement(p.default,{title:d.name}),f.default.createElement(y.default,{canAdmin:this.props.canAdmin,organization:t,profile:d,updateProfiles:this.props.updateProfiles}),h)}}]),t}(f.default.PureComponent);t.default=b},1185:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),f=n(9),c=n(2),p=n(41),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"quality-profile-not-found"},s.default.createElement("div",{className:"note spacer-bottom"},s.default.createElement(f.IndexLink,{to:(0,p.getProfilesPath)(this.props.organization),className:"text-muted"},(0,c.translate)("quality_profiles.page"))),s.default.createElement("div",null,(0,c.translate)("quality_profiles.not_found")))}}]),t}(s.default.PureComponent);t.default=d},1188:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),f=n(9),c=n(114),p=a(c),d=n(289),m=a(d),h=n(290),y=a(h),b=n(2),g=n(41),v=s.default.createElement("i",{className:"icon-dropdown"}),_=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"renderUpdateDate",value:function(){var e=this.props.profile,t=s.default.createElement("span",null,(0,b.translate)("quality_profiles.updated_")," ",s.default.createElement(y.default,{date:e.userUpdatedAt}));return(0,g.isStagnant)(e)&&(t=s.default.createElement("span",{className:"badge badge-normal-size badge-focus"},t)),s.default.createElement("li",{className:"small spacer-right"},t)}},{key:"renderUsageDate",value:function(){var e=this.props.profile,t=s.default.createElement("span",null,(0,b.translate)("quality_profiles.used_")," ",s.default.createElement(y.default,{date:e.lastUsed}));return e.lastUsed||(t=s.default.createElement("span",{className:"badge badge-normal-size badge-focus"},t)),s.default.createElement("li",{className:"small big-spacer-right"},t)}},{key:"render",value:function(){var e=this.props,t=e.organization,n=e.profile;return s.default.createElement("header",{className:"page-header quality-profile-header"},s.default.createElement("div",{className:"note spacer-bottom"},s.default.createElement(f.IndexLink,{to:(0,g.getProfilesPath)(t),className:"text-muted"},(0,b.translate)("quality_profiles.page"))," / ",s.default.createElement(f.Link,{to:(0,g.getProfilesForLanguagePath)(n.language,t),className:"text-muted"},n.languageName)),s.default.createElement("h1",{className:"page-title"},s.default.createElement(p.default,{className:"link-base-color",language:n.language,name:n.name,organization:t},s.default.createElement("span",null,n.name))),s.default.createElement("div",{className:"pull-right"},s.default.createElement("ul",{className:"list-inline",style:{lineHeight:"24px"}},this.renderUpdateDate(),this.renderUsageDate(),s.default.createElement("li",null,s.default.createElement(f.Link,{to:(0,g.getProfileChangelogPath)(n.name,n.language,t),className:"button"},(0,b.translate)("changelog"))),s.default.createElement("li",null,s.default.createElement("div",{className:"pull-left dropdown"},s.default.createElement("button",{className:"dropdown-toggle","data-toggle":"dropdown"},(0,b.translate)("actions")," ",v),s.default.createElement(m.default,{canAdmin:this.props.canAdmin,organization:t,profile:n,updateProfiles:this.props.updateProfiles}))))))}}]),t}(s.default.PureComponent);t.default=_}});