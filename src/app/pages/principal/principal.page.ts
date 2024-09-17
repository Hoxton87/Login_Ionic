import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  
  user_creacion: string = "";
  pass_creacion: string = "";
  phone_creacion: string = "";
  mail_creacion: string = "";
  

  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation();
    if(extras?.extras.state){
      this.user_creacion = extras?.extras.state['user_creacion'];
      this.pass_creacion = extras?.extras.state['pass_creacion'];
      this.phone_creacion = extras?.extras.state['phone_creacion'];
      this.mail_creacion = extras?.extras.state['mail_creacion'];
    }
     
  } 

  navegar_login() {
    let extras: NavigationExtras = {
      replaceUrl: true,
      state: {
        user_creacion: this.user_creacion,
        pass_creacion: this.pass_creacion,
        phone_creacion: this.phone_creacion,
        mail_creacion: this.mail_creacion,
      }
    }
    this.router.navigate(["login"],extras)
  }

  navegar_perfil() {
    let extras: NavigationExtras = {
      replaceUrl: true,
      state: {
        user_creacion: this.user_creacion,
        pass_creacion: this.pass_creacion,
        phone_creacion: this.phone_creacion,
        mail_creacion: this.mail_creacion,
      }
    }
    this.router.navigate(["perfil"],extras)
  }

}
