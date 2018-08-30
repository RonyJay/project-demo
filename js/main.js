//将代码写进#code和styleTag里面
function writeCode(code,fn) {
	let domCode = document.querySelector('#code')
	let n = 0
	let id = setInterval(() => {
		n += 1
		domCode.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css)
		styleTag.innerHTML = code.substring(0, n)
		if (n >= result.length) {
			window.clearInterval(id)
			fn.call()
		}
	}, 10)

}


var result = `
*{
	transition:all 1s;
}
/* 变 个 背 景 吧*/
html{
	background:rgb(222,222,222);
	font-size:16px;
}
/* 来 个 边 框 */
#code{
	border:1px solid red;
	padding:16px;
}

/* 我 需 要 一 点 代 码 高 亮 */
 
.token.selector{
	color: #690;
}
.token.punctuation{
	color: #999;
}

.token.property{
	color: #905;
}
.token.function{
	color: #DD4A68;
}

/* 加 点 3D 效 果 */
#code{
	transform:rotate(360deg)
}

/* 不 玩 了, 介 绍 开 始  */
/* 我 需 要 一 张 白 纸  */
`

writeCode(result, () => {
	console.log('xxx')
	createPaper()
}
)

function createPaper() {
	var paper = document.createElement('div')
	paper.id = 'paper'
	document.body.appendChild(paper)
}

function fn3() {
	var result1 = `
#paper{
	width:100px;
	height:100px;
	background:red;
}`
	var n = 0
	var id = setInterval(() => {
		n = n + 1
		code.innerHTML = result + result1.substring(0, n)
		code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
		styleTag.innerHTML = result + result1.substring(0, n)
		if (n >= result1.length) {
			window.clearInterval(id)
		}
	}, 30)
}
