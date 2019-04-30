(function() {
    var sec = 0
    setInterval(function () {
        var date = new Date(null)
        date.setSeconds(sec)
        var timeString = date.toISOString().substr(11, 8)

        var el = document.querySelector('#beomy-persistent-time')
        if (el) {
            el.textContent = timeString
        } else {
            var div = document.createElement('div');
            div.id = 'beomy-persistent-time'
            div.style.position = 'fixed';
            div.style.top = 0;
            div.style.right = 0;
            div.style.zIndex = 9999999;
            div.textContent = timeString;
            document.body.appendChild(div);            
        }
        sec += 1
    }, 1000)
})();