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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BSN1RMY0hyY3pWeWF4OWQ3NUVDaE1sUlJ5WktNMFdkemVldXhhZUxuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0V3Vk1pNnAzRHkvakJTaXVPSDVsK0IrZ0xwdDhYRkppaDYvcEJyUUtEYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQTMraXN1YkRVUkVQZkkzZm5JQkFsMHhnQmUvaldiVTNnc25pMU9BZTNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEcENCeXFpRCt0c3ZjSmJJL2k0TVJNeFU5eVg2UktvQnRIdzFEQzZzRldNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRBYkVzRHJwVENiS2dWUGV3ZUdqdUJRcWNhZUp6Ung3cjZvRGVLM2dBR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpqVXp6VTlyUEhYNDEzZTFBWXkrQ0E5czlTMWQ2bEljcEZQaG0yTTJDQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0JUMHBEL2FvK3V1TU9YUHM5OU91R3RpWFhsNDU0MGU5TnhRcWNGR3RYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVk3c0RzMzMwMUVpelZSNEgrSTViVExoR3BOeDYwY3JHbHZaSm1HVXl3VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdLOW1HT1AxdHVKOHkzaHgrWmlDbXRzUWNXemR2NjdEZXBQTXpEcHFtV3BXdmNsTGQyQ2FqaDdLNXVlRGNwTHV0WmFCODJyVUFJLzZuajYxbzN5cUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiI2Nm9OYjludXZZRkF4ZTROQ0VtZDgwUm1YbktZaHJ5MGpzczhmU3NiMlNJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI3NjM0MTk0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNEQ0M5NTVBQzcxQzJCNzA5RDU1QkVDMkFDODlCRDQ1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ2NDk0MTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJwUnFLWW1TUkphN3U5NnF0SF9BWEEiLCJwaG9uZUlkIjoiMzVmZjkzZWMtYWVhNS00YjlkLTllMmUtOGNmY2RmZjIzZDYxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBEYjJ4TGt4bWxFSkZENHpSYmk4ZUVDaTdNZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKb1JiWlRzdnZ1S21oWW4xWStIQUd6QnFrU1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjhHVFRTQUoiLCJtZSI6eyJpZCI6Ijk0NzI3NjM0MTk0OjQ2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9TSEFEQSBNRCIsImxpZCI6IjE1NDAzNTE3NjkyMzI3Mjo0NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01ydDZQb0RFTEdtMThRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZQUVA0U1prU0M2WkdMMTZpWFFIb2VjQ0VPS2cxVzRJQzdOMzlBUFE1QjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im81TE4yVmtZRXZZNGYvOWdNTU5QNk9nNENIYmUxeERGYkZQODdVWmdNNWR6UHpNQ0JxczVUNjI4eXZOQllvMStHZ2VyeEpQeFpzZ1orV0N4SUpYUERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVUDZvMFI4NkFwOEt3TDMyMlpib0pwRDFWTnhWS09Qc1hkd1RVMnZGcHNuYXY2UUpiWmluYWRDNmZYR3l2Nzg0V1lmV3hkcnNSMmZyLzFxTGRtOE5Edz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI3NjM0MTk0OjQ2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZUMEQrRW1aRWd1bVJpOWVvbDBCNkhuQWhEaW9OVnVDQXV6ZC9RRDBPUWQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDY0OTQwNiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVB0dCJ9",
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
