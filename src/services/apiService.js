export const simulateSaveRequest = () => {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 400) + 800;
      setTimeout(() => {
        const success = Math.random() >= 0.5;
        if (success) {
          resolve({ success: true });
        } else {
          reject(new Error('Не удалось сохранить пароль. Сервер вернул ошибку.'));
        }
      }, delay);
    });
  };
  