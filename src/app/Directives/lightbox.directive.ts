import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

 //Class Decorator
@Directive({
  selector: '[Lightbox]'
})
export class LightboxDirective implements OnChanges{
  //Property Decorator
  @Input('Lightbox') highLightColor : string = "yellow";
  @Input() defaultColor:string ="yellow";
  constructor(private eleRef : ElementRef) 
  { 
    // this.eleRef.nativeElement.style.border = `3px solid ${this.defaultColor}`;
  }
  ngOnChanges(): void {
    this.eleRef.nativeElement.style.border = `3px solid ${this.defaultColor}`;
  }
 //Method Decorator
  @HostListener('mouseover') onMouseOver()
  {
    this.eleRef.nativeElement.style.border = `3px solid ${this.highLightColor}`;
  }
  @HostListener('mouseout') onMouseOut()
  {
    this.eleRef.nativeElement.style.border = "3px solid red";
  }

}
