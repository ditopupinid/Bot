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

global.sewabot = ("SEWA BAPAK KAU") // ISI HARGA SEWA BOT LU

global.namabot = "Ciluk بot" // UBAH JADI NAMA LU
global.namaowner = "Pe" // NAMA OWNER
global.footer_text = "© Ciluk بot" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6289688329976'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
global.packname = '© Ciluk' //sticker wm ubah
global.author = 'Di Buat Oleh Ciluk بot' //sticker wm ganti nama kalian
// = \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.fakelink = "https://tracker.gg/valorant/profile/riot/CaptureTheFlag%23CTF/overview" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://www.tiktok.com/`) // GANTI LINK GRUB BOT LU \\
// - \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})