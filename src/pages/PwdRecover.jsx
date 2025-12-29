// // src/pages/PwdRecover.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, CheckCircle } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const COLOR_PRIMARY = '#006A4E';

// const PwdRecover = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate API call (replace with real one later)
//     setTimeout(() => {
//       setIsSubmitted(true);
//       setIsLoading(false);
//     }, 1500);

//     // Example real API call:
//     // await fetch('/api/forgot-password', { method: 'POST', body: JSON.stringify({ email }) })
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: 'easeOut' }}
//         className="w-full max-w-md space-y-8 bg-white p-6 sm:p-10 rounded-2xl shadow-xl"
//       >
//         {/* Success State */}
//         {isSubmitted ? (
//           <div className="text-center py-10">
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: 'spring', stiffness: 200, damping: 15 }}
//             >
//               <CheckCircle className="mx-auto h-20 w-20" style={{ color: COLOR_PRIMARY }} />
//             </motion.div>

//             <h2 className="mt-6 text-3xl font-bold" style={{ color: COLOR_PRIMARY }}>
//               Check Your Email
//             </h2>
//             <p className="mt-4 text-gray-600 max-w-sm mx-auto leading-relaxed">
//               We’ve sent a password reset link to
//               <br />
//               <span className="font-semibold">{email}</span>
//             </p>
//             <p className="mt-6 text-sm text-gray-500">
//               Click the link in the email to reset your password.
//               <br />
//               The link will expire in 15 minutes.
//             </p>

//             <div className="mt-8 space-y-4">
//               <Link
//                 to="/login"
//                 className="inline-block w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
//                 style={{ backgroundColor: COLOR_PRIMARY }}
//               >
//                 Back to Sign In
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* Header */}
//             <div className="text-center">
//               <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
//                 <Mail className="h-9 w-9" style={{ color: COLOR_PRIMARY }} />
//               </div>
//               <h2
//                 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight"
//                 style={{ color: COLOR_PRIMARY }}
//               >
//                 Forgot Password?
//               </h2>
//               <p className="mt-2 text-sm sm:text-base text-gray-600">
//                 Enter your email and we’ll send you a link to reset your password
//               </p>
//             </div>

//             {/* Form */}
//             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
//                   style={{ focusRingColor: COLOR_PRIMARY }}
//                   required
//                 />
//               </div>

//               {/* Submit Button */}
//               <motion.button
//                 whileHover={{ scale: email ? 1.02 : 1 }}
//                 whileTap={{ scale: email ? 0.98 : 1 }}
//                 type="submit"
//                 disabled={!email || isLoading}
//                 className="w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
//                 style={{
//                   backgroundColor: email ? COLOR_PRIMARY : '#9ca3af',
//                 }}
//               >
//                 {isLoading ? (
//                   <>
//                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                         fill="none"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8z"
//                       />
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   'Send Reset Link'
//                 )}
//               </motion.button>
//             </form>

//             {/* Back to Login */}
//             <p className="text-center text-sm text-gray-600">
//               Remember your password?{' '}
//               <br />
//               <Link
//                 to="/login"
//                 className="font-semibold hover:underline transition-all"
//                 style={{ color: COLOR_PRIMARY }}
//               >
//                 Sign in
//               </Link>
//             </p>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default PwdRecover;

// // src/pages/PwdRecover.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, CheckCircle } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import axios from '../api/axios'; // Same axios used in AuthContext

// const COLOR_PRIMARY = '#006A4E';

// const PwdRecover = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       // Real API call to Laravel backend
//       await axios.post('/forgot-password', { email });

//       // Success: Show confirmation screen
//       setIsSubmitted(true);
//     } catch (err) {
//       // Handle errors (e.g., email not found, server error)
//       const message =
//         err.response?.data?.message ||
//         err.response?.data?.errors?.email?.[0] ||
//         'Unable to send reset link. Please try again later.';

//       setError(message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: 'easeOut' }}
//         className="w-full max-w-md space-y-8 bg-white p-6 sm:p-10 rounded-2xl shadow-xl"
//       >
//         {/* Success State */}
//         {isSubmitted ? (
//           <div className="text-center py-10">
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: 'spring', stiffness: 200, damping: 15 }}
//             >
//               <CheckCircle className="mx-auto h-20 w-20" style={{ color: COLOR_PRIMARY }} />
//             </motion.div>

