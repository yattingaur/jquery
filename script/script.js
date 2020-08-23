let url = "https://davids-restaurant.herokuapp.com/menu_items.json"

let menu_items = null;

$("document").ready(function(){
    $.get(url,function(data, status){
        if (status == "success"){
            menu_items = data.menu_items;
            console.log(menu_items.length);
            for (const key in data.menu_items) {
                let opt = document.createElement("option");
                opt.textContent = data.menu_items[key].name;
                opt.value = key; 
                document.querySelector('#restaurant').appendChild(opt);
                //console.log(key, data.menu_items[key].name);
            }
            createoptions();
        }
       
    });

    function createoptions(){
        let i=0;
        if(menu_items != null){
            for(const jsonobj of menu_items){
                console.log(i++,jsonobj.name);
                
            }
        }
    }

    
document.querySelector("#restaurant").addEventListener("change",showdetails);

function showdetails(e){
    let index = e.target.value;
    
    if(menu_items != null){
        let x = menu_items[index];
        let pricesmall = x.price_small;
        
        if(pricesmall == null){
            pricesmall = "Not available";
        }
        let descrp = x.description;
        if(descrp == ""){
            descrp = "Description not available";
        }
        document.querySelector("#menuname").textContent = x.name;
        document.querySelector("#id").textContent = x.id;
        document.querySelector("#sname").textContent = x.short_name;
        document.querySelector("#descp").textContent = descrp;
        document.querySelector("#psmall").textContent = pricesmall;
        document.querySelector("#plarge").textContent = x.price_large;
    }
    document.getElementById("tabl").style.display = "block";
}


});


