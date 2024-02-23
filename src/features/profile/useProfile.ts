import { useQuery } from '@tanstack/react-query';
import { Api } from '../../utils/enums.ts';
import { fetchUserProfileAPI } from '../../api/apiUser.ts';

export const useProfile = () => {
  const {
    isLoading,
    data: profile,
    error,
  } = useQuery({
    queryKey: [Api.profile],
    queryFn: fetchUserProfileAPI,
  });

  return { isLoading, error, profile };
};
