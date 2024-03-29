import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="body-bg"
      style={{ backgroundImage: "url('img/body-bg.jpg')" }}
    >
      <section className="nftmax-wc nftmax-wc__full">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-xxl-6 col-lg-6 col-12 nftmax-hidden-rp">
              <div className="nftmax-wc__inner nft-gr-primary">
                <div className="nftmax-wc__logo">
                  <a href="index.html">
                    <img src="/images/logo.png" alt="#" />
                  </a>
                </div>

                <div className="nftmax-wc__middle">
                  <a href="index.html">
                    <img src="/images/welcome-vector.png" alt="#" />
                  </a>
                </div>

                <div className="nftmax-wc__heading">
                  <h2 className="nftmax-wc__title">
                    Welcome to Nftmax <br />
                    Admin Panel
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-12">
              <div className="nftmax-wc__form">
                <div className="nftmax-wc__form-inner nftmax-wc__form-new">
                  <div className="nftmax-wc__heading">
                    <h3
                      className="nftmax-wc__form-title nftmax-wc__form-title__two"
                      style={{
                        backgroundImage: "url('img/heading-vector-2.png')",
                      }}
                    >
                      Daftar Sekarang
                    </h3>
                  </div>

                  <form
                    className="nftmax-wc__form-main"
                    action="https://nftmaxl.quomodothemes.website/register"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="jFuSGFw1Yk0rl4pwF0AK55GwmirW6F77ScV3ZxOY"
                    />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label
                            className="nftmax-wc__form-label"
                            htmlFor="namaLengkap"
                          >
                            Nama Lengkap
                          </label>
                          <div className="form-group__input">
                            <span className="nftmax-wc__icon">
                              <svg
                                width="15"
                                height="20"
                                viewBox="0 0 15 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.8692 11.6667H4.13085C3.03569 11.668 1.98576 12.1036 1.21136 12.878C0.436961 13.6524 0.00132319 14.7023 0 15.7975V20H15.0001V15.7975C14.9987 14.7023 14.5631 13.6524 13.7887 12.878C13.0143 12.1036 11.9644 11.668 10.8692 11.6667Z"
                                  fill="#374557"
                                  fillOpacity="0.6"
                                ></path>
                                <path
                                  d="M7.49953 10C10.261 10 12.4995 7.76145 12.4995 5.00002C12.4995 2.23858 10.261 0 7.49953 0C4.7381 0 2.49951 2.23858 2.49951 5.00002C2.49951 7.76145 4.7381 10 7.49953 10Z"
                                  fill="#374557"
                                  fillOpacity="0.6"
                                ></path>
                              </svg>
                            </span>
                            <input
                              id="namaLengkap"
                              className="nftmax-wc__form-input rounded-fill"
                              type="text"
                              placeholder="Nadiem Makarim"
                              required="required"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label
                            className="nftmax-wc__form-label"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <div className="form-group__input">
                            <span className="nftmax-wc__icon">
                              <svg
                                width="15"
                                height="20"
                                viewBox="0 0 15 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.8692 11.6667H4.13085C3.03569 11.668 1.98576 12.1036 1.21136 12.878C0.436961 13.6524 0.00132319 14.7023 0 15.7975V20H15.0001V15.7975C14.9987 14.7023 14.5631 13.6524 13.7887 12.878C13.0143 12.1036 11.9644 11.668 10.8692 11.6667Z"
                                  fill="#374557"
                                  fillOpacity="0.6"
                                ></path>
                                <path
                                  d="M7.49953 10C10.261 10 12.4995 7.76145 12.4995 5.00002C12.4995 2.23858 10.261 0 7.49953 0C4.7381 0 2.49951 2.23858 2.49951 5.00002C2.49951 7.76145 4.7381 10 7.49953 10Z"
                                  fill="#374557"
                                  fillOpacity="0.6"
                                ></path>
                              </svg>
                            </span>
                            <input
                              className="nftmax-wc__form-input"
                              type="email"
                              placeholder="nadiem@gmail.com"
                              required="required"
                              id="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label
                            className="nftmax-wc__form-label"
                            htmlFor="phoneNumber"
                          >
                            Nomor HP
                          </label>
                          <div className="form-group__input">
                            <span className="nftmax-wc__icon">
                              <svg
                                className="inline"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                              >
                                <path
                                  d="M21.7764 4.12903L14.1237 11.7818C13.2704 12.6329 12.1143 13.1109 10.9091 13.1109C9.7039 13.1109 8.54787 12.6329 7.69457 11.7818L0.0418183 4.12903C0.029091 4.27267 0 4.40267 0 4.54539V15.4545C0.00144351 16.6596 0.480803 17.8149 1.33293 18.6671C2.18506 19.5192 3.34038 19.9985 4.54547 20H17.2728C18.4779 19.9985 19.6332 19.5192 20.4853 18.6671C21.3374 17.8149 21.8168 16.6596 21.8182 15.4545V4.54539C21.8182 4.40267 21.7892 4.27267 21.7764 4.12903Z"
                                  fill="#374557"
                                  fillOpacity="0.6"
                                ></path>
                                <path
                                  d="M12.8389 10.4964L21.1425 2.19182C20.7403 1.52484 20.1729 0.972764 19.4952 0.588847C18.8175 0.204931 18.0523 0.00212789 17.2734 0H4.5461C3.76721 0.00212789 3.00201 0.204931 2.3243 0.588847C1.6466 0.972764 1.07926 1.52484 0.677002 2.19182L8.98066 10.4964C9.493 11.0067 10.1867 11.2932 10.9098 11.2932C11.6329 11.2932 12.3265 11.0067 12.8389 10.4964Z"
                                  fill="#374557"
                                  fillOpacity="0.6"
                                ></path>
                              </svg>
                            </span>
                            <input
                              className="nftmax-wc__form-input"
                              type="number"
                              placeholder="081234567890"
                              required="required"
                              id="phoneNumber"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="nftmax-wc__form-label">
                            Password
                          </label>
                          <div className="form-group__input">
                            <span className="nftmax-wc__icon">
                              <svg
                                className="inline"
                                width="18"
                                height="21"
                                viewBox="0 0 18 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.4467 7.1581V5.94904C14.4467 2.66455 11.7822 0 8.49771 0C5.21323 0 2.54867 2.66455 2.54867 5.94904V7.1581C1.00076 7.83194 -0.000366211 9.36059 -0.000366211 11.0471V16.149C0.0034843 18.494 1.90178 20.3961 4.25059 20.4H12.7525C15.0975 20.3961 16.9996 18.4978 17.0035 16.149V11.051C16.9919 9.36059 15.9908 7.83579 14.4467 7.1581ZM9.34482 14.451C9.34482 14.9207 8.96362 15.3019 8.49386 15.3019C8.0241 15.3019 7.6429 14.9207 7.6429 14.451V12.749C7.6429 12.2793 8.0241 11.8981 8.49386 11.8981C8.96362 11.8981 9.34482 12.2793 9.34482 12.749V14.451ZM12.7448 6.8H4.24289V5.94904C4.24289 3.60023 6.14505 1.69807 8.49386 1.69807C10.8427 1.69807 12.7448 3.60023 12.7448 5.94904V6.8Z"
                                  fill="#374557"
                                  fillOpacity="0.6"
                                ></path>
                              </svg>
                            </span>
                            <input
                              className="nftmax-wc__form-input"
                              placeholder="●●●●●●"
                              id="password-field"
                              type="password"
                              name="password"
                              maxLength="8"
                              required="required"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <div className="nftmax-wc__check-inline">
                            <div className="nftmax-wc__checkbox">
                              <input
                                className="nftmax-wc__form-check"
                                id="checkbox"
                                name="checkbox"
                                type="checkbox"
                              />
                              <label htmlFor="checkbox">
                                {" "}
                                Saya sudah membaca
                                <a href="#">Terms and condition</a> in
                                siapwisuda.com.
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group nftmax-wc__new-bottom">
                          <div className="nftmax-wc__button">
                            <button className="ntfmax-wc__btn" type="submit">
                              Daftar
                            </button>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="nftmax-wc__bottom">
                            <p className="nftmax-wc__text">
                              Sudah punya akun?
                              <Link to="/login">Login disini.</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            ;
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
