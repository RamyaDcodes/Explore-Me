// Function to generate random password
function genarate(){
    const length = 10;  // Set the desired length of the password
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$%&*-(+){?/}|!/~';
    let finalpass = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        finalpass += characters[randomIndex];
    }

    // Update the result in the HTML
    document.getElementById('result').textContent = finalpass;
}
