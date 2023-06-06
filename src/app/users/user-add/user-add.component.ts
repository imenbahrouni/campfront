import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  nom:any;
  prenom:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }


  creer(){
    let user = {
      prenom : this.prenom,
      nom : this.nom
    }
    this.userService.addUser(user).subscribe(response=>{
      
    })
  }

}
