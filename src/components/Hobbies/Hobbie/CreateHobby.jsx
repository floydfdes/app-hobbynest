import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../../actions/hobby";
import { useHistory } from "react-router";
const CreateHobby = () => {
  const initialState = {
    title: "",
    tags: "",
    description: "",
  };
  const initialErrorState = {
    title: "",
    tags: "",
    description: "",
  };
  const fieldPattern = {
    title: /^[A-Za-z ]+$/,
    tags: /^[A-Za-z ,]+$/,
    description: /^[A-Za-z ]+$/,
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialErrorState);
  const currentHobby = useSelector((state) => state.formReducer);
  const history = useHistory();
  useEffect(() => {
    if (currentHobby.formData) setFormData(currentHobby.formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validation = (formData) => {
    let isValid = true;
    setErrors(initialErrorState);
    for (const entry in formData) {
      if (!formData[entry]) {
        setErrors((prevState) => ({
          ...prevState,
          [entry]: `${entry} is required`,
        }));
        isValid = false;
      } else if (formData[entry]) {
        let regularExp = new RegExp(fieldPattern[entry]);
        if (!regularExp.test(formData[entry])) {
          setErrors((prevState) => ({
            ...prevState,
            [entry]: `${entry} is invalid`,
          }));
          isValid = false;
        }
      }
    }
    return isValid;
  };

  const createHobby = (e) => {
    e.preventDefault();
    const validate = validation(formData);
    console.log(validate);
    if (!validate) return;
    if (currentHobby.formData)
      dispatch(updatePost(currentHobby.formData.id, formData, history));
    else dispatch(createPost(formData, history));
  };
  return (
    <>
      <div className="container container-bg page-height">
        <div className="card login-card-margin">
          <div className="row">
            <div className="col-md-12 col-sm-12 login-form-div">
              <form className="login-form" onSubmit={createHobby}>
                <h1 className="login-form-h1">Add a hobby</h1>
                <p className="form-sub-heading">Please specify your Hobby</p>
                <div>
                  <label className="login-form-label " htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    autoComplete="off"
                    value={formData.title}
                    onChange={
                      // method from hook form register
                      handleChange
                    }
                  />
                  <div className="validation-message">{errors?.title}</div>
                </div>
                <div>
                  <label className="login-form-label " htmlFor="tags">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    className="form-control"
                    autoComplete="off"
                    value={formData.tags}
                    onChange={
                      // method from hook form register
                      handleChange
                    }
                  />
                  <div className="validation-message">{errors?.tags}</div>
                </div>
                <div>
                  <label className="login-form-label " htmlFor="description">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    autoComplete="off"
                    value={formData.description}
                    onChange={
                      // method from hook form register
                      handleChange
                    }
                  />
                  <div className="validation-message">
                    {errors?.description}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block login-form-button"
                >
                  {formData.id ? "Update" : "Create"}
                </button>
                <Link to="/hobbies">
                  <button className="btn btn-primary btn-lg btn-block login-form-button">
                    Return to Hobbies
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateHobby;
