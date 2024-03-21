// import React, {useState} from "react";
// import { Search } from "@mui/icons-material";
import "./SearchBar.css";
import search from '../Assets/Vector.svg'

const SearchBar = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       title: "Check Textured Coat",
//       category: "Coat",
//       price: "175.4",
//       tags: "coat check textured camel brown long sleeves buttoned cuffs",
//     },
//     {
//       id: 2,
//       title: "Contrast Check Coat",
//       category: "Coat",
//       price: "155.4",
//       tags: "coat camel black grey marl lapel collar hip flap pockets",
//     },
//     {
//       id: 3,
//       title: "White Coat",
//       category: "Coat",
//       price: "125.4",
//       tags: "coat camel white short sleeves double-breasted button",
//     },
//     {
//       id: 4,
//       title: "Basic Hoodie",
//       category: "Hoodies / SweatShirts",
//       price: "55.4",
//       tags: "hoodie solid plain purple long baggy hood",
//     },
//     {
//       id: 5,
//       title: "Basic Hoodie",
//       category: "Hoodies / SweatShirts",
//       price: "55.4",
//       tags: "hoodie solid plain black long baggy hood",
//     },
//     {
//       id: 6,
//       title: "Basic short Hoodie",
//       category: "Hoodies / SweatShirts",
//       price: "55.4",
//       tags: "hoodie solid plain gray grey short hood",
//     },
//   ]);
  return (
    <div className="searchBarSection">
      <div class="searchBar">
        {/* <input className="input" /> */}
        <button className="button">
          <img src={search} alt="search"/>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;