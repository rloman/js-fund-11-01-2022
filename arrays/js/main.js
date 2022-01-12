let numbers = [];

numbers[0] = 15;
numbers[1] = 20;
numbers[2] = 25;
numbers[3] = 30;
numbers[4] = 35;

document.write(numbers[2]);
document.write("<br>")

// Basic for loop
for(let i = 0;i<numbers.length;i++) {
    document.write(numbers[i]+", ")
}
document.write("<br>");
document.write("Met de for each: ");

// for each
for (let n of numbers) {
    document.write(n+", ")
}
document.write("<br>");

let primes = [2,3,5,7,11,13,17,19];

for(let prime of primes) {
    document.write("Prime: "+prime+",<br>")
}
