/**
 * 公共方法
 */


function $(selector) {
	return document.querySelector(selector)
}

function $$(selector) {
	return document.querySelectorAll(selector)
}

function removeClass(e, className) {
	if (typeof e !== 'object') {
		return null
	}

	e.classList.remove(className)
	return e
}

function addClass(e, className) {
	if (typeof e !== 'object') {
		return null
	}

	e.classList.add(className)
	return e
}