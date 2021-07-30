function portfoliosHome() {
  return `
  <div class="detail-wrapper">
          <img
            class="detail-img"
            src="https://dummyimage.com/1600x900/000/fff&text=MAZuhdi"
            alt="Foto Portofolio"
          />
          <h3 class="section-heading">My Website</h3>
          <div class="detail-information">
            <p class="project-role">Back-end Developer</p>
            <p class="project-type">Web Application</p>
          </div>
          <p class="project-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            quis voluptatum quidem reiciendis corporis praesentium modi nemo
            consectetur quos numquam.
          </p>
          <p class="project-tools">Laravel, PostgreSQL</p>
          <p class="project-link"><a href="#">Click Me!</a></p>
        </div>
  `;
}

function portfoliosAside() {
  return `
    <div class="item-card-list" tabindex="0">
    <h4 class="item-card-heading">Lorem ipsum dolor sit amet.</h4>
    <p class="item-card-role">Lorem ipsum dolor sit.</p>
    <p class="item-card-type">Lorem ipsum.</p>
  </div>
    `;
}

export { portfoliosHome, portfoliosAside };
