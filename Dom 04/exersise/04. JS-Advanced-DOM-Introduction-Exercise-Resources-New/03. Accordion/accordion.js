function toggle() {
    let button = document.querySelector('#accordion .button');
    let extraText =document.getElementById('extra');
    if(button.textContent === 'More'){
        extraText.style.display = 'block';
        button.textContent= 'Less';
    }else if (button.textContent ==='Less'){
        extraText.style.display = 'none';
        button.textContent = 'More';
    }
}