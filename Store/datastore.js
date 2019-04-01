import {
	observable,
	action,
	decorate,
	computed
} from 'mobx';

class DataStore {
	session = {
		username: ''
	};

	cust_details = {
		name: '',
		password: '',
		email: '',
		phone: ''
	};

	handy_details = {
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
	updateName: action,
	updateEmail: action,
	updatePhone: action,
	updatePass: action
});

export default new DataStore();