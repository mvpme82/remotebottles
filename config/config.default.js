module.exports = appInfo => {
    const config = {};

    config.keys = appInfo.name + " ILOVEJUDY";
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };
    config.news = {
        pageSize: 1,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };

    return config;
};
