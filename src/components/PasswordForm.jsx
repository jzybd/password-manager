import React, { useState, useEffect } from 'react';
import closeIcon from '/assets/close30.png'

function PasswordForm({ onSubmit, onClose }) {
  const [site, setSite] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100vh';
    document.body.style.top = `-${scrollY}px`;

    return () => {
      const scrollPos = parseInt(document.body.style.top || '0') * -1;
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPos);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const delay = Math.floor(Math.random() * 1000) + 500;
    await new Promise(resolve => setTimeout(resolve, delay));

    if (Math.random() > 0.5) {
      onSubmit({ site, login, password });
      onClose();
    } else {
      setError('Ошибка при сохранении. Попробуйте позже.');
    }
    setIsLoading(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-icon" onClick={onClose}>
          <img src={closeIcon} alt='Закрыть' width='20px' height='20px'/>
        </span>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            placeholder="Название сайта"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" disabled={isLoading} className="submit-btn password-add">
            {isLoading ? 'Отправка...' : 'Сохранить'}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default PasswordForm;