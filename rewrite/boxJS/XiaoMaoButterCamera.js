/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2023-01-30
 *
 * 

\黄\油\相\机\v\i\p\关\注\粉\丝\自\定\义\ + \去\信\息\流 + \去\开\屏
\部\分\模\版\解\锁\需\要\d\i\n\g\之\后\生\效\，\未\d\i\n\g\可\能\不\生\效

仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · Tg频道频道：https://t.me/xiaomaoJT
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript


使用方法：
1、使用BoxJS增加以下脚本订阅。https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMao.json

2、通过boxjs设置vip到期时间及等级
【一二此步骤可省略，会员到期时间永远定格明天，失效请重开app】

3、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoButterCamera.js

********************************

[mitm]
hostname = api4.bybutter.com,tcbox.baidu.com,adx-cn.anythinktech.com,bgg.baidu.com

[rewrite_local]
https:\/\/api4\.bybutter\.com\/v4\/* url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/bc.js
https:\/\/api4\.bybutter\.com\/v4\/app\/placements\/\d\/advertisements url reject
https:\/\/tcbox\.baidu\.com\/ztbox url reject
https:\/\/adx-cn\.anythinktech\.com\/bid url reject
https:\/\/bgg\.baidu\.com\/bgg\/produce url reject
 ***************/

