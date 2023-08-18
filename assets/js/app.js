const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector('.name'); /* Estaba mal la referencia, el "." es para clases */
const b = document.querySelector('.blog'); /* Estaba mal la referencia, el "." es para clases */
const l = document.querySelector('.location'); /* Estaba mal la referencia "." para clases */

async function displayUser(username) { /* Faltaban los parámetros n, b, l y async */
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); /* Faltaba await en vez de async */
  const data = await response.json() /* Faltaba convertir la respuesta a un objeto */
  console.log(data);
  n.textContent = `${data.name}`; /* No tenía backticks */
  b.textContent = `${data.blog}`; /* No tenía backticks */
  l.textContent = `${data.location}`; /* No tenía backticks */
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError)