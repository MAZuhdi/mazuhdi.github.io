import homeSkeleton from "../elements/home-skeleton.js";
import portfoliosSkeleton from "../elements/portfolios-skeleton.js";
import homeInitiator from "../configs/page-initiatior/home.js";
import portfoliosInitiator from "../configs/page-initiatior/portfolios.js";
import completionsInitiator from "../configs/page-initiatior/completions.js";
import experiencesInitiator from "../configs/page-initiatior/experiences.js";

function navigation(pageName) {
  setTimeout(() => {
    switch (pageName) {
      case "":
      case "/home":
        homeSkeleton();
        setTimeout(() => {
          homeInitiator();
        }, 1000);
        break;
      case "/portfolios":
        portfoliosSkeleton();
        setTimeout(() => {
          portfoliosInitiator();
        }, 1000);

        break;
      case "/completions":
        portfoliosSkeleton();
        setTimeout(() => {
          completionsInitiator();
        }, 1000);
        break;
      case "/experiences":
        portfoliosSkeleton();
        setTimeout(() => {
          experiencesInitiator();
        }, 1000);
        break;
      default:
        // window.location.hash = "/home";
        break;
    }
  }, 1500);
}

export { navigation };
