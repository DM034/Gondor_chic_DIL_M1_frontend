import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements OnInit {
  product: any = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduitDuJour().subscribe((products) => {
      if (products.length > 0) {
        this.product = {
          name: products[0].libelle,
          price: products[0].prix,
          stock: products[0].quantite_en_stock,
          image: 'https://gondor-chic-api.mendrika.dev/'+(products[0].image_url)
        };
      }
    });
  }
}
