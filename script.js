document.addEventListener('DOMContentLoaded', function() {

var doSomething = function(event){
	alert(this); //will only appear the element ([object HTMLLIElement])
	alert(this.textContent);
	console.log(this); //this is the same as alert(this.textContent);
};

var lis = document.querySelectorAll('li');

for (var i=0; i<lis.length; i++){
	var singleLi = lis[i];
	singleLi.addEventListener('click', doSomething);
}

});