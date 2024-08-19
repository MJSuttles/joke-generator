// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>HELLO! You are up and running!</h1>
    <small>Open your dev tools</small><br />
    <button class="btn btn-danger" id="click-me">Click ME!</button><br />
    <hr />
    <div id="jokeText">
      <h2>These are font awesome icons:</h2>
    </div>
    <div id="jokePunch"> 
  </div>
    <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
  `;

  document
    .querySelector('#click-me')
    .addEventListener('click', () => {
      getRequest().then((response) => {
        document.querySelector('#jokeText').innerHTML = response.setup;
        document.querySelector('#click-me').innerHTML = 'Get Punchline';
        document.querySelector('#click-me').addEventListener('click', () => {
          document.querySelector('#jokePunch').innerHTML = response.delivery;
          // document.querySelector('#jokeSetup').innerHTML = jokePart1;
        });
      });
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
