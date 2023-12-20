import React from "react";

interface ICopyToClipboard {
  text: string;
}

const CopyToClipboard: React.FC<ICopyToClipboard> = ({ text }) => {
  const handleCopyText = () => {
    console.log(text);
    navigator.clipboard.writeText(text!).then(
      (success) => console.log("copied", success),
      (error) => console.log("error", error)
    );
  };
  return (
    <>
      <button onClick={handleCopyText}>Copy!</button>
    </>
  );
};

export default CopyToClipboard;
