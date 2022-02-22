/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+918281440156
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'Sᴘɪʀɪᴛ Bᴏᴛ Oᴡɴᴇʀs Nᴜᴍʙᴇʀ', description: "⚙Bᴏᴛ Oᴡɴᴇʀ Nᴜᴍᴇʀ\n\n\n*◁ === Tɪs Oᴡɴᴇʀs sᴘɪʀɪᴛ Sᴇʀ Nᴀɴʙᴜɴ Aɴᴅ Cʜᴜɴᴋs === ▷*\n\n🎭 *sᴘɪʀɪᴛ Bᴏᴛ Bʏ sᴘɪʀɪᴛ sᴇʀ *\n 🔮 http://wa.me/917994093863.\n\n ", rowId:" rowid1"},
        {title: 'Gɪᴛ', description: "Sᴘɪʀɪᴛ Sᴇʀ Bᴏᴛ Mᴀᴋɪɴɢ Lɪɴᴋ.\n\n\n*◁ === 🥰🤗 Gɪᴛ Lɪɴᴋ === ▷*\n\nhttps://github.com/SPlRlT-YT/spirit-ser\n\n ", rowId:"rowid2"},
        {title: 'Sᴘɪʀɪᴛ Bᴏᴛ Oғғɪᴄᴀʟ Gʀᴏᴜᴘ Bʏ sᴘɪʀɪᴛ', description: "Gʀᴏᴜᴘ Lɪɴᴋ .\n\n\nhttps://chat.whatsapp.com/F3adhxvYpd3KzVptzDxhC4\n\n ", rowId:" rowid5"},
        {title: 'Sᴘɪʀɪᴛ Sᴇʀ Cʜᴀɴᴀʟ Lɪɴᴋ ', description: "sᴘɪʀɪᴛ sᴇʀ Cʜᴀɴᴀʟ\n\n\n*sᴘɪʀɪᴛ Sᴇʀ Cʜᴀɴᴀʟ Sᴜʙsᴄʀᴀɪʙᴇ*\n\n*https://youtube.com/channel/UCBv1Z1zkOmdGeWU2QRdYBnA* ", rowId:" rowid6"},
        {title: 'Bᴏᴛ Gʀᴏᴜᴘ Dᴇsᴄʀɪᴘᴛɪᴏɴ', description: "Nɪʏᴀᴍᴀᴍ Iɴɪ Eʟʟᴀᴠᴀʀᴋᴋᴜᴍ Bᴀᴅʜᴀᴋᴀ Mᴀɴ \n\n\n☃️ᴏɴɴᴜᴍ ɪʟʟᴀ ɢʀᴏᴜᴘ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ😁 \n\n  ", rowId:" rowid7"}
       ]
       
       const sections = [{title: "sᴘɪʀɪᴛ sᴇʀ 💝", rows: rows}]
       
       const button = {
        buttonText: '💝Sᴘɪʀɪᴛ Bᴏᴛ💝',
        description: "💖✻sᴘɪʀɪᴛ Sᴇʀ Bᴏᴛ✻💖",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
