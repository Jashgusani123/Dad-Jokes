let btn = document.getElementById("btn");
let i = 0;
btn.addEventListener("click", (e) => {
    let ans = jokefun();
    let color = colors();

    let text = document.getElementById("text");
    text.style.color = color;
    text.innerText = ans;
    // console.log(ans);
    // console.log(color);
});
function jokefun() {
    while (i < jokes.length) {
        let r = Math.floor(Math.random() * 30);
        let joke = jokes[r].joke;
        i++;
        if (i == 30)
            i = 0;
        // i++;
        return joke;
    }
}
function colors() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let color = [];
    let r = "#";
    for (let i = 0; i < 6; i++) {
        color.push(Math.floor(Math.random() * 16));
    }
    for (let j = 0; j < 6; j++) {
        r += arr[color[j]];

    }
    return r;
}
