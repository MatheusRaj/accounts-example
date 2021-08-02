import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ACCOUNTS_PARTNER, ENV } from './settings';

function App() {

  const getAccountsToken = (isRegister?: boolean): any => {
    const params = {
      logo: 'https://cdn.eduzzcdn.com/mercurius/upload/e3/77/e377d9b56510471abff281c4988e2cc6',
      env: ENV !== 'production' ? 'homolog' : ENV,
      register: 'false'
    };
  
    if (isRegister) {
      params.register = 'true';
    }

    console.log('Chamando accounts', ENV);
  
    window.Eduzz.Accounts.login(ACCOUNTS_PARTNER, params).subscribe((res: any) => console.log(res));
  };

  useEffect(() => {
    getAccountsToken();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Awesome, you're in buddy!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
