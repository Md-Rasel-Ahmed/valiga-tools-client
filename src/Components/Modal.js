import React from "react";

const Modal = ({ id }) => {
  const handleDeleteWithConfirmation = (id) => {
    console.log("ache", id);
  };
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          c
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label
              // onClick={handleDeleteWithConfirmation}
              for="my-modal"
              className="btn"
            >
              No
            </label>
            <label
              onClick={() => handleDeleteWithConfirmation(id)}
              for="my-modal"
              className="btn"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
