# 效果展示
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201207204715392.gif#pic_center)
无论是鼠标降临的光晕效果，还是更换日期都完整的呈现了出来

# 使用

## 光晕

1.在父盒子上添加class="light_hover"
2.导入light_hover.js文件
3.调用方法lightHover()
lightHover()方法有一个参数，以该参数为盒子对光标反应半径，即：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020120712123863.png)

该参数默认为80，即使用lightHover()方式调用将会使得盒子对光标反应半径为80

## 时间和日历
1.导入lunar_calendar.js和setTime.js文件
2.调用以下方法，设置时间的每秒钟变换
~~~javascript
        getDate();
        setInterval(getDate, 1000);//定时器
~~~
3.日历设置
~~~javascript
setCalendar();
~~~
setCalendar();有一个参数，为日历展示的日期信息，如setCalendar("2020-12-07");将展示2020年7月的日期信息

# 原理

## 盒子布局

使用一个父盒子嵌套一个子盒子，以父盒子的背景色作为子盒子的边框色

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201206230218874.png)

## 光环效果

使用CSS函数radial-gradient创建的渐变图像作为父盒子的背景图片background-image

通过控制radial-gradient函数的size参数和position参数控制创建渐变图像的渐变线条位置

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201206230232375.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzOTE1MzU2,size_16,color_FFFFFF,t_70)

之后使用javascript监控mouse mover事件动态计算渐变形状与容器的距离，以及光标距离容器的位置

