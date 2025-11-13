import React, { useState } from 'react';


function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [useLetters, setUseLetters] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [caseMode, setCaseMode] = useState('random');
  const [customChars, setCustomChars] = useState('');
  const [useCustomOnly, setUseCustomOnly] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');


  const generatePassword = () => {
    let chars = '';

    if (useCustomOnly) {
      chars = customChars;
    } else {
      if (useLetters) chars += 'abcdefghijklmnopqrstuvwxyz';
      if (useNumbers) chars += '0123456789';
      if (useSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
      if (customChars) chars += customChars;
    }

    if (!chars) {
      setGeneratedPassword('Нет символов для генерации!');
      return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      password += caseMode === 'upper' 
        ? char.toUpperCase()
        : caseMode === 'lower'
          ? char.toLowerCase()
          : Math.random() > 0.5
            ? char.toUpperCase()
            : char.toLowerCase();
    }
    setGeneratedPassword(password);
  };

  return (
    <div className="password-generator">
      <h3>Генератор паролей</h3>

      <div className="generator-content">
        <div className="settings-panel">
          <div className="settings">
            <label>
              <span>Длина:</span>
              <input
                type="number"
                className="input-rounded"
                value={length}
                onChange={e => setLength(Number(e.target.value))}
                min="4"
                max="128"
              />
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={useLetters}
                onChange={() => setUseLetters(!useLetters)}
                disabled={useCustomOnly}
              />
              <span>Буквы</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={useNumbers}
                onChange={() => setUseNumbers(!useNumbers)}
                disabled={useCustomOnly}
              />
              <span>Цифры</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={useSymbols}
                onChange={() => setUseSymbols(!useSymbols)}
                disabled={useCustomOnly}
              />
              <span>Спецсимволы</span>
            </label>

            <label>
              Регистр:
              <select
                value={caseMode}
                onChange={e => setCaseMode(e.target.value)}
              >
                <option value="random">Случайный</option>
                <option value="upper">Верхний</option>
                <option value="lower">Нижний</option>
              </select>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={useCustomOnly}
                onChange={() => setUseCustomOnly(!useCustomOnly)}
              />
              <span>Использовать свои символы</span>
              <input
                type="text"
                value={customChars}
                onChange={e => setCustomChars(e.target.value)}
                placeholder="Введите символы..."
              />
            </label>
          </div>
        </div>

        <div className="result-panel">
          <p className="result">Сгенерированный пароль: {generatedPassword}</p>
        </div>
      </div>

      <button
        onClick={generatePassword}
        className="generate-btn full-width"
      >
        Сгенерировать
      </button>
    </div>
  );
}

export default PasswordGenerator;
