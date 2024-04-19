
const advice_text = document.querySelector(".advice_text");
const dice = document.querySelector(".dice");
const advice_number = document.querySelector(".slip_id")

dice.addEventListener("click", async function(){
    const response = await fetch ("https://api.adviceslip.com/advice");
    const advice = await response.json();
    
    try{    
        if(!response.ok){
            throw new Error(`network error: ${response.status}`);
        }   
    }catch(error){
        console.log(Error)
    } 
    if(response.ok){
        console.log(advice)
        advice_text.innerHTML="" 
        advice_number.innerHTML=""       
        advice_text.innerHTML=`"${advice.slip.advice}"`
        advice_number.innerHTML=advice.slip.id  
        
    }
})
