const fetchFacade = {
    getPersons,
    getHobbyByName
}


function fetchPersons(URL){
	return fetch(URL)
    .then(res => res.json())
    }


function getHobbyByName(){
	return "";
}
function getPersons(){
fetchPersons()
.then(users => {
  const userRows = users.map(person => `
  <tr>
  <td>${person.id}</td>
  <td>${person.name}</td>
  <td>${person.email}</td>
  <td>${person.phone}</td>
  <td>${person.address.street}</td>
  <td>${person.address.city}</td>
  <td>${person.address.zipCode}</td>
  </tr>
  `)
  const userRowsAsString = userRows.join("");
return userRowsAsString;
})

}
export default fetchFacade;