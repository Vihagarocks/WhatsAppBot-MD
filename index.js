//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                                                     //
//                                                             ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ                                                               //
//                                                                                                                                                     //
//                                                                    Ｖ：１．０．１                                                                     //
//                                                                                                                                                     //
//                                     ░█████╗░██╗░░░░░██╗███████╗███╗░░██╗  ░█████╗░██╗░░░░░███████╗░█████╗░                                          //
//                                     ██╔══██╗██║░░░░░██║██╔════╝████╗░██║  ██╔══██╗██║░░░░░██╔════╝██╔══██╗                                          //
//                                     ███████║██║░░░░░██║█████╗░░██╔██╗██║  ███████║██║░░░░░█████╗░░███████║                                          //
//                                     ██╔══██║██║░░░░░██║██╔══╝░░██║╚████║  ██╔══██║██║░░░░░██╔══╝░░██╔══██║                                          //
//                                     ██║░░██║███████╗██║███████╗██║░╚███║  ██║░░██║███████╗██║░░░░░██║░░██║                                          //
//                                     ╚═╝░░╚═╝╚══════╝╚═╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝░░╚═╝                                          //
//                                                                                                                                                     //
//                                                                                                                                                     //
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//

// Obfuscated By AlienAlfa
// Unecrypted file Willbe relesed Soon
// Full file will be relised After all BUGS Has been Fixed

