import React, { useEffect, useState } from 'react';
import { getTopRated } from '../services/api.js';

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getTopRated()
      .then(response => {
        setTopRated(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar melhor avaliados:', error);
      });
  }, []);

  return (
    <div>
      <h2>Documentários Melhor Avaliados</h2>
      <div className="documentary-list">
        {topRated.map(doc => (
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

export default TopRated;
