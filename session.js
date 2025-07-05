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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dyT3dYUFNDZ2U5YTlCVjNYaGQ3UmRkSWdrVXBMRTlRcysvYnJHV1VVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVRXd2RtNGordlZBeTQyTEFXWHFNeFh4NUlzZGE1WXo2UTYzM29CSVBXTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTGVBV2FoaUZzK3ZXZW8zakRLOVpoRFJ3cDNielhWalM3R3ErTW9YMm1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGQ0l2RzRSVWNCMTEycE1GUXE0UU1LR3VEVmJNQi9hQXhHVlVnZUo3Wm40PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMbk5pT1E0UjYwUE1LNHB1bDBYUE1HaUw5WVV3cWlCK21LK2tYcmhiVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxoZnJXYitvMFlTY3c4bWZBaHBPSUljQmJYUElYdllXM0tuaEtuaGsrUVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BBRE9DcGNwQ2xjTEF5NHlXYldWWXJyN1dzV2VSNWZ6UEJYbzJmN3VWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3FGNmFWQ3F4OUxDOUNlaTBKQWJ1Q1ZNd1UzMkYwSFFCQUhUQy9QTU5oVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZtbkQ4V2tMYTY3elVIR215S2p1NkhuQnd1RmF6ZHF5cldxaS9YNFB2Ym1VOWV1Q1BQMDZzMHZTRndpOWFVaVdRdlFVWXNsZGk4OUdDSllnbHhDNUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJmQUUydTRCc21VTGFuMVdJMjBMYWhFMjNueGRqZzFqamdKTjVqMjBqbWFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3VGwybmdTblNQYVl4NjhwVWZxYllBIiwicGhvbmVJZCI6IjcxODIwMTI5LWNmM2QtNGQzZi1iNmM3LTViNDMwOWRlMjhhYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJINTJueEk0M3JGWVUxWnlnTlBBZXY2NXczRXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXNWQnU0SDN0TW1kSkFXVlhyMTJsQWw0dTdRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhFWTczTDVMIiwibWUiOnsiaWQiOiI5NDcyNzYzNDE5NDozOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIaXJ1c2hhIiwibGlkIjoiMTU0MDM1MTc2OTIzMjcyOjM5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlN3cU1ZQ0VNVy9wTU1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaHRYMEhHbUo5RHlrTWFpcG5rK0w0UWFERHdQaFN5azQwL2VMMHVidHVnND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVXhja1hpU2RuaXJ6VHREKzFqTzFiU0k5Y01jc1c3SUlpdFF5dUZ0UThBQVpOYVRJT0dxZElWdHZ6SlBscHBDdjdlbndQYTA3Vi9DQ0VGc3cvLzJiRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImNpd1RTYnhoeitiT2NGSHdEenZnc3ZaRDBFNjJleEJqUE5kWE5yYUxRVURuSmRVRTNOZ3FUZVNDWW9UZHRhOEZXN0dVdGNMQk5scjd4N2hBK2JMaUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Mjc2MzQxOTQ6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWJWOUJ4cGlmUThwREdvcVo1UGkrRUdndzhENFVzcE9OUDNpOUxtN2JvTyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxNzE5ODkwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjFaIn0=",
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
