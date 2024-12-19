import React, {useState, useEffect} from "react";
import Modal from "./components/Modal";
import Form from "./components/Form";
import Table from "./components/Table";
import {useUsers} from "./hooks/useUsers";
import {FormData} from "./types/Form";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    users,
    isUsersLoading,
    isUsersRefetching,
    isCreatingUser,
    createUser,
    refetchUsers
  } = useUsers();

  useEffect(() => {
    refetchUsers()
  }, []);

  const submitForm = (formData: FormData) => {
    createUser(formData)
    closeModal()
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <div className={'flex flex-col p-4 md:p-8 gap-5 md:gap-8'}>
        <button
          onClick={openModal}
          className="px-4 py-2 background-gradient-base text-white rounded-xl hover:background-gradient-hover focus:outline-none focus:ring-2 focus:ring-[#7FBDD966] active:background-gradient-active max-w-40"
        >
          Add user
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-medium mb-4">Fill out the form</h2>
          <Form onSubmit={submitForm}/>
        </Modal>
        <Table items={users || []} loading={isUsersLoading || isUsersRefetching || isCreatingUser}/>
      </div>
    </div>
  );
}

export default App;
