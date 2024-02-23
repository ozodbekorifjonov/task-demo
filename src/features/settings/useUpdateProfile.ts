import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Api } from '../../utils/enums.ts';
import { updateUserProfileAPI } from '../../api/apiUser.ts';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserProfileAPI,
    onSuccess: async () => {
      toast.success('Setting successfully edited');
      await queryClient.invalidateQueries({ queryKey: [Api.user] });
    },
    onError: (err) => {
      toast.error(err instanceof Error ? err.message : 'An error occurred');
    },
  });

  return { isUpdating, updateProfile };
};
