import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private apiservice:ApiserviceService) { }

  ngOnInit(): void {
  }
  error:any;
  empleadoForm  = new FormGroup({
      'nombre': new FormControl('',Validators.required),
      'apellido': new FormControl('',Validators.required),
      'documento': new FormControl('',Validators.required),
      'correo': new FormControl('',Validators.required),
      'rol': new FormControl('',Validators.required),
      'isboos': new FormControl('',Validators.required)
  });

  empleadorSubmit(){
    console.log(this.empleadoForm.value)
    if(this.empleadoForm.valid){
      console.log(this.empleadoForm.value)
      this.apiservice.CreateEmpleado(this.empleadoForm.value).subscribe((res)=>{
        this.empleadoForm.reset();
      });
    }
    else{
      this.error = 'Debe ingresar todos los campos para aceptar su formulario'
    }
  }
}
