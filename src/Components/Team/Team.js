import React from "react";
import { TeamData } from "./Team.data";
import Wrapper from "./Team.styled";
// import images
import Teamimg from "../../images/vick.png";
import Discordimg from "../../images/discordteamimg.png";

function Team() {
  return (
    <Wrapper>
      <div className="section-title" id="team">
        <h2>Team</h2>
      
      </div>
      <div className="card-alone">
        <div className="card-img">
          <img src={Teamimg} alt="icon" />
        </div>
        <div className="card-body">
          <h4>Vikram R</h4>
          <p>CEO</p>
        </div>
      </div>
      <div className="team-container">
        {TeamData.map((member) => (
          <div className="card" key={member.id}>
            <div className="card-img">
              <img src={member.teamImg} alt="icon" />
            </div>
            <div className="card-body">
              <h4>{member.memberTitle}</h4>
              <p>{member.memberDescription}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="discord-container">
        <div className="section-title">
          <h2>Discord Team</h2>
        </div>
        <div className="card-alone card-alone-2">
          <div className="card-img">
            <img src={Discordimg} alt="icon" />
          </div>
          <div className="card-body">
            <h4>Punk Me Tender</h4>
            <p>The Artist</p>
          </div>
        </div>
        <div className="team-container">
          {TeamData.map((member) => (
            <div className="card" key={member.id}>
              <div className="card-img">
                <img src={member.discordTeamImg} alt="icon" />
              </div>
              <div className="card-body">
                <h4>{member.memberTitle}</h4>
                <p>{member.memberDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </Wrapper>
  );
}

export default Team;
