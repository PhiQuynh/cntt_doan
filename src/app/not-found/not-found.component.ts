import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  public errorMessage: string = "";
  ngOnInit(): void {
    this.errorMessage = history.state.message
  }
}
