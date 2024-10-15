import { Component } from '@angular/core';
import { FooterPaginationComponent } from '../footer/footer-pagination/footer-pagination.component';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    FooterPaginationComponent,
    CommonModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listProducts();
    console.log(this.products);
  }

  listProducts() {
    this.productService
      .getProductList()
      .pipe((_embedded) => {
        return _embedded.pipe(map((response) => (this.products = response)));
      })
      .subscribe((data) => {
        this.products = data;
      });
  }
}
