import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { deleteProducts, loadProducts } from '../../_store/Product.Action';
import { getproductlist } from '../../_store/Product.Selector';
import { AddproductnewComponent } from '../addproductnew/addproductnew.component';
import { Subscription } from 'rxjs';
import { Product, ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { ProductEffect } from '../../_store/Product.Effects';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newproduct',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatButtonModule, MatInputModule, CommonModule, MatDialogModule,RouterLink,],
  templateUrl: './newproduct.component.html',
  providers: [ProductService, ToastrService, ProductEffect] ,
  styleUrl: './newproduct.component.scss'
})
export class NewproductComponent implements OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'status', 'action'];
  dataSource!: MatTableDataSource<Product>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  subscription!:Subscription;

  constructor(private dialog: MatDialog, private store: Store) {

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  ngOnInit(): void {
    this.Loadproducts();
  }

  productlist: Product[] = []

  Loadproducts() {
    this.store.dispatch(loadProducts());
    this.subscription=this.store.select(getproductlist).subscribe(item => {
      this.productlist = item;
      console.log(item);
      this.dataSource = new MatTableDataSource(this.productlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  Createproduct() {
    this.Openpopup(0, 'Create Product');

  }

  Openpopup(id: number, title: string) {

    this.dialog.open(AddproductnewComponent, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        id: id,
        title: title
      }
    }).afterClosed().subscribe(item => {
     // this.Loadproducts();
    });
  }

  DeleteProduct(id: number) {

    if(confirm('Do you want to remove?')){
      this.store.dispatch(deleteProducts({id:id}));
    }

  }
  EditProduct(id: number) {
    this.Openpopup(id, 'Edit Product');
  }

}
