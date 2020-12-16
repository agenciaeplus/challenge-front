(async () => {
    const data = await fetch("data/products.json", {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    
    console.log(data);
})();