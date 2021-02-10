function lightHover(r = 80) {

    document.addEventListener("mousemove", function(e) {

        // 鼠标坐标
        var x = e.pageX;
        var y = e.pageY;

        //效果盒子组
        var tds = document.querySelectorAll(".light_hover");
        //光标范围半径
        for (let index = 0; index < tds.length; index++) {
            // //蓝色边框跳过
            // if (tds[index].className.indexOf("click") != -1) {
            //     // tds[index].style.backgroundColor = "";
            //     continue;
            // }
            //每个日期格的边距离视口的距离
            var element = tds[index].getBoundingClientRect();
            var L = element.x;
            var R = element.x + element.width;
            var T = element.y;
            var B = element.y + element.height;
            // console.log("T = ", T, "B = ", B, "L = ", L, "R = ", R);
            //计算光标相对日期格的距离
            var YT = T - y - r;
            var YB = B - y + r;
            var XL = L - x - r;
            var XR = R - x + r;
            // console.log("YT = ", YT, "YB = ", YB, "XL = ", XL, "XR = ", XR);


            // 当光标超出盒子反应范围
            if (YT > 0 || XL > 0 || YB < 0 || XR < 0) {
                tds[index].style.backgroundImage = "";
            } else { // 当光标在盒子反应范围内
                //将盒子反应范围分成四个区域 上 下 左 右，分别处理光标从四个反向降临
                if (YT < 0 && YT + r > 0) { //光标在上面
                    if (XL < 0 && XL + r > 0) { //光标在左面
                        var AB = Math.sqrt(((x - L) * (x - L) + (y - T) * (y - T)));
                        // console.log("AB:", AB);
                        // console.log("r-AB:", r - AB);
                        var px = r - AB;
                        tds[index].style.backgroundImage = `radial-gradient(circle ${px}px at top left, #3c3c3c, #1a1a1a)`;
                    } else if (XL + r < 0 && XR - r > 0) { //光标在正上面
                        tds[index].style.backgroundImage = `radial-gradient(circle ${r-(T-y)}px at top, #3c3c3c, #1a1a1a)`;

                    } else if (XR > 0 && XR - r < 0) { //光标在右面
                        var AB = Math.sqrt(((x - R) * (x - R) + (y - T) * (y - T)));
                        // console.log("AB:", AB);
                        // console.log("r-AB:", r - AB);
                        var px = r - AB;
                        tds[index].style.backgroundImage = `radial-gradient(circle ${px}px at top right, #3c3c3c, #1a1a1a)`;
                    }

                } else if (YT + r < 0 && YB - r > 0) { //在上与下之间                     
                    if (XL < 0 && XL + r > 0) { //左
                        tds[index].style.backgroundImage = `radial-gradient(circle ${r-(L-x)}px at  left, #3c3c3c, #1a1a1a)`;

                    } else if (XR > 0 && XR - r < 0) {
                        tds[index].style.backgroundImage = `radial-gradient(circle ${r-(x-R)}px at  right, #3c3c3c, #1a1a1a)`;
                    }

                } else if (YB > 0 && YB - r < 0) { //光标在下面
                    if (XL < 0 && XL + r > 0) { //光标在左面
                        var AB = Math.sqrt(((x - L) * (x - L) + (y - B) * (y - B)));
                        // console.log("AB:", AB);
                        // console.log("r-AB:", r - AB);
                        var px = r - AB;
                        tds[index].style.backgroundImage = `radial-gradient(circle ${px}px at bottom left, #3c3c3c, #1a1a1a)`;
                    } else if (XL + r < 0 && XR - r > 0) { //光标在正下面
                        tds[index].style.backgroundImage = `radial-gradient(circle ${r-(y-B)}px at bottom, #3c3c3c, #1a1a1a)`;

                    } else if (XR > 0 && XR - r < 0) { //光标在右面
                        var AB = Math.sqrt(((x - R) * (x - R) + (y - B) * (y - B)));
                        // console.log("AB:", AB);
                        // console.log("r-AB:", r - AB);
                        var px = r - AB;
                        tds[index].style.backgroundImage = `radial-gradient(circle ${px}px at bottom right, #3c3c3c, #1a1a1a)`;
                    }

                }



            }
            //当光标在盒子里
            if ((x > L && x < R) && (y > T && y < B)) {
                tds[index].style.backgroundImage = "";
                tds[index].style.backgroundColor = "#7d7e7e";
            } else {
                tds[index].style.backgroundColor = "";
            }

        }


    })
}