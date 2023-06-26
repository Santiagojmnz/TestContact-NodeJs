document.getElementById('contactForm').addEventListener('submit', function (event) {
document.getElementById('successMessage').style.display = 'block';

    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    
    var data = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    fetch('http://localhost:3000/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al guardar el mensaje');
            }
        })
        .then(function (data) {
            
            resetForm();
        })
        .catch(function (error) {
            alert(error.message);
        });
});

function resetForm() {
    document.getElementById('contactForm').reset();
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
      }, 2000);
}
