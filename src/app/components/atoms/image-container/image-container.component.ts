import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css'],
})
export class ImageContainerComponent implements OnInit {
  /*
    <component-image-container></component-image-container>
    Is absolutely necesary set the width and the height by style, property, or class, in the place where is used.
    (Internly the content will adapt to that height and width).

    For set the image position usea object-position: left% top%;
  */
  constructor() {}

  ngOnInit(): void {}
}
