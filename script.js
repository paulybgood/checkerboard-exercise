// Your JS goes here

for (let i = 1; i <= 8; i++) {
    if (i % 2 === 0) {
        for (let j = 0; j <= 7; j++) {
            const div = document.createElement("div");
            document.body.style.width = "100vh";
            document.body.style.height = "100vh";
            div.style.width = "12.5%";
            div.style.height = "12.5%";
            div.style.float = "left";
            document.body.appendChild(div);
            if (j % 2 === 0) {
                div.style.backgroundColor = "red";
            
            } else {
                div.style.backgroundColor = "black";
            }
        }
    } else {
        for (let j = 0; j <= 7; j++) {
            const div = document.createElement("div");
            document.body.style.width = "100vh";
            document.body.style.height = "100vh";
            div.style.width = "12.5%";
            div.style.height = "12.5%";
            div.style.float = "left";
            document.body.appendChild(div);
            if (j % 2 === 1) {
                div.style.backgroundColor = "red";
            
            } else {
                div.style.backgroundColor = "black";
            }
        }
    }
}