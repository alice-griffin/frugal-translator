let ikeaArray = ["neiden", "admete", "agam", "agen", "alsarp", "alex", "agne", "ALLAMÅLA", "bagge", "bastant", "baren", "balk", "berta", "benjamin", "CHARMÖR", "cyril", "capita", "dalfred", "deka", "dygin", "droppar", "drill", "edgar", "edit", "elsfjord", "epok", "erik", "endiv", "farum", "femmen", "fibbe", "fejka", "galant", "glasholm", "gatten", "glis", "glitter", "glansa", "DRÄLLA", "upplaga", "finnala", "strandmon", "vallentuna", "BRÅTHULT", "SÖDERHAMN", "HÄRLANDA"]


const translateText = () => {
    let originalText = document.getElementById("original-text").value;
    let textArray = originalText.split(" ");
    console.log(textArray.length);

    returnIkeaText(textArray);
}

const returnIkeaText = (array) => {
    let shuffled = ikeaArray.sort(() => 0.5 - Math.random());

    let newArr = shuffled.slice(0, array.length).join(" ");
    document.getElementById("translate-box").innerText = newArr;
}