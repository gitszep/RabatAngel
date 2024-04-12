function sendMail(){
    let parms = {
        name :  document.getElementById("name").value,
        email :  document.getElementById("email").value,
        subject :  document.getElementById("subject").value,
        message :  document.getElementById("message").value,

        
    }


    emailjs.send("service_32cv90m","template_z41ogxq",parms).then(alert("email Sent!!"))

}




/*                       <input type="text" id="name" required="required">
                          <label>Twoja Nazwa</label>
                      </div>
              
                      <div class="input-group half-width">
                          <input type="email" id="email" required="required">
                          <label>Email</label>
                      </div>
              
                      <div class="input-group full-width">
                          <input type="text" id="subject" required="required">
                          <label>Temat</label>
                      </div>
              
                      <div class="input-group full-width">
                          <textarea id="message" required="required"></textarea>
                          <label>Napisz do nas</label> */