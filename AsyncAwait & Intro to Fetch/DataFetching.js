function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sucess = Math.random();
        console.log(sucess);
        if (sucess > 0.5) {
            console.log(("Data fetched successfully"))
          resolve();
        } else {
        console.log( "Failed to fetch data")
          reject();
        }
      }, 2000);
    });
  }
  
   async function fetchDataHandler(){
    await fetchData()
   } 

   fetchDataHandler();