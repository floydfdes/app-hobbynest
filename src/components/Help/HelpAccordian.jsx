import React from "react";
import ReactModal from "react-modal";
import { help } from "../../Data/Data";
import "./styles.scss";

ReactModal.setAppElement("#root");
const HelpAccordian = (props) => {
  return (
    <ReactModal
      isOpen={props.isHelpModelOpen}
      onRequestClose={() => {
        props.setIsHelpModelOpen(false);
      }}
    >
      <div className="accordion" id="accordionExample">
        {help.map((element) => {
          return (
            <div className="accordion-item" key={element.id}>
              <h2 className="accordion-header" id={"heading" + element.id}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + element.id}
                  aria-expanded="true"
                  aria-controls={"collapse" + element.id}
                >
                  {element.helpTitle}
                </button>
              </h2>
              <div
                id={"collapse" + element.id}
                className="accordion-collapse collapse hide"
                aria-labelledby={"heading" + element.id}
                data-bs-parent="#accordionExample"
              >
                <div
                  className="accordion-body"
                  dangerouslySetInnerHTML={{ __html: element.helpContent }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </ReactModal>
  );
};

export default HelpAccordian;
