/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFDTllNMW9wUlNBRHJ5aldtNmFPK0s1MXJySzdZVXFva29UWG1XM2hsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTlaUVBxOWtsUy82MGxCMnZYcFpPYVZIcGJBeFJpWFlTTHJYeGsrRjdsdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQ3NuL250SGdBUkZzK1RqUHhzY2RQSTA1eWxvbHAyaFNLZVYzbEx1ckc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHejYrbXl4S3lKck5EZ0Yxb2xONTEydUxCVnp4SDQvUlZUODFadHFSSVU0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IejhJc0l3blZ0K0p0VVp3d09QTzllaWRHdTZ2ZG9UM3BsaThLTzNmMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh2NzNXQkgvOVZKSWs5NW1ZY1BiR2VZT2kyS0Fudjlna1NhLzkrL1diQ3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NqYXBad3ZoN1FJYTMybG83WFMxc0NJOFF5V0JhL2EwcHFFMVZOTFQxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidSt5bDZ1dkpDWkpFY0hpcEptQUk5a3ZUZXc3L3ZlU29FZ09iSXFIbVpUUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhlNWhGUERwWlc1UndNZ1d4M1VaeDZ1QlRlSTg2dXY4SFcyWTNrdTFkSENwQW9mVjVoNkpUTWk3dGJ5cUswcUc4Vnk0MFlNK1Y0K212QjZ2YnBPN0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJNY1B3R2VaVkI4MldPL2JhOXlqVDZ3cmpmcjVPR2lTakFlYStJckVTMDMwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzgzMTIwMjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkU3NUM3NzkyQkQwODNDRTFGNkI0QTNEMjgwODhDQkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTkzOTE2NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA3ODMxMjAyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDN0YwMkYxMjBGMEUyQ0MwRDg0QkU1MDZDRTM5QjY0QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1OTM5MTY1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCaUp6X3phVVNQeWRHQTl3OVA4MWNBIiwicGhvbmVJZCI6Ijc3NzlkNWMwLTk5MDQtNDVmMi04OTBhLTBlOWJhYWFmZjRkMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJha0xFWWJTbGx6UDFLUWltOTBORTZHUVIwdVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjlHcHZQekNtSW1nMkE0UmwxNHNydHRPaExrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlEzQk1NQ1JFIiwibWUiOnsiaWQiOiIyMzQ3MDc4MzEyMDIzOjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfmKXwn5ilIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQV2dzSEVReTlYRHdBWVlCQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRcWxsNnpRdnE1cHRrVHdQTWdycTVnTWpjd3I4Q3pLU2ovNXlwUDFEbkVZPSIsImFjY291bnRTaWduYXR1cmUiOiJjQjR2RzRlNnhnOExZdXhSVHNBWHNHUDhRTlJJMFp0U3ZqS3JxV0pQNTRWSmRCSDJMVFh2SVRobFlJejhlaVJmMFdNMnZ2Qml3L0tTQUl6em5XNkZCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiczkyQmFmMGdxM3VPQktzVjhqU0xyb0h4VTIvYjJpOEg1N2hXU2tBSlVuSWFTckw5bVF1Z2xMTjYwUFh5cjlCbGNlSFdGZFZhbUJySlBoeVI0bEVsQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDc4MzEyMDIzOjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVLcFplczBMNnVhYlpFOER6SUs2dVlESTNNSy9Bc3lrby8rY3FUOVE1eEcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU5MzkxNjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRmI2In0=
const session = process.env.SESSION || '';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254114660061';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
