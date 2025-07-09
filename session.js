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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09iUnlBaEl2eTJIT1BhNmV4S3lTUXBvcTZMR3g2eTJZN2lVeU9OYWdsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDRLYWJSZjRiN1pWT01qL3JTZFVXb0tTVnZEdkErN2FuMGZ5NWF5a29IWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RU5rMUFFL2VycjVZM2JUS0VxbGFTMUNwSFJtYUFwZXp6Y0dIUGcySDBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYa3luSG03aXhVVUp2V2JOendkVEtvMlAwQ1pWT0ZiZWo5a0F1SThtQ0dNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1GRFNqZU5naDFtVFBJVGNncytJTUhkMEJmOFVwQVE2LzFhYU05bFFDbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt6SktKb2N6V1FadTVaNnBiSHRXeDh5bHRBRVU5RjAzYkxjS1RhbmlGd0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUxmZUUzN1M1NHlhUThQbnBvZ054bWVma1c5UG1VdGh2dnRLdjdaZHJsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmVlTVFFdEVjSFVmVUFGdEpxRUVrbkZkbEdQdHJWYU1JYXBENlhoN0Rsdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpRVHl3azVPMERza0x4MExhRTlGcS9aOExYRCt6bjN6b0p0QUxieVMyQkN5VHIrdkh5Z0tYNm1rdnRaRUp2SUF6UE02MG9vdUIxQ3VJMWJMOXd2YWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJ0dVVDQXNhWE10bEZOcjExeXlUU1RYREtPUUZMNjdPNjJUSHZVdkpJVEk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI3NjM0MTk0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQwRUI0OUJEMjBBOEIwMTA2MzI1MDczNkFGRkRGMjk4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTIwNzE4MTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im4wa0tadmo4Ui1TVjJ0bjhrenJOWVEiLCJwaG9uZUlkIjoiY2Y1NzhkNDItZWE4Yi00MWEwLWFhNzAtZWQzOWM3Njk0N2I1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZJTUgyanFqUHRJaVNxWEU3YkdEUzNxczQxMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKTU92ajVCZVN3NGJSRjIyZ3VGbEZrM1pqVUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNVk3QlY2S0IiLCJtZSI6eyJpZCI6Ijk0NzI3NjM0MTk0OjQwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhpcnVzaGEiLCJsaWQiOiIxNTQwMzUxNzY5MjMyNzI6NDBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNVHQ2UG9ERU8vOHVjTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWUFFQNFNaa1NDNlpHTDE2aVhRSG9lY0NFT0tnMVc0SUM3TjM5QVBRNUIwPSIsImFjY291bnRTaWduYXR1cmUiOiJuQjNraUxvZkhka0VJMTRVYU1Od1F4a3FUUXlibkdBQXh3RlZBczh1VzRSR2JGWndhQm1yeTV2Vm80SXR0SjlKNmpvRURtSFMvZDAzeGZid2o2SGVCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOGhjV3BBVkNheEUyMEZBemJMZEJJRGtrREZqL1VHcG05bkRGWldVdTlTNG13R0ZHK2J1ZDluSVNuZ0RzTEFHM1FsanpxL1BuNW5HemNhRmRyVEh2Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzYzNDE5NDo0MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWVDBEK0VtWkVndW1SaTllb2wwQjZIbkFoRGlvTlZ1Q0F1emQvUUQwT1FkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTIwNzE4MDUsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOT1IifQ==",
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
