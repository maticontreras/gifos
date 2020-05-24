const APIurl = "https://api.giphy.com/v1/gifs/";
const APIkey = "WCBtXMmRUP3tRuBx84k3dbp0k3qpYxqf";


//funcion buscar

function getSearchResults() {
  
  search = document.getElementById("search").value;
    const found = fetch('http://api.giphy.com/v1/gifs/search?q=' + search  + '&api_key=' + "WCBtXMmRUP3tRuBx84k3dbp0k3qpYxqf")
        .then(response => { 
           return response.json();
        })
        .then(resultado => {
            cargarimagenes(resultado);
            console.log(resultado);
        })
        .catch(error => `Error en 1er fetch: ${error}`);
}

function cargarimagenes(resultado){
     let basededatos = resultado;
     var i;
     let $items = document.querySelector('#seccion-tendencias');
     for(i in basededatos.data ){
        var title= basededatos.data[i].title;
        var imagen = basededatos.data[i].images.fixed_width.url;
        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('div-automatico'+ i);
        miNodoCardBody.classList.add('div-imagen-busqueda');
        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', imagen);
        miNodoCardBody.appendChild(miNodoImagen);
        $items.appendChild(miNodoCardBody); 
    }   
}

function getTrendingData() {
    var url =
      "https://api.giphy.com/v1/gifs/trending?api_key=WCBtXMmRUP3tRuBx84k3dbp0k3qpYxqf";
  
    fetch(url)
      .then(data => data.json())
      .then(res => {
        console.log(res);
       var _tenGifs = document.getElementById("tenGifs");
       for(let i=0; i< 10 ;i++) {
         var trendyImagen = res.data[i].images.fixed_width.url;
         var urlmore = res.data[i].title;
         var node = document.createElement('div');
         var listtittle = document.createElement('div');
         node.classList.add('div-tendencias'+ i);
         listtittle.classList.add('footertrending');
         listtittle.appendChild(document.createTextNode(urlmore));
         let nodetrendyImagen = document.createElement('img');
         nodetrendyImagen.classList.add('img-fluid'); //cambiar por la clase que necesite para cargar bien la imagenes
         nodetrendyImagen.setAttribute("src", trendyImagen);
         node.appendChild(nodetrendyImagen);  
         node.appendChild(listtittle);
         _tenGifs.appendChild(node);


      ;

         
        // node.addEventListener("mouseover", changeTheme);
       }
   });
 }

 footeroff();
 function footeroff(){
     var element = document.getElementsByTagName(".img-fluid");
//document.getElementsByTagName(".footertrending").style.visibility ='hidden';
var footertrending =  document.querySelector(".footertrending");
  footertrending.style = 'hidden';

element.mouseenter = changefooter();
 }

//  function changefooter(){
//    console.log('llegue acá');

//   var footertrending =  document.querySelector(".footertrending");
//   footertrending.style = 'hidden';
// document.getElementsByTagName("footertrending").style.display ="block"; }



 function getRandom() {
  var j = 2;
  fetch('https://api.giphy.com/v1/gifs/search?q=futbol&api_key=WCBtXMmRUP3tRuBx84k3dbp0k3qpYxqf')
    .then(data => data.json())
    .then(res => {
     var _teSugerimos = document.getElementById("contenido-sugerencia");
     
       var teSugerimosImagen = res.data[j].images.downsized_large.url;
       var node = document.createElement('div');
       var titulo = document.createElement('div');
       var vermas= document.createElement('div');
       var p =  document.createElement('p');
       node.classList.add('div-tesugerimos0');
       titulo.classList.add('div-titulo-0');
       titulo.appendChild(document.createTextNode('#Futbol'));
       vermas.classList.add('vermas');
       p.classList.add('texto-vermas');
       p.appendChild(document.createTextNode('Ver más...'));
       let nodetesugerimosimagen = document.createElement('img');
       nodetesugerimosimagen.classList.add('img-sugerencia'); //cambiar por la clase que necesite para cargar bien la imagenes
       nodetesugerimosimagen.setAttribute("src",teSugerimosImagen );
       vermas.appendChild(p);
       node.appendChild(titulo);
       node.appendChild(nodetesugerimosimagen);  
       node.appendChild(vermas);
       _teSugerimos.appendChild(node);
   
 } );
} 


 function getRandom1() {
  var k= 10;
  fetch('https://api.giphy.com/v1/gifs/search?q=tenis&api_key=WCBtXMmRUP3tRuBx84k3dbp0k3qpYxqf')
    .then(data => data.json())
    .then(res => {
     var _teSugerimos = document.getElementById("contenido-sugerencia");
     
       var teSugerimosImagen = res.data[k].images.downsized_large.url;
       var node = document.createElement('div');
       var titulo = document.createElement('div');
       var vermas= document.createElement('div');
       var p =  document.createElement('p');
       node.classList.add('div-tesugerimos1');
       titulo.classList.add('div-titulo-1');
       vermas.classList.add('vermas');
       p.classList.add('texto-vermas');
       p.appendChild(document.createTextNode('Ver más...'));
       titulo.appendChild(document.createTextNode('#Tennis'));
       let nodetesugerimosimagen = document.createElement('img');
       nodetesugerimosimagen.classList.add('img-sugerencia'); //cambiar por la clase que necesite para cargar bien la imagenes
       nodetesugerimosimagen.setAttribute("src",teSugerimosImagen );
       node.appendChild(titulo);
       node.appendChild(nodetesugerimosimagen);  
       node.appendChild(vermas);
       vermas.appendChild(p);
       _teSugerimos.appendChild(node);
   
 } );
} 

