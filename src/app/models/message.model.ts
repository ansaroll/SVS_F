export class Message {
  _id?: string;
  expId?: string | null;
  expName?: string;
  // destId?: string;
  isAdmin?: boolean;
  isFile?: boolean;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
