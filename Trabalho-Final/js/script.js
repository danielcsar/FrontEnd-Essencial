const loadClients = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((results) => setClient(results))
    .catch((error) => {
      alert("Error, tente novamente mais tarde!");
      console.log(error);
    });
}

function setClient(clients) {

  for (let index = 0; index < clients.results.length; index++) {
    const client = clients.results[index];
       
    document.getElementById(`nomeCliente${index}`).innerHTML = `${client.name.first} ${client.name.last}, ${client.dob.age}`;
    document.getElementById(`descCliente${index}`).innerHTML = client.location.timezone.description;
    document.getElementById(`imgCliente${index}`).src = client.picture.large;
  }
}