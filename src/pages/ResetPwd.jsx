// // src/pages/ResetPwd.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Lock, CheckCircle } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const COLOR_PRIMARY = '#006A4E';

// const ResetPwd = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would normally call your API
//     if (password && password === confirmPassword) {
//       setIsSubmitted(true);
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
//               transition={{ type: 'spring', duration: 0.6 }}
//             >
//               <CheckCircle className="mx-auto h-20 w-20" style={{ color: COLOR_PRIMARY }} />
//             </motion.div>
//             <h2 className="mt-6 text-3xl font-bold" style={{ color: COLOR_PRIMARY }}>
//               Password Reset Successful!
//             </h2>
//             <p className="mt-3 text-gray-600">
//               Your password has been changed successfully.
//             </p>
//             <Link
//               to="/login"
//               className="mt-8 inline-block w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
//               style={{ backgroundColor: COLOR_PRIMARY }}
//             >
//               Go to Sign In
//             </Link>
//           </div>
//         ) : (
//           <>
//             {/* Header */}
//             <div className="text-center">
//               <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
//                 <Lock className="h-9 w-9" style={{ color: COLOR_PRIMARY }} />
//               </div>
//               <h2
//                 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight"
//                 style={{ color: COLOR_PRIMARY }}
//               >
//                 Reset Password
//               </h2>
//               <p className="mt-2 text-sm sm:text-base text-gray-600">
//                 Enter your new password below
//               </p>
//             </div>

//             {/* Form */}
//             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//               <div className="space-y-5">
//                 {/* New Password */}
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
//                   <input
//                     type="password"
//                     placeholder="New password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full pl-12 pr-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
//                     style={{ focusRingColor: COLOR_PRIMARY }}
//                     required
//                     minLength={6}
//                   />
//                 </div>

//                 {/* Confirm Password */}
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
//                   <input
//                     type="password"
//                     placeholder="Confirm new password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     className={`w-full pl-12 pr-4 py-3.5 text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
//                       confirmPassword && password !== confirmPassword
//                         ? 'border-red-500 focus:ring-red-500'
//                         : 'border-gray-300'
//                     }`}
//                     style={
//                       confirmPassword && password !== confirmPassword
//                         ? ({ focusRingColor: '#ef4444' })
//                         : ({ focusRingColor: COLOR_PRIMARY })
//                     }
//                     required
//                   />
//                   {confirmPassword && password !== confirmPassword && (
//                     <p className="mt-2 text-sm text-red-600">
//                       Passwords do not match
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 disabled={!password || password !== confirmPassword}
//                 className="w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                 style={{
//                   backgroundColor:
//                     password && password === confirmPassword ? COLOR_PRIMARY : '#9ca3af',
//                 }}
//               >
//                 Reset Password
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

// export default ResetPwd;

// // src/pages/ResetPwd.jsx
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Lock, CheckCircle } from 'lucide-react';
// import { Link, useSearchParams } from 'react-router-dom';
// import axios from '../api/axios';

// const COLOR_PRIMARY = '#006A4E';

// const ResetPwd = () => {
//   const [searchParams] = useSearchParams();
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [email, setEmail] = useState('');
//   const [token, setToken] = useState('');

//   // Extract token and email from URL on mount
//   useEffect(() => {
//     const urlEmail = searchParams.get('email');
//     const urlToken = searchParams.get('token');

//     if (!urlEmail || !urlToken) {
//       setError('Invalid or missing reset link. Please request a new one.');
//       return;
//     }

//     setEmail(urlEmail);
//     setToken(urlToken);
//   }, [searchParams]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       await axios.post('/reset-password', {
//         email: email,
//         token: token,
//         password: password,
//         password_confirmation: confirmPassword,
//       });

