import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Test variable Name same for text area!';

  clickSubmit(comments) {
    alert(""+comments);
  }
}
