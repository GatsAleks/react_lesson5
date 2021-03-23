import React, { useState } from "react";
import "./stickerItem.css";

export default function StickerItem({ description, id, onDelete, onUpdate }) {
  const [value, setValue] = useState(description);
  const [editSticker, setEditSticker] = useState({ description: "" });

  const onDeleteSticker = (e) => {
    onDelete(id);
  };

  const onInputChange = (e) => {
    setValue(e.target.value);
    setEditSticker({ [e.target.name]: e.target.value });
  };

  const onBlur = (e) => {
    onUpdate(Number(e.target.id), editSticker);
  };

  return (
    <div className="stickerItem" id={id}>
      <div className="stickerItem__header">
        <div>Sticker</div>
        <div className="stickerItem__header__delete" onClick={onDeleteSticker}>
          X
        </div>
      </div>
      <div className="stickerItem__text">
        <textarea
          id={id}
          onChange={onInputChange}
          onBlur={onBlur}
          type="text"
          name="description"
          value={value}
        >
          {description}
        </textarea>
      </div>
    </div>
  );
}
