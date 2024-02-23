export interface IUser {
  id: number;
  name: string;
  email: string;
  bio: string;
  profilePicture: string;
}

export interface IUpdateUserProfile {
  name: string;
  email: string;
  bio: string;
  profilePicture: string;
}
