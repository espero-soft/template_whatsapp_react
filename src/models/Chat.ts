import { Message } from "./Message";
import { User } from "./User";

export interface Chat {
  _id: string;
  participants: User[];
  lastMassage: Message;
  unreadCount?: number;
  unreadMentionCount?: number;
  isAutoMuted?: boolean;
  archive?: boolean;
  notSpam?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
