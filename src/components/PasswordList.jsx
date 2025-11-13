import React from 'react';
import copyIcon from '/assets/copy48.png';
import deleteIcon from '/assets/delete48.png';
import noPasswordsImg from '/assets/no-passwords.png';

function PasswordList({ passwords, onRemove }) {
  return (
    <div className="password-list">
      {passwords.length === 0 ? (
        <div className="no-passwords-message">
          <img 
            src={noPasswordsImg}
            alt="Нет сохраненных паролей"
            className="no-passwords-image"
          />
          <p>Нет сохранённых паролей</p>
        </div>
      ) : (
        passwords.map(password => (
          <div key={password.id} className="password-item">
            <p>Сайт: {password.site}</p>
            <p>Логин: {password.login}</p>
            <p>Пароль: {password.password}</p>
            <button
              onClick={() => navigator.clipboard.writeText(password.password)}
              className="copy-btn"
              aria-label="Копировать пароль"
            >
              <img src={copyIcon} className="img-invert" alt="Копировать" width="30" height="30"/>
            </button>
            <button
              onClick={() => onRemove(password.id)}
              className="remove-btn"
              aria-label='Удалить пароль'
            >
              <img src={deleteIcon} className="img-invert" alt="Удалить" width="30" height="30"/>
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default PasswordList;
