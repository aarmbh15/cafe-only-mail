import React, { useState } from 'react';
import axios from '../api/axios';
import { Home, Building, MapPin, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const COLOR_PRIMARY = '#006A4E';

const AddressForm = ({ initialData = {}, isEdit = false }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: initialData.full_name || '',
    phone: initialData.phone || '',
    alternate_phone: initialData.alternate_phone || '',
    address_line_1: initialData.address_line_1 || '',
    address_line_2: initialData.address_line_2 || '',
    city: initialData.city || '',
    // state: initialData.state || '',
    postcode: initialData.postcode || '',
    // label: initialData.label || '',
    // type: initialData.type || 'home',
    is_default: initialData.is_default || false,
  });

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: inputType === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEdit) {
        await axios.patch(`/user/addresses/${initialData.id}`, formData);
        // alert('Address updated successfully!');
        // Success toast
              Swal.fire({
                icon: 'success',
                title: 'Updated!',
                text: `Address has been updated successfully.`,
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#f0fdf4',
                iconColor: COLOR_PRIMARY,
              });
      } else {
        await axios.post('/user/addresses', formData);
        // alert('Address added successfully!');
        Swal.fire({
                icon: 'success',
                title: 'Updated!',
                text: `Address has been added successfully.`,
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#f0fdf4',
                iconColor: COLOR_PRIMARY,
              });
      }
      navigate('/profile?tab=addresses');
    } catch (err) {
      console.error('Address save error:', err.response?.data || err);
      // const message = err.response?.data?.message || 'Failed to save address. Check details.';
      // alert(message);
      Swal.fire({
              icon: 'error',
              title: 'Update Failed',
              text: 'Failed to save address.',
              confirmButtonColor: COLOR_PRIMARY,
            });
    } finally {
      setLoading(false);
    }
  };

  // const typeOptions = [
  //   { value: 'home', label: 'Home', icon: Home },
  //   { value: 'work', label: 'Work', icon: Building },
  //   { value: 'other', label: 'Other', icon: MapPin },
  // ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-2xl mx-auto py-8">
        <Link to="/profile?tab=addresses" className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6">
          <ArrowLeft size={20} />
          Back to Addresses
        </Link>

        <h1 className="text-3xl font-bold mb-8" style={{ color: COLOR_PRIMARY }}>
          {isEdit ? 'Edit Address' : 'Add New Address'}
        </h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[6-9][0-9]{9}"
                maxLength="10"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                placeholder="9876543210"
              />
            </div>
          </div>

          {/* Alternate Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alternate Phone (Optional)</label>
            <input
              type="tel"
              name="alternate_phone"
              value={formData.alternate_phone}
              onChange={handleChange}
              pattern="[6-9][0-9]{9}"
              maxLength="10"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
              placeholder="9876543210"
            />
          </div>

          {/* Address Lines */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 1 *</label>
            <input
              type="text"
              name="address_line_1"
              value={formData.address_line_1}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
              placeholder="Flat No, Building Name, Street"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 2 (Optional)</label>
            <input
              type="text"
              name="address_line_2"
              value={formData.address_line_2}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
              placeholder="Landmark, Area"
            />
          </div>

          {/* City, State, PIN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                placeholder="Mumbai"
              />
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                placeholder="Maharashtra"
              />
            </div> */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code *</label>
              <input
                type="text"
                name="postcode"
                value={formData.postal_code}
                onChange={handleChange}
                required
                pattern="[0-9]{6}"
                maxLength="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
                placeholder="400001"
              />
            </div>
          </div>

          {/* Label (Optional) */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Label (Optional)</label>
            <input
              type="text"
              name="label"
              value={formData.label}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
              placeholder="My Home, Parents House, Office Branch"
            />
          </div> */}

          {/* Address Type */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Address Type</label>
            <div className="grid grid-cols-3 gap-4">
              {typeOptions.map(({ value, label, icon: Icon }) => (
                <label
                  key={value}
                  className={`flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.type === value
                      ? 'border-primary bg-emerald-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="type"
                    value={value}
                    checked={formData.type === value}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <Icon size={32} className={formData.type === value ? 'text-primary' : 'text-gray-500'} />
                  <span className="mt-2 font-medium">{label}</span>
                </label>
              ))}
            </div>
          </div> */}

          {/* Set as Default */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="is_default"
              id="is_default"
              checked={formData.is_default}
              onChange={handleChange}
              className="w-5 h-5 text-primary rounded focus:ring-primary"
            />
            <label htmlFor="is_default" className="text-gray-700 font-medium cursor-pointer">
              Set as default address
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary text-black font-semibold text-lg rounded-xl hover:shadow-xl transition disabled:opacity-70"
            >
              {loading ? 'Saving...' : (isEdit ? 'Update Address' : 'Save Address')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;