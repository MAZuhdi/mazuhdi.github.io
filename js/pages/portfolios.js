function portfoliosHome({ id, title, role, type, cover, desc, tools, link }) {
  return `
  <div class="detail-wrapper" id="${id}">
          <img
            class="detail-img"src="${cover}"alt="Foto Portofolio"/>
          <h3 class="section-heading">${title}</h3>
          <div class="detail-information">
            <p class="project-role">${role}</p>
            <p class="project-type">${type}</p>
          </div>
          <p class="project-description">${desc}</p>
          <p class="project-tools">${tools}</p>
          <p class="project-link"><a href="${link}">Click Me!</a></p>
        </div>
  `;
}

function portfoliosAside({ id, title, role, type }) {
  return `
    <div class="item-card-list" tabindex="0" id=${id}>
    <h4 class="item-card-heading" id=${id}>${title}</h4>
    <p class="item-card-role" id=${id}>${role}</p>
    <p class="item-card-type" id=${id}>${type}</p>
  </div>
    `;
}

export { portfoliosHome, portfoliosAside };
