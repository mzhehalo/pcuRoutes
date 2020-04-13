import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PostComponent} from './components/post/post.component';
import {CommentComponent} from './components/comment/comment.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import {CommentResolverService} from './services/comment-resolver.service';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {PostResolverService} from './services/post-resolver.service';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService}},
  {path: 'comments', component: AllCommentsComponent, resolve: {comment: CommentResolverService}},
  {path: 'posts', component: AllPostsComponent, resolve: {post: PostResolverService}},
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    UserComponent,
    HelloComponent,
    AllUsersComponent,
    AllCommentsComponent,
    AllPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
