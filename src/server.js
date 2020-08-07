//Dados constantes
const proffys = [
    { 
        name: "Diego Fernandes", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
        whatsapp: "8998454165", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    { 
        name: "Gabriel Quiroga", 
        avatar:"https://static.vagas.com.br/fotoscandidatos/63856215/thumb_a2ff326d501f057c1e1e3bd2bf9fde7ea457d1afeb931e93dc243e6b657e4e1a.png" , 
        whatsapp: "8998454165", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Biologia", 
        cost: "20", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    
    "Artes",
    "Biologia",
    "Ciências",
    "Educação físia",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
       
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",

]

//Funções/funcionalidades

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays} )
}

function pageGiveClasses(req, res) {
    const data = req.query
    
    //transformando os dados em um array e verificando se há valor dentro do array
    const isNotEmpty = Object.keys(data).length != 0
    
    //adicionar data a lista de proffys se houver data para adicionar
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
    
        proffys.push(data)
        
        return res.redirect("/study")
    }

    //se não, mostrar a página
    return res.render("give-classes.html", { weekdays, subjects })
}

//Chamada do servidor
const express = require('express')
const server = express()

// configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    
    express: server,
    noCache: true,

})

//Inicio e configuração do servidor
server

// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

//Comando de start do server
.listen(5500)

