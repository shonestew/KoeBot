import { Bot } from "grammy";

export default class StartCommandHandler {
  private bot: Bot

  constructor(bot) {
    this.bot = bot
  }

  handler() {
    this.bot.command("start", async (ctx) => {
      ctx.reply(".")
    })
  }
}