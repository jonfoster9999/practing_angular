import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selection: string = "recipes"

  pickUp(data) {
  	console.log(data.name, " from other componenet");
  }

  giveRice() {
  	return "rice and beans"
  }

  handleSelect(selection) {
    this.selection = selection;
  }
}
