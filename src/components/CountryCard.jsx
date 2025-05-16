import React from 'react';

function CountryCard({ country }) {
  return (
    <div className="border p-3 d-flex align-items-center">
      <img src={country.flag} alt={country.name} style={{ width: '50px', marginRight: '15px' }} />
      <div>
        <h6 className="mb-0">{country.name}</h6>
        <small className="text-muted">{country.region}</small>
      </div>
    </div>
  );
}

export default CountryCard;