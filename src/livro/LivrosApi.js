const URL =

export async function findAll() {
    const requestInit = {
      method: "GET",
      Headers: {
        Authorization: "Bearer 12120117",
      },
    };
  
    const responseHttp = await fetch("URL", requestInit);
  
    if (responseHttp.ok) {
      return await responseHttp.json();
    } else {
      throw new Error("Falha ao consultar os livros");
    }
  }
  