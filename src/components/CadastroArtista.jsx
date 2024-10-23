import React from 'react';

const CadastroArtista = () => {
  return (
    <div
      style={{
        padding: '0', 
        margin: '0',  
        backgroundColor: '#fff5ef',
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
      }}
    >
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appRDJAbAvNmy0m0X/pagvLIzG8oSkWn1vf/form"
        frameBorder="0"
        width="100%" 
        height="100%" 
        style={{ background: 'transparent', border: 'none', overflow: 'hidden' }} 
        title="Artist Registration Form"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CadastroArtista;
