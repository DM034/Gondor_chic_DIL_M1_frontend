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

  constructor(private productService: ProductService, private router: Router, private http: HttpClient) {}

  login() {
    const payload = {
      pseudo: this.usernameInput,
      password: this.passwordInput
    };

    console.log('Payload envoyé :', payload);

    this.http.post<any>(
      'https://gondor-chic-api.mendrika.dev/api/auth/login',
      JSON.stringify({ pseudo: 'dori_forgeron', password: 'MontagneDeFeu42!' }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .subscribe({
        next: (res) => {
          localStorage.setItem('access_token', res.access_token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          alert('Erreur d’authentification');
        }
      });
  }

  ngOnInit(): void {
    this.productService.getProduitDuJour().subscribe((products) => {
      if (products.length > 0) {
        const imageUrl = 'https://gondor-chic-api.mendrika.dev/' + products[0].image_url;
        console.log('URL image générée:', imageUrl);
        console.log('image_url depuis API:', products[0].image_url);
        this.product = {
          name: products[0].libelle,
          price: products[0].prix,
          stock: products[0].quantite_en_stock,
          image: imageUrl
        };
      }
    });
  }
}
