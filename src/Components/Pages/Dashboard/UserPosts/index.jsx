import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logoPost from "../../../Images/logoPosts.svg";

const UserPosts = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (id > 10 || undefined) {
          setError(true);
          setIsLoad(true);
        } else if (response.ok) {
          setIsLoad(true);
          return response.json();
        } else {
          setError(true);
          setIsLoad(true);
        }
      })
      .then((data) => setPost(data));
  }, [id]);

  const goBack = () => {
    return navigate("/dashboard");
  };

  if (error) {
    return (
      <>
        <h1 className="text-center mt-5 mb-5">
          Post with this id doesn't exist
        </h1>
        <button
          onClick={goBack}
          className="d-block mx-auto w-25 btn btn-lg btn-primary mt-5"
        >
          Back to dashboard
        </button>
        <img src={logoPost} alt="" className="mx-auto d-block mt-3" />
      </>
    );
  } else if (!isLoad) {
    return <p className="text-center">Loading...</p>;
  } else {
    return (
      <>
        {post && (
          <>
            <h1 className="text-center mt-4 mb-4">{post.title}</h1>
            <p className="text-center">{post.body}</p>
            <button
              onClick={goBack}
              className="d-block mx-auto w-25 btn btn-lg btn-primary mt-4"
            >
              Back to dashboard
            </button>
            <img src={logoPost} alt="" className="mx-auto d-block mt-3" />
          </>
        )}
      </>
    );
  }
};

export default UserPosts;
