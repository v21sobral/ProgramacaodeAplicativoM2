// projetoaleatorio\src\components\AdicionarProduto\index.js
import React, { useState } from 'react';
import './style.css';

const AdicionarProdutos = ({ onAdd }) => {
    const [text, setText] = useState('');

    const enviar = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form className= "form" onSubmit={enviar}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Digite o produto"
            />
            <button type="submit">Adicionar Produto</button>
        </form>
    );
};

export default AdicionarProdutos;