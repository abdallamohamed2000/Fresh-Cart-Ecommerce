import { authGuard } from './core/guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // blank
{ path: '',
canActivate:[authGuard],
  loadComponent: () =>import('./layouts/blank-layout/blank-layout.component').then((m) => m.BlankLayoutComponent),
  children:[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      loadComponent: () =>
        import('./components/home/home.component').then(
          (m) => m.HomeComponent
        ),
        title: 'Home',
    },

    {
      path: 'cart',
      loadComponent: () =>
        import('./components/cart/cart.component').then(
          (m) => m.CartComponent
        ),
        title: 'Cart',
    },
    {
      path: 'wishlist',
      loadComponent: () =>
        import('./components/wishlist/wishlist.component').then(
          (m) => m.WishlistComponent
        ),
        title: 'wish List',
    },
    {
      path: 'products',
      loadComponent: () =>
        import('./components/products/products.component').then(
          (m) => m.ProductsComponent
        ),
        title: 'Products',
    },
    {
      path: 'productdetails/:id',
      loadComponent: () =>
        import('./components/details/details.component').then(
          (m) => m.DetailsComponent
        ),
        title: 'Product Details',
    },

    {
      path: 'brands',
      loadComponent: () =>
        import('./components/brands/brands.component').then(
          (m) => m.BrandsComponent
        ),
        title: 'Brands',
    },
    {
      path: 'allorders',
      loadComponent: () =>
        import('./components/allorders/allorders.component').then(
          (m) => m.AllordersComponent
        ),
        title: 'All Orders',
    },
    {
      path: 'forgotpassword',
      loadComponent: () =>
        import('./components/forgotpassword/forgotpassword.component').then(
          (m) => m.ForgotpasswordComponent
        ),
        title: 'Forgot Password',
    },
    {
      path: 'updatedata',
      loadComponent: () =>
        import('./components/updatedata/updatedata.component').then(
          (m) => m.UpdatedataComponent
        ),
        title: 'Update Data',
    },
    {
      path: 'updatepassword',
      loadComponent: () =>
        import('./components/updatepassword/updatepassword.component').then(
          (m) => m.UpdatepasswordComponent
        ),
        title: 'Update Password',
    },
    {
      path: 'profile',
      loadComponent: () =>
        import('./components/profile/profile.component').then(
          (m) => m.ProfileComponent
        ),
        title: 'profile',
    },
    {
      path: 'payment/:id',
      loadComponent: () =>
        import('./components/payment/payment.component').then(
          (m) => m.PaymentComponent
        ),
        title: 'Payment',
    },
    
    {
      path: 'categories',
      loadComponent: () =>
        import('./components/categories/categories.component').then(
          (m) => m.CategoriesComponent
        ),
        title: 'Categories',
    },
    {
      path: 'categorydetails/:id',
      loadComponent: () =>
        import('./components/categorydetails/categorydetails.component').then(
          (m) => m.CategorydetailsComponent
        ),
        title: 'Category Details',
    },
    

  ]
},

//auth
{
  path: '',
  loadComponent: () =>
    import('./layouts/auth-layout/auth-layout.component').then((m) => m.AuthLayoutComponent),
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
    {
      path: 'login',
      loadComponent: () =>
        import('./components/login/login.component').then(
          (m) => m.LoginComponent
        ),
        title: 'Login',
    },
    
    {
      path: 'register',
      loadComponent: () =>
        import('./components/register/register.component').then(
          (m) => m.RegisterComponent
        ),
        title: 'Register',
    },
    {
      path: 'forgot',
      loadComponent: () =>
        import('./components/forgotpassword/forgotpassword.component').then(
          (m) => m.ForgotpasswordComponent
        ),
        title: 'Forgot Password',
    }
  ]
},
//notfound
{
  path: '**',
  loadComponent: () =>
  import('./components/notfound/notfound.component').then(
    (m)=>m.NotfoundComponent
  ),
  title:'Not Found',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
