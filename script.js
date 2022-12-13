
//------fetch data from the API 


fetch ('https://currency-exchange.p.rapidapi.com/listquotes',{
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5caef6a6aemsh48421534ffc18ffp178264jsnbd1a4505a6a9',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }

   })
   .then ((res)=>res.json())
   .then ((data)=>{



console.log(data)

   })