import {User} from './user';
import { Conversation } from './conversation';

export interface UserResponse {
  success: boolean;
  users: User[];
  conversation: Conversation[];
  
}

