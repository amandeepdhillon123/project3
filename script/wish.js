let wisdata=JSON.parse(localStorage.getItem("wishproducts"));
    console.log(wisdata)

    var total=wisdata.reduce(function(sum,el){
        return sum+Number(el.price)
    },0);

    var length=wisdata.length;
   

wisdata.map(function(elem,index){
    var box=document.createElement("div")
    var img=document.createElement("img")
    img.src=elem.image;

    var name=document.createElement("p")
    name.textContent=elem.name;

    var brand = document.createElement("p")
    brand.textContent=elem.brand;

    var price=document.createElement("p")
    price.textContent=elem.price;

    var btn1=document.createElement("button");
    btn1.innerText="ADD TO BAG";
    btn1.style.color="white";
    btn1.style.backgroundColor="black";
    btn1.style.cursor="pointer";
    btn1.style.fontWeight="bold";
    


    var btn=document.createElement("button");
    btn.innerText="✕ REMOVE";
    btn.style.color="black";
    btn.style.backgroundColor="white";
    btn.style.cursor="pointer";
    btn.addEventListener("click",function(){
        removeItem(elem,index);
    })
    box.append(img,name,brand,price,btn1,btn);
    document.querySelector("#container").append(box)
})

function removeItem(elem,index){
    console.log(elem,index)
    wishlistdata.splice(index,1);
    console.log(wisdata)
    localStorage.setItem("wishproducts",JSON.stringify(wisdata))
    window.location.reload()
}