import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  nom: any;
  prenom: any;
  telephone: any;
  role: any;
  password: any;
  login: any;
  id: any;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    if (this.id) {
      this.nom = 'abidi'
      this.prenom = 'temim'
      this.role = 'admin'
      this.telephone = '2222222'
    }
  }


  creer() {
    let user = {
      prenom: this.prenom,
      nom: this.nom,
      login: this.login,
      password: this.password,
      telephone: this.telephone,
    }
    this.userService.addUser(user).subscribe(response => {
    })
  }

  modifier() {
    let user ={
      prenom: this.prenom,
      nom: this.nom,
      login: this.login,
      password: this.password,
      telephone: this.telephone,
    }
    this.userService.updateUser(user).subscribe(response => {
    })
  }

}
