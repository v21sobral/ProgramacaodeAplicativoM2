// projetoaleatorio\src\components\ListarProdutos\index.js

import React, { useState, useEffect } from 'react';
import './style.css';

const ListarProdutos = ({ itens = [] }) => {
    return (
        <ul className='lista-produtos'>
            {itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ListarProdutos;