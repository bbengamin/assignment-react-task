import React, {useEffect} from 'react';
import {useUsers} from "../hooks/useUsers";

function Table() {
  const {
    users,
    isUsersLoading,
    isUsersRefetching,
    refetchUsers,
  } = useUsers();

  useEffect(() => {
    refetchUsers()
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center h-full">
      {isUsersLoading || isUsersRefetching ?
        (<div
          className="inline-block h-20 w-20 animate-spin rounded-full mt-60 border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
        </div>) : (
          <div
            className="overflow-x-auto hide-scrollbar w-full rounded-md p-7 border border-gray-300">
            <div className="inline-block min-w-full">
              <div className="overflow-auto hide-scrollbar max-h-[500px]">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-start">ID</th>
                    <th scope="col" className="px-6 py-4 text-end">First Name</th>
                    <th scope="col" className="px-6 py-4 text-end">Last name</th>
                    <th scope="col" className="px-6 py-4 text-end">Created At</th>
                  </tr>
                  </thead>
                  <tbody>
                  {users?.map(user => (
                    <tr key={user.id} className="border-b">
                      <td className="whitespace-nowrap px-6 py-2 text-start">{user.id}</td>
                      <td className="whitespace-nowrap px-6 py-2 font-medium text-end">{user.firstName}</td>
                      <td className="whitespace-nowrap px-6 py-2 font-medium text-end">{user.lastName}</td>
                      <td
                        className="whitespace-nowrap px-6 py-2 text-end">{user.createdAt && new Date(user.createdAt).toLocaleString()}</td>
                    </tr>))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>)}
    </div>
  );
}

export default Table
