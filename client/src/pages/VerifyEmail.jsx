import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const VerifyEmail = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const { verifyEmail } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!email) {
            setError('No email found. Please register again.');
            return;
        }

        const res = await verifyEmail(email, otp);
        if (res.success) {
            setMessage('Email verified! Redirecting to dashboard...');
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Verify Email</h2>
                <p className="text-center text-gray-600 mb-6">Check your email for the OTP code.</p>
                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">{error}</div>}
                {message && <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">{message}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">OTP Code</label>
                        <input
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center tracking-widest text-xl"
                            required
                            maxLength="6"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
                    >
                        Verify
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyEmail;
