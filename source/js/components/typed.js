import Typed from "typed.js";

var typedElements = document.querySelectorAll('#typed');

typedElements && typedElements.forEach(function(typedElement){
    var typedText = typedElement.innerHTML;
    typedElement.style.minHeight = typedElement.offsetHeight + 'px';
    typedElement.textContent = '';
    
    var typed = new Typed(typedElement, {
        strings: [typedText],
        typeSpeed: 25,
        startDelay: 250,
        showCursor: false,
    });
});


