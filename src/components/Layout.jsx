import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div
      className="body-bg"
      style={{ backgroundImage: "url('/images/body-bg.jpg')" }}
    >
      <Sidebar />
      <Header />

      <section className="nftmax-adashboard nftmax-show">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-12 nftmax-main__column">
              <div className="nftmax-body">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
