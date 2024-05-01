import React, { useState } from 'react';

const EditPatientComponent = ({ details, onClose }) => {
  const [name, setName] = useState(details.name);
  const [age, setAge] = useState(details.age);
  const [medicalHistory, setMedicalHistory] = useState(details.medicalHistory);

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:8080/patients/${details.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, medicalHistory }),
      });

      if (!response.ok) {
        throw new Error('Failed to update patient');
      }

      onClose(); // Close the modal after successful update
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-700 bg-opacity-50 text-black'>
      <div className='bg-white p-6 rounded-md shadow-md max-w-md'>
        <h2 className='text-xl font-semibold mb-4 text-black'>Edit Patient Details</h2>
        <input
          type='text'
          className='w-full border font-semibold rounded-md px-3 py-2 mb-4'
          placeholder='Enter patient name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          className='w-full font-semibold border rounded-md px-3 py-2 mb-4'
          placeholder='Enter patient age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <textarea
          className='w-full border font-semibold rounded-md px-3 py-2 mb-4'
          placeholder='Enter patient medical history'
          value={medicalHistory}
          onChange={(e) => setMedicalHistory(e.target.value)}
        />
        <div className='flex justify-end'>
          <button 
            className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 mr-2'
            onClick={handleSaveClick}
          >
            Save
          </button>
          <button 
            className='bg-gray-300 text-gray-800 rounded-md px-4 py-2 hover:bg-gray-400'
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPatientComponent;
