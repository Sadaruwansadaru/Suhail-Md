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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_51_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzLFxuICAgICAgICAzNixcbiAgICAgICAgMjI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAyLFxuICAgICAgICA4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgwLFxuICAgICAgICA1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDczLFxuICAgICAgICA0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ0LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidGcwSWVLSzM2UjhHWkRDRVVWTlVFZUVBMzF2U2poMEwvb0VqUGtIaC8ydz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMmxYd3RZSktSTnEtYXZ0d1BtdVZNQVwiLFxuICBcInBob25lSWRcIjogXCI4ZmZmOTk2MC05ZDY2LTQ0ZjMtYTYzNi04NTkyYmZiN2FiNDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTY0LFxuICAgICAgMTcwLFxuICAgICAgMTE1LFxuICAgICAgMTQ4LFxuICAgICAgMjA3LFxuICAgICAgMTQ2LFxuICAgICAgMTYxLFxuICAgICAgMjAwLFxuICAgICAgMTMzLFxuICAgICAgMTMwLFxuICAgICAgMjQ2LFxuICAgICAgMTU0LFxuICAgICAgNjQsXG4gICAgICAxMDUsXG4gICAgICAxMjMsXG4gICAgICA3OCxcbiAgICAgIDE3OCxcbiAgICAgIDE0MixcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAxMjIsXG4gICAgICAxNzksXG4gICAgICAyNDksXG4gICAgICAxNjYsXG4gICAgICA4NyxcbiAgICAgIDE1MixcbiAgICAgIDIzNyxcbiAgICAgIDE4OCxcbiAgICAgIDE0OSxcbiAgICAgIDE0OSxcbiAgICAgIDk4LFxuICAgICAgNDgsXG4gICAgICAxMjIsXG4gICAgICAxNzMsXG4gICAgICAyMDcsXG4gICAgICA3NyxcbiAgICAgIDE0OCxcbiAgICAgIDEzNCxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWQk1CVEJHMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjkwNzE5Njc6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLJquG0m1xcXCLqnLEg4bSN4bSHIOG0i8qf4bShfDrqnLHhtJjhtIDKgMqA4bSP4bShXCIsXG4gICAgXCJsaWRcIjogXCIyNjIxNjUyNzM1NjcyNDk6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnYyeS9NRUVKdUUwTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWUWZMdU5rRlRxTStkNmtGc3pKR1lkdmpNYmhLVFVXVzNvY0t5dVREUGhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRmU2c3QzlQQjJZZ2g1NVhIR21uNUs2a3RqZ3Z1L1NRWmErVVlpZUhtQUhFOXBYYU5mTExBZG1FeEF0TzNRZDdsMFpIMi9TVzJ1VXVPbWlCNVM2OEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIittOU1xVFo1RmhPSlNkTGhOR1czeThIK0xuSlU4WmRUTFFSeHRhTU9EaUJWSjZRQlpIbTI5WFR2VnR3dEp0VXBQOTV3cFp0QWEyc1hEVU1OMTlMTkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY5MDcxOTY3OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NzU5MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMZ1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxnVS5qc29uIjogIntcImtleURhdGFcIjpcIkYxdmJEUUlHZGUzZm80S21qVGhRVXBFRkJ0bHB5bjE5OTRHZFVrd3lzdkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMxNjE1ODIzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDk3NTc4NzM5MVwifSIKfQ=="  // PUT your SESSION_ID 


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
