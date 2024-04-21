import React, { useEffect, useState } from 'react';

// Definición de la interfaz
interface UserData {
  userId: string;
  email: string;
}

function ProfilePage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState('');

  console.log(localStorage.getItem('authToken'));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch('http://localhost:3000/auth/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch user data');
        }

        const data: UserData = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load user data');
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md">
        {user ? (
          <div>
            <p>Tu id es: {user.userId}</p>
            <p>Iniciaste sesión con el email: {user.email}</p>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
