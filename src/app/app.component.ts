import { Component } from '@angular/core';
import {CommentService} from './services/comment/comment.service';
// @ts-ignore
import {CommentModel} from '../Model/CommentModel';
// @ts-ignore
import {PostModel} from '../Model/PostModel';
import {PostService} from './services/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngPostsAndCom';

  comments: CommentModel[];
  posts: PostModel[];
  constructor(private userService: CommentService, private postService: PostService) {
    this.userService.getComments().subscribe(value => this.comments = value);
    this.postService.getPosts().subscribe(value => this.posts = value);

  }
}
