import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
  user_creacion: string = "";
  pass_creacion: string = "";
  phone_creacion: string = "";
  mail_creacion: string = "";
  new_clave: string ="";
  confirmar_new_clave: string ="";
  visiblewarning: boolean =false;
  warningMessage : string ="";

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

  mostrarWarning(mensaje: string = 'Por favor, completa todos los campos correctamente.') {
    this.visiblewarning = true;
    this.warningMessage = mensaje;
    setTimeout(() => {
      this.visiblewarning = false;
    }, 2000);
  }

  validarClave(clave: string): boolean {
    return clave.length >= 3;
  }

  cambiarClave() {

    if (!this.validarClave(this.new_clave)) {
      this.mostrarWarning('La nueva clave debe tener al menos 3 caracteres');
      return;
    }
    
    if (this.new_clave !== this.confirmar_new_clave) {
      this.mostrarWarning('Las contraseñas no coinciden');
      return;
    }
    this.pass_creacion = this.new_clave;

      let extras: NavigationExtras = {
      replaceUrl: true,
      state: {
        user_creacion: this.user_creacion,
        pass_perfil: this.new_clave,  
        phone_creacion: this.phone_creacion,
        mail_creacion: this.mail_creacion
      }
    };
    this.router.navigate(["login"], extras);  
    }
  
 
  salir(){
    let extras: NavigationExtras = {
      replaceUrl: true,
      state: {
        user_creacion: this.user_creacion,
        pass_creacion: this.pass_creacion,
        phone_creacion: this.phone_creacion,
        mail_creacion: this.mail_creacion
      }
      
    }
    this.router.navigate(["principal"],extras)
  }

}
