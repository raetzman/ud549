function AddressBook () {
	this.contacts = [];	
	this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb) {
	var self = this;

	setTimeout(function() {
		self.initialComplete = true;
		if(cb){
			return cb();
		}
	}, 3);
};

AddressBook.prototype.addContact = function(contact){
	this.contacts.push(contact);
};
AddressBook.prototype.deleteContact = function(contact){
	return this.contacts.splice(contact);
};
 
AddressBook.prototype.getContact = function(integer){
	return this.contacts[integer];
};