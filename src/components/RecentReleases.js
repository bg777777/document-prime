import React, { useEffect, useState } from 'react';
import { getRecentReleases } from '../services/api';

const RecentReleases = () => {
  const [documentaries, setDocumentaries] = useState([]);

  useEffect(() => {
    getRecentReleases()
      .then(response => {
        setDocumentaries(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar lançamentos recentes:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lançamentos Recentes de Documentários</h2>
      <div className="documentary-list">
        {documentaries.map(doc => (
          <div key={doc.id} className="card">
            <img src={doc.image_url} alt={doc.title} />
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReleases;
