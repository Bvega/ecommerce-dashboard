import React from 'react';
import { Link } from 'react-router-dom';

const BorderLink = ({ code }) => {
  return (
    <Link
      to={`/country/${code}`}
      className="px-3 py-1 shadow rounded hover:opacity-80 transition"
    >
      {code}
    </Link>
  );
};

export default BorderLink;
