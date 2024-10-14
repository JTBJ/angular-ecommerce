import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  viewDetails(_t13: Product) {
    throw new Error('Method not implemented.');
  }
  addToCart(_t13: Product) {
    throw new Error('Method not implemented.');
  }
  handleDetails(arg0: any) {
    throw new Error('Method not implemented.');
  }
  tempProduct: any;
  handleAddToCart(arg0: any) {
    throw new Error('Method not implemented.');
  }
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listProducts();
    console.log(this.products);
  }

  listProducts() {
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
    });
  }
}
