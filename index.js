
function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    var menuIcon = document.getElementById('menuIcon');
  
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    } else {
        navbar.classList.add('active');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
        
    }
}

function sendMail(){
    var params ={
        from_name:document.getElementById("fullName").value,
        email_id:document.getElementById("email").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_99x5nqe","template_rcllf1j",params).then(function() {
        document.getElementById("messageDisplay").innerText = "Message Sent Successfully!";
    })
    
}

