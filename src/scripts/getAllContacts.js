import { readContacts } from '../utils/readContacts.js'; // Імпорт функції readContacts

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Помилка при зчитуванні контактів:', error);
    throw new Error('Не вдалося отримати контакти');
  }
};

getAllContacts()
  .then((contacts) => console.log(contacts))
  .catch((error) => console.error(error));
