//----grab all elements we need to manipulate----
let select = document.querySelector('#select')
let secondSelect= document.querySelector('.select')
let amount = document.querySelector('#amount')
let amount2 = document.querySelector('.amount')
let container = document.querySelector('.containers')
//------fetch data from the payload-----
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5caef6a6aemsh48421534ffc18ffp178264jsnbd1a4505a6a9',
		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
	}
};

fetch('https://currency-exchange.p.rapidapi.com/listquotes', options)
	.then(response => response.json())
	.then(data => {
    //---create option lists using server data----
    
    for(const key in data){
	console.log(`${key}: ${data[key]}`)
	let optionList = document.createElement('option')
	let choiceList = document.createElement('option')
	
	choiceList.innerHTML = `<option value="${data[key]}">${data[key]}</option>`
	optionList.innerHTML = `<option value="${data[key]}">${data[key]}</option>`
    select.appendChild(optionList)
	secondSelect.appendChild(choiceList)

    
	  }
			//console.log(data)
})

//----fetch exchange rate data------------
fetch('https://currency-exchange.p.rapidapi.com/exchange?from=SGD&to=MYR&q=1.0', options)
	   .then(response => response.json())
	   .then(response =>{
		amount.addEventListener('change',(e)=>{
			e.preventDefault()
			console.log('clicked')
			
			let amountValue = amount.value
		//---incase the amount value is empty-----
		   if(
			   amountValue =='' || amountValue=='0'
		   ){
			   amountValue='1'
			   amount.value ='1'
		   }
		//------add exchange rate to event listener------
		let exchangeRate = response
		let totalExchange = (amountValue * exchangeRate)
		amount2.replaceWith(totalExchange)
		
		})



		amount2.addEventListener('change',(e)=>{
       //-----incase the value is empty
			let amount2Value = amount2.value
			if(
				amount2Value =='' || amount2Value=='0'
			){
				amount2Value='1'
				amount2.value ='1'
			}
			let secondAmount = amount2.value
			let mutiplier = response
			totalEx = (secondAmount*mutiplier)
			amount.replaceWith(totalEx) 
		})
		
		//-----creating the trigger button 
		 
	    let triggerButton = document.createElement('button')
	    container.appendChild(triggerButton)
		let text = document.createTextNode('CHANGE CURRENCY')
		triggerButton.appendChild(text)
		triggerButton.style.margin = '20px'

		   console.log(response)
	   });

	







	
	
	