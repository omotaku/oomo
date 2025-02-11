homeBtn.addEventListener("click",() => {
    window.location.reload();
});

const mikuji = document.getElementById("mikuji");

const home2 = document.getElementById("home2");
const home1 = document.getElementById("home1");

const Btnb = document.getElementById("Btnb");
const Btna = document.getElementById("Btna");
const Btnm = document.getElementById("Btnm");

const horo = document.getElementById("horo");

const linkmp = document.getElementById("linkmp");
const linkap = document.getElementById("linkap");
const linkbp = document.getElementById("linkbp");


const kekka = document.getElementById("kekka");

const bacbtn = document.getElementById("bacbtn");
Btnm.addEventListener("click",() => {
    linkap.classList.add('hidden');
    linkbp.classList.add('hidden');
    linkmp.classList.remove('hidden');
    home1.classList.remove("hidden");
    home2.classList.add("hidden");
});


Btna.addEventListener("click",() => {
    linkmp.classList.add('hidden');
    linkbp.classList.add('hidden');
    linkap.classList.remove('hidden');
});

Btnb.addEventListener("click",() => {
    linkmp.classList.add('hidden');
    linkap.classList.add('hidden');
    linkbp.classList.remove('hidden');
});


horo.addEventListener("click",() => {
    home1.classList.add("hidden");
    home2.classList.remove("hidden");

});

 bacbtn.addEventListener("click",() => {
    home1.classList.remove("hidden");
    home2.classList.add("hidden");
 });
