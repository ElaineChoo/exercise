//Use foreach
var links = [];

for (var i=0; i<5; i++) {

  links.push( document.createElement("a") );
  console.log(links.push(document.createElement("a")));

}

links.forEach(function(link, i){

  link.innerHTML = "Link " + i;
  console.log(link.innerHTML);

  link.addEventListener = function () {
    alert(i);
  };

  document.body.appendChild(link);
  console.log(document.body.appendChild(link));
});


//Local function scope
var setLink = function(i){

  var link = document.createElement("a");
  console.log(link);

  link.innerHTML = "Link " + i;
  console.log(link.innerHTML);

  link.addEventListener('click', function () {
    alert(i);
  });

  document.body.appendChild(link);
  console.log(document.body.appendChild(link));
};

for (var i=0; i<5; i++) {
  setLink(i);
  console.log(setLink(i));
}

// Closure Scope 2:
// Immediately Invoking Function Expression

for (var i=0; i<5; i++) {

  (function(i){

    var link = document.createElement("a");
    console.log(link);

    link.innerHTML = "Link " + i;
    console.log(link.innerHTML);

    link.addEventListener('click', function () {
      alert(i);
    });

    document.body.appendChild(link);
    console.log(document.body.appendChild(link));
  })(i);
  console.log((i));
}