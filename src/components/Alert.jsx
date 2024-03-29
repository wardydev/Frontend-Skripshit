import { useMemo } from "react";

const Alert = ({ title, description, titleButton, secondButton }) => {
  const isSecondButton = useMemo(
    () => (secondButton.length !== 0 ? true : false),
    [secondButton]
  );

  return (
    <div className="mg-top-40">
      <div className="welcome-cta">
        <div className="welcome-cta__heading">
          <h2 className="welcome-cta__title">{title}</h2>
          <p className="welcome-cta__text nftmax-lspacing">{description}</p>
        </div>
        <div className="welcome-cta__button">
          <a
            href="https://nftmaxl.quomodothemes.website/upload-product"
            className="nftmax-btn nftmax-btn__bordered bg radius"
          >
            {titleButton}
          </a>
          {isSecondButton && (
            <a
              href="https://nftmaxl.quomodothemes.website/market-place"
              className="nftmax-btn trs-white bl-color"
            >
              View Art Work
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
