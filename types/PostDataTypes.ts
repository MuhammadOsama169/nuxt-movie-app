export interface PostTypes {
  id: number;
  user_id: number;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
}

export const initialPostData: PostTypes[] = [];
