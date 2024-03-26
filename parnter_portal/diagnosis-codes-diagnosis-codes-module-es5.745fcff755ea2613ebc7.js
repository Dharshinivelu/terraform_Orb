!function(){function e(n,t){return(e=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(n,t)}function n(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var o,a=i(e);if(n){var c=i(this).constructor;o=Reflect.construct(a,arguments,c)}else o=a.apply(this,arguments);return t(this,o)}}function t(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{bCUR:function(t,i,a){"use strict";a.r(i),a.d(i,"DiagnosisCodesModule",function(){return J});var s,r=a("ofXK"),d=a("3Pt+"),l=a("KZX/"),u=a("SHZf"),b=a("UFn0"),h=a("WoUL"),g=a("AytR"),p=a("tk/3"),f=a("fXoL"),C=((s=function(){function e(n){o(this,e),this._http=n,this.rootURL=g.g.url}return c(e,[{key:"fetchAllDiagnosisCodes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o="".concat(this.rootURL,"/v3/diagnosis-codes"),a={pageNumber:e,limit:n,searchKey:t,type:i},c=new p.h;return Object.keys(a).forEach(function(e){return a[e]&&(c=c.append(e,a[e]))}),this._http.get(o,{params:c})}},{key:"fetchAllDiagnosisCodesByTenant",value:function(e,n){var t="".concat(this.rootURL,"/v3/diagnosis-codes/tenant"),i={searchKey:e,type:n},o=new p.h;return Object.keys(i).forEach(function(e){return i[e]&&(o=o.append(e,i[e]))}),this._http.get(t,{params:o})}},{key:"updateOne",value:function(e){return this._http.put("".concat(this.rootURL,"/v3/diagnosis-codes/tenant/").concat(null==e?void 0:e.diagnosisCodeId),e)}},{key:"updateMultiple",value:function(e){return this._http.post("".concat(this.rootURL,"/v3/diagnosis-codes/tenant"),e)}},{key:"fetchDiagnosisCodesByCodes",value:function(e){var n="".concat(this.rootURL,"/v3/diagnosis-codes/details"),t={codes:e},i=new p.h;return Object.keys(t).forEach(function(e){return t[e]&&(i=i.append(e,t[e]))}),this._http.get(n,{params:i})}}]),e}()).\u0275fac=function(e){return new(e||s)(f.bc(p.c))},s.\u0275prov=f.Nb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),y=a("qQcL"),v=a("pLZG"),z=a("1G5W"),k={Listing:{header:!0,title:"Diagnosis Codes",searchEnabled:!0,primaryAction:{},secondaryAction:{},multiAction:{title:"Convert To",actions:[{title:"Chronic",value:"CHRONIC"},{title:"Non-chronic",value:"NON_CHRONIC"},{title:"Undetermined",value:"UNDETERMINED"}],enabled:!0},showTenantToggle:!0,subTenantToggleMode:"SINGLE"}},X=a("igu/"),m=a("tyNb"),D=a("bNXi"),S=a("oyxB"),O=a("B+r4"),W=a("zAKX"),T=a("rMZv"),P=a("eHCX"),_=a("nJia"),I=a("ZyQt"),M=function(){return["."]},w=function(){return{type:"default"}};function L(e,n){1&e&&(f.Xb(0,"a",21),f.Xc(1,"Default"),f.Wb()),2&e&&f.rc("routerLink",f.xc(2,M))("queryParams",f.xc(3,w))}function A(e,n){if(1&e&&(f.Xb(0,"strong"),f.Xc(1),f.Wb()),2&e){var t=f.ic();f.Db(1),f.Zc(" Selected ",null==t.setOfCheckedId?null:t.setOfCheckedId.size," diagnosis codes ")}}function R(e,n){if(1&e&&(f.Xb(0,"nz-tag",26),f.Xc(1),f.Wb()),2&e){var t=n.$implicit;f.rc("nzColor","blue"),f.Db(1),f.Zc(" ",t," ")}}function x(e,n){1&e&&(f.Vb(0),f.Xc(1,"N/A"),f.Ub())}function N(e,n){if(1&e){var t=f.Yb();f.Xb(0,"tr"),f.Xb(1,"td",22),f.ec("nzCheckedChange",function(e){f.Lc(t);var i=n.$implicit;return f.ic().onItemChecked(null==i?null:i.id,e)}),f.Wb(),f.Xb(2,"td"),f.Xb(3,"strong"),f.Xc(4),f.jc(5,"titlecase"),f.Wb(),f.Wb(),f.Xb(6,"td",23),f.Xb(7,"span",24),f.Xc(8),f.Wb(),f.Wb(),f.Xb(9,"td"),f.Vc(10,R,2,2,"nz-tag",25),f.Vc(11,x,2,0,"ng-container",5),f.Wb(),f.Xb(12,"td"),f.Xc(13),f.Wb(),f.Wb()}if(2&e){var i=n.$implicit,o=f.ic();f.Db(1),f.rc("nzChecked",o.setOfCheckedId.has(null==i?null:i.id)),f.Db(3),f.Yc(f.kc(5,7,null==i?null:i.code)),f.Db(3),f.rc("nzTooltipTitle",null==i?null:i.description),f.Db(1),f.Zc(" ",null==i?null:i.description," "),f.Db(2),f.rc("ngForOf",null==i?null:i.supportedProgrammes),f.Db(1),f.rc("ngIf",!(null!=i&&null!=i.supportedProgrammes&&i.supportedProgrammes.length)),f.Db(2),f.Zc(" ",null==o.typeMap?null:o.typeMap.get(null==i?null:i.type)," ")}}var E=function(){return{type:"updated"}};function j(e,n){1&e&&(f.Xb(0,"a",21),f.Xc(1,"Updated"),f.Wb()),2&e&&f.rc("routerLink",f.xc(2,M))("queryParams",f.xc(3,E))}function U(e,n){if(1&e){var t=f.Yb();f.Xb(0,"tr"),f.Xb(1,"td"),f.Xb(2,"strong"),f.Xc(3),f.jc(4,"titlecase"),f.Wb(),f.Wb(),f.Xb(5,"td",23),f.Xb(6,"span",24),f.Xc(7),f.Wb(),f.Wb(),f.Xb(8,"td"),f.Xb(9,"nz-select",8),f.ec("ngModelChange",function(e){return n.$implicit.type=e}),f.Sb(10,"nz-option",10),f.Sb(11,"nz-option",11),f.Sb(12,"nz-option",12),f.Wb(),f.Wb(),f.Xb(13,"td"),f.Xb(14,"a",27),f.ec("click",function(){f.Lc(t);var e=n.$implicit;return f.ic().updateTenantDiagnosisCode(null==e?null:e.id,null==e?null:e.type)}),f.Xc(15," Save "),f.Wb(),f.Wb(),f.Wb()}if(2&e){var i=n.$implicit;f.Db(3),f.Yc(f.kc(4,4,null==i?null:i.code)),f.Db(3),f.rc("nzTooltipTitle",null==i?null:i.description),f.Db(1),f.Zc(" ",null==i?null:i.description," "),f.Db(2),f.rc("ngModel",i.type)}}var B,H,q,F=function(){return["2%","15%","30%","25%","20%"]},V=function(){return[10,20,30,50,100]},K=function(){return["15%","45%","20%","15%"]},Z=((B=function(t){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&e(n,t)}(a,t);var i=n(a);function a(e,n,t,c,s){var r;return o(this,a),(r=i.call(this))._router=e,r._activatedRoute=n,r._diagnosisCodesService=t,r._notificationsService=c,r._dataSharingService=s,r.pageIndex=1,r.checked=!1,r.indeterminate=!1,r.setOfCheckedId=new Set,r.typeMap=new Map([["CHRONIC","Chronic"],["NON_CHRONIC","Non-chronic"],["UNDETERMINED","Undetermined"]]),r.clearState(),r._routeHelperService.getSearch().pipe(Object(v.a)(function(e){return e!=r.searchKey}),Object(z.a)(r.unsubscribed)).subscribe(function(e){r.searchKey=e,"default"===r._activatedRoute.snapshot.queryParamMap.get("type")?r.getAllDiagnosisCodes():"updated"===r._activatedRoute.snapshot.queryParamMap.get("type")&&r.getAllDiagnosisCodesByTenant()}),r._routeHelperService.getMultiActionTriggered().pipe(Object(v.a)(function(e){return!!e}),Object(z.a)(r.unsubscribed)).subscribe(function(e){r.updateMultipleTenantDiagnosisCodes(e)}),r}return c(a,[{key:"ngOnInit",value:function(){var e=this;this._dataSharingService.onSubTenantChange().pipe(Object(z.a)(this.unsubscribed)).subscribe(function(n){return e.getAllDiagnosisCodesByTenant()})}},{key:"getAllDiagnosisCodes",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.loading=!0,this.checked=!1,this._diagnosisCodesService.fetchAllDiagnosisCodes(n-1,t,this.searchKey,this.selectedType).subscribe(function(n){e.diagnosisCodes=n,e.loading=!1})}},{key:"getAllDiagnosisCodesByTenant",value:function(){var e=this;this.loading=!0,this._diagnosisCodesService.fetchAllDiagnosisCodesByTenant(this.searchKey,this.selectedType).subscribe(function(n){e.tenantDiagnosisCodes=n,e.loading=!1})}},{key:"onQueryParamsChange",value:function(e){var n=e.pageIndex,t=e.pageSize;this.getAllDiagnosisCodes(n,t)}},{key:"updateTenantDiagnosisCode",value:function(e,n){var t=this;this._diagnosisCodesService.updateOne({diagnosisCodeId:e,type:n}).subscribe(function(){t._notificationsService.success("Diagnosis Codes","Code type updated successfully!")})}},{key:"updateMultipleTenantDiagnosisCodes",value:function(e){var n=this,t=[];this.setOfCheckedId.forEach(function(n){t.push({diagnosisCodeId:n,type:e})}),this._diagnosisCodesService.updateMultiple({codes:t}).subscribe(function(){n._notificationsService.success("Diagnosis Codes","Codes type updated successfully!"),n.getAllDiagnosisCodesByTenant(),n._router.navigate(["diagnosis-codes"],{queryParams:{type:"updated"}})})}},{key:"updateCheckedSet",value:function(e,n){n?this.setOfCheckedId.add(e):this.setOfCheckedId.delete(e)}},{key:"refreshCheckedStatus",value:function(){var e,n,t,i,o=this;this.checked=null===(n=null===(e=this.diagnosisCodes)||void 0===e?void 0:e.content)||void 0===n?void 0:n.every(function(e){var n=e.id;return o.setOfCheckedId.has(n)}),this.indeterminate=(null===(i=null===(t=this.diagnosisCodes)||void 0===t?void 0:t.content)||void 0===i?void 0:i.some(function(e){var n=e.id;return o.setOfCheckedId.has(n)}))&&!this.checked}},{key:"onItemChecked",value:function(e,n){this.updateCheckedSet(e,n),this.refreshCheckedStatus()}},{key:"onAllChecked",value:function(e){var n,t,i=this;null===(t=null===(n=this.diagnosisCodes)||void 0===n?void 0:n.content)||void 0===t||t.forEach(function(n){var t=n.id;return i.updateCheckedSet(t,e)}),this.refreshCheckedStatus()}},{key:"clearState",value:function(){this.searchKey=void 0,this.setOfCheckedId=new Set,this.selectedType="ALL","default"===this._activatedRoute.snapshot.queryParamMap.get("type")?this._routeHelperService.setMultiAction(k.Listing.multiAction):this._routeHelperService.setMultiAction(void 0)}}]),a}(y.a)).\u0275fac=function(e){return new(e||B)(f.Rb(m.g),f.Rb(m.a),f.Rb(C),f.Rb(D.b),f.Rb(X.a))},B.\u0275cmp=f.Lb({type:B,selectors:[["app-diagnosis-codes"]],features:[f.Ab],decls:58,vars:25,consts:[["nzLinkRouter","",3,"nzSelectedIndexChange"],["class","tab","nz-tab-link","","queryParamsHandling","merge",3,"routerLink","queryParams",4,"nzTabLink"],[1,"container"],["nz-row",""],["nz-col","","nzSpan","4","id","selection-message"],[4,"ngIf"],["nz-col","","nzOffset","16","nzSpan","4"],["id","type"],[3,"ngModel","ngModelChange"],["nzValue","ALL","nzLabel","All"],["nzValue","CHRONIC","nzLabel","Chronic"],["nzValue","NON_CHRONIC","nzLabel","Non-chronic"],["nzValue","UNDETERMINED","nzLabel","Undetermined"],[3,"nzData","nzShowPagination","nzLoading","nzFrontPagination","nzTotal","nzPageIndex","nzShowSizeChanger","nzWidthConfig","nzPageSizeOptions","nzQueryParams"],["diagnosisCodesTable",""],["id","selection-th",3,"nzChecked","nzIndeterminate","nzCheckedChange"],[4,"ngFor","ngForOf"],[3,"nzClick"],["nz-col","","nzOffset","20","nzSpan","4"],["nzShowSizeChanger","",3,"nzData","nzShowPagination","nzLoading","nzFrontPagination","nzTotal","nzWidthConfig"],["tenantDiagnosisCodesTable",""],["nz-tab-link","","queryParamsHandling","merge",1,"tab",3,"routerLink","queryParams"],[3,"nzChecked","nzCheckedChange"],["nzEllipsis",""],["nz-typography","","nzEllipsis","","nz-tooltip","",1,"description",3,"nzTooltipTitle"],[3,"nzColor",4,"ngFor","ngForOf"],[3,"nzColor"],[3,"click"]],template:function(e,n){if(1&e&&(f.Xb(0,"nz-tabset",0),f.ec("nzSelectedIndexChange",function(){return n.clearState()}),f.Xb(1,"nz-tab"),f.Vc(2,L,2,4,"a",1),f.Xb(3,"div",2),f.Xb(4,"div",3),f.Xb(5,"div",4),f.Vc(6,A,2,1,"strong",5),f.Wb(),f.Xb(7,"div",6),f.Xb(8,"strong",7),f.Xc(9,"Diagnosis Code Type"),f.Wb(),f.Xb(10,"nz-select",8),f.ec("ngModelChange",function(e){return n.selectedType=e})("ngModelChange",function(){return n.getAllDiagnosisCodes()}),f.Sb(11,"nz-option",9),f.Sb(12,"nz-option",10),f.Sb(13,"nz-option",11),f.Sb(14,"nz-option",12),f.Wb(),f.Wb(),f.Wb(),f.Sb(15,"br"),f.Xb(16,"nz-table",13,14),f.ec("nzQueryParams",function(e){return n.onQueryParamsChange(e)}),f.Xb(18,"thead"),f.Xb(19,"tr"),f.Xb(20,"th",15),f.ec("nzCheckedChange",function(e){return n.onAllChecked(e)}),f.Wb(),f.Xb(21,"th"),f.Xc(22,"Code"),f.Wb(),f.Xb(23,"th"),f.Xc(24,"Description"),f.Wb(),f.Xb(25,"th"),f.Xc(26,"Supported Programs"),f.Wb(),f.Xb(27,"th"),f.Xc(28,"Type"),f.Wb(),f.Wb(),f.Wb(),f.Xb(29,"tbody"),f.Vc(30,N,14,9,"tr",16),f.Wb(),f.Wb(),f.Wb(),f.Wb(),f.Xb(31,"nz-tab",17),f.ec("nzClick",function(){return n.getAllDiagnosisCodesByTenant()}),f.Vc(32,j,2,4,"a",1),f.Xb(33,"div",2),f.Xb(34,"div",3),f.Xb(35,"div",18),f.Xb(36,"strong",7),f.Xc(37,"Diagnosis Code Type"),f.Wb(),f.Xb(38,"nz-select",8),f.ec("ngModelChange",function(e){return n.selectedType=e})("ngModelChange",function(){return n.getAllDiagnosisCodesByTenant()}),f.Sb(39,"nz-option",9),f.Sb(40,"nz-option",10),f.Sb(41,"nz-option",11),f.Sb(42,"nz-option",12),f.Wb(),f.Wb(),f.Wb(),f.Sb(43,"br"),f.Xb(44,"nz-table",19,20),f.Xb(46,"thead"),f.Xb(47,"tr"),f.Xb(48,"th"),f.Xc(49,"Code"),f.Wb(),f.Xb(50,"th"),f.Xc(51,"Description"),f.Wb(),f.Xb(52,"th"),f.Xc(53,"Type"),f.Wb(),f.Xb(54,"th"),f.Xc(55,"Action"),f.Wb(),f.Wb(),f.Wb(),f.Xb(56,"tbody"),f.Vc(57,U,16,6,"tr",16),f.Wb(),f.Wb(),f.Wb(),f.Wb(),f.Wb()),2&e){var t=f.Ic(17),i=f.Ic(45);f.Db(6),f.rc("ngIf",!(null==n.setOfCheckedId||!n.setOfCheckedId.size)),f.Db(4),f.rc("ngModel",n.selectedType),f.Db(6),f.rc("nzData",null==n.diagnosisCodes?null:n.diagnosisCodes.content)("nzShowPagination",!0)("nzLoading",n.loading)("nzFrontPagination",!1)("nzTotal",null==n.diagnosisCodes?null:n.diagnosisCodes.totalElements)("nzPageIndex",n.pageIndex)("nzShowSizeChanger",!0)("nzWidthConfig",f.xc(22,F))("nzPageSizeOptions",f.xc(23,V)),f.Db(4),f.rc("nzChecked",n.checked)("nzIndeterminate",n.indeterminate),f.Db(10),f.rc("ngForOf",t.data),f.Db(8),f.rc("ngModel",n.selectedType),f.Db(6),f.rc("nzData",null==n.tenantDiagnosisCodes?null:n.tenantDiagnosisCodes.codeDetails)("nzShowPagination",!0)("nzLoading",n.loading)("nzFrontPagination",!0)("nzTotal",null==n.tenantDiagnosisCodes||null==n.tenantDiagnosisCodes.codeDetails?null:n.tenantDiagnosisCodes.codeDetails.length)("nzWidthConfig",f.xc(24,K)),f.Db(13),f.rc("ngForOf",i.data)}},directives:[S.d,S.a,S.c,O.c,O.a,r.q,W.d,d.u,d.x,W.a,T.f,T.n,T.o,T.e,T.l,T.m,T.i,r.p,S.b,m.j,T.j,T.c,P.a,_.d,I.a],pipes:[r.A],styles:[".container[_ngcontent-%COMP%]:first-child{padding-top:10px!important;margin-top:-50px}#selection-message[_ngcontent-%COMP%]{margin-top:50px;padding-left:10px}#type[_ngcontent-%COMP%]{float:right;margin-right:10px;margin-top:10px}.description[_ngcontent-%COMP%]{max-width:60ch;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tab[_ngcontent-%COMP%]{color:var(--black)}[_nghost-%COMP%]     .ant-checkbox-checked .ant-checkbox-inner:after{transform:rotate(50deg) scale(.7) translate(-50%,-50%)}[_nghost-%COMP%]     .ant-checkbox-inner:after{top:25%;left:15%}[_nghost-%COMP%]     .ant-checkbox-indeterminate .ant-checkbox-inner:after{background-color:unset}"]}),B),Q=a("T5gh"),$=a("bA1+"),Y=[{path:"",component:Z,pathMatch:"full",data:k.Listing,canActivate:[Q.a,$.a]}],G=((q=function e(){o(this,e)}).\u0275mod=f.Pb({type:q}),q.\u0275inj=f.Ob({factory:function(e){return new(e||q)},imports:[[m.k.forChild(Y)],m.k]}),q),J=((H=function e(n){o(this,e),this.translationService=n,n.setLanguage()}).\u0275mod=f.Pb({type:H}),H.\u0275inj=f.Ob({factory:function(e){return new(e||H)(f.bc(h.a))},imports:[[l.a,b.a,r.c,d.o,d.B,G,u.a.forRoot()]]}),H)}}])}();