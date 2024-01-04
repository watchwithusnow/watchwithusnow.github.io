function participate() {
    // Obtener datos del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Crear un objeto con los datos del participante
    var participant = {
        name: name,
        email: email
    };

    // Convertir el objeto a formato JSON
    var participantJSON = JSON.stringify(participant);

    // Guardar los datos en un archivo (esto no es seguro para datos sensibles)
    saveData(participantJSON);
}

function saveData(data) {
    // Utilizar la API Fetch para enviar los datos a un archivo en el repositorio
    fetch('https://api.github.com/repos/watchwithusnow/watchwithusnow.github.io/contents/participants.json', {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer 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', // Reemplazar con tu token de acceso
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Añadir participante',
            content: btoa(data), // Codificar en base64 para el contenido del archivo
            path: 'participants.json',
            branch: 'main'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Datos guardados correctamente:', data);
    })
    .catch(error => {
        console.error('Error al guardar los datos:', error);
    });
}
