// import { useState } from "react";

// const tabItem = [
//   {
//     id: 1,
//     title: "Explore",
//   },
//   {
//     id: 2,
//     title: "Explore 2",
//   },
//   {
//     id: 3,
//     title: "Explore 3",
//   },
//   {
//     id: 4,
//     title: "Explore 4",
//   },
//   {
//     id: 5,
//     title: "Explore 5",
//   },
// ];

const Tab = () => {
  // const [isActive, setIsActive] = useState(false)
  return (
    <div className="nftmax-marketplace__bar mg-top-50 mg-btm-40">
      <div className="nftmax-marketplace__bar-inner d-flex">
        <div className="list-group nftmax-marketplace__bar-list d-flex flex-row">
          <a className="list-group-item active" href="#id1">
            Explore
          </a>
          <a className="list-group-item" data-bs-toggle="list" href="#id2">
            Featured Artist
          </a>
          <a className="list-group-item" data-bs-toggle="list" href="#id3">
            Open Market
          </a>
          <a className="list-group-item" data-bs-toggle="list" href="#id4">
            Partner Shops
          </a>
          <a className="list-group-item" data-bs-toggle="list" href="#id5">
            Game Assets
          </a>
        </div>

        <div className="nftmax-marketplace__bar-right">
          <div className="nftmax-marketplace__bar-one">
            <form className="nftmax-marketplace__bar-search " action="#">
              <button className="search-btn" type="submit">
                <img src="images/search.png" alt="#" />
              </button>
              <input
                name="s"
                value=""
                type="text"
                placeholder="Search items, collections..."
                className="border-0"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
