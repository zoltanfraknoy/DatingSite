import { ConversationMessages } from './conversation-messages';

export interface Conversation {

    id: number;
    conversationMessages: ConversationMessages[];
    convStarter: string;
    convPartner: string;
}
