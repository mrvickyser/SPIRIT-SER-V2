const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:sᴘɪʀɪᴛ sᴇʀ [OWNER]\n' // full name
            + 'ORG:sᴘɪʀɪᴛ sᴇʀ;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=917994093863:91 7994093863\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "sᴘɪʀɪᴛ sᴇʀ [OWNER]", vcard: vcard}, MessageType.contact)
}))
