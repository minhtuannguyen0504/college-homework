import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  products: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  minPrice: number = 0;
  maxPrice: number = 1000;
  selectedCategory: string = '';
  filteredProducts: any[] = [];

  constructor() {
    this.fetchProducts();
  }

  fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.products = data;
        this.filteredProducts = this.products;
      });
  }

  onSearch() {
    this.applyFilters();
  }

  onPriceChange() {
    this.applyFilters();
  }

  onCategoryChange() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearchTerm = product.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesPrice = product.price >= this.minPrice && product.price <= this.maxPrice;
      const matchesCategory = this.selectedCategory ? product.category === this.selectedCategory : true;

      return matchesSearchTerm && matchesPrice && matchesCategory;
    });
    this.currentPage = 1;
  }

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(start, start + this.itemsPerPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  get totalPages() {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }
}
