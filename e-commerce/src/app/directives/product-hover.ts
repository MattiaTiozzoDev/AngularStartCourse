import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[ProductHover]'
})
export class ProductHover {

  private isHover = false;

  constructor() { }

  @HostBinding("class.product-shadow")
  get cssClass(){
    return this.isHover
  }

  @HostListener("mouseover") onMouseOver(){
    this.isHover = true;
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.isHover = false;
  }

}
