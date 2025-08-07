import { Bot } from "grammy";

export default class SendGIFHandler {
  private bot: Bot

  constructor(bot) {
    this.bot = bot
  }

  handler() {
    this.bot.on("message:text", async (ctx) => {
      const msg = ctx.message.text.trim().toLowerCase().replaceAll("қ", "к")
      const msg_words = msg.split(" ")

      const special_words = msg_words.filter(word => word.startsWith("кое"))

      if (special_words.length < 0) return

      ctx.replyWithAnimation("https://files.catbox.moe/25cyj7.mp4", {
        reply_to_message_id: ctx.message.message_id
      })
    })
  }
}