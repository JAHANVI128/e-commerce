import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { useParams } from "react-router-dom";
import { showproduct } from "../Api/Api";
import D1 from "./../Components/Assets/D1.png"

const arrowUp = (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.792969L11.854 5.14597L11.147 5.85397L8 2.70697V14H7V2.70697L3.854 5.85397L3.146 5.14597L7.5 0.792969Z" fill="black"/>
</svg>
)

const arrowDown = (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 14.207L3.146 9.85403L3.853 9.14603L7 12.293L7 1.00003H8L8 12.293L11.146 9.14603L11.854 9.85403L7.5 14.207Z" fill="black"/>
</svg>
)

const fillStart = (
<svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.97001 4.62733L7.97 4.62736L7.69945 5.11727C7.69943 5.1173 7.69941 5.11733 7.6994 5.11736C7.69 5.13438 7.68073 5.1512 7.67157 5.16782C7.40167 5.65735 7.22927 5.97005 6.95637 6.17974L6.95603 6.18C6.68027 6.39114 6.34139 6.46841 5.81672 6.58804C5.79914 6.59205 5.78136 6.5961 5.76336 6.60021C5.76333 6.60022 5.7633 6.60022 5.76327 6.60023L5.23866 6.72021L5.23857 6.72023C4.21532 6.95384 3.47723 7.1233 2.96201 7.32846C2.45203 7.53152 2.22372 7.7451 2.13586 8.03015L1.89695 7.95651L2.13593 8.02992C2.04735 8.31825 2.11503 8.63884 2.41695 9.12335C2.72063 9.61067 3.22465 10.207 3.92169 11.0299L3.92181 11.0301L4.27969 11.4532C4.29169 11.4674 4.30355 11.4813 4.31527 11.4952C4.67401 11.9182 4.90287 12.1881 5.00548 12.5254C5.10913 12.8602 5.07481 13.2176 5.02042 13.7839C5.01869 13.8019 5.01693 13.8202 5.01516 13.8387L5.01514 13.8389L4.96071 14.402L7.97001 4.62733ZM7.97001 4.62733C8.49669 3.67334 8.87849 2.98292 9.22375 2.52755C9.56921 2.07191 9.83029 1.9165 10.0999 1.9165C10.3696 1.9165 10.6306 2.07191 10.9761 2.52755C11.3214 2.98292 11.7032 3.67334 12.2298 4.62733L12.2299 4.62736M7.97001 4.62733L12.2299 4.62736M12.2299 4.62736L12.5004 5.11727C12.5098 5.13432 12.5191 5.15117 12.5283 5.16781C12.7982 5.65735 12.9706 5.97005 13.2435 6.17974C13.5184 6.39101 13.8582 6.46836 14.3826 6.58774C14.4007 6.59186 14.419 6.59603 14.4375 6.60025L14.962 6.72021C15.9853 6.95425 16.7232 7.1237 17.2383 7.32877C17.7479 7.53169 17.976 7.74502 18.0639 8.02999C18.1525 8.31781 18.0849 8.63814 17.7829 9.12272C17.4792 9.61006 16.9752 10.2066 16.2782 11.0299C16.2782 11.0299 16.2781 11.0299 16.2781 11.03L15.9202 11.4524L15.92 11.4525M12.2299 4.62736L15.92 11.4525M15.92 11.4525C15.9074 11.4674 15.8949 11.4822 15.8826 11.4967C15.525 11.9192 15.2971 12.1884 15.1938 12.5238L15.1937 12.524M15.92 11.4525L15.1937 12.524M15.1937 12.524C15.0906 12.8597 15.125 13.2169 15.1795 13.7841C15.1812 13.8018 15.183 13.8197 15.1847 13.8379L15.1847 13.838M15.1937 12.524L15.1847 13.838M15.1847 13.838L15.2391 14.402L15.1847 13.838ZM15.0173 17.9348L15.0175 17.9347C15.2432 17.7618 15.3685 17.4648 15.3943 16.8809C15.42 16.2971 15.3443 15.5005 15.2392 14.4022L15.0173 17.9348ZM15.0173 17.9348C14.7966 18.1042 14.5011 18.1385 13.9735 17.9857C13.4426 17.832 12.7511 17.5111 11.7935 17.0657L11.7932 17.0655M15.0173 17.9348L11.7932 17.0655M11.7932 17.0655L11.3012 16.8374M11.7932 17.0655L11.3012 16.8374M8.40723 17.0656L8.40733 17.0656L8.89865 16.8374L8.40723 17.0656ZM8.40723 17.0656C7.44924 17.511 6.75752 17.8318 6.22652 17.9855M8.40723 17.0656L6.22652 17.9855M11.3012 16.8374C11.3011 16.8374 11.301 16.8374 11.301 16.8373M11.3012 16.8374L11.301 16.8373M11.301 16.8373C11.2856 16.8302 11.2704 16.8231 11.2554 16.8161C10.7628 16.5862 10.444 16.4373 10.0999 16.4373C9.75588 16.4373 9.43702 16.5862 8.94443 16.8161C8.92946 16.8231 8.91433 16.8301 8.89903 16.8373L11.301 16.8373ZM6.22652 17.9855C5.69885 18.1383 5.40346 18.1042 5.18321 17.9356M6.22652 17.9855L5.18321 17.9356M5.18321 17.9356C4.957 17.7622 4.83153 17.4649 4.80568 16.881C4.77983 16.2971 4.85558 15.5005 4.96069 14.4022L5.18321 17.9356Z" stroke="#FF8A00" stroke-width="0.5"/>
</svg>

)

