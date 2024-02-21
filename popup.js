import { getActiveTabURL } from "./utils";  
const addNewOrder = (orders,order) => {
    const orderTitleElement = document.createElement("div");
  const controlsElement = document.createElement("div");
  const newOrderElement = document.createElement("div");

  orderTitleElement.textContent = bookmark.desc;
  orderTitleElement.className = "order-title";
  controlsElement.className = "order-controls";



  newOrderElement.id = "order-" + order.time;
  newOrderElement.className = "order";
  newOrderElement.setAttribute("timestamp", order.time);

  newOrderElement.appendChild(orderTitleElement);
  newOrderElement.appendChild(controlsElement);
  orders.appendChild(newOrderElement);
    

};

const viewOrders = (currentOrders=[]) => {
    const ordersElement = document.getElementById("orders");
    ordersElement.innerHTML = "";

    if(currentOrders.length > 0){
        for(let i =0; i <currentOrders.length;i++){
            const order = currentOrders[i];
            addNewOrder(ordersElement,order);
        }
    }else{
        ordersElement.innerHTML = '<i class="row">No orders to show</i>';
    }

    return;
};




document.addEventListener("DOMContentLoaded", async () => {});
