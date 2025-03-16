import React, { useState } from "react";
import "./Destinations.css";

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [otp, setOtp] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const prices = {
    Bali: "	₹15,000 - ₹25,000",
    Canada: "₹50,000 - ₹70,000",
    Japan: "₹50,000 - ₹70,000",
    Switzerland: "₹70,000 - ₹90,000",
    Shimla: "₹8,000 - ₹15,000",
    Australia: "₹70,000 - ₹90,000",
    France: "₹60,000 - ₹80,000",
    Maldives: "₹35,000 - ₹50,000",
    Dubai: "₹40,000 - ₹60,000",
    Singapore: "₹35,000 - ₹55,000",
    Thailand: "₹20,000 - ₹35,000",
    Greece: "₹60,000 - ₹80,000",
    Egypt: "₹35,000 - ₹55,000",
    Norway: "₹80,000 - ₹1,00,000",
    Newzealand: "₹80,000 - ₹1,00,000",
    Turkey: "₹40,000 - ₹60,000",
    Spain: "₹60,000 - ₹80,000",
    Korea: "₹50,000 - ₹70,000",
    Brazil: "₹50,000 - ₹70,000",
    Venes: "	₹70,000 - ₹90,000",
  };

  const handleBookNow = (destination) => {
    setSelectedDestination(destination);
    setBookingConfirmed(false);
  };

  const closePaymentModal = () => {
    setSelectedDestination(null);
    setBookingConfirmed(false);
  };
  const handleProceedToPayment = () => {
    // Show a fake loading effect
    setBookingConfirmed(false);

    setTimeout(() => {
      alert("Payment Successful! (Simulated)");
      setBookingConfirmed(true);

      setTimeout(() => {
        setSelectedDestination(null);
        setBookingConfirmed(false);
      }, 2000); // Auto-close modal after 2 seconds
    }, 2000); // Simulating payment delay
  };

  return (
    <div className="destinations-container">
      <h1>Your Favourite Spots ?</h1>

      <div className="destination-row">
        <div className="destination">
          <img src="/images/Bali.jpeg" alt="Bali" />
          <p>Bali</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Bali")}>Book Now</button>
        </div>
        <div className="destination">
          <img src="/images/canada.jpeg" alt="Canada" />
          <p>Canada</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Canada")}>Book Now</button>
        </div>
      </div>

      <div className="destination-row">
        <div className="destination">
          <img src="/images/Japan.jpeg" alt="Japan" />
          <p>Japan</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Japan")}>Book Now</button>
        </div>
        <div className="destination">
          <img src="/images/switzerland.jpeg" alt="Switzerland" />
          <p>Switzerland</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Switzerland")}>Book Now</button>
        </div>
      </div>

      <div className="destination-row">
        <div className="destination">
          <img src="/images/Shimla.jpeg" alt="Shimla" />
          <p>Shimla</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Shimla")}>Book Now</button>
        </div>
        <div className="destination">
          <img src="/images/Australia.jpg" alt="Australia" />
          <p>Australia</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Australia")}>Book Now</button>
        </div>
      </div>

      <div className="destination-row">
        <div className="destination">
          <img src="/images/France.jpg" alt="France" />
          <p>France</p>
          <button className="book-now-btn" onClick={() => handleBookNow("France")}>Book Now</button>
        </div>
        <div className="destination">
          <img src="/images/maldives.jpg" alt="Maldives" />
          <p>Maldives</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Maldives")}>Book Now</button>
        </div>
      </div>

      <div className="destination-row">
        <div className="destination">
          <img src="/images/Dubai.jpg" alt="Dubai" />
          <p>Dubai</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Dubai")}>Book Now</button>
        </div>
        <div className="destination">
          <img src="/images/Singapore.jpg" alt="Singapore" />
          <p>Singapore</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Singapore")}>Book Now</button>
        </div>
      </div>

      <div className="destination-row">
        <div className="destination">
          <img src="/images/Thailand.jpg" alt="Thailand" />
          <p>Thailand</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Thailand")}>Book Now</button>
        </div>
        <div className="destination">
          <img src="/images/Greece.jpg" alt="Greece" />
          <p>Greece</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Greece")}>Book Now</button>
        </div>
      </div>

      <div className="destination-row">
        <div className="destination">
          <img src="/images/Egypt.jpg" alt="Egypt" />
          <p>Egypt</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Egypt")}>Book Now</button>
        </div>
        <div className="destination">
          <img src="/images/Norway.jpg" alt="Norway" />
          <p>Norway</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Norway")}>Book Now</button>
        </div>
      </div>

      <div className="destination-row">
        <div className="destination">
          <img src="/images/Newzealand.jpg" alt="New Zealand" />
          <p>New Zealand</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Newzealand")}>Book Now</button>
        </div>
        <div className="destination">
          <img src="/images/Turkey.jpg" alt="Turkey" />
          <p>Turkey</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Turkey")}>Book Now</button>
        </div>
      </div>

      <div className="destination-row">
        <div className="destination">
          <img src="/images/spain.jpeg" alt="Spain" />
          <p>Spain</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Spain")}>Book Now</button>
        </div>
        <div className="destination">
          <img src="/images/Korea.jpg" alt="Korea" />
          <p>South Korea</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Korea")}>Book Now</button>
        </div>
      </div>

      <div className="destination-row">
        <div className="destination">
          <img src="/images/Brazil.jpg" alt="Brazil" />
          <p>Brazil</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Brazil")}>Book Now</button>
        </div>
        <div className="destination">
          <img src="/images/venes.jpg" alt="Venes" />
          <p>Venes</p>
          <button className="book-now-btn" onClick={() => handleBookNow("Venes")}>Book Now</button>
        </div>
      </div>

      {selectedDestination && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedDestination}</h2>
            <p>Price: {prices[selectedDestination]}</p>

            {!bookingConfirmed ? (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="otp-input"
                />
                <button
                  className="pay-now-btn"
                  onClick={handleProceedToPayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Proceed to Payment"}
                </button>
              </>
            ) : (
              <p style={{ color: "green", fontWeight: "bold" }}>Booking Confirmed!</p>
            )}

            <button className="close-btn" onClick={closePaymentModal}>Close</button>
          </div>
        </div>
      )}




    </div>
  );
};

export default Destinations;
