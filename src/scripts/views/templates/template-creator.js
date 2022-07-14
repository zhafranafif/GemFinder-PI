import CONFIG from '../../globals/config';

const createVenueItemTemplate = (location) => `
<div class="venue-item">
    <div class="venue-item__header">
        <img tabindex="0" 
            class="venue-item__header__poster" 
            src="${CONFIG.BASE_IMAGE_URL + location.image}" 
            alt="${location.name}." 
            height="170px"
       />
       <div class="box">
       <div class="venue-item__header__rating">
            <p>⭐️<span class="venue-item__header__rating__score">${location.rating || '-'}</span></p>
        </div>
        </div>
    </div>
    <div class="venue-item__content">
      <h1 tabindex="-1" class="venue-item__title">
        <a tabindex="0" class="venue-item__content__link" href="${`/#/detail/${location.id}`}">
          <span class=  venue-item__content__title>
            ${location.name}
          </span>
        </a>
      </h1>
      <p tabindex="0" class="venue-item__description">${location.description}</p>
    </div>
  </div>
`;
const createVenueDetailTemplate = (detail) => `
  <div class="venue__detail">
  <img class="venue__poster" src="${CONFIG.BASE_IMAGE_URL + detail.image}" alt="${detail.name}" width="300" height="350"/>
  <div class="venue__info">
  <h3 class="venue__title">${detail.name}</h3>
    <h4>City</h4>
    <p><i class="fa-solid fa-location-dot"></i></i>${detail.kabupatenkota}</p>
    <h4>Rating</h4>
    <p><i class="fa fa-star"></i>${detail.rating}</p>
    <h4>Address <i class="fa fa-address-book"></i></h4>
    <p>${detail.address}</p>
    <h4>Description <i class="fa fa-sort-desc"></i></h4>
    <p>${detail.description}</p>
    <h4>Overview</h4>
    <p><i class="fa-solid fa-face-smile-wink"></i>${detail.rating}</p>
  </div>
</div>
`;
const createVenueRecommendationTemplate = (location) => `
<div class="venue-item">
    <div class="venue-item__header">
        <img tabindex="0" 
            class="venue-item__header__poster" 
            src="${CONFIG.BASE_IMAGE_URL + location.image}" 
            alt="${location.name}." 
            height="170px"
       />
       <div class="box">
       <div class="venue-item__header__rating">
            <p>⭐️<span class="venue-item__header__rating__score">${location.rating || '-'}</span></p>
        </div>
        </div>
    </div>
    <div class="venue-item__content">
      <h1 tabindex="-1" class="venue-item__title">
        <a tabindex="0" class="venue-item__content__link" href="${`/#/detail/${location.id}`}">
          <span class=  venue-item__content__title>
            ${location.name}
          </span>
        </a>
      </h1>
      <p tabindex="0" class="venue-item__description">${location.description}</p>
    </div>
    <a href="${`/#/detail/${location.id}`}" class="detailbtn">More ></a>
  </div>
`;
const createAboutUsTemplate = () => `
      <div class="About-Us">
        <h2>About <span>Us</span></h2>
      </div>
      <div class="break-line"></div>
      <div class="gem-desc">
        <h3>GemFinder</h3>
        <p>GemFinder merupakan website yang dibuat untuk memberikan informasi-informasi destinasi wisata hidden gem yang ada di Indonesia. GemFinder dibuat agar destinasi-destinasi wisata yang kurang mendapatkan visibilitas
        dari masyarakat serta destinasi yang mendapatkan dampak sangat kuat dari pandemi COVID-19 dapat tumbuh kembali. Destinasi-destinasi ini didapatkan dari dari survey google form yang diberikan kepada public.
        </p>
      </div>
          <div class="wrapper">
     <div class="img-area">
       <div class="inner-area">
         <img src="${CONFIG.BASE_IMAGE_URL}zhafran.jpg" alt="Zhafran Afif">
       </div>
     </div>
      <div class="name">Zhafran Afif</div>
     <div class="major">
       Information System at Gunadarma University
  </div>
  </div>
          <div class="credits">
              <h2>Credits</h2>
              <p>Sumber gambar yang digunakan untuk API hidden gem: Google Maps</p>
              <p>Sumber API Hidden Gem (survey): <a href="https://docs.google.com/forms/d/173q_HkLuMI_cCeoJqHOMlNuqhgvervj6LEPqetjD_Nk/edit#responses</a></p>
          </div>
`;


const createLikeButtonTemplate = () => `
  <button aria-label="like this venue" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this venue" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createVenueItemTemplate,
  createVenueDetailTemplate,
  createVenueRecommendationTemplate,
  createAboutUsTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
