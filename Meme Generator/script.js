const randomMemeData = (memeArrayLength) => {
    return Math.floor(Math.random() * memeArrayLength);
}


const getRandomMemeData = (memeArray) => {
    return memeArray[randomMemeData(memeArray.length)]
}

const clearMemeArea = () => {
    const memeArea = document.querySelector('.display-meme');
    memeArea.innerHTML = '';
}

const showMeme = () => {
    const randomMeme = getRandomMemeData(memes);
    const memeSection = document.querySelector('.display-meme');
    const memeImg = document.createElement('img');
    memeImg.setAttribute('src', randomMeme);
    clearMemeArea();
    memeSection.appendChild(memeImg);
}

const memes = [
    "https://i.redd.it/a0v87gwzoge61.jpg",
    "https://i.redd.it/q29egav34ee61.jpg",
    "https://i.redd.it/iij16swxjie61.jpg",
    "https://i.redd.it/vek7dm2hrge61.jpg",
    "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
    "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png",
    "https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg",
    "https://code-love.com/wp-content/uploads/2019/03/download.jpeg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
];