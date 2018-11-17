
    document.querySelector(".button").addEventListener("click",function () {
        var time = 5
        var setTime = setInterval(function () {
            if (time === 1){
                clearInterval(setTime)
                $('.countDown').text("Race!")
                setTimeout(function () {
                    $('.countDown').css({display: 'none'})
                },1000)
                $('.characterOne').attr("data-to-move", "1")
                $('.characterTwo').attr("data-to-move", "1")
                score1()
                score2()
            } else if(time === 4) {
                time = time - 1
                showGame()
                $('.countDown').text(time)
            } else {
                time = time - 1
                $('.countDown').css({display: 'block'})
                $('.countDown').text(time)
            }
        },1000)
    })

function showGame () {
    $('.aboveSection').css({display: "none"})
    $('.startButton').css({display: "none"})
    $('.gameBox').fadeIn(1000, function () {
        $('.gameBox').css({display: "block"})
    })
}











