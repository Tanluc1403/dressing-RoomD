


function Button() {
    const navPills = [
        { "tabName": "tabTopClothes", "showName": "Áo", "type": "topclothes" },
        { "tabName": "tabBotClothes", "showName": "Quần", "type": "botclothes" },
        { "tabName": "tabShoes", "showName": "Giày dép", "type": "shoes" },
        { "tabName": "tabHandBags", "showName": "Túi xách", "type": "handbags" },
        { "tabName": "tabNecklaces", "showName": "Dây chuyền", "type": "necklaces" },
        { "tabName": "tabHairStyle", "showName": "Kiểu tóc", "type": "hairstyle" },
        { "tabName": "tabBackground", "showName": "Nền", "type": "background" }
    ];
    let content = "";

    navPills.forEach(tab => {
        content += `
        <button id =${tab.tabName} class=" nav-link d-inline btn-primary " type: ${tab.type}>${tab.showName}</button>
        `
    });


    document.getElementsByClassName("nav")[0].innerHTML = content
}


Button();


let tabPanes = [
    {
        "id": "1",
        "type": "topclothes",
        "name": "Top Cloth 1",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth1_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth1.png"
    },
    {
        "id": "2",
        "type": "topclothes",
        "name": "Top Cloth 2",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth2_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth2.png"
    },
    {
        "id": "3",
        "type": "topclothes",
        "name": "Top Cloth 3",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth3_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth3.png"
    },
    {
        "id": "4",
        "type": "topclothes",
        "name": "Top Cloth 4",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth4_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth4.png"
    },
    {
        "id": "5",
        "type": "topclothes",
        "name": "Top Cloth 5",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth5_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth5.png"
    },
    {
        "id": "6",
        "type": "topclothes",
        "name": "Top Cloth ",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/topcloth6_show.jpg",
        "imgSrc_png": "../assets/images/clothes/topcloth6.png"
    },
    {
        "id": "1",
        "type": "botclothes",
        "name": "Bot Cloth 1",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/botcloth1_show.jpg",
        "imgSrc_png": "../assets/images/clothes/botcloth1.png"
    },
    {
        "id": "2",
        "type": "botclothes",
        "name": "Bot Cloth 2",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/botcloth2_show.jpg",
        "imgSrc_png": "../assets/images/clothes/botcloth2.png"
    },
    {
        "id": "3",
        "type": "botclothes",
        "name": "Bot Cloth 3",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/botcloth3_show.jpg",
        "imgSrc_png": "../assets/images/clothes/botcloth3.png"
    },
    {
        "id": "4",
        "type": "botclothes",
        "name": "Bot Cloth 4",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/botcloth4_show.jpg",
        "imgSrc_png": "../assets/images/clothes/botcloth4.png"
    },
    {
        "id": "5",
        "type": "botclothes",
        "name": "Bot Cloth 5",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/clothes/botcloth5_show.jpg",
        "imgSrc_png": "../assets/images/clothes/botcloth5.png"
    },
    {
        "id": "1",
        "type": "shoes",
        "name": "Shoes 1",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/shoes/shoes1_show.jpg",
        "imgSrc_png": "../assets/images/shoes/shoes1.png"
    },
    {
        "id": "2",
        "type": "shoes",
        "name": "Shoes 2",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/shoes/shoes2_show.jpg",
        "imgSrc_png": "../assets/images/shoes/shoes2.png"
    },
    {
        "id": "3",
        "type": "shoes",
        "name": "Shoes 3",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/shoes/shoes3_show.jpg",
        "imgSrc_png": "../assets/images/shoes/shoes3.png"
    },
    {
        "id": "4",
        "type": "shoes",
        "name": "Shoes 4",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/shoes/shoes4_show.jpg",
        "imgSrc_png": "../assets/images/shoes/shoes4.png"
    },
    {
        "id": "5",
        "type": "shoes",
        "name": "Shoes 5",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/shoes/shoes5_show.jpg",
        "imgSrc_png": "../assets/images/shoes/shoes5.png"
    },
    {
        "id": "1",
        "type": "handbags",
        "name": "Handbag 1",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/handbags/handbag1_show.jpg",
        "imgSrc_png": "../assets/images/handbags/handbag1.png"
    },
    {
        "id": "2",
        "type": "handbags",
        "name": "Handbag 2",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/handbags/handbag2_show.jpg",
        "imgSrc_png": "../assets/images/handbags/handbag2.png"
    },
    {
        "id": "3",
        "type": "handbags",
        "name": "Handbag 3",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/handbags/handbag3_show.jpg",
        "imgSrc_png": "../assets/images/handbags/handbag3.png"
    },
    {
        "id": "1",
        "type": "necklaces",
        "name": "Necklace 1",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/necklaces/necklace1_show.jpg",
        "imgSrc_png": "../assets/images/necklaces/necklace1.png"
    },
    {
        "id": "2",
        "type": "necklaces",
        "name": "Necklace 2",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/necklaces/necklace2_show.jpg",
        "imgSrc_png": "../assets/images/necklaces/necklace2.png"
    },
    {
        "id": "3",
        "type": "necklaces",
        "name": "Necklace 3",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/necklaces/necklace3_show.jpg",
        "imgSrc_png": "../assets/images/necklaces/necklace3.png"
    },
    {
        "id": "1",
        "type": "hairstyle",
        "name": "Hairstyle 1",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/hairstyle/hairstyle1_show.jpg",
        "imgSrc_png": "../assets/images/hairstyle/hairstyle1.png"
    },
    {
        "id": "2",
        "type": "hairstyle",
        "name": "Hairstyle 2",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/hairstyle/hairstyle2_show.jpg",
        "imgSrc_png": "../assets/images/hairstyle/hairstyle2.png"
    },
    {
        "id": "3",
        "type": "hairstyle",
        "name": "Hairstyle 3",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/hairstyle/hairstyle3_show.jpg",
        "imgSrc_png": "../assets/images/hairstyle/hairstyle3.png"
    },
    {
        "id": "1",
        "type": "background",
        "name": "Background 1",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/background/background1_show.jpg",
        "imgSrc_png": "../assets/images/background/background1.jpg"
    },
    {
        "id": "2",
        "type": "background",
        "name": "Background 2",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/background/background2_show.jpg",
        "imgSrc_png": "../assets/images/background/background2.jpg"
    },
    {
        "id": "3",
        "type": "background",
        "name": "Background 3",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/background/background3_show.jpg",
        "imgSrc_png": "../assets/images/background/background3.jpg"
    },
    {
        "id": "4",
        "type": "background",
        "name": "Background 4",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "../assets/images/background/background4_show.jpg",
        "imgSrc_png": "../assets/images/background/background4.jpg"
    }
];


