var nameimages = [
    "images/Calibration_tab.jpg",
    "images/main_window.jpg",
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
