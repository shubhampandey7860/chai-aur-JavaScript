const Detail = new Promise(function(resolve, reject) {
    
    setTimeout(function() {
        
        resolve('request successful');
       
    }, 1000); 
});

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


getAllUsers();


Detail.then(function(message) {
    console.log(message);
}).catch(function(error) {
    console.error(error);
});
