(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{ANCJ:function(n,e,t){"use strict";t.r(e),t.d(e,"VitalBlueprintsModule",function(){return on});var i=t("ofXK"),a=t("UFn0"),c=t("KZX/"),l=t("SHZf"),r=t("qQcL"),b=t("sG7K"),o=t("a6m8"),u=t("igu/"),s=t("fXoL"),d=t("bNXi"),g=t("B+r4"),m=t("rMZv"),p=t("Szod"),v=t("ZKr6"),h=t("glKu"),M=t("tyNb"),X=t("EGpF"),f=t("3Pt+"),I=t("qAZ0"),T=t("dRHE"),W=t("t2pg");function z(n,e){1&n&&(s.Xb(0,"th"),s.Xc(1," Sub Tenant "),s.Wb())}function D(n,e){if(1&n&&(s.Xb(0,"td"),s.Xc(1),s.jc(2,"tenantName"),s.Wb()),2&n){const n=s.ic().$implicit;s.Db(1),s.Zc(" ",s.kc(2,1,n.tenantId)," ")}}function L(n,e){if(1&n){const n=s.Yb();s.Xb(0,"nz-switch",11),s.ec("ngModelChange",function(){s.Lc(n);const e=s.ic().$implicit;return s.ic(2).changeStatus(e)}),s.Wb()}if(2&n){const n=s.ic().$implicit;s.rc("ngModel",n.active)}}const E=function(){return["CHANGE_VITAL_BLUEPRINT_STATE"]};function A(n,e){if(1&n&&(s.Xb(0,"tr"),s.Xb(1,"td"),s.Xc(2),s.Wb(),s.Vc(3,D,3,3,"td",7),s.Xb(4,"td"),s.Vc(5,L,1,1,"nz-switch",9),s.Sb(6,"app-icons",10),s.Wb(),s.Wb()),2&n){const n=e.$implicit;s.Db(2),s.Yc(null==n?null:n.label),s.Db(3),s.rc("isFeaturePermitted",s.xc(3,E)),s.Db(1),s.tc("routerLink","/vital-blueprints/",null==n?null:n.id,"")}}function C(n,e){if(1&n&&(s.Xb(0,"div",4),s.Xb(1,"nz-table",5,6),s.Xb(3,"thead"),s.Xb(4,"tr"),s.Xb(5,"th"),s.Xc(6),s.jc(7,"translate"),s.Wb(),s.Vc(8,z,2,0,"th",7),s.Xb(9,"th"),s.Xc(10),s.jc(11,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Xb(12,"tbody"),s.Vc(13,A,7,4,"tr",8),s.Wb(),s.Wb(),s.Wb()),2&n){const n=e.ngIf,t=s.Ic(2),i=s.ic();s.Db(1),s.rc("nzData",n)("nzWidthConfig",i.widthConfig),s.Db(5),s.Yc(s.kc(7,5,"COMMON.NAME")),s.Db(4),s.Yc(s.kc(11,7,"TABLEHEADER.ACTIONS")),s.Db(3),s.rc("ngForOf",t.data)}}function S(n,e){1&n&&(s.Xb(0,"div",12),s.Sb(1,"nz-spin",13),s.Wb())}let V=(()=>{class n extends r.a{constructor(n,e,t,i){super(),this._vitalsService=n,this._dataSharingService=e,this._notificationsService=t,this._vitalsEventLogger=i,this.widthConfig=["40%","40%","20%"]}ngOnInit(){this.selectedSubTenant=this.selectedAssignedSubTenant,this.isAccessAcrossSubTenants||(this.widthConfig=["80%","20%"]),this.getVitalBlueprintsForTenant(),this._dataSharingService.onSubTenantChange().subscribe(n=>this.onSubTenantChange(n))}getVitalBlueprintsForTenant(){this.vitalBlueprints$=this._vitalsService.fetchVitalBlueprintsForTenant()}changeStatus(n){this._vitalsService.changeVitalBlueprintStatus(n.id).subscribe(()=>{this._vitalsEventLogger.vitalEnableSwitchEvent(n),this._notificationsService.success("Vital Blueprints",`${n.label} updated successfully!`),this.getVitalBlueprintsForTenant()})}onSubTenantChange(n){"object"!=typeof n||""==n||null==n||null==n||(this.requestTenantIds=n),this.getVitalBlueprintsForTenant()}}return n.\u0275fac=function(e){return new(e||n)(s.Rb(b.a),s.Rb(u.a),s.Rb(d.b),s.Rb(o.a))},n.\u0275cmp=s.Lb({type:n,selectors:[["app-blueprints-list"]],features:[s.Ab],decls:6,vars:4,consts:[[1,"container"],["nz-row",""],["nz-col","","nzSpan","24",4,"ngIf","ngIfElse"],["loading",""],["nz-col","","nzSpan","24"],[3,"nzData","nzWidthConfig"],["blueprintsTable",""],[4,"isAccessAcrossTenantEnabled"],[4,"ngFor","ngForOf"],["nzSize","small",3,"ngModel","ngModelChange",4,"isFeaturePermitted"],["name","view","size","20px",3,"routerLink"],["nzSize","small",3,"ngModel","ngModelChange"],["nz-col","","nzSpan","24",2,"text-align","center","margin-top","50px"],["nzSimple","","nzTip","Loading Data..."]],template:function(n,e){if(1&n&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Vc(2,C,14,9,"div",2),s.jc(3,"async"),s.Wb(),s.Vc(4,S,2,0,"ng-template",null,3,s.Wc),s.Wb()),2&n){const n=s.Ic(5);s.Db(2),s.rc("ngIf",s.kc(3,2,e.vitalBlueprints$))("ngIfElse",n)}},directives:[g.c,i.q,g.a,m.f,m.n,m.o,m.e,m.l,p.a,m.i,i.p,v.a,h.a,M.h,X.a,f.u,f.x,I.a],pipes:[i.b,T.a,W.a],styles:["nz-switch[_ngcontent-%COMP%]{margin-right:15px}[_nghost-%COMP%]     svg{padding-top:8px!important;margin-bottom:-2px}"]}),n})();var k=t("T5gh"),O=t("bA1+"),x=t("JA5x"),y=t("PTRe"),N=t("TaO5"),_=t("5vDB"),$=t("eHCX"),j=t("QlLE"),B=t("z4wI"),R=t("OzZK"),F=t("RwU8"),w=t("C2AL");function P(n,e){if(1&n){const n=s.Yb();s.Xb(0,"div",22),s.Xb(1,"nz-card",19),s.Xb(2,"div",20),s.Xb(3,"div",4),s.Xb(4,"p"),s.Xc(5),s.jc(6,"translate"),s.Wb(),s.Xb(7,"input",5),s.ec("ngModelChange",function(n){return e.$implicit.range.maximum=n})("ngModelChange",function(){s.Lc(n);const e=s.ic(2).ngIf;return s.ic().validate(e)}),s.jc(8,"translate"),s.Wb(),s.Wb(),s.Xb(9,"div",4),s.Xb(10,"p"),s.Xc(11),s.jc(12,"translate"),s.Wb(),s.Xb(13,"input",5),s.ec("ngModelChange",function(n){return e.$implicit.range.minimum=n})("ngModelChange",function(){s.Lc(n);const e=s.ic(2).ngIf;return s.ic().validate(e)}),s.jc(14,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()}if(2&n){const n=e.$implicit;s.Db(1),s.rc("nzTitle",null==n?null:n.level)("nzBordered",!1),s.Db(4),s.Zc("",s.kc(6,8,"MAX_LIMIT"),":"),s.Db(2),s.sc("placeholder",s.kc(8,10,"MAX_LIMIT")),s.rc("ngModel",n.range.maximum),s.Db(4),s.Zc("",s.kc(12,12,"MIN_LIMIT"),":"),s.Db(2),s.sc("placeholder",s.kc(14,14,"MIN_LIMIT")),s.rc("ngModel",n.range.minimum)}}function U(n,e){if(1&n&&(s.Xb(0,"p",24),s.Xc(1),s.Wb()),2&n){const n=e.$implicit;s.Db(1),s.Yc(n)}}function Y(n,e){if(1&n&&(s.Vb(0),s.Vc(1,U,2,1,"p",23),s.Ub()),2&n){const n=s.ic().$implicit;s.Db(1),s.rc("ngForOf",n.value)}}function Z(n,e){if(1&n&&(s.Xb(0,"div"),s.Vc(1,Y,2,1,"ng-container",13),s.Wb()),2&n){const n=e.$implicit,t=s.ic().$implicit;s.Db(1),s.rc("ngIf",n.key===(null==t?null:t.type))}}function H(n,e){if(1&n&&(s.Vb(0),s.Xb(1,"div",3),s.Xb(2,"div",4),s.Xb(3,"p"),s.Xc(4),s.jc(5,"translate"),s.Wb(),s.Xb(6,"input",15),s.ec("ngModelChange",function(n){return e.$implicit.label=n}),s.Wb(),s.Wb(),s.Xb(7,"div",16),s.Xb(8,"p"),s.Xc(9),s.jc(10,"translate"),s.Wb(),s.Xb(11,"input",17),s.ec("ngModelChange",function(n){return e.$implicit.type=n}),s.Wb(),s.Wb(),s.Xb(12,"div",16),s.Xb(13,"p"),s.Xc(14),s.jc(15,"translate"),s.Wb(),s.Xb(16,"input",18),s.ec("ngModelChange",function(n){return e.$implicit.unit=n}),s.Wb(),s.Wb(),s.Wb(),s.Sb(17,"br"),s.Xb(18,"div",3),s.Xb(19,"div",4),s.Xb(20,"nz-card",19),s.jc(21,"translate"),s.Xb(22,"div",20),s.Xb(23,"div",4),s.Xb(24,"p"),s.Xc(25),s.jc(26,"translate"),s.Wb(),s.Xb(27,"input",5),s.ec("ngModelChange",function(n){return e.$implicit.validLimit.maximum=n}),s.jc(28,"translate"),s.Wb(),s.Wb(),s.Xb(29,"div",4),s.Xb(30,"p"),s.Xc(31),s.jc(32,"translate"),s.Wb(),s.Xb(33,"input",5),s.ec("ngModelChange",function(n){return e.$implicit.validLimit.minimum=n}),s.jc(34,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(35,"div",4),s.Xb(36,"nz-card",19),s.jc(37,"translate"),s.Xb(38,"div",20),s.Xb(39,"div",4),s.Xb(40,"p"),s.Xc(41),s.jc(42,"translate"),s.Wb(),s.Xb(43,"input",5),s.ec("ngModelChange",function(n){return e.$implicit.globalLimit.maximum=n}),s.jc(44,"translate"),s.Wb(),s.Wb(),s.Xb(45,"div",4),s.Xb(46,"p"),s.Xc(47),s.jc(48,"translate"),s.Wb(),s.Xb(49,"input",5),s.ec("ngModelChange",function(n){return e.$implicit.globalLimit.minimum=n}),s.jc(50,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Sb(51,"br"),s.Xb(52,"div",3),s.Vc(53,P,15,16,"div",21),s.Wb(),s.Sb(54,"br"),s.Vc(55,Z,2,1,"div",12),s.jc(56,"keyvalue"),s.Sb(57,"nz-divider"),s.Ub()),2&n){const n=e.$implicit,t=s.ic(2);s.Db(4),s.Zc("",s.kc(5,24,"COMMON.NAME"),":"),s.Db(2),s.rc("ngModel",n.label),s.Db(3),s.Zc("",s.kc(10,26,"COMMON.TYPE"),":"),s.Db(2),s.rc("ngModel",n.type),s.Db(3),s.Zc("",s.kc(15,28,"TABLEHEADER.UNIT"),":"),s.Db(2),s.rc("ngModel",n.unit),s.Db(4),s.sc("nzTitle",s.kc(21,30,"COMMON.VITALVALIDATIONS")),s.rc("nzBordered",!1),s.Db(5),s.Zc("",s.kc(26,32,"VITAL.MAXVALIDVALUE"),":"),s.Db(2),s.sc("placeholder",s.kc(28,34,"MAX_LIMIT")),s.rc("ngModel",n.validLimit.maximum),s.Db(4),s.Zc("",s.kc(32,36,"VITAL.MINVALIDVALUE"),":"),s.Db(2),s.sc("placeholder",s.kc(34,38,"MIN_LIMIT")),s.rc("ngModel",n.validLimit.minimum),s.Db(3),s.sc("nzTitle",s.kc(37,40,"COMMON.VITALLIMITALERT")),s.rc("nzBordered",!1),s.Db(5),s.Zc("",s.kc(42,42,"MAX_LIMIT"),":"),s.Db(2),s.sc("placeholder",s.kc(44,44,"MAX_LIMIT")),s.rc("ngModel",n.globalLimit.maximum),s.Db(4),s.Zc("",s.kc(48,46,"MIN_LIMIT"),":"),s.Db(2),s.sc("placeholder",s.kc(50,48,"MIN_LIMIT")),s.rc("ngModel",n.globalLimit.minimum),s.Db(4),s.rc("ngForOf",null==n?null:n.limits),s.Db(2),s.rc("ngForOf",s.kc(56,50,t.errors))}}function G(n,e){1&n&&s.Sb(0,"nz-empty")}function q(n,e){if(1&n&&(s.Xb(0,"div",29),s.Xb(1,"div",30),s.Xb(2,"div",26),s.Xb(3,"input",25),s.ec("ngModelChange",function(n){return e.$implicit.label=n}),s.jc(4,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Sb(5,"nz-divider"),s.Xb(6,"div",30),s.Xb(7,"div",4),s.Xb(8,"p"),s.Xc(9),s.jc(10,"translate"),s.Wb(),s.Xb(11,"nz-input-number",31),s.ec("ngModelChange",function(n){return e.$implicit.limit.maximum=n}),s.Wb(),s.Wb(),s.Xb(12,"div",4),s.Xb(13,"p"),s.Xc(14),s.jc(15,"translate"),s.Wb(),s.Xb(16,"nz-input-number",31),s.ec("ngModelChange",function(n){return e.$implicit.limit.minimum=n}),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&n){const n=e.$implicit;s.Db(3),s.sc("placeholder",s.kc(4,6,"VITAL.CONTEXT_ANSWER")),s.rc("ngModel",n.label),s.Db(6),s.Yc(s.kc(10,8,"MAX_LIMIT")),s.Db(2),s.rc("ngModel",n.limit.maximum),s.Db(3),s.Yc(s.kc(15,10,"MIN_LIMIT")),s.Db(2),s.rc("ngModel",n.limit.minimum)}}function K(n,e){if(1&n&&(s.Vb(0),s.Xb(1,"div",3),s.Xb(2,"div",4),s.Xb(3,"input",25),s.ec("ngModelChange",function(n){return e.$implicit.label=n}),s.jc(4,"translate"),s.Wb(),s.Wb(),s.Xb(5,"div",6),s.Xb(6,"label",7),s.ec("ngModelChange",function(n){return e.$implicit.graphEnabled=n}),s.Xc(7),s.jc(8,"translate"),s.Wb(),s.Wb(),s.Xb(9,"div",10),s.Xb(10,"label",7),s.ec("ngModelChange",function(n){return e.$implicit.required=n}),s.Xc(11),s.jc(12,"translate"),s.Wb(),s.Wb(),s.Xb(13,"div",8),s.Xb(14,"label",7),s.ec("ngModelChange",function(n){return e.$implicit.active=n}),s.Xc(15),s.jc(16,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Sb(17,"br"),s.Xb(18,"div",3),s.Xb(19,"div",26),s.Xb(20,"nz-card",27),s.jc(21,"translate"),s.Vc(22,q,17,12,"div",28),s.Wb(),s.Wb(),s.Wb(),s.Sb(23,"nz-divider"),s.Ub()),2&n){const n=e.$implicit;s.Db(3),s.sc("placeholder",s.kc(4,10,"VITAL.CONTEXT_QUESTION")),s.rc("ngModel",n.label),s.Db(3),s.rc("ngModel",n.graphEnabled),s.Db(1),s.Yc(s.kc(8,12,"COMMON.GRAPH")),s.Db(3),s.rc("ngModel",n.required),s.Db(1),s.Yc(s.kc(12,14,"COMMON.REQUIRED")),s.Db(3),s.rc("ngModel",n.active),s.Db(1),s.Yc(s.kc(16,16,"COMMON.ACTIVE")),s.Db(5),s.sc("nzTitle",s.kc(21,18,"VITAL.CONTEXT_ANSWER")),s.Db(2),s.rc("ngForOf",null==n?null:n.options)}}function J(n,e){if(1&n){const n=s.Yb();s.Xb(0,"button",33),s.ec("click",function(){s.Lc(n);const e=s.ic(2).ngIf;return s.ic().updateBlueprint(e)}),s.Xc(1),s.jc(2,"translate"),s.Wb()}2&n&&(s.Db(1),s.Zc(" ",s.kc(2,1,"VITAL_BLUEPRINT.SAVE")," "))}const Q=function(){return["EDIT_VITAL_BLUEPRINT"]};function nn(n,e){1&n&&s.Vc(0,J,3,3,"button",32),2&n&&s.rc("isFeaturePermitted",s.xc(1,Q))}function en(n,e){if(1&n&&(s.Xb(0,"div",1),s.Xb(1,"nz-card",2),s.jc(2,"translate"),s.Xb(3,"div",3),s.Xb(4,"div",4),s.Xb(5,"input",5),s.ec("ngModelChange",function(n){return e.ngIf.label=n}),s.jc(6,"translate"),s.Wb(),s.Wb(),s.Xb(7,"div",6),s.Xb(8,"label",7),s.ec("ngModelChange",function(n){return e.ngIf.graphEnabled=n}),s.Xc(9),s.jc(10,"translate"),s.Wb(),s.Wb(),s.Xb(11,"div",8),s.Xb(12,"label",7),s.ec("ngModelChange",function(n){return e.ngIf.active=n}),s.Xc(13),s.jc(14,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Xb(15,"div",3),s.Xb(16,"div",9),s.Xb(17,"strong"),s.Xc(18),s.jc(19,"translate"),s.Wb(),s.Wb(),s.Xb(20,"div",10),s.Xb(21,"label",7),s.ec("ngModelChange",function(n){return e.ngIf.notify.patient=n}),s.Xc(22),s.jc(23,"translate"),s.Wb(),s.Wb(),s.Xb(24,"div",10),s.Xb(25,"label",7),s.ec("ngModelChange",function(n){return e.ngIf.notify.caretaker=n}),s.Xc(26),s.jc(27,"translate"),s.Wb(),s.Wb(),s.Xb(28,"div",8),s.Xb(29,"label",7),s.ec("ngModelChange",function(n){return e.ngIf.notify.guardian=n}),s.Xc(30),s.jc(31,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Sb(32,"nz-divider"),s.Xb(33,"nz-card",11),s.jc(34,"translate"),s.Vc(35,H,58,52,"ng-container",12),s.Wb(),s.Sb(36,"nz-divider"),s.Xb(37,"nz-card",11),s.jc(38,"translate"),s.Vc(39,G,1,0,"nz-empty",13),s.Sb(40,"br"),s.Vc(41,K,24,20,"ng-container",12),s.Wb(),s.Vc(42,nn,1,2,"ng-template",null,14,s.Wc),s.Wb()),2&n){const n=e.ngIf,t=s.Ic(43);s.Db(1),s.uc("nzTitle","",s.kc(2,24,"VITAL_BLUEPRINTS.BLUEPRINT"),": ",null==n?null:n.label,""),s.rc("nzExtra",t)("nzHoverable",!0),s.Db(4),s.sc("placeholder",s.kc(6,26,"COMMON.NAME")),s.rc("ngModel",n.label),s.Db(3),s.rc("ngModel",n.graphEnabled),s.Db(1),s.Yc(s.kc(10,28,"COMMON.GRAPH")),s.Db(3),s.rc("ngModel",n.active),s.Db(1),s.Yc(s.kc(14,30,"COMMON.ACTIVE")),s.Db(5),s.Zc("",s.kc(19,32,"COMMON.NOTIFY"),":"),s.Db(3),s.rc("ngModel",n.notify.patient),s.Db(1),s.Yc(s.kc(23,34,"HEADER.PATIENTS")),s.Db(3),s.rc("ngModel",n.notify.caretaker),s.Db(1),s.Yc(s.kc(27,36,"FORM.CARETAKER")),s.Db(3),s.rc("ngModel",n.notify.guardian),s.Db(1),s.Yc(s.kc(31,38,"GUARDIAN")),s.Db(3),s.sc("nzTitle",s.kc(34,40,"VITAL.PARAMETERS")),s.rc("nzHoverable",!0),s.Db(2),s.rc("ngForOf",null==n?null:n.parameters),s.Db(2),s.sc("nzTitle",s.kc(38,42,"CONTEXT.FIELDS")),s.rc("nzHoverable",!0),s.Db(2),s.rc("ngIf",!(null!=n&&n.contexts&&null!=n&&null!=n.contexts&&n.contexts.length)),s.Db(2),s.rc("ngForOf",null==n?null:n.contexts)}}let tn=(()=>{class n extends r.a{constructor(n,e,t,i,a){super(),this._router=n,this._notificationsService=e,this._vitalBlueprintsService=t,this._vitalsEventLogger=i,this._activatedRoute=a,this.errors=new Map}ngOnInit(){this.getBlueprintId(),this.getVitalBlueprintById()}getBlueprintId(){this.blueprintId=this._activatedRoute.snapshot.paramMap.get("id")}getVitalBlueprintById(){this.vitalBlueprint$=this._vitalBlueprintsService.fetchVitalBlueprintById(this.blueprintId)}validate(n){n.parameters.forEach(e=>{const t=[];e.limits.forEach((i,a)=>{var c,l,r,b;(null===(c=null==i?void 0:i.range)||void 0===c?void 0:c.maximum)&&(i.range.maximum=parseFloat(`${null===(l=null==i?void 0:i.range)||void 0===l?void 0:l.maximum}`)),(null===(r=null==i?void 0:i.range)||void 0===r?void 0:r.minimum)&&(i.range.minimum=parseFloat(`${null===(b=null==i?void 0:i.range)||void 0===b?void 0:b.minimum}`)),i.range.maximum==i.range.minimum&&t.push(`${i.level} Maximum and Minimum values cannot be same.`),i.range.maximum<i.range.minimum&&t.push(`${i.level} Maximum value cannot be lesser than Minimum value.`),n.parameters.forEach(n=>{e.type===n.type&&n.limits.forEach((n,e)=>{i.level!==n.level&&(a>=e||(i.range.maximum==n.range.maximum&&t.push(`${i.level} Maximum and ${n.level} Maximum values cannot be same.`),i.range.maximum==n.range.minimum&&t.push(`${i.level} Maximum and ${n.level} Minimum values cannot be same.`),i.range.minimum==n.range.minimum&&t.push(`${i.level} Minimum and ${n.level} Minimum values cannot be same.`),i.range.minimum==n.range.maximum&&t.push(`${i.level} Minimum and ${n.level} Maximum values cannot be same.`),n.range.minimum<i.range.maximum&&t.push(`${i.level} Maximum value cannot be greater than ${n.level} Minimum value.`),n.range.maximum<i.range.maximum&&t.push(`${i.level} Maximum value cannot be greater than ${n.level} Maximum value.`)))})})}),this.errors.set(e.type,t)});let e=!0;return this.errors.forEach((n,t)=>{n.length&&(e=!1)}),e}updateBlueprint(n){this.validate(n)&&this._vitalBlueprintsService.updateVitalBlueprint(n).subscribe(()=>{this._vitalsEventLogger.vitalBlueprintUpdateEvent(n),this._notificationsService.success("Vital Blueprints",`${n.label} updated successfully!`),this._router.navigate(["vital-blueprints"])})}}return n.\u0275fac=function(e){return new(e||n)(s.Rb(M.g),s.Rb(d.b),s.Rb(b.a),s.Rb(o.a),s.Rb(M.a))},n.\u0275cmp=s.Lb({type:n,selectors:[["app-details"]],features:[s.Ab],decls:2,vars:3,consts:[["class","container",4,"ngIf"],[1,"container"],["nzType","inner",3,"nzTitle","nzExtra","nzHoverable"],["nz-row","","nzGutter","32"],["nz-col","","nzSpan","12"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["nz-col","","nzSpan","3","nzOffset","2"],["nz-checkbox","",3,"ngModel","ngModelChange"],["nz-col","","nzSpan","4"],["nz-col","","nzSpan","2","nzOffset","12"],["nz-col","","nzSpan","3"],["nzType","inner",3,"nzTitle","nzHoverable"],[4,"ngFor","ngForOf"],[4,"ngIf"],["actions",""],["nz-input","","placeholder","Parameter Name",3,"ngModel","ngModelChange"],["nz-col","","nzSpan","6"],["disabled","","nz-input","","placeholder","Parameter Type",3,"ngModel","ngModelChange"],["disabled","","nz-input","","placeholder","",3,"ngModel","ngModelChange"],[3,"nzTitle","nzBordered"],["nz-row","","nzGutter","8"],["nz-col","","nzSpan","8",4,"ngFor","ngForOf"],["nz-col","","nzSpan","8"],["nz-typography","","nzType","danger",4,"ngFor","ngForOf"],["nz-typography","","nzType","danger"],["disabled","","nz-input","",3,"placeholder","ngModel","ngModelChange"],["nz-col","","nzSpan","24"],[3,"nzTitle"],["nz-card-grid","",4,"ngFor","ngForOf"],["nz-card-grid",""],["nz-row","","nzGutter","32",1,"text-center"],[3,"ngModel","ngModelChange"],["nz-button","","nzType","primary",3,"click",4,"isFeaturePermitted"],["nz-button","","nzType","primary",3,"click"]],template:function(n,e){1&n&&(s.Vc(0,en,44,44,"div",0),s.jc(1,"async")),2&n&&s.rc("ngIf",s.kc(1,1,e.vitalBlueprint$))},directives:[i.q,x.a,g.c,g.a,y.b,f.d,f.u,f.x,N.a,_.a,i.p,$.a,j.b,x.b,B.a,v.a,R.a,F.a,w.a],pipes:[i.b,T.a,i.j],styles:[".text-center[_ngcontent-%COMP%]{text-align:center}"]}),n})();var an=t("0W7X");const cn={Listing:{header:!0,title:"VITAL_BLUEPRINTS.TITLE",searchEnabled:!1,primaryAction:{},secondaryAction:{},multiAction:{},privileges:[an.a.VIEW_VITAL_BLUEPRINT],showTenantToggle:!0,subTenantToggleMode:"SINGLE"},Detail:{header:!0,title:"VITAL_BLUEPRINT.TITLE",searchEnabled:!1,primaryAction:{},secondaryAction:{},multiAction:{},privileges:[an.a.VIEW_VITAL_BLUEPRINT],showTenantToggle:!1}},ln=[{path:"",pathMatch:"full",data:cn.Listing,component:V,canActivate:[k.a,O.a]},{path:":id",data:cn.Detail,component:tn,canActivate:[k.a,O.a]}];let rn=(()=>{class n{}return n.\u0275mod=s.Pb({type:n}),n.\u0275inj=s.Ob({factory:function(e){return new(e||n)},imports:[[M.k.forChild(ln)],M.k]}),n})();var bn=t("WoUL");let on=(()=>{class n{constructor(n){this.translationService=n,n.setLanguage()}}return n.\u0275mod=s.Pb({type:n}),n.\u0275inj=s.Ob({factory:function(e){return new(e||n)(s.bc(bn.a))},imports:[[i.c,rn,c.a,a.a,f.o,l.a.forRoot()]]}),n})()}}]);