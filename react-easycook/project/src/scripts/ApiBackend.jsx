import { React } from "react";

const baseUrl = "http://localhost:3001";

export class FetchScript {
  static RequestPaths = {
    // Adicionar estoque e provavelmente outros
    usuarios: "/usuario/",
    ingredientes: "/ingrediente/",
    receitas: "/receita/",
    listas: "/lista/",
    opcoes: "/opcoes/",
    monitoracao: "/monitoracao/",
  };

  static listAllData = async (objectUrl) => {
    var d;
    var response = await fetch(`${baseUrl}${objectUrl}`)
      .then((response) => response.json())
      .then((data) => (d = data))
      .catch(console.log);

    return Promise.resolve(d);
  };

  static getDataById = async (objectUrl, objectId) => {
    var response = await fetch(`${baseUrl}${objectUrl}${objectId}`)
      .then((response) => response.json())
      .then((data) => (response = data))
      .catch(console.log);

    return Promise.resolve(response);
  };

  static postData = async (objectUrl, body) => {
    var response;
    try {
      fetch(`${baseUrl}${objectUrl}`, {
        method: "POST",
        mode: "cors",
        body: body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then()
        .then((data) => (response = data));
      return Promise.resolve(response);
    } catch (error) {
      console.log(error);
    }
  };

  //objectUrl format: /path/
  static patchApiData = async (objectUrl, objectId, requestBody) => {
    try {
      const result = await fetch(baseUrl + objectUrl + objectId, {
        method: "PATCH",
        body: requestBody,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.ok) {
        console.log("Quantidade atualizada com sucesso no banco de dados.");
      } else {
        console.error("Falha ao atualizar a quantidade no banco de dados.");
      }
    } catch (error) {
      console.error("Erro ao atualizar a quantidade no banco de dados:", error);
    }
  };
}
