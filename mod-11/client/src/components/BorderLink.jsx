import React from 'react';
import { Link } from 'react-router-dom';

const BorderLink = ({ code }) => (
  <Link
    to={`/country/${code}`}
    className="px-4 py-2 bg-var(--element-bg) text-var(--text-color) rounded shadow hover:bg-opacity-80 transition"
  >
    {code}
  </Link>
);

export default BorderLink;
