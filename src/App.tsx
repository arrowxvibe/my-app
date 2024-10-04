import React, { useState } from 'react';
import { Q2Btn } from 'q2-tecton-framework-wrappers/dist/react';
import './App.css';
import CheckCopiesContent from './CheckCopiesContent';

const App: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="container">
      <h1 className="title">Research Request</h1>
      <p className="subtitle">Select from the following options:</p>
      <div className="button-container">
        <Q2Btn 
          className={`custom-button ${activeButton === 'checkCopies' ? 'active' : ''}`}
          onClick={() => handleButtonClick('checkCopies')}
        >
          Check Copies
        </Q2Btn>
        <Q2Btn 
          className={`custom-button ${activeButton === 'statementCopies' ? 'active' : ''}`}
          onClick={() => handleButtonClick('statementCopies')}
        >
          Statement Copies
        </Q2Btn>
        <Q2Btn 
          className={`custom-button ${activeButton === 'loanDocuments' ? 'active' : ''}`}
          onClick={() => handleButtonClick('loanDocuments')}
        >
          Loan Documents
        </Q2Btn>
      </div>
      {activeButton === 'checkCopies' && <CheckCopiesContent />}
    </div>
  );
};

export default App;