'use strict'
window.addEventListener('load', ()=>{
//EVENTOS MOUSE
    var boton = document.querySelector('#send');
        boton.addEventListener('click',()=>{
            var template_params = {
                "from_name":       document.querySelector('#nombre_contacto').value,
                "from_email":      document.querySelector('#correo_contacto').value,
                "from_area":       document.querySelector('#area_contacto').value,
                "time_process":    document.querySelector('#tiempo').value,
                "people_process": document.querySelector('#num_personas').value,
                "frecuency_process": document.querySelector('#frecuencia').value,
                "description_process": document.querySelector('#project_description').value
             }
            
             var service_id = "default_service";
             var template_id = "newdigitalprojects";
             emailjs.send(service_id, template_id, template_params);
    
        /*console.log (document.querySelector('#nombre_contacto').value);
        console.log (document.querySelector('#correo_contacto').value);
        console.log (document.querySelector('#area_contacto').value);
        console.log (document.querySelector('#tiempo').value);
        console.log (document.querySelector('#num_personas').value);
        console.log (document.querySelector('#frecuencia').value);
        console.log (document.querySelector('#project_description').value);*/

    });

});