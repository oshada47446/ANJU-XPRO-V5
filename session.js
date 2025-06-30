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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic013MjNtOGQrdWxsdlNXalJCK3lTbVNRbTBRVEdydjJzZThrMm5WRk1rYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWFkNFRSM1JXdG1sNDFRTVlyeWhFajVxZXhGVkhxQ0g3ak9Ba24ycjhTcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSW96STBwNW1OdHhPTXp6cXdRbEpiSHFNUEYxTTlXUW9wUTgwMTlHOUZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNdC8zLzZ0eHBGZ3p3K3ozSVFMdzFZc1Zvcnh5Rkt6RVVoWnkxbHJtRW5jPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPNG9ZYlliY1RLSFhmb0pRK1pmcFpuY3FSNFBlYytSeVhiNXBNR3E2RTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko3QWtiSU9yaEJvZkZUa1ZWc2t3ZEx0SXBiMW5tdGJPRzdBdTkxbGhBd3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0E1VThESmNvM1VIM3JkZGNXcjIrQ2E2dytOSUZXS1c0ajRTVEYvQk5Haz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0xrZU0xZC9iK1daTDRDK1c5UmFoMTd0cUVKeWpab2U4VVhXTmhoMHVpST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTWk9RdDJkZXNIc3AyeW1NVHJiUHNqSnVmWmErTXlTYWJrbWlDNGhYRllTTVd4Y3h2YllNMjJYTDlQYml0OVROeDVHSDEwNmtOODBkbWxvQjlIUUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc0LCJhZHZTZWNyZXRLZXkiOiJORmF6bUI4bnF1dEN6cGlDL1lwTWxJOU5WSUJQRlljQjg3Z2p3VVVBdFJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIandRY0tzalJoZWswZFhXLWNBQmF3IiwicGhvbmVJZCI6ImEzOWEwM2FlLWViMDctNDQxOS1iMDJkLTk4YWVlMWE4MjEzYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHYStsaU9ZWU1zSCt3algwK3JpZnZvWGlvV0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFY5YXJvRWFSYTArbjFBdDdiRlI4VlNwUTRrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRZV0RFTEJUIiwibWUiOnsiaWQiOiI5NDcyNzYzNDE5NDozOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIaXJ1c2hhIiwibGlkIjoiMTU0MDM1MTc2OTIzMjcyOjM4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSk93cU1ZQ0VMNlFpOE1HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaHRYMEhHbUo5RHlrTWFpcG5rK0w0UWFERHdQaFN5azQwL2VMMHVidHVnND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSlFQUHYwYlhBYmcxUHBoREZJanZsZzNMM2x5MUpUWUZGaXp2SkMwbm9yakU1eWhkYTNmdCtQWFdlRjlxTFJJSHUyQkdjMU1LbDZzYTdDUDZub2N3QVE9PSIsImRldmljZVNpZ25hdHVyZSI6Im9jUmNuYjJyREsvRWtCZ29ZNk1XWWxTZEg0dUZNdnQ1UFFrL1ZkWTFuUWtJWXRqVXFTbkZYSlc2cUxDMnQxQUdjaGRCczBsbjZIQ2poSmZKMFJESURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Mjc2MzQxOTQ6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWJWOUJ4cGlmUThwREdvcVo1UGkrRUdndzhENFVzcE9OUDNpOUxtN2JvTyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMzA0MjY4LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjFaIn0=",
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
