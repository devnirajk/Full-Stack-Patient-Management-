import React, { useState } from 'react';
import EditPatient from './EditPatient';

const PatientComponent = ({ details }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleUpdateClick = () => {
    setShowEditModal(true);
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`http://localhost:8080/patients/${details.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete patient');
      }

      // Optionally: Perform any cleanup or update UI after successful deletion

    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className='flex-col text-white px-6 py-9 border rounded-md bg-gray-800 max-w-2xl mb-4'>
      <div className='text-2xl font-semibold'>Patient Name: {details.name}</div>
      <div className='text-xl font-semibold'>Age: {details.age}</div>
      <div className='text-xl font-semibold mb-4'>Patient Medical History: {details.healthIssue}</div>
      <button
        className='mt-4 font-semibold bg-rose-700 p-2 rounded-md mr-1'
        onClick={handleDeleteClick} // Call handleDeleteClick when clicking the button
      >
        Delete Patient
      </button>
      <button
        className='mt-4 font-semibold bg-sky-500 p-2 rounded-md ml-1'
        onClick={handleUpdateClick}
      >
        Update Patient Details
      </button>
      {showEditModal && <EditPatient details={details} onClose={handleCloseModal} />}
    </div>
  );
};

export default PatientComponent;
