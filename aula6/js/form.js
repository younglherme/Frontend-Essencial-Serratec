const formElement = document.querySelector("form");

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  fetch('https://68e04c6393207c4b47942971.mockapi.io/clientes', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  await((response)=> response.json());
  await ((dados)=> alert("Gravado com sucesso! "));
});
