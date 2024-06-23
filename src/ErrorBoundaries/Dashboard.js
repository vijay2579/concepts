import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Hero from "./Hero";

const Dashboard = () => {
  return (
    <>
      <ErrorBoundary>
        <Hero name="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Joker" />
      </ErrorBoundary>
    </>
  );
};
export default Dashboard;
