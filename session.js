//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VxUnc0NlEvMXFuR1MzSUxUKzhtbjNZU3IvblZsa2oxakhISXk4NmdsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnhYMHUxZEdTUUk5UnVZQXErcVRSWnVDRnp0djdLWWY5UXBGQ1dxdndrUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRk43ZmZRZXhYUm91OXh2VS9qNTFraDFQdUtDczhMQkprMEhUVm54M1V3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZEpwYUMvYkE3SE9PRWxERFVGSWZHNUZ6NG5oYTRlQU5LNnRhZm52Vnc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BS0JZNk5ZZlA1V1owZVFDRkxqUVFXRGd5SnBOeE9aQVA4a0FQNzJjVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZyWjB1amNxOXE1SVdBZ3hJbTlkbUxKUU1NNjJKc3Q2TzBUN0FxbGxZRGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUE5SnhXSjNBQjdnL1ZxcDV3aG5waVlJMHozYkoyRkxuMXhZNkt0MDBWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTIwT3hHcjB2SlNIYlRzQ1E1Ty91VWNFUlBTQUxxNXpOTE1wb1hxNjdVVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdTcGZ1aVVOMDhWTndLQ2ttZzZXM3RNZDBvK1crTTdVcHJPdkFFTkNYazIrNURUY3NLcXdNMzFnRWFPVXpERFpBMXd4MkU3bTBjaS9YejZZaTYzR2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiJ6RTUrUS9zVFdGbTBDd2hQY3AvT1RCUDRyTW9qMS9DVll1WklEWldBV2hJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuVkZnU2ttSFJ2YTc5SmJteDVCckFBIiwicGhvbmVJZCI6IjZkM2JmY2Y3LTcwYzQtNGU3OC04NWM3LTc2NjljYTA4MjlmMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWRVRMdUp3clk0bzROa0tmMkhad2JDT0xPNms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZHbDZUSC9qaFNjckpIeUNOcGI3a01UK1I0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZaQjNTR0ZHIiwibWUiOnsiaWQiOiI5NDcyNzYzNDE5NDozNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIaXJ1c2hhIiwibGlkIjoiMTU0MDM1MTc2OTIzMjcyOjM2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSk93cU1ZQ0VKaU1pOE1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaHRYMEhHbUo5RHlrTWFpcG5rK0w0UWFERHdQaFN5azQwL2VMMHVidHVnND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ0ZwNXA2NittdEFjYXV2MXQ2bmV1QVRjWGJYamMySUlhSzIyNU14VlV2V0MycjR5YjVwRG9NcHl1Y1ZmRmdRTm5kN08yU0lqUy9xbU5EZERDTEpoQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IjAxbm1LTjJXSmVHUnF2NlBpK2ZkS1pRaVl4Qm1xb0pYWXowYVZBeks1NWlRK3JIUlJpRjlUNGdBYzlUTWQwYzZKM0E3SUNlTUdXTElldWEzQnpLUGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Mjc2MzQxOTQ6MzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWJWOUJ4cGlmUThwREdvcVo1UGkrRUdndzhENFVzcE9OUDNpOUxtN2JvTyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMzAzNzE3LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94 74 207 3449",
  PASSWORD: 
    process.env.PASSWORD || "oshada2007",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
