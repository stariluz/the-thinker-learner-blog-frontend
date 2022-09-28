import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { MdEditorOption } from 'ngx-markdown-editor';
import { CreateNewsInput } from 'src/app/types/create-news.input';
import { NewsType } from 'src/app/types/news.type';
import { UpdateNewsInput } from 'src/app/types/update-news.input';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css'],
})
export class NewsCreateComponent implements OnInit {
  newsTitle: string = '';
  newsContent: string = `# Here go an extended title or a subtitle
This is the content for your news, the downside preview is like the real view when the news is already uploaded`;

  mdEditorOptions:MdEditorOption={
    showPreviewPanel: false,    // Show preview panel, Default is true
    showBorder: true,          // Show editor component's border. Default is true
    usingFontAwesome5: true,   // Using font awesome with version 5, Default is false
    enablePreviewContentClick: true,  // Allow user fire the click event on the preview panel, like href etc. Default is false
    resizable: false,           // Allow resize the editor
    // hideIcons?: Array<string>     // ['Bold', 'Italic', 'Heading', 'Reference', 'Link', 'Image', 'Ul', 'Ol', 'Code', 'TogglePreview', 'FullScreen']. Default is empty
    // scrollPastEnd?: number        // The option for ace editor. Default is 0
    // markedjsOpt?: MarkedjsOption  // The markedjs option, see https://marked.js.org/#/USING_ADVANCED.md#options
    // customRender?: {              // Custom markedjs render
    //   image?: Function     // Image Render
    //   table?: Function     // Table Render
    //   code?: Function      // Code Render
    //   listitem?: Function  // Listitem Render
    // }
  }

  constructor(private apollo: Apollo, private router:Router) {
  }

  newsObject:NewsType={
    id: "",
    title:"Titulo por default xDDXDXD",
    content: this.newsContent,
    picture: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  };
  newsToCreate:CreateNewsInput={
    title:"Titulo por default xDDXDXD",
    content: this.newsContent,
    picture: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  };
  result:any;

  ngOnInit() {}

  public createNews(){
    console.log("NEWS TO CREATE: ", this.newsToCreate)
    const CREATE_NEWS=gql`
    mutation CREATE_NEWS($news:CreateNewsInput!){
      createNews(input:$news){
        id
        title
        content
        picture
      }
    }`;
    this.apollo.mutate({
      mutation: CREATE_NEWS,
      variables: {
        news: this.newsToCreate
      }
    }).subscribe(result => {
      console.log(result)
      /* this.result=result.data
      this.newsObject = result?.data as NewsType; */
      this.router.navigate(["/.."]);
      /* if(!result.errors){
      } */
    })
  }
  public updateNews(){
    this.apollo.mutate({
      mutation: gql`mutation($news: UpdateNewsInput!){
        updateNews(input: $news){
          id
          title
          content
          picture
        }
      }`,
      variables: {news: this.newsObject as UpdateNewsInput}
    }).subscribe(result => {
      this.newsObject = result.data as NewsType;
    })
  }
}
