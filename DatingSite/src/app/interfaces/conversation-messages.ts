import { Conversation } from './conversation';

export interface ConversationMessages {

    id: number;
    author: string;
    partner: string;
    creationDate: Date;
    conversation: Conversation;
}
