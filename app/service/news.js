const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1) {
        const { serverUrl, pageSize } = this.config.news;

        // const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`,
        //     {
        //         data: {
        //             orderBy: '"$key"',
        //             startAt: `"${pageSize * (page - 1)}"`,
        //             endAt: `"${pageSize * page - 1}"`,
        //         },
        //         dataType: 'json',
        //     },
        // );
        const idList = ['30844268'];
        const newsList = await Promise.all(
            Object.keys(idList).map((key) => {
                let url = `${serverUrl}/item/${idList[key]}.json`;
                url = "http://www.baidu.com";
                return this.ctx.curl(url, { dataType: 'json' });
            }),
        );
        return newsList.map((res) => res.data);
    }
}

module.exports = NewsService;