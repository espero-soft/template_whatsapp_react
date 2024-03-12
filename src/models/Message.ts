export enum TypeMessage {
  TEXT,
  IMAGE,
  VIDEO,
  AUDIO,
  PDF,
}
export interface Message {
  _id?: string;
  chatId: string;
  content: string;
  type: TypeMessage| string;
  ownership: string;
  sender: string;
  file?: string;
  shared: boolean;
  created_at?: Date;
  updated_at?: Date;
}
