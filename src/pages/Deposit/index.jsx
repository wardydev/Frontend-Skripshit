import { Alert, Layout } from "../../components";

const Deposit = () => {
  return (
    <Layout>
      <div className="row justify-content-center">
        <div className="col-10 p-0">
          <Alert
            title="Deposit"
            description="Halo wardy, sebelum membuat permintaan deposit disarankan untuk membaca Informasi terlebih dahulu. Terimakasih."
            titleButton="Lihat tutorial"
            secondButton="Preview"
          />
        </div>
      </div>
      <div className="row mt-5 justify-content-center gap-4">
        <div className="col-7">
          <div>
            <h3 className="nftmax-table__title mb-0">Deposit</h3>
            <div className=" mt-3">
              <label htmlFor="nominal" className="nftmax__item-label  fs-6">
                Metode Pembayaran
              </label>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="bg-transparent py-3 px-4 rounded user-select-none"
                  style={{
                    fontSize: 12,
                    border: "1.75px solid #5356FB",
                    color: "#5356FB",
                  }}
                >
                  QRIS [ALL PAYMENT]
                </button>
                <button
                  className="bg-transparent py-3 px-4 rounded user-select-none"
                  style={{
                    fontSize: 12,
                    border: "1.75px solid #a5a5a5",
                    color: "#a5a5a5",
                  }}
                >
                  Others
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded mt-3">
            <div>
              <div className="mb-3 d-flex gap-2">
                <button
                  className="bg-transparent py-2 px-3 rounded user-select-none"
                  style={{
                    fontSize: 10,
                    border: "1.75px solid #F03AF8",
                    color: "#F03AF8",
                  }}
                >
                  Rp 25.000
                </button>
                <button
                  className="bg-transparent py-2 px-3 rounded user-select-none"
                  style={{
                    fontSize: 10,
                    border: "1.75px solid #b8b8b8",
                    color: "#b8b8b8",
                  }}
                >
                  Rp 50.000
                </button>
                <button
                  className="bg-transparent py-2 px-3 rounded user-select-none"
                  style={{
                    fontSize: 10,
                    border: "1.75px solid #b8b8b8",
                    color: "#b8b8b8",
                  }}
                >
                  Rp 100.000
                </button>
                <button
                  className="bg-transparent py-2 px-3 rounded user-select-none"
                  style={{
                    fontSize: 10,
                    border: "1.75px solid #b8b8b8",
                    color: "#b8b8b8",
                  }}
                >
                  Rp 200.000
                </button>
              </div>
              <div className="nftmax__item-form--group">
                <label htmlFor="nominal" className="nftmax__item-label fs-6">
                  Nominal
                </label>
                <input
                  id="nominal"
                  className="nftmax__item-input"
                  type="number"
                  placeholder="50.000"
                  required="required"
                />
              </div>
            </div>
            <div className="mt-3">
              <a
                href=""
                className="nftmax-btn nftmax-btn__large nftmax-btn__bordered bg radius"
              >
                Buat Deposit
              </a>
            </div>
          </div>
          <div className="bg-white p-4 rounded mt-3">
            <h3>INFORMASI</h3>
            <p>
              Permintaan Deposit Otomatis akan diverifikasi otomatis oleh
              sistem, setelah melakukan pembayaran Anda hanya perlu menunggu
              selama 3 sampai 10 menit agar permintaan deposit Anda diterima
              oleh sistem, Anda tidak perlu melakukan verifikasi ke Admin,
              kecuali permintaan deposit Anda tidak diterima lebih dari 10 menit
              setelah melakukan pembayaran.
            </p>
            <ul className="list-group">
              <li className="list-group-item">Pilih methode pembayaran.</li>
              <li className="list-group-item">
                Masukkan jumlah deposit yang diinginkan.
              </li>
              <li className="list-group-item">
                Klik Submit untuk membuat permintaan deposit.
              </li>
              <li className="list-group-item">
                Silahkan transfer uang sesuai nominal yang diberikan ke nomor
                rekening yang ditampilkan setelah Submit.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-3">
          <div>
            <h3 className="nftmax-table__title mb-0">Detail Payment</h3>
          </div>
          <div className="bg-white rounded p-4 mt-3 text-center">
            <h3 htmlFor="nominal" className="nftmax__item-label  fs-6">
              QR Code
            </h3>
            <img
              src="https://seeklogo.com/images/Q/qr-code-logo-27ADB92152-seeklogo.com.png"
              alt="qris"
              style={{ width: "100%" }}
            />
          </div>
          <div className="bg-white p-4  mt-3 rounded">
            <table className="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>ID Deposit</td>
                  <td>12712</td>
                </tr>
                <tr>
                  <td>Tanggal</td>
                  <td>20 Feb 2020</td>
                </tr>
                <tr>
                  <td>Jumlah</td>
                  <td>Rp 120.000</td>
                </tr>
                <tr>
                  <td>Metode Pembayaran</td>
                  <td>QRIS [ALL PAYMENT]</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>
                    <button className="btn btn-warning btn-sm">Pending</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deposit;
