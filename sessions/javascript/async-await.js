async function dataFetch() {
    const response = await fetch("https://fake-json-api.mock.beeceptor.com/users");
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // console.log(data)

    
}
dataFetch();