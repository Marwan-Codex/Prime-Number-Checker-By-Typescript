// Making it with changeable limit
const nums_arr: number[] = [1, 2, 3, 4, 5];
const rand_ind: number = Math.floor(Math.random() * nums_arr.length);
let limit: number = 1;

if(nums_arr[rand_ind]){
    for(let i: number = 1; i <= nums_arr[rand_ind]; i++){
        limit *= 10;
    }
}
else {
    limit = 10;
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

console.log(num, is_prime ? "is A Prime Number" : "isn't A Prime Number");
// I try to use less variables, OK!