import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  mdl_user_creacion: string = "";
  mdl_mail_creacion: string = "";
  mdl_phone_creacion: string = "";
  mdl_pass_creacion: string = "";
  mdl_confi_pass_creacion: string = "";
  visiblewarning: boolean =false;
  warningMessage : string ="";

  constructor(private router: Router) { }

  ngOnInit() {
  }
 
  mostrarWarning(mensaje: string = 'Por favor, completa todos los campos correctamente.') {
    this.visiblewarning = true;
    this.warningMessage = mensaje;
    setTimeout(() => {
      this.visiblewarning = false;
    }, 2000);
  }

// Función para validar el correo
validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Función para validar el teléfono
validarTelefono(phone: string): boolean {
  const regex = /^[0-9]{7,}$/;
  return regex.test(phone);
}

  // Función para validar el largo de la clave
  validarClave(clave: string): boolean {
    return clave.length >= 3;
  }

  crear_usuario() {
    // Verificar si los campos están vacíos
    if (!this.mdl_user_creacion || 
        !this.mdl_mail_creacion || 
        !this.mdl_phone_creacion || 
        !this.mdl_pass_creacion || 
        !this.mdl_confi_pass_creacion) {
      this.mostrarWarning();
      return;
    }
  
    // Validar formato de correo
    if (!this.validarEmail(this.mdl_mail_creacion)) {
      this.mostrarWarning('Correo inválido');
      return;
    }
  
    // Validar formato de teléfono (solo números y longitud adecuada)
    if (!this.validarTelefono(this.mdl_phone_creacion)) {
      this.mostrarWarning('Teléfono inválido');
      return;
    }

        // Validar que la clave tenga al menos 3 caracteres
        if (!this.validarClave(this.mdl_pass_creacion)) {
          this.mostrarWarning('La clave debe tener al menos 3 caracteres');
          return;
        }
  
    // Validar que las contraseñas sean iguales
    if (this.mdl_pass_creacion !== this.mdl_confi_pass_creacion) {
      this.mostrarWarning('Las contraseñas no coinciden');
      return;
    }


  
    // Si todas las validaciones pasan, se navega a la página de login
    let extras: NavigationExtras = {
      replaceUrl: true,
      state: {
        user_creacion: this.mdl_user_creacion,
        mail_creacion: this.mdl_mail_creacion,
        phone_creacion: this.mdl_phone_creacion,
        pass_creacion: this.mdl_pass_creacion,
      }
    };
    this.router.navigate(["login"], extras);
  }
  

  salir(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    this.router.navigate(["login"],extras)
  }

}