const Text = () => {
    document.getElementsByClassName("tab-content")[0].innerHTML = `
    <div style= "font-weight : Bold;  color: red; font-size : 30px" class="ml-5 mt-4">
     Hãy chọn sản phẩm
     </div>
     `
};
Text();

/**
 * AO
 */
const listAo = tabPanes.filter((ao) => {
    return ao.type == "topclothes"
});

document.getElementById("tabTopClothes").onclick = () => {
    document.getElementsByClassName("tab-content")[0].innerHTML = "";
    
    listAo.forEach((prAo) => {
        console.log(prAo)
        let content = `
    <div class="col-3">
             <img src = "${prAo.imgSrc_jpg}" style="width:100% ; height: 300 px"  />
             
            <button onclick="renderAo (${prAo.id})"  class="btn-info"  style="width: 100% ;margin: 10px 0 30px 0 ">Thử đồ</button>
             
    </div>
            `
        document.getElementsByClassName("tab-content")[0].innerHTML += content ;
    })
}

function renderAo (id){

    listAo.forEach((thuAo) => {
        if(id == thuAo.id){
            let content = "";
            content = `
            <img src = "${thuAo.imgSrc_png}" style="width:100% ; margin-right:400px"/> 
            `
            document.getElementsByClassName("bikinitop")[0].innerHTML = content
        }
    })
};

/**
 * QUAN
 */
const listQuan = tabPanes.filter((quan) => {
    return quan.type == "botclothes"
})
document.getElementById("tabBotClothes").onclick = () => {
    document.getElementsByClassName("tab-content")[0].innerHTML = "";
    listQuan.forEach((prQuan) => {

        let content = `
    <div class="col-3">
             <img src = "${prQuan.imgSrc_jpg}" height= "300" />
             <div><button onclick="renderQuan (${prQuan.id})" class=" btn-info">Thử đồ</button></div>
    </div>
            `
        document.getElementsByClassName("tab-content")[0].innerHTML += content
    })
};

function renderQuan (id){
    listQuan.forEach((thuQuan) => {
        if(id == thuQuan.id){
            let content = "";
            content = `
            <img src = "${thuQuan.imgSrc_png}" style="width:100% ; margin-right:400px"/> 
            `
            document.getElementsByClassName("bikinibottom")[0].innerHTML = content
        }
    })
};

/**
 * GIAY
 */
