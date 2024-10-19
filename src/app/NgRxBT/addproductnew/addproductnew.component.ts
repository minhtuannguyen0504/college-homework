import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';

import { Product } from '../../services/product.service';
import { addProducts, getProducts, updateProducts } from '../../_store/Product.Action';
import { getproduct } from '../../_store/Product.Selector';

@Component({
  selector: 'app-addproductnew',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './addproductnew.component.html',
  styleUrls: ['./addproductnew.component.scss'],  
})
export class AddproductnewComponent {
  _dialogdata: any;
  _productinfo!: Product;
  productform: any; 

  constructor(
    private store: Store,
    private builder: FormBuilder,
    private ref: MatDialogRef<AddproductnewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ) {
    this.productform = this.builder.group({
      id: this.builder.control({ value: 0, disabled: true }),
      name: this.builder.control('', Validators.required),
      description: this.builder.control('', Validators.required),
      price: this.builder.control(1, Validators.required),
    });
  }

  ngOnInit(): void {
    this._dialogdata = this.data;
    let editid = this._dialogdata.id as number;
    if (editid !== 0) {
      this.store.dispatch(getProducts({ id: editid }));
      this.store.select(getproduct).subscribe((item) => {
        this._productinfo = item;
        this.productform.setValue({
          id: this._productinfo.id,
          name: this._productinfo.title,
          description: this._productinfo.description,
          price: this._productinfo.price,
        });
      });
    }
  }

  ProceedSave() {
    if (this.productform.valid) {
      let _data: Product = {
        id: 0,
        title: this.productform.value.name as string,
        description: this.productform.value.description as string,
        price: this.productform.value.price as number,
      };
      if (this._dialogdata.id !== 0) {
        _data.id = this._dialogdata.id as number;
        this.store.dispatch(updateProducts({ inputdata: _data }));
      } else {
        this.store.dispatch(addProducts({ inputdata: _data }));
      }
      this.productform.reset();
      this.cancelpopup();
    }
  }

  cancelpopup() {
    this.ref.close();
  }
}
