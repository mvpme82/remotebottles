const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = "Hi, Judy!";
    }
}

module.exports = HomeController;