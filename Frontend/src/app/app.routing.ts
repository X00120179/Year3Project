import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/components/products/products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './products/components/add-product/add-product.component';
import { UpdateProductComponent } from './products/components/update-product/update-product.component';
import { CartComponent } from './cart/cart.component';

export const AppRoutes: any = [
    { path: "products", component: ProductsComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "index", component: IndexComponent },
    { path: "addProduct", component: AddProductComponent },
    { path: "updateProduct", component: UpdateProductComponent },
    { path: "cart", component: CartComponent },
];
 
export const AppComponents: any = [
    ProductsComponent
];