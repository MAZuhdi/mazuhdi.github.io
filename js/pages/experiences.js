function experiencesMain({ id, title, publisher, year, cover, desc, link }) {
  return `
    <div class="detail-wrapper" id="${id}">
            <img
            class="detail-img lazyload" data-src="${cover}" src="img/placeholder.jpg" alt="Foto experiences"/>
            <h3 class="section-heading">${title}</h3>
            <div class="detail-information">
              <p class="project-role">${publisher}</p>
              <p class="project-type">${year}</p>
            </div>
            <p class="project-description">${desc}</p>
          </div>
    `;
}

function experiencesAside({ id, title, publisher, year }) {
  return `
      <div class="item-card-list" tabindex="0" id=${id}>
      <h4 class="item-card-heading" id=${id}>${title}</h4>
      <p class="item-card-role" id=${id}>${publisher}</p>
      <p class="item-card-type" id=${id}>${year}</p>
    </div>
      `;
}

export { experiencesMain, experiencesAside };
