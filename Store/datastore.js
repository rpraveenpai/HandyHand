import { observable, action, decorate, computed } from 'mobx';

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

	updateUser(username) {
		this.session.username = username;
	}

	updateName(name) {
		this.cust_details.name = name;
	}
	updatePass(password) {
		this.cust_details.password = password;
	}
	updateEmail(email) {
		this.cust_details.email = email;
	}
	updatePhone(phone) {
		this.cust_details.phone = phone;
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
