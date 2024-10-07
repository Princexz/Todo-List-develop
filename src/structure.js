function displayNav() {
  const container = document.getElementById('content');
  const nav = container.appendChild(document.createElement('nav'));
  nav.setAttribute('class', 'navbar navbar-dark bg-primary');
  const navContent = nav.appendChild(document.createElement('div'));
  navContent.setAttribute('class', 'container-fluid');
  const navBrand = navContent.appendChild(document.createElement('a'));
  navBrand.setAttribute('class', 'navbar-brand');
  navBrand.textContent = 'To Do List';
}

function displayFooter() {
  const container = document.getElementById('content');
  const footer = container.appendChild(document.createElement('footer'));
  footer.setAttribute('class', 'bg-primary');
  const authors = footer.appendChild(document.createElement('p'));
  authors.setAttribute('class', 'text-center text-light my-auto');
  authors.innerHTML = 'Copyright 2021  Kene && John';
}

export { displayNav, displayFooter };