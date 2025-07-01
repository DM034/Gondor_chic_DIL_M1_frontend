import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Produit {
  id: string;
  reference: string;
  libelle: string;
  est_du_jour: boolean;
  prix: number;
  quantite_en_stock: number;
  image_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiBaseUrl}/produits-du-jour`;

  constructor(private http: HttpClient) {}

  getProduitDuJour(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }
}
