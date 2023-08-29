import React from "react";
import { ConnectButton } from "web3uikit";

function Header() {
  return (
    <div>
      D_L0tte
      <ConnectButton moralisAuth={false} />
    </div>
  );
}

export default Header;
