const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//   var btn=document.createElement("button");
//   btn.innerHTML="All";
//   document.getElementsByClassName("btn-container")[0].append(btn);

    // function createBtn(name, place, ...classList){
    //   let btn = document.createElement("button");
    //    btn.innerHTML=name;
    //    btn.classList.add(...classList);
    //    document.getElementById(place).append(btn);


    // }


    // var allBtn    = createBtn(" All   ", "btn-container", "btn-outline-dark", "rounded", "m-1", "pr-2","btn");
    // var koreanBtn = createBtn("Korea", "btn-container", "btn-outline-dark", "rounded", "m-1", "pr-3","btn");
    // var japanBtn  = createBtn("Japan", "btn-container", "btn-outline-dark", "rounded", "m-1", "pr-2","btn");
    // var China     = createBtn("China", "btn-container", "btn-outline-dark", "rounded", "m-1", "pr-2","btn");
     


       let btnAll = document.createElement("button");
       btnAll.innerHTML="All";
       btnAll.classList.add("btn-outline-dark", "rounded", "m-1", "pr-2","btn");
       btnAll.setAttribute("onclick", "btnselect(this)")
       document.getElementById("btn-container").append(btnAll);
       let btnKorea = document.createElement("button");
       btnKorea.innerHTML="Korea";
       btnKorea.classList.add("btn-outline-dark", "rounded", "m-1", "pr-2","btn");
       btnKorea.setAttribute("onclick", "btnselect(this)")
       document.getElementById("btn-container").append(btnKorea);
       let btnJapan = document.createElement("button");
       btnJapan.innerHTML="Japan";
       btnJapan.classList.add("btn-outline-dark", "rounded", "m-1", "pr-2","btn");
       btnJapan.setAttribute("onclick", "btnselect(this)")
       document.getElementById("btn-container").append(btnJapan);
       let btnChina = document.createElement("button");
       btnChina.innerHTML="China";
       btnChina.classList.add("btn-outline-dark", "rounded", "m-1", "pr-2","btn");
       btnChina.setAttribute("onclick", "btnselect(this)")
       document.getElementById("btn-container").append(btnChina);


      

      var btns=document.getElementsByTagName("button");
    function btnselect(element){
      if(element.innerHTML=="China"){
        ShowList("China");
      }
      if(element.innerHTML=="Japan"){
        ShowList("Japan");
      }
      if(element.innerHTML=="Korea"){
        ShowList("Korea");
      }
      if(element.innerHTML=="All"){
        ShowList("");
      }
      

      if(element.classList.contains("btn-outline-dark")){
        
        Array.from(btns).forEach(element => {
          if(element.classList.contains("btn-dark"))
          element.classList.replace("btn-dark", "btn-outline-dark");
        });

        element.classList.replace("btn-outline-dark", "btn-dark");
      }

    }

    for(var i=0;menu.length>i;i++){
     
        var itemSingle= `
        <div class="col-6"> 
        <img class="float-start m-3" style="width: 15em; height: 13em; border-radius: 10%;" src="${menu[i].img}"> 
        <div class="mt-4 ml-3"> <div class="d-flex justify-content-between border-bottom border-dark"><strong class="h4"> ${menu[i].title}</strong>  <strong class="h5">Cheap as, $${menu[i].price}</strong></div> <br><div class="h6">${menu[i].desc}</div></div>
        </div>
        `;
        
    document.getElementsByClassName("section-center")[0].innerHTML+=itemSingle;

      }


      function ShowList(Country){
        document.getElementsByClassName("section-center")[0].innerHTML="";
        for(var i=0;menu.length>i;i++){
        if(menu[i].category==Country){
          var itemSingle= `
          <div class="col-6"> 
          <img class="float-start m-3" style="width: 15em; height: 13em; border-radius: 10%;" src="${menu[i].img}"> 
          <div class="mt-4 ml-3"> <div class="d-flex justify-content-between border-bottom border-dark"><strong class="h4"> ${menu[i].title}</strong>  <strong class="h5">Cheap as, $${menu[i].price}</strong></div> <br><div class="h6">${menu[i].desc}</div></div>
          </div>
          `;
          
      document.getElementsByClassName("section-center")[0].innerHTML+=itemSingle;

        }else if(Country==""){
          var itemSingle= `
          <div class="col-6"> 
          <img class="float-start m-3" style="width: 15em; height: 13em; border-radius: 10%;" src="${menu[i].img}"> 
          <div class="mt-4 ml-3"> <div class="d-flex justify-content-between border-bottom border-dark"><strong class="h4"> ${menu[i].title}</strong>  <strong class="h5">Cheap as, $${menu[i].price}</strong></div> <br><div class="h6">${menu[i].desc}</div></div>
          </div>
          `;
          
      document.getElementsByClassName("section-center")[0].innerHTML+=itemSingle;
        }
      }
      //

      }

      




      
    


 
    
    

  
