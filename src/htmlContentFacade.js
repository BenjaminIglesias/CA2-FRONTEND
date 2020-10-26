const htmlContentFacade = {
     readyPageAndaddHtml,
     addHTMLAfterEnd,
     makeTableAllPersons,
     addApiDocumentation,
     addAboutUs,
     makeGetButtonGroup,
     addInputGroup,
     addOrEditPersonForm,
     addTop,
     makeTableAllCity,
     addHobbyCountHolder
}
//Gør siden klar og tilføjer den html den før som argument
function readyPageAndaddHtml(html){
clear();
add(html);

function clear(){
    var divClear = document.getElementById('change');
    while(divClear.firstChild){
        divClear.removeChild(divClear.firstChild);
    }
  }
  
function add(html){
    document.getElementById('change').insertAdjacentHTML('beforeend', html); 
}

}

function addHTMLAfterEnd(html){
    addAfterEnd(html);
    
      
    function addAfterEnd(html){
        document.getElementById('change').insertAdjacentHTML('afterend', html); 
    }
    
    }
    


/*Tilføj den html som du vil have frem når en metodeknap bliver valgt herunder*/ 

function addTop(){
    return     '         <div class="col-1 mb-1">  '  +
    '           <label for="validationId">Id</label>  '  +    
     '           <input type="text" class="form-control" id="validationId" placeholder="Insert Id" value="">  ' +
    '</div>';  
     
}

function addOrEditPersonForm(){
    return '    <form class="needs-validation" novalidate>  '  + 
    '       <div class="form-row">  '  + 
    '         <div class="col-md-4 mb-3">  '  + 
    '           <label for="validationFirstName">First name</label>  '  + 
    '           <input type="text" class="form-control" id="validationFirstName" placeholder="First name" value="Mark" required>  '  + 
    '           <div class="valid-feedback">  '  + 
    '             Looks good!  '  + 
    '           </div>  '  + 
    '         </div>  '  + 
    '         <div class="col-md-4 mb-3">  '  + 
    '           <label for="validationLastName">Last name</label>  '  + 
    '           <input type="text" class="form-control" id="validationLastName" placeholder="Last name" value="Otto" required>  '  + 
    '           <div class="valid-feedback">  '  + 
    '             Looks good!  '  + 
    '           </div>  '  + 
    '         </div>  '  + 
    '         <div class="col-md-4 mb-3">  '  + 
    '           <label for="validationEmail">Email</label>  '  + 
    '           <div class="input-group">  '  + 
    '             <div class="input-group-prepend">  '  + 
    '               <span class="input-group-text" id="inputGroupPrepend">@</span>  '  + 
    '             </div>  '  + 
    '             <input type="text" class="form-control" id="validationEmail" placeholder="Email" aria-describedby="inputGroupPrepend" required>  '  + 
    '             <div class="invalid-feedback">  '  + 
    '               Please enter an email.  '  + 
    '             </div>  '  + 
    '           </div>  '  + 
    '         </div>  '  + 
    '       </div>  '  + 
    '       <div class="form-row">  '  + 
    '         <div class="col-md-6 mb-3">  '  + 
    '           <label for="validationStreet">Street</label>  '  + 
    '           <input type="text" class="form-control" id="validationStreet" placeholder="Street" required>  '  + 
    '           <div class="invalid-feedback">  '  + 
    '             Please provide a valid Street.  '  + 
    '           </div>  '  + 
    '         </div>  '  + 
    '         <div class="col-md-3 mb-3">  '  + 
    '           <label for="validationCustom04">Zip Code</label>  '  + 
    '           <input type="text" class="form-control" id="validationZip" placeholder="" required>  '  + 
    '           <div class="invalid-feedback">  '  + 
    '             Please provide a valid Zip Code.  '  + 
    '           </div>  '  + 
    '         </div>  '  + 
    '         <div class="col-md-3 mb-3">  '  + 
    '           <label for="validationZip">City</label>  '  + 
    '           <input type="text" class="form-control" id="validationCity" placeholder="" required disabled>  '  + 
    '           <div class="invalid-feedback">  '  + 
    '           '  + 
    '           </div>  '  + 
    '         </div>  '  + 
    '       </div>  '  + 
    '        '  + 
    '       <button class="btn btn-primary" type="submit">Submit form</button>  '  + 
    '     </form>  '  + 
    '      ' ; 


}

