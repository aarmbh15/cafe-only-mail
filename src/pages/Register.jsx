// // src/pages/Register.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { User, Mail, Lock } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import axios from '../api/axios';

// const COLOR_PRIMARY = '#006A4E';

// const Register = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setError('');
//       setSuccess('');

//       const response = await axios.post("/register", formData);

//       // setSuccess("Account created successfully!");
//       // setTimeout(() => navigate("/login"), 1200);
//        // Show SweetAlert instead of plain text
//     Swal.fire({
//       icon: 'success',
//       title: 'Success!',
//       text: 'Account created successfully! Password sent to email.',
//       confirmButtonColor: COLOR_PRIMARY,
//     }).then(() => {
//       navigate("/login"); // Redirect after user clicks OK
//     });

//     } catch (err) {
//       // setError(err.response?.data?.message || "Something went wrong");
//       Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: err.response?.data?.message || "Something went wrong",
//     });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: 'easeOut' }}
//         className="w-full max-w-md space-y-8 p-6 sm:p-10 rounded-2xl shadow-xl"
//       >
//         <div className="text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: COLOR_PRIMARY }}>
//             Create Account
//           </h2>
//           <p className="mt-2 text-sm sm:text-base text-gray-600">Join VERDANT Threads today</p>
//         </div>

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-5">
            
//             {/* First Name */}
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
//               <input
//                 type="text"
//                 name="first_name"
//                 placeholder="First name"
//                 value={formData.first_name}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>

//             {/* Last Name */}
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
//               <input
//                 type="text"
//                 name="last_name"
//                 placeholder="Last name"
//                 value={formData.last_name}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>

//             {/* Password */}
//             {/* <div className="relative">
//               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Create password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div> */}
//           </div>

//           {/* Success & Error */}
//           {error && <p className="text-red-500 text-center">{error}</p>}
//           {success && <p className="text-green-600 text-center">{success}</p>}

//           {/* Submit Button */}
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             className="w-full py-4 rounded-lg text-white font-semibold text-lg"
//             style={{ backgroundColor: COLOR_PRIMARY }}
//           >
//             Create Account
//           </motion.button>
//         </form>

//         <p className="text-center text-sm text-gray-600">
//           Already have an account? <br />
//           <Link to="/login" style={{ color: COLOR_PRIMARY }}>Sign in</Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from '../api/axios';

const COLOR_PRIMARY = '#006A4E';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setIsLoading(true); // ← Start loading

      const response = await axios.post("/register", formData);

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Account created successfully! Password sent to email.',
        confirmButtonColor: COLOR_PRIMARY,
      }).then(() => {
        navigate("/login");
      });

    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Something went wrong",
      });
    } finally {
      setIsLoading(false); // ← Always stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md space-y-8 p-6 sm:p-10 rounded-2xl shadow-xl"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: COLOR_PRIMARY }}>
            Create Account
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">Join Cafe Lamees today</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            {/* First Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg"
                required
                disabled={isLoading}
              />
            </div>

            {/* Last Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg"
                required
                disabled={isLoading}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg"
                required
                disabled={isLoading}
              />
            </div>

            {/* You can uncomment password field when you decide to use it */}
            {/* 
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg"
                required
                disabled={isLoading}
              />
            </div>
            */}
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Submit Button with Loading State */}
          <motion.button
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 rounded-lg text-white font-semibold text-lg flex items-center justify-center gap-3 transition-colors ${
              isLoading 
                ? 'bg-green-700 cursor-wait' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
            style={{ backgroundColor: isLoading ? undefined : COLOR_PRIMARY }}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Creating account...</span>
              </>
            ) : (
              'Create Account'
            )}
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account? <br />
          <Link 
            to="/login" 
            style={{ color: COLOR_PRIMARY }}
            className={isLoading ? "pointer-events-none opacity-50" : ""}
          >
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;