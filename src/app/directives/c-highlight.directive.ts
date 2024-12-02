import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '.appCHighlight'
})
export class CHighlightDirective {

  @HostBinding('style.backgroundColor') c_color="blue";


  @HostListener('mouseenter') c_onEnter()
  {
    this.c_color="yellow";
  }

  @HostListener('mouseleave') c_onLeave()
  {
    this.c_color="green";
  }

   


  constructor() { }

}
