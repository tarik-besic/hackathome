import React, { useState } from "react";
import Button from "../../components/button";
import Modal from "../../components/modal";

function SignUp() {
  const [modalShow, setModalShow] = useState({ test: false });
  return (
    <div>
      <button
        onClick={() => {
          setModalShow({ ...modalShow, test: true });
        }}
      >
        Modal
      </button>
      {modalShow.test && (
        <Modal
          close={() => setModalShow({ ...modalShow, test: false })}
          className="testing nema nista"
        />
      )}
    </div>
  );
}

export default SignUp;
