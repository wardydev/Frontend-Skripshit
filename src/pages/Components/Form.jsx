const Form = () => {
  return (
    <div className="mg-top-40">
      <h2>Component Writer Editor Template</h2>

      <div className="nftmax__item">
        <div className="nftmax__item-heading">
          <h2 className="nftmax__item-title nftmax__item-title--psingle">
            Image,Video,Audio or 3D Model
          </h2>
          <p className="nftmax__item-text nftmax__item-text--single">
            File types suppported: JPG, PNG, GIP, SVG, MP4, MP3, WEBM, OGG, GLB,
            GLTF. Max Size : 100 MB
          </p>
        </div>
        <form className="form" action="#">
          <div className="row">
            <div className="col-12">
              <div className="nftmax__item-box">
                <div className="row nftmax-pcolumn">
                  <div className="col-xxl-5 col-lg-5 col-12 nftmax-pcolumn__one pb-4">
                    <div className="nftmax__file-top mb-4">
                      <div className="nftmax__file-upload">
                        <div className="upload-files">
                          <div className="body" id="drop">
                            <img
                              className="nftmax__file-upload--img"
                              src="images/upload.png"
                              alt=""
                            />
                            <p className="pointer-none nftmax__file-text">
                              <b>
                                Drop files to upload <br />
                                or
                                <a href="" id="triggerFile">
                                  Browse
                                </a>
                              </b>
                            </p>
                            <input type="file" multiple="multiple" />
                          </div>
                          <div className="nftmax__file-updated">
                            <div className="divider">
                              <span>
                                <ar>FILES</ar>
                              </span>
                            </div>
                            <div className="list-files"></div>
                            <button className="importar">UPDATE FILES</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nftmax__item-form--group">
                      <label className="nftmax__item-label">Item Name</label>
                      <input
                        className="nftmax__item-input"
                        type="text"
                        placeholder="RaidParty Fighters"
                        required="required"
                      />
                    </div>
                    <div className="nftmax__item-form--group">
                      <label className="nftmax__item-label">Exter link</label>
                      <input
                        className="nftmax__item-input"
                        type="url"
                        placeholder="https:yoursite.lo/imte/item_name123"
                        required="required"
                      />
                    </div>

                    <div className="nftmax__item-form--group">
                      <label className="nftmax__item-label">Description</label>
                      <textarea
                        className="nftmax__item-input nftmax__item-textarea"
                        type="url"
                        placeholder="provide a detailed description of your item."
                        required="required"
                      ></textarea>
                    </div>
                    <div>
                      <a
                        href=""
                        className="nftmax-btn nftmax-btn__large nftmax-btn__bordered bg radius"
                      >
                        Generate
                      </a>
                    </div>
                  </div>
                  <div className="col-xxl-7 col-lg-7 col-12 nftmax-pcolumn__two">
                    <div
                      className="nftmax__item-form--main"
                      style={{ minHeight: "100%" }}
                    >
                      <h2>CKEditor</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nftmax__item-button--group">
                <button
                  className="nftmax__item-button--single nftmax__item-button--cancel"
                  data-bs-toggle="modal"
                  data-bs-target="#cancel_modal"
                >
                  Cancel
                </button>
                <button
                  className="nftmax__item-button--single nftmax-btn nftmax-btn__bordered--plus radius nftmax-item__btn"
                  data-bs-toggle="modal"
                  data-bs-target="#preview_modal"
                >
                  <span className="ntfmax__btn-textgr">Preview</span>
                </button>
                <button
                  className="nftmax__item-button--single nftmax-btn nftmax-btn__bordered bg radius nftmax-item__btn"
                  type="submit"
                >
                  Create Now
                </button>

                <div
                  className="nftmax-preview__modal modal fade"
                  id="preview_modal"
                  aria-labelledby="previewModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog nftmax-preview__modal-preview">
                    <div
                      className="modal-content nftmax-preview__modal-content"
                      style={{ backgroundImage: "url(img/body-bg.jpg)" }}
                    >
                      <div className="modal-header nftmax__modal__header">
                        <h4
                          className="modal-title nftmax-preview__modal-title"
                          id="previewModalLabel"
                        >
                          Item Preview
                        </h4>
                        <button
                          type="button"
                          className="nftmax-preview__modal--close btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body nftmax-modal__body">
                        <div className="trending-action__single">
                          <div className="trending-action__head">
                            <div className="trending-action__button">
                              <a className="trending-action__btn heart-icon">
                                <i className="fa-solid fa-heart"></i>
                              </a>
                              <a className="trending-action__btn">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                              </a>
                            </div>
                            <img src="images/trending-img-1.png" alt="#" />
                          </div>

                          <div className="trending-action__body">
                            <div className="trending-action__author-meta">
                              <img src="images/author-pic.png" alt="#" />
                              <p className="trending-action__author-name">
                                Owned by
                                <a href="profile.html">Bilout</a>
                              </p>
                            </div>
                            <h2 className="trending-action__title">
                              <a href="#">Interconnected Planes</a>
                            </h2>
                            <div className="dashboard-banner__bid dashboard-banner__bid-v2">
                              <div className="dashboard-banner__group dashboard-banner__group-v2">
                                <p className="dashboard-banner__group-small">
                                  Current Bid
                                </p>
                                <h3 className="dashboard-banner__group-title">
                                  75,320 ETH
                                </h3>
                              </div>

                              <div className="dashboard-banner__group dashboard-banner__group-v2">
                                <p className="dashboard-banner__group-small">
                                  Remaing Time
                                </p>
                                <h3
                                  className="dashboard-banner__group-title"
                                  id="CountDown"
                                  data-countdown="2023/09/01"
                                ></h3>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="nftmax__item-button--group">
                          <button
                            className="nftmax__item-button--single nftmax__item-button--cancel"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            className="nftmax__item-button--single nftmax-btn nftmax-btn__bordered bg radius"
                            type="submit"
                          >
                            Create Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="nftmax-preview__modal modal fade"
                  id="cancel_modal"
                  aria-labelledby="CancelModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog nftmax-close__modal-close">
                    <div className="modal-content nftmax-preview__modal-content">
                      <div className="modal-header nftmax__modal__header">
                        <h4
                          className="modal-title nftmax-preview__modal-title"
                          id="CancelModalLabel"
                        >
                          Confirm
                        </h4>
                        <button
                          type="button"
                          className="nftmax-preview__modal--close btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body nftmax-modal__body modal-body nftmax-close__body">
                        <div className="nftmax-preview__close">
                          <div className="nftmax-preview__close-img">
                            <img src="images/close.png" alt="#" />
                          </div>
                          <h2 className="nftmax-preview__close-title">
                            Are you sure you want to Navigate away from this
                            page?
                          </h2>
                          <div className="nftmax__item-button--group">
                            <button
                              className="nftmax__item-button--single nftmax-btn nftmax-btn__bordered bg radius"
                              type="submit"
                            >
                              Yes Delete
                            </button>
                            <button
                              className="nftmax__item-button--single nftmax-btn nftmax-btn__bordered--plus radius"
                              type="submit"
                            >
                              <span
                                className="ntfmax__btn-textgr"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                Not now
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
