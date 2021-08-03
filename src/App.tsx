import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ACCOUNTS_PARTNER, ENV } from './settings';

function App() {

  const [isAuthenticated, setAuthentication] = useState<string>('');

  const getAccountsToken = (isRegister?: boolean): void => {
    const params = {
      logo: 'https://cdn.eduzzcdn.com/mercurius/upload/e3/77/e377d9b56510471abff281c4988e2cc6',
      env: ENV !== 'production' ? 'homolog' : ENV,
      register: isRegister ? 'true' : 'false'
    };
  
    window.Eduzz.Accounts.login(ACCOUNTS_PARTNER, params).subscribe((accountsToken: string) => setAuthentication(accountsToken));
  };

  useEffect(() => {
    getAccountsToken();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!!isAuthenticated ? 
          <p>
            Awesome, you're in buddy!
          </p> : 
          <p>
            You need to sign in bro!
          </p>}
        
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
