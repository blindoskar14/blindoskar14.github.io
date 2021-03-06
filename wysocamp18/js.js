btn = document.getElementById('btn')
btn2 = document.getElementById('btn2')
intbox = document.getElementsByClassName('int-box')[0]
getGun = document.getElementById('getGun')
getArmour = document.getElementById('getArmour')
hint = document.getElementById('hint')
hintPrefix = "You got "

akm = document.getElementById('akm')
uzi = document.getElementById('uzi')
awm = document.getElementById('awm')
s1897 = document.getElementById('s1897')
m416 = document.getElementById('m416')
armor = document.getElementById('armor')
hamlet = document.getElementById('hamlet')
guns = [akm, uzi, awm, s1897, m416]
armors = [armor, hamlet]
all = guns.concat(armors)

akm.prob = 45
uzi.prob = 15
awm.prob = 0
s1897.prob = 25
m416.prob = 35
armor.prob = 10
hamlet.prob = 20

getGun.onmousedown = function(){
    intbox.style = "box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
}

getGun.onmouseup = function(){
    intbox.style = "box-shadow:0;"
}

getGun.onclick = function () {
    getGun.style.display = 'none'
    // animate(400, function () {
    //     animate(300, function () {
    //         animate(200, function () {
    //             animate(180, function () {
    //                 animate(170, function () {
    //                     animate(160, function () {
    //                         animate(150, function () {
    //                             animate(140, function () {
    //                                 randGun()
    //                             })
    //                         })
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // })
    showGun(randGun())
}

btn2.onclick = function(){
    showArmor(randArmor())
}

function showGun(id) {
    let len = all.length
    for (let i = 0; i < len; i++) {
        all[i].style.display = 'none'
    }
    if (guns[id] != null) {
        guns[id].style.display = 'block'
        hint.innerText = hintPrefix + guns[id].id
    }
}

function showArmor(id) {
    let len = all.length
    for (let i = 0; i < len; i++) {
        all[i].style.display = 'none'
    }
    if (armors[id] != null) {
        armors[id].style.display = 'block'
        hint.innerText = hintPrefix + armors[id].id
    }
}

function animate(interval, cb) {
    showGun(0)
    setTimeout(function () {
        showGun(1)
        setTimeout(function () {
            showGun(2)
            setTimeout(function () {
                cb()
            }, interval)
        }, interval)
    }, interval)
}

function randGun() {
    let rand = Math.random() * gunsProb
    for (let i = 0; i < guns.length; i++) {
        if (rand < guns[i].prob) {
            return i
        } else {
            rand -= guns[i].prob
        }
    }
}

function randArmor() {
    let rand = Math.random() * armorsProb
    for (let i = 0; i < armors.length; i++) {
        if (rand < armors[i].prob) {
            return i
        } else {
            rand -= armors[i].prob
        }
    }
}

function checkRand() {
    let count = [0, 0, 0, 0, 0]
    for (i = 0; i < 1200; i++) {
        count[randGun()]++
    }
    console.log(count)
}


showGun(-1)
showArmor(-1)
gunsProb = 0
armorsProb = 0
for (let i = 0; i < guns.length; i++) {
    gunsProb += guns[i].prob
}
for (let i = 0; i < armors.length; i++) {
    armorsProb += armors[i].prob
}
checkRand()