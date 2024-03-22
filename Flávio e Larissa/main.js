var motivos = [
    "Urubu do pix",
    "Aposte sua casa pelo tigrinho",
    "Venda de pack do pézinho",
    "Venda de orgãos",
      "Assalte um banco"
  ];
  
  var imagens = [ "https://preview.redd.it/a-espera-acabou-chegou-o-t%C3%A3o-aguardado-urubu-do-pix-3-agora-v0-9tj8k301gnpb1.png?width=640&crop=smart&auto=webp&s=fca375daa194a4ded8bbac056086ee929e2f3f22",
    "https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/oItfR0BMEl6ECFAOztGauIz8ypAYmz3dVAhoBg~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1738879858&x-signature=QLG0HzduSFlBGD8rhZzXldPlZyM%3D",
    "https://i.ytimg.com/vi/lHfhPM1zhqw/sddefault.jpg",         "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2017/10/giz-asks.jpg", "https://farofageek.com.br/wp-content/uploads/2018/03/la-casa-de-papel-carnaval.jpg"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }