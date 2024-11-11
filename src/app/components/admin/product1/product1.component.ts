import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interfaces';

@Component({
  selector: 'app-product1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product1.component.html',
  styleUrl: './product1.component.scss'
})
export class Product1Component {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit():void {
    this.products = this.productService.getList();
  }
}
