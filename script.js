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
	let select = document.querySelector('#select')
	let secondSelect= document.querySelector('.select')
	choiceList.innerHTML = `<option value="${data[key]}">${data[key]}</option>`
	optionList.innerHTML = `<option value="${data[key]}">${data[key]}</option>`
    select.appendChild(optionList)
	secondSelect.appendChild(choiceList)
	  }
	
	











		console.log(data)
	})
	

	
	
	
	