// add console.log(1) to timer-delay queue
setTimeout(function () {
  console.log(1);
}, 0);


// add console.log(2) to micro-take queue
Promise.resolve().then(function(){
    console.log(2);
})


console.log(3);



/*
out put
3
2
1
*/