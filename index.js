function writeCards(arr,eventName){
    const cardArray = []
    for (let i = 0; i < arr.length; i++) {
        cardArray.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
    }
    return cardArray
}
function countDown(number){
    let i =number;
    while (i>-1) {
        console.log(i)
        i--;
    }
}
countDown(10)

// Code your solutions in this file