const addToCartIcon = (
  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33335 13.1666H12.6667C12.8766 13.1666 13.078 13.25 13.2265 13.3985C13.3749 13.5469 13.4584 13.7483 13.4584 13.9583C13.4584 14.1682 13.3749 14.3696 13.2265 14.518C13.078 14.6665 12.8766 14.7499 12.6667 14.7499H5.54169C5.33172 14.7499 5.13036 14.6665 4.98189 14.518C4.83343 14.3696 4.75002 14.1682 4.75002 13.9583V3.66659H3.95835C3.74839 3.66659 3.54703 3.58318 3.39856 3.43471C3.25009 3.28625 3.16669 3.08488 3.16669 2.87492C3.16669 2.66496 3.25009 2.46359 3.39856 2.31513C3.54703 2.16666 3.74839 2.08325 3.95835 2.08325H5.54169C5.75165 2.08325 5.95301 2.16666 6.10148 2.31513C6.24995 2.46359 6.33335 2.66496 6.33335 2.87492V9.99992H13.2802L14.25 6.04158V4.45904C15.1565 4.45904 15.8334 5.16679 15.8334 6.04158C15.8334 6.15717 15.8199 6.27196 15.7938 6.38517L14.8826 10.3435C14.7163 11.0679 14.0497 11.5833 13.2802 11.5833H6.39115L6.33335 11.5825V13.1666ZM5.93752 17.9166C5.62258 17.9166 5.32053 17.7915 5.09783 17.5688C4.87513 17.3461 4.75002 17.044 4.75002 16.7291C4.75002 16.4141 4.87513 16.1121 5.09783 15.8894C5.32053 15.6667 5.62258 15.5416 5.93752 15.5416C6.25247 15.5416 6.55451 15.6667 6.77721 15.8894C6.99991 16.1121 7.12502 16.4141 7.12502 16.7291C7.12502 17.044 6.99991 17.3461 6.77721 17.5688C6.55451 17.7915 6.25247 17.9166 5.93752 17.9166ZM13.0625 17.9166C12.7476 17.9166 12.4455 17.7915 12.2228 17.5688C12.0001 17.3461 11.875 17.044 11.875 16.7291C11.875 16.4141 12.0001 16.1121 12.2228 15.8894C12.4455 15.6667 12.7476 15.5416 13.0625 15.5416C13.3775 15.5416 13.6795 15.6667 13.9022 15.8894C14.1249 16.1121 14.25 16.4141 14.25 16.7291C14.25 17.044 14.1249 17.3461 13.9022 17.5688C13.6795 17.7915 13.3775 17.9166 13.0625 17.9166ZM11.0834 4.45825H11.875C12.085 4.45825 12.2863 4.54166 12.4348 4.69013C12.5833 4.83859 12.6667 5.03996 12.6667 5.24992C12.6667 5.45988 12.5833 5.66124 12.4348 5.80971C12.2863 5.95818 12.085 6.04158 11.875 6.04158H11.0834V6.83325C11.0834 7.04321 10.9999 7.24458 10.8515 7.39304C10.703 7.54151 10.5017 7.62492 10.2917 7.62492C10.0817 7.62492 9.88036 7.54151 9.73189 7.39304C9.58343 7.24458 9.50002 7.04321 9.50002 6.83325V6.04158H8.70835C8.49839 6.04158 8.29703 5.95818 8.14856 5.80971C8.00009 5.66124 7.91669 5.45988 7.91669 5.24992C7.91669 5.03996 8.00009 4.83859 8.14856 4.69013C8.29703 4.54166 8.49839 4.45825 8.70835 4.45825H9.50002V3.66659C9.50002 3.45662 9.58343 3.25526 9.73189 3.10679C9.88036 2.95833 10.0817 2.87492 10.2917 2.87492C10.5017 2.87492 10.703 2.95833 10.8515 3.10679C10.9999 3.25526 11.0834 3.45662 11.0834 3.66659V4.45825Z" fill="white"/>
</svg>

)

