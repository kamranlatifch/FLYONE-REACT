import React from "react";
import seatselection from "./seatselection.png";
function SeatSelection() {
  return (
    <>
      <div className="col-12 right-div-data">
        <div className="my-2">
          <img src={seatselection} alt="" />
          <div>
            <h3>SEAT SELECTION</h3>
            <p>
              Select your seat now and:
              <br />
              <ul>
                <li>Travel with family and friends</li>
                <li>Сheck-in 30 days before the flight</li>
                <li>Add legroom and get off the plane first</li>
              </ul>
              <br />
              For the convenience of passengers on regular flights from FLYONE,
              the “Advance Seat Reservation” service is available. Choose a
              place at the window and watch the beautiful landscapes, choose a
              location with more space between rows for a long flight or stay
              with the family to discuss future trips. Take care of your comfort
              in time and make your flight as pleasant as possible! If you are a
              frequent flyer, then choose your preferred seat without
              hesitation. Travelers without experience will find it useful to
              find out more information before booking.
              <br />
              <br />
              Passengers can purchase their favorite seat in the aircraft by
              selecting one of the following seating options:
              <br />
              <br />
              <li>Premium seat - 1st row</li>
              <br />
              <li>Extra legroom - emergency exit rows</li>
              <br />
              <li>Front seats - first 5 rows</li>
              <br />
              <li>Any other place that you like</li>
              <br />
              Due to safety reasons following passengers cannot be seated in the
              emergency exit rows:
              <br />
              <br />
              <li>
                Persons with reduced mobility, with an intellectual deficiency,
                illness or any other cause of disability
              </li>
              <br />
              <li>
                Physically or mentally handicapped passengers unable to move
                quickly if asked to
              </li>
              <br />
              <li>
                Persons who are either substantially blind or substantially deaf
                to the extent that they might not readily become aware of
                instructions given to begin an emergency evacuation
              </li>
              <br />
              <li>
                Persons who because of age or sickness are so frail that they
                have difficulty in moving quickly
              </li>
              <br />
              <li> Pregnant women</li>
              <br />
              <li>Unaccompanied Minors (UMNR)</li>
              <br />
              <li>Infants and children</li>
              <br />
              <li>
                {" "}
                Persons whose physical size would prevent them from being able
                to move quickly
              </li>
              <br />
              <li>Persons in custody, deportees and inadmissible passengers</li>
              <br />
              <li>
                Passengers who are unable to comprehend safety instructions due
                to language deficiencies
              </li>
              <br />
              <li>Persons with pets (PETC) or guide dogs</li>
              <br />
              <li>
                If a seat is not booked in advance it will be assigned randomly
                during check-in.
              </li>
              <br />
              <br />
              <li>
                In case of aircraft configuration/type changes, FLYONE cannot
                guarantee seating booked through ASR (Advance Seat Reservation)
                service and reserves the right to assign seats on a regular
                basis.
              </li>
              <br />
              <br />
              The fees/charges collected are non-refundable.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeatSelection;
