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

      const name = document.createElement('p');
      name.innerHTML = users[i]['name'];
      name.classList.add('text')
      div.appendChild(name);

      const email = document.createElement('p');
      email.innerHTML = users[i]['email'];
      email.classList.add('text')
      div.appendChild(email);

      const activity = document.createElement('p');
      activity.innerHTML = users[i]['activity'];
      activity.classList.add('text')
      div.appendChild(activity);

      const agreement = document.createElement('p');
      agreement.innerHTML = users[i]['agreement'];
      agreement.classList.add('text')
      div.appendChild(agreement);
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