import React from "react";
import voucher from "./VOUCHER.jpg";
function VoucherCondition() {
  return (
    <div>
      <div className="col-12 right-div-data">
        <div className="row my-2 d-flex">
          <img src={voucher} alt="voucher" />
        </div>
        <div className="row my-2 d-flex">
          <p>
            The voucher issued by FLYONE for passengers affected by canceled
            flights has the following conditions: <br />
            <br />
            1. Value: the amount paid for the affected flight <b>+ 20%;</b>
            <br />
            2. Validity: <b>12 months</b> from the receipt of the voucher;
            <br />
            3. Maximum possible travel period : <b>12 months</b> from the
            receipt of the voucher;
            <br />
            4. Applicability : all FLYONE destinations, tickets and additional
            services;
            <br />
            5. Reservation : maximum <b>passengers</b>9 in a reservation;
            <br />
            6. It is transmissible (it is not issued on an exact name);
            <br />
            7. Use : payment on the website or through the agencies;
            <br />
            8. Flat applicability : multiple application until the voucher value
            is completely exhausted.
            <br />
            9. The voucher is non-refundable.
            <br />
            <br />
            The voucher can be received by email HERE. If the ticket was
            purchased through an agency, the voucher can be received through the
            agency.
            <br />
            <br />
            In order to receive the voucher, the passenger and/or one of the
            passengers in the reservation must provide the following information
            and documents:
            <br />
            <br />
            <ol>
              <li>
                Acceptance certificate, available HERE. In the absence of an
                electronic signature, the document needs to be printed and
                signed by hand by the passenger. The document signed by
                Paint/Word is not accepted.
              </li>
              <br />
              <li>Copy of the passenger's ID card or passport.</li>
            </ol>
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default VoucherCondition;
