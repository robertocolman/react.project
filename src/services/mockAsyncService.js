const databaseItems = [
    {
        id: 1,
        title: "cafe suave",
        price: 400,
        detail: "cafe suave marca dolca",
        imgurl: "https://farmacityar.vteximg.com.br/arquivos/ids/210957-1000-1000/221824_cafe-instantaneo-nescafe-dolca-suave-x-170-g_imagen-1.jpg?v=637587796594730000",               
    },
    {
        id: 2,
        title: "cafe fuerte",
        price: 500,
        detail: "cafe fuerte marca dolca",
        imgurl: "https://farmacityar.vteximg.com.br/arquivos/ids/219961-1000-1000/226259_cafe-nescafe-dolca-original-x-117-g_imagen-1.jpg?v=637818239193970000"
    },         
    {
        id: 3,
        title: "cafe capuccino",
        price: 800,
        detail: "cafe capuccino dolca",
        imgurl: "/assets/img/capuccino.webp"
    },   
    {
        id: 4,
        title: "cafe latte",
        price: 1000,
        detail: "cafe latte dolca",
        imgurl: "/assets/img/latte.png"
    },   

]

export default function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(databaseItems);
      }, 1);
    });
  }
  
  export function getSingleItem(itemid) {
    let itemReq = databaseItems.find((item) => {
      return item.id === parseInt(itemid);
    });
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (itemReq !== undefined) resolve(itemReq);
        else reject("Item no encontrado en la base de datos.");
      }, 200);
    });
  }
  
  export function getItemsByCategory(categoryid) {
    let itemsCat = databaseItems.filter((item) => item.category === categoryid);
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsCat);
      }, 200);
    });
  }