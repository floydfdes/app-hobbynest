import React, { useEffect } from "react";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Hobbie from "./Hobbie/Hobbie";
import Loading from "../Loading/Loading";
import { createNewHobby } from "../../actions/trigger";
import { getPosts } from "../../actions/hobby";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Hobbies = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [filterHobbies, setFilterHobbies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  let hobbies = useSelector((state) => state.hobby);
  let filteredHobbiesCopy = hobbies.slice();
  const createHobby = () => {
    dispatch(createNewHobby(0, history));
  };

  const search = (event) => {
    setSearchValue(event.target.value);
    let filterArr = filteredHobbiesCopy.slice();
    filterArr = filterArr.filter((el) => {
      return (
        el.title.includes(event.target.value) ||
        el.description.includes(event.target.value) ||
        el.tags.includes(event.target.value)
      );
    });
    setFilterHobbies(filterArr.slice());
    console.log(filterArr);
  };

  const clearSearch = () => {
    setSearchValue("");
    setFilterHobbies(hobbies.slice());
  };

  return (
    <div className="container">
      {hobbies.length === 0 && <Loading />}
      <div className="row mobile-grid">
        <div className="col-lg-4 col-md-4">
          <h2>Hobbies</h2>
        </div>
        <div className="col-lg-6 col-md-4 display-none-mobile hobbie-search">
          <input
            onInput={search}
            type="text"
            className="form-control"
            id="query"
            value={searchValue}
          />

          <button
            onClick={clearSearch}
            type="button"
            className="btn btn-primary mx-2"
          >
            <CloseIcon></CloseIcon>
          </button>
        </div>
        <div className="col-lg-2 col-md-4">
          <button
            type="button"
            onClick={createHobby}
            className="btn heading-button-color"
          >
            <AddIcon />
            <span className="d-none d-md-block">Add a hobby</span>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 d-sm-flex d-flex d-md-none my-2">
          <input
            onInput={search}
            type="text"
            className="form-control margin-right-1"
            id="query"
          />

          <button
            onClick={clearSearch}
            type="button"
            className="btn btn-primary"
          >
            <CloseIcon></CloseIcon>
          </button>
        </div>
      </div>
      <div className="row my-3">
        {filterHobbies.length < 1 &&
          hobbies.map((element) => {
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
        {filterHobbies.length > 0 &&
          filterHobbies.map((element) => {
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
