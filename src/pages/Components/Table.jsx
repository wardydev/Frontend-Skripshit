const Table = () => {
  return (
    <div className="mg-top-40">
      <h2>Component Table</h2>

      <div className="nftmax-table">
        <div className="nftmax-table__heading">
          <h3 className="nftmax-table__title mb-0">
            Table Heading
            <span className="nftmax-table__badge">435</span>
          </h3>
          <ul
            className="nav nav-tabs nftmax-dropdown__list"
            id="nav-tab"
            role="tablist"
          >
            <li className="nav-item dropdown">
              <a
                className="nftmax-sidebar_btn nftmax-heading__tabs nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                All Categories
                <span className="nftmax-table__arrow--icon">
                  <svg
                    width="13"
                    height="6"
                    viewBox="0 0 13 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.7"
                      d="M12.4124 0.247421C12.3327 0.169022 12.2379 0.106794 12.1335 0.0643287C12.0291 0.0218632 11.917 0 11.8039 0C11.6908 0 11.5787 0.0218632 11.4743 0.0643287C11.3699 0.106794 11.2751 0.169022 11.1954 0.247421L7.27012 4.07837C7.19045 4.15677 7.09566 4.219 6.99122 4.26146C6.88678 4.30393 6.77476 4.32579 6.66162 4.32579C6.54848 4.32579 6.43646 4.30393 6.33202 4.26146C6.22758 4.219 6.13279 4.15677 6.05312 4.07837L2.12785 0.247421C2.04818 0.169022 1.95338 0.106794 1.84895 0.0643287C1.74451 0.0218632 1.63249 0 1.51935 0C1.40621 0 1.29419 0.0218632 1.18975 0.0643287C1.08531 0.106794 0.990517 0.169022 0.910844 0.247421C0.751218 0.404141 0.661621 0.616141 0.661621 0.837119C0.661621 1.0581 0.751218 1.2701 0.910844 1.42682L4.84468 5.26613C5.32677 5.73605 5.98027 6 6.66162 6C7.34297 6 7.99647 5.73605 8.47856 5.26613L12.4124 1.42682C12.572 1.2701 12.6616 1.0581 12.6616 0.837119C12.6616 0.616141 12.572 0.404141 12.4124 0.247421Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    ></path>
                  </svg>
                </span>
              </a>
              <ul className="dropdown-menu nftmax-sidebar_dropdown">
                <a
                  className="dropdown-item list-group-item"
                  data-bs-toggle="tab"
                  data-bs-target="#table_1"
                  role="tab"
                >
                  Categories V1
                </a>
                <a
                  className="dropdown-item list-group-item"
                  data-bs-toggle="tab"
                  data-bs-target="#table_2"
                  role="tab"
                >
                  Categories V2
                </a>
                <a
                  className="dropdown-item list-group-item"
                  data-bs-toggle="tab"
                  data-bs-target="#table_3"
                  role="tab"
                >
                  Categories V3
                </a>
              </ul>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="table_1"
            role="tabpanel"
            aria-labelledby="table_1"
          >
            <table
              id="nftmax-table__main"
              className="nftmax-table__main nftmax-table__main-v1"
            >
              <thead className="nftmax-table__head">
                <tr>
                  <th className="nftmax-table__column-1 nftmax-table__h1">
                    All Products
                  </th>
                  <th className="nftmax-table__column-2 nftmax-table__h2">
                    Value
                  </th>
                  <th className="nftmax-table__column-3 nftmax-table__h3">
                    USD
                  </th>
                  <th className="nftmax-table__column-4 nftmax-table__h4">
                    24H%
                  </th>
                  <th className="nftmax-table__column-5 nftmax-table__h5">
                    Bids
                  </th>
                  <th className="nftmax-table__column-6 nftmax-table__h6">
                    Time
                  </th>
                  <th className="nftmax-table__column-7 nftmax-table__h7">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="nftmax-table__body">
                <tr>
                  <td className="nftmax-table__column-1 nftmax-table__data-1">
                    <div className="nftmax-table__product">
                      <div className="nftmax-table__product-img">
                        <img src="/images/nft-table-img1.png" alt="#" />
                      </div>
                      <div className="nftmax-table__product-content">
                        <h4 className="nftmax-table__product-title">
                          Mullican Computer Joy
                        </h4>
                        <p className="nftmax-table__product-desc">
                          Owned by <a href="#"> Xoeyam</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="nftmax-table__column-2 nftmax-table__data-2">
                    <div className="nftmax-table__amount nftmax-table__text-one">
                      <img src="/images/eth-icon.png" alt="#" />
                      <span className="nftmax-table__text">7473 ETH</span>
                    </div>
                  </td>
                  <td className="nftmax-table__column-3 nftmax-table__data-3">
                    <div className="nftmax-table__amount nftmax-table__text-two">
                      <img src="/images/usd-icon.png" alt="#" />
                      <span className="nftmax-table__text">6392.99$</span>
                    </div>
                  </td>
                  <td className="nftmax-table__column-4 nftmax-table__data-4">
                    <p className="nftmax-table__text nftmax-table__up-down nftmax-rcolor">
                      -24.75 (11.5%)
                    </p>
                  </td>
                  <td className="nftmax-table__column-5 nftmax-table__data-5">
                    <p className="nftmax-table__text nftmax-table__bid-text">
                      343
                    </p>
                  </td>
                  <td className="nftmax-table__column-6 nftmax-table__data-6">
                    <p className="nftmax-table__text nftmax-table__time">
                      2 Hours 1 min 30s
                    </p>
                  </td>
                  <td className="nftmax-table__column-7 nftmax-table__data-7">
                    <div className="nftmax-table__status nftmax-sbcolor">
                      Active
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="nftmax-table__column-1 nftmax-table__data-1">
                    <div className="nftmax-table__product">
                      <div className="nftmax-table__product-img">
                        <img src="/images/nft-table-img1.png" alt="#" />
                      </div>
                      <div className="nftmax-table__product-content">
                        <h4 className="nftmax-table__product-title">
                          View Card by Jeff Davis
                        </h4>
                        <p className="nftmax-table__product-desc">
                          Owned by <a href="#"> John Cartl</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="nftmax-table__column-2 nftmax-table__data-2">
                    <div className="nftmax-table__amount nftmax-table__text-one">
                      <img src="/images/eth-icon.png" alt="#" />
                      <span className="nftmax-table__text">7473 ETH</span>
                    </div>
                  </td>
                  <td className="nftmax-table__column-3 nftmax-table__data-3">
                    <div className="nftmax-table__amount nftmax-table__text-two">
                      <img src="/images/usd-icon.png" alt="#" />
                      <span className="nftmax-table__text">6392.99$</span>
                    </div>
                  </td>
                  <td className="nftmax-table__column-4 nftmax-table__data-4">
                    <p className="nftmax-table__text nftmax-table__up-down nftmax-rcolor">
                      -24.75 (11.5%)
                    </p>
                  </td>
                  <td className="nftmax-table__column-5 nftmax-table__data-5">
                    <p className="nftmax-table__text nftmax-table__bid-text">
                      343
                    </p>
                  </td>
                  <td className="nftmax-table__column-6 nftmax-table__data-6">
                    <p className="nftmax-table__text nftmax-table__time">
                      2 Hours 1 min 30s
                    </p>
                  </td>
                  <td className="nftmax-table__column-7 nftmax-table__data-7">
                    <div className="nftmax-table__status nftmax-gbcolor">
                      Completed
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="nftmax-table__column-1 nftmax-table__data-1">
                    <div className="nftmax-table__product">
                      <div className="nftmax-table__product-img">
                        <img src="/images/nft-table-img1.png" alt="#" />
                      </div>
                      <div className="nftmax-table__product-content">
                        <h4 className="nftmax-table__product-title">
                          Mullican Computer Joy
                        </h4>
                        <p className="nftmax-table__product-desc">
                          Owned by <a href="#"> Twillor swift</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="nftmax-table__column-2 nftmax-table__data-2">
                    <div className="nftmax-table__amount nftmax-table__text-one">
                      <img src="/images/eth-icon.png" alt="#" />
                      <span className="nftmax-table__text">7473 ETH</span>
                    </div>
                  </td>
                  <td className="nftmax-table__column-3 nftmax-table__data-3">
                    <div className="nftmax-table__amount nftmax-table__text-two">
                      <img src="/images/usd-icon.png" alt="#" />
                      <span className="nftmax-table__text">6392.99$</span>
                    </div>
                  </td>
                  <td className="nftmax-table__column-4 nftmax-table__data-4">
                    <p className="nftmax-table__text nftmax-table__up-down nftmax-rcolor">
                      -24.75 (11.5%)
                    </p>
                  </td>
                  <td className="nftmax-table__column-5 nftmax-table__data-5">
                    <p className="nftmax-table__text nftmax-table__bid-text">
                      343
                    </p>
                  </td>
                  <td className="nftmax-table__column-6 nftmax-table__data-6">
                    <p className="nftmax-table__text nftmax-table__time">
                      2 Hours 1 min 30s
                    </p>
                  </td>
                  <td className="nftmax-table__column-7 nftmax-table__data-7">
                    <div className="nftmax-table__status nftmax-sbcolor">
                      Active
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="nftmax-table__column-1 nftmax-table__data-1">
                    <div className="nftmax-table__product">
                      <div className="nftmax-table__product-img">
                        <img src="/images/nft-table-img1.png" alt="#" />
                      </div>
                      <div className="nftmax-table__product-content">
                        <h4 className="nftmax-table__product-title">
                          View Card by Jeff Davis
                        </h4>
                        <p className="nftmax-table__product-desc">
                          Owned by <a href="#"> Mr Bradman</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="nftmax-table__column-2 nftmax-table__data-2">
                    <div className="nftmax-table__amount nftmax-table__text-one">
                      <img src="/images/eth-icon.png" alt="#" />
                      <span className="nftmax-table__text">7473 ETH</span>
                    </div>
                  </td>
                  <td className="nftmax-table__column-3 nftmax-table__data-3">
                    <div className="nftmax-table__amount nftmax-table__text-two">
                      <img src="/images/usd-icon.png" alt="#" />
                      <span className="nftmax-table__text">6392.99$</span>
                    </div>
                  </td>
                  <td className="nftmax-table__column-4 nftmax-table__data-4">
                    <p className="nftmax-table__text nftmax-table__up-down nftmax-rcolor">
                      -24.75 (11.5%)
                    </p>
                  </td>
                  <td className="nftmax-table__column-5 nftmax-table__data-5">
                    <p className="nftmax-table__text nftmax-table__bid-text">
                      343
                    </p>
                  </td>
                  <td className="nftmax-table__column-6 nftmax-table__data-6">
                    <p className="nftmax-table__text nftmax-table__time">
                      2 Hours 1 min 30s
                    </p>
                  </td>
                  <td className="nftmax-table__column-7 nftmax-table__data-7">
                    <div className="nftmax-table__status nftmax-gbcolor">
                      Completed
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="nftmax-table__column-1 nftmax-table__data-1">
                    <div className="nftmax-table__product">
                      <div className="nftmax-table__product-img">
                        <img src="/images/nft-table-img1.png" alt="#" />
                      </div>
                      <div className="nftmax-table__product-content">
                        <h4 className="nftmax-table__product-title">
                          Mullican Computer Joy
                        </h4>
                        <p className="nftmax-table__product-desc">
                          Owned by <a href="#"> John wick</a>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="nftmax-table__column-2 nftmax-table__data-2">
                    <div className="nftmax-table__amount nftmax-table__text-one">
                      <img src="/images/eth-icon.png" alt="#" />
                      <span className="nftmax-table__text">7473 ETH</span>
                    </div>
                  </td>
                  <td className="nftmax-table__column-3 nftmax-table__data-3">
                    <div className="nftmax-table__amount nftmax-table__text-two">
                      <img src="/images/usd-icon.png" alt="#" />
                      <span className="nftmax-table__text">6392.99$</span>
                    </div>
                  </td>
                  <td className="nftmax-table__column-4 nftmax-table__data-4">
                    <p className="nftmax-table__text nftmax-table__up-down nftmax-rcolor">
                      -24.75 (11.5%)
                    </p>
                  </td>
                  <td className="nftmax-table__column-5 nftmax-table__data-5">
                    <p className="nftmax-table__text nftmax-table__bid-text">
                      343
                    </p>
                  </td>
                  <td className="nftmax-table__column-6 nftmax-table__data-6">
                    <p className="nftmax-table__text nftmax-table__time">
                      2 Hours 1 min 30s
                    </p>
                  </td>
                  <td className="nftmax-table__column-7 nftmax-table__data-7">
                    <div className="nftmax-table__status nftmax-sbcolor">
                      Active
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