//             <h2 className="mt-6 text-3xl font-bold" style={{ color: COLOR_PRIMARY }}>
//               Check Your Email
//             </h2>
//             <p className="mt-4 text-gray-600 max-w-sm mx-auto leading-relaxed">
//               We’ve sent a password reset link to
//               <br />
//               <span className="font-semibold">{email}</span>
//             </p>
//             <p className="mt-6 text-sm text-gray-500">
//               Click the link in the email to reset your password.
//               <br />
//               The link will expire in 60 minutes.
//             </p>

//             <div className="mt-8">
//               <Link
//                 to="/login"
//                 className="inline-block w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
//                 style={{ backgroundColor: COLOR_PRIMARY }}
//               >
//                 Back to Sign In
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* Header */}
//             <div className="text-center">
//               <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
//                 <Mail className="h-9 w-9" style={{ color: COLOR_PRIMARY }} />
//               </div>
//               <h2
//                 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight"
//                 style={{ color: COLOR_PRIMARY }}
//               >
//                 Forgot Password?
//               </h2>
//               <p className="mt-2 text-sm sm:text-base text-gray-600">
//                 Enter your email and we’ll send you a link to reset your password
//               </p>
//             </div>

//             {/* Form */}
//             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-all"
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               {/* Error Message */}
//               {error && (
//                 <motion.p
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="text-red-600 text-center text-sm font-medium"
//                 >
//                   {error}
//                 </motion.p>
//               )}

//               {/* Submit Button */}
//               <motion.button
//                 whileHover={{ scale: email ? 1.02 : 1 }}
//                 whileTap={{ scale: email ? 0.98 : 1 }}
//                 type="submit"
//                 disabled={!email || isLoading}
//                 className="w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
//                 style={{
//                   backgroundColor: email && !isLoading ? COLOR_PRIMARY : '#9ca3af',
//                 }}
//               >
//                 {isLoading ? (
//                   <>
//                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                         fill="none"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8z"
//                       />
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   'Send Reset Link'
//                 )}
//               </motion.button>
//             </form>

//             {/* Back to Login */}
//             <p className="text-center text-sm text-gray-600">
//               Remember your password?{' '}
//               <Link
//                 to="/login"
//                 className="font-semibold hover:underline transition-all"
//                 style={{ color: COLOR_PRIMARY }}
//               >
//                 Sign in
//               </Link>
//             </p>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default PwdRecover;


// // src/pages/PwdRecover.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, CheckCircle } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import axios from '../api/axios';

// const COLOR_PRIMARY = '#006A4E';

// const PwdRecover = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     console.log('🔄 Password reset request started for email:', email);

//     try {
//       const response = await axios.post('/forgot-password', { email });

//       console.log('✅ Password reset link sent successfully:', response.data);
//       setIsSubmitted(true);
//     } catch (err) {
//       // Detailed console logging for debugging
//       console.error('❌ Error sending password reset link:');
//       console.error('   - Error object:', err);
//       console.error('   - Response status:', err.response?.status);
//       console.error('   - Response data:', err.response?.data);
//       console.error('   - Request config:', err.config);

//       // User-friendly error message
//       const message =
//         err.response?.data?.message ||
//         err.response?.data?.errors?.email?.[0] ||
//         'Unable to send reset link. Please check your email or try again later.';

//       setError(message);
//     } finally {
//       setIsLoading(false);
//       console.log('🔚 Password reset request finished');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: 'easeOut' }}
//         className="w-full max-w-md space-y-8 bg-white p-6 sm:p-10 rounded-2xl shadow-xl"
//       >
//         {/* Success State */}
//         {isSubmitted ? (
//           <div className="text-center py-10">
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: 'spring', stiffness: 200, damping: 15 }}
//             >
//               <CheckCircle className="mx-auto h-20 w-20" style={{ color: COLOR_PRIMARY }} />
//             </motion.div>

//             <h2 className="mt-6 text-3xl font-bold" style={{ color: COLOR_PRIMARY }}>
//               Check Your Email
//             </h2>
//             <p className="mt-4 text-gray-600 max-w-sm mx-auto leading-relaxed">
//               We’ve sent a password reset link to
//               <br />
//               <span className="font-semibold">{email}</span>
//             </p>
//             <p className="mt-6 text-sm text-gray-500">
//               Click the link in the email to reset your password.
//               <br />
//               The link will expire in 60 minutes.
//             </p>

//             <div className="mt-8">
//               <Link
//                 to="/login"
//                 className="inline-block w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
//                 style={{ backgroundColor: COLOR_PRIMARY }}
//               >
//                 Back to Sign In
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* Header */}
//             <div className="text-center">
//               <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
//                 <Mail className="h-9 w-9" style={{ color: COLOR_PRIMARY }} />
//               </div>
//               <h2
//                 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight"
//                 style={{ color: COLOR_PRIMARY }}
//               >
//                 Forgot Password?
//               </h2>
//               <p className="mt-2 text-sm sm:text-base text-gray-600">
//                 Enter your email and we’ll send you a link to reset your password
//               </p>
//             </div>

