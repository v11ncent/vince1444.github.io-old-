window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        if (this.message.value === '' || this.user_name.value === '' || this.user_email.value === '') {
            alert('Please fill out every field so I can get back to you :)');
        }
        else { emailjs.sendForm('service_afte3ds', 'template_f9zkxqi', this, 'user_XWQyLzUVOhS0MCMkxm15M'); }
    });
}