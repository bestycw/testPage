// 要实现三个灯（红灯、绿灯和黄灯）不断交替重复亮灯，你可以使用JavaScript的setInterval函数来设置每个灯的亮灯时间let redLight = document.getElementById('red');  
const html = `< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>交通灯模拟</title>
                    <style>
                        .light {
                            width: 50px;
                        height: 50px;
                        margin: 10px;  
        }
                        #red {
                            background - color: red;  
        }
                        #green {
                            background - color: green;  
        }
                        #yellow {
                            background - color: yellow;  
        }
                    </style>
                </head>
                <body>
                    <div id="red" class="light"></div>
                    <div id="green" class="light"></div>
                    <div id="yellow" class="light"></div>

                    <script src="traffic_lights.js"></script>
                </body>
            </html>`

let greenLight = document.getElementById('green');
let yellowLight = document.getElementById('yellow');

let redInterval = setInterval(function () {
    redLight.style.opacity = 1; // 亮灯
    setTimeout(function () {
        redLight.style.opacity = 0; // 灭灯  
    }, 3000); // 红灯亮3秒  
}, 9000); // 总循环时间（红灯+绿灯+黄灯）

let greenInterval = setInterval(function () {
    setTimeout(function () { // 在红灯亮完后开始  
        greenLight.style.opacity = 1; // 亮灯  
        setTimeout(function () {
            greenLight.style.opacity = 0; // 灭灯  
        }, 1000); // 绿灯亮1秒  
    }, 3000); // 等待红灯亮完的时间  
}, 9000); // 总循环时间（红灯+绿灯+黄灯）

let yellowInterval = setInterval(function () {
    setTimeout(function () { // 在绿灯亮完后开始  
        setTimeout(function () { // 在黄灯亮之前再等待1秒（因为绿灯亮1秒，然后直接切换到黄灯）  
            yellowLight.style.opacity = 1; // 亮灯  
            setTimeout(function () {
                yellowLight.style.opacity = 0; // 灭灯  
            }, 2000); // 黄灯亮2秒  
        }, 4000); // 等待红灯和绿灯亮完的时间  
    }, 0); // 立即执行（因为黄灯是第三个亮的）  
}, 9000); // 总循环时间（红灯+绿灯+黄灯）
