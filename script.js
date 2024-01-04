const apiUrl = 'https://api.github.com/repos/watchwithusnow/watchwithusnow.github.io/contents/participantes.json';
let participantes = [];

async function cargarParticipantes() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': 'Bearer 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'
      }
    });
    const data = await response.json();
    participantes = JSON.parse(atob(data.content));
  } catch (error) {
    console.error('Error al cargar participantes:', error);
  }
}

async function guardarParticipantes() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': 'Bearer TU_TOKEN_DE_ACCESO'
      }
    });
    const data = await response.json();
    const sha = data.sha;

    const contenido = btoa(JSON.stringify(participantes, null, 2));
    await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer TU_TOKEN_DE_ACCESO'
      },
      body: JSON.stringify({
        message: 'Actualizar participantes.json',
        content: contenido,
        sha: sha
      })
    });
  } catch (error) {
    console.error('Error al guardar participantes:', error);
  }
}

// Resto del código...
