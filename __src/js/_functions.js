//- Поддержка webp
// Устанавливает класс webp для документа, если браузер поддерживает этот формат
export function deviceIdent() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
    
    function isIE() {
        ua = navigator.userAgent;
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
        return is_ie;
    }
    
    if (isIE()) {
        document.querySelector('html').classList.add('ie');
    }
    
    if (isMobile.any()) {
        document.querySelector('html').classList.add('_touch');
    }
    
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
        if (support === true) {
            document.querySelector('html').classList.add('_webp');
        } else {
            document.querySelector('html').classList.add('_no-webp');
        }
    });
    
    window.addEventListener("load", function () {
        if (document.querySelector('.wrapper')) {
            setTimeout(function () {
                document.querySelector('.wrapper').classList.add('_loaded');
            }, 0);
        }
    });
    
    let unlock = true;
    
    //- END Поддержка webp
}




//- Сдвиг контента
//- Сдвигает контент если body имеет класс _lock
let wrap = document.querySelector('.wrapper');
let scrollWidth = window.innerWidth - document.body.offsetWidth;
let conts = document.querySelectorAll('.container');

function shiftBodyLock() {
    if (document.body.classList.contains('_lock')) {
        shiftContent();
    } else if (!document.body.classList.contains('_lock')) {
        unShiftContent();
    }
}

function shiftContent() {
    if (wrap.offsetWidth < document.body.offsetWidth) {
        bodyShift();
    } else if (wrap.offsetWidth >= document.body.offsetWidth) {
        shiftContainer();
    }
}

function unShiftContent() {
    if (wrap.offsetWidth < document.body.offsetWidth) {
        bodyUnShift();
    } else if(wrap.offsetWidth >= document.body.offsetWidth){
        unShiftContainer();
    }
}

function shiftContainer() {
    for (let i = 0; i < conts.length; i++) {
        conts[i].style.right = scrollWidth / 2 + 'px';
    };
};

function unShiftContainer() {
    for (let i = 0; i < conts.length; i++) {
        conts[i].style.right = 0 + 'px';
    };
};

function bodyShift() {
    document.body.style.paddingRight = scrollWidth + 'px';
}

function bodyUnShift() {
    document.body.style.paddingRight = 0 + 'px';
}
//- END Сдвиг контента