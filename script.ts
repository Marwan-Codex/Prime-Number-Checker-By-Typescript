// Making it with changeable limit
const nums_arr: number[] = [1, 2, 3, 4, 5];
let limit: number = 1;
for(let i: number = 1; i <= nums_arr[Math.floor(Math.random() * nums_arr.length)]; i++){
    limit *= 10;
}

const num: number = Math.floor(Math.random() * (limit + 1));
let is_prime: boolean = true;
if(num > 1){
    for(let i: number = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i == 0){
            is_prime = false;
            break;
        }
    }
}
else if(num <= 1){
    is_prime = false;
}

console.log(num);
console.log(is_prime ? "This Number is A Prime Number" : "This Number isn't A Prime Number");
// I try to use less variables, OK!