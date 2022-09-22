import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css'],
})
export class NewsCreateComponent implements OnInit {
  newsTitle: string = '';
  newsContent: string = `# This one is bare
You can also choose to hide the statusbar and/or toolbar for a simple and clean appearance. This one also checks for misspelled words as you type!`;
  constructor() {}

  ngOnInit() {}
}
