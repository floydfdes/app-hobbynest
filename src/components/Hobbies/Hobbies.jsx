import React, { useEffect } from "react";

import Hobbie from "./Hobbie/Hobbie";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/hobby";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createNewHobby } from "../../actions/trigger";

const Hobbies = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  let hobbies = useSelector((state) => state.hobby);
  console.log(hobbies);
  const createHobby = () => {
    dispatch(createNewHobby(0, history));
  };

  return (
    <div className="container">
      <div className="row mobile-grid">
        <div className="col-lg-10 col-md-9">
          <h2>Hobbies</h2>
        </div>
        <div className="col-lg-2 col-md-3">
          <button onClick={createHobby} className="btn heading-button-color">
            <AddIcon />
            <span className="d-none d-md-block">Add a hobby</span>
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
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hobbies;
