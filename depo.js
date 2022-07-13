window.onload = function(){
  console.log('here')
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
   

if(!doc.hasAttribute('width')){
    doc.setAttribute('width','40px')
}
if(!doc.hasAttribute('height')){
    doc.setAttribute('height','40px')
}


i.replaceWith(doc)


 
 };
 reader.readAsDataURL(myBlob);
    
});

    });
  





}


