import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register-form/register.component';

export const routes: Routes = [
    { path: 'weather', component: WeatherComponent },
    { path: "users", component: UserComponent }, 
    { path: "products", component: ProductComponent }, 
    { path:'product-detail/:id',component:ProductDetailComponent },
    { path: "cart", component: CartComponent }, 
    { path: "register", component: RegisterComponent }, 
];
