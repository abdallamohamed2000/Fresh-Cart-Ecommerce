"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[937],{937:(u,i,r)=>{r.r(i),r.d(i,{CategoriesComponent:()=>g});var n=r(1120),c=r(6814),t=r(4769),a=r(0);const _=function(o){return["/categorydetails",o]};function e(o,d){if(1&o&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"h3",6),t._uU(4),t.qZA()()()),2&o){const s=d.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,_,s._id)),t.xp6(1),t.Q6J("src",s.image,t.LSH)("alt",s.name),t.xp6(2),t.Oqu(s.name)}}let g=(()=>{class o{constructor(s){this._ProductService=s,this.categoryData=[]}ngOnInit(){this._ProductService.getCategories().subscribe({next:s=>{this.categoryData=s.data}})}static#t=this.\u0275fac=function(l){return new(l||o)(t.Y36(a.M))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-categories"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"my-4"],[1,"row","g-4","row-cols-1","row-cols-sm-2","row-cols-md-3","row-cols-lg-4","row-cols-xl-5"],["class","col",4,"ngFor","ngForOf"],[1,"col"],["role","button",1,"border","overflow-hidden","rounded","shadow",3,"routerLink"],["height","300",1,"w-100",3,"src","alt"],[1,"h6","text-center","text-main","py-3"]],template:function(l,h){1&l&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,e,5,6,"div",2),t.qZA()()),2&l&&(t.xp6(2),t.Q6J("ngForOf",h.categoryData))},dependencies:[c.ez,c.sg,n.rH]})}return o})()},0:(u,i,r)=>{r.d(i,{M:()=>t});var n=r(4769),c=r(9862);let t=(()=>{class a{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(e=1){return this._HttpClient.get(this.baseUrl+`products?page=${e}`)}getProductsDetails(e){return this._HttpClient.get(this.baseUrl+`products/${e}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getCategoryDetails(e){return this._HttpClient.get(this.baseUrl+`categories/${e}`)}getSubCategoriesToCat(e){return this._HttpClient.get(this.baseUrl+`categories/${e}/subcategories`)}getBrands(){return this._HttpClient.get(this.baseUrl+"brands")}getUserOrders(e){return this._HttpClient.get(this.baseUrl+`orders/user/${e}`)}static#t=this.\u0275fac=function(g){return new(g||a)(n.LFG(c.eN))};static#e=this.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);