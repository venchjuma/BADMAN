const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]═══════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="venchngogo22@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website =process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255767886564";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_08_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA3MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzksXG4gICAgICAgIDc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0LFxuICAgICAgICA2NixcbiAgICAgICAgMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzLFxuICAgICAgICA4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MixcbiAgICAgICAgMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVKMk81OCtiQy9jMW9WR29xNVEzN3pSMHVvQ2RXaTdqdHljQ0t5UU5iaXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJRTHpuQjkxVGN1cTdoaGh0ejd3UWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDA4MDhlYmItMGY2ZS00NjU2LTg4ZTktYjFmZjY0YmZiMTA2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMTI0LFxuICAgICAgNDksXG4gICAgICAyMjMsXG4gICAgICAyMTcsXG4gICAgICAxNSxcbiAgICAgIDEwNCxcbiAgICAgIDEwMixcbiAgICAgIDIzOCxcbiAgICAgIDE4NyxcbiAgICAgIDIxOSxcbiAgICAgIDgyLFxuICAgICAgMTAzLFxuICAgICAgNTAsXG4gICAgICAxNjgsXG4gICAgICAyMzgsXG4gICAgICAyMTEsXG4gICAgICAzMSxcbiAgICAgIDEsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxMzYsXG4gICAgICA2MixcbiAgICAgIDE2MixcbiAgICAgIDE5NSxcbiAgICAgIDIzMCxcbiAgICAgIDE3MSxcbiAgICAgIDEzOCxcbiAgICAgIDQyLFxuICAgICAgMTkzLFxuICAgICAgMjgsXG4gICAgICAxMjMsXG4gICAgICAyMDYsXG4gICAgICAxODQsXG4gICAgICAxMixcbiAgICAgIDIsXG4gICAgICAxOSxcbiAgICAgIDE0NSxcbiAgICAgIDc2LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZUQrYjRJRUlIMDNzSUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjB6Rk1KRTRYV1N0bmJ4WWNIb1pLaEx5bzZzUXlIUSttUUJkMWZXMU4zQzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU2Vqb0hGSVI4UzYreVQ1VzkxZWg2dmpyWU5KeTJkai95SmRPK2lZM2lnQlJDZTFhM3M3RXI1SDgxSS9MMERxdWhmOEZzYUEvbEVjU3RiZ3pNMkdrQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVXV0UHh4VGVDQ1IvWG81UFZNa3VMZENoMDJLTEF2eEwxZWJOR0sxRkJpRUJmRlhUcmNsZEVuQnhzQTgyTVR3RmdLT3Z4SjlHNVQ0VW0wR1JFY3U3amc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3Njc4ODY1NjQ6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU2MTM5NzAyMDk1OTY2OjEzQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzY3ODg2NTY0OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTA1Nzk3MTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLSmNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtKWi5qc29uIjogIntcImtleURhdGFcIjpcIk1Nd1oycXdhS3VZZGRIUnZsL0tlUk5VRE0wT1ZVcll6N3A5czZIUlRtb3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjI3OTQ4OTk0MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzQxOTkzNDE1NDY1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0phLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNGpZTGs2MmhHUUdVZkhmYVljd0tac0dJOTJXY1g2WGNTYjVlSnFkY0VrZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjc5NDg5OTQzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDQ2MDU5NjIxNDhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLSmIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxNCtCQzdxK2FWWG9UQ1l0NDNJVkZnVERIbndVN1diTGdNOTZBR2xUOC9nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyNzk0ODk5NDMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzQ3MTk5MjM1OTI4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0pjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYmZZNzZMRXhBNk1iMFpoREp6d2ZjL2loZGt0MEM5UVJNQ3BXRklQYnR6az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjc5NDg5OTQzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMSwwLDJdfSxcInRpbWVzdGFtcFwiOlwiMTc0OTc5MTQxODE5OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtKZS5qc29uIjogIntcImtleURhdGFcIjpcIjRveUs3WkhRUWtqNVczNWkvQmhLRDVXQXlMUjlmQk10eWdtQXNVNEZZWUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjI3OTQ4OTk0MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTA0MzgwMzMzNzVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLSmYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyazdTdHZoMFpVT0xheWU3NGdITko3MjVkaGQzQXg1b25TbFpNVERkcmJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyNzk0ODk5NDMsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzUwNDQ5OTAwMTM3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0poLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQXBLUGkwUlp5b25mcXZKZnpDcUhWV2ttMkJDQWg1UFNJR2IwdEQ0UThmOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjc5NDg5OTQzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMSwzLDBdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDU3OTY5Njk2M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtKaS5qc29uIjogIntcImtleURhdGFcIjpcIm5GOHRKZ3dtajlMU3NZMEd3d3hQdVNtUWJFcFlzcGp4VUNPcUdQMWFsQTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjI3OTQ4OTk0MyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzUwNTc5Njk4MTE1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "Kalulu Sunday" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Kalulu-Bot",
  ownername:process.env.OWNER_NAME|| "Mr. Kalulu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
