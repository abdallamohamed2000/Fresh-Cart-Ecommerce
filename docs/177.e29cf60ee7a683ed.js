"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[177],{5177:(C,m,l)=>{l.r(m),l.d(m,{PaymentComponent:()=>k});var i=l(95),p=l(6814),t=l(4769),f=l(1120),a=l(6286);function v(e,c){1&e&&(t.TgZ(0,"p",16),t._uU(1,"Details Is required"),t.qZA())}function s(e,c){1&e&&(t.TgZ(0,"p",16),t._uU(1,"min-length 3"),t.qZA())}function _(e,c){1&e&&(t.TgZ(0,"p",16),t._uU(1,"max-length 40"),t.qZA())}function I(e,c){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,v,2,0,"p",15),t.YNc(2,s,2,0,"p",15),t.YNc(3,_,2,0,"p",15),t.qZA()),2&e){const n=t.oxw();let r,o,u;t.xp6(1),t.Q6J("ngIf",null==(r=n.checkout.get("details"))?null:r.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(o=n.checkout.get("details"))?null:o.getError("minlength")),t.xp6(1),t.Q6J("ngIf",null==(u=n.checkout.get("details"))?null:u.getError("maxlength"))}}function T(e,c){1&e&&(t.TgZ(0,"p",16),t._uU(1,"phone Is required"),t.qZA())}function y(e,c){1&e&&(t.TgZ(0,"p",16),t._uU(1,"accept only egypt phone numbers"),t.qZA())}function Z(e,c){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,T,2,0,"p",15),t.YNc(2,y,2,0,"p",15),t.qZA()),2&e){const n=t.oxw();let r,o;t.xp6(1),t.Q6J("ngIf",null==(r=n.checkout.get("phone"))?null:r.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(o=n.checkout.get("phone"))?null:o.getError("pattern"))}}function x(e,c){1&e&&(t.TgZ(0,"p",16),t._uU(1,"City Is required"),t.qZA())}function A(e,c){1&e&&(t.TgZ(0,"p",16),t._uU(1,"min-length 3"),t.qZA())}function E(e,c){1&e&&(t.TgZ(0,"p",16),t._uU(1,"max-length 20"),t.qZA())}function P(e,c){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,x,2,0,"p",15),t.YNc(2,A,2,0,"p",15),t.YNc(3,E,2,0,"p",15),t.qZA()),2&e){const n=t.oxw();let r,o,u;t.xp6(1),t.Q6J("ngIf",null==(r=n.checkout.get("city"))?null:r.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(o=n.checkout.get("city"))?null:o.getError("minlength")),t.xp6(1),t.Q6J("ngIf",null==(u=n.checkout.get("city"))?null:u.getError("maxlength"))}}function U(e,c){1&e&&t._UZ(0,"i",17)}let k=(()=>{class e{constructor(n,r,o){this._FormBuilder=n,this._ActivatedRoute=r,this._CartService=o,this.cartId="",this.msgError="",this.isLoading=!1,this.checkout=this._FormBuilder.group({details:["",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(40)]],phone:["",[i.kI.required,i.kI.pattern(/^01[0125][0-9]{8}$/)]],city:["",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(20)]]})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:n=>{this.cartId=n.get("id")}})}handleForm(){this.checkout.valid?(this.isLoading=!0,this._CartService.checkOut(this.cartId,this.checkout.value).subscribe({next:n=>{"success"==n.status&&(this.isLoading=!1,window.open(n.session.url,"_self"))},error:n=>{this.isLoading=!1,this.msgError=n.error.message,console.log(n)}})):this.checkout.markAllAsTouched()}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(i.qu),t.Y36(f.gz),t.Y36(a.N))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-payment"]],standalone:!0,features:[t.jDz],decls:25,vars:5,consts:[[1,"shadow","p-4","rounded","my-3","w-50","mx-auto","my-4"],[3,"formGroup","ngSubmit"],[1,"h3","fw-bolder"],["for","details"],["type","text","id","details","formControlName","details",1,"form-control"],["inputDetails",""],[4,"ngIf"],["for","phone"],["type","tel","id","phone","formControlName","phone",1,"form-control"],["inputPhone",""],["for","city"],["type","text","id","city","formControlName","city",1,"form-control"],["inputCity",""],[1,"main-btn","mt-3","d-block","ms-auto"],["class","fas fa-spinner fa-spin",4,"ngIf"],["class","text-red",4,"ngIf"],[1,"text-red"],[1,"fas","fa-spinner","fa-spin"]],template:function(r,o){if(1&r&&(t.TgZ(0,"section",0)(1,"form",1),t.NdJ("ngSubmit",function(){return o.handleForm()}),t.TgZ(2,"h1",2),t._uU(3,"Enter Your Shipping Details :"),t.qZA(),t.TgZ(4,"div")(5,"label",3),t._uU(6,"Shipping Details:"),t.qZA(),t._UZ(7,"input",4,5),t.YNc(9,I,4,3,"div",6),t.qZA(),t.TgZ(10,"div")(11,"label",7),t._uU(12,"Phone"),t.qZA(),t._UZ(13,"input",8,9),t.YNc(15,Z,3,2,"div",6),t.qZA(),t.TgZ(16,"div")(17,"label",10),t._uU(18,"City"),t.qZA(),t._UZ(19,"input",11,12),t.YNc(21,P,4,3,"div",6),t.qZA(),t.TgZ(22,"button",13),t.YNc(23,U,1,0,"i",14),t._uU(24,"Checkout"),t.qZA()()()),2&r){const u=t.MAs(8),D=t.MAs(14),q=t.MAs(20);let h,g,d;t.xp6(1),t.Q6J("formGroup",o.checkout),t.xp6(8),t.Q6J("ngIf",(null==(h=o.checkout.get("details"))?null:h.errors)&&((null==(h=o.checkout.get("details"))?null:h.touched)||u.value.length>0)),t.xp6(6),t.Q6J("ngIf",(null==(g=o.checkout.get("phone"))?null:g.errors)&&((null==(g=o.checkout.get("phone"))?null:g.touched)||D.value.length)),t.xp6(6),t.Q6J("ngIf",(null==(d=o.checkout.get("city"))?null:d.errors)&&((null==(d=o.checkout.get("city"))?null:d.touched)||q.value.length>0)),t.xp6(2),t.Q6J("ngIf",o.isLoading)}},dependencies:[p.ez,p.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]})}return e})()},6286:(C,m,l)=>{l.d(m,{N:()=>f});var i=l(5619),p=l(4769),t=l(9862);let f=(()=>{class a{constructor(s){this._HttpClient=s,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new i.X(0)}addToCart(s){return this._HttpClient.post(this.baseUrl+"cart",{productId:s})}getUserCart(){return this._HttpClient.get(this.baseUrl+"cart")}removeItem(s){return this._HttpClient.delete(this.baseUrl+`cart/${s}`)}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}updateCart(s,_){return this._HttpClient.put(this.baseUrl+`cart/${s}`,{count:_})}checkOut(s,_){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${s}?url=http://localhost:4200`,{shippingAddress:_})}static#t=this.\u0275fac=function(_){return new(_||a)(p.LFG(t.eN))};static#e=this.\u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);