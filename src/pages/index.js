import { Backround } from "@/component/Backround";
import { Layout } from "@/component/Layout";
import { List } from "@/component/List";
import { Modal } from "@/component/Modal";

export default function Home() {
  const list = ["Todo", "Going", "Done"];

  return (
    <Backround>
      <Layout>
        {list.map((item, index) => (
          <List key={index} text={item} />
        ))}
        {/* <Modal /> */}
      </Layout>
    </Backround>
  );
}
