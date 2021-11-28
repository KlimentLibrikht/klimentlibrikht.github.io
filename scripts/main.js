var myDiv = document.querySelector('div');
myDiv.hidden = true;
var myTitle = document.querySelector('title');
myTitle.textContent = 'Нажми на кнопку!';
var myButton = document.querySelector('button');

myButton.onclick = function() {
    myDiv.hidden = false;
    myTitle.textContent = 'Поздравляю с днём мамы!';
    myButton.remove();
}