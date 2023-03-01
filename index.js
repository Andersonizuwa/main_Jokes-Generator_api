const joke = ()=>{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c2ef3d4ebemsh6ac5ccfdd0d074bp1bc0a7jsn3d510ecc97fc',
            'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes', options)
        .then(response => response.json())
        .then((response) => {
            
        const joke = response[0].joke
        
      const output =   document.getElementById("joke").innerHTML = joke;
      console.log(output)
    })
        .catch(err => console.error(err));
}

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    joke();
})