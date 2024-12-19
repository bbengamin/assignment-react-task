import {useQuery, useMutation} from '@tanstack/react-query';
import {getUsersService, createUserService} from "../services/userService";
import type {FormData} from '../types/Form'

export const useUsers = () => {
  const {
    data: users,
    isPending: isUsersLoading,
    refetch: refetchUsers,
    isRefetching: isUsersRefetching
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsersService(),
    enabled: false
  });

  const {mutate: createUser, isPending: isCreatingUser} = useMutation({
    mutationFn: (newUser: FormData) => createUserService(newUser),
    onSuccess: () => refetchUsers()
  });

  return {
    users,
    isUsersLoading,
    isUsersRefetching,
    createUser,
    isCreatingUser,
    refetchUsers,
  };
};
