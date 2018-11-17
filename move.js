
$(document).keydown(function (e) {
    if($('.characterOne').attr("data-to-move") == 1) {
        move($('.characterOne'), e)
    } else {
        return false
    }
})

$(document).keydown(function (e) {
    if($('.characterTwo').attr("data-to-move") == 1) {
        move2($('.characterTwo'), e)
    }
    else {
        return false
    }
})

function clickReset () {
$('.reset').click(function () {
    setTimeout(function () {
        resetGame()
        $('.reset').css({display: 'none'})
    },2000)
})
}

function score1 () {
    var scor1 = 0
    var score1Refresh = setInterval(function () {
        var player = parseInt($('.characterOne').css("left"))
        var finish = parseInt($('.end').css("left"))
            if (player < finish) {
                scor1 = scor1 + 1
                $('.timer').text(scor1)
            } else if (player >= finish -30) {
                clearInterval(score1Refresh)
                $('.characterOne').fadeOut(2000, function () {
                })
                $('.reset').text("player 1 finishes!")
                $('.reset').css({display: 'block'})
                finishedRace()
            }
    },1000)
}

function score2 () {
    var scor2 = 0
    var score2Refresh = setInterval(function () {
        var finish = parseInt($('.end').css("left"))
        var player2 = parseInt($('.characterTwo').css("left"))
        if (player2 < finish) {
            scor2 = scor2 + 1
            $('.timer2').text(scor2)
        } else if (player2 >= finish -30) {
            clearInterval(score2Refresh)
            $('.characterTwo').fadeOut(2000, function () {
            })
            $('.reset').text("player 2 finishes!")
            $('.reset').css({display: 'block'})
            finishedRace()
        }
    },1000)
}



function move(character, e) {
    if (e.keyCode == 65) {
        character.animate({left: "+=12px"}, 0, function () {
        })
    }
}

function move2(character, e) {
    if (e.keyCode == 76) {
        character.animate({left: "+=12px"}, 0, function () {
        })
    }
}

function resetGame () {
    $('.aboveSection').css({display: "block"})
    $('.startButton').css({display: "block"})
    $('.characterOne').css({left: "0px"})
    $('.characterOne').css({display: "block"})
    $('.characterTwo').css({left: "0px"})
    $('.characterTwo').css({display: "block"})
    $('.gameBox').css({display: "none"})
    $('.timer').text(0)
    $('.timer2').text(0)
    $('.characterOne').attr("data-to-move", "0")
    $('.characterTwo').attr("data-to-move", "0")
}

function finishedRace() {
    var rematch = setInterval(function () {
    var player = parseInt($('.characterOne').css("left"))
    var finish = parseInt($('.end').css("left"))
    var player2 = parseInt($('.characterTwo').css("left"))
    if (player2 >= finish && player >= finish) {
        setTimeout(function () {
            $('.reset').text("Rematch?")
        },2000)
        clickReset()
        clearInterval(rematch)
    }
},1000)
}
