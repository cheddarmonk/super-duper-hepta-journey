/* eslint-env browser */
// main.js
const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

update.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Sally',
      quote: 'Birthday, CakePoper, 2012.'
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      window.location.reload(true)
    })
})

deleteButton.addEventListener('click', _ => {
  console.log("Delete")
  fetch('/quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: document.getElementById('deletename').value
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      if (response === 'No quote to delete') {
        messageDiv.textContent = 'No info to delete'
        console.log("nothing to delete")
      } else {
        window.location.reload(true)
      }
    })
    .catch(console.error)
})
