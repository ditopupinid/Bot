const fs = require('fs')

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id',
}

// Apikey
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'hXLyR6s6AczuEHD',
}

global.namabot = "Ditopupin BOT"
global.namaowner = "Ditopupin ID"
global.packname = namabot
global.author = namaowner
global.myweb = "https://ditopupin.id"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("")
global.qris = fs.readFileSync("")
global.owner = ['62816108815','6281389549322']
global.pairingNumber = "6281389549322" //pairing number to install bot 
global.sessionName = 'session'
global.background = "" //maks size 50kb agar welcome nya gk lemot
global.prefa = ['-_-']
global.grup_only = false //bot hanya bisa di gunakan dalam grup jika true
global.mess = {
    done: 'Done ✅',
    wait: '_⌛ Sedang di proses_',
    admin: '_Fitur Khusus Admin Group_',
    botNotAdmin: '_Jadikan Bot Sebagai Admin Terlebih Dahulu_',
    owner: '_Fitur Khusus Owner Bot_',
    group: '_Fitur Khusus Dalam Group_',
}
global.butwel =  [{
   buttonId: '.menu',
   buttonText: {
      displayText: '⚡ Menu'
   },
   type: 1
}, {
   buttonId: '.owner',
   buttonText: {
      displayText: 'Owner 👤'
   },
   type: 1
}]
global.help = {
menu(pushname, salam, mundur, upload, download, totalGb, usedGb, freeGb, ownerName, botName, jam, tanggal, runtime, prefix){
  return `${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}

