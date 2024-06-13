import "./style.css";

// Basic Types:

// let isDone: boolean = false;

// const name: string = "Bob";

// const LastName: string = "Jonson";

// const age: number = 12;

// const isHappy: boolean = true;

// const budget: null = null;

// const status: undefined = undefined;

// Object:

// Create a TypeScript function named displayUserProfile that takes a user profile object as an argument.
// The user profile object should have the following properties: username(string), age(number), and isActive(boolean).
// The function should return a string summarizing the user's profile details.

// type UserProfile = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };

// function displayUserProfile(user: UserProfile) {
//   return `User name is ${user.userName} his is ${user.age} years old and his is ${user.isActive}`;
// }

// const user = {
//   userName: "Bob",
//   age: 12,
//   isActive: true,
// };

// console.log(displayUserProfile(user));

// function logName(name: string) {
//   return `${name}`;
// }

// Array:

// type User = {
//   name: string;
//   age: number;
// };

// function calcTotal(arr: object[]) {
//   //   return arr.reduce((acc, el) => acc + el, 0);
// }

// function calcTotal(arr: { name: string; age: number }[]) {
//   //   return arr.reduce((acc, el) => acc + el, 0);
// }

// function calcTotal(arr: User[]) {
//   //   return arr.reduce((acc, el) => acc + el, 0);
// }

// const numberArray = [10, 20, 30, 40];
// console.log(calcTotal(numberArray)); // Output: 100

// const users = [
//   { name: "Bob", age: 12 },
//   { name: "Bob", age: 23 },
//   { name: "Bob", age: 34 },
// ];

// console.log(calcTotal(users));

// Unknown:

// function safelyParseJson(jsonString: string) {
//   try {
//     const result: unknown = JSON.parse(jsonString);
//     if (typeof result === "object" && result !== null) {
//       return result; // Type is verified as an object (non-null)
//     }
//   } catch (error) {
//     console.error("Failed to parse JSON:", error);
//   }
//   return null; // Return null if parsing fails or type is incorrect
// }

// Any:

// function logDetails(value: any) {
//   console.log(`Value: ${value}, Type of value: ${typeof value}`);
// }

// Enum;

// enum VehicleType {
//   Car = "Audi",
//   Truck = "Scania",
//   Motorcycle = "Ducati",
// }

// function getVehicleType(vehicle: VehicleType) {
//   return `The vehicle type is: ${vehicle}.`;
// }

// // Example usage:
// console.log(getVehicleType(VehicleType.Car)); // Output: "The vehicle type is: Audi."
// console.log(getVehicleType(VehicleType.Motorcycle)); // Output: "The vehicle type is: Ducati."

// Union:

// function formatInput(input: string | number) {
//   if (typeof input === "number") {
//     return input.toFixed(2); // Formats the number to two decimal places
//   } else {
//     return input.toUpperCase(); // Converts the string to uppercase
//   }
// }

// Literal:

// function lightShower(color: "green" | "yellow" | "red") {
//   if (color === "green") {
//     console.log("go");
//   } else if (color === "yellow") {
//     console.log("ready");
//   } else if (color === "red") {
//     console.log("stop");
//   }
// }

// lightShower("black");

// Return:

// function logName(name: string): string {
//   return `${name}`;
// }

// Void:

// function logName(name: string): void {
//   console.log(`${name}`);
// }

// Never:

// function errorHandler(message: string): never {
//   throw new Error(message);
// }

// // Example usage:
// errorHandler("Critical error occurred!"); // Throws an Error with the provided message

// Interface:

interface User {
  name: string;
  age: number;
  lastName?: string; // Optional property (?)
  sayHello(): string;
  sayBay(): void;
  showAge(userAge: number): string;
}

// type User = {
//     userName: string;
//     age: number;
// };

// const user = {
//   name: "Bob",
//   age: 12,
//   sayHello() {
//     return "Hello";
//   },
//   sayBay() {
//     console.log("Bay");
//   },
//   showAge(userAge: number) {
//     return `My age is ${userAge}`;
//   },
// };

const student: User = {
  name: "Bob",
  age: 12,
  sayHello() {
    return "Hello";
  },
  sayBay() {
    console.log("Bay");
  },
  showAge(userAge) {
    return `My age is ${userAge}`;
  },
};
