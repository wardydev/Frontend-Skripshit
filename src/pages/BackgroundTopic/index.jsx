import { Alert, Layout } from "../../components";
import Form from "./Form";

const BackgroundTopic = () => {
  return (
    <Layout>
      <Alert
        title="Mencari Topik Latar Belakang"
        description="Tambahkan bidang studi, objek, dan minat sesuai dengan kondisi Kamu."
        titleButton="Lihat Tutorial"
        secondButton=""
      />
      <Form />
    </Layout>
  );
};

export default BackgroundTopic;
