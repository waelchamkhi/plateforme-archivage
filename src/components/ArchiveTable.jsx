import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ArchiveTable({ data }) {
  const navigate = useNavigate();

  return (
    <table className="table table-hover">
      <thead className="table-light">
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            onClick={() => navigate(`/archive/${item.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <td>{item.title}</td>
            <td>{item.type}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
