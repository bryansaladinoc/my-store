import { Component, Input, OnInit, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/images/default-image.jpg';

  /* VIDA DE LOS COMPONENTES */
  constructor() {
    /*
    Corre antes del render
    No se deben correr cosas asincronas(cosas que no tiene que esperar un valor(ejm fetch) sino son imediatas)
    Solo corre una vez
    */
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(): void {
    /*
    Corre antes del render
    Cualquier escucha de cambios en inputs va en este metodo y no en el ngOnInit()
    Visualiza cambios en los inputs
    Corre las veces que se actualicen los inputs
    */
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    /*
    Corre antes y durante el render
    Se corren cosas asincronas(cosas que esperan un tiempo para recibir su valor)
    Solo corre una vez
    */
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit(): void {
    /*
    Corre despues del render
    Aqui se manejan los hijos(html), cualquier cambio o evento que se quiera realizar sobre ellos
    */
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    /* Cuando se elimina el componente */
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
