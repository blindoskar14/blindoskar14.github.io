intbox = document.getElementsByClassName('int-box')[0]
getGun = document.getElementById('getGun')
hint = document.getElementById('hint')

akm = document.getElementById('akm')
uzi = document.getElementById('uzi')
awm = document.getElementById('awm')
s1897 = document.getElementById('s1897')
m416 = document.getElementById('m416')
guns = [akm, uzi, awm, s1897, m416]

akm.prob = 45
uzi.prob = 15
awm.prob = 0
s1897.prob = 25
m416.prob = 35

s1897.info = "You got S1897!\n\n有效攻擊範圍：半徑 1.2 km\n\nShooting Distance: 1.2 km\n\n傷害：50%\n\nDamage: 50%\n\n*不能裝上配件\n\n*cannot use with scopes"
uzi.info = "You got UZI!\n\n有效攻擊範圍：半徑 2.5 km\n\nDistance: 2.5 km\n\n傷害：10%\n\nDamage: 10%\n\n*不能裝上配件\n\n*cannot use with scopes"
akm.info = "You got AKM!\n\n有效攻擊範圍：半徑 5 km\n\nDistance: 5 km\n\n傷害：20%\n\nDamage: 20%"
m416.info = "You got M416!\n\n有效攻擊範圍：半徑 5 km\n\nDistance: 5 km\n\n傷害：25%\n\nDamage: 25%"
awm.info = "You got AWM!\n\n有效攻擊範圍：半徑 20 km\n\nDistance: 20 km\n\n傷害：50%\n\nDamage: 50%"

getGun.onclick = function () {
    getGun.style.display = 'none'
    animate(400, function () {
        animate(300, function () {
            animate(200, function () {
                animate(180, function () {
                    animate(170, function () {
                        animate(160, function () {
                            animate(150, function () {
                                animate(140, function () {
                                    showGun(randGun(), true)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function showGun(id, result = false) {
    let len = guns.length
    for (let i = 0; i < len; i++) {
        guns[i].style.display = 'none'
    }
    if (guns[id] != null) {
        guns[id].style.display = 'block'
        if (result) {
            showResult(guns[id])
        }
    }
}

function showResult(it) {
    it.style.display = 'none'
    setTimeout(function () {
        it.style.display = 'block'
        hint.innerText = it.info
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


function checkRand() {
    let count = [0, 0, 0, 0, 0]
    for (i = 0; i < 1200; i++) {
        count[randGun()]++
    }
    console.log(count)
}


showGun(-1)
gunsProb = 0
for (let i = 0; i < guns.length; i++) {
    gunsProb += guns[i].prob
}