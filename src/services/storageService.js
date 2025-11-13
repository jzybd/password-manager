export const savePasswords = (passwords) => {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  };
  
  export const loadPasswords = () => {
    const data = localStorage.getItem('passwords');
    return data ? JSON.parse(data) : [];
  };
  
  export const removePassword = (serviceName) => {
    const passwords = loadPasswords();
    const filtered = passwords.filter(p => p.service !== serviceName);
    savePasswords(filtered);
  };
  