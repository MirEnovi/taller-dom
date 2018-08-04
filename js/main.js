const container = document.getElementById("result");

renderInfo = (data) => {
    const boton =document.getElementById("btn");
    
    boton.addEventListener( "click", (event) => {
        let result = "";
        // console.log(Object.values(data)[0]);
        const info = Object.values(data)[0];
        // console.log(info);
        
        for (let i = 0; i<info.length; i++){
            console.log(info[i].name);
            
            result += `<div class="card">
                            <div class="info">
                                <p>Nombre: ${info[i].name}</p>
                                <p>Active:  ${info[i].active}</p>
                                <p>Progress JS: ${info[i].progress.javascript}</p>
                                <p>Progress UX: ${info[i].progress.UX}</p>
                            </div>
                        </div>`
            
        }
        container.innerHTML=result;
    });
}   


// creamos la funcion que iteraracon la info del json
