"use script"

module.exports = (text, a, b) => text.replace(new RegExp(`(${a}|${b})`, "g"), ($1) => $1 === a ? b : a)
