import './style.css'

console.log('CoomViewer initialized!');

function initializePage() {
  const navbar = document.createElement('div');
  navbar.id = 'navbar';

  const container = document.createElement('div');
  container.id = 'container';

  const clearButton = document.createElement('div');
  clearButton.innerHTML = 'CLEAR';
  clearButton.classList.add('navbar-btn');
  clearButton.onclick = (ev) => { clearAll(); }
  navbar.appendChild(clearButton);

  const fullscreenButton = document.createElement('div');
  fullscreenButton.innerHTML = 'FULLSCREEN';
  fullscreenButton.classList.add('navbar-btn');
  fullscreenButton.onclick = (ev) => { toggleFullscreen(); }
  navbar.appendChild(fullscreenButton);

  createLayoutButtons(navbar, container);
  createGrid(container, 3, 3);

  document.body.appendChild(navbar);
  document.body.appendChild(container);
}

function toggleFullscreen() {
  if(document.fullscreenElement) {
    document.exitFullscreen()
      .then(() => console.log("Exited fullscreen mode"))
      .catch((err) => console.error(err))
  } else {
    if(document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.webkitRequestFullscreen) { /* Safari */
      document.body.webkitRequestFullscreen();
    } else if (document.body.msRequestFullscreen) { /* IE11 */
      document.body.msRequestFullscreen();
    }
  }
}

function clearElement(element) {
  while(element.hasChildNodes()) element.removeChild(element.firstChild);
}

function clearAll() {
  const cells = document.body.querySelectorAll('.cell');
  cells.forEach(c => {
    clearElement(c);
    c.appendChild(createAddButton(c.id));
  })
}

function createAddButton(cellId) {
  const addButton = document.createElement('div');
  addButton.classList.add('add-btn');

  addButton.onclick = (ev) => { showAddVideoPopup(cellId) }

  addButton.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-plus fa-w-14 fa-5x"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" class=""></path></svg>';

  return addButton;
}

function createGrid(container, width, height) {
  clearElement(container);

  const cellWidth = `${100 / width}%`;
  const rowHeight = `${100 / height}%`;

  for(let i = 0; i < height; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.flexBasis = rowHeight;

    for(let j = 0; j < width; j++) {
      let cellId = `cell${i * width + j + 1}`;

      const cell = document.createElement('div');
      cell.id = cellId;
      cell.classList.add('cell');
      cell.style.flexBasis = cellWidth;

      cell.appendChild(createAddButton(cellId));

      row.appendChild(cell);
    }

    container.appendChild(row);
  }
}

function createLayoutButtons(navbar, container) {
  const layouts = [
    { w: 2, h: 2},
    { w: 3, h: 3},
    { w: 4, h: 4},
    { w: 5, h: 5},
  ]

  layouts.map(l => {
    const layout = document.createElement('div');
    layout.innerHTML = `${l.w}x${l.h}`;
    layout.classList.add('navbar-btn');
    layout.onclick = (ev) => { createGrid(container, l.w, l.h) }
    navbar.appendChild(layout);
  })
}

function showAddVideoPopup(cellId) {
  hideAddVideoPopup();

  const addVideoPopup = document.createElement('div');
  addVideoPopup.classList.add('add-video-popup');

  const linkInput = document.createElement('input');
  linkInput.id = 'video-link';
  addVideoPopup.appendChild(linkInput);

  const submitBtn = document.createElement('div');
  submitBtn.innerHTML = 'ADD';
  submitBtn.classList.add('navbar-btn');
  submitBtn.onclick = (ev) => { embedVideo(cellId, linkInput.value); hideAddVideoPopup(); }

  addVideoPopup.appendChild(submitBtn);

  document.body.appendChild(addVideoPopup);
}

function hideAddVideoPopup() {
  const popup = document.body.querySelectorAll('.add-video-popup');
  if(popup) popup.forEach(p => document.body.removeChild(p));
}

function embedVideo(cellId, link) {
  link = link.trim();
  if(link.length != 0) {
    const cell = document.body.querySelector(`#${cellId}`);
    if(cell) {
      const embed = document.createElement('iframe');
      embed.scrolling = 'no';
      embed.allowFullscreen = true;
      embed.width = '100%';
      embed.height = '100%';
      embed.frameBorder = 0;

      let match;
      if((match = link.match(/^(https?:\/\/)?(www.)?redtube.com\/(\w+)/))) {
        const id = match[3];
        if(id) {
          embed.src = `https://embed.redtube.com/?id=${id}`;
          clearElement(cell);
          cell.appendChild(embed);
        }
      } else if((match = link.match(/^(https?:\/\/)?(www.)?xvideos.com\/video(\w+)/))) {
        const id = match[3];
        if(id) {
          embed.src = `https://www.xvideos.com/embedframe/${id}`;
          clearElement(cell);
          cell.appendChild(embed);
        }
      } else if((match = link.match(/^(https?:\/\/)?(www.)?ashemaletube.com\/embed\/(\w+\/\w+)/))) {
        const url = match[0];
        if(url) {
          embed.width = '90%';
          embed.src = url;
          clearElement(cell);
          cell.appendChild(embed);
        }
      } else if((match = link.match(/^(https?:\/\/)?(www.)?pornhub.com\/view_video.php\?viewkey\=(\w+)/))) {
        const id = match[3];
        if(id) {
          embed.src = `https://www.pornhub.com/embed/${id}`;
          clearElement(cell);
          cell.appendChild(embed);
        }
      } else if((match = link.match(/^(https?:\/\/)?(www.)?xhamster.com\/embed\/(\w+)/))) {
        const url = match[0];
        if(url) {
          embed.src = url;
          clearElement(cell);
          cell.appendChild(embed);
        }
      } else if((match = link.match(/^(https?:\/\/)?(www.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/))) {
        const id = match[3];
        if(id) {
          embed.src = `https://www.youtube.com/embed/${id}`;
          clearElement(cell);
          cell.appendChild(embed);
        }
      }
    }
  }
}

initializePage();