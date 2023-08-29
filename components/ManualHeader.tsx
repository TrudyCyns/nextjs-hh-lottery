import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";

function ManualHeader() {
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) return;
    if (window.localStorage.getItem("connected") === "injected") {
      enableWeb3();
    }
  }, [enableWeb3, isWeb3Enabled]);

  // useEffect to check for us being disconneted
  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      if (account === null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
      }
    });
  });

  return (
    <div>
      {account ? (
        <div>
          Connected to {account.slice(0, 6)}...
          {account.slice(account.length - 4)}
        </div>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();

            window.localStorage.setItem("connected", "injected");
          }}
          disabled={isWeb3EnableLoading}
        >
          Connect
        </button>
      )}
    </div>
  );
}

export default ManualHeader;