//       setIsSubmitted(true);
//     } catch (err) {
//       console.error('Password reset error:', err);
//       const message =
//         err.response?.data?.message ||
//         'Failed to reset password. The link may have expired or been used already.';
//       setError(message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // If link is invalid
//   if (!email || !token) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10 text-center">
//           <h2 className="text-3xl font-bold text-red-600">Invalid Link</h2>
//           <p className="mt-4 text-gray-600">{error}</p>
//           <Link
//             to="/forgot-password"
//             className="mt-6 inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
//           >
//             Request New Reset Link
//           </Link>
//         </div>
//       </div>
//     );
//   }

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
//               Password Reset Successful!
//             </h2>
//             <p className="mt-4 text-gray-600 max-w-sm mx-auto">
//               Your password has been changed successfully.
//             </p>

//             <div className="mt-8">
//               <Link
//                 to="/login"
//                 className="inline-block w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
//                 style={{ backgroundColor: COLOR_PRIMARY }}
//               >
//                 Go to Sign In
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* Header */}
//             <div className="text-center">
//               <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
//                 <Lock className="h-9 w-9" style={{ color: COLOR_PRIMARY }} />
//               </div>
//               <h2 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight" style={{ color: COLOR_PRIMARY }}>
//                 Reset Password
//               </h2>
//               <p className="mt-2 text-sm sm:text-base text-gray-600">
//                 Enter your new password below
//               </p>
//             </div>

//             {/* Form */}
//             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//               <div className="space-y-5">
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
//                   <input
//                     type="password"
//                     placeholder="New password (min 8 characters)"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full pl-12 pr-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
//                     required
//                     minLength={8}
//                     disabled={isLoading}
//                   />
//                 </div>

//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
//                   <input
//                     type="password"
//                     placeholder="Confirm new password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     className={`w-full pl-12 pr-4 py-3.5 text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
//                       confirmPassword && password !== confirmPassword
//                         ? 'border-red-500 focus:ring-red-500'
//                         : 'border-gray-300'
//                     }`}
//                     required
//                     disabled={isLoading}
//                   />
//                   {confirmPassword && password !== confirmPassword && (
//                     <p className="mt-2 text-sm text-red-600">Passwords do not match</p>
//                   )}
//                 </div>

//                 {/* Error Message */}
//                 {error && (
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="text-red-600 text-center text-sm font-medium"
//                   >
//                     {error}
//                   </motion.p>
//                 )}
//               </div>

//               <motion.button
//                 whileHover={{ scale: password && password === confirmPassword ? 1.02 : 1 }}
//                 whileTap={{ scale: password && password === confirmPassword ? 0.98 : 1 }}
//                 type="submit"
//                 disabled={!password || password !== confirmPassword || isLoading}
//                 className="w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
//                 style={{
//                   backgroundColor: password && password === confirmPassword && !isLoading
//                     ? COLOR_PRIMARY
//                     : '#9ca3af',
//                 }}
//               >
//                 {isLoading ? (
//                   <>
//                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                     </svg>
//                     Resetting...
//                   </>
//                 ) : (
//                   'Reset Password'
//                 )}
//               </motion.button>
//             </form>

//             <p className="text-center text-sm text-gray-600">
//               Remember your password?{' '}
//               <Link to="/login" className="font-semibold hover:underline" style={{ color: COLOR_PRIMARY }}>
//                 Sign in
//               </Link>
//             </p>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default ResetPwd;

// src/pages/ResetPwd.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from '../api/axios';

const COLOR_PRIMARY = '#006A4E';

