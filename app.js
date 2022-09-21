let dys = document.getElementById('dys');
let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');

let aa = document.getElementById('thesec');
let bb = document.getElementById('themin');
let cc = document.getElementById('thehr');
let dd = document.getElementById('theday');



function countDown() {
    event.preventDefault();
    let sc = aa.value;
    let mx = bb.value;
    let hrz = cc.value;
    let dyz = dd.value;

    if (sc > 60 || mx > 60 || hrz > 24 || dyz > 1000) {
        alert('Max values: Seconds: 60, Minutes: 60, Hours: 24, Days: 1000');
    }

    document.getElementById('main').style.display = 'flex';
    document.getElementById('formm').style.display = 'none';

    function getThat() {
        sc--;
        setTimeout(getThat, 1000);

        console.log(dyz, hrz, mx, sc);
        dys.innerHTML = dyz;
        hrs.innerHTML = hrz;
        mins.innerHTML = mx;
        secs.innerHTML = sc;

        if (sc < 10) {
            secs.innerHTML = `0${sc}`;
        }
        if (mx < 10) {
            mins.innerHTML = `0${mx}`;
        }
        if (hrz < 10) {
            hrs.innerHTML = `0${hrz}`;
        }
        if (dyz < 10) {
            dys.innerHTML = `0${dyz}`;
        }


        if (sc < 1 && mx > 0) {
            sc = 60;
            mx--;
        }

        if (mx < 1 && hrz > 0) {
            mx = 60;
            hrz--;
        }

        if (hrz < 1 && dyz > 0) {
            hrz = 24;
            dyz--;
        }

        if (dyz < 1) {
            dyz = 0;
        }

        if (sc < 0 && mx == 0 && hrz == 0 && dyz == 0) {
            document.getElementById('main').style.display = 'none';
            document.getElementById('launch').style.display = 'flex';
        
            clearTimeout(setTimeout(getThat, 1000));
        }
    };
getThat();
}


function fresher () {
    location.reload();
}