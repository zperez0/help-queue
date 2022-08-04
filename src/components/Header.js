import React from "react";
import ticketsImage from "./../img/tickets.png";

function Header(){
  const headerStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return (
    <div style={headerStyles}>
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="An image of tickets" />
    </React.Fragment>
    </div>
  );
}

export default Header;