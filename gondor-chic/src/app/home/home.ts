import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../services/client";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./home.html",
  styleUrls: ["./home.scss"],
})
export class HomeComponent implements OnInit {
  product: any = null;
  usernameInput = "";
  passwordInput = "";
  user: any = null;
  quantite: number = 1;

  constructor(
    private productService: ProductService,
    private router: Router,
    private http: HttpClient,
     private authService: AuthService
  ) {}

  login() {
    this.authService.login(this.usernameInput, this.passwordInput).subscribe({
      next: (res) => {
        this.user = res.user;
      },
      error: () => {
        alert("Erreur d’authentification");
      },
    });
  }

  ngOnInit(): void {
    this.loadProduitDuJour();

    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
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
            image: "https://gondor-chic-api.mendrika.dev/" + p.image_url,
          };
        } else {
          console.warn("Aucun produit du jour trouvé.");
          this.product = null;
        }
      },
      (error) => {
        console.error("Erreur lors du chargement du produit du jour :", error);
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
