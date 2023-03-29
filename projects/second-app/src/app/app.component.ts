import { Component } from '@angular/core';
import { MyLibraryService } from 'my-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-app';

  constructor(private libraryService: MyLibraryService){
    libraryService.log('some message')
  }
}
