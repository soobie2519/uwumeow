
function getIP(json) {
    let userIP = json.ip;
    console.log('Got IP:', userIP);
    document.getElementById("submit").onclick = "doNothing()";
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    console.log("email:", email, "message:", message); // Check these exist

    fetch("https://discord.com/api/webhooks/1481739081531785370/iu_xLKPD5fRW7k634XgBE1RZmuBhRCf0g31G-Dk2J-VtqIKh4rOGm_gAgo_Kmi-t0VFU", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            content: message || "e",
            username: email || userIP
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))  // Shows Discord's exact error
        .catch(err => console.error(err));

    setTimeout(() => {
        document.getElementById("notifications-container").style.visibility = "visible";
    }, 150);


    setTimeout(() => {
        window.location.href = "/";
    }, 4500);

}



function submit_button() {

    let script = document.createElement('script');
    script.src = 'https://api.ipify.org?format=jsonp&callback=getIP';
    document.head.appendChild(script);

}

function doNothing() {
    print("e")
}


