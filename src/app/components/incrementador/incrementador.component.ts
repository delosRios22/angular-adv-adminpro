import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input() progreso : number = 40;
  @Output() valorCambia: EventEmitter<number> = new EventEmitter();

  get getProgreso(){
    return `${this.progreso}%`
  }

  cambiarValor( valor: number){
    if(this.progreso >= 100 && valor >= 0){
      this.valorCambia.emit(100);
      return this.progreso = 100;
    } 
    if(this.progreso <= 0 && valor <= 0){
      this.valorCambia.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.valorCambia.emit(this.progreso);
  }

  onChange( valor : number){
    if(valor >= 100){
      this.progreso = 100;
    }else if(valor <= 0){
      this.progreso = 0;
    }else {
      this.progreso = valor;
    }
    this.valorCambia.emit(this.progreso)
  }

}
