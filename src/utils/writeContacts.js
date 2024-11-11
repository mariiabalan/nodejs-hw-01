import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
    fs.writeFile(PATH_DB, data, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log('Contacts successfully written to file');
    });
  } catch (err) {
    console.error('Error processing data:', err);
  }
};
