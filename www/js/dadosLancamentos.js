function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

var contador = 0;
function mainLaunch(){
    let data = fazGet("https://fdo.rocketlaunch.live/json/launches/next/5")

    let rocketLaunchs = JSON.parse(data)
    let tabela = document.getElementById("gridGerais")

    rocketLaunchs.result.forEach(element => {
        let linha = criaLinha(element, contador);
        tabela.appendChild(linha);
        contador++;
    });
}

function criaLinha(dados, contador) {

    let urls = ["./img/geral/ns1.jpg", 
    "./img/geral/ns2.jpg",
    "./img/geral/rl1.jpg",
        "./img/geral/rl2.jpg", 
    "./img/geral/tp1.jpg",
     "./img/geral/tp2.jpg",
      "./img/geral/ax1.jpg",
       "./img/geral/ax2.jpg",
        "./img/geral/nr1.jpg",
        "./img/geral/nr2.webp"
        
    ]
    
    linha = document.createElement("tr");
    companyName = document.createElement("tr");
    mission = document.createElement("tr");
    date = document.createElement("tr");
    mission_description = document.createElement("tr");
    launch_description = document.createElement("tr");
    vehicle = document.createElement("tr");
    estacao = document.createElement("tr");
    img = document.createElement("img");
    img2 = document.createElement("img");

    document.body.appendChild(img);
    quebraLinha = document.createElement("p");

    if(contador == 0){
        img.innerHTML = img.src=urls[0]
        img2.innerHTML = img2.src=urls[1]
    }

    if(contador == 1){
        img.innerHTML = img.src=urls[2]
        img2.innerHTML = img2.src=urls[3]
    }

    if(contador == 2){
        img.innerHTML = img.src=urls[3]
        img2.innerHTML = img2.src=urls[4]
    }

    if(contador == 3){
        img.innerHTML = img.src=urls[5]
        img2.innerHTML = img2.src=urls[6]
    }

    if(contador == 4){
        img.innerHTML = img.src=urls[7]
        img2.innerHTML = img2.src=urls[8]
    }
    quebraLinha.innerHTML = " ";

    companyName.innerHTML = dados.provider.name;
    mission.innerHTML = dados.name;
    date.innerHTML = dados.date_str;
    mission_description.innerHTML = dados.mission_description;
    launch_description.innerHTML = dados.launch_description;
    vehicle.innerHTML = dados.vehicle.name;
    estacao.innerHTML = dados.pad.location.name;


    linha.appendChild(companyName);
    linha.appendChild(mission);
    linha.appendChild(date);
    linha.appendChild(mission_description);
    linha.appendChild(launch_description);
    linha.appendChild(vehicle);
    linha.appendChild(estacao);
    linha.appendChild(img);
    linha.appendChild(img2);
    linha.appendChild(quebraLinha);

    return linha;
}
mainLaunch()