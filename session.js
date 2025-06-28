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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JLWEFiSG5mTWRTTnB3UlNLVEpzM2VCVHlCL0w2NzVtZ2xDUVI1Yzludz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1FjZWhzQnhxcmpuclRvN0ZDNU5MVTAxVHZBVllnN2VtRS9Vc1JOZkZXQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTm81b0tnbFpVcExCdlF2MVFsOGhib0VydnZ2RUNZNlgyeXlQK3JuWjNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCMng3Uk9OdGZVR1R3dzQwMm1tVFVNYm5INjBEMFA5V1FNVm5CRnQ5N2dJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJGa3pROGRydVR5Q09QVHNpTHNVblloWEhvS0t1TUF0NlQxeEpINWJEV0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imhsc3RzQW44Z2JCeERqZ1dlZWIyVEgyaDcrakJvSDNDeUVZMysvWWIvM0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1BHYmNacjljQXRsWEVnWElSQjFhTWJjSTRTQllGMWdQZW5zMEhWR0ZYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVNQR1ZiUUpmQ2ZnQUozQmpsWDJSQ1FSeUU1TnhqMms0aXlsNjFLU05rOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im82V1pZL2J4dEpsL0F0N2thZ0J5VEpGOW05RzdyaisxeUlDSVdDdVcxNkI5Mzh3bFFnVTJySGw3ei80TU9JMDRlMnhYQ0IzcXBOQ0lnNkswcXZYbUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6IjJ1YldvRFg1UzQzOURJL1JSZDZnWWtvNlFrbDNzdCswWmJkK0JzL1hjSzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlHU2g2V1VOUzkyMjN3S3ZLX1NDOUEiLCJwaG9uZUlkIjoiMWIxNGVhNjEtNDZmNC00ZjMwLWFkZGItYzRhOGU0NWFiYWNlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZSQkNHamlLSk56aElhRVBsQklwb05JZXRTbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1bjliS0FHOHlkSndCbm8rYlRKb2g1VWkyU289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVDY3NTZaWjgiLCJtZSI6eyJpZCI6Ijk0NzI3NjM0MTk0OjM1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhpcnVzaGEiLCJsaWQiOiIxNTQwMzUxNzY5MjMyNzI6MzVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKS3dxTVlDRVAvVWdNTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJodFgwSEdtSjlEeWtNYWlwbmsrTDRRYUREd1BoU3lrNDAvZUwwdWJ0dWc0PSIsImFjY291bnRTaWduYXR1cmUiOiIzR2pYbXpkT3RRdVlSZGJxU1lobmxHMy9rUkVnOTR3NXFyZm53OHBlMWVwUEROcHJOb0hocitadkdxUWxGNXNEVE1UY3F1RTRhNUsvdnI4cUNTYWdCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVzdqZkNRUFBFWm8zajFGaG5McVl5SDdUekJFeUtyTHRiSDFxRFVKWGZmcWtSMlJuWHUveEdXOEtvZVhBbklLYkl2U0p4dU9WRHkwVFVjajBrdG00Q0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzYzNDE5NDozNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZYlY5QnhwaWZROHBER29xWjVQaStFR2d3OEQ0VXNwT05QM2k5TG03Ym9PIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTExMzI4MTQsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCMVoifQ==",
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