const heartIcon = (
  <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2001_1699" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="22">
      <path d="M7.325 1C3.83188 1 1 3.83188 1 7.325C1 13.65 8.475 19.4 12.5 20.7375C16.525 19.4 24 13.65 24 7.325C24 3.83188 21.1681 1 17.675 1C15.536 1 13.6442 2.06203 12.5 3.68755C11.9168 2.85679 11.1419 2.1788 10.2411 1.71098C9.34032 1.24316 8.34005 0.999284 7.325 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </mask>
    <g mask="url(#mask0_2001_1699)">
      <path d="M-1.29987 -3.59985H26.3001V24.0001H-1.29987V-3.59985Z" fill="#383334"/>
    </g>
  </svg>
);

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
}


const ShopCategory = (props) => {
  const { categoryname } = useParams();
  console.log("category", categoryname);
  const [categoryWiseProduct, setCategoryWiseProduct] = useState([]);
  const [priceToggle, setPriceToggle] = useState(false);
  console.log("category", categoryWiseProduct);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await showproduct();
        const filteredProducts = productResponse.data.filter(
          (product) => product.category_id.category_name === categoryname
        );
        setCategoryWiseProduct(filteredProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryname]);

  const priceFilter = () =>{
    setPriceToggle((isPriceToggle)=>!isPriceToggle)
  }

  const [truncateLength, setTruncateLength] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setTruncateLength(40);
      } else if (window.innerWidth <= 768) {
        setTruncateLength(70);
      } else {
        setTruncateLength(200);
      }
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <div className="shopCategory_MainContainer">
      <div className="shopCategory_FilterSection">
        <p className="shopCategory_sortBy">Sort By:</p>
        <p className="shopCategory_relevance">Relevance</p>
        <button onClick={()=> priceFilter()} className="shopCategory_Price">Price {priceToggle ? arrowUp : arrowDown}</button>
        <button className="shopCategory_newest">Newest First</button>
      </div>

      <div className="shopCategory_cardSection">
        {categoryWiseProduct.map((items, index)=> {
          return (
            <>
              <div key={items._id} className="shopCategory_card">
                <div className="shopCategory_Card_imgSection">
                  <img src={items.photos[0]} alt="" />
                  <span className="heart">{heartIcon}</span>
                </div>
                <div className="shopCategory_Card_DesSection">
                  {/* <h3>{truncateText(items.description, 200)}</h3> */}
                  <h3>
                    {truncateText(
                      "Sony WH-1000XM4 Industry Leading Wireless Noise Cancellation Bluetooth Over Ear Headphones with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, AUX, Touch Control and Voice Control - BlacK...",
                      truncateLength
                    )}
                  </h3>
                  <p className="shopCategory_Card_warranty">
                    1 Year warranty | 20 mm driver | comfortable head rest{" "}
                  </p>
                  <p className="shopCategory_Card_ratings">
                    {fillStart}
                    {fillStart}
                    {fillStart}
                    {fillStart}
                    {fillStart} | 4.5
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "5px",
                      order: "3",
                    }}
                  >
                    <p className="shopCategory_Card_price">
                      $ <span>{items.price}</span>
                    </p>
                    <p className="shopCategory_Card_custPrice">
                      M.R.P : <span>{items.cust_price}</span>{" "}
                    </p>
                  </div>
                  {/* <button className="shopCategory_Card_cartBtn">
                    Add To Cart {addToCartIcon}
                  </button> */}
                  <button className="shopCategory_Card_cartBtn">
                    {window.innerWidth <= 640 ? addToCartIcon : "Add To Cart"} {window.innerWidth > 640 && addToCartIcon}
                  </button>
                </div>
              </div>
              {index === 1 && <ItemInYourCart />}
            </>
          );
        })}
      </div>
    </div>
  );
};

