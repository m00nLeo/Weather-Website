const key = "dca5913176d379c07b2d5493f07c2709";
const keyTime = "aUhcGpEAozWSCoMVRmbA";

let searchBox = document.querySelector(".search-box");
let city = document.querySelector(".city");
let date = document.querySelector(".date");
let weather = document.querySelector(".weather");
let temperature = document.querySelector(".temperature");
let highLow = document.querySelector(".high-low");
let time = document.querySelector(".time");

const options = {
  day: "numeric", // ngày
  weekday: "long", // thứ ngày
  year: "numeric", // năm
  month: "long", // tháng
};

// EVENT ////////////////////////////////////
searchBox.addEventListener("keydown", searchCity);

function searchCity(event) {
  if (event.key === "Enter") {
    console.log(event.target.value);
    getRespone(event.target.value);
  }
}

// Call API /////////////////////////////
function getRespone(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
  )
    .then(function (response) {
      console.log(response);
      if (response.status === 404) {
        alert(
          `Something went wrong! Make sure your input city is correct!\r\n\r\n문제가 발생했습니다. 입력한 도시가 올바른지 확인하세요!\r\n\r\nエラーが発生しました。入力した都市が正しいことを確認してください!`
        );
      }
      return response.json(); /// biến data thành dạng Prototype Respone cho function tiếp theo
    })
    .then(function (data) {
      showResult(data);
      console.log(data);
    });
}

// show Result /////////////////////////
function showResult(data) {
  // tên thành phố
  city.textContent = `${data.name}, ${data.sys.country}`;
  // city.textContent = data.name + ", " + data.sys.country;

  // thời gian
  let today = new Date();
  date.textContent = today.toLocaleDateString("ko-KR", options);

  // thời tiết
  weather.textContent = `${data.weather[0].main}`;
  // weather.textContent = data.weather[0].main;
  backGround(data.weather[0].main);

  // nhiệt độ
  temperature.textContent = `${Math.round(data.main.temp)}° C`;
  // temperature.textContent = data.main.temp + "° C";
  // backTemp(data.main.temp);

  highLow.textContent = `
  ${Math.round(data.main.temp_min)}° C / 
  ${Math.round(data.main.temp_max)}° C`;
}

function backGround(weather) {
  if (weather === "Clouds") {
    document.body.style.backgroundImage = `url("https://i.pinimg.com/originals/c1/b1/2e/c1b12e404c218bd22287808bb213f704.gif")`;
  } else if (weather === "Clear") {
    document.body.style.backgroundImage = `url("https://64.media.tumblr.com/6289ce3330d81f863f04ae6dd169e888/c4d56bb0146990c3-bd/s1280x1920/48787da8e2c4fd996532a006594e9a9b1e106c64.gif")`;
  } else if (weather === "Sunny") {
    document.body.style.backgroundImage = `url("https://64.media.tumblr.com/daf8827e503472187f3ec2b32b8da63b/ba9dde61fec2fa8c-97/s1280x1920/b6f65351c266ecdaf96493f9e38fe01659e88c25.gif")`;
  } else if (weather === "Rain") {
    document.body.style.backgroundImage = `url("https://64.media.tumblr.com/4158042b2088b59b818d7fb7021e963f/373f637b2f132bfa-53/s1280x1920/0d23866220909ebcd84916bb460a243dc6810990.gifv")`;
  } else if (weather === "Mist") {
    document.body.style.backgroundImage = `url("https://giffiles.alphacoders.com/215/215913.gif")`;
  } else if (weather === "Snow") {
    document.body.style.backgroundImage = `url("https://cdna.artstation.com/p/assets/images/images/031/893/686/original/camille-unknown-snow-story-01.gif?1604917299")`;
  }
  // else if (weather === "Clear") {
  //   document.body.style.backgroundImage = `url("../img/Clear.jpg")`;
  // }
}

// function backTemp(temp) {
//   console.log(temp);
//   console.log(weather);
//   if (weather == "Clouds") {
//     if (temp <= 0) {
//       document.body.style.backgroundImage = `url("https://i.gifer.com/origin/bb/bbcdab3733631fb02f886525203b8ff0.gif")`;
//     } else {
//       document.body.style.backgroundImage = `url("https://i.pinimg.com/originals/c1/b1/2e/c1b12e404c218bd22287808bb213f704.gif")`;
//     }
//   } else if (weather == "Clear") {
//     document.body.style.backgroundImage = `url("https://64.media.tumblr.com/6289ce3330d81f863f04ae6dd169e888/c4d56bb0146990c3-bd/s1280x1920/48787da8e2c4fd996532a006594e9a9b1e106c64.gif")`;
//   } else if (weather == "Sunny") {
//     document.body.style.backgroundImage = `url("https://64.media.tumblr.com/daf8827e503472187f3ec2b32b8da63b/ba9dde61fec2fa8c-97/s1280x1920/b6f65351c266ecdaf96493f9e38fe01659e88c25.gif")`;
//   } else if (weather === "Rain") {
//     document.body.style.backgroundImage = `url("https://64.media.tumblr.com/4158042b2088b59b818d7fb7021e963f/373f637b2f132bfa-53/s1280x1920/0d23866220909ebcd84916bb460a243dc6810990.gifv")`;
//   } else if (weather === "Mist") {
//     document.body.style.backgroundImage = `url("https://giffiles.alphacoders.com/215/215913.gif")`;
//   } else if (weather === "Snow") {
//     document.body.style.backgroundImage = `url("https://cdna.artstation.com/p/assets/images/images/031/893/686/original/camille-unknown-snow-story-01.gif?1604917299")`;
//   }
// }
