'use strict';

window.addEventListener('DOMContentLoaded', function() {

    let tab = document.querySelectorAll('.info-header-tab'); 
    let info = document.querySelector('.info-header');                  
    let tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent (a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent (b) {
        if ( tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(e){
        let target = e.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //------Timer

    let deadLine = '2020-01-28';

    function getTimeRemaining (endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date());

        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor(t / (1000 * 60 * 60));

        return {
            'total'     : t,
            'hours'     : hours,
            'minutes'   : minutes,
            'seconds'   : seconds
        };
    }

    function setClock (id, endTime) {
        let timer = document.querySelector('#' + id);
        let hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

            function updateClock () {
                let t = getTimeRemaining(endTime);
                
                hours.textContent = setTime(t.hours);
                minutes.textContent = setTime(t.minutes);
                seconds.textContent = setTime(t.seconds)    ;

                if(t.total <= 0) {
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                    clearInterval(timeInterval);
                }

                function setTime (time) {
                    if (time > 9){
                        return time;
                    } else {
                        return ('0' + time);
                    }
                }
            }
    }

    setClock('timer', deadLine);
});