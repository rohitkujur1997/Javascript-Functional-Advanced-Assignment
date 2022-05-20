function isEven(num){return (num%2==0);}

function find(arr,isEven){

    if(isEven(arr[0])){
        console.log(arr[0]);
    }
    else{
        find(arr.slice(-(arr.length-1)),isEven);
    }
}

const arr=[1,3,5,4,2];
console.log(isEven(3));//-->false
console.log(isEven(4));//-->true
find(arr,isEven);//-->4