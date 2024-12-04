'use strict';

const phonebook = {
    'Friend': '+380111222333',
    'Electrician': '+38097680093',
    'DONT PICK UP': '+380667668669'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
