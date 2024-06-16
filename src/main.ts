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

// interface User {
//   name: string;
//   age: number;
//   lastName?: string; // Optional property (?)
//   sayHello(): string;
//   sayBay(): void;
//   showAge(userAge: number): string;
// }

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

// const student: User = {
//   name: "Bob",
//   age: 12,
//   sayHello() {
//     return "Hello";
//   },
//   sayBay() {
//     console.log("Bay");
//   },
//   showAge(userAge) {
//     return `My age is ${userAge}`;
//   },
// };

//////////////////////////////////////////////

// Index Properties:

// interface List {
//   [key: string]: number | null;
// }

// type Fruits = {
//   apples: number;
//   bananas: number;
//   oranges: number;
// };

// const fruits: List = {
//   apples: 10,
//   bananas: 15,
//   oranges: 25,
//   pineapples: 10,
//   peaches: null,
// };

// const electronics: List = {
//   phone: 20,
//   tables: 10,
//   monitors: 23,
// };

// Generic:

// Array:

// function getFirstElement<T>(array: T[]): T | undefined {
//   return array[0];
// }

// numberArray
// function getFirstElement<T>(array: number[]) : number {
//   return array[0];
// }

// stringArray
// function getFirstElement<T>(array: string[]) : string {
//   return array[0];
// }

// objectArray
// function getFirstElement<T>(array: { name: string}[]) : { name: string} {
//   return array[0];
// }

// const numberArray = [10, 20, 30];
// const stringArray = ["hello", "world", "typescript"];
// const objectArray = [{ name: "Alice" }, { name: "Bob" }];

// console.log(getFirstElement(numberArray)); // Output: 10
// console.log(getFirstElement(stringArray)); // Output: "hello"
// console.log(getFirstElement(objectArray)); // Output: { name: "Alice"

// Object:
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const person = {
//   name: "John",
//   age: 30,
//   occupation: "Engineer",
//   gender: "Male",
// };

// const name = getProperty(person, "name"); // Output: "John"
// const age = getProperty(person, "age"); // Output: 30
// const gender = getProperty(person, "gender"); // undefined

// Partial:

// interface UserProfile {
//   username: string;
//   email: string;
//   age: number;
// }

// const originalProfile: UserProfile = {
//   username: "johndoe",
//   email: "john.doe@example.com",
//   age: 28,
// };

// function updateProfile(profile: UserProfile, updates: Partial<UserProfile>) {
//   return { ...profile, ...updates };
// }

// const updatedProfile = updateProfile(originalProfile, {
//   email: "new.john.doe@example.com",
//   age: 29,
// });

//  Readonly:

// interface User {
//   id: number;
//   name: string;
// }

// const user: Readonly<User> = {
//   id: 100,
//   name: "Bob",
// };

// user.id = 201;
// user.name = "Alice";

// Pick<T, K>:

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const fullEmployeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "john.doe@example.com",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };

// function displayInfo(
//   fullEmployeeInfo: Employee
// ): Pick<Employee, "name" | "email"> {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// }

// interface BasicInfo {
//   name: string;
//   email: string;
// }

// function displayInfo(fullEmployeeInfo: Employee): BasicInfo {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// }

// Omit<T, K>:

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date; // hide info
// }

// const fullEmployeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "john.doe@example.com",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };

// function displayInfo(fullEmployeeInfo: Employee): Omit<Employee, "hireDate"> {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//     department: fullEmployeeInfo.department,
//     id: fullEmployeeInfo.id,
//   };
// }

// Record<K, T>:

// interface List {
//   [key: string]: number | null;
// }

// function recordTemperatures(temps: number[]): Record<string, number> {
//   let temperatureRecord: Record<string, number> = {};

//   temps.forEach((temp, index) => {
//     temperatureRecord[`day${index + 1}`] = temp;
//   });

//   return temperatureRecord;
// }

// // Example usage:
// const weeklyTemps = [22, 24, 23, 25, 24, 26, 27];
// const tempRecord = recordTemperatures(weeklyTemps);
// console.log(tempRecord);

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date; // hide info
// }

// type EmployeeBasicInfo = Omit<Employee, "hireDate">;

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// async function fetchUser(): Promise<User> {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const user = await response.json();
//     return user;
//   } catch (error) {
//     console.log("fetch error");
//     throw error;
//   }
// }

// async function fetchUser<T>(url: string): Promise<T> {
//   try {
//     const response = await fetch(url);
//     const user: T = await response.json();
//     return user;
//   } catch (error) {
//     console.log("fetch error");
//     throw error;
//   }
// }

// async function fetchUser<T>(url: string): Promise<T> {
//   try {
//     const response: T = await axios.get(url);
//     return response;
//   } catch (error) {
//     console.log("fetch error");
//     throw error;
//   }
// }

// const user = {
//   id: 1,
//   name: "John",
//   email: "john.doe@example.com",
// };
