import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import AddressForm from '../components/AddressForm';

const EditAddress = () => {
  const { id } = useParams();
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get(`/user/addresses`);
        const found = res.data.data.find(a => a.id === parseInt(id));
        if (found) {
          setAddress(found);
        } else {
          alert('Address not found');
          window.history.back();
        }
      } catch (err) {
        console.error('Failed to load address:', err);
        alert('Failed to load address');
      } finally {
        setLoading(false);
      }
    };
    fetchAddress();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-2xl">Loading address...</div>
      </div>
    );
  }

  return address ? <AddressForm initialData={address} isEdit={true} /> : null;
};

export default EditAddress;