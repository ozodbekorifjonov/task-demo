import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Api } from '../../utils/enums.ts';
import { updateUserProfileAPI } from '../../api/apiUser.ts';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isPending: isUpdating } = useMutation({
    mutationFn: updateUserProfileAPI,
    onSuccess: async () => {
      toast.success('User data updated  successfully');
      await queryClient.invalidateQueries({ queryKey: [Api.profile] });
    },
    onError: (err) => {
      toast.error(err instanceof Error ? err.message : 'An error occurred');
    },
  });

  return { updateProfile, isUpdating };
};
