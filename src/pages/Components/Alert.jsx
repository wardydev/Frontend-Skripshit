const Alert = () => {
  return (
    <div className="mg-top-40">
      <h2>Component Alert & Header</h2>
      <div className="welcome-cta">
        <div className="welcome-cta__heading">
          <h2 className="welcome-cta__title">Alert title heading</h2>
          <p className="welcome-cta__text nftmax-lspacing">
            Buy and sell NFTs from the world’s top artists
          </p>
        </div>
        <div className="welcome-cta__button">
          <a
            href="https://nftmaxl.quomodothemes.website/upload-product"
            className="nftmax-btn nftmax-btn__bordered bg radius"
          >
            Upload Products
          </a>
          <a
            href="https://nftmaxl.quomodothemes.website/market-place"
            className="nftmax-btn trs-white bl-color"
          >
            View Art Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Alert;
