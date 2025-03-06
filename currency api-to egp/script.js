fetch("https://api.freecurrencyapi.com/v1/latest?apikey=zRVi6UUeVw2w35Hxgo2AGxu098jLeCqXDO35u7c8")
    .then((result) => {
        console.log(result);

        let myData = result.json();
        console.log(myData);
        return myData;
    }).then((currency) => {
        let amount = document.querySelector(".amount");
        let egpPrice = document.querySelector(".egp span");
        let sarPrice = document.querySelector(".sar span");

        egpPrice.innerHTML = Math.round(amount.innerHTML * currency.data["EUR"]);
        sarPrice.innerHTML = Math.round(amount.innerHTML * currency.data["ZAR"]);

        console.log(currency.data["EUR"]);
        //     console.log(currency);
        //     console.log(currency["ZAR"]);
    });