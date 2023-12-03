document.getElementById("submitButton").addEventListener("click", async (e) => {
    let data = {
        "username": document.getElementById("emailAddress").value,
        "password": document.getElementById("emailPassword").value
    };
    let response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    let result = await response.json();
    let msg = document.getElementById("user-message");
    if (!result.login_success)
    {
        msg.textContent = result.reason;
    }
    else
    {
        location.href = "/";
    }
})

document.getElementById("signUpButton").addEventListener("click", async (e) => {
    let data = {
        "username": document.getElementById("emailAddress").value,
        "password": document.getElementById("emailPassword").value
    };
    let response = await fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    let result = await response.json();
    let msg = document.getElementById("user-message");
    if (!result.signup_success)
    {
        msg.textContent = result.reason;
    }
    else
    {
        msg.textContent = "회원가입에 성공했습니다.";
    }
})