const fs = require('fs')
const chalk = require('chalk')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'FNsUSkHv', // ISI APIKEY LU
}

global.sewabot = ("Service Unavailble") // ISI HARGA SEWA BOT LU

global.namabot = "CilukBot" // UBAH JADI NAMA LU
global.namaowner = "0xff" // NAMA OWNER
global.footer_text = "© Created by" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6282220727243'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
global.packname = '© CilukBot' //sticker wm ubah
global.author = 'Di Buat Oleh Pe' //sticker wm ganti nama kalian
// = \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.fakelink = "https://tracker.gg/valorant/profile/riot/CaptureTheFlag%23CTF/overview" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://tracker.gg/valorant/profile/riot/CaptureTheFlag%23CTF/overview`) // GANTI LINK GRUB BOT LU \\
// - \\
// FALSE OR TRUE \\
global.autoTyping = true // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = false // BEBAS

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})