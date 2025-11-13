import React, { useState, useEffect } from 'react';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';
import PasswordGenerator from './components/PasswordGenerator';
import './styles.css';
import passLogo from '/assets/password-manager-logo-img.png';

function App() {
  const [passwords, setPasswords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedPasswords = JSON.parse(localStorage.getItem('passwords'));
    if (savedPasswords) setPasswords(savedPasswords);
  }, []);

  const addPassword = (passwordData) => {
    const currentPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
    const newPassword = { ...passwordData, id: Date.now() };
    localStorage.setItem('passwords', JSON.stringify([...currentPasswords, newPassword]));
    setPasswords([...currentPasswords, newPassword]);
  };

  const removePassword = (id) => {
    const filtered = passwords.filter(p => p.id !== id);
    localStorage.setItem('passwords', JSON.stringify(filtered));
    setPasswords(filtered);
  };

  return (
    <div>
      <header>
        <div className="title">
          <img src={passLogo} alt="Password Manager" width='200px' />
        </div>
        <button className="password-add" onClick={() => setIsModalOpen(true)}>Добавить пароль</button>
      </header>
      {isModalOpen && <PasswordForm onSubmit={addPassword} onClose={() => setIsModalOpen(false)} />}
      <PasswordList passwords={passwords} onRemove={removePassword} />
      <PasswordGenerator />
    </div>
  );
}

export default App;