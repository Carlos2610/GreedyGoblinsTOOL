import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

import { ConnectButton } from "web3uikit";

const truncateStr = (fullStr, strLen) => {
  if (fullStr.length <= strLen) return fullStr;

  const separator = "...";
  let separatorLength = separator.length;
  const charToShow = strLen - separatorLength;
  const frontChars = Math.ceil(charToShow / 2);
  const backChars = Math.floor(charToShow / 2);
  return (
    fullStr.substring(0, frontChars) +
    separator +
    fullStr.substring(fullStr.length - backChars)
  );
};

export default function Web3Login({ text }) {
  const [dropdown, setDropdown] = useState(false);
  const { isWeb3Enabled, account } = useMoralis();

  function handleClick() {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  }

  const formattedSellerAddress = truncateStr(account || "", 12);

  return (
    <div className="flex flex-col bg-white rounded m-3 p-2 items-center">
      {isWeb3Enabled ? (
        <div>Connected {formattedSellerAddress}</div>
      ) : (
        <div>
          <button className="font-bold px-7" onClick={handleClick}>
            Web3 xPerience
          </button>
          {dropdown ? (
            <ConnectButton moralisAuth={false}></ConnectButton>
          ) : (
            <h6 className={dropdown ? "invisible" : "visible items-center"}>
              ¡Se un verdadero goblin!
            </h6>
          )}
        </div>
      )}
    </div>
  );
}
