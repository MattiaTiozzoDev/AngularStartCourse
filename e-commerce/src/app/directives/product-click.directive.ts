import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[ProductClick]'
})
export class ProductClickDirective {

  private clicked: boolean = false;

  constructor() { }

  @HostBinding("class.border-selected")
  get cssClass(){
    return this.clicked;
  }

  @HostListener("click") onClick(){
      this.clicked = !this.clicked; 
  }

}
