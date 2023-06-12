export interface IActor {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface IRepo {
  id: number;
  name: string;
  url: string;
}

export interface EventData {
  id: string;
  type: string;
  actor: IActor;
  repo: IRepo;
  payload: {action: string};
  public: boolean;
  created_at: string;
}
