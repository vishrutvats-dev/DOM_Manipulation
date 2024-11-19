const div = document.querySelector('div')

const d = document.createElement('div')
d.innerHTML = '<div>Hi There</div>'

const e = document.createElement('div')
e.innerHTML = '<div>Paradise E</div>'

const f = document.createElement('div')
f.innerHTML = '<div>Paradise F</div>'

const g = document.createElement('div')
g.innerHTML = '<div>Paradise G</div>'

const h = document.createElement('div')
h.innerHTML = '<div>Paradise H</div>'



div.append(d)
div.prepend(e)
div.before(f)
div.after(g)
div.appendChild(h)
