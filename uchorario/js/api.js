// API para comunicarse con Google Apps Script
const API = {
  /**
   * Obtiene la lista de todas las personas
   */
  async getPersons() {
    try {
      const url = `${CONFIG.API_URL}?action=getPersons`;
      const response = await fetch(url);
      const data = await response.json();
      return data.persons || [];
    } catch (error) {
      console.error('Error al obtener personas:', error);
      return [];
    }
  },

  /**
   * Obtiene el horario completo de una persona
   */
  async getSchedule(personName) {
    try {
      const url = `${CONFIG.API_URL}?action=getSchedule&person=${encodeURIComponent(personName)}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener horario:', error);
      return null;
    }
  },

  /**
   * Obtiene el estado actual de varias personas
   */
  async getCurrentStatus(persons) {
    try {
      const personsParam = persons.join(',');
      const url = `${CONFIG.API_URL}?action=getCurrentStatus&persons=${encodeURIComponent(personsParam)}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener estado actual:', error);
      return null;
    }
  },

  /**
   * Obtiene el estado de personas en un día/hora específicos
   */
  async getScheduleByDateTime(persons, day, time) {
    try {
      const personsParam = persons.join(',');
      const url = `${CONFIG.API_URL}?action=getScheduleByDateTime&persons=${encodeURIComponent(personsParam)}&day=${encodeURIComponent(day)}&time=${encodeURIComponent(time)}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener horario por fecha:', error);
      return null;
    }
  }
};