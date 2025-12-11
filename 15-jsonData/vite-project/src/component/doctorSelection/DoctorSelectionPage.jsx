import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorsData from '../../../../DATA/data.json';

const DoctorSelectionPage = () => {

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const navigate = useNavigate();
  const doctors =doctorsData.doctors; 

  const handleDoctorClick = (doctor) => {
    navigate(`/book-slot/${doctor.id}`, { state: { doctor } });
  };

  return (
     <div className="w-60 bg-amber-50 rounded-xl p-4 cursor-pointer hover:shadow-lg transition">
      <h2 className='text-xl font-bold'>{doctors.name}</h2>
      <div className="relative w-45 justify-center mb-4 mt-4">
        <img
                  src={``}
                  
                  className="px-4 py-6 rounded-2xl w-full h-48 object-cover"
                />
        {Array.isArray(doctors) && doctors.length > 0 ? (
          doctors.map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => handleDoctorClick(doctor)}
              className="cursor-pointer border rounded-xl p-4 hover:bg-gray-100 shadow"
            >
              <h2 className="text-lg font-semibold">{doctor.name}</h2>
              <p>{doctor.specialization}</p>
              <p className="text-sm text-gray-600">{doctor.experience}</p>
            </div>
          ))
        ) : (
          <p>No doctors available.</p>
        )}
</div>

    </div>
  );
};

export default DoctorSelectionPage;
