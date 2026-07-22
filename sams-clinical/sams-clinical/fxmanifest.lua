fx_version 'cerulean'
game 'gta5'
lua54 'yes'

name 'sams-clinical'
author 'SAMS Command'
description 'SAMS Clinical Reference — protocols, formulary, decision trees and admin editor (LB Tablet app)'
version '2.0.0'

shared_script '@ox_lib/init.lua'
client_scripts {
    'client.lua',
    'target.lua'
}
server_script 'server.lua'

files {
    'ui/**'
}

ui_page 'ui/index.html'
