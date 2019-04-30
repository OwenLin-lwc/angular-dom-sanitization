import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  tw = '<iframe width="370" height="215" src="https://www.youtube.com/embed/playlist?list=PL3oW2tjiIxvTUfDOkivqSDxrxfQccwxsN" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  kr = '<iframe width="370" height="215" src="https://www.youtube.com/embed/playlist?list=PLOHoVaTp8R7dfrJW5pumS0iD_dhlXKv17" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  us = '<iframe width="370" height="215" src="https://www.youtube.com/embed/playlist?list=PLUMJYOoO2JQ8UVF6Pv2x0UcN0T3i9qPBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  constructor() {}

  ngOnInit() {
  }

}
