let a=0,b=0;
function changeImg(imgNumber){
    var myImages=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/6.jpg","images/7.jpg","images/8.jpg"];
    var imgShown =document.body.style.backgroundImage;
    var newImgNumber=Math.floor(Math.random()*myImages.length);
   document.body.style.backgroundImage='url('+myImages[newImgNumber]+')';
   a=parseInt(sessionStorage.getItem("storageVal")) || 0;
   console.log(a);
   newuser();
}
window.onload=changeImg;


function newuser(){
    console.log("click")
    nbaPlayerGenerator(a);
    a=a+1;
    sessionStorage.setItem('storageVal', a);
    return 0;
}

async function nbaPlayerGenerator(b) {
    const response = await fetch('https://www.balldontlie.io/api/v1/players');
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(b)
    const user = data?.data?.[b];
    if(a>=data.data.length){
        a=0;
        sessionStorage.setItem('storageVal', a);
    }

    console.log(user);
    displayUser(user);
    // console.log(response);
    // displayUser(user);

}

function displayUser(user) {
    const name = document.getElementById('name');
    // const gender = document.getElementById('gender');
    const weight= document.getElementById('weight');
    const position= document.getElementById('position');
    const location = document.getElementById('location');
    // const image = document.getElementById('image');
    console.log(user.first_name)
    name.innerText = ` ${user.first_name || 'Not Available'} ${user.last_name || 'Not available'}`;
    // gender.innerText = `${user.gender}`;
    position.innerText = `${user.position}`;
    let weight2;
    if(user.weight_pounds === null)
        weight2 = 'Not available';
    weight.innerText = `${weight2 || user.weight_pounds}`;
    location.innerText = `${user.team.city}`;
    // name.innerText = {vikash}
    // image.setAttribute(`src`,`${user.picture.large}`);
}

nbaPlayerGenerator(a);