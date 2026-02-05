fetch('http://localhost:3000/eventos')
  .then(res => res.json())
  .then(eventos => {
    const container = document.getElementById('eventos')

    eventos.forEach(evento => {
      const card = document.createElement('div')
      card.className = 'card'

      card.innerHTML = `
        <h3>${evento.nome}</h3>
        <p>📅 ${evento.data_evento}</p>
        <p>📍 ${evento.local_evento}</p>
        <p>💰 R$ ${evento.preco}</p>
        <button onclick="comprar(${evento.id})">Comprar ingresso</button>
      `

      container.appendChild(card)
    })
  })

function comprar(id) {
  fetch('http://localhost:3000/comprar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      usuario_id: 1,
      evento_id: id
    })
  })
    .then(res => res.text())
    .then(msg => alert(msg))
}
