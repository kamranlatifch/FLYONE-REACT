import React from "react";
import passport from "./passport.jpg";
function PassportDetails() {
  return (
    <div>
      <img src={passport} alt="passport" />
      <p>
        <br />
        <br />
        <b>
          Conformity and modification of personal data in the issued ticket.
        </b>
        <br />
        <br />
        The person booking the ticket is responsible for the accuracy of the
        passenger's personal data entered in the reservation.
        <br />
        <br />
        1. In case of an error made in the ticket issued, such as: the number of
        the passenger's transport document, the type of document, the date of
        birth (unless the mistake resulted in the modification of the Passenger
        category - child up to 2 years (infant), child between 2 and 12 years
        (child), adult (adult)), date of issue of the document, validity period
        and sex of the passenger, FLYONE allows the correction of such errors
        only at the airport check-in desk, with condition that during check-in,
        the passenger informs the agent at the check-in desk about mistakes made
        when the booking was made . Correction of errors made regarding the date
        of birth of the passenger, in accordance with the aforementioned
        procedure, the correction of which results in a change in the category
        of passengers (see above) is not allowed. In this case, in order to
        obtain the refund of the cost of the ticket booked with such errors, the
        fare rules according to which the ticket was purchased will apply.
        <br />
        <br />
        2. If the passenger or the person who made the reservation identifies an
        error in the passenger's first or last name in the ticket already
        issued, and the total number of proposed corrections does not exceed 3
        characters and phonetically the name does not change, the passenger will
        not pay the name change fee, but only the registration fee according to
        the tariff mark applied in its reservation. The registration fee will
        not be applied if the passenger is registered online for the flight and
        holds the boarding pass in the format requested by the company. If the
        proposed number of corrections exceeds 3 characters and the name is
        phonetically distorted, the passenger will pay the name change fee of 60
        euros, and if the error is detected during the passenger's registration
        at the airport, he will be obliged to pay both the name change fee,
        amounting to 60 euros, as well as the fee of 30 euros for check-in.
        <br />
        <br />
        <b>
          *The name correction/change cannot be applied to a partially used
          ticket.
        </b>
        <br />
        <br />
        3. The passenger whose name / surname is incorrectly indicated on the
        ticket issued and who did not follow the correction procedure mentioned
        in this paragraph will not be admitted for the flight.
        <br />
        <br />
        4. Tax for the change of name and surname.
        <br />
        <br />
      </p>
    </div>
  );
}

export default PassportDetails;
