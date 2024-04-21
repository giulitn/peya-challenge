// src/components/RegistrationForm.tsx
import { useState } from 'react';
import { RegisterData } from './RegisterPage';

interface RegistrationFormProps {
  onRegister: (
    data: RegisterData,
  ) => Promise<{ ok: boolean; message?: string }>;
}

function RegistrationForm({ onRegister }: RegistrationFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = await onRegister({ name, email, password });
      if (!result.ok) throw new Error(result.message || 'Failed to register');
    } catch (error) {
      if (error instanceof Error) {
        setError('Failed to register: ' + error.message);
      }
    }
  };

  return (
    <div className="register-form max-w-md mx-auto mt-10 p-8 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-5">Registrar usuario</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <label className="block">
          Nombre:
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="block">
          Email:
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="block">
          Contraseña:
          <input
            type="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Registrar usuario
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default RegistrationForm;
