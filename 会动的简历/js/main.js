//将代码写进#code和styleTag里面
function writeCss(prefix, code, fn) {
	let domCode = document.querySelector('#code')
	let n = 0
	let id = setInterval(() => {
		n += 1
		domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
		styleTag.innerHTML = prefix + code.substring(0, n)
		//能拉的最大高度
		domCode.scrollTop=domCode.scrollHeight
		if(n >= code.length) {
			window.clearInterval(id)
			fn.call()
		}
	}, 50)

}

function writeMarkDown(markdown,fn){
	let domPaper = document.querySelector('#paper>.content')
	let n=0
	let id = setInterval(() => {
		n += 1
		domPaper.innerHTML = markdown.substring(0, n)
		domPaper.scrollTop=domPaper.scrollHeight		//能拉的最大高度
		if(n >= markdown.length) {
			window.clearInterval(id)
			fn.call()
		}
	}, 80)
	
}

var css1 = `

/*
 * 你好
 * 只用文字做自我介绍太简单
 * 我就用代码做一个介绍吧
 * 首先,准备一些样式
 */
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

/* 加 一 个 呼 吸 效 果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 加 点 3D 效 果 */
#code{
	transform:rotate(360deg)
}

/* 不 玩 了, 介 绍 开 始  */
/* 首 先，准 备 一 个 白 板 */

#code{
	position:fixed;
	left:0;
	width:50%;
	height:100%;
}
#paper{
	position:fixed;
	right:0;
	width:45%;
	height:100%;
	background:grey;
	padding:16px;
	display:flex;
	justify-content:center;
	align-items:center;
}
#paper > .content{
	background:white;
	height:100%;
	width:100%;
}

/* 请 看 右 边 */

`

var css2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`

var md =`
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
var css3 = `
/* 这就是我的自我介绍
 * 谢谢观看
 */
`
writeCss('', css1, () => {
	createPaper(() => {
		writeMarkDown(md,()=>{
			writeCss(css1,css2,()=>{
				convertMarkdownToHtml(()=>{
					writeCss(css1+css2,css3,()=>{
						console.log('finished')
					})
					
				})
			})
		})
	})
})

function createPaper(fn) {
	var paper = document.createElement('div')
	paper.id = 'paper'
	document.body.appendChild(paper)
	var content=document.createElement('pre')
	content.className='content'
	paper.appendChild(content)	
	fn.call()
}
function convertMarkdownToHtml(fn){
  var div = document.createElement('div')  
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn.call()
}

  