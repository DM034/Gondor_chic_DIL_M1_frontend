import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements OnInit {
  product: any = null;
  usernameInput = '';
  passwordInput = '';
  user: any = null;
  quantite: number = 1;

  constructor(
    private productService: ProductService,
    private router: Router,
    private http: HttpClient
  ) {}

  login() {
    const payload = {
      pseudo: this.usernameInput,
      mot_de_passe: this.passwordInput,
    };

    this.http
      .post<any>('https://gondor-chic-api.mendrika.dev/api/auth/login', payload, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: (res) => {
          localStorage.setItem('access_token', res.access_token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.user = res.user;
          window.location.reload();
        },
        error: () => {
          alert('Erreur d’authentification');
        },
      });
  }

  ngOnInit(): void {
    this.loadProduitDuJour();

    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.user = JSON.parse(userStr);
    }
  }

  loadProduitDuJour() {
    this.productService.getProduitDuJour().subscribe(
      (products) => {
        if (products.length > 0) {
          const p = products[0];
          this.product = {
            name: p.libelle,
            price: p.prix,
            stock: p.quantite_en_stock,
            image: 'https://gondor-chic-api.mendrika.dev/' + p.image_url,
          };
        } else {
          console.warn('Aucun produit du jour trouvé.');
          this.product = null;
        }
      },
      (error) => {
        console.error('Erreur lors du chargement du produit du jour :', error);
        this.product = null;
      }
    );
  }

  addToCart(): void {
    if (this.product) {
      alert(`${this.quantite} x ${this.product.name} ajouté(s) au panier.`);
    }
  }
}
