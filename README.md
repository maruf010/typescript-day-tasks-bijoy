# 🧠 Day 1 – TypeScript Basics Practice - Maruf Hossain Bijoy

TypeScript-এর মৌলিক বিষয়গুলো — যেমন Type, Interface, Union, Generic

---

## 1️⃣ Basic Type & Interface Practice

**🎯 Goal:**  
`User` ইন্টারফেস ডিফাইন করো যেখানে কিছু ফিল্ড অপশনাল থাকবে।

**📝 Note:**  
`name`, `email`, `phone?`, `active?`

---

## 2️⃣ Union & Type Narrowing

**🎯 Goal:**  
`number | string` টাইপের ইনপুট নিরাপদভাবে হ্যান্ডেল করা হয়।

**📝 Note:**  
টাইপ চেক করতে `typeof` ব্যবহার করা হয়।

---

## 3️⃣ Array & Object Typing

**🎯 Goal:**  
একটি প্রোডাক্ট লিস্ট টাইপ করা হয়।

**📝 Note:**  
`Product[]` → প্রতিটি প্রোডাক্টে থাকবে `name`, `price`, `inStock`

---

## 4️⃣ Function with Generics

**🎯 Goal:**  
একটি ফাংশন বানালাম `getFirstItem<T>(arr: T[]): T | null`

**📝 Note:**  
প্রথম উপাদান রিটার্ন করবে, না থাকলে `null`

---

## 5️⃣ Readonly & Partial Utility

**🎯 Goal:**  
`Readonly` এবং `Partial` ব্যবহার করা।

**📝 Note:**  
`Partial<User>` → update form-এর জন্য  
`Readonly<User>` → অপরিবর্তনযোগ্য ডেটা

---

## 6️⃣ Type Assertion & Casting

**🎯 Goal:**  
`unknown` টাইপ থেকে নিরাপদভাবে `string` কাস্ট করা হয়।

**📝 Note:**  
`as string` ব্যবহারের আগে টাইপ যাচাই করা হয়।

---

## 7️⃣ Enum & Literal Type

**🎯 Goal:**  
একটি enum বানালাম → `Role { Admin, User }`

**📝 Note:**  
লিটারাল টাইপ দিয়ে ভ্যারিয়েবল সীমাবদ্ধ করা হয়েছে।

---

## 8️⃣ Function Return Type Practice

**🎯 Goal:**  
getUsers() একটি async function, তাই এটি সবসময় একটি Promise রিটার্ন করে।

রিটার্ন টাইপ স্পষ্টভাবে উল্লেখ করা হয়েছে → Promise<User[]>

await getUsers() দিয়ে আমরা সেই Promise resolve করেছি।

**📝 Note:**  
`async/await` এবং return টাইপ annotation অনুশীলন করো।

---
