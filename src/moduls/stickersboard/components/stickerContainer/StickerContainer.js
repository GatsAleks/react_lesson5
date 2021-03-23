import React, { useState, useEffect } from "react";
import {
  getStick,
  deleteStick,
  createStick,
  updateStick,
} from "../../services/stickerService";

import StickerField from "../stickerField/StickerField";
import StickerHeader from "../stickerHeader/StickerHeader";

export default function StickerContainer() {
  const [stickerList, setStickerList] = useState([]);

  useEffect(() => {
    getStick().then((stickerList) => setStickerList(stickerList));
  }, []);

  const deleteSticker = (id) => {
    deleteStick(id);
    setStickerList(stickerList.filter((item) => item.id !== id));
  };

  const onCreateSticker = (newItem) => {
    createStick(newItem).then((data) => {
      setStickerList([...stickerList, data]);
    });
  };

  const onUpdate = (id, newItem) => {
    updateStick(id, newItem);

    getStick().then((stickerList) => setStickerList(stickerList));
  };

  return (
    <>
      <StickerHeader
        stickerList={stickerList}
        setStickerList={setStickerList}
        onCreateSticker={onCreateSticker}
      />
      <StickerField
        stickerList={stickerList}
        setStickerList={setStickerList}
        onDelete={deleteSticker}
        onCreateSticker={onCreateSticker}
        onUpdate={onUpdate}
      />
    </>
  );
}
