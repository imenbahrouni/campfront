import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from 'src/app/services/boutique.service';

@Component({
  selector: 'app-boutique-management',
  templateUrl: './boutique-management.component.html',
  styleUrls: ['./boutique-management.component.css']
})
export class BoutiqueManagementComponent implements OnInit {
  articles:any = []
  
  constructor(private boutiqueService: BoutiqueService) { }

  ngOnInit(): void {
    this.articles = this.boutiqueService.articles
  }

  ajouter(item: any) {
    this.boutiqueService.ajouterAuPanier(item)
  }

  verifierSurPanier(id:any){
    return this.boutiqueService.panier.find((item:any)=>item.id == id)
  }

}
