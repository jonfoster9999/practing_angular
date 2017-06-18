import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent {
	@Output() onSelect = new EventEmitter<string>();

	navigate(selection) {
		this.onSelect.emit(selection);
	}

}