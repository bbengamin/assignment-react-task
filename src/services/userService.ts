import {User} from '../types/User';

const API_URL = process.env.REACT_APP_BASE_API_URL;

export async function getUsersService(): Promise<User[]> {
  try {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw new Error(`Error fetching users: ${error}`);
  }
}

export async function createUserService(newUser: Partial<User>): Promise<User> {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    return await response.json();
  } catch (error: any) {
    console.error('Error:', error);
    throw new Error(`Error creating user: ${error}`);
  }
}
