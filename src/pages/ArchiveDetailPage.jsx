// src/pages/ArchiveDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ArchiveDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy fetch - replace with actual fetch from backend
  const archive = {
    id,
    title: 'Sample Document',
    type: 'PDF',
    date: '2024-06-20',
    files: ['sample.pdf'], // You can display/download from file URL
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <h2>{archive.title}</h2>
      <p><strong>Type:</strong> {archive.type}</p>
      <p><strong>Date:</strong> {archive.date}</p>
      <hr />
      <h5>Files</h5>
      {archive.files.map((file, index) => (
        <div key={index}>
          <a href={`/uploads/${file}`} target="_blank" rel="noopener noreferrer">
            {file}
          </a>
        </div>
      ))}
    </div>
  );
}
