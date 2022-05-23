import React from "react";

const Modal = ({ id }) => {
  const handleDeleteWithConfirmation = (id) => {
    console.log("ache", id);
  };
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          c
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label
              // onClick={handleDeleteWithConfirmation}
              for="my-modal"
              class="btn"
            >
              No
            </label>
            <label
              onClick={() => handleDeleteWithConfirmation(id)}
              for="my-modal"
              class="btn"
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
