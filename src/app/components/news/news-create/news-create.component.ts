import { Component, OnInit } from '@angular/core';
import { MdEditorOption } from 'ngx-markdown-editor';

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
  constructor() {}

  ngOnInit() {}
}
