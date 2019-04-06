import { observable, action, decorate, computed } from 'mobx';

class DataStore {
	session = {
		username: ''
	};

	cust_details = {
		customerID: '',
		username: '',
		name: '',
		password: '',
		email: '',
		phone: ''
	};

	handy_details = {
		handyID: '',
		username: '',
		name: '',
		password: '',
		service: '',
		experience: '',
		email: '',
		phone: ''
	};

	//updating username for session.
	updateUser(username) {
		this.session.username = username;
	}

	//updating customer details.
	updateCID(customerID) {
		this.cust_details.customerID = customerID;
	}
	updateCUser(username) {
		this.cust_details.cusername = username;
	}
	updateCName(name) {
		this.cust_details.name = name;
	}
	updateCPass(password) {
		this.cust_details.password = password;
	}
	updateCEmail(email) {
		this.cust_details.email = email;
	}
	updateCPhone(phone) {
		this.cust_details.phone = phone;
	}

	//updating handyman details.
	updateHID(handyID) {
		this.handy_details.handyID = handyID;
	}
	updateHUser(username) {
		this.handy_details.husername = username;
	}
	updateHName(name) {
		this.handy_details.name = name;
	}
	updateHPass(password) {
		this.handy_details.password = password;
	}
	updateHEmail(email) {
		this.handy_details.email = email;
	}
	updateHPhone(phone) {
		this.handy_details.phone = phone;
	}
	updateHService(service) {
		this.handy_details.service = service;
	}
	updateHExp(experience) {
		this.handy_details.experience = experience;
	}
}

decorate(DataStore, {
	session: observable,
	updateUser: action,
	updateCUser: action,
	updateCName: action,
	updateCEmail: action,
	updateCPhone: action,
	updateCPass: action,
	updateHUser: action,
	updateHName: action,
	updateHEmail: action,
	updateHPhone: action,
	updateHPass: action,
	updateHExp: action,
	updateHService: action
});

export default new DataStore();
