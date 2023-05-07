import React from "react";
import gadget from "./Gadgets.png";
function ElectronicDevices() {
  return (
    <div>
      <img src={gadget} alt="Gadgets" />
      <p>
        <br />
        <br />
        <h4>ELECTRONIC DEVICES</h4>
        Electronic devices like mobile phones, smartphones, notebooks, CD and
        DVD players, portable TVs, radios etc, can have negative effects on the
        airplane’s flying system. This is why, we insistently ask you to avoid
        using them during the flight.
        <br />
        <br />
        <br />
        Note:
        <br />
        <li>
          It is strictly prohibited to use any electronic device during driving,
          taking-off and landing of the airplane
        </li>
        <li>
          In case of suspicion that any of the above mentioned devices have a
          negative impact on the good functioning of the navigation and radio
          communication of the airplane, the captain is entitled to ask the
          termination of use of any electronic device of the passengers on
          board.
        </li>
        <li>
          The mobile phones shall be disconnected, no matter the place where
          they are being kept – in the luggage compartment or in the hand
          luggage.
        </li>
        <br />
        <br />
      </p>
    </div>
  );
}

export default ElectronicDevices;
