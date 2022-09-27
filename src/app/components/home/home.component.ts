import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: any[]=[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery({
      query: gql`
        {
          getAllNews{
            id
          }
        }
      `,
    }).valueChanges.subscribe((result: any) => {
      this.users = result?.data?.users;
      this.loading = result.loading;
      this.error = result.error;
    });
  }
}
