'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/organisms/Navbar';

// Array de usuarios como lo solicitaste.
const allowedUsers = [
  { user: 'julio', password: 'passwordJulio', products: '3,4' },
  { user: 'ana', password: 'passwordAna', products: '1,2' },
  { user: 'luis', password: 'passwordLuis', products: '5,6' },
  { user: 'maria', password: 'passwordMaria', products: '7,8' },
  { user: 'carlos', password: 'passwordCarlos', products: '3,7' },
  {
    user: 'sofia',
    password: 'passwordSofia',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'pedro',
    password: 'passwordPedro',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'JamesKelley',
    password: 'passwordJames',
  },
  {
    user: 'RichardLewis',
    password: 'passwordRichard',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'CarlosAlonso',
    password: 'passwordCarlos',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'julioCesar',
    password: 'passwordJulio',
  },
];

const LoginPage = () => {
  // 1. Hooks para manejar el estado y la navegación
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 2. Lógica para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Busca si el usuario existe en el array
    const foundUser = allowedUsers.find((u) => u.user === username);

    // Valida si el usuario fue encontrado y si la contraseña es correcta
    if (foundUser && foundUser.password === password) {
      // Credenciales correctas
      setError(''); // Limpia cualquier error previo

      router.push('/products');
    } else {
      // Credenciales incorrectas
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      <Navbar withAll={false} textBlack={true} />
      <main className='flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-700'>
        {/* --- CAMBIO: Tarjeta con efecto "glassmorphism" --- */}
        <div className='w-full max-w-md p-8 space-y-8 bg-black/20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl'>
          {/* Header Section */}
          <div className='text-center'>
            {/* --- CAMBIO: Colores de texto para fondo oscuro --- */}
            <h1 className='text-3xl font-bold text-white'>Welcome Back</h1>
            <p className='mt-2 text-indigo-200/90'>
              Please sign in to access your account
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            {/* Email Input */}
            <div>
              <label
                htmlFor='username'
                className='block mb-2 text-sm font-medium text-indigo-200'
              >
                Username
              </label>
              {/* --- CAMBIO: Estilo de inputs para tema oscuro --- */}
              <input
                id='username'
                name='username'
                type='text'
                autoComplete='username'
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='w-full px-4 py-3 text-white bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all'
                placeholder='you@example.com'
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-indigo-200'
              >
                Password
              </label>
              {/* --- CAMBIO: Estilo de inputs para tema oscuro --- */}
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-4 py-3 text-white bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all'
                placeholder='••••••••'
              />
            </div>

            {/* Error Message */}
            {error && <div className='text-sm text-red-400'>{error}</div>}

            {/* Submit Button */}
            <div>
              {/* --- CAMBIO: Estilo de botón consistente con el tema --- */}
              <button
                type='submit'
                className='w-full px-4 py-3 font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500 transition-colors duration-300'
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
