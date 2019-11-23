# 月报模板

## 示例

### Weekly Meeting 2019w16 (04.15 ~ 04.21)

> **Time**: April 21, 2019
<br>
> **Moderator**: @dean
<br>
> **Notetaker**: @dean
<br>
> **Video/Slides**: https://youtu.be/JFWi5yebR88
<br>
> **Moderator checklist**:

- 确定参会人数及时间
- 是否需要视频或录屏
- 会议议题及沟通事项
- 提前准备工作计划

> **Attendees:**
- @dean
- @tbDuck

-----------------
> **Agenda**

> **Topic**: 下周工作

> **Notes**:
- 技术突破
- 志愿者信息录入
- 小程序使用场景
  - 扫码进入
  - 微信好友分享
  - 微信群组分享


> **Questions**:
- **Q**: @dean, 为什么用 mpvue, 不用 wepy 呢？
- **A**: 因为 mpvue 使用成本小，且当前已经支持各类小程序。对于我们来讲，是比较简单的


> **Comments**:
- @dean 服务器资源紧急，我下周开始跟进。

-----------------
> **ToDo**:

@dean:
- [ ] createqrcode 获取小程序二维码接口支持参数。
- <del> [d] : 救助站信息录入 </del>

@tbDuck:

- [ ] 用户手机号码获取，使用 button 组件 [getPhoneNumber](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)
- [ ] 用户收件地址获取，使用 api 接口 [wx.chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseAddress.html)
- [ ] 用户信息灰色进行提示，文本框支持编辑功能
- [ ] 志愿者信息录入逻辑实现

@Newbg:

- [ ] 客服页面布局设计

@xi4oyi:

- [ ] 周会模板制定


## 使用说明

工作计划分为3段，第1段表示工作进度，第2段表示分类及优先级，第三段表示具体的工作内容。

a. 进度标识

- [ ] : 设定工作计划
- [x] : 已完成
- [n] : 推迟下周开展
- [c] : 下周继续
- <del> [d] : 删除该项工作计划 </del>

b. 分类标识

- :new:  : 新功能、新模块
- :bug:  : 设计缺陷、漏洞或者 bug, 可以正常迭代
- :rotating_light: : 一级紧急, 生产 bug 且有一定用户影响
- :red_circle: : 重要且紧急
- :warning:  : 重要不紧急
- :golf: : 后续要做，先设定为计划

c. 工作内容

单条工作内容尽量不超过20个汉字，目标必须可以在9小时以内完成，且能够进行验证、验收
