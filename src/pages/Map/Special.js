import React, { useState } from 'react';
import StyleSpecial from './StyleSpecial';


const dummySpecialists = [
  'Cardiologist',
  'Dermatologist',
  'Endocrinologist',
  'Gastroenterologist',
  'Hematologist',
  'Neurologist',
  'Oncologist',
  'Pediatrician',
  'Psychiatrist',
  'Rheumatologist',
];

const Special = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSpecialists, setFilteredSpecialists] = useState(dummySpecialists);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = dummySpecialists.filter(specialist =>
      specialist.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredSpecialists(filtered);
  };

  return (
    <StyleSpecial>
    <div className="special-container">
      <input
        type="text"
        placeholder="Type specialization..."
        value={searchTerm}
        onChange={handleSearch}
        className="special-input"
      />
      <div className="special-list">
        {filteredSpecialists.map((specialist, index) => (
          <div key={index} className="special-item">
            {specialist}
          </div>
        ))}
      </div>
    </div>
    </StyleSpecial>
  );
};

export default Special;
