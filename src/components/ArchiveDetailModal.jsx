import React from 'react';

export default function ArchiveDetailModal({ archive, onClose }) {
  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{archive.title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p><strong>Type:</strong> {archive.type}</p>
            <p><strong>Date:</strong> {archive.date}</p>
            <p><em>(In future: show attached documents or preview)</em></p>
          </div>
        </div>
      </div>
    </div>
  );
}
