export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  link: string;
  github: string;
}


export const projects: Project[] = [
    {
        "id": 1,
        "title": "Book finder",
        "description": "This is a book finder app that uses the Google Books API to search for books. It uses React.js and Bootstrap for the front-end.",
        "image": "https://i.ibb.co/mS2Zpzw/research.jpg",
        "link": "https://romantic-lamarr-52095c.netlify.app/",
        "github": "https://github.com/pierre1590/Books-search-Reactjs",
    },
    {
        "id": 2,
        "title": "Movie app",
        "description": "This is a movie app that uses the OMDB API to search for movies. It uses React.js and Bootstrap for the front-end.",
        "image": "https://i.ibb.co/HG4SpvL/movies.jpg",
        "link": "https://loving-turing-0432fe.netlify.app",
        "github": "https://github.com/pierre1590/Movie_app",
    },
    {
        "id": 3,
        "title": "Polluted cities",
        "description": "The project consists in creating two end-points or APIs, an end-point must allow the insertion in the database of a polluted location with relative image; and the other allows you to view a list of locations with images.",
        "link": "https://github.com/pierre1590/start2impact-Nodejs",
        "github": "https://github.com/pierre1590/start2impact-Nodejs"
    },
    {
        "id": 4,
        "title": "Recycle",
        "description": "The application allows you to create a weekly calendar of separate collection. It allows both a weekly and a daily view.I used PHP and MySQL for the back-end.",
        "image":"https://i.ibb.co/GkxS30k/calendar03.jpg",
        "link": "https://github.com/pierre1590/recycle",
        "github": "https://github.com/pierre1590/recycle"
    },
    {
        "id": 5,
        "title": "E-commerce",
        "description": "An installable e-commerce app built using the MERN stack, Redux.js e Bootstrap 5. User authentication is done using e-mail and password. The app also implements an email verification system for users who register using an email and password, in case you have forgotten your password you can create a new one using the forgot password feature.\nThe payment method implemented is PayPal which allows you to pay for orders, the app also includes an administration panel to keep track of all products, orders and users.", 
        "image":"https://i.ibb.co/P1P2nLc/HomePage.jpg",
        "link": "https://pieroshopapp.herokuapp.com/",
        "github": "https://github.com/pierre1590/MERN_E-commerce",
    },
    {
        "id": 6,
        "title": "News app",
        "description": "This is a news app that uses the News API to search for news. It uses React Native.",
        "image": "https://i.ibb.co/w4gbxWF/IMG-0229.png",
        "link": "https://github.com/pierre1590/News",
        "github": "https://github.com/pierre1590/News",
    },
    {
        "id": 7,
        "title": "Ecommerce app",
        "description": "This is an ecommerce app to sell cherries online. It uses React Native.",
        "image": "https://i.ibb.co/dMgdT2t/IMG-0193.jpg",
        "link": "https://github.com/pierre1590/Cherry",
        "github": "https://github.com/pierre1590/Cherry",
    },
    {
        "id": 8,
        "title": "Office Planner",
        "description": "The app allows you to plan the commitments of a day. It uses React Native.",
        "image": "https://i.ibb.co/bWzWM97/Phone3.png",
        "link": "https://play.google.com/store/apps/details?id=com.pierre1590.OfficePlanner",
        "github": "https://github.com/pierre1590/OfficePlanner",
    },
    {
        "id": 9,
        "title": "OroRosso",
        "description": "OroRosso: Turn your cherry harvest into profits by tracking companies, locations, clients, and earnings. It uses React Native.",
        "image": "https://i.ibb.co/W32LcbS/Screenshot-2024-07-18-224947.png",
        "link": "http://localhost:3000/projects/OroRosso",
        "github": "https://github.com/pierre1590/Report-cherries"
    }
];