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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktQejJKM3d1REhVUjJTdWRPa2xxMi9KMVdQSjBnNmVjcVdIS1VPL3drRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGVsVEpqeFVkMXdrVDJKNVc5b0xtVkJsN2pZNEVvR0dWa1JJdnZtUEZBQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTzRseVIvd1QyclA5ZEhpZVlNM1U3YzVwdWowTFdKRFlHeFBjN2xYa0dNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMQXdYZjllL2VnaWZRQUdIcWY2L01ZSFZTWmh1MnVDYUUybFhsOHVtVkhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGR0MxaEdiRzhhYnR6RjNFY1pONW0xYW1GVkNNaDNpNEdOb0tlbi8vVjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZIem9Sa2xQMHVCc0hjbnJrMnQzWmNPQ083dHBQVVQ2L0dFMDFWaGcwQ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBGOEhVS2lBNDA5cWJ3SFk0WVowMTBxZW0wc1RQUTBwVXl0UVdLWERYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXUrQjRYeDVIdDk4VFdXSVRPWjd0SDRiZE1EV1FhcnZWalR5SWkrNEhEbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldZTVpYMXBkMGtoMk5SU1BnQ2JqSUdDc3BZN1QwN3BwZ1pqQm5tdnAyUkl5SGNtU2Z0ZWUyUGlKenBKOFQ3WmZJd3A3RzZCV2FvZVN3ZlR0aW9CNUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiJiVm4xOWlDZ2xrR1F6K1NNN1BiQmtmdVIzMGRPZENzVkpWVU5kc2JvL2NrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtRDFZeTFEVlFEeURyTHI5SzlNc2F3IiwicGhvbmVJZCI6ImI1OTQzM2RlLTgxZmYtNDAwMC1hZTM5LThkZTkyYzY2OGM2MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnOCtXZ2FpMmhLR0l0Ukl5eUN3Szh0UnNKV2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFlaVVF1WGFGblBFd1IzUEczUjNSeWF0SHcwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpSRzM2TTU0IiwibWUiOnsiaWQiOiI5NDcyNzYzNDE5NDo0NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPU0hBREEgTUQiLCJsaWQiOiIxNTQwMzUxNzY5MjMyNzI6NDVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbnQ2UG9ERU56bXFNUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWUFFQNFNaa1NDNlpHTDE2aVhRSG9lY0NFT0tnMVc0SUM3TjM5QVBRNUIwPSIsImFjY291bnRTaWduYXR1cmUiOiJ4Qk9XTlEveTc3cTM1QUdtZjMzZHpYaDFoREozWmVudFJYeXZ6cXJrYlJiOVdDVHFwTGIzN0h2YzVqNjY3aVBiTVhCdlFJZ1VralBFMkQ2dnY0QlVBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVCtSWjBsNitsWlhFdUlTL1d2RzF1OU1jdWlwaWxZV1lVaUZHMjhaQ0lDRXhpRDNuOFRaTFU1Y2RhUEF6c1Z1clcyNEMvS3VDTVlvMmhmTTU5VUZxQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzYzNDE5NDo0NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWVDBEK0VtWkVndW1SaTllb2wwQjZIbkFoRGlvTlZ1Q0F1emQvUUQwT1FkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTM4ODc1OTMsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOT2EifQ==",
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
