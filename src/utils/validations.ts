import type {FormData, ErrorState} from '../types/Form'

export const validateForm = (formData: FormData): ErrorState => {
  const errors: ErrorState = {};

  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!formData.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }
  
  return errors;
};
