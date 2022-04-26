import { useState } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();

  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "cover":
        setCover(e.target.value);
        break;
      case "intro":
        setIntro(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    store.createItem(newBook);
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label for="title">Title</label>
        <input type="text" name="title" onChange={handleChange} value={title} />

        <label for="author">author</label>
        <input
          type="text"
          name="author"
          onChange={handleChange}
          value={author}
        />

        <label for="cover">cover</label>
        <input type="text" name="cover" onChange={handleChange} value={cover} />

        <label for="intro">intro</label>
        <input type="text" name="intro" onChange={handleChange} value={intro} />

        <label for="completed">completed</label>
        <input
          type="checkbox"
          name="completed"
          onChange={handleChange}
          value={completed}
        />

        <label for="review">review</label>
        <input
          type="text"
          name="review"
          onChange={handleChange}
          value={review}
        />
        <label for="submit"></label>
        <input type="submit" value="Register book" />
      </form>
    </Layout>
  );
}
