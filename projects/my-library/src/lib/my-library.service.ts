import { Injectable } from '@angular/core';

@Injectable()
export class MyLibraryService {

  constructor() { }

  log(message: string){
    console.log(message)
  }
}
