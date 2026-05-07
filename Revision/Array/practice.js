// JavaScript Array Methods
// Practice Questions

// 📏 length
// 1.	Create an array of 6 fruits and print how many fruits are in it.
// 2.	Given ["a", "b", "c", "d", "e"], print the last element using length (without hardcoding the index).
// 3.	Given [10, 20, 30, 40, 50], use length to check if the array has more than 3 elements.
// 4.	Create an empty array, push 4 items into it, and print the length after each push.
// 5.	Given two arrays [1, 2, 3] and ["a", "b", "c", "d"], print which array is longer.

// 🔀 sort
// 6.	Sort ["banana", "apple", "mango", "cherry"] in alphabetical order.
// 7.	Sort [40, 1, 5, 200, 30] in ascending order.
// 8.	Sort [40, 1, 5, 200, 30] in descending order.
// 9.	Given ["banana", "apple", "kiwi", "mango"], sort by word length (shortest to longest).
// 10.	Given an array of objects, sort by age in ascending order:
// let people = [
//   { name: "Ali", age: 25 },
//   { name: "Sara", age: 19 },
//   { name: "John", age: 32 },
// ];

// 🔄 map
// 11.	Given [1, 2, 3, 4, 5], return a new array where every number is doubled.
// 12.	Given ["alice", "bob", "charlie"], return a new array with every name capitalized.
// 13.	Given [10, 20, 30, 40], return a new array where every number has "$" added in front (e.g. "$10").
// 14.	Given [1, 2, 3, 4, 5], return a new array with the square of each number.
// 15.	Given this array of objects, return an array of just the names:
// let users = [
//   { name: "Ali", age: 25 },
//   { name: "Sara", age: 19 },
//   { name: "John", age: 32 },
// ];

// ✂️ splice
// 16.	Given ["a", "b", "c", "d", "e"], remove the element at index 2.
// 17.	Given [1, 2, 3, 4, 5], insert 99 at index 2 without removing anything.
// 18.	Given ["apple", "banana", "mango"], replace "banana" with "grape".
// 19.	Given [10, 20, 30, 40, 50], remove the last 2 elements using splice.
// 20.	Given ["a", "b", "c", "d", "e"], remove elements from index 1 to 3 and insert "x" and "y" in their place.

// 🔪 slice
// 21.	Given ["a", "b", "c", "d", "e"], extract ["b", "c", "d"] using slice.
// 22.	Given [10, 20, 30, 40, 50], get the last 2 elements using slice.
// 23.	Given ["apple", "banana", "mango", "grape", "kiwi"], get the first 3 elements.
// 24.	Given [1, 2, 3, 4, 5], create a copy of the entire array using slice.
// 25.	Given ["a", "b", "c", "d", "e", "f"], extract the middle 2 elements ("c" and "d").

// ⬅️ shift
// 26.	Given ["apple", "banana", "mango"], remove the first element and print what was removed.
// 27.	Given [1, 2, 3, 4, 5], keep calling shift until the array is empty, printing each removed item.
// 28.	Given ["a", "b", "c"], shift the first element and add it to the end of the array.
// 29.	Given [10, 20, 30, 40, 50], shift 2 elements and print the remaining array.
// 30.	Given ["first", "second", "third"], use shift to remove the first element and print the new first element of the array.

// ➡️ unshift
// 31.	Given ["banana", "mango"], add "apple" to the beginning.
// 32.	Given [3, 4, 5], add 1 and 2 to the start so the array becomes [1, 2, 3, 4, 5].
// 33.	Given ["c", "d", "e"], unshift "a" and "b" and print the new length.
// 34.	Given [10, 20, 30], move the last element to the beginning using pop and unshift.
// 35.	Given an empty array [], add "first", "second", "third" one by one using unshift and print the final array.

// 🗑️ pop
// 36.	Given ["apple", "banana", "mango"], remove the last element and print what was removed.
// 37.	Given [1, 2, 3, 4, 5], pop elements one by one until only 2 elements remain.
// 38.	Given ["a", "b", "c"], pop the last element and add it to the beginning using unshift.
// 39.	Given [10, 20, 30, 40, 50], pop 3 elements and print the remaining array.
// 40.	Given ["first", "second", "last"], use pop to remove the last item and print the new last element.

// ➕ reduce
// 41.	Given [1, 2, 3, 4, 5], find the sum of all numbers.
// 42.	Given [10, 20, 30, 40], find the product (multiply all numbers together).
// 43.	Given [3, 7, 2, 9, 1], find the maximum number using reduce (without Math.max).
// 44.	Given ["apple", "banana", "mango", "kiwi"], use reduce to count the total number of characters across all strings.
// 45.	Given [1, 2, 2, 3, 3, 3, 4], use reduce to count how many times each number appears.
// // Expected output: { 1: 1, 2: 2, 3: 3, 4: 1 }

// 🔃 reverse
// 46.	Given [1, 2, 3, 4, 5], reverse it and print the result.
// 47.	Given ["apple", "banana", "mango"], reverse the array and print the first element of the reversed array.
// 48.	Given "hello", convert it to an array, reverse it, and join it back into a reversed string.
// 49.	Given [1, 2, 3, 4, 5], reverse it without modifying the original array (use slice first).
// 50.	Given [10, 20, 30, 40, 50], sort it in ascending order first, then reverse it to get descending order.

// 🔍 filter
// 51.	Given [1, 2, 3, 4, 5, 6], filter out only the odd numbers.
// 52.	Given ["apple", "banana", "kiwi", "mango", "fig"], return only words with more than 4 characters.
// 53.	Given [10, -5, 23, -1, 0, 7], filter out all negative numbers.
// 54.	Given ["ali", "sara", "john", "anna", "mike"], return names that start with the letter "a".
// 55.	Given this array, filter out students who passed (grade >= 50):
// let students = [
//   { name: "Ali", grade: 85 },
//   { name: "Sara", grade: 40 },
//   { name: "John", grade: 55 },
//   { name: "Mia", grade: 30 },
// ];

// 🔗 concat
// 56.	Merge [1, 2, 3] and [4, 5, 6] into one array.
// 57.	Merge three arrays ["a", "b"], ["c", "d"], and ["e", "f"] into one.
// 58.	Given [1, 2, 3], add a single element 4 using concat (not push).
// 59.	Given two arrays of student names, merge them and sort alphabetically:
// let class1 = ["Sara", "John", "Ali"];
// let class2 = ["Mia", "Bob", "Zara"];
// 60.	Merge [1, 2, 3] and [4, 5, 6] using concat and also using the spread operator (...) — compare both results.
