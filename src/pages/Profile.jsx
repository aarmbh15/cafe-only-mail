// import React, { useState, useEffect, useContext } from 'react';
// import axios from '../api/axios';
// import { User, Mail, Phone, MapPin, Heart, Package, CreditCard, Settings, LogOut, Camera, Edit2, ChevronRight } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const COLOR_PRIMARY = '#006A4E';

// const Profile = () => {
//   const { user, loading, logout, refetch } = useContext(AuthContext);
//   const [activeTab, setActiveTab] = useState('profile');
//   const [profilePic, setProfilePic] = useState(null);
  
// useEffect(() => {
//   if (user?.profile_picture) {
//     setProfilePic(user.profile_picture);
//   }
// }, [user]);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePic(reader.result);
//         // TODO: later add upload to backend
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleLogout = async () => {
  
//   await logout();  // ← Full backend + frontend logout
//   // Redirect is already handled inside AuthContext

// };

//   if (loading) {
//     return ( /* your skeleton loader here */
//       <div className="min-h-screen bg-gray-50 pt-20 px-4">
//       <div className="max-w-6xl mx-auto py-8">
//         <div className="h-8 bg-gray-200 rounded w-48 mb-8 animate-pulse" />
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           <div className="hidden lg:block">
//             <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
//               <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
//               <div className="h-6 bg-gray-300 rounded w-32 mx-auto mb-2" />
//               <div className="h-4 bg-gray-300 rounded w-48 mx-auto" />
//             </div>
//           </div>
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-2xl shadow-lg p-10 space-y-6">
//               <div className="h-8 bg-gray-200 rounded w-64" />
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {[1,2,3,4].map(i => (
//                   <div key={i}>
//                     <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
//                     <div className="h-12 bg-gray-100 rounded-xl" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     );
//   }


//   if (!user) {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//         <p className="text-2xl">Please log in to view your profile.</p>
//         <Link to="/login" className="ml-4 text-primary underline">Go to Login</Link>
//       </div>
//   );
// }

//   const menuItems = [
//     { id: 'profile', label: 'My Profile', icon: User },
//     { id: 'orders', label: 'My Orders', icon: Package },
//     { id: 'wishlist', label: 'Wishlist', icon: Heart },
//     { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
//     { id: 'payment', label: 'Payment Methods', icon: CreditCard },
//     { id: 'settings', label: 'Account Settings', icon: Settings },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8" style={{ color: COLOR_PRIMARY }}>
//           My Account
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar */}
//           <div className="hidden lg:block">
//             <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
//               <div className="p-6 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
//                 <div className="relative">
//                   <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                     {profilePic ? (
//                       <img src={profilePic} alt="Profile" className="w-full h-full rounded-full object-cover" />
//                     ) : (
//                       <User size={48} />
//                     )}
//                     <label className="absolute bottom-0 right-0 bg-white text-emerald-600 rounded-full p-2 cursor-pointer shadow-lg hover:scale-110 transition">
//                       <Camera size={16} />
//                       <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//                     </label>
//                   </div>
//                   <h3 className="text-xl font-bold mt-4 text-center">{user.name}</h3>
//                   <p className="text-emerald-100 text-center text-sm">{user.email}</p>
//                 </div>
//               </div>

//               <nav className="p-4">
//                 {menuItems.map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <button
//                       key={item.id}
//                       onClick={() => setActiveTab(item.id)}
//                       className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition mb-2 ${
//                         activeTab === item.id ? 'bg-emerald-50 text-primary font-semibold shadow-md' : 'hover:bg-gray-50'
//                       }`}
//                       style={{ color: activeTab === item.id ? COLOR_PRIMARY : '#374151' }}
//                     >
//                       <div className="flex items-center gap-3">
//                         <Icon size={20} />
//                         <span>{item.label}</span>
//                       </div>
//                       <ChevronRight size={18} className="text-gray-400" />
//                     </button>
//                   );
//                 })}
//                 <button 
//                   onClick={handleLogout}
//                   className="w-full flex items-center gap-3 px-4 py-4 rounded-xl text-red-600 hover:bg-red-50 transition mt-8"
//                 >
//                   <LogOut size={20} />
//                   <span>Logout</span>
//                 </button> 

//               </nav>
//             </motion.div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-white rounded-2xl shadow-lg p-6 lg:p-10"
//               >
//                  {activeTab === 'profile' && (
//                   <div>
//                     <h2 className="text-2xl font-bold mb-8" style={{ color: COLOR_PRIMARY }}>
//                       Personal Information
//                     </h2>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
//                         <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
//                           <span className="text-lg">{user.name}</span>
//                           <Edit2 size={18} className="text-gray-400 cursor-pointer hover:text-primary" />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
//                         <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
//                           <Mail size={20} className="text-gray-500" />
//                           <span className="text-lg">{user.email}</span>
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
//                         <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
//                           <Phone size={20} className="text-gray-500" />
//                           <span className="text-lg">{user.phone}</span>
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-600 mb-2">Member Since</label>
//                         <div className="p-4 bg-emerald-50 rounded-xl">
//                           <span className="text-primary font-semibold">{user.joined}</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-10 text-center">
//                       <button className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition">
//                         Save Changes
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === 'orders' && (
//                   <div className="text-center py-20">
//                     <Package size={80} className="mx-auto text-gray-300 mb-6" />
//                     <h3 className="text-2xl font-bold text-gray-700">No Orders Yet</h3>
//                     <p className="text-gray-500 mt-3">Your order history will appear here</p>
//                     <Link 
//                       to="/" 
//                       className="inline-block mt-6 px-8 py-3 bg-primary text-white font-semibold rounded-full hover:shadow-xl transition"
//                     >
//                       Start Shopping
//                     </Link>
//                   </div>
//                 )}

//                  {activeTab === 'wishlist' && (
//                   <div className="text-center py-20">
//                     <Heart size={80} className="mx-auto text-gray-300 mb-6" />
//                     <h3 className="text-2xl font-bold text-gray-700">Your Wishlist is Empty</h3>
//                     <p className="text-gray-500 mt-3">Save your favorite items here</p>
//                   </div>
//                 )}

//                 {activeTab === 'addresses' && (
//                   <div>
//                     <div className="flex justify-between items-center mb-6">
//                       <h3 className="text-xl font-bold">Saved Addresses</h3>
//                       <button className="text-primary font-medium hover:underline">+ Add New</button>
//                     </div>
//                     <p className="text-gray-500 text-center py-12">No addresses saved yet</p>
//                   </div>
//                 )}
//                </motion.div>
//           </div>
//         </div>
//         {/* Mobile Bottom Navigation */}
//            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl">
//              <div className="grid grid-cols-5 py-3">
//                {menuItems.slice(0,5).map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <button
//                     key={item.id}
//                     onClick={() => setActiveTab(item.id)}
//                     className={`flex flex-col items-center py-2 ${
//                       activeTab === item.id ? 'text-primary' : 'text-gray-500'
//                     }`}
//                   >
//                     <Icon size={22} />
//                     <span className="text-xs mt-1">{item.label.split(' ')[1] || item.label}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect, useContext } from 'react';
// import axios from '../api/axios';
// import {
//   User, Mail, Phone, MapPin, Heart, Package, CreditCard, Settings, LogOut,
//   Camera, Edit2, ChevronRight, Home, Building, Plus, Trash2, Check
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const COLOR_PRIMARY = '#006A4E';

// // Reusable Editable Field Component
// const EditableField = ({ label, value, onSave, placeholder = '', type = 'text' }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [inputValue, setInputValue] = useState(value || '');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setInputValue(value || '');
//   }, [value]);

//   const handleSave = async () => {
//     if (inputValue.trim() === value) {
//       setIsEditing(false);
//       return;
//     }

//     setLoading(true);
//     try {
//       await onSave(inputValue.trim());
//       console.log(`${label} updated successfully`);
//       setIsEditing(false);
//     } catch (err) {
//       console.error(`Failed to update ${label}:`, err.response?.data || err.message);
//       alert('Failed to update. Check console for details.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCancel = () => {
//     setInputValue(value || '');
//     setIsEditing(false);
//   };

//   if (!isEditing) {
//     return (
//       <div className="mb-8">
//         <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>
//         <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
//           <span className="text-lg">{value || 'Not set'}</span>
//           <button
//             onClick={() => setIsEditing(true)}
//             className="text-gray-400 hover:text-primary transition"
//           >
//             <Edit2 size={18} />
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mb-8">
//       <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>
//       <div className="p-4 bg-white border-2 border-primary rounded-xl">
//         <input
//           type={type}
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder={placeholder}
//           className="w-full text-lg outline-none"
//           autoFocus
//         />
//         <div className="flex justify-end gap-3 mt-4">
//           <button
//             onClick={handleCancel}
//             disabled={loading}
//             className="px-4 py-2 text-black hover:bg-gray-100 rounded-lg transition"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             disabled={loading}
//             className="px-6 py-2 bg-primary text-black font-medium rounded-lg hover:shadow-lg transition disabled:opacity-50"
//           >
//             {loading ? 'Saving...' : 'Save'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Profile = () => {
//   const { user: authUser, loading: authLoading, logout, refetch } = useContext(AuthContext);
//   const [activeTab, setActiveTab] = useState('profile');
//   const [profilePic, setProfilePic] = useState(null);
//   const [addresses, setAddresses] = useState([]);
//   const [loadingAddresses, setLoadingAddresses] = useState(false);

//   const user = authUser ? {
//     id: authUser.id,
//     name: authUser.name || 'User',
//     email: authUser.email,
//     phone: authUser.phone || '',
//     joined: authUser.joined || 'Unknown',
//     profile_picture: authUser.profile_picture,
//     first_name: authUser.first_name,
//     last_name: authUser.last_name,
//   } : null;

//   useEffect(() => {
//     if (user?.profile_picture) {
//       setProfilePic(user.profile_picture);
//     } else {
//       setProfilePic(null);
//     }
//   }, [user]);

//   // Fetch addresses when tab is active
//   useEffect(() => {
//     if (activeTab === 'addresses' && authUser) {
//       const fetchAddresses = async () => {
//         setLoadingAddresses(true);
//         try {
//           console.log('Fetching addresses...');
//           const res = await axios.get('/user/addresses'); // Correct URL (api.php prefixes /api)
//           const addressData = res.data.data || res.data;
//           console.log('Addresses loaded:', addressData);
//           setAddresses(addressData);
//         } catch (err) {
//           console.error('Error fetching addresses:', err.response?.data || err.message);
//           setAddresses([]);
//           alert('Failed to load addresses. Check console.');
//         } finally {
//           setLoadingAddresses(false);
//         }
//       };
//       fetchAddresses();
//     }
//   }, [activeTab, authUser]);

//   // Profile photo upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => setProfilePic(reader.result);
//     reader.readAsDataURL(file);

//     const formData = new FormData();
//     formData.append('photo', file);

//     axios.post('/user/update-photo', formData, {
//       headers: { 'Content-Type': 'multipart/form-data' }
//     })
//     .then((res) => {
//       console.log('Photo uploaded successfully:', res.data);
//       refetch(); // Refresh user data including new photo URL
//     })
//     .catch((err) => {
//       console.error('Photo upload failed:', err.response?.data || err.message);
//       alert('Photo upload failed. Check console.');
//     });
//   };

//   // Set default address
//   const setDefaultAddress = async (addressId) => {
//     try {
//       console.log('Setting address as default:', addressId);
//       await axios.patch(`/user/addresses/${addressId}/default`);
//       setAddresses(prev => prev.map(addr =>
//         addr.id === addressId
//           ? { ...addr, is_default: true }
//           : { ...addr, is_default: false }
//       ));
//       console.log('Default address updated');
//     } catch (err) {
//       console.error('Failed to set default address:', err.response?.data || err.message);
//       alert('Failed to set default address.');
//     }
//   };

//   // Delete address
//   const deleteAddress = async (addressId) => {
//     if (!window.confirm('Are you sure you want to delete this address?')) return;

//     try {
//       console.log('Deleting address:', addressId);
//       await axios.delete(`/user/addresses/${addressId}`);
//       setAddresses(prev => prev.filter(addr => addr.id !== addressId));
//       console.log('Address deleted');
//     } catch (err) {
//       console.error('Failed to delete address:', err.response?.data || err.message);
//       alert('Failed to delete address.');
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (err) {
//       console.error('Logout error:', err);
//     }
//   };

//   if (authLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
//         <div className="text-2xl">Loading profile...</div>
//       </div>
//     );
//   }

//   if (!authUser) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <p className="text-2xl text-gray-700 mb-4">Please log in to view your profile.</p>
//           <Link to="/login" className="text-primary underline font-medium">Go to Login</Link>
//         </div>
//       </div>
//     );
//   }

//   const menuItems = [
//     { id: 'profile', label: 'My Profile', icon: User },
//     { id: 'orders', label: 'My Orders', icon: Package },
//     { id: 'wishlist', label: 'Wishlist', icon: Heart },
//     { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
//     { id: 'payment', label: 'Payment Methods', icon: CreditCard },
//     { id: 'settings', label: 'Account Settings', icon: Settings },
//   ];

//   const getTypeIcon = (type) => {
//     switch (type) {
//       case 'home': return <Home size={18} className="text-primary" />;
//       case 'work': return <Building size={18} className="text-primary" />;
//       default: return <MapPin size={18} className="text-primary" />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8" style={{ color: COLOR_PRIMARY }}>
//           My Account
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar */}
//           <div className="hidden lg:block">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden"
//             >
//               <div className="p-6 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
//                 <div className="relative">
//                   <div className="w-32 h-32 mx-auto bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
//                     {profilePic ? (
//                       <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
//                     ) : (
//                       <User size={64} />
//                     )}
//                     <label className="absolute bottom-0 right-0 bg-white text-emerald-600 rounded-full p-3 cursor-pointer shadow-lg hover:scale-110 transition">
//                       <Camera size={20} />
//                       <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//                     </label>
//                   </div>
//                   <h3 className="text-2xl font-bold mt-6 text-center">{user.name}</h3>
//                   <p className="text-emerald-100 text-center">{user.email}</p>
//                 </div>
//               </div>

//               <nav className="p-4">
//                 {menuItems.map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <button
//                       key={item.id}
//                       onClick={() => setActiveTab(item.id)}
//                       className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition mb-2 ${
//                         activeTab === item.id
//                           ? 'bg-emerald-50 text-primary font-semibold shadow-md'
//                           : 'hover:bg-gray-50'
//                       }`}
//                       style={{ color: activeTab === item.id ? COLOR_PRIMARY : '#374151' }}
//                     >
//                       <div className="flex items-center gap-3">
//                         <Icon size={20} />
//                         <span>{item.label}</span>
//                       </div>
//                       <ChevronRight size={18} className="text-gray-400" />
//                     </button>
//                   );
//                 })}
//                 <button
//                   onClick={handleLogout}
//                   className="w-full flex items-center gap-3 px-4 py-4 rounded-xl text-red-600 hover:bg-red-50 transition mt-8"
//                 >
//                   <LogOut size={20} />
//                   <span>Logout</span>
//                 </button>
//               </nav>
//             </motion.div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-white rounded-2xl shadow-lg p-6 lg:p-10"
//             >
//               {activeTab === 'profile' && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-8" style={{ color: COLOR_PRIMARY }}>
//                     Personal Information
//                   </h2>

//                   <EditableField
//                     label="Full Name"
//                     value={user.name}
//                     placeholder="Enter your full name"
//                     onSave={async (newName) => {
//                       const [first, ...lastParts] = newName.trim().split(' ');
//                       const last = lastParts.join(' ');
//                       await axios.patch('/user/update', {
//                         first_name: first || '',
//                         last_name: last || null,
//                       });
//                       refetch();
//                     }}
//                   />

//                   <div className="mb-8">
//                     <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
//                     <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
//                       <Mail size={20} className="text-gray-500" />
//                       <span className="text-lg">{user.email}</span>
//                     </div>
//                     <p className="text-sm text-gray-500 mt-2">Contact support to change email.</p>
//                   </div>

//                   <EditableField
//                     label="Phone Number"
//                     value={user.phone}
//                     placeholder="Enter your phone number"
//                     type="tel"
//                     onSave={async (newPhone) => {
//                       await axios.patch('/user/update', { phone: newPhone || null });
//                       refetch();
//                     }}
//                   />

//                   <div className="mb-8">
//                     <label className="block text-sm font-medium text-gray-600 mb-2">Member Since</label>
//                     <div className="p-4 bg-emerald-50 rounded-xl">
//                       <span className="text-primary font-semibold">{user.joined}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'addresses' && (
//                 <div>
//                   <div className="flex justify-between items-center mb-8">
//                     <h3 className="text-2xl font-bold" style={{ color: COLOR_PRIMARY }}>
//                       Saved Addresses
//                     </h3>
//                     <Link
//                       to="/address/add"
//                       className="flex items-center gap-2 text-primary font-medium hover:underline"
//                     >
//                       <Plus size={20} /> Add New Address
//                     </Link>
//                   </div>

//                   {loadingAddresses ? (
//                     <div className="text-center py-12">
//                       <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
//                     </div>
//                   ) : addresses.length === 0 ? (
//                     <div className="text-center py-16 bg-gray-50 rounded-2xl">
//                       <MapPin size={64} className="mx-auto text-gray-300 mb-4" />
//                       <p className="text-gray-600 text-lg">No addresses saved yet</p>
//                       <Link
//                         to="/address/add"
//                         className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-full font-medium"
//                       >
//                         Add Your First Address
//                       </Link>
//                     </div>
//                   ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       {addresses.map((addr) => (
//                         <div
//                           key={addr.id}
//                           className={`p-6 rounded-2xl border-2 transition-all relative ${
//                             addr.is_default
//                               ? 'border-primary bg-emerald-50 shadow-md'
//                               : 'border-gray-200 bg-gray-50'
//                           }`}
//                         >
//                           <div className="flex justify-between items-start mb-4">
//                             <div className="flex items-center gap-3">
//                               {getTypeIcon(addr.type)}
//                               <span className="font-semibold capitalize">
//                                 {addr.label || addr.type}
//                               </span>
//                               {addr.is_default && (
//                                 <span className="text-xs bg-primary text-white px-3 py-1 rounded-full flex items-center gap-1">
//                                   <Check size={12} /> Default
//                                 </span>
//                               )}
//                             </div>
//                             <div className="flex gap-2">
//                               <Link
//                                 to={`/address/edit/${addr.id}`}
//                                 className="text-gray-400 hover:text-primary"
//                               >
//                                 <Edit2 size={18} />
//                               </Link>
//                               <button
//                                 onClick={() => deleteAddress(addr.id)}
//                                 className="text-gray-400 hover:text-red-600"
//                               >
//                                 <Trash2 size={18} />
//                               </button>
//                             </div>
//                           </div>

//                           <p className="font-medium">{addr.full_name}</p>
//                           <p className="text-gray-600">{addr.phone}</p>
//                           {addr.alternate_phone && (
//                             <p className="text-gray-600">{addr.alternate_phone}</p>
//                           )}

//                           <p className="text-gray-700 mt-3">
//                             {addr.address_line_1}
//                             {addr.address_line_2 && `, ${addr.address_line_2}`}
//                             <br />
//                             {addr.city}, {addr.state} - {addr.postal_code}
//                             <br />
//                             India
//                           </p>

//                           {!addr.is_default && (
//                             <button
//                               onClick={() => setDefaultAddress(addr.id)}
//                               className="mt-4 text-primary text-sm font-medium hover:underline"
//                             >
//                               Set as Default
//                             </button>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )}

//               {/* Placeholder for other tabs */}
//               {['orders', 'wishlist', 'payment', 'settings'].includes(activeTab) && (
//                 <div className="text-center py-20">
//                   <p className="text-xl text-gray-600">This section is under development</p>
//                 </div>
//               )}
//             </motion.div>
//           </div>
//         </div>

//         {/* Mobile Bottom Navigation */}
//         <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-50">
//           <div className="grid grid-cols-5 py-3">
//             {menuItems.slice(0, 5).map((item) => {
//               const Icon = item.icon;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveTab(item.id)}
//                   className={`flex flex-col items-center py-2 ${
//                     activeTab === item.id ? 'text-primary' : 'text-gray-500'
//                   }`}
//                 >
//                   <Icon size={22} />
//                   <span className="text-xs mt-1">
//                     {item.label.includes(' ') ? item.label.split(' ')[1] : item.label}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect, useContext } from 'react';
import axios from '../api/axios';
import {
  User, Mail, Phone, MapPin, Heart, Package, CreditCard, Settings, LogOut,
  Camera, Edit2, ChevronRight, Home, Building, Plus, Trash2, Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const COLOR_PRIMARY = '#006A4E';

// Reusable Editable Field Component
const EditableField = ({ label, value, onSave, placeholder = '', type = 'text' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  const handleSave = async () => {
    if (inputValue.trim() === value) {
      setIsEditing(false);
      return;
    }

    setLoading(true);
    try {
      await onSave(inputValue.trim());
      console.log(`${label} updated successfully`);
      setIsEditing(false);
      // Success toast
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: `${label} has been updated successfully.`,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#f0fdf4',
        iconColor: COLOR_PRIMARY,
      });
    } catch (err) {
      console.error(`Failed to update ${label}:`, err.response?.data || err.message);
      // alert('Failed to update. Check console for details.');
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: COLOR_PRIMARY,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setInputValue(value || '');
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <span className="text-lg">{value || 'Not set'}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="text-gray-400 hover:text-primary transition"
          >
            <Edit2 size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>
      <div className="p-4 bg-white border-2 border-primary rounded-xl">
        <input
          type={type}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="w-full text-lg outline-none"
          autoFocus
        />
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={handleCancel}
            disabled={loading}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-6 py-2 bg-primary text-black font-medium rounded-lg hover:shadow-lg transition disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const { user: authUser, loading: authLoading, logout, refetch } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('profile');
  const [profilePic, setProfilePic] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [loadingAddresses, setLoadingAddresses] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  const user = authUser ? {
    id: authUser.id,
    name: authUser.name || 'User',
    email: authUser.email,
    phone: authUser.phone || '',
    joined: authUser.joined || 'Unknown',
    profile_picture: authUser.profile_picture,
    first_name: authUser.first_name,
    last_name: authUser.last_name,
  } : null;

  useEffect(() => {
    if (user?.profile_picture) {
      setProfilePic(user.profile_picture);
    } else {
      setProfilePic(null);
    }
  }, [user]);

  // Fetch addresses when tab is active
  useEffect(() => {
    if (activeTab === 'addresses' && authUser) {
      const fetchAddresses = async () => {
        setLoadingAddresses(true);
        try {
          console.log('Fetching addresses...');
          const res = await axios.get('/user/addresses');
          const addressData = res.data.data || res.data;
          console.log('Addresses loaded:', addressData);
          setAddresses(addressData);
        } catch (err) {
          console.error('Error fetching addresses:', err.response?.data || err.message);
          setAddresses([]);
          // alert('Failed to load addresses. Check console.');
          Swal.fire({
            icon: 'error',
            title: 'Failed to Load Addresses',
            text: 'Please try refreshing the page.',
            confirmButtonColor: COLOR_PRIMARY,
          });
        } finally {
          setLoadingAddresses(false);
        }
      };
      fetchAddresses();
    }
  }, [activeTab, authUser]);

  // Fetch orders when Orders tab is active
useEffect(() => {
  if (activeTab === 'orders' && authUser) {
    const fetchOrders = async () => {
      setLoadingOrders(true);
      try {
        console.log('Fetching orders...');
        const res = await axios.get('/orders');
        console.log('Orders loaded:', res.data.data || res.data);
        setOrders(res.data.data || res.data);
      } catch (err) {
        console.error('Error fetching orders:', err.response?.data || err.message);
        setOrders([]);
        // alert('Failed to load orders. Check console.');
        Swal.fire({
            icon: 'error',
            title: 'Failed to Load Orders',
            text: 'Please try refreshing the page.',
            confirmButtonColor: COLOR_PRIMARY,
          });
      } finally {
        setLoadingOrders(false);
      }
    };
    fetchOrders();
  }
}, [activeTab, authUser]);

  // Profile photo upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setProfilePic(reader.result);
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append('photo', file);

    axios.post('/user/update-photo', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then((res) => {
      console.log('Photo uploaded successfully:', res.data);
      refetch();
      Swal.fire({
        icon: 'success',
        title: 'Profile Picture Updated!',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#f0fdf4',
        iconColor: COLOR_PRIMARY,
      });
    })
    .catch((err) => {
      console.error('Photo upload failed:', err.response?.data || err.message);
      // alert('Photo upload failed. Check console.');
      Swal.fire({
        icon: 'error',
        title: 'Upload Failed',
        text: 'Could not update profile picture. Please try again.',
        confirmButtonColor: COLOR_PRIMARY,
      });
    });
  };

  // Set default address
  const setDefaultAddress = async (addressId) => {
    try {
      console.log('Setting address as default:', addressId);
      await axios.patch(`/user/addresses/${addressId}/default`);
      setAddresses(prev => prev.map(addr =>
        addr.id === addressId
          ? { ...addr, is_default: true }
          : { ...addr, is_default: false }
      ));
      Swal.fire({
        icon: 'success',
        title: 'Default Address Set',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        background: '#f0fdf4',
        iconColor: COLOR_PRIMARY,
      });
    } catch (err) {
      console.error('Failed to set default address:', err.response?.data || err.message);
      // alert('Failed to set default address.');
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Could not set default address.',
        confirmButtonColor: COLOR_PRIMARY,
      });
    }
  };

  // Delete address
  const deleteAddress = async (addressId) => {
    // if (!window.confirm('Are you sure you want to delete this address?')) return;
    const result = await Swal.fire({
      title: 'Delete this address?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: COLOR_PRIMARY,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'Cancel',
    });

    if (!result.isConfirmed) return;

    try {
      console.log('Deleting address:', addressId);
      await axios.delete(`/user/addresses/${addressId}`);
      setAddresses(prev => prev.filter(addr => addr.id !== addressId));
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Address has been removed successfully.',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#f0fdf4',
        iconColor: COLOR_PRIMARY,
      });
    } catch (err) {
      console.error('Failed to delete address:', err.response?.data || err.message);
      // alert('Failed to delete address.');
      Swal.fire({
        icon: 'error',
        title: 'Deletion Failed',
        text: 'Could not delete the address.',
        confirmButtonColor: COLOR_PRIMARY,
      });
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-2xl">Loading profile...</div>
      </div>
    );
  }

  if (!authUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-2xl text-gray-700 mb-4">Please log in to view your profile.</p>
          <Link to="/login" className="text-primary underline font-medium">Go to Login</Link>
        </div>
      </div>
    );
  }

  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'orders', label: 'My Orders', icon: Package },
    // { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
    // { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    // { id: 'settings', label: 'Account Settings', icon: Settings },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'home': return <Home size={18} className="text-primary" />;
      case 'work': return <Building size={18} className="text-primary" />;
      default: return <MapPin size={18} className="text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Mobile Profile Header */}
        <div className="lg:hidden mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {profilePic ? (
                    <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <User size={40} className="text-gray-400" />
                    </div>
                  )}
                  <label className="absolute bottom-0 right-0 bg-primary text-black rounded-full p-2 cursor-pointer shadow-lg hover:scale-110 transition">
                    <Camera size={14} />
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold" style={{ color: COLOR_PRIMARY }}>
                  {user.name}
                </h2>
                <p className="text-gray-600 text-sm">{user.email}</p>
                <p className="text-gray-500 text-xs mt-1">Member since {user.joined}</p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-8" style={{ color: COLOR_PRIMARY }}>
          My Account
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
                <div className="relative">
                  <div className="w-32 h-32 mx-auto bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                    {profilePic ? (
                      <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User size={64} />
                    )}
                    <label className="absolute bottom-0 right-0 bg-white text-emerald-600 rounded-full p-3 cursor-pointer shadow-lg hover:scale-110 transition">
                      <Camera size={20} />
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  </div>
                  <h3 className="text-2xl font-bold mt-6 text-center">{user.name}</h3>
                  <p className="text-emerald-100 text-center">{user.email}</p>
                </div>
              </div>

              <nav className="p-4">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition mb-2 ${
                        activeTab === item.id
                          ? 'bg-emerald-50 text-primary font-semibold shadow-md'
                          : 'hover:bg-gray-50'
                      }`}
                      style={{ color: activeTab === item.id ? COLOR_PRIMARY : '#374151' }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight size={18} className="text-gray-400" />
                    </button>
                  );
                })}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-4 rounded-xl text-red-600 hover:bg-red-50 transition mt-8"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </nav>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 lg:p-10"
            >
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold mb-8" style={{ color: COLOR_PRIMARY }}>
                    Personal Information
                  </h2>

                  <EditableField
                    label="Full Name"
                    value={user.name}
                    placeholder="Enter your full name"
                    onSave={async (newName) => {
                      const [first, ...lastParts] = newName.trim().split(' ');
                      const last = lastParts.join(' ');
                      await axios.patch('/user/update', {
                        first_name: first || '',
                        last_name: last || null,
                      });
                      refetch();
                    }}
                  />

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <Mail size={20} className="text-gray-500" />
                      <span className="text-lg">{user.email}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Contact support to change email.</p>
                  </div>

                  <EditableField
                    label="Phone Number"
                    value={user.phone}
                    placeholder="Enter your phone number"
                    type="tel"
                    onSave={async (newPhone) => {
                      await axios.patch('/user/update', { phone: newPhone || null });
                      refetch();
                    }}
                  />

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Member Since</label>
                    <div className="p-4 bg-emerald-50 rounded-xl">
                      <span className="text-primary font-semibold">{user.joined}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold" style={{ color: COLOR_PRIMARY }}>
                      Saved Addresses
                    </h3>
                    <Link
                      to="/address/add"
                      className="flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      <Plus size={20} /> Add New Address
                    </Link>
                  </div>

                  {loadingAddresses ? (
                    <div className="text-center py-12">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                    </div>
                  ) : addresses.length === 0 ? (
                    <div className="text-center py-16 bg-gray-50 rounded-2xl">
                      <MapPin size={64} className="mx-auto text-gray-300 mb-4" />
                      <p className="text-gray-600 text-lg">No addresses saved yet</p>
                      <Link
                        to="/address/add"
                        className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-full font-medium"
                      >
                        Add Your First Address
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {addresses.map((addr) => (
                        <div
                          key={addr.id}
                          className={`p-6 rounded-2xl border-2 transition-all relative ${
                            addr.is_default
                              ? 'border-primary bg-emerald-50 shadow-md'
                              : 'border-gray-200 bg-gray-50'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              {getTypeIcon(addr.type)}
                              <span className="font-semibold capitalize">
                                {addr.label || addr.type}
                              </span>
                              {addr.is_default && (
                                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full flex items-center gap-1">
                                  <Check size={12} /> Default
                                </span>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Link
                                to={`/address/edit/${addr.id}`}
                                className="text-gray-400 hover:text-primary"
                              >
                                <Edit2 size={18} />
                              </Link>
                              <button
                                onClick={() => deleteAddress(addr.id)}
                                className="text-gray-400 hover:text-red-600"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>

                          <p className="font-medium">{addr.full_name}</p>
                          <p className="text-gray-600">{addr.phone}</p>
                          {addr.alternate_phone && (
                            <p className="text-gray-600">{addr.alternate_phone}</p>
                          )}

                          <p className="text-gray-700 mt-3">
                            {addr.address_line_1}
                            {addr.address_line_2 && `, ${addr.address_line_2}`}
                            <br />
                            {addr.city}, {addr.state} - {addr.postal_code}
                            <br />
                            {addr.country}
                          </p>

                          {!addr.is_default && (
                            <button
                              onClick={() => setDefaultAddress(addr.id)}
                              className="mt-4 text-primary text-sm font-medium hover:underline"
                            >
                              Set as Default
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold mb-8" style={{ color: COLOR_PRIMARY }}>
                    My Orders
                  </h2>

                  {loadingOrders ? (
                    <div className="text-center py-12">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                    </div>
                  ) : orders.length === 0 ? (
                    <div className="text-center py-16 bg-gray-50 rounded-2xl">
                      <Package size={64} className="mx-auto text-gray-300 mb-4" />
                      <p className="text-gray-600 text-lg">No orders yet</p>
                      <p className="text-gray-500 mt-2">Your order history will appear here once you shop</p>
                      <Link
                        to="/"
                        className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-full font-medium hover:shadow-lg transition"
                      >
                        Start Shopping
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div key={order.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm opacity-90">Order Placed</p>
                                <p className="text-lg font-semibold">
                                  {new Date(order.created_at).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                  })}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm opacity-90">Order ID</p>
                                <p className="text-lg font-bold">{order.order_number}</p>
                              </div>
                            </div>
                          </div>

                          <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                              <div className="flex gap-6">
                                {/* <div>
                                  <p className="text-sm text-gray-600">Status</p>
                                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                                    Processing
                                  </span>
                                </div> */}
                                <div>
                                  <p className="text-sm text-gray-600">Payment</p>
                                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                    {/* COD */}
                                    {order.payment_method}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-600">Total Amount</p>
                                <p className="text-2xl font-bold" style={{ color: COLOR_PRIMARY }}>
                                  ${parseFloat(order.items_total).toLocaleString('en-GB')}
                                </p>
                              </div>
                            </div>

                            <div className="border-t pt-6">
                              <h4 className="font-semibold mb-4">Items</h4>
                              <div className="space-y-4">
                                {order.items.map((item) => (
                                  <div key={item.id} className="flex justify-between items-center">
                                    <div className="flex-1">
                                      <p className="font-medium">{item.item_name}</p>
                                      {item.variant_attributes && (
                                        <p className="text-sm text-gray-600">
                                          {Object.entries(item.variant_attributes)
                                            .map(([key, value]) => `${key}: ${value}`)
                                            .join(' | ')}
                                        </p>
                                      )}
                                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                    </div>
                                    <div className="text-right">
                                      <p className="font-semibold">
                                        ${parseFloat(item.total_price).toLocaleString('en-GB')} × {item.quantity}
                                      </p>
                                      <p className="text-lg font-bold" style={{ color: COLOR_PRIMARY }}>
                                        ${parseFloat(item.line_total).toLocaleString('en-GB')}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {order.notes && (
                              <div className="mt-6 pt-6 border-t">
                                <p className="text-sm text-gray-600">Notes:</p>
                                <p className="text-gray-800">{order.notes}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {['wishlist', 'payment', 'settings'].includes(activeTab) && (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-600">This section is under development</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-50">
          <div className="grid grid-cols-5 py-3">
            {menuItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center py-2 ${
                    activeTab === item.id ? 'text-primary' : 'text-gray-500'
                  }`}
                >
                  <Icon size={22} />
                  <span className="text-xs mt-1">
                    {item.label.includes(' ') ? item.label.split(' ')[1] : item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;