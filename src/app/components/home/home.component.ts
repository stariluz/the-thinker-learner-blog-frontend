import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newsList: any[]=[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery({
      query: gql`
        {
          getAllNews{
            id
            title
            content
            picture
            createdAt
            updatedAt
          }
        }
      `,
    }).valueChanges.subscribe((result: any) => {
      this.newsList = result?.data?.getAllNews;
      console.log(this.newsList)
      this.loading = result.loading;
      this.error = result.error;
    });
  }
}
