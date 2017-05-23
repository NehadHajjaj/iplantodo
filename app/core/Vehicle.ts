import { Person } from "./Person";

export class Vehicle {
	public passenger: Person;

	constructor(passengerName:string) {
		this.passenger = new Person(passengerName);
	}

	public move() {
		console.log("Moving with " + this.passenger.name);
		this.passenger.sayHi();
	}
} 