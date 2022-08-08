import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logoPost from "../../../Images/logoPosts.svg";
import { useDispatch, useSelector } from "react-redux";
import { userPostsFetchData } from "../../../Store/Thunks/UserPostFetchThunk";


const UserPosts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.userPostRequestReducer);
  const { loading } = useSelector((state) => state.userPostRequestReducer);
  const { items } = useSelector((state) => state.userPostRequestReducer);

  useEffect(() => {
    dispatch(userPostsFetchData(id))
  }, [dispatch])


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
  } else if (loading) {
    return <p className="text-center">Loading...</p>;
  } else {
    return (
      <>
        {items && (
          <>
            <h1 className="text-center mt-4 mb-4">{items.title}</h1>
            <p className="text-center">{items.body}</p>
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
