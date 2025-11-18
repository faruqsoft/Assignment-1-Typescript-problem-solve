What are some differences between interfaces and types in TypeScript?
Interface:
•	Extends দিয়ে এক বা একাধিক ইন্টারফেস এক্সটেন্ড করা যায়
•	একই নামে একাধিক Interface লিখলে সেগুলো অটোমেটিক মার্জ হয়
•	ম্যাপড টাইপ, কন্ডিশনাল টাইপ সমর্থন করে না
•	থার্ড-পার্টি লাইব্রেরির ইন্টারফেস এক্সটেন্ড করা খুব সহজ
Type:
•	& (intersection) দিয়ে একাধিক টাইপ কম্বাইন করা যায়
•	Type এর ক্ষেত্রে ডুপ্লিকেট নাম দিলে এরর হয়
•	ম্যাপড টাইপ, কন্ডিশনাল টাইপ সমর্থন করে
•	Type দিয়ে গ্লোবাল অগমেন্টেশন করা যায়, কিন্তু কম সুবিধাজনক

What is the use of the keyof keyword in TypeScript? Provide an example.
	keyof হলো TypeScript-এর একটা type operator
	এটা কোনো অবজেক্ট টাইপের সব প্রপার্টি নাম (keys) নিয়ে একটা ইউনিয়ন টাইপ তৈরি করে।
	keyof T মানে → T টাইপের অবজেক্টে যতগুলো key আছে, সেগুলোর নামের একটা ইউনিয়ন।
Example:

type Person = {
name: string; 
age: number; 
email: string; 
isAdmin: boolean;
 };
type PersonKeys = keyof Person;
type PersonKeysManual = "name" | "age" | "email" | "isAdmin";
type Check = PersonKeys extends PersonKeysManual ? "Same" : "Different";
