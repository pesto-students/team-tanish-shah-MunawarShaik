import React from "react";
import NavBar from "../components/Navbar/NavBar";
import WorkoutPreferencesForm from "../components/WorkOutForm/WorkoutPreferencesForm";

export function Home(isLoggedIn) {
  return (
    <>
      <NavBar />
      <WorkoutPreferencesForm />
    </>
  );
}