function getRandom2() {
  var q= 0;
  fetch('https://api.giphy.com/v1/gifs/search?q=pokemon&api_key=WCBtXMmRUP3tRuBx84k3dbp0k3qpYxqf')
    .then(data => data.json())
    .then(res => {
     var _teSugerimos = document.getElementById("contenido-sugerencia");
       var teSugerimosImagen = res.data[q].images.downsized_large.url;
       var node = document.createElement('div');
       var titulo = document.createElement('div');
       var vermas= document.createElement('div');
       var p =  document.createElement('p');
       node.classList.add('div-tesugerimos2');
       titulo.classList.add('div-titulo-2');
       titulo.appendChild(document.createTextNode('#Pokemon'));
       vermas.classList.add('vermas');
       p.classList.add('texto-vermas');
       p.appendChild(document.createTextNode('Ver más...'));
       let nodetesugerimosimagen = document.createElement('img');
       nodetesugerimosimagen.classList.add('img-sugerencia'); //cambiar por la clase que necesite para cargar bien la imagenes
       nodetesugerimosimagen.setAttribute("src",teSugerimosImagen );
       node.appendChild(nodetesugerimosimagen); 
       node.appendChild(titulo);
       node.appendChild(nodetesugerimosimagen);  
       node.appendChild(vermas);
       vermas.appendChild(p);
       _teSugerimos.appendChild(node);
   
 } );
} 

function getRandom3() {
  var w = 0 ;
  fetch('https://api.giphy.com/v1/gifs/search?q=rugby&api_key=WCBtXMmRUP3tRuBx84k3dbp0k3qpYxqf')
    .then(data => data.json())
    .then(res => {
     var _teSugerimos = document.getElementById("contenido-sugerencia");
     
       var teSugerimosImagen = res.data[w].images.downsized_large.url;
       var node = document.createElement('div');
       var titulo = document.createElement('div');
       var vermas= document.createElement('div');
       var p =  document.createElement('p');
       node.classList.add('div-tesugerimos3');
       titulo.classList.add('div-titulo-3');
       vermas.classList.add('vermas');
       p.classList.add('texto-vermas');
       p.appendChild(document.createTextNode('Ver más...'));
       titulo.appendChild(document.createTextNode('#Rugby'));
       let nodetesugerimosimagen = document.createElement('img');
       nodetesugerimosimagen.classList.add('img-sugerencia'); //cambiar por la clase que necesite para cargar bien la imagenes
       nodetesugerimosimagen.setAttribute("src",teSugerimosImagen );  
       node.appendChild(titulo);
       node.appendChild(nodetesugerimosimagen);  
       node.appendChild(vermas);   
       vermas.appendChild(p);
       _teSugerimos.appendChild(node); 
 } );
} 




//Menu desplegable

function menudesplegable(){
      document.querySelector(".submenu").style.display= "block";
}

function ocultarmenudesplegable(){
    document.querySelector(".submenu").style.display= "none";
}

 function changeTheme(){
      document.getElementById('css-ori').href = 'css/main.css';
      document.getElementById('logo').src='img/gifOF_logo.png';
      return;
 }


 function changeThemeDark(){
  document.getElementById('css-ori').href = 'css/css-modify.css';
  document.getElementById('logo').src='img/gifOF_logo_dark.png';
  var ultimo = document.querySelector('boton-li');
  document.div.remove(ultimo);
}

function resultadoSugerido() {
  autoComp = document.querySelector(".autocomplete-content");
  autoComp.style.display = "block";
  search = document.getElementById("search").value;
  if (search === "") {
    autoComp.style.display = "none";
  }
  fetch(`${APIurl}search?q=${search}&api_key=${APIkey}&limit=3`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      autoComp.innerHTML = "";
      for (let i = 0; i < data.data.length; i++) {
        imgTITLE = data.data[i].title;
        if (imgTITLE !== "") {
          imgURL = data.data[i].bitly_url;
          sug = document.createElement("p");
          autoComp.appendChild(sug);
          innerS = `<a href="${imgURL}" target='_blank'>${imgTITLE}</a>`;
          sug.innerHTML = innerS;
        }
      }
    });
}
