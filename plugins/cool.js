const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💝sᴘɪʀɪᴛ-sᴇʀ💝■□══╗*\n           \n*⚜═sᴘɪʀɪᴛ-sᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 Sᴘɪʀɪᴛ-sᴘɪʀɪᴛᴛʜᴇsʜ - https://api.whatsapp.com/send?phone=917994093863&text=Please%20add%20Sᴘɪʀɪᴛsᴇʀ%20bot%20ɢʀᴏᴜᴘ%20💝*\n*            *\n*╚══■□💝sᴘɪʀɪᴛ-sᴇʀ💝■□══╝*\n\n*▷Creator: Sᴘɪʀɪᴛ-sᴇʀ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═sᴘɪʀɪᴛ-sᴇʀ ᴏᴡɴᴇʀ sᴘɪʀɪᴛ- »« ʀᴇᴀʟ ɴᴀᴍᴇ-Sᴘɪʀɪᴛᴛʜᴇsʜ═🌟*\n\n*🔅https://github.com/SPlRlT-YT/spirit-ser"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💝sᴘɪʀɪᴛ-sᴇʀ💝■□══╗*\n           \n*⚜═sᴘɪʀɪᴛ-sᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 Sᴘɪʀɪᴛ-sᴘɪʀɪᴛᴛʜᴇsʜ - https://api.whatsapp.com/send?phone=917994093863&text=Please%20add%20Sᴘɪʀɪᴛsᴇʀ%20bot%20ɢʀᴏᴜᴘ%20💝*\n*            *\n*╚══■□💝sᴘɪʀɪᴛ-sᴇʀ💝■□══╝*\n\n*▷Creator: Sᴘɪʀɪᴛ sᴇʀ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═sᴘɪʀɪᴛ-sᴇʀ ᴏᴡɴᴇʀ sᴘɪʀɪᴛ- »« ʀᴇᴀʟ ɴᴀᴍᴇ-sᴘɪʀɪᴛᴛʜᴇsʜ═🌟*\n\n*🔅https://github.com/SPlRlT-YT/spirit-ser"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
