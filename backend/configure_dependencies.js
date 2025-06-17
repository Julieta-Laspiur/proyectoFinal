import {addDependency} from './libs/dependencies.js';
import {UserService} from './Services/user.js';
import { LoginService} from './Services/login.js';
import { UserMockup } from './mockups/user.js';


export default function configureDependencies(){
    addDependency('UserService', UserService);
    addDependency('LoginService', LoginService);
    addDependency('UserModel', UserMockup);
    //addDependecy('UserModel', UserModel);
}