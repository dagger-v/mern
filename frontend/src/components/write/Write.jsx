import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { useWriteMutation } from "../../slices/articlesApiSlice";
import { storage } from "../../firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [placement, setPlacement] = useState("");
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState("");

  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const [write, { isLoading }] = useWriteMutation();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const username = userInfo.name;

    const imageName = image.name;
    const imageRef = ref(storage, `images/${imageName}`);

    const snapshot = await uploadBytes(imageRef, image);
    const url = await getDownloadURL(snapshot.ref);

    try {
      const res = await write({
        title,
        content,
        username,
        placement,
        image: url,
        tag,
      }).unwrap();
      navigate("/");
      toast.success("Article Added!");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1>Write Article</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="content">
          <Form.Label>Content</Form.Label>
          <textarea
            type="text"
            placeholder="Content"
            value={content}
            rows="5"
            cols="70"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </Form.Group>

        <Form.Group className="my-2" controlId="content">
          <select
            value={placement}
            onChange={(e) => setPlacement(e.target.value)}
          >
            <option value=""></option>
            <option value="featured">Featured</option>
            <option value="stories">Story</option>
            <option value="card">Card</option>
          </select>
        </Form.Group>

        <Form.Group className="my-2" controlId="content">
          <label>Image</label>
          <input
            type="file"
            placeholder="Image"
            onChange={handleImageChange}
          ></input>
        </Form.Group>

        <Form.Group className="my-2" controlId="content">
          <select value={tag} onChange={(e) => setTag(e.target.value)}>
            <option value=""></option>
            <option value="games">Video Games</option>
            <option value="anime">Anime</option>
            <option value="comics">Comics</option>
            <option value="music">Music</option>
          </select>
        </Form.Group>

        {isLoading && <Loader />}

        <Button type="submit" variant="primary" className="mt-3">
          Publish
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Write;
