// selectors

document.querySelector('form').addEventListener('submit', handleSubmit);
document.querySelector('ul').addEventListener('click', handleFinishOrRemove);
document.getElementById('clear').addEventListener('click', handleClearList);


// event handlers 

function handleSubmit(element) {
	element.preventDefault();
	let input = document.querySelector('input');
	if (input.value != '')
		addTask(input.value);
}


function handleClearList(e) {
	document.querySelector('ul').innerHTML = '';
}

function handleFinishOrRemove(argument) {
	// body...
}



// helpers

function addTask(task) {
	let form = document.createElement('form');

	form.innerHTML = `
        <input type="text" value="${task}">
    `;

    document.querySelector('input').value = ''
    document.getElementById('list').appendChild(form);
}

function finishTask(argument) {
	// body...
}

function removeTask(argument) {
	// body...
}