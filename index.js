// Modules
let tinycolor = require('tinycolor2')
require('chibijs')

// Functions
let getRand = function(range) {
	return Math.ceil(Math.random() * range)
}

// Doc Ready
$().ready(function() {
	palettes.forEach((palette, i) => {
		let name = palette.name
		let textcolor = tinycolor(palette.colors[0]).isLight() ? "#FFFFFF" : "#000000"
		let background = tinycolor(textcolor).isDark() ? "#FFFFFF" : "#000000"
		// original colors
		let col1 = palette.colors[0]
		let col2 = palette.colors[1]
		let col3 = palette.colors[2]
		// second version of color 3
		let col4 = tinycolor(col3).tetrad()[1].toHexString()
		// three versions of 180 from color 3
		let col5 = tinycolor(col3).spin(180).toHexString()
		let col6 = tinycolor(col5).analogous()[1].toHexString()
		let col7 = tinycolor(col5).analogous()[5].toHexString()
		$(".container").htmlAppend(`<div class="palette ${name}"  style="background-color:${background}; color:${textcolor}">
			<h2>${name}</h2>
			<div class="content"></div>
		</div>`)
		let $palette = $(`.${name} .content`)
		$palette.htmlAppend(`
		<div class="col">
			<div class="sqr lg" style="background-color:${col1}">&nbsp;</div>
			<div class="sqr lg" style="background-color:${col2}">&nbsp;</div>
		</div>`)
		$palette.htmlAppend(`
		<div class="col">
			<div class="sqr pillar" style="background-image:linear-gradient(to right,${col1},${col2})">&nbsp;</div>
		</div>`)
		$palette.htmlAppend(`
		<div class="col">
			<div class="sqr pillar" style="background-image:linear-gradient(to right,${col3},${col4})">&nbsp;</div>
		</div>`)
		$palette.htmlAppend(`
		<div class="col">
			<div class="row">
				<div class="sqr md" style="background-color:${col3}">&nbsp;</div>
				<div class="sqr md" style="background-color:${col4}">&nbsp;</div>
			</div>
			<div class="row">
				<div class="sqr sm" style="background-color:${col5}">&nbsp;</div>
				<div class="sqr sm" style="background-color:${col6}">&nbsp;</div>
				<div class="sqr sm" style="background-color:${col7}">&nbsp;</div>
			</div>
		</div>`)
		$(`.${name}`).htmlAppend(`<div class="sqr line" style="background-image:linear-gradient(to right, ${col1},${col2},${col3},${col4},${col5},${col6},${col7})"></div>`)
	})
})

let palettes = [{name:"dionysus-encounter", colors:["#7e1111", "#134370", "#264704"]}, {name: "unpopular-drawing", colors:["#6a8a82", "#a37c27", "#a7414a"]}, {name: "flippant-finger", colors:["#0444bf", "#0aaff1", "#edf259"]}, {name: "ethereal-water", colors:["#f3cd05", "#36688d", "#bda589"]}, {name: "irritating-rainbow", colors:["#f05837", "#f3e96b", "#6465a5"]}, {name: "crushing-flight", colors:["#aba6bf", "#595775", "#583e3e"]}, {name: "overdue-unicorn", colors:["#192e5b", "#00743f", "#f2a104"]}, {name: "wistful-dragon", colors:["#132226", "#be9063", "#525b56"]}, {name: "mundane-mountain", colors:["#a4a4bf", "#2a3457", "#888c46"]}, {name: "strange-accident", colors:["#de8cf0", "#bed905", "#93a806"]}, {name: "defiant-wind", colors:["#a3586d", "#f3b05a", "#f46a4e"]}, {name: "showy-pain", colors:["#80add7", "#d4dca9", "#bf9d7a"]}, {name: "impish-convert", colors:["#d661bf", "#f1931b", "#8f715b"]}, {name: "physical-caress", colors:["#270101", "#720017", "#d9ac2a"]}, {name: "infamous-guess", colors:["#c1403d", "#a79c93", "#0294a5"]}, {name: "malicious-lake", colors:["#212027", "#f22f08", "#8d2f23"]}, {name: "violent-excuse", colors:["#6c6b74", "#9199be", "#2e303e"]}, {name: "careful-hour", colors:["#522e75", "#52591f", "#714e3d"]}, {name: "simple-somber", colors:["#f8ed71", "#383140", "#cac7d7"]}, {name: "dim-breath", colors:["#776b04", "#704404", "#423a01"]}, {name: "godly-chair", colors:["#0878a4", "#edd170", "#c05640"]}, {name: "fretful-progress", colors:["#5c3d46", "#5c868d", "#e7f5de"]}, {name: "insidious-night", colors:["#121f40", "#bd3e85", "#d59b2d"]}, {name: "hungry-wolf", colors:["#8d2d56", "#2b193e", "#d53c3c"]}, {name: "placid-lady", colors:["#d50b53", "#824ca7", "#b9c406"]}
]