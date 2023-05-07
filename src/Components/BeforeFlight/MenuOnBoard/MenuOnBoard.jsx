import React from "react";
import { Link } from "react-router-dom";

function MenuOnBoard() {
  return (
    <div>
      <p>
        <h4>You can find the FLYONE menu on every flight.</h4> <br />
        As Delight your taste buds with tea, coffee, sweets or snacks, alcoholic
        or soft drinks and other delicacies. You can also pre-order one of the{" "}
        <Link style={{ color: "blue" }}> 3 sets of dishes online.</Link>
        <br /> <br />
        <h4> MENU of FLYONE (5F) </h4> <br /> <br />
        <h4>MENU of FLYONE ARMENIA (3F)</h4> <br /> <br />
        On our flights you will discover that everything is delicious!
      </p>
    </div>
  );
}

export default MenuOnBoard;