const ItemInYourCart = () => {
  return (
    <div className="ItemInYourCart_Container">
      <div style={{margin: "20px"}}>
        <p className="ItemInYourCart_heading">Items in your cart</p>
        <div style={{display: "flex", gap: "20px", backgroundColor: "white"}}>
          {/* card 1 static  */}
          <div style={{border: "0.5px solid #B7BAC6", borderRadius: "10px", width: "216px", backgroundColor: "white", overflow: "hidden"}}>
          <div style={{width: "100%", height: "205px", borderRadius: "10px", position: "relative", zIndex: "2",}}>
              <img src={D1} alt="d1" style={{width: "100%", height: "100%", borderRadius: "10px 10px 0 0",}} />
              <span className="heartCartCard">{heartIcon}</span>
              <span className="ImageTag">Saved 150$</span>
            </div>
            <div style={{borderTop: "0.5px solid #B7BAC6", padding: "10px"}}>
              <p className="ItemInYourCart_description">{truncateText("Our Product BOX v340 zabronics mouse with rgb and bollox and mecahnic jeyboard", 70)}</p>
              <p className="ItemInYourCart_Card_ratings">{fillStart}{fillStart}{fillStart}{fillStart}{fillStart} | 4.5</p>
             
              <div style={{display: "flex", alignItems: "baseline", gap: "5px"}}>
                  <p className="ItemInYourCart_Card_price"><span>$</span> 1000</p>
                  <p className="ItemInYourCart_Card_custPrice">You Saved : <span>100</span> </p>
                </div>
            </div>
          </div>
          {/* card 2 static  */}
          <div style={{border: "0.5px solid #B7BAC6", borderRadius: "10px", width: "216px", backgroundColor: "white", overflow: "hidden"}}>
          <div style={{width: "100%", height: "205px", borderRadius: "10px", position: "relative", zIndex: "2",}}>
              <img src={D1} alt="d1" style={{width: "100%", height: "100%", borderRadius: "10px 10px 0 0",}} />
              <span className="heartCartCard">{heartIcon}</span>
              <span className="ImageTag">Saved 150$</span>
            </div>
            <div style={{borderTop: "0.5px solid #B7BAC6", padding: "10px"}}>
              <p className="ItemInYourCart_description">{truncateText("Our Product BOX v340 zabronics mouse with rgb and bollox and mecahnic jeyboard", 70)}</p>
              <p className="ItemInYourCart_Card_ratings">{fillStart}{fillStart}{fillStart}{fillStart}{fillStart} | 4.5</p>
             
              <div style={{display: "flex", alignItems: "baseline", gap: "5px"}}>
                  <p className="ItemInYourCart_Card_price"><span>$</span> 1000</p>
                  <p className="ItemInYourCart_Card_custPrice">You Saved : <span>100</span> </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ShopCategory;
