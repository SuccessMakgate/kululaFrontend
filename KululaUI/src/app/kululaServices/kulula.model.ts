

export class Kulula {
    personId:number;
    name:string;
    age:number;
}

export class carhire {
      pickUp:string;
      DropOff:string;
      IsReturn:boolean;
      PickDate:string;
      CarName:string;
}
export class FlightSearch {
	DestPlace:string;
    DepartPlace:string;
    DepartDate:string;
    returnDate:string;
    IsReturn:boolean;
    NumPeople:number;
}
export class schedule {
	DepartDate:string;
    DepartTime:string;
	ReturnDate:string;
    ReturnTime:string;
}
export class seatbook {
	SeatNumber:number;
    SeatPrice:number;
    SeatName:string;
    
}
export class addCar {
	CarName:string;
	CarColour:string;
	YearModel:string;
	LeatherSeat:string;
	Radio_Cd:string;
	AirBag:string;
	price:number;
}
export class addFlight {
      AircraftNo:string;
      AircraftName:string;
      MaxSeats:number;
      price:number
}
export class register{
    Password:string;
    Email:string;
    ConfirmPassword:string;
}
export class ClientDetails {
    Email:string;
    IdNumber:string;
    FirstName:string;
    LastName:string;
    Gender:string;
    Address:string;
    PhoneNo:string;
}
export class ClientProfile{
    ClientID:number;
    Email:string;
    IdNumber:string;
    FirstName:string;
    LastName:string;
    Gender:string;
    Address:string;
    PhoneNo:string;
}
export class login {
	Password:string;
    Email:string;
}
export class payment {
	payMethod:string;
    AccHolder:string;
    AccountNo:string;
    CardNo:string;
    TransactionDate:string;
    IsCarhire:boolean;
    IsSeatBook:boolean;
}
export class Memberpayment {
	discount:number;
	kululaPoints:number;
    PaymentId:number;
    TransactionDate:string;
	Email:string;
}
export class Traveller {
	IdNumber:string;
	FirstName:string;
    LastName:string;
    Gender:string;
    Email:string;
    Address:string;
    PhoneNo:string;
    Contact:string;
}
export class ChangePassword {
	OldPassword:string;
	NewPassword:string;
    ConfirmPassword:string;
}