function addInputGroup(id,textBefore){
   return '   <form class="form-inline">  '  + 
    '       <div class="form-group mb-2">  '  + 
    '       <b>'+textBefore+':</b>  '  + 
    '       </div>  '  + 
    '       <div class="form-group mx-sm-3 mb-2">  '  + 
    '         <input type="text" class="form-control" id="inputValue" placeholder="Insert Value Here">  '  + 
    '       </div>  '  + 
    '       <button type="submit" class="btn btn-primary mb-2" id="'+id+'">Submit</button>  '  + 
    '    </form>  ' ; 
}

function addHobbyCountHolder(){
    return '<div id="countChangeMe">' +
    '</div>' +
    'has that hobby'
    
}

function addAboutUs(){
    return  '     '  + 
    '     '  + 
    '   <h2 style="text-align:center">Gruppe 18</h2>  '  + 
    '   <div class="row">  '  + 
    '     <div class="column">  '  + 
    '       <div class="card">  '  + 
    '         <img src="https://i.ibb.co/FgN2rdg/34334476-1270476603088234-2826996565703393280-o-1.jpg" alt="Benjamin" style="width:100%">  '  + 
    '         <div class="container">  '  + 
    '           <h2>Benjamin <br> Iglesias</h2>  '  + 
    '           <p class="title">Frontend</p>  '  + 
    '           <p>Some say that he has no understanding of clouds, and that his ear wax tastes like Turkish Delight.</p>  '  + 
    '         </div>  '  + 
    '       </div>  '  + 
    '     </div>  '  + 
    '     '  + 
    '     <div class="column">  '  + 
    '       <div class="card">  '  + 
    '         <img src="https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/11295835_10153055649353071_4467979993333654935_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=ON1PjnSAKckAX9kB3tk&_nc_ht=scontent-cph2-1.xx&oh=93563b476def4bf106574fc766e579c2&oe=5FB8D6A4" alt="Mads" style="width:100%">  '  + 
    '         <div class="container">  '  + 
    '           <h2>Mads <br> Bech</h2>  '  + 
    '           <p class="title">Endpoint Prodigy</p>  '  + 
    '           <p>Some say he never blinks, and that he roams around the woods at night foraging for wolves</p>  '  + 
    '     <br>  '  + 
    '         </div>  '  + 
    '       </div>  '  + 
    '     </div>  '  + 
    '       '  + 
    '     <div class="column">  '  + 
    '       <div class="card">  '  + 
    '         <img src="https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/39210712_10212301260315933_9116393317863522304_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=I4705qQUoy0AX9QwF5d&_nc_ht=scontent-cph2-1.xx&oh=d6eb61e4550a7a226691642cd2a840cb&oe=5FB93397" alt="Patrick" style="width:100%">  '  + 
    '         <div class="container">  '  + 
    '           <h2>Patrick <br> Jahn</h2>  '  + 
    '           <p class="title">Wizard of the Facades</p>  '  + 
    '           <p>Some say that his tears are adhesive, and that if he caught fire he’d burn for 1000 days. </p>  '  + 
    '             '  + 
    '         </div>  '  + 
    '       </div>  '  + 
    '     </div>  '  + 
    '   </div>  '  + 
    '     <b> Frontend Github: <a href="https://github.com/BenjaminIglesias/CA2-FRONTEND"> https://github.com/BenjaminIglesias/CA2-FRONTEND</b></a>  '  + 
    '     <br>  '  + 
    '     <b> Backend Github: <a href="https://github.com/1337k1ng/CA2-">https://github.com/1337k1ng/CA2-</b>  '  + 
    '    ' ; 
}


function makeGetButtonGroup(){
    return   '   <div class="btn-group" role="group" aria-label="Basic example">  '  + 
    '       <button type="button" class="btn btn-secondary" id="getAll">Get All</button>  '  + 
    '       <button type="button" class="btn btn-secondary" id="getAllHobby">Get All with Hobby</button>  '  + 
    '       <button type="button" class="btn btn-secondary" id="getAllCity">Get all Cities</button>  '  + 
    '       <button type="button" class="btn btn-secondary" id="getCountHobby"">Get Hobby Count</button>  '  + 
    '       <button type="button" class="btn btn-secondary" id="getById">Get Person by ID</button>  '  + 
    '       <button type="button" class="btn btn-secondary" id="getByPhone">Get Person by Phonenumber</button>  '  + 
    '       '  + 
    '     </div>  '  + 
    '      ' ; 
}


