import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  articles: any = [
    {
      id: 1,
      titre: "Tente",
      image: "assets/tente.jpg",
      prix: 50,
      promotion: 0.5
    },
    {
      id: 2,
      titre: "Tente 2",
      image: "assets/tente.jpg",

      prix: 70,
      promotion: 0.7
    },
    {
      id: 3,
      titre: "Tente 3",
      image: "assets/tente.jpg",

      prix: 50,
      promotion: 0
    }
  ]
  panier: any = []
  path = environment.backend + "/api/v/boutiques"
  constructor(private http: HttpClient) { }

  addArticle(user: any): Observable<any> {
    return this.http.post<any>(this.path, user)
  }

  deleteArticle(id: any): Observable<any> {
    return this.http.delete<any>(this.path + '/' + id)
  }

  getArticle(id: any): Observable<any> {
    return this.http.get<any>(this.path + '/' + id)
  }

  getArticles(): Observable<any> {
    return this.http.get<any>(this.path)
  }
  updateArticle(user: any): Observable<any> {
    return this.http.put<any>(this.path, user)

  }

  ajouterAuPanier(item: any) {
    this.panier.push(item)
  }

  supprimerDuPanier(id: any) {
    this.panier = this.panier.filter((item: any) => item.id != id)
  }
}
