$(".datepicker").datepicker();
function BtnClick() {
  $.ajax({
    type: "Get",
    url:
      "http://buildschoolapi.azurewebsites.net/api/number/GetNumerology?constellation=libra&number=4",
    //data: "data",
    //dataType: "dataType",
    success: function (response) {
      console.log(response);
    },
  });
}

// $.fn.datepicker.defaults.format = "mm/dd/yyyy";
// $('.datepicker').datepicker({
//     format: 'mm/dd/yyyy',
//     changeMonth: true,
//     changeYear: true,
//     yearRange: "-20:+0"
// });
//$(document).off('.datepicker.data-api');
var Today = new Date();
document.write(
  "今天日期是 " +
    Today.getFullYear() +
    " 年 " +
    (Today.getMonth() + 1) +
    " 月 " +
    Today.getDate() +
    " 日"
);
let date = new Date("July 21, 1983");
function GetDateData(date) {
  //let newdatedata=date.getDate();
}
alert(Today);
alert(Today);

//計算生命靈數

//創建各星座及所對應的生日

let StarSigns = [
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Cancer",
  "Gemini",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
];

let;
