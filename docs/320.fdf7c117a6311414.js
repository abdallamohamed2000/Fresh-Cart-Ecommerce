"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[320],{7320:(d,c,a)=>{a.r(c),a.d(c,{CategorydetailsComponent:()=>l});var i=a(6814),t=a(4769),g=a(1120),o=a(0);function _(r,u){if(1&r&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&r){const e=u.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function s(r,u){if(1&r&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"div"),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"div",5)(6,"div")(7,"h3"),t._uU(8),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"Sub Categories:"),t.qZA(),t.YNc(11,_,2,1,"span",6),t.qZA()()()()),2&r){const e=t.oxw();t.xp6(4),t.Q6J("src",e.categoryDetails.image,t.LSH)("alt",e.categoryDetails.name),t.xp6(4),t.Oqu(e.categoryDetails.name),t.xp6(3),t.Q6J("ngForOf",e.subCategoryData)}}let l=(()=>{class r{constructor(e,n){this._ActivatedRoute=e,this._ProductService=n,this.categoryId="",this.categoryDetails={},this.subCategoryData=""}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.categoryId=e.get("id")}}),this._ProductService.getCategoryDetails(this.categoryId).subscribe({next:e=>{this.categoryDetails=e.data}}),this._ProductService.getSubCategoriesToCat(this.categoryId).subscribe({next:e=>{this.subCategoryData=e.data,console.log(e.data)}})}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(g.gz),t.Y36(o.M))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-categorydetails"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","mx-auto my-5 w-75 shadow p-4 rounded",4,"ngIf"],[1,"mx-auto","my-5","w-75","shadow","p-4","rounded"],[1,"row","align-items-center","g-4"],[1,"col-md-4"],["height","300",1,"w-100","rounded",3,"src","alt"],[1,"col-md-8"],["class","badge bg-secondary me-3",4,"ngFor","ngForOf"],[1,"badge","bg-secondary","me-3"]],template:function(n,h){1&n&&t.YNc(0,s,12,4,"section",0),2&n&&t.Q6J("ngIf",h.categoryDetails._id)},dependencies:[i.ez,i.sg,i.O5]})}return r})()},0:(d,c,a)=>{a.d(c,{M:()=>g});var i=a(4769),t=a(9862);let g=(()=>{class o{constructor(s){this._HttpClient=s,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(s=1){return this._HttpClient.get(this.baseUrl+`products?page=${s}`)}getProductsDetails(s){return this._HttpClient.get(this.baseUrl+`products/${s}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getCategoryDetails(s){return this._HttpClient.get(this.baseUrl+`categories/${s}`)}getSubCategoriesToCat(s){return this._HttpClient.get(this.baseUrl+`categories/${s}/subcategories`)}getBrands(){return this._HttpClient.get(this.baseUrl+"brands")}getUserOrders(s){return this._HttpClient.get(this.baseUrl+`orders/user/${s}`)}static#t=this.\u0275fac=function(l){return new(l||o)(i.LFG(t.eN))};static#e=this.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);