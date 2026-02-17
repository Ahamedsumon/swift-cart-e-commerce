
#### 1) What is the difference between `null` and `undefined`?
Answer: null এবং undefined এর মধ্যে সবচেয়ে বড় differece হচ্ছে  null ডেভেলপার সেট করে আর undefined জাভাস্ক্রিপ্ট সেট করে (ডেভেলপার ও সেট করতে পারে কিন্তু এটা রিকমেন্ডড না )৷ null মানে হচ্ছে ঐখানে কোনে মান নেই আর  undefined মানে হচ্ছে  সেটা initialize হইছে কিন্তু মান সেট করা হই নি

#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?
Answer: map() প্রত্যেকটা element এর উপরে কিছু একটা কাজ করে নতুন একটা array রিটার্ন করে আর forEach() প্রত্যেকটা element এর উপর কাজ করে ঠিকই কিন্তু  কিছু রিটার্ন করে না তাই আমরা সাধারণত forEach কোনো কিছু দেখানোর কাজে বেশি ব্যবহার করে থাকি

#### 3) What is the difference between `==` and `===`?
Answer: double equal (==) এবং triple equal (===) এর মধ্যে বড় পার্থক্য টা হচ্ছে  ডাবল ইকোয়াল(==)  টাইপ চেক করে না আর ট্রিপল ইকোয়াল মানের সাথে সাথে টাইপ ও চেক করে

#### 4) What is the significance of `async`/`await` in fetching API data?
Answer: async/await ব্যবহার করে খুব সহজেই API থেকে ডাটা  fetch করা যায় async/await কোডের রিডে বিলটি বাড়ায়  async একটি প্রমিজ রিটার্ন করে আর await প্রমিজ রিজলভ কিংবা রিজেক্ট হওয়া পর্যন্ত বাকি কোডকে execution থেকে থামিয়ে রাখে

#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Answer: জাভাস্ক্রিপ্টে স্কোপ হচ্ছে একটা boundry মানে কোডটা কোথায় ডিক্লেয়ার করা হয়ছে এবং কোথায় এটা ব্যবহার করা যাবে তার ই একটা কনসেপ্ট৷ তিন ধরনের স্কোপ আছে (global, function, block)
1. Global scope: হচ্ছে সেই স্কোপ যেটাকে ঐই ফাইলের যোকোনো জায়গা থেকে access করা যায়
2. functon scope: হচ্ছে  একটা ভেরিয়েবল একটা ফাংশন এর ভিতর ডিক্লেয়ার করা হইছে সেই ভেরিয়েবল টি শুধু ঐ ফাংশন এর ভিতর ই access করা যাবে বাহির থেকে access করা যাবে না 
3. block scope: হচ্ছে  যেইসব ভেরিয়েবল {} bracket এর ভিতর ডিক্লেয়ার করা হয় সেগুলোকে বুঝায় এবং এই গুলোকে {} bracket এর বাহির থেকে access করা যায় না