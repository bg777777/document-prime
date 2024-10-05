import React, { useEffect, useState } from 'react';
import { getTopRated } from '../services/api';

const TopRated = () => {
  const [documentaries, setDocumentaries] = useState([]);

  useEffect(() => {
    getTopRated()
      .then(response => {
        setDocumentaries(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar documentários melhor avaliados:', error);
      });
  }, []);

  return (
    <div>
      <h2>Documentários Melhor Avaliados</h2>
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

export default TopRated;
