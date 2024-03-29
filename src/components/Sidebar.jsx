import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div className="nftmax-smenu">
        <div className="admin-menu">
          <div className="logo">
            <Link to="/">
              <img
                className="nftmax-logo__main"
                src="/images/logo/logo-white.png"
                alt="logo"
              />
            </Link>
            <div className="nftmax__sicon close-icon">
              <img src="/images/icons/menu-toggle.svg" alt="toggle" />
            </div>
          </div>
          <div className="admin-menu__one">
            <h4 className="admin-menu__title nftmax-scolor">Menu</h4>

            <div className="menu-bar">
              <ul className="menu-bar__one">
                <li className={pathname === "/" && "active"}>
                  <Link to="/">
                    <span className="menu-bar__text">
                      <span className="nftmax-menu-icon nftmax-svg-icon__v1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="nftmax-svg-icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="menu-bar__name">Dashboard</span>
                    </span>
                  </Link>
                </li>
                <li className={pathname.includes("/components") && "active"}>
                  <Link to="/components">
                    <span className="menu-bar__text">
                      <span className="nftmax-menu-icon nftmax-svg-icon__v1">
                        <svg
                          className="nftmax-svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 576 512"
                        >
                          <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                        </svg>
                      </span>
                      <span className="menu-bar__name">Components</span>
                    </span>
                  </Link>
                </li>
                <li className={pathname.includes("/title-idea") && "active"}>
                  <Link to="/title-idea">
                    <span className="menu-bar__text">
                      <span className="nftmax-menu-icon nftmax-svg-icon__v1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="nftmax-svg-icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="menu-bar__name">Judul AI</span>
                    </span>
                  </Link>
                </li>
                <li className={pathname.includes("/pdf-summarize") && "active"}>
                  <Link to="/pdf-summarize">
                    <span className="menu-bar__text">
                      <span className="nftmax-menu-icon nftmax-svg-icon__v1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="nftmax-svg-icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                            clipRule="evenodd"
                          />
                          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                        </svg>
                      </span>
                      <span className="menu-bar__name">Rangkuman AI</span>
                    </span>
                  </Link>
                </li>
                <li
                  className={pathname.includes("/backgorund-topic") && "active"}
                >
                  <Link to="/backgorund-topic">
                    <span className="menu-bar__text">
                      <span className="nftmax-menu-icon nftmax-svg-icon__v1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="nftmax-svg-icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="menu-bar__name">AI Latar Belakang</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="admin-menu__two mg-top-50">
            <h4 className="admin-menu__title nftmax-scolor">Settings</h4>

            <div className="menu-bar">
              <ul className="menu-bar__one">
                <li>
                  <Link to="/">
                    <span className="menu-bar__text">
                      <span className="nftmax-menu-icon nftmax-svg-icon__v10">
                        <svg
                          className="nftmax-svg-icon"
                          viewBox="0 0 15 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.8692 11.6667H4.13085C3.03569 11.668 1.98576 12.1036 1.21136 12.878C0.436961 13.6524 0.00132319 14.7023 0 15.7975V20H15.0001V15.7975C14.9987 14.7023 14.5631 13.6524 13.7887 12.878C13.0143 12.1036 11.9644 11.668 10.8692 11.6667Z"></path>
                          <path d="M7.49953 10C10.261 10 12.4995 7.76145 12.4995 5.00002C12.4995 2.23858 10.261 0 7.49953 0C4.7381 0 2.49951 2.23858 2.49951 5.00002C2.49951 7.76145 4.7381 10 7.49953 10Z"></path>
                        </svg>
                      </span>
                      <span className="menu-bar__name">My Profile</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="menu-bar__text">
                      <span className="nftmax-menu-icon nftmax-svg-icon__v11">
                        <svg
                          className="nftmax-svg-icon"
                          viewBox="0 0 14 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0.259306 11.548C0.789972 12.469 1.96681 12.7854 2.88783 12.2548C2.88846 12.2544 2.88906 12.254 2.88969 12.2537L3.17517 12.0888C3.71408 12.5499 4.33352 12.9074 5.00231 13.1435V13.4727C5.00231 14.5356 5.86402 15.3973 6.92698 15.3973C7.98993 15.3973 8.85164 14.5356 8.85164 13.4727V13.1435C9.52052 12.9071 10.14 12.5491 10.6788 12.0875L10.9656 12.253C11.8868 12.7845 13.0645 12.4686 13.5959 11.5473C14.1274 10.6261 13.8115 9.44842 12.8902 8.91694L12.6054 8.75271C12.7336 8.05499 12.7336 7.33974 12.6054 6.64199L12.8902 6.47776C13.8114 5.94628 14.1274 4.76863 13.5959 3.84738C13.0645 2.92615 11.8868 2.61018 10.9656 3.14165L10.6801 3.30654C10.1406 2.84604 9.52076 2.48913 8.85164 2.25378V1.92467C8.85164 0.861709 7.98993 0 6.92698 0C5.86402 0 5.00231 0.861709 5.00231 1.92467V2.25378C4.33343 2.49025 3.71396 2.84823 3.17517 3.30979L2.8884 3.14364C1.96715 2.61213 0.789491 2.92811 0.258013 3.84933C-0.273465 4.77055 0.0424806 5.94824 0.963734 6.47972L1.24858 6.64394C1.12035 7.34166 1.12035 8.05692 1.24858 8.75467L0.963734 8.9189C0.0450368 9.45179 -0.269887 10.6272 0.259306 11.548ZM6.92698 5.13245C8.34425 5.13245 9.49319 6.28139 9.49319 7.69866C9.49319 9.11594 8.34425 10.2649 6.92698 10.2649C5.5097 10.2649 4.36077 9.11594 4.36077 7.69866C4.36077 6.28139 5.5097 5.13245 6.92698 5.13245Z"></path>
                        </svg>
                      </span>
                      <span className="menu-bar__name">Settings</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="logout-button pb-4">
            <a
              className="nftmax-btn primary"
              data-bs-toggle="modal"
              data-bs-target="#logout_modal"
            >
              <div className="logo-button__icon">
                <img src="/images/icons/logout.png" alt="logout" />
              </div>
              <span className="menu-bar__name">Signout</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
