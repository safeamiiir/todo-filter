import { requestsTypes } from 'api/index';

export interface ListType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface RequestConfigType {
  url: string;
  method: keyof typeof requestsTypes;
}
