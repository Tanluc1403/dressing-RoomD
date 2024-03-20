//  class Product { 
//     constructor(){}
     
//     renderProduct( value) {
//         let tabPanes = [
//             {
//                 "id": "1",
//                 "type": "topclothes",
//                 "name": "Top Cloth 1",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/clothes/topcloth1_show.jpg",
//                 "imgSrc_png": "../assets/images/clothes/topcloth1.png"
//             },
//             {
//                 "id": "2",
//                 "type": "topclothes",
//                 "name": "Top Cloth 2",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/clothes/topcloth2_show.jpg",
//                 "imgSrc_png": "../assets/images/clothes/topcloth2.png"
//             },
//             {
//                 "id": "3",
//                 "type": "topclothes",
//                 "name": "Top Cloth 3",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/clothes/topcloth3_show.jpg",
//                 "imgSrc_png": "../assets/images/clothes/topcloth3.png"
//             },
//             {
//                 "id": "4",
//                 "type": "topclothes",
//                 "name": "Top Cloth 4",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/clothes/topcloth4_show.jpg",
//                 "imgSrc_png": "../assets/images/clothes/topcloth4.png"
//             },
//             {
//                 "id": "5",
//                 "type": "topclothes",
//                 "name": "Top Cloth 5",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/clothes/topcloth5_show.jpg",
//                 "imgSrc_png": "../assets/images/clothes/topcloth5.png"
//             },
//             {
//                 "id": "6",
//                 "type": "topclothes",
//                 "name": "Top Cloth ",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/clothes/topcloth6_show.jpg",
//                 "imgSrc_png": "../assets/images/clothes/topcloth6.png"
//             },
//             {
//                 "id": "1",
//                 "type": "botclothes",
//                 "name": "Bot Cloth 1",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/clothes/botcloth1_show.jpg",
//                 "imgSrc_png": "../assets/images/clothes/botcloth1.png"
//             },
//             {
//                 "id": "2",
//                 "type": "botclothes",
//                 "name": "Bot Cloth 2",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/clothes/botcloth2_show.jpg",
//                 "imgSrc_png": "../assets/images/clothes/botcloth2.png"
//             },
//             {
//                 "id": "3",
//                 "type": "botclothes",
//                 "name": "Bot Cloth 3",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/clothes/botcloth3_show.jpg",
//                 "imgSrc_png": "../assets/images/clothes/botcloth3.png"
//             },
//             {
//                 "id": "4",
//                 "type": "botclothes",
//                 "name": "Bot Cloth 4",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/clothes/botcloth4_show.jpg",
//                 "imgSrc_png": "../assets/images/clothes/botcloth4.png"
//             },
//             {
//                 "id": "5",
//                 "type": "botclothes",
//                 "name": "Bot Cloth 5",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/clothes/botcloth5_show.jpg",
//                 "imgSrc_png": "../assets/images/clothes/botcloth5.png"
//             },
//             {
//                 "id": "1",
//                 "type": "shoes",
//                 "name": "Shoes 1",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/shoes/shoes1_show.jpg",
//                 "imgSrc_png": "../assets/images/shoes/shoes1.png"
//             },
//             {
//                 "id": "2",
//                 "type": "shoes",
//                 "name": "Shoes 2",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/shoes/shoes2_show.jpg",
//                 "imgSrc_png": "../assets/images/shoes/shoes2.png"
//             },
//             {
//                 "id": "3",
//                 "type": "shoes",
//                 "name": "Shoes 3",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/shoes/shoes3_show.jpg",
//                 "imgSrc_png": "../assets/images/shoes/shoes3.png"
//             },
//             {
//                 "id": "4",
//                 "type": "shoes",
//                 "name": "Shoes 4",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/shoes/shoes4_show.jpg",
//                 "imgSrc_png": "../assets/images/shoes/shoes4.png"
//             },
//             {
//                 "id": "5",
//                 "type": "shoes",
//                 "name": "Shoes 5",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/shoes/shoes5_show.jpg",
//                 "imgSrc_png": "../assets/images/shoes/shoes5.png"
//             },
//             {
//                 "id": "1",
//                 "type": "handbags",
//                 "name": "Handbag 1",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/handbags/handbag1_show.jpg",
//                 "imgSrc_png": "../assets/images/handbags/handbag1.png"
//             },
//             {
//                 "id": "2",
//                 "type": "handbags",
//                 "name": "Handbag 2",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/handbags/handbag2_show.jpg",
//                 "imgSrc_png": "../assets/images/handbags/handbag2.png"
//             },
//             {
//                 "id": "3",
//                 "type": "handbags",
//                 "name": "Handbag 3",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/handbags/handbag3_show.jpg",
//                 "imgSrc_png": "../assets/images/handbags/handbag3.png"
//             },
//             {
//                 "id": "1",
//                 "type": "necklaces",
//                 "name": "Necklace 1",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/necklaces/necklace1_show.jpg",
//                 "imgSrc_png": "../assets/images/necklaces/necklace1.png"
//             },
//             {
//                 "id": "2",
//                 "type": "necklaces",
//                 "name": "Necklace 2",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/necklaces/necklace2_show.jpg",
//                 "imgSrc_png": "../assets/images/necklaces/necklace2.png"
//             },
//             {
//                 "id": "3",
//                 "type": "necklaces",
//                 "name": "Necklace 3",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/necklaces/necklace3_show.jpg",
//                 "imgSrc_png": "../assets/images/necklaces/necklace3.png"
//             },
//             {
//                 "id": "1",
//                 "type": "hairstyle",
//                 "name": "Hairstyle 1",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/hairstyle/hairstyle1_show.jpg",
//                 "imgSrc_png": "../assets/images/hairstyle/hairstyle1.png"
//             },
//             {
//                 "id": "2",
//                 "type": "hairstyle",
//                 "name": "Hairstyle 2",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/hairstyle/hairstyle2_show.jpg",
//                 "imgSrc_png": "../assets/images/hairstyle/hairstyle2.png"
//             },
//             {
//                 "id": "3",
//                 "type": "hairstyle",
//                 "name": "Hairstyle 3",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/hairstyle/hairstyle3_show.jpg",
//                 "imgSrc_png": "../assets/images/hairstyle/hairstyle3.png"
//             },
//             {
//                 "id": "1",
//                 "type": "background",
//                 "name": "Background 1",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/background/background1_show.jpg",
//                 "imgSrc_png": "../assets/images/background/background1.jpg"
//             },
//             {
//                 "id": "2",
//                 "type": "background",
//                 "name": "Background 2",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/background/background2_show.jpg",
//                 "imgSrc_png": "../assets/images/background/background2.jpg"
//             },
//             {
//                 "id": "3",
//                 "type": "background",
//                 "name": "Background 3",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/background/background3_show.jpg",
//                 "imgSrc_png": "../assets/images/background/background3.jpg"
//             },
//             {
//                 "id": "4",
//                 "type": "background",
//                 "name": "Background 4",
//                 "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
//                 "imgSrc_jpg": "../assets/images/background/background4_show.jpg",
//                 "imgSrc_png": "../assets/images/background/background4.jpg"
//             }
//         ];
        
//         let list = tabPanes.filter((product) => {
//             return product.type == value
//            });
        
//        document.getElementById(tabID).onclick = () => {
//         document.getElementsByClassName("tab-content")[0].innerHTML = "";
        
//         list.forEach((sanPham) => {
//             let content = `
//         <div class="col-3">
//                  <img src = "${sanPham.imgSrc_jpg}" style="width:100% ; height: 300 px"  />
                 
//                 <button onclick="renderAo (${sanPham.id})"  class="btn-info "  style="width: 100% ;margin: 10px 0 30px 0 ">Thử đồ</button>
                 
//         </div>
//                 `
//             document.getElementsByClassName("tab-content")[0].innerHTML += content ;
//         })
//     }
//     }

//  }   

//  export default  Product