//             {/* Form */}
//             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-all"
//                   required
//                   disabled={isLoading}
//                 />
//               </div>

//               {/* Error Message */}
//               {error && (
//                 <motion.p
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="text-red-600 text-center text-sm font-medium"
//                 >
//                   {error}
//                 </motion.p>
//               )}

//               {/* Submit Button */}
//               <motion.button
//                 whileHover={{ scale: email ? 1.02 : 1 }}
//                 whileTap={{ scale: email ? 0.98 : 1 }}
//                 type="submit"
//                 disabled={!email || isLoading}
//                 className="w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
//                 style={{
//                   backgroundColor: email && !isLoading ? COLOR_PRIMARY : '#9ca3af',
//                 }}
//               >
//                 {isLoading ? (
//                   <>
//                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                         fill="none"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8z"
//                       />
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   'Send Reset Link'
//                 )}
//               </motion.button>
//             </form>

//             {/* Back to Login */}
//             <p className="text-center text-sm text-gray-600">
//               Remember your password?{' '}
//               <Link
//                 to="/login"
//                 className="font-semibold hover:underline transition-all"
//                 style={{ color: COLOR_PRIMARY }}
//               >
//                 Sign in
//               </Link>
//             </p>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default PwdRecover;

// src/pages/PwdRecover.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';

const COLOR_PRIMARY = '#006A4E';

const PwdRecover = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    console.log('🔄 Password reset request started for email:', email);

    try {
      const response = await axios.post('/forgot-password', { email });

      console.log('✅ Password reset link sent successfully:', response.data);
      setIsSubmitted(true);
    } catch (err) {
      console.error('❌ Error sending password reset link:');
      console.error('   - Error object:', err);
      console.error('   - Response status:', err.response?.status);
      console.error('   - Response data:', err.response?.data);
      console.error('   - Request config:', err.config);

      const message =
        // err.response?.data?.message ||
        // err.response?.data?.errors?.email?.[0] ||
        'Unable to send reset link. Please check your email or try again later.';

      setError(message);
    } finally {
      setIsLoading(false);
      console.log('🔚 Password reset request finished');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md space-y-8 bg-white p-6 sm:p-10 rounded-2xl shadow-xl"
      >
        {/* Success State */}
        {isSubmitted ? (
          <div className="text-center py-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <CheckCircle className="mx-auto h-20 w-20" style={{ color: COLOR_PRIMARY }} />
            </motion.div>

            <h2 className="mt-6 text-3xl font-bold" style={{ color: COLOR_PRIMARY }}>
              Check Your Email
            </h2>
            <p className="mt-4 text-gray-600 max-w-sm mx-auto leading-relaxed">
              We’ve sent a password reset link to
              <br />
              <span className="font-semibold">{email}</span>
            </p>
            <p className="mt-6 text-sm text-gray-500">
              Click the link in the email to reset your password.
              <br />
              The link will expire in 60 minutes.
            </p>

            <div className="mt-8">
              <Link
                to="/login"
                className="inline-block w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: COLOR_PRIMARY }}
              >
                Back to Sign In
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <Mail className="h-9 w-9" style={{ color: COLOR_PRIMARY }} />
              </div>
              <h2
                className="mt-6 text-3xl sm:text-4xl font-bold leading-tight"
                style={{ color: COLOR_PRIMARY }}
              >
                Forgot Password?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Enter your email and we’ll send you a link to reset your password
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="w-full pl-12 pr-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-all"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-center text-sm font-medium"
                >
                  {error}
                </motion.p>
              )}

              {/* Submit Button with Loading State */}
              <motion.button
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                type="submit"
                disabled={!email || isLoading}
                className={`w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md transition-all flex items-center justify-center gap-3 ${
                  isLoading
                    ? 'bg-green-700 cursor-wait'
                    : 'hover:shadow-lg'
                }`}
                style={{
                  backgroundColor: isLoading ? '#065f45' : COLOR_PRIMARY,
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </motion.button>
            </form>

            {/* Back to Login */}
            <p className="text-center text-sm text-gray-600">
              Remember your password?{' '}
              <Link
                to="/login"
                className={`font-semibold transition-all ${
                  isLoading ? 'pointer-events-none opacity-50' : 'hover:underline'
                }`}
                style={{ color: COLOR_PRIMARY }}
              >
                Sign in
              </Link>
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default PwdRecover;