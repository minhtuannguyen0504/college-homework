import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { DataStorageService } from '../../services/data-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService:ProductService,
    private router: Router,
    private dataStorage:DataStorageService
  ) {}

  getParamValue: any;
  getProductDetails: any={};
  storeCartData: any = [];
  inCart: boolean = false;
  loading:boolean = false;
  products: any = [];
  error: string = '';
  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('id');
    if(this.getParamValue) this.getProduct(parseInt(this.getParamValue));
    const getVal = this.dataStorage.getCartData();
    this.storeCartData = getVal ? getVal : [];
    console.log("Id",this.getParamValue);
    this.products.filter((ele: any) => {
      if (ele.pdId == this.getParamValue) {
        
        this.getProductDetails = ele;
      }
    });
   
    this.storeCartData.filter((ele: any) => {
      if (ele.pdId == this.getParamValue) {
        this.inCart = true;
      }
    });
  }
  getProduct(id: number): void {
    this.loading = true;
    console.log("Calling API...");
    this.productService.getProduct(id).subscribe(
      response => {
      console.log('API response: ', response);
      this.getProductDetails = response;
      this.loading = false;
      console.log('User: ', this.getProductDetails);
      }, 
      error => {
        this.error = error;
        this.loading = false;
        console.error('API Error:', error);
      }
    );
  }
  getproducts(): void {
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
  addCart(data: any) {
    data['plusMinusCounter'] = 1;
    this.storeCartData.push(data);
    this.dataStorage.storeCartData(this.storeCartData);
    this.router.navigate(['/cart']);
  }


  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
}
