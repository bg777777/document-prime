import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../services/api.js';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getRecommendations()
      .then(response => {
        setRecommendations(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar recomendações:', error);
      });
  }, []);

  return (
    <div>
      <h2>Recomendações de Documentários</h2>
      <div className="documentary-list">
        {recommendations.map(doc => (
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

export default Recommendations;
