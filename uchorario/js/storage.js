// Gestión de localStorage para guardar preferencias del usuario
const Storage = {
  /**
   * Guarda los datos del usuario
   */
  saveUserData(data) {
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(CONFIG.STORAGE_KEY, jsonData);
      return true;
    } catch (error) {
      console.error('Error al guardar datos:', error);
      return false;
    }
  },

  /**
   * Obtiene los datos del usuario
   */
  getUserData() {
    try {
      const jsonData = localStorage.getItem(CONFIG.STORAGE_KEY);
      if (jsonData) {
        return JSON.parse(jsonData);
      }
      return null;
    } catch (error) {
      console.error('Error al leer datos:', error);
      return null;
    }
  },

  /**
   * Guarda la lista de amigos seleccionados
   */
  saveFriends(friends) {
    const userData = this.getUserData() || {};
    userData.friends = friends;
    userData.lastUpdated = new Date().toISOString();
    return this.saveUserData(userData);
  },

  /**
   * Obtiene la lista de amigos
   */
  getFriends() {
    const userData = this.getUserData();
    return userData?.friends || [];
  },

  /**
   * Verifica si hay amigos guardados
   */
  hasFriends() {
    const friends = this.getFriends();
    return friends.length > 0;
  },

  /**
   * Borra todos los datos
   */
  clearAll() {
    try {
      localStorage.removeItem(CONFIG.STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error al borrar datos:', error);
      return false;
    }
  },

  /**
   * Agrega un amigo
   */
  addFriend(friendName) {
    const friends = this.getFriends();
    if (!friends.includes(friendName)) {
      friends.push(friendName);
      this.saveFriends(friends);
    }
  },

  /**
   * Elimina un amigo
   */
  removeFriend(friendName) {
    const friends = this.getFriends();
    const filtered = friends.filter(f => f !== friendName);
    this.saveFriends(filtered);
  }
};