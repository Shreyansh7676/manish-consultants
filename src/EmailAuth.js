import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

export default function CtaOne() {
    const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Successfully logged out');
      navigate('contact');
    } catch (err) {
      console.error('Error logging out:', err);
    }}
    if (error) {
        return <div>Error: {error.message}</div>;
      }
    return (
        <section className="bg-gradient-to-t from-green-300 to-blue-400 py-48">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto w-full text-center md:max-w-4xl backdrop-blur-sm bg-white/30 py-4 rounded-lg">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl w-full">
                        Email Auth
                    </h2>
                    <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-gray-600 px-4">
                        xyz@gmail.com
                    </p>
                </div>

            </div>
        </section>
    )
}
