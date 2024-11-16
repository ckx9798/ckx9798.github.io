const imges = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const randomArrNum = Math.floor(Math.random() * imges.length);

const bgimg = document.body;

bgimg.src = `img/${randomArrNum}`;

document.body.style.backgroundImage = `url('img/${imges[randomArrNum]}')`;
document.body.style.backgroundSize = "cover";
