import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Produit {
  id: string;
  reference: string;
  libelle: string;
  est_du_jour: boolean;
  prix: number;
  quantite_en_stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://gondor-chic-api.mendrika.dev/api/produits-du-jour';

  constructor(private http: HttpClient) {}

  getProduitDuJour(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }
}
