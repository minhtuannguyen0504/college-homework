import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register-form/register.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { NewproductComponent } from './NgRxBT/newproduct/newproduct.component';
import { AdminComponent } from './components/admin/admin.component';
import { ItemComponent } from './components/item/item.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {   path: 'admin', 
        component: AdminComponent,
        children: [
            { path: 'weather', component: WeatherComponent },
            { path: 'users', component: UserComponent }, 
            { path: 'products', component: ProductComponent }, 
            { path: 'productsngrx', component: NewproductComponent }, 
            { path: 'product-detail/:id', component: ProductDetailComponent },
            { path: 'cart', component: CartComponent },
            { path: "register", component: RegisterComponent }, 
            {path: 'pipe', component: PipeComponent},
            { path: 'item', component: ItemComponent }
        ]
    }
];
