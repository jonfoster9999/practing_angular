import { OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[app-basic]'
})

export class BasicDirective implements OnInit {

	constructor(private elementRef: ElementRef) {}

	ngOnInit() {
		this.elementRef.nativeElement.style.backgroundColor = 'red';
	}
}