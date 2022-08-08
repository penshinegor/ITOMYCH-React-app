import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsFetchData } from "../../../Store/Thunks/PostsFetchThunk";
import Messages from "./Messages";

const MessageTable = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.postRequestReducer);
  const { loading } = useSelector((state) => state.postRequestReducer);
  const { items } = useSelector((state) => state.postRequestReducer);

  useEffect(() => {
    dispatch(postsFetchData());
  }, [dispatch]);

  if (error) {
    return <p>Something went wrong...</p>;
  } else if (loading) {
    return <p>Loading...</p>;
  } else {
    return <Messages items={items} />;
  }
};

export default MessageTable;
