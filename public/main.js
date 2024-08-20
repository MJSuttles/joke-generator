// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Wanna hear a funny joke?</h1>
    <button class="btn btn-danger" id="click-me">Click ME!</button><br />
    <hr />
    <div id="jokeText">
    </div>
    <div id="jokePunch"> 
  </div>
    <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
  `;

  let punchline = '';

  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target && e.target.id === 'click-me') {
      getRequest().then((response) => {
        document.querySelector('#jokePunch').innerHTML = '';
        document.querySelector('#jokeText').innerHTML = response.setup;
        e.target.innerHTML = 'Get Punchline';
        e.target.setAttribute('id', 'punchline');
        punchline = response.delivery;
      });
    } else if (e.target && e.target.id === 'punchline') {
      document.querySelector('#jokePunch').innerHTML = punchline;
      e.target.setAttribute('id', 'click-me');
      e.target.innerHTML = 'Get Another Joke';
    }
  });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
