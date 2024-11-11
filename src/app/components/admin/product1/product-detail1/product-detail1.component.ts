import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../../interfaces';

@Component({
  selector: 'app-product-detail1',
  standalone: true,
  imports: [],
  templateUrl: './product-detail1.component.html',
  styleUrl: './product-detail1.component.scss'
})
export class ProductDetail1Component  implements OnInit {
  productId: number | undefined;
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if(idParam !== null) {
      this.productId = +idParam;
      this.product = this.productService.getItemById(this.productId);
    } else {
      console.error('Invalid product ID');  
    }
  }
}
