function timer(duration,onComplete){
    setTimeout(()=>{
       onComplete(`Timer of ${duration} ms finished`)
    },duration)
}

timer(3000,function(data){
  console.log(data);  
})