const WhatsAlexa = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'link', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'ππΆπΈπ π»π½πΊπ  \n\n\nhttps://github.com/SPlRlT-YT/SPIRIT-SER'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: 'ππΆππΎππΏ π»πΈπ½πΊπ   \n\n\nhttps://chat.whatsapp.com/F3adhxvYpd3KzVptzDxhC4'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: 'ππΎππ½π΄ππ    \n\n\nhttp://wa.me/917994093863'}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: "β‘οΈ..α΄ΚΙͺα΄α΄..Κα΄Κ..α΄α΄..Κα΄α΄α΄α΄Ι΄..β‘οΈ",

          footerText: 'β’Sα΄ΙͺΚΙͺα΄ sα΄ΚΒ©',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
