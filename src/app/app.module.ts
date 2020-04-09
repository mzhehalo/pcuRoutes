import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostComponent} from './components/post/post.component';
import {CommentComponent} from './components/comment/comment.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
