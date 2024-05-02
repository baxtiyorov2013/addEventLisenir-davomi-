document.getElementById("form").addEventListener("submit", function name(event) {
    event.preventDefault();

    const modemId = document.getElementById("form-inp").value;
    const password = document.getElementById("inp").value;

    if (modemId === "702207" && password === "75849") {
        const newElement = document.createElement("p");
        const newText = document.createTextNode("Spacega xush kelibez");
        newElement.appendChild(newText);
        newElement.style.color = "green";
        newElement.style.fontSize = "24px";
        newElement.style.fontWeight = "bold";
        newElement.style.textAlign = "center";
        newElement.style.padding = "10px";
        newElement.style.marginTop = "20px";
        newElement.style.fontFamily = "Roboto";
        document.body.appendChild(newElement);
    } else {
        const newElement = document.createElement("p");
        const newText = document.createTextNode("Notg'ri ID yoki password");
        newElement.appendChild(newText);
        newElement.style.color = "red";
        newElement.style.fontSize = "24px";
        newElement.style.fontWeight = "bold";
        newElement.style.textAlign = "center";
        newElement.style.padding = "10px";
        newElement.style.marginTop = "20px";
        newElement.style.fontFamily = "Roboto";
        document.body.appendChild(newElement);
    }
});