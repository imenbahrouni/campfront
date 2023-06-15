import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoutiqueService } from 'src/app/services/boutique.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: any = []
  total:any;
  constructor(private boutiqueService: BoutiqueService,private router:Router) { }

  ngOnInit(): void {
    this.panier = this.boutiqueService.panier
    this.calculerTotal()
  }

  supprimer(id:any){
    this.boutiqueService.supprimerDuPanier(id)
    this.panier = this.boutiqueService.panier
    this.calculerTotal()
  }

  calculerTotal(){
    this.total = 0
    this.panier.forEach((item:any) => {
      this.total += item.prix
    
    });
  }

  commander(){
    alert("Commande passée avec succès");
    this.boutiqueService.panier = []
    this.router.navigate(['/boutique'])
  }
}
