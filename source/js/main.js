'use strict'

const HEADER = document.querySelector('.header')
const closeButton = HEADER.querySelector('.nav__button-close')
const openButton = HEADER.querySelector('.button-menu')
const NAV = HEADER.querySelector('.nav')
const pageOff = document.querySelector('.page-on')
const CLOSE_FORM = HEADER.querySelector('.form__button')
const NAV_CALL = HEADER.querySelector('.nav__button')
const FORM_HEADER = HEADER.querySelector('.form')

openButton.addEventListener('click', function () {
  pageOff.classList.remove('page-on')
  pageOff.classList.add('page-off')
  NAV.classList.remove('nav--closed')
  NAV.classList.add('nav--opened')
  closeButton.addEventListener('click', function () {
    pageOff.classList.remove('page-off')
    pageOff.classList.add('page-on')
    NAV.classList.remove('nav--opened')
    NAV.classList.add('nav--closed')
  })
  NAV_CALL.addEventListener('click', function () {
    FORM_HEADER.classList.remove('form-off')
    FORM_HEADER.classList.add('form-on')
    CLOSE_FORM.addEventListener('click', function () {
      FORM_HEADER.classList.remove('form-on')
      FORM_HEADER.classList.add('form-off')
    })
  })
})

NAV_CALL.addEventListener('click', function () {
  pageOff.classList.remove('page-on')
  pageOff.classList.add('page-off')
  FORM_HEADER.classList.remove('form-off')
  FORM_HEADER.classList.add('form-on')
  CLOSE_FORM.addEventListener('click', function () {
    pageOff.classList.remove('page-off')
    pageOff.classList.add('page-on')
    FORM_HEADER.classList.remove('form-on')
    FORM_HEADER.classList.add('form-off')
  })
})

// closeButton.addEventListener('click', function () {
//   pageOff.classList.remove('page-off')
//   pageOff.classList.add('page-on')
//   NAV.classList.remove('nav--opened')
//   NAV.classList.add('nav--closed')
// })
