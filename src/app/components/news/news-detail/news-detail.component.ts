import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { NewsType } from 'src/app/types/news.type';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  newsId!:string|null;
  newsObject!:NewsType;
  loading = true;
  error: any;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.newsId=this.route.snapshot.paramMap.get('id')
    console.log(typeof(this.newsId))
    if(this.newsId){
      const GET_NEWS=gql`
        query GetNews($newsID:String!){
          getNews(id:$newsID){
            id
            title
            content
            picture
            createdAt
            updatedAt
          }
        }
      `
      console.log(GET_NEWS);
      this.apollo.watchQuery({
        query: GET_NEWS,
        variables: {
          newsID: this.newsId
        }
      }).valueChanges.subscribe((result: any) => {
        this.newsObject = result?.data?.getNews;
        console.log(this.newsObject)
        this.loading = result.loading;
        this.error = result.error;
      });
    }
  }

}