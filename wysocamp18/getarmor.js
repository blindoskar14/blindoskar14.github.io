intbox = document.getElementsByClassName('int-box')[0]
getArmour = document.getElementById('getArmor')
hint = document.getElementById('hint')
hintPrefix = "You got "

armor = document.getElementById('armor')
hamlet = document.getElementById('hamlet')
armors = [armor, hamlet]

armor.prob = 30
hamlet.prob = 70

hamlet.info = "You got 頭盔 Hamlet!\n\n傷害減免：10%\n\nDamage Reduction: 10%"
armor.info = "You got 護甲 Armor!\n\n傷害減免：20%\n\nDamage Reduction: 20%"

getArmour.onclick = function () {
    getArmour.style.display = 'none'
    showArmor(randArmor(), true)
}

function showArmor(id, result) {
    let len = armors.length
    for (let i = 0; i < len; i++) {
        armors[i].style.display = 'none'
    }
    if (armors[id] != null) {
        armors[id].style.display = 'block'
        if (result) {
            showResult(armors[id])
        }
    }
}

function showResult(it) {
    it.style.display = 'none'
    setTimeout(function () {
        it.style.display = 'block'
        hint.innerText =  it.info
        setTimeout(function () {
            it.style.display = 'none'
            setTimeout(function () {
                it.style.display = 'block'
            }, 200)
        }, 200)
    }, 500)
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