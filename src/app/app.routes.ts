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
import { UserDemoComponent } from './components/user-demo/user-demo.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { DiscountCountDownComponent } from './components/discount-count-down/discount-count-down.component';
import { CalculatorComponent } from './components/admin/calculator/calculator.component';
import { MyComponentComponent } from './components/admin/my-component/my-component.component';
import { Bt2KienthucComponent } from './components/admin/bt2-kienthuc/bt2-kienthuc.component';
import { Bt3KienthucComponent } from './components/admin/bt3-kienthuc/bt3-kienthuc.component';
import { Bt4KienthucComponent } from './components/admin/bt4-kienthuc/bt4-kienthuc.component';
import { UserFormComponent } from './components/admin/user-form/user-form.component';
import { Btcomponent21Component } from './components/admin/btcomponent2.1/btcomponent2.1.component';
import { Btcomponent22Component } from './components/admin/btcomponent2.2/btcomponent2.2.component';
import { DetailsComponent } from './components/admin/dashboard/details/details.component';
import { SummaryComponent } from './components/admin/dashboard/summary/summary.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductDetail1Component } from './components/admin/product1/product-detail1/product-detail1.component';
import { Product1Component } from './components/admin/product1/product1.component';
import { TodoListComponent } from './components/admin/todo-list/todo-list.component';
import { TodoInputComponent } from './components/admin/todo-input/todo-input.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {   path: 'admin', 
        component: AdminComponent,
        children: [
            { path: 'calculator', component: CalculatorComponent },
            { path: 'baitapkienthuc1', component: MyComponentComponent },
            { path: 'baitapkienthuc2', component: Bt2KienthucComponent },
            { path: 'baitapkienthuc3', component: Bt3KienthucComponent },
            { path: 'baitapkienthuc4', component: Bt4KienthucComponent },
            { path: 'baitapcomponent1.1.2', component: UserFormComponent },
            { path: 'baitapcomponent2.1', component: Btcomponent21Component },
            { path: 'baitapcomponent2.2', component: Btcomponent22Component },
            { path: 'weather', component: WeatherComponent },
            { path: 'users', component: UserComponent }, 
            { path: 'product', component: ProductComponent }, 
            { path: 'productsngrx', component: NewproductComponent }, 
            { path: 'product-detail/:id', component: ProductDetailComponent },
            { path: 'cart', component: CartComponent },
            { path: "register", component: RegisterComponent }, 
            {path: 'pipe', component: PipeComponent},
            { path: 'item', component: ItemComponent },
            { path: 'userDemo', component: UserDemoComponent },
            { path: 'custom-pipe', component: CustomPipeComponent },
            { path: 'discount-count', component: DiscountCountDownComponent },
            { path: 'product1', component: Product1Component },
            { path: 'product1/detail/:id', component: ProductDetail1Component }, 
            { 
                path: 'dashboard', 
                component: DashboardComponent, 
                children: [
                    { path: 'summary', component: SummaryComponent },
                    { path: 'details', component: DetailsComponent }
                ]
            },
            { path: 'todo', component: TodoListComponent },   
            { path: 'todo-input', component: TodoInputComponent }, 
        ]
          
        }

];
