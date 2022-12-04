import { Timestamp } from '@angular/fire/firestore';
import { ProfileUser } from './user-profile';

export interface Chat {
  id: string;
  lastMessage?: string;
  lastMessageDate?: Date & Timestamp;
  userIds: string[];
  users: ProfileUser[];

  // Not stored, only for display
  imagemChat?: string;
  nomeChat?: string;
}

export interface Message {
  text: string;
  senderId: string;
  sentDate: Date & Timestamp;
}