const listGiay = tabPanes.filter((giay) => {
    return giay.type == "shoes"
})
document.getElementById("tabShoes").onclick = () => {
    document.getElementsByClassName("tab-content")[0].innerHTML = "";
    listGiay.forEach((prGiay) => {

        let content = `
    <div class="col-3">
             <img src = "${prGiay.imgSrc_jpg}" height= "300" />
             <div><button onclick="renderGiay (${prGiay.id})" class=" btn-info">Thử đồ</button></div>
    </div>
            `
        document.getElementsByClassName("tab-content")[0].innerHTML += content
    })
};
function renderGiay (id){
    listGiay.forEach((thuGiay) => {
        if(id == thuGiay.id){
            let content = "";
            content = `
            <img src = "${thuGiay.imgSrc_png}" style="width:100% ; margin-right:400px"/> 
            `
            document.getElementsByClassName("feet")[0].innerHTML = content
        }
    })
};
/**
 * TÚI
 */
const listTui = tabPanes.filter((tui) => {
    return tui.type == "handbags"
})
document.getElementById("tabHandBags").onclick = () => {
    document.getElementsByClassName("tab-content")[0].innerHTML = "";
    listTui.forEach((prTui) => {

        let content = `
    <div class="col-3">
             <img src = "${prTui.imgSrc_jpg}" height= "300" />
             <div><button onclick="renderTui (${prTui.id})" class=" btn-info">Thử đồ</button></div>
    </div>
            `
        document.getElementsByClassName("tab-content")[0].innerHTML += content
    })
};
function renderTui (id){
    listTui.forEach((thuTui) => {
        if(id == thuTui.id){
            let content = "";
            content = `
            <img src = "${thuTui.imgSrc_png}" style="width:100% ; margin-right:400px"/> 
            `
            document.getElementsByClassName("handbag")[0].innerHTML = content
        }
    })
};


/**
 * DAY CHUYỀN
 */
const listDayChuyen = tabPanes.filter((daychuyen) => {
    return daychuyen.type == "necklaces"
})
document.getElementById("tabNecklaces").onclick = () => {
    document.getElementsByClassName("tab-content")[0].innerHTML = "";
    listDayChuyen.forEach((prdaychuyen) => {

        let content = `
    <div class="col-3">
             <img src = "${prdaychuyen.imgSrc_jpg}" height= "300" />
             <div><button onclick="renderDayChuyen (${prdaychuyen.id})" class=" btn-info">Thử đồ</button></div>
    </div>
            `
        document.getElementsByClassName("tab-content")[0].innerHTML += content
    })
};
function renderDayChuyen (id){
    listDayChuyen.forEach((thuDayChuyen) => {
        if(id == thuDayChuyen.id){
            let content = "";
            content = `
            <img src = "${thuDayChuyen.imgSrc_png}" style="width:100% ; margin-right:400px"/> 
            `
            document.getElementsByClassName("necklace")[0].innerHTML = content
        }
    })
};
/**
 * Kiểu Tóc
 */
const listToc = tabPanes.filter((toc) => {
    return toc.type == "hairstyle"
})
document.getElementById("tabHairStyle").onclick = () => {
    document.getElementsByClassName("tab-content")[0].innerHTML = "";
    listToc.forEach((prtoc) => {

        let content = `
    <div class="col-3">
             <img src = "${prtoc.imgSrc_jpg}" height= "300" />
             <div><button onclick="renderToc (${prtoc.id})" class=" align-center btn-info">Thử đồ</button></div>
    </div>
            `
        document.getElementsByClassName("tab-content")[0].innerHTML += content
    })
};
function renderToc (id){
    listToc.forEach((thuToc) => {
        if(id == thuToc.id){
            let content = "";
            content = `
            <img src = "${thuToc.imgSrc_png}" style="width:100% ; margin-right:400px"/> 
            `
            document.getElementsByClassName("hairstyle")[0].innerHTML = content
        }
    })
};
/**
 * Background
 */
const listNen = tabPanes.filter((nen) => {
    return nen.type == "background"
})
document.getElementById("tabBackground").onclick = () => {
    document.getElementsByClassName("tab-content")[0].innerHTML = "";
    listNen.forEach((prnen) => {

        let content = `
    <div class="col-3">
             <img src = "${prnen.imgSrc_jpg}" height= "300" />
             <div><button <button onclick="renderNen (${prnen.id})" class=" btn-info">Thử đồ</button></div>
    </div>
            `
        document.getElementsByClassName("tab-content")[0].innerHTML += content
    })
};
function renderNen (id){
    listNen.forEach((thuNen) => {
        if(id == thuNen.id){
            let content = "";
            content = `
            <img src = "${thuNen.imgSrc_png}" style="width:100% ; margin-right:400px"/> 
            `
            document.getElementsByClassName("background")[0].innerHTML = content
        }
    })
};