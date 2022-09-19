import React, { useEffect } from "react";

import Hobbie from "./Hobbie/Hobbie";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/hobby";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createNewHobby } from "../../actions/trigger";
import SearchIcon from "@mui/icons-material/Search";
import Loading from "../Loading/Loading";

const Hobbies = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  let hobbies = useSelector((state) => state.hobby);

  const createHobby = () => {
    dispatch(createNewHobby(0, history));
  };

  return (
    <div className="container">
      {hobbies.length === 0 && <Loading />}
      <div className="row mobile-grid">
        <div className="col-lg-4 col-md-4">
          <h2>Hobbies</h2>
        </div>
        <div className="col-lg-6 col-md-4 display-none-mobile hobbie-search">
          <input type="text" className="form-control" id="query" />

          <button type="submit" className="btn btn-primary mx-2">
            <SearchIcon></SearchIcon>
          </button>
        </div>
        <div className="col-lg-2 col-md-4">
          <button onClick={createHobby} className="btn heading-button-color">
            <AddIcon />
            <span className="d-none d-md-block">Add a hobby</span>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 d-none d-sm-flex d-flex d-md-none my-2">
          <input
            type="text"
            className="form-control margin-right-1"
            id="query"
          />

          <button type="submit" className="btn btn-primary">
            <SearchIcon></SearchIcon>
          </button>
        </div>
      </div>
      <div className="row my-3">
        {hobbies.map((element) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={element.title}>
              <Hobbie
                title={element.title}
                description={element.description}
                tags={element.tags}
                id={element._id}
                likes={element.likes.length}
                creator={element.creator}
                creatorName={element.creatorName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hobbies;
