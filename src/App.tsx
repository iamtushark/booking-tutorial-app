// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingDetails from "./pages/BookingDetails";
import PersonalDetails from "./pages/PersonalDetails";
import ServiceDetails from "./pages/ServiceDetails";
import SuccessPage from "./pages/SuccessPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalDetails></PersonalDetails>} />
        <Route
          path="/booking_details"
          element={<BookingDetails></BookingDetails>}
        />
        <Route
          path="/service_details"
          element={<ServiceDetails></ServiceDetails>}
        />
        <Route path="/success" element={<SuccessPage></SuccessPage>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
