import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="nftmax-header">
      <div className="container">
        <div className="row g-50">
          <div className="col-12">
            <div className="nftmax-header__inner">
              <div className="nftmax__sicon close-icon d-xl-none">
                <img src="/images/icons/menu-toggle.svg" alt="#" />
              </div>
              <div className="nftmax-header__left">
                <div className="nftmax-header__form">
                  <form className="nftmax-header__form-inner" action="#">
                    <button className="search-btn me-4" type="submit">
                      <img src="/images/icons/search.png" alt="#" />
                    </button>
                    <input
                      type="text"
                      placeholder="Search items, collections..."
                      className="rounded-pill ps-5 ms-3 border border-0"
                    />
                  </form>
                </div>
              </div>
              <div className="nftmax-header__right">
                <div className="nftmax-header__group">
                  <Link to="/deposit" href="">
                    <div className="nftmax-header__amount">
                      <div className="nftmax-amount__icon">
                        <img src="/images/icons/bag-icon.svg" alt="#" />
                      </div>
                      <div className="nftmax-amount__digit">
                        <span>$</span> 234,435.34
                      </div>
                      <div className="nftmax-header__plus">
                        <img
                          src="/images/icons/plus-icon.svg"
                          alt="icon-plus"
                        />
                      </div>
                    </div>
                  </Link>

                  <div className="nftmax-header__group-two">
                    <div className="nftmax-header__right">
                      <div className="nftmax-header__alarm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="24"
                          viewBox="0 0 22 24"
                          fill="none"
                        >
                          <path
                            d="M3.27336 17.6123H18.3622C18.8266 17.6123 19.2841 17.5005 19.6961 17.2863C20.1081 17.072 20.4625 16.7617 20.7292 16.3815C20.9959 16.0014 21.1671 15.5626 21.2283 15.1023C21.2896 14.6419 21.239 14.1736 21.081 13.737L18.3323 6.13763C17.8629 4.44882 16.8532 2.96026 15.4577 1.89961C14.0621 0.838957 12.3576 0.264609 10.6048 0.264404V0.264404C8.78009 0.264376 7.00995 0.886604 5.58662 2.02836C4.16328 3.17011 3.17186 4.76311 2.77605 6.54435L0.511187 13.869C0.377839 14.3015 0.347861 14.7592 0.423665 15.2053C0.49947 15.6515 0.678939 16.0736 0.947633 16.4377C1.21633 16.8018 1.56674 17.0978 1.97069 17.3018C2.37463 17.5058 2.82082 17.6122 3.27336 17.6123Z"
                            fill="#374557"
                          ></path>
                          <path
                            d="M6.19531 19.5398C6.41651 20.6291 7.00751 21.6085 7.86817 22.312C8.72883 23.0154 9.80622 23.3997 10.9178 23.3997C12.0294 23.3997 13.1068 23.0154 13.9674 22.312C14.8281 21.6085 15.4191 20.6291 15.6403 19.5398H6.19531Z"
                            fill="#374557"
                          ></path>
                        </svg>
                        <span className="nftmax-header__count">5</span>

                        <div className="nftmax-balance nftmax-alarm__hover">
                          <h3 className="nftmax-balance__title">
                            Recent Notification
                          </h3>

                          <ul className="nftmax-balance_list">
                            <li>
                              <div className="nftmax-balance-info">
                                <div className="nftmax-balance__img nftmax-alarm__default">
                                  <img
                                    src="/images/icons/notify-1.png"
                                    alt="#"
                                  />
                                </div>
                                <div className="nftmax-alarm__content">
                                  <h4 className="nftmax-balance-name">
                                    Your Account has been created
                                    <strong className="nftmax-balance__second">
                                      successfully done
                                    </strong>
                                  </h4>
                                  <p className="nftmax-alarm__text">
                                    2 min ago
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="nftmax-balance-info">
                                <div className="nftmax-balance__img nftmax-alarm__default">
                                  <img
                                    src="/images/icons/notify-2.png"
                                    alt="#"
                                  />
                                </div>
                                <div className="nftmax-alarm__content">
                                  <h4 className="nftmax-balance-name">
                                    Thank you !
                                    <strong className="nftmax-balance__second">
                                      you made your frast sell
                                    </strong>
                                  </h4>
                                  <p className="nftmax-alarm__text">
                                    2 min ago
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="nftmax-balance-info">
                                <div className="nftmax-balance__img nftmax-alarm__default">
                                  <img
                                    src="/images/icons/notify-3.png"
                                    alt="#"
                                  />
                                </div>
                                <div className="nftmax-alarm__content">
                                  <h4 className="nftmax-balance-name">
                                    Broklan Simons
                                    <strong className="nftmax-balance__second">
                                      Start Following you
                                    </strong>
                                  </h4>
                                  <p className="nftmax-alarm__text">
                                    5 hours ago
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="nftmax-balance-info">
                                <div className="nftmax-balance__img nftmax-alarm__default">
                                  <img
                                    src="/images/icons/notify-4.png"
                                    alt="#"
                                  />
                                </div>
                                <div className="nftmax-alarm__content">
                                  <h4 className="nftmax-balance-name">
                                    Thank you !
                                    <strong className="nftmax-balance__second">
                                      you made your frast sell
                                    </strong>
                                  </h4>
                                  <p className="nftmax-alarm__text">
                                    6 day ago
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="nftmax-balance-info">
                                <div className="nftmax-balance__img nftmax-alarm__default">
                                  <img
                                    src="/images/icons/notify-2.png"
                                    alt="#"
                                  />
                                </div>
                                <div className="nftmax-alarm__content">
                                  <h4 className="nftmax-balance-name">
                                    Your Account has been created
                                    <strong className="nftmax-balance__second">
                                      successfully done
                                    </strong>
                                  </h4>
                                  <p className="nftmax-alarm__text">
                                    7 min ago
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>

                          <div className="nftmax-balance__button">
                            <a
                              href="https://nftmaxl.quomodothemes.website/notification"
                              className="nftmax-balance__sell-all"
                            >
                              See all Notification
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="nftmax-header__author">
                        <div className="nftmax-header__author-img">
                          <img src="/images/icons/profile-pic.png" alt="#" />
                        </div>
                        <div className="nftmax-header__author-content">
                          <h4 className="nftmax-header__author-title">
                            Mr John Wick
                          </h4>
                          <p className="nftmax-header__author-text v1">
                            <a href="#">JohnWick@75</a>
                          </p>
                        </div>

                        <div className="nftmax-balance nftmax-profile__hover">
                          <h3 className="nftmax-balance__title">My Profile</h3>

                          <ul className="nftmax-balance_list">
                            <li>
                              <div className="nftmax-balance-info">
                                <div className="nftmax-balance__img nftmax-profile__img-one">
                                  <img
                                    src="/images/icons/profile-1.png"
                                    alt="#"
                                  />
                                </div>
                                <h4 className="nftmax-balance-name">
                                  <a href="https://nftmaxl.quomodothemes.website/my-profile">
                                    My Profile
                                  </a>
                                </h4>
                              </div>
                            </li>
                            <li>
                              <div className="nftmax-balance-info">
                                <div className="nftmax-balance__img nftmax-profile__img-two">
                                  <img
                                    src="/images/icons/profile-2.png"
                                    alt="#"
                                  />
                                </div>
                                <h4 className="nftmax-balance-name">
                                  <a href="https://nftmaxl.quomodothemes.website/message">
                                    Message
                                  </a>
                                  <span className="nftmax-profile__count">
                                    19
                                  </span>
                                </h4>
                              </div>
                            </li>
                            <li>
                              <div className="nftmax-balance-info">
                                <div className="nftmax-balance__img nftmax-profile__img-three">
                                  <img
                                    src="/images/icons/profile-3.png"
                                    alt="#"
                                  />
                                </div>
                                <h4 className="nftmax-balance-name">
                                  <a href="https://nftmaxl.quomodothemes.website/history">
                                    History
                                  </a>
                                </h4>
                              </div>
                            </li>
                            <li>
                              <div className="nftmax-balance-info">
                                <div className="nftmax-balance__img nftmax-profile__img-four">
                                  <img
                                    src="/images/icons/profile-4.png"
                                    alt="#"
                                  />
                                </div>
                                <h4 className="nftmax-balance-name">
                                  <a href="https://nftmaxl.quomodothemes.website/setting">
                                    Setting
                                  </a>
                                </h4>
                              </div>
                            </li>
                            <li>
                              <div className="nftmax-balance-info">
                                <div className="nftmax-balance__img nftmax-profile__img-five">
                                  <img
                                    src="/images/icons/profile-5.png"
                                    alt="#"
                                  />
                                </div>
                                <h4 className="nftmax-balance-name">
                                  <a href="https://nftmaxl.quomodothemes.website/load-login">
                                    Log Out
                                  </a>
                                </h4>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
