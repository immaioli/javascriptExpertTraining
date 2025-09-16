**Regex site:** regex101.com

**Instructions to use regex search in editors:**
Use Ctrl+F to open search, then check the option "Use Regular Expression" (ALT+R) to enable regex mode.

**CPF Format example regex pattern:**
Matches Brazilian CPF format: three digits, dot, three digits, dot, three digits, dash, two digits

**Example valid CPFs:**
`123.123.123-14`
`321.321.321-20`
`200.300.500-19`

**Remove special characters from strings:**
Use regex replace to remove dots and dashes: replace `[.-]` with empty string

---------------------

**Converting text to JSON format:**

**Find pattern:** `(\w+),\s(\w+)$`
**Replace with:** `{firstName: "$2", lastName: "$1"}`

**Example input:**
`Pato, Huguinho`
`Pato, Zezinho`
`Pato, Luisinho`

**Resulting JSON objects:**
`{firstName: "Huguinho", lastName: "Pato"}`
`{firstName: "Zezinho", lastName: "Pato"}`
`{firstName: "Luisinho", lastName: "Pato"}`

---------------------

**Convert markdown links to HTML anchor tags:**

**Find pattern:** `\[(.*?)\]\(([http|https].*?)\)`
**Replace with:** `<a href="$2">$1</a>`

**Example before:**
`The [Huguinho Pato](https://huguinhopato.com) gives lectures and you should`
`follow him on [Twitter](http://twitter.com/huguinhopato) or even on`
`[Instagram](https://instagram.com/huguinhopato)`
`Ah and you can search on [Google](https://google.com)`
`[Yahoo](https://yahoo.com)`
`come on!`

**Example after:**
`The <a href="https://huguinhopato.com">Huguinho Pato</a> gives lectures and you should`
`follow him on <a href="http://twitter.com/huguinhopato">Twitter</a> or even on`
`<a href="https://instagram.com/huguinhopato">Instagram</a>`
`Ah and you can search on <a href="https://google.com">Google</a>`
`<a href="https://yahoo.com">Yahoo</a>`
`come on!`
