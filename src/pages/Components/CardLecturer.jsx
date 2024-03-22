const CardLecturer = () => {
  return (
    <div className="trending-action__single">
      <div className="trending-action__head">
        <img src="images/trending-img-1.png" alt="#" />
      </div>

      <div className="trending-action__body">
        <div className="trending-action__author-meta">
          <div className="trending-action__author-img">
            <img src="images/author-pic.png" alt="#" />
          </div>
        </div>
        <h2 className="trending-action__title">
          <a href="active-bids.html">Pak Gunawan</a>
        </h2>
        <div className="dashboard-banner__bid dashboard-banner__bid-v2">
          <div className="dashboard-banner__group dashboard-banner__group-v2">
            <p className="dashboard-banner__group-small">Bidang</p>
            <h3 className="dashboard-banner__group-title">Hukum</h3>
          </div>

          <div className="dashboard-banner__middle-border"></div>

          <div className="dashboard-banner__group dashboard-banner__group-v2">
            <p className="dashboard-banner__group-small">Expertise</p>
            <h3
              className="dashboard-banner__group-title"
              data-countdown="@broklinslam_75"
            >
              300
            </h3>
          </div>
        </div>
      </div>
      <div className="dashboard-banner__button trending-action__bottom">
        <a
          href="https://nftmaxl.quomodothemes.website/active-bids"
          className="nftmax-btn nftmax-btn__secondary radius"
        >
          Chat Sekarang
        </a>
        <a
          href="https://nftmaxl.quomodothemes.website/market-place"
          className="nftmax-btn trs-white"
        >
          Lihat Profile
        </a>
      </div>
    </div>
  );
};

export default CardLecturer;
