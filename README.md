# 效果展示

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201208235233997.gif#pic_center)

无论时鼠标降临的光晕效果，还是更换日期又或者是点击后显示当前日期，将 win10 的系统日历功能都完整的呈现了出来

# 使用

## 光晕

1.在父盒子上添加 class="light_hover"

2.导入 light_hover.js 文件

3.调用方法 lightHover()

lightHover()方法有一个参数，以该参数为盒子对光标反应半径，即：

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020120712123863.png)

该参数默认为 80，即使用 lightHover()方式调用将会使得盒子对光标反应半径为 80

## 时间和日历

1.导入~~lunar_calendar.js~~(历算组即将过期，[详见](https://blog.csdn.net/qq_43915356/article/details/110872220))，lunar_calendar_new.js 和 setTime.js 文件 2.调用以下方法，设置时间的每秒钟变换

```javascript
getDate();
setInterval(getDate, 1000); //定时器
```

3.日历设置

```javascript
setCalendar();
```

setCalendar();有一个参数，为日历展示的日期信息，如 setCalendar("2020-12-07");将展示 2020 年 7 月的日期信息

# 原理

## 盒子布局

使用一个父盒子嵌套一个子盒子，以父盒子的背景色作为子盒子的边框色

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201206230218874.png)

## 光环效果

使用 CSS 函数 radial-gradient 创建的渐变图像作为父盒子的背景图片 background-image

通过控制 radial-gradient 函数的 size 参数和 position 参数控制创建渐变图像的渐变线条位置

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201206230232375.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzOTE1MzU2,size_16,color_FFFFFF,t_70)

之后使用 javascript 监控 mouse mover 事件动态计算渐变形状与容器的距离，以及光标距离容器的位置
