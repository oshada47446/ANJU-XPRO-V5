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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0gzb1E1V09seTI0aWFGWlpQZ0VxRnAzeHFwWEU1WVJXOWhzdnB0YXZuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzhJOFpkNmZFMTJ0UzlSVHpwc3l5N1FrT0xzN0xwRkpxZjM1cUVvNFpSUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHT3VtcElzMnd6Z2d0QndPVzhtdnA1NGZrem9OZTJETTc1WVNJeHRZQVVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhZjBUUUFWaG1EcWFTQzlZVklWZ0lJcmF2LzFzdHMvZmQ2dndZRDJ2YkQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIc1A1QlMrSWFlZnRiZFJJT0tmbDlpdVVtNmkyek55YkFFTTlnVzZwVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVRQ2lHTkRHVGFjN2FsVm9XNTlhcUk3QTZ5TmZqU0FLL1lTMFlzSUNrenM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1MWGtXUytuaXpvT2NMVjN5Q3VRNFB6bE9mQ2EvQjlHTGxVaVJsNlYxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielFDV2xxRXFvMWJaZTloOUFqYTZjYnBHZnpSeUJHWjFpQTZhUTNuZi9Vbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNHNC9DbTBwQlg5V1VBL3lJV01OdlBCeERtRXlhSkwwQ1lpVzVJQVRMaEhnNmoxVndUREgzejN3S1k4S21ybUpvb21vM05FbUd2anBlRURiUnh2Mmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiI1VzRoVXJ4ZEFpSncvKzJVd00ySVppRExJd0FLS3RhKzZxdHM3bWljTG80PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrbEVCN0V3SlFEdWYyUWxRanYyNlNBIiwicGhvbmVJZCI6IjZiZWZmYzcyLTVlY2UtNDUxOS1iNmI5LWI5OWUyMjA5M2ZmNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPa1VZNGlFcGVFTFNtUWlSSHA2ckhtSkJaSjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2FNQ2ZkcEpFNlBZWlBwQ1duRnVhWmo4bzFNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlROWUREVE1CIiwibWUiOnsiaWQiOiI5NDcyNzYzNDE5NDo0NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPU0hBREEgTUQiLCJsaWQiOiIxNTQwMzUxNzY5MjMyNzI6NDRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNanQ2UG9ERU9YdGc4UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWUFFQNFNaa1NDNlpHTDE2aVhRSG9lY0NFT0tnMVc0SUM3TjM5QVBRNUIwPSIsImFjY291bnRTaWduYXR1cmUiOiJ0anFZaHhDNTkwcGxMZkJkQURObmRNUVF2NHdCVDRwSFkxeFZIUGxhUDl1OC9iMmxQaEVyVDM1VFo5a0hNL3FvWXdTanNPdXFZcFlVL0dJaGZhZ2JDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZExyUzcyYWZKOHZaL202cDltMFByV1NaQWo5V0VsU1RwSmExcEkwQVQzTW4yN0RDOGhnK3RQSlFPWXI2VS9tNWRzTnFIYW0wRjZnK1VrS0h3RlU2Z1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzYzNDE5NDo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWVDBEK0VtWkVndW1SaTllb2wwQjZIbkFoRGlvTlZ1Q0F1emQvUUQwT1FkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTMyODIyOTAsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOT1IifQ==",
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
