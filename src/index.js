import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "./htmlContentFacade"
import htmlContentFacade from "./htmlContentFacade"
import "./fetchFacade"
import fetchFacade from "./fetchFacade"
import "./URLFacade"
import URLFacade from "./URLFacade"
function clear(){
  var divClear = document.getElementById('change');
  while(divClear.firstChild){
      divClear.removeChild(divClear.firstChild);
  }
}
//Runs when site is loaded to add a header
document.addEventListener('DOMContentLoaded', initializeSite(), false);

 function initializeSite(){
  makeDiv();
  clear();
  function makeDiv(){
    var div;
    document.body.appendChild(div = document.createElement('div'));
    div.setAttribute("id", "change");
  
 
  }
}


//fetch methods here


//Listeners

document.getElementById("apiDocumentationBtn").addEventListener("click", function() {
htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.addApiDocumentation());
});

document.getElementById("aboutUsBtn").addEventListener("click", function() {
 htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.addAboutUs());
});

//Used for button group under Get
document.addEventListener('click',function(e){
  if(e.target && e.target.id== 'getAll'){
    htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.makeGetButtonGroup() + htmlContentFacade.makeTableAllPersons(fetchFacade.getPersons()));        
   }else if(e.target && e.target.id== 'getAllHobby'){
    htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.makeGetButtonGroup() + htmlContentFacade.makeTableAllPersons() + htmlContentFacade.addInputGroup("hobbyNameInput","Enter name and get all with given hobby"));
  }else if(e.target && e.target.id== 'getAllCity'){
    htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.makeGetButtonGroup() + htmlContentFacade.makeTableAllCity() ,  fetchFacade.getAllCities());        
}else if(e.target && e.target.id== 'getCountHobby'){
  htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.makeGetButtonGroup() +  htmlContentFacade.addInputGroup("hobbyNameInputCount","Enter name and get count of given hobby"));

}else if(e.target && e.target.id== 'getById'){
  htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.makeGetButtonGroup() + htmlContentFacade.makeTableAllPersons() + htmlContentFacade.addInputGroup("idInput","Enter id and get given user"));
}else if(e.target && e.target.id== 'getByPhone'){
  htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.makeGetButtonGroup() + htmlContentFacade.makeTableAllPersons() + htmlContentFacade.addInputGroup("phoneInput","Enter phonenumber and get given user"));

}});  


document.addEventListener('click',function(e){
if (e.target && e.target.id == "deleteInput"){
  fetchFacade.deleteUser(document.getElementById("inputValue").value);
  
}
});
  
document.addEventListener('click',function(e){
  if (e.target && e.target.id == "hobbyNameInput"){
    fetchFacade.getPersonsWithHobby(document.getElementById("inputValue").value);
    
  }else if (e.target && e.target.id == "hobbyNameInputCount"){
    htmlContentFacade.readyPageAndaddHtml( htmlContentFacade.addHobbyCountHolder());
    fetchFacade.getPersonsWithHobbyCount(document.getElementById("inputValue").value);
    
  }else if (e.target && e.target.id ==  "idInput"){
    console.log(document.getElementById("inputValue").value);
    fetchFacade.getPersonsWitId(document.getElementById("inputValue").value);  
  }else if (e.target && e.target.id ==  "phoneInput"){
  console.log(document.getElementById("inputValue").value);
  fetchFacade.getPersonsByPhone(document.getElementById("inputValue").value);  
}
  });


(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



//html methods here

document.getElementById("dropdownMenu").addEventListener("click", function(evt) {
  clear();
  switch (evt.target.id) {
    case "getBtn": htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.makeGetButtonGroup()); break
    case "postBtn":  htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.addOrEditPersonForm()); break
    case "putBtn":  htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.addTop() +htmlContentFacade.addOrEditPersonForm()); break
    case "deleteBtn": htmlContentFacade.readyPageAndaddHtml(htmlContentFacade.addInputGroup("deleteInput","Enter Id and Delete User")); break
    default: hideAllShowOne("ex2_html"); break
  }
 } );
 
