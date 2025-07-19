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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBFaVU0eEtsdXZ6V0F0TVl1aFg1TXlybTdBWHVFN20vU3ZQem5adWJYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlFzazRHNHYzZ3oyYSs5R3hPd3NrWVhISnZmTldoYk9ISVpqYkZNTklqND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTktSR2EwZmNFUGZCelhJWVM1V08vRFpzdnF1NXhRK2lsdXpsZ1FHVzBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5cUJjcVBVeFBqK3dWN09WRUlTeVltUGpvS0hQbHBTN2FkT0l0WjYwRVFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCOEtJcmZFTVRiMWZWTWRLeFl2YStBZDNGK3FUR2xhNEgwRlF6bWtXMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZtQ09KNlkvR2ZiWmFSTEFxdVZieEM0cUlkeGtodWhRd2xHcCtNMisrWGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBvelB1K2lld1N2QmlGWmEyTitWK0MzVFd2TXVTS0hISDN5MUVBOW1YOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSit5a3BjbXpSUC9sWHlkUXJVWStZZTZxYjk4K2JpZUQ0UGczUHZrbTJSVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild0SXhVMEEwcXo3cHVLeDdjVlRzQjdwN3JRdFEwdVY4VnRNSGE5enNiTmtQcjlYZ3NjTHQ3MGROdzg5VXRxVTl5a1FtMmRBMVV3c2ZXMC9YVGJDTmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJIK3BPV01nb1Bra2grcm9sdEJKcHQvV2ZUVEN6by9uWjdzamVRQW1sL3ZNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQZXE0Mk90NlJHcUJHaEhSNHNEcXZnIiwicGhvbmVJZCI6IjQ3MjU1MDg5LTNlM2ItNDZiZi05NzIyLTIyOTMxNzJmZDI5MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJteXdVSWVkaWtkYndkWmt2dmNqdEVEZFpabGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdnTjhEMVMxNXhVbnhrYzdYVlNOQVFOSWVRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNWSlI1S0dXIiwibWUiOnsiaWQiOiI5NDcyNzYzNDE5NDo0M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPU0hBREEgTUQiLCJsaWQiOiIxNTQwMzUxNzY5MjMyNzI6NDNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNZnQ2UG9ERUpYejdNTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWUFFQNFNaa1NDNlpHTDE2aVhRSG9lY0NFT0tnMVc0SUM3TjM5QVBRNUIwPSIsImFjY291bnRTaWduYXR1cmUiOiIrS2xMYkFJMmZUMHdNR0wzb3V0WkVjbWlVNEhCek96aGZQRUh3bDU3MytwbzUrZHZEbGl2OFRWZXBXc1pZRUh5SkxubGhOR01TTnRTUEpsMjBoVVBDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVXpZNkhMNS9DcnBWN1pwSTRVV0IrMVhDNkJhQmJ5a2UwRyttSVRBOTUyd0s1eFkzMyt5ZE5CRHdocS9FbkU3cVY0OUJnbmhuMTdHZHBIME4zOHAyaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzYzNDE5NDo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWVDBEK0VtWkVndW1SaTllb2wwQjZIbkFoRGlvTlZ1Q0F1emQvUUQwT1FkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTI5MDYxNDUsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOT1IifQ==",
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
