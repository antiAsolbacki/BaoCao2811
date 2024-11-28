const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');


signUpBtn.addEventListener('click', () => {
    const username = document.getElementById('text').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // check inf
    if (username && password) {
        
        const userData = { username, password };
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Sign up successful!');
        
        document.getElementById('text').value = '';
        document.getElementById('password').value = '';
    } else
     {
        alert('Please fill in all fields.');
    }
});


// signInBtn.addEventListener('click', () => 
// {
//     const username = document.getElementById('text').value;
//     const password = document.getElementById('password').value;

    
//     if (username && password) 
//     {
        
//         const storedData = localStorage.getItem('userData');
        
//         if (storedData) {
//             const user = JSON.parse(storedData);

           
//             if (user.username === username && user.password === password)
            
//             {
                
                
//                 alert('Sign in successful!');


//             } else 
            
//             {

//                 alert('Invalid username or password.');
//             }

//         } else {
//             alert('No user found. Please sign up first.');
//         }

        
//         document.getElementById('text').value = '';
//         document.getElementById('password').value = '';
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

// transition cua 2 page
signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});


