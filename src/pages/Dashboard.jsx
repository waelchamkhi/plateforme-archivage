import React, { useState } from 'react';
import ArchiveTable from '../components/ArchiveTable';
import ArchiveSidebarForm from '../components/ArchiveSidebarForm';
import ArchiveDetailModal from '../components/ArchiveDetailModal';

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedArchive, setSelectedArchive] = useState(null);

  const dummyData = [
    { id: 1, title: 'Project Proposal', type: 'PDF', date: '2024-06-20' },
    { id: 2, title: 'Meeting Notes', type: 'DOCX', date: '2024-06-15' },
  ];

  return (
    <div className="container-fluid mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Archived Documents</h3>
        <button className="btn btn-primary" onClick={() => setShowSidebar(true)}>
          Add Archive
        </button>
      </div>

      <ArchiveTable data={dummyData} onRowClick={setSelectedArchive} />

      {showSidebar && (
        <ArchiveSidebarForm onClose={() => setShowSidebar(false)} />
      )}

      {selectedArchive && (
        <ArchiveDetailModal
          archive={selectedArchive}
          onClose={() => setSelectedArchive(null)}
        />
      )}
    </div>
  );
}
