import {User} from './user';

export interface UserResponse {
  success: boolean;
  users: User[];
}
