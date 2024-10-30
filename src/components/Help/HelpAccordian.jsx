import './styles.scss';

import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import { help } from '../../Data/Data';

ReactModal.setAppElement('#root');

const HelpAccordion = ({ isHelpModelOpen, setIsHelpModelOpen }) => (
  <ReactModal
    id="helpAccordion"
    isOpen={isHelpModelOpen}
    onRequestClose={() => setIsHelpModelOpen(false)}
  >
    <div className="accordion" id="accordionExample">
      {help.map(({ id, helpTitle, helpContent }) => (
        <div className="accordion-item" key={id}>
          <h2 className="accordion-header" id={`heading${id}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${id}`}
              aria-expanded="false"
              aria-controls={`collapse${id}`}
            >
              {helpTitle}
            </button>
          </h2>
          <div
            id={`collapse${id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${id}`}
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              dangerouslySetInnerHTML={{ __html: helpContent }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </ReactModal>
);

HelpAccordion.propTypes = {
  isHelpModelOpen: PropTypes.bool.isRequired,
  setIsHelpModelOpen: PropTypes.func.isRequired,
};

export default HelpAccordion;