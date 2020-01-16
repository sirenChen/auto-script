## 介绍
这篇文档的主要内容有：
1. 如何安装和使用这个自动化脚本。
2. 自动化脚本的主要功能。

## 需求分析，主要功能
根据我的理解，我们的功能需求是自动化报价流程。   
整个报价流程的主要操作是鼠标点击、键盘输入数据、上传文件。所以这个自动化脚本的主要功能就是自动化以上操作。

## 功能实现思路
由于需要实现的功能不是特别复杂，所以可以通过在每个页面上插入不同的脚本来实现。   
为了在页面上运行自己的脚本，我们可以安装一个chrome插件 -- 油猴插件（tampermonkey）。tampermonkey可以非常简单的让我们在网页上运行我们自己的脚本。

## 安装脚本
百度搜索tampermonkey或者油猴插件。安装插件。   
安装完成之后可以看到插件栏中多了一个插件。   
点击插件，点击Create new script。如下图：  
最后把我编写的demo脚本粘贴进去。
![image.png](http://note.youdao.com/yws/res/75/WEBRESOURCE2305dfe27838406af65cb1a8a74eca17)


## Demo预览
为了避免在真实的生产环境中做测试，我们可以用这个页面来测试我们的脚本：   
https://www.wjx.top/jq/54336807.aspx   
这就是一个非常简单的表单页面，用户需要填写表单，提交表单。这个页面虽然没有报价页面复杂，但是基本上涵盖了报价页面所有需要的操作。我们只需要做简单的修改，就能在报价页面上实现相同的功能。   

## 功能测试
当你打开页面之后，你可以先手动的填写表单并提交。   
如果一切安装成功，你应该在右上角看到一个操作面板。点击开始按钮，开始自动化填写表单。


## 注意事项以及功能扩展
浏览器没有权限主动访问本地文件，所以用户必须选择所要上传的文件。   
如果需要的话，当用户选择上传的文件后，我们可以读取文件中的内容，然后根据文件内容自动填写表格。