import { Alert, Layout } from "../../components";
import Form from "./Form";

const PdfSummarize = () => {
  return (
    <Layout>
      <Alert
        title="Merangkum file Pdf To Text"
        description="Rangkum file pdf Kamu dengan mudah dan cepat dengan AI Kami."
        titleButton="Lihat Tutorial"
        secondButton=""
      />
      <Form />
    </Layout>
  );
};

export default PdfSummarize;
