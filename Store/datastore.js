import { observable, action, decorate, computed } from 'mobx';

class DataStore {
	session = {
		username: ''
	};

	order = {
		corder: [],
		horder: [],
		acceptedorder: [],
		completedorder: [],
		region: []
	};
	cust_details = {
		customerID: '',
		username: '',
		name: '',
		password: '',
		email: '',
		phone: '',
		token: ''
	};

	handy_details = {
		handyID: '',
		username: '',
		name: '',
		password: '',
		service: '',
		experience: '',
		email: '',
		phone: '',
		token: ''
	};

	order_details = {
		orderID: '',
		customerID: '',
		handyID: '',
		cname: '',
		hname: '',
		service: '',
		serviceInfo: '',
		longitude: '',
		latitude: '',
		latitudeDelta: '',
		longitudeDelta: '',
		orderdate: '',
		phone: '',
		token: ''
	};

	HandyLocation = {
		longitude: '',
		latitude: '',
		latitudeDelta: '',
		longitudeDelta: ''
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
		this.cust_details.username = username;
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
	updateCToken(token) {
		this.cust_details.token = token;
	}

	//updating handyman details.
	updateHID(handyID) {
		this.handy_details.handyID = handyID;
	}
	updateHUser(username) {
		this.handy_details.username = username;
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
	updateHToken(token) {
		this.handy_details.token = token;
	}

	//updating order details.
	updateOrderID(orderID) {
		this.order_details.orderID = orderID;
	}
	updateOCID(customerID) {
		this.order_details.customerID = customerID;
	}
	updateOCName(cname) {
		this.order_details.cname = cname;
	}
	updateOHName(hname) {
		this.order_details.hname = hname;
	}
	updateHOID(handyID) {
		this.order_details.handyID = handyID;
	}
	updateOService(service) {
		this.order_details.service = service;
	}
	updateSerInfo(serviceInfo) {
		this.order_details.serviceInfo = serviceInfo;
	}
	updateOToken(token) {
		this.order_details.token = token;
	}

	updateLongitude(longitude) {
		this.order_details.longitude = longitude;
	}
	updateLatitude(latitude) {
		this.order_details.latitude = latitude;
	}
	updateLatitudeDelta(latitudeDelta) {
		this.order_details.latitudeDelta = latitudeDelta;
	}

	updateLongitudeDelta(longitudeDelta) {
		this.order_details.longitudeDelta = longitudeDelta;
	}

	updateDate(orderdate) {
		this.order_details.orderdate = orderdate;
	}
	updateOPhone(phone) {
		this.order_details.phone = phone;
	}

	updateCorder(corder) {
		this.order.corder = corder;
	}

	updateHorder(horder) {
		this.order.horder = horder;
	}

	updateAcceptedorder(acceptedorder) {
		this.order.acceptedorder = acceptedorder;
	}

	updateCompletedorder(completedorder) {
		this.order.completedorder = completedorder;
	}

	updateRegion(region) {
		this.order.region = region;
	}
	updateHLongitude(longitude) {
		this.HandyLocation.longitude = longitude;
	}
	updateHLatitude(latitude) {
		this.HandyLocation.latitude = latitude;
	}
	updateHLatitudeDelta(latitudeDelta) {
		this.HandyLocation.latitudeDelta = latitudeDelta;
	}
	updateHLongitudeDelta(longitudeDelta) {
		this.HandyLocation.longitudeDelta = longitudeDelta;
	}
}

decorate(DataStore, {
	session: observable,
	handy_details: observable,
	cust_details: observable,
	order_details: observable,
	order: observable,
	HandyLocation: observable,

	updateCID: action,
	updateUser: action,
	updateCUser: action,
	updateCName: action,
	updateCEmail: action,
	updateCPhone: action,
	updateCPass: action,
	updateCToken: action,

	updateHID: action,
	updateHUser: action,
	updateHName: action,
	updateHEmail: action,
	updateHPhone: action,
	updateHPass: action,
	updateHExp: action,
	updateHService: action,
	updateHToken: action,

	updateOCID: action,
	updateHOID: action,
	updateLatitude: action,
	updateLatitudeDelta: action,
	updateLongitude: action,
	updateLongitudeDelta: action,
	updateOCName: action,
	updateOHName: action,
	updateOPhone: action,
	updateOService: action,
	updateSerInfo: action,
	updateOrderID: action,
	updateDate: action,

	updateCorder: action,
	updateHorder: action,
	updateAcceptedorder: action,
	updateCompletedorder: action,
	updateRegion: action,

	updateHLongitude: action,
	updateHLatitude: action,
	updateHLatitudeDelta: action,
	updateHLongitudeDelta: action
});

export default new DataStore();
