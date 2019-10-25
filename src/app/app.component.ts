import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  twChk = false;
  krChk = false;
  usChk = false;

  tw = '<iframe width="720" height="480" src="https://www.youtube.com/embed/playlist?list=PL3oW2tjiIxvTUfDOkivqSDxrxfQccwxsN" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  kr = '<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=XsX3ATc3FbA&list=PL4QNnZJr8sRNKjKzArmzTBAlNYBDN2h-J" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  us = '<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=FuXNumBwDOM&list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  constructor() {}

  ngOnInit() {
  }

}
