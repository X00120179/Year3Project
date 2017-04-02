import { Subject } from 'rxjs/Subject';
import { User } from '../models/users';

export class LoginEventEmitter extends Subject<User> {
    constructor() {
        super();
    }

    emit(value) {
        super.next(value);
    }

}