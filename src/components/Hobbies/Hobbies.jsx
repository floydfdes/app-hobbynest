import React from "react";
import { help } from "../../Data/Data";
import Hobbie from "./Hobbie/Hobbie";

const Hobbies = () => {
  return (
    <div className="row">
      {help.map((element) => {
        return (
          <div className="col-lg-4 col-md-4 col-sm-12" key={element.id}>
            <Hobbie
              title={element.helpTitle}
              content={element.helpContent}
              tags={element.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Hobbies;
