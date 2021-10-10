import React, { useEffect } from "react";

import Hobbie from "./Hobbie/Hobbie";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/hobby";
import { useSelector } from "react-redux";

const Hobbies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  let hobbies = useSelector((state) => state.hobby);
  console.log(hobbies);

  return (
    <div className="container">
      <div className="row mobile-grid">
        <div className="col-lg-10 col-md-9">
          <h2>Hobbies</h2>
        </div>
        <div className="col-lg-2 col-md-3">
          <Link to="/hobbies/create">
            <button className="btn heading-button-color">
              <AddIcon />
              <span className="d-none d-md-block">Add a hobby</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="row my-3">
        {hobbies.map((element) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={element.title}>
              <Hobbie
                title={element.title}
                content={element.description}
                tags={element.tags}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hobbies;
