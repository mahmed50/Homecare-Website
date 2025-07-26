// App.jsx
import React from "react";
import { Phone, MapPin, Heart, CheckCircle } from "lucide-react";
import "./App.css";

const services = [
  {
    title: "Companionship & Personal Care",
    description:
      "Our caregivers provide compassionate support with bathing, dressing, grooming, and companionship to ensure comfort and dignity.",
    icon: <Heart className="icon" />,
  },
  {
    title: "Medication Reminders",
    description:
      "We ensure timely and accurate medication reminders to keep your loved ones safe and on track.",
    icon: <CheckCircle className="icon" />,
  },
  {
    title: "Meal Preparation & Light Housekeeping",
    description:
      "Healthy meals and tidy spaces are key to well-being. We take care of both.",
    icon: <MapPin className="icon" />,
  },
];

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Harmony Home Care</h1>
        <a className="call-button" href="tel:1234567890">
          Call Us Now
        </a>
      </header>

      <section className="intro">
        <h2>Professional, Compassionate Care Right at Your Doorstep</h2>
        <p>
          At Harmony Home Care, we bring personalized assistance to your
          home—offering peace of mind, dignity, and quality of life to your
          loved ones.
        </p>
      </section>

      <section className="services">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="contact">
        <h2>Get in Touch Today</h2>
        <p>
          Call us or fill out our simple online form to schedule a free in-home
          consultation.
        </p>
        <a className="form-button" href="tel:1234567890">
          📞 (123) 456-7890
        </a>
      </section>

      <footer>
        © {new Date().getFullYear()} Harmony Home Care. All rights reserved.
      </footer>
    </div>
  );
}