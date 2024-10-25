import { ProductModel } from "../model/ProductStatemodel";


export const productState:ProductModel={
    list: [],
    errormessage: "",
    editdata: {
        id: 0,
        title: "",
        description: "",
        price: 0,
    }
}