# Golang 开发入门

## 我的第一个 Golang 程序

## 解析范式


[Go Channel的实现](https://studygolang.com/articles/12023)

G-P-M模型
```
G:
表示goroutine，存储了goroutine的执行stack信息、goroutine状态以及goroutine的任务函数等；另外G对象是可以重用的。
P:
表示逻辑processor，P的数量决定了系统内最大可并行的G的数量（前提：系统的物理cpu核数>=P的数量）；P的最大作用还是其拥有的各种G对象队列、链表、一些cache和状态。
M:
M代表着真正的执行计算资源。在绑定有效的p后，进入schedule循环；而schedule循环的机制大致是从各种队列、p的本地队列中获取G，切换到G的执行栈上并执行G的函数，调用goexit做清理工作并回到m，如此反复。M并不保留G状态，这是G可以跨M调度的基础。
```


![](/images/goroutine-scheduler-model.png "goroutine")

Plugin 热更新问题
https://github.com/campoy/golang-plugins

