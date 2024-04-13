"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[45],{6286:(v,d,n)=>{n.d(d,{N:()=>t});var h=n(5619),c=n(4769),u=n(9862);let t=(()=>{class r{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new h.X(0)}addToCart(e){return this._HttpClient.post(this.baseUrl+"cart",{productId:e})}getUserCart(){return this._HttpClient.get(this.baseUrl+"cart")}removeItem(e){return this._HttpClient.delete(this.baseUrl+`cart/${e}`)}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}updateCart(e,o){return this._HttpClient.put(this.baseUrl+`cart/${e}`,{count:o})}checkOut(e,o){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${e}?url=http://localhost:4200`,{shippingAddress:o})}static#t=this.\u0275fac=function(o){return new(o||r)(c.LFG(u.eN))};static#e=this.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},9196:(v,d,n)=>{n.d(d,{M:()=>t});var h=n(5619),c=n(4769),u=n(9862);let t=(()=>{class r{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.wishListNumber=new h.X(0)}addToWishList(e){return this._HttpClient.post(this.baseUrl+"wishlist",{productId:e})}getWishList(){return this._HttpClient.get(this.baseUrl+"wishlist")}removeWishList(e){return this._HttpClient.delete(this.baseUrl+`wishlist/${e}`)}static#t=this.\u0275fac=function(o){return new(o||r)(c.LFG(u.eN))};static#e=this.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},4045:(v,d,n)=>{n.r(d),n.d(d,{BlankLayoutComponent:()=>g});var h=n(7913),c=n(6814),u=n(1120),t=n(4769),r=n(6286),m=n(9196);const e=["navBar"];let o=(()=>{class l{constructor(i,a,s,p){this._Router=i,this._CartService=a,this._Renderer2=s,this._WishlistService=p,this.cartNum=0,this.wishListNum=0}onScroll(){scrollY>300?(this._Renderer2.addClass(this.navElement.nativeElement,"px-5"),this._Renderer2.addClass(this.navElement.nativeElement,"py-3")):(this._Renderer2.removeClass(this.navElement.nativeElement,"px-5"),this._Renderer2.removeClass(this.navElement.nativeElement,"py-3"))}ngOnInit(){this._CartService.cartNumber.subscribe({next:i=>{this.cartNum=i}}),this._CartService.getUserCart().subscribe({next:i=>{this.cartNum=i.numOfCartItems}}),this._WishlistService.wishListNumber.subscribe({next:i=>{this.wishListNum=i,console.log(i)}}),this._WishlistService.getWishList().subscribe({next:i=>{this.wishListNum=i.count}})}logOutUser(){localStorage.removeItem("eToken"),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(a){return new(a||l)(t.Y36(u.F0),t.Y36(r.N),t.Y36(t.Qsj),t.Y36(m.M))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-nav-blank"]],viewQuery:function(a,s){if(1&a&&t.Gf(e,5),2&a){let p;t.iGM(p=t.CRH())&&(s.navElement=p.first)}},hostBindings:function(a,s){1&a&&t.NdJ("scroll",function(){return s.onScroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:43,vars:2,consts:[[1,"navbar","navbar-expand-md","bg-body-tertiary","fixed-top"],["navBar",""],[1,"container-fluid"],["routerLink","home",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt","logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLink","home","routerLinkActive","active-link",1,"nav-link","text-capitalize"],["routerLink","products","routerLinkActive","active-link",1,"nav-link","text-capitalize"],["routerLink","categories","routerLinkActive","active-link",1,"nav-link","text-capitalize"],["routerLink","brands","routerLinkActive","active-link",1,"nav-link","text-capitalize"],["routerLink","allorders","routerLinkActive","active-link",1,"nav-link","text-capitalize"],[1,"navbar-nav","ms-auto","d-flex","justify-content-center","align-items-center"],["routerLink","/profile",1,"nav-link","position-relative"],[1,"circle-icon"],[1,"fas","fa-user","fs-5","text-green"],["routerLink","/wishlist",1,"nav-link","position-relative"],[1,"fa-solid","fa-heart","fa-xl","text-danger"],[1,"badge","py-1","px-2","active-link","position-absolute","top-end"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"fas","fa-cart-shopping","fa-xl","text-grey"],[1,"nav-link","cursor-pointer","p-0","ms-3",3,"click"],[1,"btn","btn-success"]],template:function(a,s){1&a&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),t._uU(11,"home"),t.qZA()(),t.TgZ(12,"li",9)(13,"a",11),t._uU(14,"products"),t.qZA()(),t.TgZ(15,"li",9)(16,"a",12),t._uU(17,"categories"),t.qZA()(),t.TgZ(18,"li",9)(19,"a",13),t._uU(20,"brands"),t.qZA()(),t.TgZ(21,"li",9)(22,"a",14),t._uU(23,"My Orders"),t.qZA()()(),t.TgZ(24,"ul",15)(25,"li",9)(26,"a",16)(27,"div",17),t._UZ(28,"i",18),t.qZA()()(),t.TgZ(29,"li",9)(30,"a",19),t._UZ(31,"i",20),t.TgZ(32,"span",21),t._uU(33),t.qZA()()(),t.TgZ(34,"li",9)(35,"a",22),t._UZ(36,"i",23),t.TgZ(37,"span",21),t._uU(38),t.qZA()()(),t.TgZ(39,"li",9)(40,"span",24),t.NdJ("click",function(){return s.logOutUser()}),t.TgZ(41,"button",25),t._uU(42,"logout"),t.qZA()()()()()()()),2&a&&(t.xp6(33),t.Oqu(s.wishListNum),t.xp6(5),t.Oqu(s.cartNum))},dependencies:[c.ez,u.rH,u.Od],styles:["nav[_ngcontent-%COMP%]{transition:padding 1s}.top-end[_ngcontent-%COMP%]{top:-5px;right:-5px}.circle-icon[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%;border:3px solid rgb(65,134,71);display:flex;justify-content:center;align-items:center}"]})}return l})(),g=(()=>{class l{goToUp(){scrollTo(0,0)}static#t=this.\u0275fac=function(a){return new(a||l)};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:6,vars:0,consts:[[1,"container-fluid","main-section"],[1,"btn-up",3,"click"],[1,"fa-solid","fa-angle-up"]],template:function(a,s){1&a&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"),t.TgZ(4,"button",1),t.NdJ("click",function(){return s.goToUp()}),t._UZ(5,"i",2),t.qZA())},dependencies:[c.ez,o,u.lC,h.c],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh;justify-content:space-between}.main-section[_ngcontent-%COMP%]{padding-top:80px}.btn-up[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px;z-index:99;width:40px;height:40px;display:flex;justify-content:center;align-items:center;background-color:#0aad0a;border-radius:10px;color:#fff;border:unset;font-size:20px}"]})}return l})()}}]);