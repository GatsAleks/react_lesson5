import React from "react";
import StickerItem from "../stickerItem/StickerItem";
import "./stickerField.css";

export default function StickerField({
  stickerList,
  onDelete,
  onCreateSticker,
  onUpdate,
}) {
  return (
    <>
      <div className="stickerField">
        {stickerList.map((item) => (
          <StickerItem
            key={item.id}
            id={item.id}
            description={item.description}
            onDelete={onDelete}
            onCreateSticker={onCreateSticker}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </>
  );
}
