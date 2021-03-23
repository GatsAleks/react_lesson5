import React from "react";
import "./stickerHeader.css";

export default function StickerHeader({ onCreateSticker }) {
  const onAddNewSticker = () => {
    onCreateSticker({ description: "" });
  };

  return (
    <div className="header">
      <h1> Stickers Field</h1>
      <button onClick={onAddNewSticker}>Add new Sticker</button>
    </div>
  );
}
