 function generateshapes(){
            let workarea = document.querySelector(".work-area");
            let number = document.getElementById("number").value;
            let shape = document.getElementById("shape").value;
            let color = document.getElementById("shapecolor").value;
            let container = document.querySelector(".container");
        
            for (let i = 0; i < Math.round(number); i++){
                let shapeElement = document.createElement("div");
                shapeElement.classList.add("shape");
                shapeElement.style.backgroundColor = color;
                if (shape === "circle"){
                    shapeElement.style.borderRadius = "50%";
                }
                workarea.appendChild(shapeElement);
            }
        }