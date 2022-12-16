import { Component, Input, OnInit, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    // se ejecuta codigo solo cuando cambia la imagen
    // console.log('change just img =>', this.img);
  }

  @Input() alt: string = '';
  @Output() loadedImg = new EventEmitter<string>();
  imageDefault = '../../../assets/images/default-image.jpg';
  // counter = 0;
  // counterFn: number | undefined;

  /* VIDA DE LOS COMPONENTES */
  constructor() {
    /*
    Corre antes del render
    No se deben correr cosas asincronas(cosas que tienen que esperar un valor ejm fetch), solo cosas imediatas
    Solo corre una vez
    */
    console.log('constructor', 'imgValue =>', this.img);

  }

  ngOnChanges(changes: SimpleChanges): void {
    /*
    Corre antes del render
    Cualquier escucha de cambios en inputs va en este metodo y no en el ngOnInit()
    Visualiza cambios en los inputs
    Corre las veces que se actualicen los inputs
    */
    console.log('ngOnChanges', 'imgValue =>', this.img);
    // console.log('changes', changes);
  }

  ngOnInit(): void {
    /*
    Corre antes y durante el render
    Se corren cosas asincronas(cosas que esperan un tiempo para recibir su valor)
    Solo corre una vez
    */
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter++;
    //   console.log('run counter');
    // }, 1000);
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
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    // console.log('log hijo');
    this.loadedImg.emit(this.img);
  }

}
