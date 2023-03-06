const getArticles = () => {
    return fetch('https://www.reddit.com/r/business.json')
        .then(res => res.json())
        .then(res => res.data.children)
}

export default getArticles;