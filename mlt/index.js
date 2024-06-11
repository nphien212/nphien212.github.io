fetch('https://maylangthang.saola.tech/wp-json/mp-show/get-branchs/')
    .then(response => response.json())
    .then(data => {
        // Do something with the data
        console.log(data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    }); 
