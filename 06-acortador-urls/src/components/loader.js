import styles from "./loader.module.css";

export default function Loader({ item, id }) {
  function Container({ children }) {
    return <div className={styles.loaderContainer}>{children}</div>;
  }
  if (item === null) {
    return <Container>Loading...</Container>;
  }

  if (item === undefined) {
    return <Container>No url found {id}</Container>;
  }

  return item ? <Container>Redirect {item.url}</Container> : "";
}
