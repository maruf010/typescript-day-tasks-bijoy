// Basic Type and Interface Practice
interface User {
  name: string;
  email: string;
  phone?: string;
  active?: boolean;
}

const user: User = {
  name: "Maruf",
  email: "mhbijoy013@gmail.com",
  phone: "01713847702",
  active: true,
};
console.log(user);

//Union & Type Narrowing
function handleInput(input: number | string) {
  if (typeof input === "number") {
    console.log("Number Squared:", input * input);
  } else {
    console.log("Uppercase String:", input.toUpperCase());
  }
}
handleInput(47);
handleInput("Maruf");

// Array & Object Typing
interface Product {
  name: string;
  price: number;
  inStock: boolean;
}
const products: Product[] = [
  {
    name: "Mobile",
    price: 15000,
    inStock: true,
  },
  {
    name: "Laptop",
    price: 80000,
    inStock: false,
  },
];
console.log(products);

// Function with Generics
function getFirstItem<T>(array: T[]): T | null {
  return array.length > 0 ? array[0] : null;
}
console.log(getFirstItem([1, 2, 3]));

// Readonly & Partial Utility
interface User {
  name: string;
  email: string;
  phone?: string;
  active?: boolean;
}
const readonlyUser: Readonly<User> = {
  name: "Maruf",
  email: "maruf@example.com",
};

const updateUser: Partial<User> = {
  phone: "0123456678",
  active: false,
};
console.log(updateUser);

// Type Assertion & Casting
function printLength(value: unknown) {
  if (typeof value === "string") {
    console.log("String Length:", (value as string).length);
  } else {
    console.log("Not a string");
  }
}
printLength("Maruf Hossain");
printLength(12345);

// Enum & Literal Type
// enum Role {
//   Admin,
//   User,
//   Guest,
// }
// let role: Role = Role.Admin;
// if (role === Role.Admin) {
//   console.log("Welcome, Admin!");
// }

// Literal Types
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "pending";
console.log(userStatus);

// Function Return Type Practice
interface User {
  name: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  return [
    { name: "Maruf", email: "mhbijoy013@gmail.com" },
    { name: "Sajib", email: "sajib@example.com" },
  ];
}

async function showUsers() {
  const users = await getUsers();
  console.log(users);
}
showUsers();
