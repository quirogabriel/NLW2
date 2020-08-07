// Procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField) // seleciona e identifica o campo em que a ação de clique ocorre

function cloneField(){
    
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // faz com que, ao clicar, o campo se duplique(cloneNode(true))*valores da condição em boolean{true or false}*
    
    const fields = newFieldContainer.querySelectorAll('input') // Seleciona todos os campos de preenchimento que foram recolhidos .

    fields.forEach(function(field){ // Seleciona os campos preenchidos do momento, e apaga as informações inseridas nele anteriormente para que possa ser duplicado
        field.value = ""
    })
    document.querySelector('#schedule-items').appendChild(newFieldContainer) // identifica o local no qual o campo deve ser enviado e aplicado ao ser duplicado
}
    

    