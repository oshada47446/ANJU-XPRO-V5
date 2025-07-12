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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JkYThlSFU2azd6K0U5clFrYkh2RU1UdjVkam9RRDBIdVRKQURZRGYyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGtzOVkydlFqWEFBUTIxblI4a3h6NjhVdmQ4eWMwaWpyU2QwMTlaUlYxOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQ3NnU05KSitOODZYWCtQRnFDbVQ3VlprR0NLeTdqbEpsdWkyNENYREVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLaE5NWGFpZXBOTlFIZzFOTUxETmlScmRnYlZqQ1ZSREQrVWVSd2JleGlzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QYVFVOFk1NzJJZjRVdzhTZFlCRnZ6b3lVVitURTRud2UwUy85SHlsVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE3SC80NjdUckhPeVd4NlhEZmZ4dkczRUdSay9QbCsxL3QvY0l4TitpRTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxidHdXbzlROUZyYWYxeTA1eFlBaTZhUVNoTmZxdThBT0RYUzlFRUFrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjJQUFZwTGZ2VzZaSWk1cDBWSllVelBVQko1RjZscEppbi9ITUlJVVpFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlkxN2dJallrN05oU05xYUR3cWl5aXNDdnZEQ2VxWGZHUERjOGNEdmcxVlMycHZOaVV5d2JtdXA5ZjVRQ3g2SzJPV0V4cU9kK1FsN0JtbGMycHIwaGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJNWS9LUjVVaDkvb2wwUFpiYi81dEhxUnBLOUNOQ1J2VkJyQnFhN3ZWdlJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaOWJkcVBfZlJrQzcydmdlYTV1MVlnIiwicGhvbmVJZCI6IjliMjFiMGZmLTg4NGUtNDZhNS04NmE5LWNkOWViNGJlMjUwZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4SjdhOGVwVE9Eemx1dG1aNDFJVkdmamRiUWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYldoVjN1VEhLSFoyYVhvbGp2OVNGKzh0MUd3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk0M1FDUVBBIiwibWUiOnsiaWQiOiI5NDcyNzYzNDE5NDo0MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPU0hBREEgTUQiLCJsaWQiOiIxNTQwMzUxNzY5MjMyNzI6NDFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNWHQ2UG9ERUxqQnljTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWUFFQNFNaa1NDNlpHTDE2aVhRSG9lY0NFT0tnMVc0SUM3TjM5QVBRNUIwPSIsImFjY291bnRTaWduYXR1cmUiOiJ0NWw3VjArTDRrMyt0LzNYdkt0NzJlMmZKNjlzMFdZNlRMOGloaGdkNThiWjRleFdLZ2JmWk5PUVRoSENSOElMMDVtVURIU25ROW8zMXhjMXdCUm9EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT0VkTUJsRUkyclB1V05paVBhdUU3Nk9abFFacDhjVkN4M2NtTXBVYVJURTFWZVRNZm1xcjNrZkU1dlh4OFRZdkZDV0pKNE0zMjRvWDZFRWcxVUE5aUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzYzNDE5NDo0MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWVDBEK0VtWkVndW1SaTllb2wwQjZIbkFoRGlvTlZ1Q0F1emQvUUQwT1FkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTIzMjYzNDAsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOT1MifQ==",
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
