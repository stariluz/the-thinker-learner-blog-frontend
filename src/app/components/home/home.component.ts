import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { NewsType } from 'src/app/types/news.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newsList: Array<NewsType> = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            getAllNews {
              id
              title
              picture
              createdAt
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
        let sortedList = [...result?.data?.getAllNews];
        console.log(sortedList);
        this.newsList=sortedList.sort((a: NewsType, b: NewsType) => {
          if (a.createdAt < b.createdAt) {
            return 1;
          } else if (a.createdAt > b.createdAt) {
            return -1;
          }else{
            return 0;
          }
        });
        console.log('HOLAAAA', this.newsList);
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
