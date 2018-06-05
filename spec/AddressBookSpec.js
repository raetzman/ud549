describe("Address Book", function(){

	var addressBook, thisContact;

	beforeEach(function(){
		addressBook = new AddressBook();
		thisContact = new Contact();
	});

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

describe("Async Address Book", function(){
	var addressBook = new AddressBook();

	beforeEach(function(done){
		addressBook.getInitialContacts(function(){
			done();
		});
	});

	it('should grab an initial contacts', 
	function(done){
		
		addressBook.getInitialContacts();
		expect(addressBook.initialComplete).toBe(true);
		done();
	}
);
});