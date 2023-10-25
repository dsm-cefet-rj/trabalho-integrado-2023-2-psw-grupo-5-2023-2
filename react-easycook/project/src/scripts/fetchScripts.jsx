import React from "react";

export class FetchScript {
  static getApiData = async (dataType) => {
    var t;
    const response = await fetch(`/${dataType}`)
      .then((response) => response.json())
      .then((data) => (t = data))
      .catch(console.log);

    return Promise.resolve(t);
  };

  static postApiData = async (dataType, body) => {
    fetch(`/${dataType}`, {
      method: "POST",
      mode: "cors",
      body: body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
}
