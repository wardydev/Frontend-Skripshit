import { Alert, Layout } from "../../components";
import Form from "./Form";

const TitleIdeas = () => {
  return (
    <Layout>
      <Alert
        title="Mencari Ide Judul 🤪"
        description="Tambahkan bidang studi, objek, dan minat sesuai dengan kondisi Kamu."
        titleButton="Lihat Tutorial"
        secondButton=""
      />
      <Form />
    </Layout>
  );
};

export default TitleIdeas;
