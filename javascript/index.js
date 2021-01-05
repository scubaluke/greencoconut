function scrollHomePageText() {
    const textToScroll = ['helpful', 'dedicated', 'creative', 'valuable']
    const homePageTextScroll = document.querySelector('#homePageTextScroll')
    let index = 0
    setInterval(() => {
        if(index >= textToScroll.length) {
            index = 0
            homePageTextScroll.textContent = textToScroll[index]
            index++
        } else {
            homePageTextScroll.textContent = textToScroll[index]
            index++
        }
    }, 2000);
}
scrollHomePageText()