function timer(duration,onComplete){
    setTimeout(()=>{
        onComplete(`Timer of ${duration} ms finished`)
    },duration)
}

timer(3000,function(onComplete){
    console.log(onComplete)
})



timer(3000,((onComplete) =>{
    console.log(onComplete)
}))