function makeTableAllPersons(){
    return   '   <div style="height: 250px;overflow: scroll;">  '  + 
    '   <table class="table">  '  + 
    '     <thead class="thead-dark">  '  + 
    '       <tr>  '  + 
    '         <th scope="col">Name</th>  '  + 
    '         <th scope="col">Email</th>  '  + 
    '         <th scope="col">Street</th>  '  +
    '         <th scope="col">Zip Code</th>  '  +        
    '         <th scope="col">City</th>  '  +
    '         <th scope="col">Phone</th>  '  + 
    '         <th scope="col">Phone Description</th>  '  + 
    '         <th scope="col">Hobby Name</th>  '  +
    '         <th scope="col">Wiki-Link</th>  '  +
    '         <th scope="col">Type</th>  '  +
      '       </tr>  '  + 
    '<tbody id="allUserRows">'+
    '</tbody>'+

    '     </tbody>  '  + 
    '   </table>  '  + 
    '  </div>  ' ; 
}

function makeTableAllCity(){
    return   '   <div style="height: 250px;overflow: scroll;">  '  + 
    '   <table class="table">  '  + 
    '     <thead class="thead-dark">  '  + 
    '       <tr>  '  + 
    '         <th scope="col">Zip Code</th>  '  + 
    '         <th scope="col">City</th>  '  + 
    '<tbody id="allUserRows">'+
    '</tbody>'+

    '     </tbody>  '  + 
    '   </table>  '  + 
    '  </div>  ' ; 
}

function makeTableAllwithHobby(){
    return   '   <div style="height: 250px;overflow: scroll;">  '  + 
    '   <table class="table">  '  + 
    '     <thead class="thead-dark">  '  + 
    '       <tr>  '  + 
    '         <th scope="col">Name</th>  '  + 
    '         <th scope="col">Email</th>  '  + 
    '         <th scope="col">Street</th>  '  +
    '         <th scope="col">Zip Code</th>  '  +        
    '         <th scope="col">City</th>  '  +
    '         <th scope="col">Phone</th>  '  + 
    '         <th scope="col">Phone Description</th>  '  + 
    '         <th scope="col">Hobby Name</th>  '  +
    '         <th scope="col">Wiki-Link</th>  '  +
    '         <th scope="col">Type</th>  '  +
      '       </tr>  '  + 
    '<tbody id="allUserRows">'+
    '</tbody>'+

    '     </tbody>  '  + 
    '   </table>  '  + 
    '  </div>  ' ; 
}

