function getRandom(max, min) {
    for (let i = 0; i < 10; i++) {
        let random = parseInt(Math.random() * (max - min + 1) + min)
        console.info(random)
    }
}
getRandom(5, 2)