// CURRENTLY RUNNING ON BETA VERSION!!
/**
   * MIT License
* 
   * Create By Dika Ardnt.
   * Edited By Alien-Alfa
   * Copyright (c) 2021 Alien-Alfa.
* 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
* 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
*/

                                                                                                                                                                                                                                                                                const _0x6e284e=_0x2dcd;function _0x2dcd(_0x2aa9f1,_0x45a8fc){const _0x5329ee=_0x5329();return _0x2dcd=function(_0x2dcdfd,_0x5e5591){_0x2dcdfd=_0x2dcdfd-0xdb;let _0x57895a=_0x5329ee[_0x2dcdfd];return _0x57895a;},_0x2dcd(_0x2aa9f1,_0x45a8fc);}(function(_0x1937d3,_0x248b8d){const _0x4dee09=_0x2dcd,_0x4fa939=_0x1937d3();while(!![]){try{const _0x5ef15c=-parseInt(_0x4dee09(0x13f))/0x1*(-parseInt(_0x4dee09(0x17d))/0x2)+parseInt(_0x4dee09(0x130))/0x3*(parseInt(_0x4dee09(0x108))/0x4)+parseInt(_0x4dee09(0x15f))/0x5*(-parseInt(_0x4dee09(0xff))/0x6)+-parseInt(_0x4dee09(0x174))/0x7*(-parseInt(_0x4dee09(0xdd))/0x8)+-parseInt(_0x4dee09(0x156))/0x9+-parseInt(_0x4dee09(0x12b))/0xa*(-parseInt(_0x4dee09(0x12c))/0xb)+parseInt(_0x4dee09(0x12d))/0xc;if(_0x5ef15c===_0x248b8d)break;else _0x4fa939['push'](_0x4fa939['shift']());}catch(_0x348110){_0x4fa939['push'](_0x4fa939['shift']());}}}(_0x5329,0x9b22a),require(_0x6e284e(0xf2)));const {default:alfaConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require('@adiwajshing/baileys'),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x6e284e(0x10c)),pino=require(_0x6e284e(0x10b)),{Boom}=require('@hapi/boom'),fs=require('fs'),yargs=require(_0x6e284e(0x155)),chalk=require('chalk'),FileType=require('file-type'),path=require(_0x6e284e(0x13a)),PhoneNumber=require('awesome-phonenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x6e284e(0x10f));let developerName=_0x6e284e(0x158);var low;try{low=require('lowdb');}catch(_0x3aea86){low=require(_0x6e284e(0x150));}const {Low,JSONFile}=low,mongoDB=require(_0x6e284e(0x14b));global['api']=(_0x1541cb,_0x5f4224='/',_0x26d08f={},_0x3e227a)=>(_0x1541cb in global[_0x6e284e(0x115)]?global[_0x6e284e(0x115)][_0x1541cb]:_0x1541cb)+_0x5f4224+(_0x26d08f||_0x3e227a?'?'+new URLSearchParams(Object['entries']({..._0x26d08f,..._0x3e227a?{[_0x3e227a]:global[_0x6e284e(0x16e)][_0x1541cb in global[_0x6e284e(0x115)]?global[_0x6e284e(0x115)][_0x1541cb]:_0x1541cb]}:{}})):'');const store=makeInMemoryStore({'logger':pino()[_0x6e284e(0x134)]({'level':_0x6e284e(0xf1),'stream':_0x6e284e(0xeb)})});global[_0x6e284e(0xfa)]=new Object(yargs(process[_0x6e284e(0x160)][_0x6e284e(0x122)](0x2))[_0x6e284e(0x172)](![])['parse']()),global['db']=new Low(/https?:\/\//[_0x6e284e(0xe1)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x6e284e(0xe1)](opts['db'])?new mongoDB(opts['db']):new JSONFile(_0x6e284e(0xec))),global['db'][_0x6e284e(0xfe)]={'users':{},'chats':{},'sticker':{},'database':{},'game':{},'settings':{},'others':{},...global['db'][_0x6e284e(0xfe)]||{}};if(global['db'])setInterval(async()=>{const _0x3da2fb=_0x6e284e;if(global['db'][_0x3da2fb(0xfe)])await global['db']['write']();},0x1e*0x3e8);async function startalfa(){const _0x10b3d7=_0x6e284e;let _0x5ed398=[0x3,0xca2,0x9];const _0xa204e1=alfaConnect({'logger':pino({'level':_0x10b3d7(0xf1)}),'printQRInTerminal':!![],'browser':[_0x10b3d7(0x154),'Safari',_0x10b3d7(0x10d)],'auth':state,'version':_0x5ed398});return store[_0x10b3d7(0x165)](_0xa204e1['ev']),_0xa204e1['ws']['on'](_0x10b3d7(0xf6),async _0x3bfa31=>{const _0x3c3c24=_0x10b3d7,_0x3b1b36=_0x3bfa31[_0x3c3c24(0x132)][0x0][_0x3c3c24(0x118)][_0x3c3c24(0x167)];if(_0x3bfa31[_0x3c3c24(0x132)][0x0][_0x3c3c24(0x126)]==_0x3c3c24(0x159)){let _0x21fd1b=await _0xa204e1[_0x3c3c24(0x14f)](_0x3b1b36,global[_0x3c3c24(0x140)]);_0xa204e1[_0x3c3c24(0x131)](_0x3b1b36,{'text':_0x3c3c24(0x16c)},{'quoted':_0x21fd1b}),await sleep(0x1f40),await _0xa204e1[_0x3c3c24(0x109)](_0x3b1b36,_0x3c3c24(0x168));}}),_0xa204e1['ev']['on'](_0x10b3d7(0x189),async _0x265e64=>{const _0x2f0921=_0x10b3d7;try{mek=_0x265e64['messages'][0x0];if(!mek[_0x2f0921(0xdc)])return;mek['message']=Object[_0x2f0921(0x17c)](mek[_0x2f0921(0xdc)])[0x0]===_0x2f0921(0x137)?mek[_0x2f0921(0xdc)]['ephemeralMessage'][_0x2f0921(0xdc)]:mek['message'];if(mek[_0x2f0921(0x169)]&&mek[_0x2f0921(0x169)][_0x2f0921(0x184)]==='status@broadcast')return;if(!_0xa204e1[_0x2f0921(0x16b)]&&!mek[_0x2f0921(0x169)][_0x2f0921(0x15a)]&&_0x265e64[_0x2f0921(0xf9)]===_0x2f0921(0x183))return;if(mek[_0x2f0921(0x169)]['id'][_0x2f0921(0x163)]('BAE5')&&mek['key']['id']['length']===0x10)return;m=smsg(_0xa204e1,mek,store),require(_0x2f0921(0x11e))(_0xa204e1,m,_0x265e64,store);}catch(_0x3d3bf4){console[_0x2f0921(0x177)](_0x3d3bf4);}}),_0xa204e1['ev']['on'](_0x10b3d7(0x181),async _0x484dbc=>{const _0x315cd9=_0x10b3d7;console[_0x315cd9(0x177)](_0x484dbc);try{let _0x36714c=await _0xa204e1['groupMetadata'](_0x484dbc['id']),_0x3c7f91=_0x484dbc[_0x315cd9(0x11c)];for(let _0x59ed0b of _0x3c7f91){try{ppuser=await _0xa204e1[_0x315cd9(0x136)](_0x59ed0b,'image');}catch{ppuser=_0x315cd9(0x18d);}try{ppgroup=await _0xa204e1[_0x315cd9(0x136)](_0x484dbc['id'],_0x315cd9(0x12a));}catch{ppgroup=_0x315cd9(0x18d);}if(_0x484dbc[_0x315cd9(0x16a)]==_0x315cd9(0x18b))_0xa204e1['sendMessage'](_0x484dbc['id'],{'image':{'url':ppuser},'contextInfo':{'mentionedJid':[_0x59ed0b]},'caption':_0x315cd9(0x166)+_0x36714c[_0x315cd9(0x141)]+'\x20@'+_0x59ed0b[_0x315cd9(0xe0)]('@')[0x0]});else _0x484dbc[_0x315cd9(0x16a)]==_0x315cd9(0x11d)&&_0xa204e1['sendMessage'](_0x484dbc['id'],{'image':{'url':ppuser},'contextInfo':{'mentionedJid':[_0x59ed0b]},'caption':'@'+_0x59ed0b['split']('@')[0x0]+_0x315cd9(0xf5)+_0x36714c[_0x315cd9(0x141)]});}}catch(_0x505148){console['log'](_0x505148);}}),_0xa204e1[_0x10b3d7(0x139)]=_0x1aa706=>{const _0x4b9c34=_0x10b3d7;if(!_0x1aa706)return _0x1aa706;if(/:\d+@/gi['test'](_0x1aa706)){let _0x19449e=jidDecode(_0x1aa706)||{};return _0x19449e[_0x4b9c34(0x182)]&&_0x19449e[_0x4b9c34(0x135)]&&_0x19449e['user']+'@'+_0x19449e[_0x4b9c34(0x135)]||_0x1aa706;}else return _0x1aa706;},_0xa204e1['ev']['on'](_0x10b3d7(0x149),_0x14253e=>{const _0x39057b=_0x10b3d7;for(let _0xc25d99 of _0x14253e){let _0x16af22=_0xa204e1['decodeJid'](_0xc25d99['id']);if(store&&store[_0x39057b(0x129)])store[_0x39057b(0x129)][_0x16af22]={'id':_0x16af22,'name':_0xc25d99[_0x39057b(0x183)]};}}),_0xa204e1[_0x10b3d7(0x17a)]=(_0x325d09,_0x309517=![])=>{const _0x544a90=_0x10b3d7;id=_0xa204e1['decodeJid'](_0x325d09),_0x309517=_0xa204e1['withoutContact']||_0x309517;let _0x19123f;if(id[_0x544a90(0x123)]('@g.us'))return new Promise(async _0x203502=>{const _0x204676=_0x544a90;_0x19123f=store[_0x204676(0x129)][id]||{};if(!(_0x19123f[_0x204676(0xe4)]||_0x19123f[_0x204676(0x141)]))_0x19123f=_0xa204e1[_0x204676(0x117)](id)||{};_0x203502(_0x19123f['name']||_0x19123f[_0x204676(0x141)]||PhoneNumber('+'+id[_0x204676(0x151)]('@s.whatsapp.net',''))['getNumber']('international'));});else _0x19123f=id===_0x544a90(0x119)?{'id':id,'name':_0x544a90(0x16d)}:id===_0xa204e1[_0x544a90(0x139)](_0xa204e1[_0x544a90(0x182)]['id'])?_0xa204e1['user']:store[_0x544a90(0x129)][id]||{};return(_0x309517?'':_0x19123f[_0x544a90(0xe4)])||_0x19123f[_0x544a90(0x141)]||_0x19123f[_0x544a90(0xfd)]||PhoneNumber('+'+_0x325d09[_0x544a90(0x151)](_0x544a90(0x171),''))[_0x544a90(0x144)]('international');},_0xa204e1[_0x10b3d7(0x14f)]=async(_0x5a5440,_0x364339,_0x2d49e7='',_0x2ef0d7={})=>{const _0x32c092=_0x10b3d7;let _0x24ec7f=[];for(let _0x2d7721 of _0x364339){_0x24ec7f[_0x32c092(0x10e)]({'displayName':_0x32c092(0x158),'vcard':_0x32c092(0x114)+developerName+_0x32c092(0xf0)+developerName+_0x32c092(0xed)+_0x2d7721+':'+_0x2d7721+_0x32c092(0xe6)});}_0xa204e1[_0x32c092(0x131)](_0x5a5440,{'contacts':{'displayName':'ＡＬＩＥＮ\x20ＡＬＦＡ','contacts':_0x24ec7f},..._0x2ef0d7},{'quoted':_0x2d49e7});},_0xa204e1[_0x10b3d7(0xdb)]=async(_0x52e921,_0x3390df,_0x3620c3='',_0x5a7897={})=>{const _0x27f824=_0x10b3d7;let _0x1fb2a6=[];for(let _0x457f5c of _0x3390df){_0x1fb2a6[_0x27f824(0x10e)]({'displayName':_0x27f824(0x158),'vcard':_0x27f824(0x173)+developerName+_0x27f824(0xf0)+developerName+_0x27f824(0xed)+_0x457f5c+':'+_0x457f5c+_0x27f824(0xe6)});}_0xa204e1['sendMessage'](_0x52e921,{'contacts':{'displayName':_0x27f824(0x158),'contacts':_0x1fb2a6},..._0x5a7897},{'quoted':_0x3620c3});},_0xa204e1[_0x10b3d7(0xf4)]=_0x3e0cdb=>{const _0x949c5c=_0x10b3d7;return _0xa204e1[_0x949c5c(0x128)]({'tag':'iq','attrs':{'to':'@s.whatsapp.net','type':_0x949c5c(0xf8),'xmlns':_0x949c5c(0xfc)},'content':[{'tag':_0x949c5c(0xfc),'attrs':{},'content':Buffer[_0x949c5c(0x13c)](_0x3e0cdb,_0x949c5c(0xe5))}]}),_0x3e0cdb;},_0xa204e1['public']=!![],_0xa204e1[_0x10b3d7(0x106)]=_0xcda9d=>smsg(_0xa204e1,_0xcda9d,store),_0xa204e1['ev']['on']('connection.update',async _0x470ff9=>{const _0x139fde=_0x10b3d7,{connection:_0x51725a,lastDisconnect:_0x127d87}=_0x470ff9;if(_0x51725a===_0x139fde(0xef)){let _0x148136=new Boom(_0x127d87?.[_0x139fde(0x13b)])?.[_0x139fde(0x14e)][_0x139fde(0x121)];if(_0x148136===DisconnectReason[_0x139fde(0x176)])console[_0x139fde(0x177)]('Session\x20File\x20is\x20Currept,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again'),_0xa204e1[_0x139fde(0x14d)]();else{if(_0x148136===DisconnectReason['connectionClosed'])console[_0x139fde(0x177)]('Connection\x20closed,\x20reconnecting....'),startalfa();else{if(_0x148136===DisconnectReason['connectionLost'])console[_0x139fde(0x177)](_0x139fde(0x153)),startalfa();else{if(_0x148136===DisconnectReason[_0x139fde(0xf3)])console[_0x139fde(0x177)](_0x139fde(0xee)),_0xa204e1[_0x139fde(0x14d)]();else{if(_0x148136===DisconnectReason[_0x139fde(0x17f)])console[_0x139fde(0x177)]('Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.'),_0xa204e1[_0x139fde(0x14d)]();else{if(_0x148136===DisconnectReason[_0x139fde(0x107)])console[_0x139fde(0x177)](_0x139fde(0x188)),startalfa();else{if(_0x148136===DisconnectReason['timedOut'])console[_0x139fde(0x177)](_0x139fde(0x12e)),startalfa();else _0xa204e1[_0x139fde(0x14a)]('Unknown\x20DisconnectReason:\x20'+_0x148136+'|'+_0x51725a);}}}}}}}console[_0x139fde(0x177)](_0x139fde(0x142),_0x470ff9);}),_0xa204e1['ev']['on']('creds.update',saveState),_0xa204e1[_0x10b3d7(0xea)]=async(_0x10ce3e,_0x3fc525='',_0x5686db='',_0x2b660e,_0x5805a6=[],_0x7b5863={})=>{const _0x123e06=_0x10b3d7;let _0x47a5d9=await prepareWAMessageMedia({'image':_0x2b660e},{'upload':_0xa204e1[_0x123e06(0xe8)]});var _0x58f3aa=generateWAMessageFromContent(m[_0x123e06(0x152)],proto[_0x123e06(0x11a)][_0x123e06(0x15d)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x47a5d9['imageMessage'],'hydratedContentText':_0x3fc525,'hydratedFooterText':_0x5686db,'hydratedButtons':_0x5805a6}}}),_0x7b5863);_0xa204e1[_0x123e06(0x146)](_0x10ce3e,_0x58f3aa[_0x123e06(0xdc)],{'messageId':_0x58f3aa['key']['id']});},_0xa204e1[_0x10b3d7(0xe9)]=(_0x204966,_0x56a57d=[],_0x3be252,_0x59c7d6,_0x4db0d3='',_0x1d4e70={})=>{let _0x64e933={'text':_0x3be252,'footer':_0x59c7d6,'buttons':_0x56a57d,'headerType':0x2,..._0x1d4e70};_0xa204e1['sendMessage'](_0x204966,_0x64e933,{'quoted':_0x4db0d3,..._0x1d4e70});},_0xa204e1['sendText']=(_0x3bc20d,_0x3afa26,_0x4a742b='',_0x9acb03)=>_0xa204e1[_0x10b3d7(0x131)](_0x3bc20d,{'text':_0x3afa26,..._0x9acb03},{'quoted':_0x4a742b}),_0xa204e1[_0x10b3d7(0x102)]=async(_0x21d3f6,_0x492ca3,_0x4acc24='',_0x442b1c='',_0x20c8ae)=>{const _0x54f2ea=_0x10b3d7;let _0x2ead6d=Buffer['isBuffer'](_0x492ca3)?_0x492ca3:/^data:.*?\/.*?;base64,/i[_0x54f2ea(0xe1)](_0x492ca3)?Buffer[_0x54f2ea(0x13c)](_0x492ca3['split']`,`[0x1],'base64'):/^https?:\/\//[_0x54f2ea(0xe1)](_0x492ca3)?await await getBuffer(_0x492ca3):fs['existsSync'](_0x492ca3)?fs[_0x54f2ea(0x179)](_0x492ca3):Buffer['alloc'](0x0);return await _0xa204e1['sendMessage'](_0x21d3f6,{'image':_0x2ead6d,'caption':_0x4acc24,..._0x20c8ae},{'quoted':_0x442b1c});},_0xa204e1['sendVideo']=async(_0x5a9447,_0x2fccac,_0xc430cf='',_0x3ae78f='',_0x4c21c8=![],_0x38d2cd)=>{const _0x3c74d5=_0x10b3d7;let _0x2e9490=Buffer[_0x3c74d5(0x103)](_0x2fccac)?_0x2fccac:/^data:.*?\/.*?;base64,/i[_0x3c74d5(0xe1)](_0x2fccac)?Buffer[_0x3c74d5(0x13c)](_0x2fccac[_0x3c74d5(0xe0)]`,`[0x1],_0x3c74d5(0x185)):/^https?:\/\//[_0x3c74d5(0xe1)](_0x2fccac)?await await getBuffer(_0x2fccac):fs[_0x3c74d5(0x10a)](_0x2fccac)?fs[_0x3c74d5(0x179)](_0x2fccac):Buffer[_0x3c74d5(0x187)](0x0);return await _0xa204e1[_0x3c74d5(0x131)](_0x5a9447,{'video':_0x2e9490,'caption':_0xc430cf,'gifPlayback':_0x4c21c8,..._0x38d2cd},{'quoted':_0x3ae78f});},_0xa204e1[_0x10b3d7(0x147)]=async(_0x382c47,_0x56fdcd,_0x4b724e='',_0x4c9b09=![],_0x3f9fcf)=>{const _0x14f79b=_0x10b3d7;let _0x58760d=Buffer[_0x14f79b(0x103)](_0x56fdcd)?_0x56fdcd:/^data:.*?\/.*?;base64,/i['test'](_0x56fdcd)?Buffer[_0x14f79b(0x13c)](_0x56fdcd[_0x14f79b(0xe0)]`,`[0x1],_0x14f79b(0x185)):/^https?:\/\//[_0x14f79b(0xe1)](_0x56fdcd)?await await getBuffer(_0x56fdcd):fs[_0x14f79b(0x10a)](_0x56fdcd)?fs[_0x14f79b(0x179)](_0x56fdcd):Buffer[_0x14f79b(0x187)](0x0);return await _0xa204e1[_0x14f79b(0x131)](_0x382c47,{'audio':_0x58760d,'ptt':_0x4c9b09,..._0x3f9fcf},{'quoted':_0x4b724e});},_0xa204e1['sendTextWithMentions']=async(_0x57780a,_0x35f470,_0x53129e,_0x2c3c76={})=>_0xa204e1[_0x10b3d7(0x131)](_0x57780a,{'text':_0x35f470,'contextInfo':{'mentionedJid':[..._0x35f470[_0x10b3d7(0xe2)](/@(\d{0,16})/g)][_0x10b3d7(0x11f)](_0x3a0a63=>_0x3a0a63[0x1]+_0x10b3d7(0x171))},..._0x2c3c76},{'quoted':_0x53129e}),_0xa204e1[_0x10b3d7(0x11b)]=async(_0x320381,_0x1114ae,_0x39b66b,_0x4c3d24={})=>{const _0x2290fd=_0x10b3d7;let _0x3f33ca=Buffer[_0x2290fd(0x103)](_0x1114ae)?_0x1114ae:/^data:.*?\/.*?;base64,/i[_0x2290fd(0xe1)](_0x1114ae)?Buffer[_0x2290fd(0x13c)](_0x1114ae[_0x2290fd(0xe0)]`,`[0x1],'base64'):/^https?:\/\//[_0x2290fd(0xe1)](_0x1114ae)?await await getBuffer(_0x1114ae):fs[_0x2290fd(0x10a)](_0x1114ae)?fs[_0x2290fd(0x179)](_0x1114ae):Buffer['alloc'](0x0),_0x2d66be;return _0x4c3d24&&(_0x4c3d24[_0x2290fd(0x18a)]||_0x4c3d24[_0x2290fd(0x15b)])?_0x2d66be=await writeExifImg(_0x3f33ca,_0x4c3d24):_0x2d66be=await imageToWebp(_0x3f33ca),await _0xa204e1[_0x2290fd(0x131)](_0x320381,{'sticker':{'url':_0x2d66be},..._0x4c3d24},{'quoted':_0x39b66b}),_0x2d66be;},_0xa204e1[_0x10b3d7(0x105)]=async(_0x1c24ed,_0x512819,_0x5db961,_0xa8cda6={})=>{const _0x44fed2=_0x10b3d7;let _0x389a72=Buffer['isBuffer'](_0x512819)?_0x512819:/^data:.*?\/.*?;base64,/i['test'](_0x512819)?Buffer['from'](_0x512819[_0x44fed2(0xe0)]`,`[0x1],'base64'):/^https?:\/\//['test'](_0x512819)?await await getBuffer(_0x512819):fs[_0x44fed2(0x10a)](_0x512819)?fs['readFileSync'](_0x512819):Buffer[_0x44fed2(0x187)](0x0),_0x538d4b;return _0xa8cda6&&(_0xa8cda6[_0x44fed2(0x18a)]||_0xa8cda6[_0x44fed2(0x15b)])?_0x538d4b=await writeExifVid(_0x389a72,_0xa8cda6):_0x538d4b=await videoToWebp(_0x389a72),await _0xa204e1[_0x44fed2(0x131)](_0x1c24ed,{'sticker':{'url':_0x538d4b},..._0xa8cda6},{'quoted':_0x5db961}),_0x538d4b;},_0xa204e1[_0x10b3d7(0x16f)]=async(_0x21b179,_0x3ec6f6,_0x171e06=!![])=>{const _0x4fe0cd=_0x10b3d7;let _0xe3b6a7=_0x21b179[_0x4fe0cd(0x124)]?_0x21b179['msg']:_0x21b179,_0x5c4078=(_0x21b179[_0x4fe0cd(0x124)]||_0x21b179)[_0x4fe0cd(0x143)]||'',_0x403fe7=_0x21b179[_0x4fe0cd(0x101)]?_0x21b179[_0x4fe0cd(0x101)]['replace'](/Message/gi,''):_0x5c4078[_0x4fe0cd(0xe0)]('/')[0x0];const _0x4802f3=await downloadContentFromMessage(_0xe3b6a7,_0x403fe7);let _0x32ce6d=Buffer['from']([]);for await(const _0x3ee371 of _0x4802f3){_0x32ce6d=Buffer[_0x4fe0cd(0x145)]([_0x32ce6d,_0x3ee371]);}let _0x3c3f65=await FileType['fromBuffer'](_0x32ce6d);return trueFileName=_0x171e06?_0x3ec6f6+'.'+_0x3c3f65['ext']:_0x3ec6f6,await fs[_0x4fe0cd(0x110)](trueFileName,_0x32ce6d),trueFileName;},_0xa204e1[_0x10b3d7(0x14c)]=async _0x3c8fac=>{const _0x10554c=_0x10b3d7;let _0x22ed2a=(_0x3c8fac['msg']||_0x3c8fac)['mimetype']||'',_0x555ee8=_0x3c8fac[_0x10554c(0x101)]?_0x3c8fac[_0x10554c(0x101)][_0x10554c(0x151)](/Message/gi,''):_0x22ed2a[_0x10554c(0xe0)]('/')[0x0];const _0x10be8a=await downloadContentFromMessage(_0x3c8fac,_0x555ee8);let _0x2d7363=Buffer[_0x10554c(0x13c)]([]);for await(const _0x4faa5c of _0x10be8a){_0x2d7363=Buffer[_0x10554c(0x145)]([_0x2d7363,_0x4faa5c]);}return _0x2d7363;},_0xa204e1[_0x10b3d7(0x186)]=async(_0x22e8c3,_0x15b71b,_0x3ad7d7='',_0xf8d057='',_0x2426e7='',_0x2c9d21={})=>{const _0x4cc710=_0x10b3d7;let _0x4b187e=await _0xa204e1[_0x4cc710(0x133)](_0x15b71b,!![]),{mime:_0x5521be,ext:_0x423dbe,res:_0x5e3047,data:_0x5f3257,filename:_0x161634}=_0x4b187e;if(_0x5e3047&&_0x5e3047[_0x4cc710(0xfc)]!==0xc8||file['length']<=0x10000)try{throw{'json':JSON[_0x4cc710(0x164)](file[_0x4cc710(0x170)]())};}catch(_0x3b4834){if(_0x3b4834[_0x4cc710(0x125)])throw _0x3b4834[_0x4cc710(0x125)];}let _0x38c053='',_0x5529f0=_0x5521be,_0xcccf83=_0x161634;if(_0x2c9d21[_0x4cc710(0x162)])_0x38c053='document';if(_0x2c9d21['asSticker']||/webp/[_0x4cc710(0xe1)](_0x5521be)){let {writeExif:_0x3c342b}=require(_0x4cc710(0x178)),_0x1498b3={'mimetype':_0x5521be,'data':_0x5f3257};_0xcccf83=await _0x3c342b(_0x1498b3,{'packname':_0x2c9d21[_0x4cc710(0x18a)]?_0x2c9d21[_0x4cc710(0x18a)]:global[_0x4cc710(0x18a)],'author':_0x2c9d21[_0x4cc710(0x15b)]?_0x2c9d21[_0x4cc710(0x15b)]:global[_0x4cc710(0x15b)],'categories':_0x2c9d21['categories']?_0x2c9d21['categories']:[]}),await fs[_0x4cc710(0x127)][_0x4cc710(0x161)](_0x161634),_0x38c053=_0x4cc710(0x17b),_0x5529f0=_0x4cc710(0x12f);}else{if(/image/[_0x4cc710(0xe1)](_0x5521be))_0x38c053=_0x4cc710(0x12a);else{if(/video/['test'](_0x5521be))_0x38c053='video';else{if(/audio/[_0x4cc710(0xe1)](_0x5521be))_0x38c053=_0x4cc710(0x111);else _0x38c053='document';}}}return await _0xa204e1[_0x4cc710(0x131)](_0x22e8c3,{[_0x38c053]:{'url':_0xcccf83},'caption':_0xf8d057,'mimetype':_0x5529f0,'fileName':_0x3ad7d7,..._0x2c9d21},{'quoted':_0x2426e7,..._0x2c9d21}),fs[_0x4cc710(0x127)][_0x4cc710(0x161)](_0xcccf83);},_0xa204e1[_0x10b3d7(0xe7)]=async(_0x8894f3,_0x16a6b8,_0x309a57=![],_0x166778={})=>{const _0x520859=_0x10b3d7;let _0x1c8f51;_0x166778[_0x520859(0x112)]&&(_0x16a6b8[_0x520859(0xdc)]=_0x16a6b8[_0x520859(0xdc)]&&_0x16a6b8[_0x520859(0xdc)][_0x520859(0x137)]&&_0x16a6b8['message'][_0x520859(0x137)]['message']?_0x16a6b8[_0x520859(0xdc)][_0x520859(0x137)][_0x520859(0xdc)]:_0x16a6b8['message']||undefined,_0x1c8f51=Object[_0x520859(0x17c)](_0x16a6b8[_0x520859(0xdc)][_0x520859(0x180)][_0x520859(0xdc)])[0x0],delete(_0x16a6b8[_0x520859(0xdc)]&&_0x16a6b8[_0x520859(0xdc)][_0x520859(0xe3)]?_0x16a6b8[_0x520859(0xdc)][_0x520859(0xe3)]:_0x16a6b8[_0x520859(0xdc)]||undefined),delete _0x16a6b8['message'][_0x520859(0x180)][_0x520859(0xdc)][_0x1c8f51]['viewOnce'],_0x16a6b8['message']={..._0x16a6b8[_0x520859(0xdc)][_0x520859(0x180)][_0x520859(0xdc)]});let _0x38b2f7=Object['keys'](_0x16a6b8[_0x520859(0xdc)])[0x0],_0x2e158d=await generateForwardMessageContent(_0x16a6b8,_0x309a57),_0x1f1d84=Object[_0x520859(0x17c)](_0x2e158d)[0x0],_0x2842de={};if(_0x38b2f7!='conversation')_0x2842de=_0x16a6b8[_0x520859(0xdc)][_0x38b2f7][_0x520859(0x13d)];_0x2e158d[_0x1f1d84]['contextInfo']={..._0x2842de,..._0x2e158d[_0x1f1d84][_0x520859(0x13d)]};const _0x4a53c=await generateWAMessageFromContent(_0x8894f3,_0x2e158d,_0x166778?{..._0x2e158d[_0x1f1d84],..._0x166778,..._0x166778[_0x520859(0x13d)]?{'contextInfo':{..._0x2e158d[_0x1f1d84][_0x520859(0x13d)],..._0x166778[_0x520859(0x13d)]}}:{}}:{});return await _0xa204e1[_0x520859(0x146)](_0x8894f3,_0x4a53c[_0x520859(0xdc)],{'messageId':_0x4a53c[_0x520859(0x169)]['id']}),_0x4a53c;},_0xa204e1[_0x10b3d7(0x15e)]=(_0x593126,_0x54ee50,_0x32ba52='',_0x593aa4=_0xa204e1[_0x10b3d7(0x182)]['id'],_0x200b2c={})=>{const _0x48ba8d=_0x10b3d7;let _0x3a43c5=Object[_0x48ba8d(0x17c)](_0x54ee50[_0x48ba8d(0xdc)])[0x0],_0x365b19=_0x3a43c5===_0x48ba8d(0x137);_0x365b19&&(_0x3a43c5=Object[_0x48ba8d(0x17c)](_0x54ee50[_0x48ba8d(0xdc)][_0x48ba8d(0x137)][_0x48ba8d(0xdc)])[0x0]);let _0x52e810=_0x365b19?_0x54ee50[_0x48ba8d(0xdc)]['ephemeralMessage'][_0x48ba8d(0xdc)]:_0x54ee50[_0x48ba8d(0xdc)],_0x13bb21=_0x52e810[_0x3a43c5];if(typeof _0x13bb21==='string')_0x52e810[_0x3a43c5]=_0x32ba52||_0x13bb21;else{if(_0x13bb21[_0x48ba8d(0x15c)])_0x13bb21[_0x48ba8d(0x15c)]=_0x32ba52||_0x13bb21['caption'];else{if(_0x13bb21[_0x48ba8d(0x116)])_0x13bb21[_0x48ba8d(0x116)]=_0x32ba52||_0x13bb21[_0x48ba8d(0x116)];}}if(typeof _0x13bb21!==_0x48ba8d(0x175))_0x52e810[_0x3a43c5]={..._0x13bb21,..._0x200b2c};if(_0x54ee50['key']['participant'])_0x593aa4=_0x54ee50['key'][_0x48ba8d(0xde)]=_0x593aa4||_0x54ee50[_0x48ba8d(0x169)][_0x48ba8d(0xde)];else{if(_0x54ee50[_0x48ba8d(0x169)][_0x48ba8d(0xde)])_0x593aa4=_0x54ee50[_0x48ba8d(0x169)][_0x48ba8d(0xde)]=_0x593aa4||_0x54ee50[_0x48ba8d(0x169)][_0x48ba8d(0xde)];}if(_0x54ee50['key']['remoteJid'][_0x48ba8d(0x100)](_0x48ba8d(0x171)))_0x593aa4=_0x593aa4||_0x54ee50['key'][_0x48ba8d(0x184)];else{if(_0x54ee50[_0x48ba8d(0x169)][_0x48ba8d(0x184)][_0x48ba8d(0x100)](_0x48ba8d(0xf7)))_0x593aa4=_0x593aa4||_0x54ee50[_0x48ba8d(0x169)]['remoteJid'];}return _0x54ee50[_0x48ba8d(0x169)][_0x48ba8d(0x184)]=_0x593126,_0x54ee50['key'][_0x48ba8d(0x15a)]=_0x593aa4===_0xa204e1[_0x48ba8d(0x182)]['id'],proto[_0x48ba8d(0x113)]['fromObject'](_0x54ee50);},_0xa204e1[_0x10b3d7(0x133)]=async(_0x4a8b6a,_0x3c56e3)=>{const _0x3e317f=_0x10b3d7;let _0x29bbe7,_0x9e1472=Buffer[_0x3e317f(0x103)](_0x4a8b6a)?_0x4a8b6a:/^data:.*?\/.*?;base64,/i['test'](_0x4a8b6a)?Buffer[_0x3e317f(0x13c)](_0x4a8b6a[_0x3e317f(0xe0)]`,`[0x1],_0x3e317f(0x185)):/^https?:\/\//[_0x3e317f(0xe1)](_0x4a8b6a)?await(_0x29bbe7=await getBuffer(_0x4a8b6a)):fs[_0x3e317f(0x10a)](_0x4a8b6a)?(filename=_0x4a8b6a,fs[_0x3e317f(0x179)](_0x4a8b6a)):typeof _0x4a8b6a===_0x3e317f(0x175)?_0x4a8b6a:Buffer[_0x3e317f(0x187)](0x0),_0x186dc9=await FileType[_0x3e317f(0x157)](_0x9e1472)||{'mime':_0x3e317f(0xfb),'ext':'.bin'};filename=path[_0x3e317f(0x148)](__filename,_0x3e317f(0x104)+new Date()*0x1+'.'+_0x186dc9[_0x3e317f(0xdf)]);if(_0x9e1472&&_0x3c56e3)fs[_0x3e317f(0x127)]['writeFile'](filename,_0x9e1472);return{'res':_0x29bbe7,'filename':filename,'size':await getSizeMedia(_0x9e1472),..._0x186dc9,'data':_0x9e1472};},_0xa204e1;}startalfa();function _0x5329(){const _0xcab2ea=['sendContactt','message','4093952ZjfSwJ','participant','ext','split','test','matchAll','ignore','name','utf-8','\x0a\x0a\x09\x20\x20\x20\x20\x09item1.X-ABLabel:WhatsApp\x0a\x0a\x09\x20\x20\x20\x20\x09item2.EMAIL;type=INTERNET:Albinthomas3.nky@gmail.com\x0a\x0a\x09\x20\x20\x20\x20\x09item2.X-ABLabel:Email\x0a\x0a\x09\x20\x20\x20\x20\x09item3.URL:https://www.instagram.com/_the_soul_rider_/\x0a\x0a\x09\x20\x20\x20\x20\x09item3.X-ABLabel:Instagram\x0a\x0a\x09\x20\x20\x20\x20\x09item4.URL:https://github.com/Alien-alfa/\x0a\x0a\x09\x20\x20\x20\x20\x09item4.X-ABLabel:GitHub\x0a\x0a\x09\x20\x20\x20\x20\x09END:VCARD','copyNForward','waUploadToServer','sendButtonText','send5ButImg','store','src/database.json','\x0a\x0a\x09\x20\x20\x20\x20\x09item1.TEL;waid=','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','close','\x0a\x0a\x09\x20\x20\x20\x20\x09FN:','silent','./config','connectionReplaced','setStatus','\x20Leaving\x20To\x20','CB:call','@broadcast','set','type','opts','application/octet-stream','status','verifiedName','data','320214mxgFzy','includes','mtype','sendImage','isBuffer','../src/','sendVideoAsSticker','serializeM','restartRequired','1088fwlSDS','updateBlockStatus','existsSync','pino','.json','1.0.0','push','./lib/myfunc','writeFileSync','audio','readViewOnce','WebMessageInfo','BEGIN:VCARD\x0aVERSION:3.0\x0a\x0a\x09\x20\x20\x20\x20\x09N:','APIs','text','groupMetadata','attrs','0@s.whatsapp.net','Message','sendImageAsSticker','participants','remove','./alfa','map','watchFile','statusCode','slice','endsWith','msg','json','tag','promises','query','contacts','image','5237930UyGvJw','11fmKPEa','2497920OFjEVv','Connection\x20TimedOut,\x20Reconnecting...','image/webp','2370DWKNKM','sendMessage','content','getFile','child','server','profilePictureUrl','ephemeralMessage','redBright','decodeJid','path','error','from','contextInfo','Update\x20','1wQoyPQ','owner','subject','Connected...','mimetype','getNumber','concat','relayMessage','sendAudio','join','contacts.update','end','./lib/mongoDB','downloadMediaMessage','logout','output','sendContact','./lib/lowdb','replace','chat','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','ᴀʟɪᴇɴ\x20ᴀʟꜰᴀ','yargs/yargs','3131433hIjvkU','fromBuffer','ＡＬＩＥＮ\x20ＡＬＦＡ','offer','fromMe','author','caption','fromObject','cMod','85SHiBac','argv','unlink','asDocument','startsWith','parse','bind','Welcome\x20To\x20','call-creator','block','key','action','public','You\x20are\x20automatically\x20Blocked!Don\x27t\x20call\x20bot!Please\x20contact\x20the\x20owner\x20to\x20open\x20it!','WhatsApp','APIKeys','downloadAndSaveMediaMessage','toString','@s.whatsapp.net','exitProcess','\x0a\x09\x20\x20\x20\x20\x09BEGIN:VCARD\x0a\x0a\x09\x20\x20\x20\x20\x09VERSION:3.0\x0a\x0a\x09\x20\x20\x20\x20\x09N:','7aDkitP','string','badSession','log','./lib/exif','readFileSync','getName','sticker','keys','864134lAOnQQ','cache','loggedOut','viewOnceMessage','group-participants.update','user','notify','remoteJid','base64','sendMedia','alloc','Restart\x20Required,\x20Restarting...','messages.upsert','packname','add','resolve','https://telegra.ph/file/e3e12aa94bbf4d1ec8e61.png'];_0x5329=function(){return _0xcab2ea;};return _0x5329();}let file=require[_0x6e284e(0x18c)](__filename);fs[_0x6e284e(0x120)](file,()=>{const _0x384bc3=_0x6e284e;fs['unwatchFile'](file),console[_0x384bc3(0x177)](chalk[_0x384bc3(0x138)](_0x384bc3(0x13e)+__filename)),delete require[_0x384bc3(0x17e)][file],require(file);});
