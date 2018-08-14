intbox = document.getElementsByClassName('int-box')[0]
getArmour = document.getElementById('getArmor')
hint = document.getElementById('hint')
hintPrefix = "You got "

armor = document.getElementById('armor')
hamlet = document.getElementById('hamlet')
armors = [armor, hamlet]

armor.prob = 10
hamlet.prob = 20

getArmour.onmousedown = function(){
    intbox.style = "box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
}

getArmour.onmouseup = function(){
    intbox.style = "box-shadow:0;"
}

getArmour.onclick = function () {
    getArmour.style.display = 'none'
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
    showArmor(randArmor())
}

function showArmor(id) {
    let len = armors.length
    for (let i = 0; i < len; i++) {
        armors[i].style.display = 'none'
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

armorsProb = 0
for (let i = 0; i < armors.length; i++) {
    armorsProb += armors[i].prob
}