import { 
	Directive, 
	OnInit, 
	Renderer2, 
	ElementRef, 
	HostListener,
	HostBinding,
	Input 
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightedColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
  	this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onEnter() {
  	this.backgroundColor = this.highlightedColor;
  	this.color = 'white'
  }

  @HostListener('mouseleave') onLeave() {
     this.backgroundColor = this.defaultColor;
  }

}
