import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { createPost, updatePost } from "../../../actions/hobby";
import { useHistory } from "react-router";
const CreateHobby = () => {
  const initialState = {
    title: "",
    tags: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialState);
  const currentHobby = useSelector((state) => state.formReducer);
  const history = useHistory();
  useEffect(() => {
    if (currentHobby.formData) setFormData(currentHobby.formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();

  const schema = yup
    .object({
      title: yup.string().required("title is required field"),
      tags: yup.string().required("tags is required field"),
      description: yup.string().required("description is required field"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const createHobby = (data) => {
    for (const entry in data) {
      setFormData({ ...formData, [entry]: data[entry] });
      formData[entry] = data[entry];
    }
    if (currentHobby.formData.id)
      dispatch(updatePost(currentHobby.formData.id, formData));
    else dispatch(createPost(formData, history));

    console.log(formData);
  };
  return (
    <>
      <div className="container container-bg page-height">
        <div className="card login-card-margin">
          <div className="row">
            <div className="col-md-12 col-sm-12 login-form-div">
              <form className="login-form" onSubmit={handleSubmit(createHobby)}>
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
                    {...register("title")}
                  />
                  <div className="validation-message">
                    {errors?.title?.message}
                  </div>
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
                    {...register("tags")}
                  />
                  <div className="validation-message">
                    {errors?.tags?.message}
                  </div>
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
                    {...register("description")}
                  />
                  <div className="validation-message">
                    {errors?.description?.message}
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
