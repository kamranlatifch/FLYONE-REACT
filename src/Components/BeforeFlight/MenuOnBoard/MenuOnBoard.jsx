import React from "react";
import { Link } from "react-router-dom";
import Menu3 from "./Menu 3F.pdf";
import Menu5 from "./MENU 5F.pdf";
function MenuOnBoard() {
  return (
    <div>
      <p>
        <h4>You can find the FLYONE menu on every flight.</h4> <br />
        As Delight your taste buds with tea, coffee, sweets or snacks, alcoholic
        or soft drinks and other delicacies. You can also pre-order one of the{" "}
        <Link style={{ color: "blue" }}> 3 sets of dishes online.</Link>
        <br /> <br />
        <h4>
          <a
            href={Menu5}
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
          >
            MENU of FLYONE (5F)
          </a>
        </h4>
        <br /> <br />
        <h4>
          <a
            href={Menu3}
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
          >
            MENU of FLYONE ARMENIA (3F){" "}
          </a>
        </h4>{" "}
        <br /> <br />
        On our flights you will discover that everything is delicious!
      </p>
    </div>
  );
}

export default MenuOnBoard;
