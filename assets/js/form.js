function sendEmail() {
    let email = document.getElementById("email").value.trim()
    let message = document.getElementById("message").value.trim()
    let msg_subject = document.getElementById('msg_subject').value
    let name = document.getElementById("name").value
    if(email != '' && message != '' && name != '' && msg_subject != ''){
        var templateParams = {
      from_name: email,
      to_name: EMAIL,
      message: message
    };
  
    emailjs.send('service_orgpheg', 'template_s41n6zf', templateParams)
      .then(function(response) {
        document.getElementById("email").value = ''
        document.getElementById("message").value = ''
        document.getElementById("name").value = ''
        document.getElementById("msg_subject").value = ''
        alert("E-mail envoyé avec succès !")
        console.log('E-mail envoyé avec succès !', response);
      }, function(error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      });
    }
    
  }
  