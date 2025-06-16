import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {
  pseudo: string = '';
  nomComplet: string = '';
  produitDuJour: any = null;
  quantite: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      this.pseudo = user.pseudo || '';
      this.nomComplet = `${user.prenom || ''} ${user.nom || ''}`;
    }

    this.productService.getProduitDuJour().subscribe((products) => {
      if (products.length > 0) {
        this.produitDuJour = products[0];
        this.produitDuJour.image_url =
          'https://gondor-chic-api.mendrika.dev/' + products[0].image_url;
      }
    });
  }

  addToCart(): void {
    alert(`${this.quantite} x ${this.produitDuJour.libelle} ajouté(s) au panier.`);
  }
}
