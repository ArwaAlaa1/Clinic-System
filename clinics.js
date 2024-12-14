
var clinicsDiv=document.getElementById("clinics")
var divHovers=document.querySelectorAll(".divHover");
var divHovers=""
var buttonHovers=document.querySelectorAll(".buttonHoverBase");
var xhr=new XMLHttpRequest()
xhr.open('get',"data.json")
xhr.send()
xhr.addEventListener('readystatechange',function(){
    if (xhr.status==200 && xhr.readyState==4) {
       var response=JSON.parse(xhr.response);
    //    console.log(response);
   
        for (const element of response["medicalSpecializations"]) {
        //   console.log(element);
          
           clinicsDiv.innerHTML +=` <div class="divHover"
                style="position:absulote;margin-bottom:35px;margin-right:25px;float: left;width: 21%;padding: 20px 5px;box-shadow: 0px 0px 5px rgb(228, 225, 225);text-align: center;padding-bottom: 40px;">
                <img src=${element.imageUrl}
                    style="border: 3px solid white;width: 90%;height:130px;box-shadow: 0px 0px 7px rgb(216, 213, 213);">
                <p style="margin-top: 12px;margin-bottom:7px;">${element.name}</p>
                
               <form method="get" action="Doctors.html"> 
               <input  value=${element.name} name="specilized" hidden></input>
                 
                  <button type="submit" class="buttonHoverBase">
                  Book Appointment
                   </button>
               </form>
            </div>`
            
        }
    }
    
 divHovers=document.querySelectorAll(".divHover");
 buttonHovers=document.querySelectorAll(".buttonHoverBase");


for (let i = 0; i < divHovers.length; i++) {
   divHovers[i].addEventListener('mouseover',function(){
    
   buttonHovers[i].style.display="inline-block"
   })
}
for (let i = 0; i < divHovers.length; i++) {
   divHovers[i].addEventListener('mouseout',function(){
    
   buttonHovers[i].style.display="none"
   })
}


})
