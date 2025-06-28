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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0h1OGJlTStyRTJYd3RGTVFnek1vZjRWcXFKcm9pTVRDM2hSZE9iNXdXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVQ0U2ttMnhFVnRFTm4zZlpMWE5PTER0K2lSNGRKL2t5cjQ1OENFMzZuWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT3ZkMWVES1NzNVJPa2xCYU5ScDhqa3J5N2VSS2p6S0FhZ0oydytJWm1JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGSnR2WnRkTkV5dzZWK2xoTXBETG5VSVRMS3dXR1BaVm9RdjFqcjg4UWtBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjROUHhvTUhhN2ZxSW9zQThwbHd3QTdJN090aGI1OU14MzZSbDY0cy9rWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjljMERkaUhRaU14WWxaMWdVUzRyNURjZlNvTnFZZzNyRGRyVUpnVThEVUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU90YzhFSHI2NjhYa1cxYW5EOFNjeWdPVGNxa0pxUlloZllyaXJHM2JFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzJFTEd1dVJucXlxSTJhSVAvVGxJc3hmd2lTVE00ZlVJZ1RLQ1dGaURIbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlsOE5IZjlLUTJPcEhTbmJ4b3FOb3NtUHdKdjB5RFdsN3Fwb0VRNXVRS1Q0a2NxV0UyaDYwQlRlNmRSMGhYUFRDaGorRzFyckZVNTBUaFZranFlRmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6Ind3a09FSCtXSndJdG84cUowcjFHUmJ6L3hrcjJQeU9yNG5qNkxZdXNkWHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpRc3hqUWJBUTZPb1diZWQydkxyc1EiLCJwaG9uZUlkIjoiOTQ1Yzk4ODMtNGQ0ZS00ZDc4LThlODktNGEwMjk3MzJiMjcwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpXbGtmc2x1V3YwcG8rZUZYUEdqZkFoRHpBRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSnYzbVI3V3JqUDAvSzJWY253T3FGMnE3T0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR1NZUUUzRkQiLCJtZSI6eyJpZCI6Ijk0NzI3NjM0MTk0OjM0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhpcnVzaGEiLCJsaWQiOiIxNTQwMzUxNzY5MjMyNzI6MzRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKR3dxTVlDRUxIR2dNTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJodFgwSEdtSjlEeWtNYWlwbmsrTDRRYUREd1BoU3lrNDAvZUwwdWJ0dWc0PSIsImFjY291bnRTaWduYXR1cmUiOiJXYUl3WFI0d2lJNVpZMmJBRmtMVjlyYTVEWU5SVU50b3ZTdmVXM0JOVHJLNHJPYi9IZnFTWHN1VmttZ1U5cmJ0MEl1aFYzZjhvbGdGbitmWkowbkZBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaGdCRDgxVFVTZXhmUFhxRGR3NlBwMXdQUGFtYUVWWXJNZk1YRkM2bkxWRSsveDRJbXZxVjNvSEJtZlVHZEVyZ0RvU3dSZXE0Z0tpOEhjY3g4RGo3Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzYzNDE5NDozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZYlY5QnhwaWZROHBER29xWjVQaStFR2d3OEQ0VXNwT05QM2k5TG03Ym9PIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTExMzA5NDMsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
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
