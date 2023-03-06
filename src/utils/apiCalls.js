const getArticles = ( beforeId ) => {
    return fetch(`https://www.reddit.com/r/business.json?${beforeId}`)
        .then(res => res.json())
        .then(res => res.data.children)
}

export default getArticles;