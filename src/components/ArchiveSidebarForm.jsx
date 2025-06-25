import React, { useState } from 'react';

export default function ArchiveSidebarForm({ onClose }) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, type, files });
    onClose(); // close the sidebar after submission
  };

  return (
    <div
      className="position-fixed top-0 end-0 bg-light p-4 shadow"
      style={{ width: '300px', height: '100%', zIndex: 1050 }}
    >
      <h5 className="mb-4">Add New Archive</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Type</label>
          <input className="form-control" value={type} onChange={(e) => setType(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Files</label>
          <input className="form-control" type="file" multiple onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn btn-success w-100">Submit</button>
        <button type="button" className="btn btn-secondary w-100 mt-2" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}
