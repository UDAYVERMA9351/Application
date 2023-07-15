function showHide () {
    if(document.getElementById('no').checked) {
        document.getElementById('camp').style.display = 'none';
        document.getElementById('year').style.display = 'none';
    } 
    else if (document.getElementById('yes').checked) {
        document.getElementById('camp').style.display = 'flex';
        document.getElementById('year').style.display = 'flex';
    }
}