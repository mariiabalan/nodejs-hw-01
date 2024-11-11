import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();

    return contacts.length;
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error);
    throw new Error('Не вдалося отримати кількість контактів');
  }
};

countContacts()
  .then((count) => console.log(`Кількість контактів: ${count}`))
  .catch((error) => console.error(error));
