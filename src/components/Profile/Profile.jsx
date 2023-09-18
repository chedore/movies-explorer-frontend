import "./Profile.css";
import React, { useState } from "react";
import Header from "../Header/Header";

export default function Profile() {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");

  return (
    <main className="profile">
      <Header />
    </main>
  );
}
