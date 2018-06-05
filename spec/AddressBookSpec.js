describe("Address Book", function(){
	it("Matthias should be able to add a contact", function(){
		var addressBook = new AddressBook();
		var thisContact = new Contact();

		addressBook.addContact(thisContact);
		
		expect(addressBook.getContact(0)).toBe(thisContact);
	});
	
	it("should be able to delete contact", function() {
		var addressBook = new AddressBook();
		var thisContact = new Contact();

		addressBook.addContact(thisContact);
		addressBook.deleteContact(thisContact);
		
		expect(addressBook.getContact(0)).not.toBeDefined();
	}
	);
});