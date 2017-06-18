import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[dropdown]'
})

export class DropdownDirective {
	
	constructor(private el: ElementRef) {

	}

	@HostListener('click') click () {
		this.el.nativeElement.classList.toggle("open")
	}

}