
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")


function increment(){
	count+=1
	countEl.textContent=count
}


function decrement(){
	count-=1
	countEl.textContent=count
}

function save(){
	let countstr = count + " - "
	saveEl.textContent+=countstr
	count=0
	countEl.textContent=0
}
