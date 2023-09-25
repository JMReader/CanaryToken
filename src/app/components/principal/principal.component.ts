import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }
  archivoSubido :boolean= false
  UUID:string=""
  
  ngOnInit(): void {
  }
  GenerarToken(){
    this.archivoSubido= !this.archivoSubido
      this.UUID= Math.random().toString(36)   
  }

}
