const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_08_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc2LFxuICAgICAgICA4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDUyLFxuICAgICAgICA4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1LFxuICAgICAgICAzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMixcbiAgICAgICAgNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjQsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2cTlSTFA5ZmpyT0Y4NTFNUUZWVFRHdHdtb2N4bTVMK3JGK3dqYUo1QTNZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxd2FNYTZtZVNHV1hOSks0STRwSlpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEwYTdlOGFmLTc5ZTEtNGMyZC05Yjc4LWJkM2QzMDNiODIzNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDkxLFxuICAgICAgOTEsXG4gICAgICAxMDcsXG4gICAgICAyMTksXG4gICAgICA0MSxcbiAgICAgIDc5LFxuICAgICAgMTg0LFxuICAgICAgOTYsXG4gICAgICAxNzUsXG4gICAgICAzNSxcbiAgICAgIDEsXG4gICAgICA3OCxcbiAgICAgIDE0MSxcbiAgICAgIDEyMCxcbiAgICAgIDYsXG4gICAgICA2OSxcbiAgICAgIDIzMSxcbiAgICAgIDIyMixcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICAxNjcsXG4gICAgICAxMTUsXG4gICAgICAxMjYsXG4gICAgICA5MCxcbiAgICAgIDE2OCxcbiAgICAgIDIwNyxcbiAgICAgIDE3OCxcbiAgICAgIDE0MyxcbiAgICAgIDIxMSxcbiAgICAgIDEwMSxcbiAgICAgIDE3LFxuICAgICAgMTM3LFxuICAgICAgNzMsXG4gICAgICAxNyxcbiAgICAgIDE5NCxcbiAgICAgIDE2NCxcbiAgICAgIDU4LFxuICAgICAgMTYyLFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdNSlBNOVRLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2OTA3MTk2Nzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiyarhtJtcXFwi6pyxIOG0jeG0hyDhtIvKn+G0oXw66pyx4bSY4bSAyoDKgOG0j+G0oVwiLFxuICAgIFwibGlkXCI6IFwiMjYyMTY1MjczNTY3MjQ5OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnIyeS9NRUVQN3Z6N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWUWZMdU5rRlRxTStkNmtGc3pKR1lkdmpNYmhLVFVXVzNvY0t5dVREUGhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRaZjZVV1NodmNXcGJnTFNpQVlOSEUyK1ZLaUhYRk9YcW0reXJ5RkpLVjRKL3oyZ2NvMlFzaGpUUmozbFNaZWNCUHJKNVRZeFNvdlBXMDArWU5rNkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhtTThxdXp3WFhhWWNveWlaNW9WRHhnelo1bENTd1FpbmJ2RmRSRklXOXFrVkNqWmVGNTYveTMwRFZ2SDdpZ2J4VTl1L2NaUFZEVVBpZzdUTDdNTUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY5MDcxOTY3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDk3MzMxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxnVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGdULmpzb24iOiAie1wia2V5RGF0YVwiOlwiQmIxQmJCUVhXTUtLdDd6QjVWU0JDVTNTUy9YLzV5cnZvSS9JMElkUGluWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzE2MTU4MjM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5NzMzMTc2ODZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
