import { Product } from "../services/product.service";


export interface ProductModel{
    list:Product[],
    errormessage:string,
    editdata:Product
}