import { config } from "dotenv";
config()

import { Bot } from "grammy";

import StartCommandHandler from "./handlers/StartCommandHandler.ts";
import SendGIFHandler from "./handlers/SendGIFHandler.ts";

if (!process.env.TOKEN) throw new Error("Токен отсутствует!")

const bot = new Bot(process.env.TOKEN)

const handlers = [ new StartCommandHandler(bot), new SendGIFHandler(bot) ]
handlers.forEach(command => {
  command.handler()
})

bot.start()