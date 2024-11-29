var nameimages = [
    "https://github.com/LuisOlivaresJ/Dosepy/blob/main/docs/assets/Calibration_tab.png?raw=true",
    "https://github.com/LuisOlivaresJ/Dosepy/blob/main/docs/assets/main_window.PNG?raw=true"
];


var counter_index = 0;

function changeDpImg()
{
    counter_index = counter_index + 1;
    var dp_img = document.getElementById("dosepy_img");
    var index = counter_index % nameimages.length;
    console.log(index)
    console.log(nameimages[index])
    dp_img.src = nameimages[index];
}
