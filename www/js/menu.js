
function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(dados) {
    
    linha = document.createElement("tr");
    companyName = document.createElement("td");
    mission = document.createElement("td");
    date = document.createElement("td");
    
    companyName.innerHTML = dados.provider.name;
    mission.innerHTML = dados.name;
    date.innerHTML = dados.date_str

    linha.appendChild(companyName);
    linha.appendChild(mission);
    linha.appendChild(date);
    
    console.log(dados);

    return linha;
}

function mainLaunch(){
    let data = fazGet("https://fdo.rocketlaunch.live/json/launches/next/5")

    let rocketLaunchs = JSON.parse(data)
    let tabela = document.getElementById("grid")

    rocketLaunchs.result.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

//==================================================

function mainLaunchSpaceX(){
    let data = fazGet("https://api.spacex.land/rest/launches-past")

    let rocketLaunchsSpaceX = JSON.parse(data)
    let tabela = document.getElementById("gridSpaceX")

    console.log(rocketLaunchsSpaceX);
    
    //contador vai tancar a quantidade das coisas que o troço retorna 
    var contador = 0;

    console.log(typeof(contador))
    rocketLaunchsSpaceX.forEach(element => {
        if(contador <= 4){
            let linha = criaLinhaGrid2(element);
            tabela.appendChild(linha);
        }
        contador++;
    });
}

function criaLinhaGrid2(dados) {
    
    linha = document.createElement("tr");
    companyName = document.createElement("td");
    mission = document.createElement("td");
    date = document.createElement("td");

    companyName.innerHTML = "SpaceX";
    mission.innerHTML = dados.mission_name;
    date.innerHTML = dados.launch_date_local

    linha.appendChild(companyName);
    linha.appendChild(mission);
    linha.appendChild(date);

    return linha;
}

mainLaunch()

mainLaunchSpaceX()