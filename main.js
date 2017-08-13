const menu = document.querySelector('#country');
const output = document.querySelector('#information');

function ajaxRequest (e) {
  let ajax = new XMLHttpRequest();
  ajax.open('GET', e.target.href);
  ajax.onload = function () {
    if (ajax.status === 200)
      output.innerHTML = this.response;
    else if (ajax.status === 404)
      output.innerHTML = `Error! file ${this.statusText}`;
    else
      output.innerHTML = `Error: ${this.status}`;
  }
  ajax.send();
}
// Event propagation
menu.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.localName === 'a') {
    ajaxRequest(e);
  }
});
