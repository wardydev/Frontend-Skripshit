import Chart from "react-apexcharts";
import { Layout } from "../components";

const series = [57];

const options = {
  chart: {
    type: "radialBar",
    offsetY: -20,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#fff",
        strokeWidth: "100%",
        margin: 5,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: "24px",
          color: "#fff",
          formatter: (val) => {
            return `Tokens
            ${val}%`;
          },
        },
      },
    },
  },
  grid: {
    padding: {
      top: -10,
    },
  },
  fill: {
    colors: "#F539F8",
  },
  labels: ["Average Results"],
};

const Dashboard = () => {
  return (
    <Layout>
      <div
        className="dashboard-banner nftmax-bg-cover mg-top-40"
        style={{ backgroundImage: "url('images/banner-bg.png')" }}
      >
        <div className="row">
          <div className="col-12">
            <div className="dashboard-banner__main">
              <div className="dashboard-banner__column dashboard-banner__column--one px-5 py-2">
                <div className="dashboard-banner__content">
                  <h2 className="dashboard-banner__title nftmax-font-regular nftmax-lspacing">
                    Overview
                  </h2>
                </div>
                <div className="nftmax-header__author nftmax-header__author-two">
                  <div className="nftmax-header__author-img">
                    <img src="images/profile-pic-2.png" alt="#" />
                  </div>
                  <div className="nftmax-header__author-content">
                    <h4 className="nftmax-header__author-title nftmax-header__author-title--two nftmax-lspacing">
                      Hairul Wardi
                    </h4>
                    <p className="nftmax-header__author-text nftmax-header__author-text--two">
                      <a
                        href="#"
                        className="nftmax-font-regular nftmax-lspacing"
                      >
                        wardydev@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="dashboard-banner__bids">
                  <div className="dashboard-banner__bid">
                    <div className="dashboard-banner__group">
                      <p className="dashboard-banner__group-small">
                        Jumlah SKS
                      </p>
                      <h3 className="dashboard-banner__group-title">21 SKS</h3>
                      <p className="dashboard-banner__group-small">
                        17100 <span>Tokens</span>
                      </p>
                    </div>

                    <div className="dashboard-banner__middle-border"></div>

                    <div className="dashboard-banner__group">
                      <p className="dashboard-banner__group-small">
                        Total Generate
                      </p>
                      <h3
                        className="dashboard-banner__group-title"
                        data-countdown="2023/12/26"
                      >
                        371
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="dashboard-banner__button">
                  <div className="dashboard-banner__single-btn dashboard-banner__main-btn">
                    <a
                      href="https://nftmaxl.quomodothemes.website/active-bids"
                      className="nftmax-btn nftmax-btn__secondary radius"
                    >
                      Tambah SKS
                    </a>
                  </div>
                  <div className="dashboard-banner__single-btn">
                    <a
                      href="https://nftmaxl.quomodothemes.website/market-place"
                      className="nftmax-btn trs-white"
                    >
                      Lihat Harga
                    </a>
                  </div>
                </div>
              </div>
              <div className="dashboard-banner__column dashboard-banner__column--two">
                <div className="dashboard-banner__slider">
                  <Chart options={options} series={series} type="radialBar" />
                  <div className="d-flex justify-content-center gap-4">
                    <div className="d-flex align-items-center gap-2">
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          backgroundColor: "#F539F8",
                        }}
                        className="rounded-circle"
                      ></div>
                      <span className="text-white">Tersisa</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          backgroundColor: "#fff",
                        }}
                        className="rounded-circle"
                      ></div>
                      <span className="text-white">Terpakai</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-info mg-top-20">
        <div className="nftmax-funfact px-4">
          <div className="nftmax-funfact__single">
            <div className="nftmax-funfact__icon">
              <img
                className="nftmax-funfact__img"
                src="images/funfact-icon.png"
                alt="#"
              />
            </div>
            <div className="nftmax-funfact__content">
              <h3 className="nftmax-funfact__title">
                <b className="number">43</b>
                <span>K</span>
              </h3>
              <p className="nftmax-funfact__text">Artworks</p>
            </div>
          </div>

          <div className="nftmax-funfact__single">
            <div className="nftmax-funfact__icon">
              <img
                className="nftmax-funfact__img nftmax-funfact__img--v2"
                src="images/funfact-icon-2.png"
                alt="#"
              />
            </div>
            <div className="nftmax-funfact__content">
              <h3 className="nftmax-funfact__title">
                <b className="number">40</b>
                <span>K</span>
              </h3>
              <p className="nftmax-funfact__text">Artworks</p>
            </div>
          </div>

          <div className="nftmax-funfact__single">
            <div className="nftmax-funfact__icon">
              <img
                className="nftmax-funfact__img nftmax-funfact__img--v3"
                src="images/funfact-icon-3.png"
                alt="#"
              />
            </div>
            <div className="nftmax-funfact__content">
              <h3 className="nftmax-funfact__title">
                <b className="number">30</b>
                <span>K</span>
              </h3>
              <p className="nftmax-funfact__text">Artworks</p>
            </div>
          </div>

          <div className="nftmax-funfact__single nftmax-funfact__single--v4">
            <div className="nftmax-funfact__icon">
              <img
                className="nftmax-funfact__img nftmax-funfact__img--v4"
                src="images/funfact-icon-4.png"
                alt="#"
              />
            </div>
            <div className="nftmax-funfact__content">
              <h3 className="nftmax-funfact__title">
                <b className="number">3</b>
                <span>K</span>
              </h3>
              <p className="nftmax-funfact__text">Artworks</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
