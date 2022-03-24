function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function InserirImagem(url) {
    let img = document.createElement("img");
    img.src=url;
    document.body.appendChild(img);
}

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
            let linha = criaLinhaGrid2(element, contador);
            tabela.appendChild(linha);
        }
        contador++;
    });
}

function criaLinhaGrid2(dados,contador) {
    
    let urls = ["./img/spaceX/starLink1.jpg", 
    "./img/spaceX/starLink2.png", 
     "./img/spaceX/sentinel1.jpg",
      "./img/spaceX/sentinel2.jpg",
        "./img/spaceX/crew1.jpg",
        "./img/spaceX/crew2.jpg",
        "./img/spaceX/gps1.png",
        "./img/spaceX/gps2.jpg",
        "./img/spaceX/st1.jpg",
        "./img/spaceX/st2.jpg",
           
    ]

    linha = document.createElement("tr");
    companyName = document.createElement("tr");
    mission = document.createElement("tr");
    date = document.createElement("tr");
    details = document.createElement("tr");
    rocketName = document.createElement("tr");
    local = document.createElement("tr");
    sucess = document.createElement("tr");
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
        img.innerHTML = img.src=urls[4]
        img2.innerHTML = img2.src=urls[5]
       
    }

    if(contador == 3){
        img.innerHTML = img.src=urls[6]
        img2.innerHTML = img2.src=urls[7]
        
    }
    if(contador == 4){
        img.innerHTML = img.src=urls[8]
        img2.innerHTML = img2.src=urls[9]
       
    }

    companyName.innerHTML = "SpaceX";
    mission.innerHTML = dados.mission_name;
    date.innerHTML = dados.launch_date_local;
    details.innerHTML = dados.details;
    rocketName.innerHTML = dados.rocket_name;
    local.innerHTML = dados.launch_site.site_name_long;
    sucess.innerHTML = dados.launch_success;
    quebraLinha.innerHTML = " ";

    linha.appendChild(companyName);
    linha.appendChild(mission);
    linha.appendChild(date);
    linha.appendChild(details);
    linha.appendChild(rocketName);
    linha.appendChild(local);
    linha.appendChild(sucess);
    linha.appendChild(img);
    linha.appendChild(img2);
 
    linha.appendChild(quebraLinha);
 
    return linha;
}

mainLaunchSpaceX()