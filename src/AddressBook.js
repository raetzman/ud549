function AddressBook () {
	this.contacts = [];	
}


AddressBook.prototype.addContact = function(contact){
	this.contacts.push(contact);
};
AddressBook.prototype.deleteContact = function(contact){
	return this.contacts.splice(contact);
};
 
AddressBook.prototype.getContact = function(integer){
	return this.contacts[integer];
};