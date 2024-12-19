import React, {useState, ChangeEvent, FormEvent} from 'react';
import Input from './Input';
import {validateForm} from "../utils/validations";
import {FormData, ErrorState} from '../types/Form'
import {User} from "../types/User";
import {useUsers} from "../hooks/useUsers";

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

function Form({onSubmit}: FormProps) {
  const emptyUserData: User = {id: '', firstName: '', lastName: ''}

  const {isCreatingUser} = useUsers()

  const [formData, setFormData] = useState<FormData>(emptyUserData);
  const [error, setError] = useState<ErrorState>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setError({...error, [e.target.name]: ''});
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <Input
        label="First name"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="John"
        errorMessage={error.firstName}
        isError={!!error.firstName}
        required
      />
      <Input
        label="Last name"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Doe"
        errorMessage={error.lastName}
        isError={!!error.lastName}
        required
      />
      <button
        type="submit"
        className="max-w-[72px] w-full py-1 bg-blue-400 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isCreatingUser}

      >
        Submit
      </button>
    </form>
  );
}

export default Form;
