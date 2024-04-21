import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import RegistrationSuccess from './RegistrationSuccess';

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

function RegisterPage() {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  const onRegister = async ({
    name,
    email,
    password,
  }: RegisterData): Promise<{ ok: boolean; message?: string }> => {
    const response = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (response.ok) {
      setIsRegistered(true);
      return { ok: true };
    } else {
      const errorData = await response.json();
      return { ok: false, message: errorData.message || 'Failed to register' };
    }
  };

  if (isRegistered) {
    return <RegistrationSuccess onContinue={() => navigate('/login')} />;
  }

  return <RegistrationForm onRegister={onRegister} />;
}

export default RegisterPage;
