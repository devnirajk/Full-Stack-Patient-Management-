import React, {useState, useEffect} from 'react'
import PatientComponent from './PatientComponent';
import Header from './Header';


const AddPatientForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [healthIssue, setHealthIssue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name, age, healthIssue);
    try {
      const response = await fetch('http://localhost:8080/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, healthIssue }),
      });

      if (!response.ok) {
        throw new Error('Failed to add patient');
      }

    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  return (
    <div className="flex h-96 flex-col w-1/3 items-center justify-center bg-gray-800 border px-32 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-white">Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full font-semibold border text-black outline-none rounded-md px-3 py-2 mb-4"
          placeholder="Enter patient name"
          required
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border font-semibold text-black outline-none rounded-md px-3 py-2 mb-4"
          placeholder="Enter patient age"
          required
        />
        <textarea
          value={healthIssue}
          onChange={(e) => setHealthIssue(e.target.value)}
          className="w-full border font-semibold text-black outline-none rounded-md px-3 py-2 mb-4"
          placeholder="Enter patient health issues"
          required
        />
        <button
          type="submit"
          className="w-full bg-sky-500 text-white rounded-md font-semibold px-4 py-4 hover:bg-green-600"
        >
          Add Patient
        </button>
      </form>
    </div>
  );
};

const Dashboard = () => {
    const [patientRecords, setPatientRecords] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/patients')
            .then(response => response.json())
            .then(data => {
              setPatientRecords(data);
              console.log(data);
            })
            .catch(error => console.error('Error fetching patient records:', error));
    }, []);

    return (
        <div>
            <Header />
            <div className='flex w-full justify-evenly mt-4'>
                <AddPatientForm />
                {(patientRecords.length===0)?(<h1 className='text-white font-semibold text-2xl bg-slate-600 h-10 px-2 rounded-md'>No Patient Data</h1>):(<div className="">
                    {patientRecords?.map(patientDetail => (
                        <PatientComponent key={patientDetail.id} details={patientDetail} />
                    ))}
                </div>)}
            </div>
        </div>
    );
};

export default Dashboard;