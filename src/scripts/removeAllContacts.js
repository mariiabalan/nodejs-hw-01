import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];

    await writeContacts(emptyContacts);
    console.log('Всі контакти були успішно видалені.');
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
    throw new Error('Не вдалося видалити контакти');
  }
};

removeAllContacts()
  .then(() => console.log('Операція успішна'))
  .catch((error) => console.error(error));
