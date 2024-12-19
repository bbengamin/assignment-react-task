import {useQuery, useMutation} from '@tanstack/react-query';
import {getUsersService, createUserService} from "../services/userService";
import {User} from '../types/User';

export const useUsers = () => {
  const {
    data: users,
    isPending: isUsersLoading,
    refetch: refetchUsers,
    isRefetching: isUsersRefetching
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsersService()
  });

  const {mutate: createUser, isPending: isCreatingUser} = useMutation({
    mutationFn: (newUser: Partial<User>) => createUserService(newUser),
    onSuccess: () => refetchUsers()
  });
  
  return {
    users,
    isUsersLoading,
    isUsersRefetching,
    createUser,
    isCreatingUser,
  };
};
