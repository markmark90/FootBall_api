import React from "react";
import { useEffect, useState } from "react";
import { fetchLiveFixtures } from "../../services/api";

import "./Livescores.css";

export const Livescores = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const getFixtures = async () => {
      try {
        const liveFixtures = await fetchLiveFixtures();
        setFixtures(liveFixtures);
        console.log(liveFixtures);
      } catch (err) {
        console.log(err.message);
      }
    };

    getFixtures();
  }, []);
  return (
    <>
      <h1>Live Matches</h1>
      {fixtures.length > 0 ? (
        fixtures.map((fixture, index) => (
          <section key={index}>
            <img src={fixture.teams.home.logo} width={25} alt="team logo" />
            <div>{fixture.teams.home.name}</div>
            <div className="result-container">
              <div>
                {fixture.goals.home} : {fixture.goals.away}
              </div>
              <div>{fixture.fixture.status.elapsed}'</div>
            </div>
            <div>{fixture.teams.away.name}</div>
            <img src={fixture.teams.away.logo} width={25} alt="team logo" />
          </section>
        ))
      ) : (
        <p className="loading">Loading...</p>
      )}
    </>
  );
};
