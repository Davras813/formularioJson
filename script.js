let bd = []
function crearJson(){
    //capturar datos
    let nombre = document.querySelector("#nombre").value
    let apellido = document.querySelector("#apellido").value
    let aspiracion= document.querySelector("#aspiracion").value
    let correo = document.querySelector("#correo").value
    let genero = document.querySelector("#genero").value
    //let cargo = document.querySelector("#cargo").value

    let obj={
        nombre,
        apellido,
        aspiracion,
        correo,
        genero,
        cargo
    }

    bd.push(obj)
    console.log(bd)
}