import axios from './index';
import { IUpdateUserProfile, IUser } from '../interfaces/user';

export const fetchUserProfileAPI = async (): Promise<IUser> => {
  const response = await axios.get<IUser>('/user');
  return response.data;
};

export const updateUserProfileAPI = async ({
  id,
  values,
}: {
  id: number;
  values: IUpdateUserProfile;
}): Promise<IUser> => {
  const response = await axios.put<IUser>(`/user/${id}`, { body: values });
  return response.data;
};
