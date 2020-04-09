import { Component } from '@angular/core';
// @ts-ignore
import {CommentModel} from '../model/CommentModel';
import {CommentService} from './services/comment/comment.service';
// @ts-ignore
import {PostModel} from '../model/PostModel';
import {PostService} from './services/post/post.service';
// @ts-ignore
import {UserModel} from '../model/UserModel';
import {UserService} from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngPostsAndCom';

  comments: CommentModel[];
  posts: PostModel[];
  users: UserModel[];
  constructor(private commentService: CommentService, private postService: PostService, private userService: UserService) {
    this.commentService.getComments().subscribe(value => this.comments = value);
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.userService.getUsers().subscribe(value => this.users = value);

  }
}
