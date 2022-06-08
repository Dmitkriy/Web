const button = document.getElementById('button');
const dataDiv = document.querySelector('.data');

function viewUsers(users) {
   if (Object.keys(users).length === 0) {
      const notFound = document.createElement('p');
      notFound.innerHTML = 'Сохранённых пользователей нет';
      notFound.classList.add('text')
      dataDiv.appendChild(notFound);
      return;
   } 

   for (let i = 0; i < Object.keys(users).length; i++) {
      const div = document.createElement('div');
      dataDiv.appendChild(div);
      div.classList.add('data__user');

      const img = document.createElement('img');
      img.src  = '/images/icon.svg'
      img.alt = 'icon'
      div.appendChild(img)
      img.classList.add('icon');

      for (key in users[i]) {
         const elem = document.createElement('p');
         elem.innerHTML = users[i][key];
         elem.classList.add('text');
         div.appendChild(elem);
      }
   }
}

button.addEventListener('click', () => {
   dataDiv.innerHTML = '';

   fetch('/handler.php', {'method': 'GET'})
   .then(response => response.json())
   .then(data => {
      viewUsers(data);
   })
})