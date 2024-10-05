import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../services/api';

const Recommendations = () => {
  const [documentaries, setDocumentaries] = useState([]);

  useEffect(() => {
    getRecommendations()
      .then(response => {
        setDocumentaries(response.data); 
      })
      .catch(error => {
        console.error('Erro ao buscar documentários recomendados:', error);
      });
  }, []);

  return (
    <div>
      <h2>Recomendações de Documentários</h2>
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

export default Recommendations;
