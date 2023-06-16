// Add ID for popup. 
// Add onclick function for open popup button 'onclick="showPopup("ID")' 
function showPopup(id) {
    let popup = document.querySelector('#' + id);

    if (!popup) return;

    let closeBtn = popup.querySelector('.popup__btn-close');
    openPopup();


    function openPopup() {
        document.body.classList.add('_lock');
        popup.classList.add('_open');
        closeBtn.addEventListener('click', closePopup);
        popup.addEventListener('click', clickOut);
        document.addEventListener('keydown', keyEvent);
        shiftBodyLock();
    }


    function clickOut(e) {
        if(!e.target.closest('.popup__inner')) {
            closePopup();
            popup.removeEventListener('click', clickOut);
        }
    }


    function closePopup() {
        popup.classList.remove('_open');
        document.body.classList.remove('_lock');
        closeBtn.removeEventListener('click', closePopup);
        document.removeEventListener('keydown', keyEvent);
        popup.removeEventListener('click', clickOut);
        shiftBodyLock();
    }


    function keyEvent(event) {
        if(event.code == 'Escape'){
            closePopup();
        };
    }
}