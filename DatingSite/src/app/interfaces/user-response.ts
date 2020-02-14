import {User, Messages} from './user';

export interface UserResponse {
  success: boolean;
  users: User[];
  messages: Messages[];
  
  
}

