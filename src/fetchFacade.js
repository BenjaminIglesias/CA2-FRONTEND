const fetchFacade = {
    getPersons,
    fetchPersons,
    deleteUser,
    getPersonsWithHobby,
    getAllCities,
    getPersonsWithHobbyCount,
    getPersonsWitId,
    getPersonsByPhone
}
const baseURL = 'http://localhost:8080/jpareststarter/api/persons/';
const dropletUrl = 'https://theonegruppetorulethemall.com/ca2/api/persons/';
const ALLURL = dropletUrl + 'all';
const DeleteURL = dropletUrl + 'delete/';
const HobbyAll = dropletUrl + 'hobby/';
const CityUrl = dropletUrl + 'zip/'
const HobbyCountUrl = dropletUrl + 'hobby/'; 
const ByIdUrl = dropletUrl + 'id/';
const ByPhoneUrl = dropletUrl + 'number/';

function fetchPersons(){
	return fetch(ALLURL)
    .then(res => res.json()).then(users => console.log(users))
    }

    function deleteUser(id){
      const options = makeOptions("DELETE")
        return fetch(DeleteURL+ id,options)
        .then(handleHttpErrors)
    }


function getPersons(){
  fetch(ALLURL)
  .then(res => res.json())
  .then(users => {  
  const userRows = users.map(person => `
  <tr>
  <td>${person.fullName}</td>
  <td>${person.email}</td>
  <td>${person.address.street}</td>
  <td>${person.address.cityinfo.zipCode}</td>
  <td>${person.address.cityinfo.city}</td>
  <td>${person.phoneNumbers.map(phoneNumbers=>phoneNumbers.number).join(", ")}</td>
  <td>${person.phoneNumbers.map(phoneNumbers=>phoneNumbers.description).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.name).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.category).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.type).join(", ")}</td>
  
 
  </tr>
  `)
  const userRowsAsString = userRows.join("");
  console.log(userRowsAsString);
  document.getElementById("allUserRows").innerHTML = userRowsAsString;
})

}

function getPersonsWitId(id){
  fetch(ByIdUrl + id)
  .then(res => res.json())
  .then(person => {  
  const userRows = ( `
  <tr>
  <td>${person.fullName}</td>
  <td>${person.email}</td>
  <td>${person.address.street}</td>
  <td>${person.address.cityinfo.zipCode}</td>
  <td>${person.address.cityinfo.city}</td>
  <td>${person.phoneNumbers.map(phoneNumbers=>phoneNumbers.number).join(", ")}</td>
  <td>${person.phoneNumbers.map(phoneNumbers=>phoneNumbers.description).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.name).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.category).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.type).join(", ")}</td>
 
  </tr>
  `)
  console.log(ByIdUrl + id);

  document.getElementById("allUserRows").innerHTML = userRows;
}).then(handleHttpErrors)

}
function getPersonsByPhone(phone){
  fetch(ByPhoneUrl + phone)
  .then(res => res.json())
  .then(person => {  
  const userRows = ( `
  <tr>
  <td>${person.fullName}</td>
  <td>${person.email}</td>
  <td>${person.address.street}</td>
  <td>${person.address.cityinfo.zipCode}</td>
  <td>${person.address.cityinfo.city}</td>
  <td>${person.phoneNumbers.map(phoneNumbers=>phoneNumbers.number).join(", ")}</td>
  <td>${person.phoneNumbers.map(phoneNumbers=>phoneNumbers.description).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.name).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.category).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.type).join(", ")}</td>
 
  </tr>
  `)
  console.log(ByIdUrl + id);

  document.getElementById("allUserRows").innerHTML = userRows;
}).then(handleHttpErrors)

}

function getPersonsWithHobby(hobby){
  fetch(HobbyAll + hobby)
  .then(res => res.json())
  .then(users => {  
  const userRows = users.map(person => `
  <tr>
  <td>${person.fullName}</td>
  <td>${person.email}</td>
  <td>${person.address.street}</td>
  <td>${person.address.cityinfo.zipCode}</td>
  <td>${person.address.cityinfo.city}</td>
  <td>${person.phoneNumbers.map(phoneNumbers=>phoneNumbers.number).join(", ")}</td>
  <td>${person.phoneNumbers.map(phoneNumbers=>phoneNumbers.description).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.name).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.category).join(", ")}</td>
  <td>${person.hobby.map(hobby=>hobby.type).join(", ")}</td>
 
  </tr>
  `)
  const userRowsAsString = userRows.join("");
  console.log(userRowsAsString);
  document.getElementById("allUserRows").innerHTML = userRowsAsString;
}).then(handleHttpErrors)

}
function getAllCities(){
  fetch(CityUrl)
  .then(res => res.json())
  .then(users => {  
  const userRows = users.map(person => `
  <tr>
  <td>${person.zipCode}</td>
  <td>${person.city}</td>
  </tr>
  `)
  const userRowsAsString = userRows.join("");
  console.log(userRowsAsString);
  document.getElementById("allUserRows").innerHTML = userRowsAsString;
}).then(handleHttpErrors)

}


function getPersonsWithHobbyCount(hobby){
  fetch(HobbyCountUrl + hobby + '/count')
  .then(res => res.json())
  .then(result => {  
document.getElementById('countChangeMe').innerHTML = result;
  
}).then(handleHttpErrors)

}

function makeOptions(method, body) {
  var opts =  {
    method: method,
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    }
  }
  if(body){
    opts.body = JSON.stringify(body);
  }
  return opts;
 }

 function handleHttpErrors(res){
  if(!res.ok){
    return Promise.reject({status: res.status, fullError: res.json() })
  }
  return res.json();
 }
 
export default fetchFacade;