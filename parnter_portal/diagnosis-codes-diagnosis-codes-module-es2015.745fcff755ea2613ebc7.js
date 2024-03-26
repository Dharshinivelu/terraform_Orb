(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{bCUR:function(e,n,t){"use strict";t.r(n),t.d(n,"DiagnosisCodesModule",function(){return F});var i=t("ofXK"),s=t("3Pt+"),o=t("KZX/"),a=t("SHZf"),c=t("UFn0"),d=t("WoUL"),r=t("AytR"),l=t("tk/3"),h=t("fXoL");let b=(()=>{class e{constructor(e){this._http=e,this.rootURL=r.g.url}fetchAllDiagnosisCodes(e=0,n=10,t,i){const s=`${this.rootURL}/v3/diagnosis-codes`,o={pageNumber:e,limit:n,searchKey:t,type:i};let a=new l.h;return Object.keys(o).forEach(e=>o[e]&&(a=a.append(e,o[e]))),this._http.get(s,{params:a})}fetchAllDiagnosisCodesByTenant(e,n){const t=`${this.rootURL}/v3/diagnosis-codes/tenant`,i={searchKey:e,type:n};let s=new l.h;return Object.keys(i).forEach(e=>i[e]&&(s=s.append(e,i[e]))),this._http.get(t,{params:s})}updateOne(e){return this._http.put(`${this.rootURL}/v3/diagnosis-codes/tenant/${null==e?void 0:e.diagnosisCodeId}`,e)}updateMultiple(e){return this._http.post(`${this.rootURL}/v3/diagnosis-codes/tenant`,e)}fetchDiagnosisCodesByCodes(e){const n=`${this.rootURL}/v3/diagnosis-codes/details`,t={codes:e};let i=new l.h;return Object.keys(t).forEach(e=>t[e]&&(i=i.append(e,t[e]))),this._http.get(n,{params:i})}}return e.\u0275fac=function(n){return new(n||e)(h.bc(l.c))},e.\u0275prov=h.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=t("qQcL"),g=t("pLZG"),p=t("1G5W");const C={Listing:{header:!0,title:"Diagnosis Codes",searchEnabled:!0,primaryAction:{},secondaryAction:{},multiAction:{title:"Convert To",actions:[{title:"Chronic",value:"CHRONIC"},{title:"Non-chronic",value:"NON_CHRONIC"},{title:"Undetermined",value:"UNDETERMINED"}],enabled:!0},showTenantToggle:!0,subTenantToggleMode:"SINGLE"}};var f=t("igu/"),z=t("tyNb"),y=t("bNXi"),X=t("oyxB"),D=t("B+r4"),m=t("zAKX"),v=t("rMZv"),k=t("eHCX"),S=t("nJia"),W=t("ZyQt");const O=function(){return["."]},T=function(){return{type:"default"}};function I(e,n){1&e&&(h.Xb(0,"a",21),h.Xc(1,"Default"),h.Wb()),2&e&&h.rc("routerLink",h.xc(2,O))("queryParams",h.xc(3,T))}function P(e,n){if(1&e&&(h.Xb(0,"strong"),h.Xc(1),h.Wb()),2&e){const e=h.ic();h.Db(1),h.Zc(" Selected ",null==e.setOfCheckedId?null:e.setOfCheckedId.size," diagnosis codes ")}}function M(e,n){if(1&e&&(h.Xb(0,"nz-tag",26),h.Xc(1),h.Wb()),2&e){const e=n.$implicit;h.rc("nzColor","blue"),h.Db(1),h.Zc(" ",e," ")}}function _(e,n){1&e&&(h.Vb(0),h.Xc(1,"N/A"),h.Ub())}function L(e,n){if(1&e){const e=h.Yb();h.Xb(0,"tr"),h.Xb(1,"td",22),h.ec("nzCheckedChange",function(t){h.Lc(e);const i=n.$implicit;return h.ic().onItemChecked(null==i?null:i.id,t)}),h.Wb(),h.Xb(2,"td"),h.Xb(3,"strong"),h.Xc(4),h.jc(5,"titlecase"),h.Wb(),h.Wb(),h.Xb(6,"td",23),h.Xb(7,"span",24),h.Xc(8),h.Wb(),h.Wb(),h.Xb(9,"td"),h.Vc(10,M,2,2,"nz-tag",25),h.Vc(11,_,2,0,"ng-container",5),h.Wb(),h.Xb(12,"td"),h.Xc(13),h.Wb(),h.Wb()}if(2&e){const e=n.$implicit,t=h.ic();h.Db(1),h.rc("nzChecked",t.setOfCheckedId.has(null==e?null:e.id)),h.Db(3),h.Yc(h.kc(5,7,null==e?null:e.code)),h.Db(3),h.rc("nzTooltipTitle",null==e?null:e.description),h.Db(1),h.Zc(" ",null==e?null:e.description," "),h.Db(2),h.rc("ngForOf",null==e?null:e.supportedProgrammes),h.Db(1),h.rc("ngIf",!(null!=e&&null!=e.supportedProgrammes&&e.supportedProgrammes.length)),h.Db(2),h.Zc(" ",null==t.typeMap?null:t.typeMap.get(null==e?null:e.type)," ")}}const A=function(){return{type:"updated"}};function w(e,n){1&e&&(h.Xb(0,"a",21),h.Xc(1,"Updated"),h.Wb()),2&e&&h.rc("routerLink",h.xc(2,O))("queryParams",h.xc(3,A))}function x(e,n){if(1&e){const e=h.Yb();h.Xb(0,"tr"),h.Xb(1,"td"),h.Xb(2,"strong"),h.Xc(3),h.jc(4,"titlecase"),h.Wb(),h.Wb(),h.Xb(5,"td",23),h.Xb(6,"span",24),h.Xc(7),h.Wb(),h.Wb(),h.Xb(8,"td"),h.Xb(9,"nz-select",8),h.ec("ngModelChange",function(e){return n.$implicit.type=e}),h.Sb(10,"nz-option",10),h.Sb(11,"nz-option",11),h.Sb(12,"nz-option",12),h.Wb(),h.Wb(),h.Xb(13,"td"),h.Xb(14,"a",27),h.ec("click",function(){h.Lc(e);const t=n.$implicit;return h.ic().updateTenantDiagnosisCode(null==t?null:t.id,null==t?null:t.type)}),h.Xc(15," Save "),h.Wb(),h.Wb(),h.Wb()}if(2&e){const e=n.$implicit;h.Db(3),h.Yc(h.kc(4,4,null==e?null:e.code)),h.Db(3),h.rc("nzTooltipTitle",null==e?null:e.description),h.Db(1),h.Zc(" ",null==e?null:e.description," "),h.Db(2),h.rc("ngModel",e.type)}}const R=function(){return["2%","15%","30%","25%","20%"]},N=function(){return[10,20,30,50,100]},E=function(){return["15%","45%","20%","15%"]};let U=(()=>{class e extends u.a{constructor(e,n,t,i,s){super(),this._router=e,this._activatedRoute=n,this._diagnosisCodesService=t,this._notificationsService=i,this._dataSharingService=s,this.pageIndex=1,this.checked=!1,this.indeterminate=!1,this.setOfCheckedId=new Set,this.typeMap=new Map([["CHRONIC","Chronic"],["NON_CHRONIC","Non-chronic"],["UNDETERMINED","Undetermined"]]),this.clearState(),this._routeHelperService.getSearch().pipe(Object(g.a)(e=>e!=this.searchKey),Object(p.a)(this.unsubscribed)).subscribe(e=>{this.searchKey=e,"default"===this._activatedRoute.snapshot.queryParamMap.get("type")?this.getAllDiagnosisCodes():"updated"===this._activatedRoute.snapshot.queryParamMap.get("type")&&this.getAllDiagnosisCodesByTenant()}),this._routeHelperService.getMultiActionTriggered().pipe(Object(g.a)(e=>!!e),Object(p.a)(this.unsubscribed)).subscribe(e=>{this.updateMultipleTenantDiagnosisCodes(e)})}ngOnInit(){this._dataSharingService.onSubTenantChange().pipe(Object(p.a)(this.unsubscribed)).subscribe(e=>this.getAllDiagnosisCodesByTenant())}getAllDiagnosisCodes(e=1,n=10){this.loading=!0,this.checked=!1,this._diagnosisCodesService.fetchAllDiagnosisCodes(e-1,n,this.searchKey,this.selectedType).subscribe(e=>{this.diagnosisCodes=e,this.loading=!1})}getAllDiagnosisCodesByTenant(){this.loading=!0,this._diagnosisCodesService.fetchAllDiagnosisCodesByTenant(this.searchKey,this.selectedType).subscribe(e=>{this.tenantDiagnosisCodes=e,this.loading=!1})}onQueryParamsChange(e){const{pageIndex:n,pageSize:t}=e;this.getAllDiagnosisCodes(n,t)}updateTenantDiagnosisCode(e,n){this._diagnosisCodesService.updateOne({diagnosisCodeId:e,type:n}).subscribe(()=>{this._notificationsService.success("Diagnosis Codes","Code type updated successfully!")})}updateMultipleTenantDiagnosisCodes(e){const n=[];this.setOfCheckedId.forEach(t=>{n.push({diagnosisCodeId:t,type:e})}),this._diagnosisCodesService.updateMultiple({codes:n}).subscribe(()=>{this._notificationsService.success("Diagnosis Codes","Codes type updated successfully!"),this.getAllDiagnosisCodesByTenant(),this._router.navigate(["diagnosis-codes"],{queryParams:{type:"updated"}})})}updateCheckedSet(e,n){n?this.setOfCheckedId.add(e):this.setOfCheckedId.delete(e)}refreshCheckedStatus(){var e,n,t,i;this.checked=null===(n=null===(e=this.diagnosisCodes)||void 0===e?void 0:e.content)||void 0===n?void 0:n.every(({id:e})=>this.setOfCheckedId.has(e)),this.indeterminate=(null===(i=null===(t=this.diagnosisCodes)||void 0===t?void 0:t.content)||void 0===i?void 0:i.some(({id:e})=>this.setOfCheckedId.has(e)))&&!this.checked}onItemChecked(e,n){this.updateCheckedSet(e,n),this.refreshCheckedStatus()}onAllChecked(e){var n,t;null===(t=null===(n=this.diagnosisCodes)||void 0===n?void 0:n.content)||void 0===t||t.forEach(({id:n})=>this.updateCheckedSet(n,e)),this.refreshCheckedStatus()}clearState(){this.searchKey=void 0,this.setOfCheckedId=new Set,this.selectedType="ALL","default"===this._activatedRoute.snapshot.queryParamMap.get("type")?this._routeHelperService.setMultiAction(C.Listing.multiAction):this._routeHelperService.setMultiAction(void 0)}}return e.\u0275fac=function(n){return new(n||e)(h.Rb(z.g),h.Rb(z.a),h.Rb(b),h.Rb(y.b),h.Rb(f.a))},e.\u0275cmp=h.Lb({type:e,selectors:[["app-diagnosis-codes"]],features:[h.Ab],decls:58,vars:25,consts:[["nzLinkRouter","",3,"nzSelectedIndexChange"],["class","tab","nz-tab-link","","queryParamsHandling","merge",3,"routerLink","queryParams",4,"nzTabLink"],[1,"container"],["nz-row",""],["nz-col","","nzSpan","4","id","selection-message"],[4,"ngIf"],["nz-col","","nzOffset","16","nzSpan","4"],["id","type"],[3,"ngModel","ngModelChange"],["nzValue","ALL","nzLabel","All"],["nzValue","CHRONIC","nzLabel","Chronic"],["nzValue","NON_CHRONIC","nzLabel","Non-chronic"],["nzValue","UNDETERMINED","nzLabel","Undetermined"],[3,"nzData","nzShowPagination","nzLoading","nzFrontPagination","nzTotal","nzPageIndex","nzShowSizeChanger","nzWidthConfig","nzPageSizeOptions","nzQueryParams"],["diagnosisCodesTable",""],["id","selection-th",3,"nzChecked","nzIndeterminate","nzCheckedChange"],[4,"ngFor","ngForOf"],[3,"nzClick"],["nz-col","","nzOffset","20","nzSpan","4"],["nzShowSizeChanger","",3,"nzData","nzShowPagination","nzLoading","nzFrontPagination","nzTotal","nzWidthConfig"],["tenantDiagnosisCodesTable",""],["nz-tab-link","","queryParamsHandling","merge",1,"tab",3,"routerLink","queryParams"],[3,"nzChecked","nzCheckedChange"],["nzEllipsis",""],["nz-typography","","nzEllipsis","","nz-tooltip","",1,"description",3,"nzTooltipTitle"],[3,"nzColor",4,"ngFor","ngForOf"],[3,"nzColor"],[3,"click"]],template:function(e,n){if(1&e&&(h.Xb(0,"nz-tabset",0),h.ec("nzSelectedIndexChange",function(){return n.clearState()}),h.Xb(1,"nz-tab"),h.Vc(2,I,2,4,"a",1),h.Xb(3,"div",2),h.Xb(4,"div",3),h.Xb(5,"div",4),h.Vc(6,P,2,1,"strong",5),h.Wb(),h.Xb(7,"div",6),h.Xb(8,"strong",7),h.Xc(9,"Diagnosis Code Type"),h.Wb(),h.Xb(10,"nz-select",8),h.ec("ngModelChange",function(e){return n.selectedType=e})("ngModelChange",function(){return n.getAllDiagnosisCodes()}),h.Sb(11,"nz-option",9),h.Sb(12,"nz-option",10),h.Sb(13,"nz-option",11),h.Sb(14,"nz-option",12),h.Wb(),h.Wb(),h.Wb(),h.Sb(15,"br"),h.Xb(16,"nz-table",13,14),h.ec("nzQueryParams",function(e){return n.onQueryParamsChange(e)}),h.Xb(18,"thead"),h.Xb(19,"tr"),h.Xb(20,"th",15),h.ec("nzCheckedChange",function(e){return n.onAllChecked(e)}),h.Wb(),h.Xb(21,"th"),h.Xc(22,"Code"),h.Wb(),h.Xb(23,"th"),h.Xc(24,"Description"),h.Wb(),h.Xb(25,"th"),h.Xc(26,"Supported Programs"),h.Wb(),h.Xb(27,"th"),h.Xc(28,"Type"),h.Wb(),h.Wb(),h.Wb(),h.Xb(29,"tbody"),h.Vc(30,L,14,9,"tr",16),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Xb(31,"nz-tab",17),h.ec("nzClick",function(){return n.getAllDiagnosisCodesByTenant()}),h.Vc(32,w,2,4,"a",1),h.Xb(33,"div",2),h.Xb(34,"div",3),h.Xb(35,"div",18),h.Xb(36,"strong",7),h.Xc(37,"Diagnosis Code Type"),h.Wb(),h.Xb(38,"nz-select",8),h.ec("ngModelChange",function(e){return n.selectedType=e})("ngModelChange",function(){return n.getAllDiagnosisCodesByTenant()}),h.Sb(39,"nz-option",9),h.Sb(40,"nz-option",10),h.Sb(41,"nz-option",11),h.Sb(42,"nz-option",12),h.Wb(),h.Wb(),h.Wb(),h.Sb(43,"br"),h.Xb(44,"nz-table",19,20),h.Xb(46,"thead"),h.Xb(47,"tr"),h.Xb(48,"th"),h.Xc(49,"Code"),h.Wb(),h.Xb(50,"th"),h.Xc(51,"Description"),h.Wb(),h.Xb(52,"th"),h.Xc(53,"Type"),h.Wb(),h.Xb(54,"th"),h.Xc(55,"Action"),h.Wb(),h.Wb(),h.Wb(),h.Xb(56,"tbody"),h.Vc(57,x,16,6,"tr",16),h.Wb(),h.Wb(),h.Wb(),h.Wb(),h.Wb()),2&e){const e=h.Ic(17),t=h.Ic(45);h.Db(6),h.rc("ngIf",!(null==n.setOfCheckedId||!n.setOfCheckedId.size)),h.Db(4),h.rc("ngModel",n.selectedType),h.Db(6),h.rc("nzData",null==n.diagnosisCodes?null:n.diagnosisCodes.content)("nzShowPagination",!0)("nzLoading",n.loading)("nzFrontPagination",!1)("nzTotal",null==n.diagnosisCodes?null:n.diagnosisCodes.totalElements)("nzPageIndex",n.pageIndex)("nzShowSizeChanger",!0)("nzWidthConfig",h.xc(22,R))("nzPageSizeOptions",h.xc(23,N)),h.Db(4),h.rc("nzChecked",n.checked)("nzIndeterminate",n.indeterminate),h.Db(10),h.rc("ngForOf",e.data),h.Db(8),h.rc("ngModel",n.selectedType),h.Db(6),h.rc("nzData",null==n.tenantDiagnosisCodes?null:n.tenantDiagnosisCodes.codeDetails)("nzShowPagination",!0)("nzLoading",n.loading)("nzFrontPagination",!0)("nzTotal",null==n.tenantDiagnosisCodes||null==n.tenantDiagnosisCodes.codeDetails?null:n.tenantDiagnosisCodes.codeDetails.length)("nzWidthConfig",h.xc(24,E)),h.Db(13),h.rc("ngForOf",t.data)}},directives:[X.d,X.a,X.c,D.c,D.a,i.q,m.d,s.u,s.x,m.a,v.f,v.n,v.o,v.e,v.l,v.m,v.i,i.p,X.b,z.j,v.j,v.c,k.a,S.d,W.a],pipes:[i.A],styles:[".container[_ngcontent-%COMP%]:first-child{padding-top:10px!important;margin-top:-50px}#selection-message[_ngcontent-%COMP%]{margin-top:50px;padding-left:10px}#type[_ngcontent-%COMP%]{float:right;margin-right:10px;margin-top:10px}.description[_ngcontent-%COMP%]{max-width:60ch;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tab[_ngcontent-%COMP%]{color:var(--black)}[_nghost-%COMP%]     .ant-checkbox-checked .ant-checkbox-inner:after{transform:rotate(50deg) scale(.7) translate(-50%,-50%)}[_nghost-%COMP%]     .ant-checkbox-inner:after{top:25%;left:15%}[_nghost-%COMP%]     .ant-checkbox-indeterminate .ant-checkbox-inner:after{background-color:unset}"]}),e})();var j=t("T5gh"),H=t("bA1+");const q=[{path:"",component:U,pathMatch:"full",data:C.Listing,canActivate:[j.a,H.a]}];let B=(()=>{class e{}return e.\u0275mod=h.Pb({type:e}),e.\u0275inj=h.Ob({factory:function(n){return new(n||e)},imports:[[z.k.forChild(q)],z.k]}),e})(),F=(()=>{class e{constructor(e){this.translationService=e,e.setLanguage()}}return e.\u0275mod=h.Pb({type:e}),e.\u0275inj=h.Ob({factory:function(n){return new(n||e)(h.bc(d.a))},imports:[[o.a,c.a,i.c,s.o,s.B,B,a.a.forRoot()]]}),e})()}}]);