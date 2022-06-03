const iframe = document.getElementsByName("display_ytdt");
const iDocument = iframe[0].contentDocument;

var very_agree = iDocument.querySelectorAll("#T1 > tbody > tr > td:nth-child(3)");

very_agree.forEach(v => {
    let inputs = v.querySelectorAll("input");
    if (!inputs[0] || inputs[0].type != "radio") {
        return;
    }
    if (Math.random() > 0.5) {
        inputs[0].click();
    } else {
        inputs[1].click();
    }
})

iDocument.querySelector("#btnFinish").click()