var but1 = document.getElementsByTagName('button')[0],
	but2 = document.getElementsByTagName('button')[1],
	but3 = document.getElementsByTagName('button')[2],

	but4 = document.getElementsByTagName('button')[3],
	but5 = document.getElementsByTagName('button')[4],
	but6 = document.getElementsByTagName('button')[5],

	but7 = document.getElementsByTagName('button')[6],
	but8 = document.getElementsByTagName('button')[7],
	but9 = document.getElementsByTagName('button')[8],

	but0 = document.getElementsByTagName('button')[9],
	input = document.getElementsByTagName('input')[0],
	butRes = document.getElementById('res'),
	butPlus = document.getElementById('plus'),
	butMinus = document.getElementById('minus'),
	butMultiplication = document.getElementById('multiplication'),
	butDivision = document.getElementById('division'),
	butClear = document.getElementById('clear'),
	butDelete = document.getElementById('delete'),
butEnter;
					//Первая линия кнопок
but1.addEventListener('click', () => {
	input.value += 1;
});
but2.addEventListener('click', () => {
	input.value += 2;
});
but3.addEventListener('click', () => {
	input.value += 3;
});

					//Вторая линия кнопок
but4.addEventListener('click', () => {
	input.value += 4;
});
but5.addEventListener('click', () => {
	input.value += 5;
});
but6.addEventListener('click', () => {
	input.value += 6;
});

					//Третья линия кнопок
but7.addEventListener('click', () => {
	input.value += 7;
});
but8.addEventListener('click', () => {
	input.value += 8;
});
but9.addEventListener('click', () => {
	input.value += 9;
});

					//Кнопка 0
but0.addEventListener('click', () => {
	input.value += 0;
});

					//Кнопки + - / *
butPlus.addEventListener('click', () => {
	if(input[input.length - 1] =="-" ){
		input.value = input.value.slice(0, -1);
	}else if(input[input.length - 1] == "/"){
		input.value = input.value.slice(0, -1);
	}else if(input[input.length - 1] == "*"){
		input.value = input.value.slice(0, -1);
	}else{
		input.value += "+";
	}
});
butMinus.addEventListener('click', () => {
	input.value += "-";
});
					//Умножение и деление
butMultiplication.addEventListener('click', () => {
	input.value += "*";
});
butDivision.addEventListener('click', () => {
	input.value += "/";
});
					//Кнопка Результата
butRes.addEventListener('click', () =>{
	alert(eval(input.value));
});
					//Очистка
butClear.addEventListener('click', () =>{
	input.value = "";
});
butDelete.addEventListener('click', () =>{
	input.value = input.value.slice(0,-1);
});

/*butEnter.addEventListener('', (event) =>{
	alert(eval(input.value));
});*/