import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  users: any;
  allUsers: any;
  nom: any;
  prenom: any;
  role: any;
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.allUsers = [
      {
        id: 1,
        nom: 'bahrouni',
        prenom: 'imen',
        role: 'admin',
        telephone: '22222222'
      },
      {
        id: 2,
        nom: 'abidi',
        prenom: 'temim',
        role: 'admin',
        telephone: '22222222'
      },
      {
        id: 3,
        nom: 'ferjani',
        prenom: 'iheb',
        role: 'admin',
        telephone: '22222222'
      }
    ]
    this.users = [...this.allUsers];
  }

  filtrer() {
    this.users = this.allUsers
    if (this.nom)
      this.users = this.users.filter((item: any) => item.nom.indexOf(this.nom) != -1)
    if (this.prenom)
      this.users = this.users.filter((item: any) => item.prenom.indexOf(this.prenom) != -1)
    if (this.role)
      this.users = this.users.filter((item: any) => item.role.indexOf(this.role) != -1)
  }

  supprimer(id: any) {
    this.allUsers = this.allUsers.filter((item: any) => item.id != id)
    this.filtrer()
  }
  modifier(id: any) {
    this.router.navigate(['/users/edit/' + id])
  }
  creer() {
    this.router.navigate(['/users/add'])
  }
}
