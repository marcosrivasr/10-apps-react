import { Link } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function Index() {
  const store = useAppContext();

  return (
    <Layout>
      <div>
        {store.items.map((item) => (
          <div key={item.id}>
            <Link to={`/view/${item.id}`}>
              <a>
                <img src={item.cover} width="200" />
                {item.title}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
