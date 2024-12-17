const xhr = new XMLHttpRequest();
xhr.open('GET', "data.json");     
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText); 
   fillSpecialties(data); // fill specilizatin     
  }
};
xhr.send(); 

//  
function fillSpecialties(data) {
  var specialtySelect = document.getElementById('specialty');
 
   //const specialties = Object.keys(data["medicalSpecializations"]);

  var dataS = data["medicalSpecializations"];
  // console.log(dataS)
  dataS.forEach(specialty => {
    var option = document.createElement('option');
    option.value = specialty.name;  
    option.textContent = specialty.name;   
    specialtySelect.appendChild(option);
  });
 //fill doctors selesction depend on speciality

  specialtySelect.addEventListener('change', function () {
    var selectedSpecialty = specialtySelect.value;
    
    var doctors;
   for (const element of dataS) {
    
    if (selectedSpecialty == element.name) {
      doctors = element.doctors;
      
    }
   }
 
    fillDoctorOptions(doctors);
  });

 
   specialtySelect.dispatchEvent(new Event('change'));
}
 
function fillDoctorOptions(doctors) {
  const doctorSelect = document.getElementById('doctor');
 
  doctorSelect.innerHTML = '';
 
   // fill doctor
  doctors.forEach(doctor => {
    const option = document.createElement('option');
    option.value = doctor.name;
    option.textContent = doctor.name;

    doctorSelect.appendChild(option);
  });
}

// Insert into local storage
document.getElementById('submit-button').addEventListener('click', function (event) {
  event.preventDefault();
 
  var visitType = document.getElementById('visitType').value;
  var specialty = document.getElementById('specialty').value;
  var doctor = document.getElementById('doctor').value;
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
 
  if (!visitType || !specialty || !doctor || !name || !email || !phone) {
    alert('Please fill out all fields.');
    return;
  }
 
  var newAppointment = { visitType, specialty, doctor, name, email, phone };
 
  var storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
 
  storedAppointments.push(newAppointment);
 
  localStorage.setItem('appointments', JSON.stringify(storedAppointments));
 
    window.location.href = "../bookCard.html";
});
 
 
 
// search by phone
document.getElementById('search-button').addEventListener('click', function (event) {
  event.preventDefault();

  var phoneSearch = document.getElementById('phone-search').value;
  var storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
 
  var appointment = storedAppointments.find(app => app.phone === phoneSearch);
 
  if (appointment) {
    document.getElementById('name').value = appointment.name;
    document.getElementById('email').value = appointment.email;
    document.getElementById('phone').value = appointment.phone;
    document.getElementById('visitType').value = appointment.visitType;
    document.getElementById('specialty').value = appointment.specialty;
 

    const specialtySelect = document.getElementById('specialty');
    specialtySelect.dispatchEvent(new Event('change'));    

    document.getElementById('doctor').value = appointment.doctor;
  } else {
    alert("No appointment found for this phone number.");
  }

});
 