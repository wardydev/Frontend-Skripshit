import { Layout } from "../../components";
import Alert from "./Alert";
import Card from "./Card";
import CardLecturer from "./CardLecturer";
import Form from "./Form";
import Messages from "./Messages";
import Tab from "./Tab";
import Table from "./Table";

const Components = () => {
  return (
    <Layout>
      <Table />
      <Alert />
      <div className="mg-top-40">
        <h2>Component Card Template</h2>
        <div className="row">
          <div className="col-3">
            <Card />
          </div>
          <div className="col-3">
            <CardLecturer />
          </div>
        </div>
      </div>
      <Form />
      <Tab />
      <Messages />
    </Layout>
  );
};

export default Components;
