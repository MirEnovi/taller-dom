const url = "https://raw.githubusercontent.com/MirEnovi/taller-dom/master/data/students.json";
window.onload = () => {
    fetch (url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            renderInfo(data)
        })
        .catch(error =>{
            console.log("error");
            //funcion que aun no existe pero que crearemos mas abajo.
            renderInfo(data);
            
        })
}