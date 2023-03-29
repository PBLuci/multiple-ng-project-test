import { Component } from '@angular/core';
import { MyLibraryService } from 'my-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multiple-applications';

  constructor(private libService: MyLibraryService){
    libService.log('hello from main app')
  }
}
