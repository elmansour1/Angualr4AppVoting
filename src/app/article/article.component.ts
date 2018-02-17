import { Component, OnInit ,Input, HostBinding} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass='row';
@Input() article: Article;

  constructor() {
    
  }
    upVote(): boolean {
      this.article.upVote();
      return false;
    }

    upDown(): boolean {
      this.article.upDown();
      return false;
    }
  
    ngOnInit(){

    }
}
