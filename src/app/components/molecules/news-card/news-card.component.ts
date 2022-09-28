import { Component, Input, OnInit } from '@angular/core';
import { NewsType } from 'src/app/types/news.type';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input("newsObject") newsObject!:NewsType;

  constructor() { }

  ngOnInit() {
  }

}