// Modules
let tinycolor = require('tinycolor2')
require('chibijs')

// Functions
let getRand = function(range) {
	return Math.ceil(Math.random() * range)
}
let makePalettes = function() {
	let palettes = []
	let names = ["ahead-border", "unpopular-drawing", "flippant-finger", "ethereal-water", "irritating-rainbow", "crushing-flight", "overdue-unicorn", "wistful-dragon", "mundane-mountain", "wacky-session", "defiant-wind", "showy-pain", "impish-convert", "mealy-habit", "physical-caress", "infamous-guess", "ossified-month", "queasy-chemical", "unwieldy-accident", "grubby-split", "malicious-lake", "violent-excuse", "reluctant-blame", "careful-hour", "faulty-action", "watery-excuse", "reckless-stable", "perky-statement", "skillful-simple", "possible-standard", "earthy-shower", "oily-argument", "far-spiritual", "dim-breath", "godly-chair", "fretful-progress", "insidious-bath", "caustic-medium", "impossible-flow", "ultimate-mixture", "stupendous-night", "disfigured-raw", "stale-wolf", "popular-revenue", "bustling-pie", "brainy-disk", "starry-winner", "placid-lady", "deeply-cry", "junior-bug"]
	names.forEach((name) => {
		let result = {name: name, colors:{lg:[], md:[], sm:[]}}
		let primary = tinycolor.random()
		result.colors.lg.push(primary.toHexString())
		result.colors.lg.push(primary.complement().saturate(getRand(100)).toHexString())
		result.colors.md = primary.splitcomplement().map(t => { return t.toHexString()})
		let random = 
		result.colors.sm = primary.analogous().map(t => { return t.spin(getRand(360)).toHexString()})
		result.background = primary.isDark() ? "#ffffff" : "#000000"
		palettes.push(result)
	})
	return palettes
}
let makeRow = function(numItems, sqrSize, colors) {
	let row = `<div class="row row-${sqrSize}">`
	for (let i=0;i<numItems;i++) {
		row += `<div class="sqr" style="background-color:${colors[i]}">&nbsp;</div>`
	}
	row += "</div>"
	return row
}

// Doc Ready
$().ready(function() {
	// Append all palettes to container
	let PALETTES = makePalettes()
	for (let i=0;i<PALETTES.length;i++) {
		let name = PALETTES[i].name
		let textcolor = tinycolor(PALETTES[i].background).isDark() ? "#FFFFFF" : "#000000"
		$(".container").htmlAppend(`<div class="palette ${name}"  style="background-color:${PALETTES[i].background};color:${textcolor}"><h2>${name}</h2></div>`)
		let $palette = $(`.${name}`)
		$palette.htmlAppend(makeRow(2,'lg', PALETTES[i].colors.lg))
		$palette.htmlAppend(makeRow(3,'md', PALETTES[i].colors.md))
		$palette.htmlAppend(makeRow(5,'sm', PALETTES[i].colors.sm))
	}
})
