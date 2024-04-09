document
  .getElementById("makePaymentButton")
  .addEventListener("click", makePayment);

function makePayment() {
  const requestData = {
    domain: "rewardscenter.club",
    APIKey: "1cc2f734-9d18-48cc-81f6-5b2801fea8d2",
    capture_delay: 0,
    MerchantID: "0",
    buildorder: 1,
    card_num: "4867966912576317",
    card_expm: "09",
    card_expy: "2027",
    card_cvv: "123",
    CustomerFirstName: "Jeff",
    CustomerLastName: "Lourent",
    BillingStreetAddress: "2205 Butterfield Rd",
    BillingCity: "Yakima",
    BillingState: "WA",
    BillingZipCode: "98901",
    ShippingFirstName: "",
    ShippingLastName: "",
    ShippingStreetAddress: "",
    ShippingApt: "",
    ShippingCity: "",
    ShippingState: "",
    ShippingZipCode: "",
    Email: "lourentjeff143@gmail.com",
    BillingHomePhone: "5095172060",
    amount: 2.85,
    ProductCount: 1,
    productid_1: 43,
  };

  fetch("https://app.periodicalservices.com/api/woocommerce/v1.8/process.asp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => {
      if (!response.ok) {
        console.log(response);
        return;
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("responseOutput").textContent = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((error) => {
      console.error("Error:", error.message, " ", error);
      document.getElementById(
        "responseOutput"
      ).textContent = `Error: ${error.message} ${error}`;
    });
}
