function login() {
    user = document.getElementById("usernameLogin").value;
    pass = document.getElementById("passwordLogin").value;
    console.log(user);
    console.log(pass);

    if (user == "" || pass == "") {
        alert("Fill in all form input fields")
    } else {

    
    var loginCredentials= {username: user, password: pass};

    fetch("/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginCredentials)
    })
    .then((response) => response.json())
    .then(data => {
        password = data[0].password;
        user_id = data[0].user_id;

        console.log(password);
        if (pass == password) {
            console.log("success");

            dob = data[0].date_of_birth;
            console.log(data[0].date_of_birth);

            birthyear = dob.substring(0,4);
            var d = new Date();
            var thisyear = d.getFullYear();
            age = thisyear - birthyear;

            // create session for user
            sessionStorage.setItem('username', user);
            sessionStorage.setItem('user_id', user_id);
            sessionStorage.setItem('age', age);
            window.location = "user.html";
        } else if (pass != password) {
            console.log("failure");
            alert("User Log In Failure");
        } else {
            console.log("no user");
            alert("User non-existent");
        }  
    });
}
}

function register() {
    
    userR = document.getElementById("usernameRegister").value;
    console.log(userR);
    passR = document.getElementById("passwordRegister").value;
    emailR = document.getElementById("emailRegister").value;
    dobR = document.getElementById("dobRegister").value;
    genR = document.getElementById("genderRegister").value;


    if (userR == "" || passR == "" || emailR == "" || dobR == "" || genR == ""){
        alert("Fill in all form input fields")
    } else {

    var registerCredentials = {username: userR, email_address: emailR, date_of_birth: dobR, gender: genR, password: passR};
    errcode = 0;
    passcode = 1;

    fetch("/adduser", {
        method: "POST",
        headers: {
            'Acccept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerCredentials)

    })
    .then((response) => response.json())
    .then((data) => {
        // TODO: Check if username is used. RETHINK TIMING OF THIS, (should be while typing username, not after submit form)
        registercode_array = data;
        console.log(registercode_array);
        console.log(registercode_array.code);
        if (registercode_array.code == errcode){
            console.log("Username taken");
            alert("Username taken");
        }  else {
            console.log("User Registered");
            alert("User Registered");
        
            var loginCredentials= {username: userR, password: passR};

            fetch("/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginCredentials)
            })
            .then((response) => response.json())
            .then(data => {
                password = data[0].password;
                user_id = data[0].user_id;
                dob = data[0].date_of_birth;

                birthyear = dob.substring(0,4);
                var d = new Date();
                var thisyear = d.getFullYear();
                age = thisyear - birthyear;
                // There's no way to fail login if its part of register
                sessionStorage.setItem('username', userR);
                sessionStorage.setItem('user_id', user_id);
                sessionStorage.setItem('age', age);
                window.location = "user.html";
            });
        }
    });
}    
}


function logout() {
    //clear sessionStorage.
    // sessionStorage is also cleared and user logged out when tab is closed.
    sessionStorage.clear();
    window.location = "login.html";
}

function checkInSession() {
    // Check if user is already in session. 
    // If he is: Present user.html when account icon is clicked, else: present login page.
    var check = sessionStorage.getItem("user_id");
    if (check == null){
        window.location = "/login.html";
    } else {
        window.location = "/user.html";
    }

}

function showGamerID() {
    var user_id = sessionStorage.getItem("user_id");
    fetch("/users/"+user_id)
    .then((response) => response.json())
    .then((data) => {
        email_address = data[0].email_address;
        gender = data[0].gender;
        console.log(gender);

    if (gender == "Male"){
        document.getElementById("profileImagey").src = "/images/uploads/male.png";
    } else if (gender == "Female") {
        document.getElementById("profileImagey").src = "/images/uploads/female.png";
    }
    
    var username = sessionStorage.getItem("username");
    var userfield = document.getElementById("username");
    userfield.innerHTML = 'Welcome ' + username;

    var emailfield = document.getElementById("emailfield");
    emailfield.innerHTML = 'Email Address: ' + email_address;

   
})
}

//change password?
function goUpdateUser() {
    window.location = "updateuser.html";
}

function updateUser() {

    var userid = sessionStorage.getItem("user_id");
    var uEmail = document.getElementById('updateEmail').value;
    var uPass = document.getElementById('updatePass').value;
    console.log(uEmail);

    if (uEmail == ""|| uPass == "") {
        alert("Fill in all form input fields")
    } else {
    var updateDetails = {email_address: uEmail, password: uPass};

    fetch('/updateuser/'+userid, {
        method: 'PUT',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        }, 
        body: JSON.stringify(updateDetails)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        alert("Profile updated");
        window.location = "user.html";
    });
}
}


function trickpony() {
    TP = '<img id="profileImage" src="/images/uploads/1.png">';
    document.getElementById("profileImagey").src = "/images/uploads/1.png";
}