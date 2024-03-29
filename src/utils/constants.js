export const Netflix_Bg="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

export const Netflix_Logo="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"

export const user_Logo="https://avatars.githubusercontent.com/u/85206406?v=4"

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };

 export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

 export const USER_ICON = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

 export const SUPPORTED_LANGAUGE=[{identifier:"en", name:"English"},{identifier:"hindi", name:"Hindi"},{identifier:"spanish", name:"Spanish"}];

 export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY