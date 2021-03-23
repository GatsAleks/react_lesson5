import { STICKERS_URL } from "../constants";

export function getStick() {
  return fetch(STICKERS_URL).then((res) => res.json());
}

export function updateStick(id, newItem) {
  return fetch(STICKERS_URL + "/" + id, {
    method: "PUT",
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

export function deleteStick(id) {
  return fetch(STICKERS_URL + "/" + id, {
    method: "DELETE",
  }).then((res) => res.json());
}

export function createStick(newItem) {
  return fetch(STICKERS_URL, {
    method: "POST",
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
