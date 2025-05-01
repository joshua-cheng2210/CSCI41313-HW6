const key = "demo";

async function fetchStockTicker() {
    const input = document.getElementById("stockTickerInput").value;

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${input}&interval=60min&apikey=${key}&datatype=json`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'request'
            }
        });

        if (!response.ok) {
            console.log('Status:', response.status);
            document.getElementById("stockTickerResponse").value = "Failed to fetch data from Alpha Vantage API";
            return;
        }

        const data = await response.json();
        console.log(data);
        document.getElementById("stockTickerResponse").value = JSON.stringify(data, null, 2);

    } catch (error) {
        console.log('Error:', error);
        document.getElementById("stockTickerResponse").value = error;
    }
}