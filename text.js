const gift = `<p>
Giờ hãy hãy nhắm mắt lại và ước đi nào!
</p>`;

const happy = `
    <h1 class="name2">Happy birthday!</h1>
    <p class="name">Đăng Hồ</p>
`;

function addText(e = 1) {
    switch (e) {
        case 1:
            document.querySelector(".text").innerHTML = gift;
            break;
        default:
            document.querySelector(".text").innerHTML = happy;
            break;
    }
}