import React, { useEffect, useState } from 'react';
import { getRecentReleases } from '../services/api.js';

const RecentReleases = () => {
  const [recentReleases, setRecentReleases] = useState([]);

  useEffect(() => {
    getRecentReleases()
      .then(response => {
        setRecentReleases(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar lançamentos recentes:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lançamentos Recentes</h2>
      <div className="documentary-list">
        {recentReleases.map(doc => (
          <div key={doc.id} className="card">
            <img src={doc.imagem} alt={doc.titulo} />
            <h3>{doc.titulo}</h3>
            <p>{doc.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReleases;
