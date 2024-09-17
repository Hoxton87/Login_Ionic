import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  mdl_user: string = "";
  mdl_pass: string = "";
  visiblewarning: boolean =false;

  user_creacion: string = "";
  pass_creacion: string = "";
  phone_creacion: string = "";
  mail_creacion: string = "";

  pass_perfil: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation();

    if (extras?.extras.state) {
      this.user_creacion = extras.extras.state['user_creacion'];
      this.pass_creacion = extras.extras.state['pass_creacion'];
      this.phone_creacion = extras.extras.state['phone_creacion'];
      this.mail_creacion = extras.extras.state['mail_creacion'];
      this.pass_perfil = extras.extras.state['pass_perfil'];  // Recibir la nueva clave
    }
} 
 
  mostrarWarning() {
    this.visiblewarning = true; 
    setTimeout(() => {
      this.visiblewarning = false; 
    }, 2000);
  }

  navegar_principal() {

    this.visiblewarning = false; 
    

    const passwordToCompare = this.pass_perfil || this.pass_creacion; 
    
    if (!this.mdl_user || !this.mdl_pass || this.mdl_user !== this.user_creacion || this.mdl_pass !== passwordToCompare) {
      this.mostrarWarning();
      return;
    }

    let extras: NavigationExtras = {
      replaceUrl: true,
      state: {
        user_creacion: this.user_creacion,
        pass_creacion: passwordToCompare,
        phone_creacion: this.phone_creacion,
        mail_creacion: this.mail_creacion
      }
    };
    this.router.navigate(['principal'], extras); 
}


  navegar_crear_usuario() {
      let extras: NavigationExtras = {
        replaceUrl: true
      }
      this.router.navigate(['crear-usuario'],extras)
   
  }
}
