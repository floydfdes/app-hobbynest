import "./Profile.scss";

import { Avatar } from "@mui/material";
import React from "react";
import ChangePasswordModal from "./ProfileModals/ChangePasswordModal";
import DeleteModal from "./ProfileModals/DeleteModal";
import EditModal from "./ProfileModals/EditModal";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("profile")).result;
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openChangePwd, setOpenChangePwd] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };
  const handleClickOpenChangePwd = () => {
    setOpenChangePwd(true);
  };

  return (
    <>
      <div className="container card profile-padding ">
        <div className="row p-4">
          <div className="col-md-3 col-lg-3 col-sm-12 d-flex justify-content-center">
            <div className="p-4">
              <Avatar
                className="profile-avatar-page"
                alt={`${user?.firstName.slice(0, 1)}${user?.lastName[0]}`}
                src={user?.imageUrl ? user?.imageUrl : user?.firstName}
              />
            </div>
          </div>
          <div className="col-md-9 col-lg-9 col-sm-12">
            <h2>Profile details</h2>
            <div className="row">
              <div className="col-3">
                <div>Full Name</div>
                <div>Email</div>
              </div>
              <div className="col-9">
                <div>
                  {user?.firstName} &nbsp;
                  {user?.lastName}
                </div>
                <div>{user?.email}</div>
              </div>
            </div>
            <div className="my-2 btn-grid">
              <button
                onClick={handleClickOpenChangePwd}
                className="btn btn-success"
              >
                Change Password
              </button>
              <button
                onClick={handleClickOpenDelete}
                className="btn btn-danger"
              >
                Delete Profile
              </button>
              <button onClick={handleClickOpenEdit} className="btn btn-warning">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal
        open={openDelete}
        setOpen={setOpenDelete}
        userDetails={user}
      ></DeleteModal>
      <EditModal
        open={openEdit}
        setOpen={setOpenEdit}
        userDetails={user}
      ></EditModal>
      <ChangePasswordModal
        open={openChangePwd}
        setOpen={setOpenChangePwd}
        userDetails={user}
      ></ChangePasswordModal>
    </>
  );
};

export default Profile;
