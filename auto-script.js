// ==UserScript==
// @name         自动操作网页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.wjx.top/jq/54336807.aspx
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // 新建控制面板
  createCtrlPanel();

  // 点击按钮，开始自动填写表格
  let ctrlBtn = document.querySelector('#my-btn');
  ctrlBtn.onclick = function () {
    autoFillForm();
  }



  // 方法定义
  async function autoFillForm() {

    // 获取网页上的各种所需要的元素
    let name = document.querySelector('#q1');
    let age = document.querySelector('#q2');
    let phone = document.querySelector('#q5');
    let email = document.querySelector('#q6');
    let gender = document.querySelector('input[name="q3"]');
    let uploadMsg = document.querySelector('.uploadmsg');
    let btnNext = document.querySelector('#btnNext');


    // 自动填写表单
    log('开始填写表单');
    await uploadFile();
    name.value = '陈思任';
    age.value = '19';
    gender.click();

    log('等待3秒后，跳转到第2页...');
    await sleep(3);  // 这里等待3秒，等待文件上传完成。
    btnNext.click(); // 跳转第二页

    log('开始自动填写第二页');
    phone.value = '13312341234';
    email.value = 'test@email.com';

    log('点击提交确认');
    askToConfirm();
  }

  function createCtrlPanel() {
    let ctrlPanel = document.createElement('div');
    ctrlPanel.id = 'my-ctrl-panel';
    ctrlPanel.innerHTML =
      `
        <button id='my-btn'>开始</button>
        <div id='my-msg' style="font-weight: bolder; color: blue;">点击按钮开始自动填写表单</div>
      `

    ctrlPanel.style.borderWidth = '5px';
    ctrlPanel.style.borderColor = 'red';
    ctrlPanel.style.borderStyle = 'solid';
    ctrlPanel.style.position = 'fixed';
    ctrlPanel.style.top = '10px';
    ctrlPanel.style.right = '10px';
    ctrlPanel.style.width = '200px';

    document.body.append(ctrlPanel);
  }

  async function uploadFile() {
    return new Promise(function (resolve, error) {
      let fileUpload = window.frames['uploadFrame4'].contentDocument.querySelector('#fileUpload');
      let oldOnchange = fileUpload.onchange;
      fileUpload.onchange = function (e) {
        oldOnchange();
        resolve(e);
      }
      fileUpload.click();
    });
  }

  function askToConfirm() {
    let submitBtn = document.querySelector('#submit_button');
    submitBtn.style.border = '5px solid red';
    
    let confirmText = document.createElement('p');
    confirmText.innerText = '确认数据无误后，点击提交按钮。'
    confirmText.style.color = 'red';

    submitBtn.parentElement.append(confirmText);
  }

  function log(msg) {
    let msgElement = document.querySelector('#my-msg');

    let newLog = document.createElement('div');
    newLog.innerText = msg;
    newLog.style.borderTop = '1px dashed red';

    msgElement.append(newLog);
  }

  function sleep(seconds) {
    return new Promise(function (resolve, error) {
      setTimeout(() => { resolve() }, seconds * 1000);
    });
  }

})();



