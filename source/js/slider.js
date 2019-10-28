'use strict';

let multiItemSlider = function (selector) {
  let _mainElement = document.querySelector(selector)
  let _sliderWrapper = _mainElement.querySelector('#slider__list')
  let _sliderItems = _mainElement.querySelectorAll('.slider__item')
  let _sliderControls = _mainElement.querySelectorAll('.slider__button')
  // let _sliderControlLeft = _mainElement.querySelector('.comment__link-left');
  // let _sliderControlRight = _mainElement.querySelector('.comment__link-right');
  let _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width)
  let _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width)
  let _marginLeft = parseFloat(getComputedStyle(_sliderItems[0]).marginLeft)
  let _marginRight = parseFloat(getComputedStyle(_sliderItems[0]).marginRight)
  let _positionLeftItem = 0
  let _transform = 0
  let _step = _itemWidth / _wrapperWidth * 100 + ((_marginLeft + _marginRight) / _wrapperWidth * 100)
  let _items = []
  console.log((_marginLeft + _marginRight) / _wrapperWidth * 100)

  _sliderItems.forEach(function (item, index) {
    _items.push({ item: item, position: index, transform: 0 })
  })

  let position = {
    getMin: 0,
    getMax: _items.length - 1
  }

  let _transformItem = function (direction) {
    if (direction === 'right') {
      if (_positionLeftItem >= position.getMax) {
        return
      }
      _positionLeftItem++
      _transform -= _step
    }
    if (direction === 'left') {
      if (_positionLeftItem <= position.getMin) {
        return
      }
      _positionLeftItem--
      _transform += _step
    }
    _sliderWrapper.style.transform = 'translateX(' + _transform + '%)'
  }

  let _controlClick = function (e) {
    let direction = this.classList.contains('slider__link-right') ? 'right' : 'left'
    _transformItem(direction)
  }

  let _setUpListeners = function () {
    _sliderControls.forEach(function (item) {
      item.addEventListener('click', _controlClick)
    })
  }

  _setUpListeners()
}

multiItemSlider('.comment')
multiItemSlider('.services')