const ResetPwd = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  // Password strength checks
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  // const hasSymbol = /[@$!%*?&#^_+\-=\[\]{};':"\\|,.<>\/~]/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(password);
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  const allChecksPassed =
    hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSymbol && passwordsMatch;

  useEffect(() => {
    const urlEmail = searchParams.get('email');
    const urlToken = searchParams.get('token');

    if (!urlEmail || !urlToken) {
      setError('Invalid or missing reset link. Please request a new one.');
      return;
    }

    setEmail(urlEmail);
    setToken(urlToken);
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await axios.post('/reset-password', {
        email: email,
        token: token,
        password: password,
        password_confirmation: confirmPassword,
      });

      setIsSubmitted(true);
    } 
    // catch (err) {
    //   console.error('Password reset error:', err);
    //   const message =
    //     err.response?.data?.message ||
    //     err.response?.data?.errors?.password?.[0] ||
    //     'Failed to reset password. The link may have expired or been used already.';
    //   setError(message);
    // }
     catch (err) {
  console.error('Password reset error:', err);

  let message = 'Failed to reset password. Please try again.';

  if (err.response?.status === 422 && err.response?.data?.errors) {
    const errors = err.response.data.errors;

    // Prioritize password errors
    if (errors.password) {
      message = errors.password.join(' ');  // e.g. "The password has been compromised..."
    } else if (errors.email) {
      message = errors.email[0];
    } else if (errors.token) {
      message = errors.token[0];
    }
  } else if (err.response?.data?.message) {
    message = err.response.data.message;
  }

  setError(message);
}finally {
      setIsLoading(false);
    }
  };

  // Invalid link
  if (!email || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-3xl font-bold text-red-600">Invalid Link</h2>
          <p className="mt-4 text-gray-600">{error}</p>
          <Link
            to="/forgot-password"
            className="mt-6 inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Request New Reset Link
          </Link>
        </div>
      </div>
    );
  }

  const RequirementItem = ({ met, text }) => (
    <div className="flex items-center gap-2 text-sm">
      {met ? (
        <CheckCircle className="h-4 w-4 text-green-600" />
      ) : (
        <X className="h-4 w-4 text-gray-400" />
      )}
      <span className={met ? 'text-gray-700' : 'text-gray-500'}>{text}</span>
    </div>
  );

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
              Password Reset Successful!
            </h2>
            <p className="mt-4 text-gray-600 max-w-sm mx-auto">
              Your password has been changed successfully.
            </p>

            <div className="mt-8">
              <Link
                to="/login"
                className="inline-block w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: COLOR_PRIMARY }}
              >
                Go to Sign In
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <Lock className="h-9 w-9" style={{ color: COLOR_PRIMARY }} />
              </div>
              <h2 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight" style={{ color: COLOR_PRIMARY }}>
                Reset Password
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Create a strong new password
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-5">
                {/* New Password */}
                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                    <input
                      type="password"
                      placeholder="New password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all focus:ring-green-500"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  {/* Password Requirements */}
                  {password && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 space-y-1 bg-gray-50 p-4 rounded-lg"
                    >
                      <p className="text-xs font-medium text-gray-700 mb-2">Password must contain:</p>
                      <RequirementItem met={hasMinLength} text="At least 8 characters" />
                      <RequirementItem met={hasUppercase} text="One uppercase letter" />
                      <RequirementItem met={hasLowercase} text="One lowercase letter" />
                      <RequirementItem met={hasNumber} text="One number" />
                      <RequirementItem met={hasSymbol} text="One special character (e.g. !@#$%^&*)" />
                    </motion.div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full pl-12 pr-4 py-3.5 text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
                      confirmPassword && !passwordsMatch
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-green-500'
                    }`}
                    required
                    disabled={isLoading}
                  />
                  {confirmPassword && !passwordsMatch && (
                    <p className="mt-2 text-sm text-red-600">Passwords do not match</p>
                  )}
                </div>

                {/* Server Error Message */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 text-center text-sm font-medium bg-red-50 py-3 px-4 rounded-lg"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: allChecksPassed ? 1.02 : 1 }}
                whileTap={{ scale: allChecksPassed ? 0.98 : 1 }}
                type="submit"
                disabled={!allChecksPassed || isLoading}
                className="w-full py-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                style={{
                  backgroundColor: allChecksPassed && !isLoading ? COLOR_PRIMARY : '#9ca3af',
                }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Resetting...
                  </>
                ) : (
                  'Reset Password'
                )}
              </motion.button>
            </form>

            <p className="text-center text-sm text-gray-600">
              Remember your password?{' '}
              <Link to="/login" className="font-semibold hover:underline" style={{ color: COLOR_PRIMARY }}>
                Sign in
              </Link>
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ResetPwd;