function addApiDocumentation(){
    return  '  <div class="c32"><h1 class="c29" id="h.qgvkn31x7j8w"><span class="c25 c41">Rest Api Documentation</span></h1><p class="c3 c5"><span class="c17 c25"></span></p><a id="t.cc5a03e462079b92763abb97f230892e1fe4faee"></a><a id="t.0"></a><table class="c8"><tbody><tr class="c36"><td class="c15" colspan="1" rowspan="1"><p class="c18"><span class="c28">Method</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c18"><span class="c28">URL</span></p></td><td class="c16" colspan="1" rowspan="1"><p class="c18"><span class="c28">Request Body (JSON)</span></p></td><td class="c23" colspan="1" rowspan="1"><p class="c18"><span class="c28">Response (JSON)</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c18"><span class="c28">Error (e)</span></p></td></tr><tr class="c4"><td class="c15" colspan="1" rowspan="1"><p class="c3"><span class="c1">GET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c3"><span class="c0">/api/persons/hobby/{hobby}</span></p><p class="c3"><span class="c9">hobby: All persons having that hobby</span></p></td><td class="c16" colspan="1" rowspan="1"><p class="c3 c5"><span class="c0"></span></p></td><td class="c23" colspan="1" rowspan="1"><p class="c3"><span class="c14 c34 c38">[{person (1)}, {person (1)}, ...]</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c3"><span class="c2 c17">(e3)</span></p></td></tr><tr class="c4"><td class="c15" colspan="1" rowspan="1"><p class="c3"><span class="c1">GET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c3"><span class="c0">/api/persons/{id} &nbsp; </span></p><p class="c3"><span class="c9">Id: All &nbsp;info of specified Person: Person, Hobby, Address, CityInfo, Phone. &nbsp;</span><span class="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p></td><td class="c16" colspan="1" rowspan="1"><p class="c3 c5"><span class="c17 c2"></span></p></td><td class="c23" colspan="1" rowspan="1"><p class="c3"><span class="c22 c14">person (1)</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c3"><span class="c2">(e1)</span></p></td></tr><tr class="c19"><td class="c15" colspan="1" rowspan="1"><p class="c18"><span class="c1">GET</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c3"><span class="c0">/api/persons/phone/{phone number}</span></p><p class="c3"><span class="c9">Phone number: A persons phone number</span></p></td><td class="c16" colspan="1" rowspan="1"><p class="c3 c5"><span class="c13"></span></p></td><td class="c23" colspan="1" rowspan="1"><p class="c3"><span class="c14 c34">person (1</span><span class="c2">)</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c3"><span class="c17 c2">(e4)</span></p></td></tr><tr class="c4"><td class="c15" colspan="1" rowspan="1"><p class="c18"><span class="c14">GET</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c3"><span class="c2 c39">/api/persons/hobby/{hobby}/count</span></p></td><td class="c16" colspan="1" rowspan="1"><p class="c18 c5"><span class="c13"></span></p></td><td class="c23" colspan="1" rowspan="1"><p class="c3"><span class="c2">number</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c3"><span class="c2">(e3)</span></p></td></tr><tr class="c4"><td class="c15" colspan="1" rowspan="1"><p class="c18"><span class="c1">GET</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c3"><span class="c0">/api/persons/zip</span></p></td><td class="c16" colspan="1" rowspan="1"><p class="c18 c5"><span class="c13"></span></p></td><td class="c23" colspan="1" rowspan="1"><p class="c3"><span class="c22 c14">[city, city, &hellip;](3)</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c3"><span class="c2">(e3)</span></p></td></tr><tr class="c4"><td class="c15" colspan="1" rowspan="1"><p class="c18"><span class="c1">POST</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c3"><span class="c0">/api/persons</span></p></td><td class="c16" colspan="1" rowspan="1"><p class="c3"><span class="c14 c34">person (2)</span></p></td><td class="c23" colspan="1" rowspan="1"><p class="c3 c5"><span class="c17 c2"></span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c3"><span class="c2">(e2)</span></p></td></tr><tr class="c4"><td class="c15" colspan="1" rowspan="1"><p class="c18"><span class="c1">PUT</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c3"><span class="c0">/api/persons/{id}</span></p></td><td class="c16" colspan="1" rowspan="1"><p class="c3"><span class="c14 c34">person (2)</span></p></td><td class="c23" colspan="1" rowspan="1"><p class="c3 c5"><span class="c17 c2"></span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c3"><span class="c2">(e1)</span></p></td></tr><tr class="c4"><td class="c15" colspan="1" rowspan="1"><p class="c18"><span class="c1">DELETE</span></p></td><td class="c6" colspan="1" rowspan="1"><p class="c3"><span class="c0">/api/persons/{id}</span></p><p class="c3"><span class="c9">Id: A person id</span></p></td><td class="c16" colspan="1" rowspan="1"><p class="c18 c5"><span class="c13"></span></p></td><td class="c23" colspan="1" rowspan="1"><p class="c3 c5"><span class="c14 c22"></span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c3"><span class="c2">(e1)</span></p></td></tr></tbody></table><p class="c3"><span class="c13">&nbsp;</span></p><h4 class="c24" id="h.mvpfb47p0c55"><span class="c12">Request Body and Response Formats</span></h4><p class="c3"><span class="c10">person (1) </span></p><p class="c3"><span class="c2 c27">&nbsp;</span><span class="c0">{<br> &nbsp; &nbsp;&quot;id&quot;: Number,<br> &nbsp; &nbsp;&quot;age&quot;: Number,<br> &nbsp; &nbsp;&quot;name&quot;: String,<br> &nbsp; &nbsp;&quot;gender&quot;: String [&ldquo;male&rdquo; | &ldquo;Female&rdquo;],<br> &nbsp; &nbsp;&quot;email&quot;: String (email),</span></p><p class="c3"><span class="c0">&nbsp; &nbsp; &nbsp;&quot;hobby&quot;:{<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;name&quot;: String,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;description&quot;: String<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></p><p class="c3"><span class="c0">&nbsp; &nbsp; &nbsp;&quot;phone&quot;:{[<br> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;number&quot;: Number,<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;description&quot;: String<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]},</span></p><p class="c3"><span class="c0">&nbsp; &nbsp; &nbsp;&quot;address&quot;:{<br> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;street&quot;: String,<br> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;additionalInfo&quot;: String,</span></p><p class="c3"><span class="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;cityInfo&quot;:{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;zipCode&quot;: Number,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;city&quot;: String<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></p><p class="c3 c20 c31"><span class="c0">}</span></p><p class="c3"><span class="c0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p class="c3"><span class="c21">person (2)</span><span class="c17 c25">&nbsp; Person format in PUT doesn&#39;t need every key/value</span></p><p class="c3"><span class="c2 c27">&nbsp;</span><span class="c0">{<br> &nbsp; &nbsp;&quot;age&quot;: Number,<br> &nbsp; &nbsp;&quot;name&quot;: String,<br> &nbsp; &nbsp;&quot;gender&quot;: String [&ldquo;male&rdquo; | &ldquo;Female&rdquo;],<br> &nbsp; &nbsp;&quot;email&quot;: String (email),</span></p><p class="c3"><span class="c0">&nbsp; &nbsp; &nbsp;&quot;hobby&quot;:{<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;name&quot;: String,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&quot;description&quot;: String<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></p><p class="c3"><span class="c0">&nbsp; &nbsp; &nbsp;&quot;phone&quot;:{[<br> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;number&quot;: Number,<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;description&quot;: String<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]},</span></p><p class="c3"><span class="c0">&nbsp; &nbsp; &nbsp;&quot;address&quot;:{<br> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;street&quot;: String,<br> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&quot;additionalInfo&quot;: String,</span></p><p class="c3"><span class="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&quot;zipCode&quot;: Number</span></p><p class="c3 c20 c31"><span class="c0">}</span></p><p class="c3 c5"><span class="c17 c25"></span></p><p class="c3 c5"><span class="c0"></span></p><p class="c3 c5"><span class="c0"></span></p><p class="c3"><span class="c10">city (3) </span></p><p class="c3"><span class="c2 c27">[</span><span class="c0">{<br> &quot;zipCode&quot;: Number,</span></p><p class="c3"><span class="c2 c39">&nbsp;&quot;city&quot;: String<br>}]</span></p><h4 class="c24" id="h.34uok9x9bjea"><span class="c12">Errors</span></h4><p class="c3"><span class="c17 c25">(e) All errors are reported using this format (with the HTTP-status code matching the number)</span></p><p class="c37"><span class="c26 c2">{ status : statusCode, &quot;msg&quot;: &quot;Explains the problem&quot; }</span></p><p class="c3 c5"><span class="c7"></span></p><ul class="c42 lst-kix_g80z00byudwm-0 start"><li class="c3 c20 c30"><span class="c25 c40">(e1) :</span><span class="c26 c2">{ status : 404, &quot;msg&quot;: &quot;No person found with the provided ID&quot; }</span></li><li class="c3 c20 c30"><span class="c25 c40">(e2) :</span><span class="c26 c2">{ status : 400, &quot;msg&quot;: &quot;Field &lsquo;xxx&rsquo; is required&quot; } (for example, no name provided)</span></li><li class="c3 c20 c30"><span class="c25 c40">(e3) :</span><span class="c26 c2">{ status : 400, &quot;msg&quot;: &quot;An error occurred in retrieving data from the server. Please try again later&quot; } </span></li><li class="c3 c20 c30"><span class="c25 c40">(e4) :</span><span class="c26 c2">{ status : 404, &quot;msg&quot;: &quot;No person found with the provided phone number&quot; }</span></li></ul><p class="c3 c5 c20"><span class="c2 c26"></span></p><p class="c3 c5"><span class="c26 c2 c35"></span></p><p class="c3 c5"><span class="c13"></span></p></div>  ' ; 
}
export default htmlContentFacade;