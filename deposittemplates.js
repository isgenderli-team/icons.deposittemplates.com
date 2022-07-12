window.onload = function(){
    alert('awdadw')
	const a = document.querySelectorAll('i[icon-id]');
    a.forEach(i => {
fetch(`https://iclonit.com/request.php?id=${i.getAttribute('icon-id')}`).then(function(response) {
 return response.blob();
}).then(function(myBlob) {
    
    
     var reader = new FileReader();
 reader.onload = function (e) {
    var data = e.target.result;
    data = data.replace("data:image/svg+xml;base64,", "");
  var parser = new DOMParser();
  var doc = parser.parseFromString(window.atob(data), "image/svg+xml");
  doc = doc.getElementsByTagName('svg')[0]
    var desc = document.createElement('desc');
    desc.textContent = 'Created with Deposittemplates.com';
    doc.insertBefore(desc, doc.firstChild);
    var styleSheetList = document.styleSheets;
var prevStyle = showStyle(i)
if(!doc.hasAttribute('width')){
    doc.setAttribute('width','40px')
}
if(!doc.hasAttribute('height')){
    doc.setAttribute('height','40px')
}


doc.setAttribute('style', prevStyle)
i.replaceWith(doc)


 
 };
 reader.readAsDataURL(myBlob);
    
});

    });
  
   
   
var proto = Element.prototype;
var slice = Function.call.bind(Array.prototype.slice);
var matches = Function.call.bind(proto.matchesSelector || 
                proto.mozMatchesSelector || proto.webkitMatchesSelector ||
                proto.msMatchesSelector || proto.oMatchesSelector);

// Returns true if a DOM Element matches a cssRule
var elementMatchCSSRule = function(element, cssRule) {
  return matches(element, cssRule.selectorText);
};

// Returns true if a property is defined in a cssRule
var propertyInCSSRule = function(prop, cssRule) {
  return prop in cssRule.style && cssRule.style[prop] !== "";
};

// Here we get the cssRules across all the stylesheets in one array
var cssRules = slice(document.styleSheets).reduce(function(rules, styleSheet) {
  return rules.concat(slice(styleSheet.cssRules));
}, []);




var getAppliedCss = function(elm) {
	// get only the css rules that matches that element
	var elementRules = cssRules.filter(elementMatchCSSRule.bind(null, elm));
	var rules =[];
	if(elementRules.length) {
		for(i = 0; i < elementRules.length; i++) {
			var e = elementRules[i];
			rules.push({
				order:i,
				text:e.cssText
			})
		}		
	}
	
	if(elm.getAttribute('style')) {
		rules.push({
				order:elementRules.length,
				text:elm.getAttribute('style')
			})
	}
	return rules;
}


function showStyle(element){
var styleSheetList = document.styleSheets;
// get a reference to an element, then...
// var div1 = document.querySelector(".tt-icon");
var div1 = element;
var rules = getAppliedCss(div1);

var styleText = '';
for(i = 0; i < rules.length; i++) {
			var r = rules[i];

let pattern2 = /\{([^)]+)\}/;
let result2 = pattern2.test(r.text);
if(result2){
    var regExp = /\{([^)]+)\}/;
    var t = regExp.exec(r.text);
    styleText+=t[1].trim();
}else{
    styleText+=r.text.trim()
}
		}		
		
		
		return styleText;

}

}


