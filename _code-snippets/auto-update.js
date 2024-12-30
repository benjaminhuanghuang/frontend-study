/*
https://www.bilibili.com/video/BV1hzzwYaECQ

import './auto-update.js'; in the main.js file
*/

// previous script address
let lastScripts;

// match <script> tags in HTML that include a src attribute, capturing the value of the src attribute.
// global and multiline flags
const scriptRegex = /\<script.*src=["'](?<src>[^"']+)/gm;

async function extractNewScripts() {
    const html = await fetch('/?_timestamp='+ Date.now()).then(res => res.text());
    scriptRegex.lastIndex = 0;
    let result = [];
    while (match = scriptRegex.exec(html)) {
        result.push(match.groups.src);
    }

    return result;
}  


async function needUpdate() {
    const newScripts = await extractNewScripts();
    if(!lastScripts) {
        lastScripts = newScripts;
        return false;
    }

    let result = false;
    if(newScripts.length !== lastScripts.length) {
        result = true;
    } else {
        for(let i = 0; i < newScripts.length; i++) {
            if(newScripts[i] !== lastScripts[i]) {
                result = true;
                break;
            }
        }
    }

    lastScripts = newScripts;
    return result;
}


const DURATION = 2000;
function autoRefresh() {
    setTimeout(async () => {
        const willUpdate = await needUpdate();
        if(willUpdate) {
            const result = confirm('The page has been updated, do you want to refresh?');
            if(result) {
                location.reload();
            }
        } 
        autoRefresh();
    }, DURATION);
}

autoRefresh();