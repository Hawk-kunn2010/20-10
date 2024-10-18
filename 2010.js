document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    const flowerContainer = document.getElementById('flowerContainer');

    if (name) {
        greetingMessage.textContent = `Chúc mừng 20/10, ${name}! Chúc bạn luôn xinh đẹp, hạnh phúc và thành công!`;
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flowerContainer.appendChild(flower);
    } else {
        greetingMessage.textContent = 'Vui lòng nhập tên của bạn!';
    }
});