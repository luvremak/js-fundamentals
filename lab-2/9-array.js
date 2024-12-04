'use strict';

const phonebook = [
  { name: 'Friend', phone: '+380111222333' },
  { name: 'Electrician', phone: '+38097680093' },
  { name: 'DONT PICK UP', phone: '+380667668669' }
];

function findPhoneByName(name) {
  for (let i = 0; i < phonebook.length; i++) {
    if (phonebook[i].name === name) {
      return phonebook[i].phone;
    }
  }
  return 'Phone number not found';
}

module.exports = { phonebook, findPhoneByName };
