import React, { useState } from "react";

interface ICopyToClipboard {
  text: string;
}

const CopyToClipboard: React.FC<ICopyToClipboard> = ({ text }) => {
  const [copyText, setCopyText] = useState<boolean>(false);
  const handleCopyText = () => {
    navigator.clipboard.writeText(text!).then(() => {
      setCopyText(true);
      setTimeout(() => {
        setCopyText(false);
      }, 5000);
    });
  };
  return (
    <>
      <button onClick={handleCopyText}>{copyText ? "Copied!" : "Copy"}</button>
    </>
  );
};

export default CopyToClipboard;
