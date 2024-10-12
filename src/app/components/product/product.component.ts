import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, NavbarComponent,CommonModule, ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products: any = [];
  product: any = {};
  error: string = '';
  loading: boolean = false;
  isAdd: boolean = false;
  isEdit: boolean = false;
  isSee: boolean = false;
  getParamValue: any;
  constructor(private route: ActivatedRoute,private productService:ProductService) {}

  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('id');
    
    this.getproduct();
    // this.getData.productData.filter((ele: any) => {
    //   if (ele.pdCategory == this.getParamValue) {
    //     this.getProductData.push(ele);
    //     this.filterProductData.push(ele);
    //   }
    // });

    // this.getData.subCategorisFilterData.filter((ele: any) => {
    //   if (ele.categories == this.getParamValue) {
    //     this.getSubCategoryOption.push(ele);
    //   }
    // });
  }
  getproduct(): void {
    this.loading = true;
    console.log("Calling API...");
    this.productService.getProducts().subscribe(
      response => {
      console.log('API response: ', response);
      this.products = response;
      this.loading = false;
      console.log('Users: ', this.products);
      }, 
      error => {
        this.error = error;
        this.loading = false;
        console.error('API Error:', error);
      }
    );
  }
  formatPrice(price: number): string {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
  
 
}
