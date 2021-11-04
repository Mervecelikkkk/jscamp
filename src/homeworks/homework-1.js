//Homework question 1:
function findPrime(...numbers) {

    for (let i = 0; i < numbers.length; i++) {
        let counter = 0;
        for (let j = 1; j <= numbers[i] - 1; j++) {
            if (numbers[i] % j == 0) {
                counter++;
            }
        }
        if (counter == 1) {
            console.log("The number " + numbers[i] + " is prime.")
        }
        else {
            console.log("The number " + numbers[i] + " is'nt prime.")

        }

    }

}
findPrime(2, 5, 8, 21, 9, 11, 13)

//Homework question 2:

function isFriend(num1, num2) {
    let totalNum1 = 0;
    let totalNum2 = 0;

    for (let i = 1; i < num1; i++) {

        if (num1 % i == 0) {
            totalNum1 = totalNum1 + i;

        }

    }
    for (let i = 1; i < num2; i++) {

        if (num2 % i == 0) {
            totalNum2 = totalNum2 + i;

        }

    }
    if (num1 == totalNum2 && num2 == totalNum1) {
        console.log(num1 + " and " + num2 + " are friendly number.");
    }
    else {
        console.log(num1 + " and " + num2 + " are'nt friendly number.");
    }
}
isFriend(17296, 18416);
isFriend(220, 284);
isFriend(543, 72);

//Homework question 3:

function isPerfectNum() {
   
    for(let i=1;i<=1000;i++){
        let total=0;
        for(let j=1;j<i;j++){
            if(i%j==0)
           {
               total=total+j;
           }
        }
        if(total==i){
            console.log(i+" is perfet number.")
        }
    }
   
}
isPerfectNum()

//Homework question 4:

function isPrime(){
    for(let i=0;i<=1000;i++){
        let counter=0;
        for(let j=1;j<=[i]-1;j++){
            if(i%j==0)
           {
               counter++;
           }
        }
        if(counter==1){
            console.log(i+" is prime number.")
        }
    }
   
}
isPrime()