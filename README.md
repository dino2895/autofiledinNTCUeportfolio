# autofiledinNTCUeportfolio
一個可以自動填寫NTCU課後教學評量的東西，並且能夠自動隨機填寫同意或非常同意
討厭寫教學評量的來ㄅ
## 使用教學 
1. 登入後選定你想要填寫的某一堂課
2. 開啟F12 切換到 console 模式下
3. 貼上程式碼
## code
```
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
```
https://user-images.githubusercontent.com/24423965/171866850-e03c9ad6-ebe8-4801-abe3-ea59e1a3d432.mp4

