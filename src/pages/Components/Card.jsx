const Card = () => {
  return (
    <div className="trending-action__single p-4">
      <div className="trending-action__body">
        <div className="my-3">
          <img src="/images/nft-table-img1.png" alt="#" width={50} />
        </div>
        <h2 className="trending-action__title">
          <a href="active-bids.html" className="link-underline-primary">
            Blog Ideas
          </a>
        </h2>
        <p>
          Simplify your content creation process with our AI-powered blog title
          generator
        </p>
      </div>
    </div>
  );
};

export default Card;
