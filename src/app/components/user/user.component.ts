import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: UserModel;

  // emitter = new EventEmitter();

  constructor() {
  }

  // actionWithUser(user: UserModel) {
  //   console.log(user.id);
  //   this.emitter.emit(user);
  // }
}
