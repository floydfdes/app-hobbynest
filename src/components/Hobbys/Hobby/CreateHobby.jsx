import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPost, updatePost } from "../../../actions/hobby";

const initialFormState = {
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
  title: /^[A-Za-z .,]+$/,
  tags: /^[A-Za-z]+(,[A-Za-z]+)*$/,
  description: /^[A-Za-z .,]+$/,
};

const CreateHobby = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorState);
  const currentHobby = useSelector((state) => state.formReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentHobby.formData) setFormData(currentHobby.formData);
  }, [currentHobby.formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }, []);

  const validate = useCallback((data) => {
    let isValid = true;
    const newErrors = { ...initialErrorState };

    Object.entries(data).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = `${key} is required`;
        isValid = false;
      } else if (!fieldPattern[key].test(value)) {
        newErrors[key] = `${key} is invalid`;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!validate(formData)) return;

      if (currentHobby.formData) {
        dispatch(updatePost(currentHobby.formData.id, formData, navigate));
      } else {
        dispatch(createPost(formData, navigate));
      }
    },
    [formData, currentHobby.formData, dispatch, navigate, validate]
  );

  return (
    <div className="container container-bg page-height">
      <div className="card login-card-margin">
        <div className="row">
          <div className="col-md-12 col-sm-12 login-form-div">
            <form className="create-edit-form" onSubmit={handleSubmit}>
              <h2 className="create-edit-form-h1">
                {formData.id ? "Update your" : "Add a"} hobby
              </h2>
              <p className="create-edit-form-sub-heading">
                Please specify your Hobby
              </p>

              {["title", "tags", "description"].map((field) => (
                <div key={field}>
                  <label className="create-edit-form-label" htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type="text"
                    name={field}
                    className="form-control"
                    autoComplete="off"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                  <div className="validation-message">{errors[field]}</div>
                </div>
              ))}

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block hobby-form-button hobby-form-button-primary"
              >
                {formData.id ? "Update" : "Create"}
              </button>
              <Link to="/hobbies">
                <button className="btn btn-primary btn-lg btn-block hobby-form-button hobby-form-button-secondary">
                  Return to Hobbies
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHobby;
