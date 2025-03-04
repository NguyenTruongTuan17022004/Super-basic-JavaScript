//1. Difference between == and ===
//== (loose equality): So sánh hai giá trị nhưng không xét kiểu dữ liệu, có thể tự động ép kiểu nếu cần.
console.log(5 == "5"); // true (ép kiểu string "5" thành số 5)
console.log(0 == false); // true (ép kiểu false thành số 0)
//=== (strict equality): So sánh cả giá trị và kiểu dữ liệu.
console.log(5 === "5"); // false (vì kiểu số khác kiểu chuỗi)
console.log(0 === false); // false (vì số khác kiểu boolean)

//2. Use variables and operators to:
//1. Calculate BMI
let weight = 70; // kg
let height = 1.75; // meters
let bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));
//2. Calculate Simple Interest
let principal = 1000; // Số tiền gốc
let rate = 5; // Lãi suất (%)
let time = 2; // Số năm
let interest = (principal * rate * time) / 100;
console.log("Simple Interest:", interest);
//3. Convert Currency (USD to Local)
let usd = 100;
let exchangeRate = 24000; // Giả sử 1 USD = 24,000 VND
let vnd = usd * exchangeRate;
console.log(usd + " USD = " + vnd + " VND");
//4. Calculate Time (Hours:Minutes:Seconds)
let totalSeconds = 3661; // Ví dụ: 3661 giây
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
console.log(`Time: ${hours}h ${minutes}m ${seconds}s`);
