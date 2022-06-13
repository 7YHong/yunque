import { Fragment, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Dialog, Transition } from "@headlessui/react";
import Pagination from '../components/pagination'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const resp = {
  "code": "10000",
  "charge": false,
  "msg": "查询成功",
  "result": {
    "status": 0,
    "msg": "ok",
    "result": {
      "channel": "头条",
      "num": 20,
      "list": [
        {
          "title": "欧国联-巴黎边锋连场进球 西班牙2-0连胜捷克领跑",
          "time": "2022-06-13 04:47:00",
          "src": "新浪体育",
          "category": "sports",
          "pic": "https://n.sinaimg.cn/sports/transform/249/w650h399/20220613/48a1-1cd9477a828510f8d41c9cac44e48f7d.jpg",
          "url": "https://sports.sina.cn/laliga/spain/2022-06-13/detail-imizmscu6487020.d.html?vt=4&pos=108",
          "weburl": "https://sports.sina.com.cn/g/laliga/2022-06-13/doc-imizmscu6487020.shtml",
          "content": "<p class=\"art_p\">北京时间6月13日02:45(西班牙当地时间12日20:45)，2022/23欧国联A2组第4轮展开争夺，西班牙主场2比0取胜捷克，索莱尔和萨拉维亚进球。西班牙连胜领跑。&nbsp;</p>\n<p class=\"art_p\">西班牙轮换10人，仅有莫拉塔继续首发。第24分钟，阿森西奥禁区右侧低传，索莱尔小禁区边缘劲射破门。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"476\" h=\"206\" src='https://n.sinaimg.cn/sports/transform/682/w476h206/20220613/1e87-84bc11abe7d4a348b7bb9bb2251bd3c2.gif' alt=\"西班牙1-0，索莱尔\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">西班牙1-0，索莱尔</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">第75分钟，费兰-托雷斯禁区右侧传中，巴黎圣日耳曼边锋萨拉维亚近距离破门，2-0。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"476\" h=\"206\" src='https://n.sinaimg.cn/sports/transform/682/w476h206/20220613/fc78-50aa9445c66f7c34bb0784e4ac10aaaf.gif' alt=\"西班牙2-0，萨拉维亚\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">西班牙2-0，萨拉维亚</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<div sax-type=\"proxy\" class=\"j_native_vwx220613 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">西班牙(4-3-3)：23-西蒙；20-卡瓦哈尔，14-加西亚，3-伊尼戈-马丁内斯，17-阿隆索(78',18-阿尔巴)；19-索莱尔(59',9-加维)，16-罗德里，8-科凯(79',5-布斯克茨)；10-阿森西奥(72',22-萨拉维亚)，7-莫拉塔(59',11-费兰-托雷斯)，21-奥尔默</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"398\" h=\"408\" src='https://n.sinaimg.cn/sports/transform/6/w398h408/20220613/8185-2c761acc8b6416a52a2302782781f938.jpg' alt=\"技术统计\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">技术统计</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"650\" h=\"339\" src='https://n.sinaimg.cn/sports/transform/189/w650h339/20220613/94b1-021431012bf9943d0c3698d0b57cd593.jpg' alt=\"球员评分\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">球员评分</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">(斯科)&nbsp;</p>"
        },
        {
          "title": "乌军方：俄军在北顿涅茨克取得部分胜利，乌军从市中心撤退",
          "time": "2022-06-13 19:32:00",
          "src": "澎湃新闻",
          "category": "news",
          "pic": "https://n.sinaimg.cn/default/feedbackpics/transform/116/w550h366/20180326/YkRn-fysqfnf9556477.png",
          "url": "https://news.sina.cn/gj/2022-06-13/detail-imizmscu6614968.d.html?vt=4&pos=108",
          "weburl": "https://news.sina.com.cn/w/2022-06-13/doc-imizmscu6614968.shtml",
          "content": "<p class=\"art_p\" cms-style=\"font-L\">乌克兰军方6月13日在社交媒体上发文称，俄军在北顿涅茨克取得部分胜利，迫使乌军从市中心撤退。</p>\n<p class=\"art_p\" cms-style=\"font-L\">据《卫报》报道，乌克兰军方发言人在脸书上发文称，“俄军正在集中力量展开进攻行动，以便在北顿涅茨克和利西昌斯克地区包围我们的军队，并封锁来自巴赫穆特定居点的后勤补给路线。”卢甘斯克地区军事行政长官谢尔盖·盖代12日说，俄罗斯人摧毁了连接北顿涅茨克与利西昌斯克的一座桥梁，切断了平民的撤离路线。</p>\n<p class=\"art_p\" cms-style=\"font-L\">据半岛电视台报道，俄罗斯国防部13日表示，俄军方使用高精度空基导弹在乌达奇涅火车站附近发射，摧毁了乌克兰东部顿巴斯地区的大量武器和军事装备，其中一些装备来自美国和欧洲国家。自俄乌冲突爆发以来，美国、英国以及数个欧盟国家已经向乌克兰提供了价值数十亿美元的军事援助。</p>\n<p class=\"art_p\" cms-style=\"font-L\">近来，俄乌战事焦点集中在乌克兰东部顿巴斯地区，两军在北顿涅茨克市继续巷战。乌克兰总统泽连斯基12日表示，俄罗斯的关键战术目标没有改变，俄军正在向北顿涅茨克施压，那里正在发生激烈的战斗。</p>"
        },
        {
          "title": "欧国联-塞费罗维奇闪电破门 无C罗葡萄牙客负瑞士",
          "time": "2022-06-13 04:51:00",
          "src": "新浪体育",
          "category": "sports",
          "pic": "https://n.sinaimg.cn/sports/transform/240/w650h390/20220613/b88b-18b9f82347c977e976fc2ab283b28708.jpg",
          "url": "https://sports.sina.cn/premierleague/manutd/2022-06-13/detail-imizirau8076596.d.html?vt=4&pos=108",
          "weburl": "https://sports.sina.com.cn/g/pl/2022-06-13/doc-imizirau8076596.shtml",
          "content": "<p class=\"art_p\">北京时间6月13日02:45(瑞士当地时间12日20:45)，2022/23欧国联A2组第4轮展开争夺，葡萄牙客场0比1不敌瑞士，塞费罗维奇闪电破门。&nbsp;</p>\n<p class=\"art_p\">葡萄牙轮换7人，仅有内维斯、达尼洛、佩佩和坎塞洛继续首发。瑞士开场55秒闪电破门，维默右路传中，塞费罗维奇小禁区前顶入左下角。随后B费直传，越位的安德列-席尔瓦禁区左侧传中，莱奥小禁区前头球破门被判无效。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"476\" h=\"206\" src='https://n.sinaimg.cn/sports/transform/682/w476h206/20220613/1a33-d3f047a6ce9ead93b7f0ff2c94f13c01.gif' alt=\"瑞士1-0，塞费罗维奇\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">瑞士1-0，塞费罗维奇</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"476\" h=\"206\" src='https://n.sinaimg.cn/sports/transform/682/w476h206/20220613/b47f-1b854833704af57c125a63cb81c04303.gif' alt=\"莱奥进球无效\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">莱奥进球无效</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">下半场。格德斯禁区右侧传中，若塔小禁区前头球攻门被扑出。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"476\" h=\"206\" src='https://n.sinaimg.cn/sports/transform/682/w476h206/20220613/18f4-bfee011f941a7d4caf4f8b891e457aa7.gif' alt=\"若塔头球攻门被扑出\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">若塔头球攻门被扑出</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<div sax-type=\"proxy\" class=\"j_native_stu220613 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">葡萄牙(4-3-3)：1-帕特里西奥；20-坎塞洛，3-佩佩，13-达尼洛，19-门德斯；11-维蒂尼亚(62',10-贝尔纳多)，18-内维斯(82',7-霍塔)，8-B费(74',23-努涅斯)；16-奥塔维奥(46',17-格德斯)，9-安德列-席尔瓦，15-莱奥(62',21-若塔)</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"400\" h=\"409\" src='https://n.sinaimg.cn/sports/transform/9/w400h409/20220613/0d40-9640303594d791b6ec403976abd4a05b.jpg' alt=\"技术统计\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">技术统计</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"650\" h=\"339\" src='https://n.sinaimg.cn/sports/transform/189/w650h339/20220613/ca39-a5cc5d2dabeec97449c918c78ae36d74.jpg' alt=\"球员评分\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">球员评分</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">(斯科)&nbsp;</p>"
        },
        {
          "title": "官方FMVP排行榜：库里重回榜首 维金斯排第五",
          "time": "2022-06-13 07:01:00",
          "src": "新浪体育讯",
          "category": "sports",
          "pic": "https://n.sinaimg.cn/sports/transform/662/w650h812/20220613/c54d-174426221b54213eaa8c0a536db6c25b.jpg",
          "url": "https://sports.sina.cn/nba/2022-06-13/detail-imizmscu6497932.d.html?vt=4&pos=108",
          "weburl": "https://sports.sina.com.cn/basketball/nba/2022-06-13/doc-imizmscu6497932.shtml",
          "content": "<p class=\"art_p\">北京时间6月13日，NBA官方更新了最新的总决赛MVP排行榜，斯蒂芬-库里重回榜首，杰伦-布朗降至第二。</p>\n<p class=\"art_p\">具体排名如下：</p>\n<p class=\"art_p\">1、斯蒂芬-库里</p>\n<p class=\"art_p\">总决赛数据：34.3分6.3篮板3.8助攻</p>\n<p class=\"art_p\">2、杰伦-布朗</p>\n<p class=\"art_p\">总决赛数据：22.3分7.0篮板3.8助攻</p>\n<p class=\"art_p\">3、杰森-塔图姆</p>\n<div sax-type=\"proxy\" class=\"j_native_nop220613 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">总决赛数据：22.3分7.0篮板7.8助攻</p>\n<p class=\"art_p\">4、克雷-汤普森</p>\n<p class=\"art_p\">总决赛数据：17.3分2.5篮板2.0助攻</p>\n<p class=\"art_p\">5、安德鲁-维金斯</p>\n<p class=\"art_p\">总决赛数据：16.5分8.5篮板1.5助攻</p>\n<p class=\"art_p\">目前勇士和凯尔特人战成2-2平。</p>\n<p class=\"art_p\">（修楚）</p>"
        },
        {
          "title": "韩媒：无人驾驶出租车8月将在首尔江南地区投入运营",
          "time": "2022-06-13 12:34:00",
          "src": "澎湃新闻",
          "category": "finance",
          "pic": "https://n.sinaimg.cn/tech/transform/667/w400h267/20220613/852a-0b0460ef194d40552c4e9a4e6225884c.jpg",
          "url": "https://tech.sina.cn/it/2022-06-13/detail-imizirau8157796.d.html?vt=4&pos=108",
          "weburl": "https://tech.sina.com.cn/it/2022-06-13/doc-imizirau8157796.shtml",
          "content": "<p class=\"art_p\">记者 南博一</p>\n<p class=\"art_p\">近日，韩媒透露称，从今年8月开始，在首尔江南地区可以使用无人驾驶出租车。虽然目前只有4辆车获得相关驾照，但首尔市计划逐步增加运行数量。</p>\n<div sax-type=\"proxy\" class=\"j_native_nop220613 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">《韩民族日报》10日报道称，首尔市计划从今年8月开始运行“RoboRide”无人驾驶出行服务。乘客在“RoboRide”应用程序上输入出发地和目的地，无人驾驶出租车根据乘客的设定自动寻找最短路径。今后两个月内，无人驾驶技术专家、现代汽车相关人士等将乘坐该出租车，继续完善技术和服务。</p>\n<p class=\"art_p\">目前在首尔的“无人驾驶汽车示范运行地区”上岩洞两条路线运行着4辆无人驾驶汽车。首尔市交通信息科科长李秀珍（音）表示，上岩洞的无人驾驶汽车是按照规定的路线循环运行，而即将在江南区运行的无人驾驶出租车不设路线行驶。首尔市计划逐步扩大无人驾驶出租车运行范围。今年首先在德黑兰路、江南大路、永东大路、彦州路、南部循环路等26条道路（总长48.8公里）上运行，明年运行区域将扩大到岛山大路、狎鸥亭路等32条道路（总长76.1公里）。9日上午10点，首尔市长吴世勋、国土交通部长官元喜龙、现代汽车社长孔泳云等在江南区德黑兰路浦项制铁十字路口试乘了无人驾驶出租车。</p>"
        },
        {
          "title": "TrendForce：预估2023年全球卫星产值达3083亿美元 同比增长4.5%",
          "time": "2022-06-13 12:35:00",
          "src": "财联社APP",
          "category": "finance",
          "pic": "https://n.sinaimg.cn/tech/transform/667/w400h267/20220613/b76e-6d4bd7c4b6128eb568a74c149186d418.jpg",
          "url": "https://tech.sina.cn/it/2022-06-13/detail-imizmscu6559266.d.html?vt=4&pos=108",
          "weburl": "https://tech.sina.com.cn/it/2022-06-13/doc-imizmscu6559266.shtml",
          "content": "<p class=\"art_p\">财联社6月13日电，据TrendForce集邦13日消息，TrendForce预估至2023年全球卫星产业产值可达3083亿美元，年成长为4.5%。成长动能来自于国际电信联盟对轨道、频谱规范与全球频宽需求大幅攀升，加上卫星网络视为偏乡、农村与海空移动载具等主要通讯解决方案，透过卫星通讯技术与地面网络结合，发展混合式网络，以提高频宽、覆盖率。</p>"
        },
        {
          "title": "WNBA上演中国德比：李月汝2分3篮板 韩旭10分",
          "time": "2022-06-13 06:51:00",
          "src": "新浪体育讯",
          "category": "sports",
          "pic": "https://n.sinaimg.cn/sports/transform/283/w650h433/20220613/f131-845db8789ccf3c1b64449de8d37046b5.jpg",
          "url": "https://sports.sina.cn/cba/2022-06-13/detail-imizirau8088942.d.html?vt=4&pos=108",
          "weburl": "https://sports.sina.com.cn/basketball/cba/2022-06-13/doc-imizirau8088942.shtml",
          "content": "<p class=\"art_p\">北京时间6月13日，WNBA常规赛，芝加哥天空队88-86险胜纽约自由人队，中国球员李月汝代表芝加哥天空队出战，韩旭代表纽约自由人队出战，中国德比在WNBA赛场上演。</p>\n<p class=\"art_p\">本场比赛，李月汝替补出战6分06秒，没有出手，罚球2中2，得到2分3篮板1助攻。</p>\n<p class=\"art_p\">韩旭替补出战21分03秒，8投4中，罚球3中2，贡献10分2篮板1抢断1盖帽，正负值是全队最高的+7。</p>\n<div sax-type=\"proxy\" class=\"j_native_jkl220613 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">相较于李月汝的零星出场时间，更早来到WNBA的韩旭显然更适应，也更受球队重视。本场比赛最后时刻，纽约自由人队没有派上韩旭登场保护篮板，成为了最后被对手绝杀的导火索。</p>\n<p class=\"art_p\">（修楚）</p>"
        },
        {
          "title": "美国再现“血腥休息日”：至少发生7起大规模枪击事件 造成5死27伤",
          "time": "2022-06-13 07:12:00",
          "src": "海外网",
          "category": "news",
          "pic": "https://n.sinaimg.cn/spider20220613/107/w1024h683/20220613/63fd-1e2dc9bb183676add66c7fd0d9293f88.jpg",
          "url": "https://news.sina.cn/gj/2022-06-13/detail-imizmscu6500393.d.html?vt=4&pos=108",
          "weburl": "https://news.sina.com.cn/w/2022-06-13/doc-imizmscu6500393.shtml",
          "content": "<p class=\"art_p\"><font cms-style=\"strong-Bold\">海外网6月13日电</font> 美国广播公司（ABC）13日援引“枪支暴力档案”网站数据称，在刚过去的两个休息日，全美各地至少发生了7起大规模枪击事件，造成5人死亡、27人受伤。</p>\n<p class=\"art_p\">报道称，12日凌晨2时左右，美国印第安纳州加里市一家夜店发生枪击事件，造成一男一女死亡，另有4人受伤。当天凌晨4时左右，新奥尔良市中心一十字路口发生枪击事件，造成至少4人受伤。</p>\n<p class=\"art_p\">此前一天（11日）晚上10时左右，田纳西州纳什维尔市郊区一泳池派对发生枪击事件，造成2名男子死亡，另有2人受伤。当晚9时左右，肯塔基州路易斯维尔市一座大桥附近也发生枪击事件，5名青少年受伤。</p>\n<div sax-type=\"proxy\" class=\"j_native_ijk220613 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">11日，底特律一处短期租赁房屋举行的单身派对上也发生枪击事件，至少4人中枪，均无生命危险。当天下午3时20分左右，芝加哥南部地区发生枪击事件，有人驾驶汽车向人群开枪，造成5人受伤，其中1人伤势严重。</p>\n<p class=\"art_p\">10日晚11时30分左右，佐治亚州迪凯特县一家餐厅发生枪击事件，造成一名48岁的男子死亡、另有3名男子受伤。</p>\n<p class=\"art_p\">报道还称，自5月14日纽约州布法罗市一家超市发生大规模枪击事件致10人死亡以来，全美至少发生了63起大规模枪击事件，平均每天2起。（海外网 姚凯红）</p>\n<p style=\"text-align:right;\" class=\"article-editor\">责任编辑：朱学森 SN240</p>"
        },
        {
          "title": "性能再破世界纪录 华中科大图计算机登顶全球榜单",
          "time": "2022-06-13 08:42:00",
          "src": "媒体滚动",
          "category": "finance",
          "pic": "https://n.sinaimg.cn/tech/transform/667/w400h267/20220613/2218-729996e99f1eb213105b70b284cb9d8b.jpg",
          "url": "https://tech.sina.cn/it/2022-06-13/detail-imizirau8106065.d.html?vt=4&pos=108",
          "weburl": "https://tech.sina.com.cn/it/2022-06-13/doc-imizirau8106065.shtml",
          "content": "<p class=\"art_p\">来源：科技日报</p>\n<p class=\"art_p\">性能再破世界纪录 华中科大图计算机登顶全球榜单</p>\n<div sax-type=\"proxy\" class=\"j_native_ijk220613 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">◎本报记者 吴纯新 通讯员 余 辉</p>\n<p class=\"art_p\" cms-style=\"font-L\">6月4日，记者从华中科技大学获悉，国际超级计算大会日前在德国汉堡举办，第24届Graph&nbsp;500排名揭晓，该校图计算团队研发的图计算机DepGraph性能再次打破图计算性能世界纪录，登顶全球最权威图计算榜单，并在国际上首次实现单机性能超越超级计算机图计算性能。</p>\n<p class=\"art_p\" cms-style=\"font-L\">当前，全球大数据进入加速发展期。万物皆关联，而图是表达事物之间复杂关联关系的组织结构，因此现实生活中的诸多应用场景都需用到图。</p>\n<p class=\"art_p\" cms-style=\"font-L\">为了从这些数据之间的关联中获取有用信息，大量图算法层出不穷。它们通过对大型图数据的迭代处理，获得图数据中隐藏的重要信息。图计算作为下一代人工智能的核心技术，目前已被广泛应用于医疗、教育、金融等众多领域，成为全球科技竞争新的战略制高点。</p>\n<p class=\"art_p\" cms-style=\"font-L\">国际超级计算大会的Graph&nbsp;500榜单，是国际计算机学会（ACM）和电气与电子工程师协会（IEEE）联合组织的国际上评价超级计算机图计算性能的权威榜单。</p>\n<p class=\"art_p\" cms-style=\"font-L\">在国家重点研发计划项目“面向图计算的通用计算机技术与系统”支持下，华中科技大学张宇副教授和赵进博士带领的图计算团队经过长年深入研究，在图计算加速器和图计算系统软件的多个关键技术上取得突破。</p>\n<p class=\"art_p\" cms-style=\"font-L\">去年11月，在美国圣路易斯举办的国际超级计算大会上揭榜的第18届Green&nbsp;Graph&nbsp;500和第23届Graph&nbsp;500排名中，该团队研发的图计算机DepGraph曾登顶这两项全球最权威图计算榜单。在此次排名中，DepGraph性能超过日本“富岳”等超级计算机，蝉联全球第一并打破世界纪录。</p>\n<p class=\"art_p\" cms-style=\"font-L\">“目前，我们正在和相关单位洽谈，将图计算应用在实际业务中；同时，在软件产业化后，推动相关硬件产业化，并将硬件产品推广到各个行业。”张宇说。</p>\n<div id=\"gtx-trans\" style=\"position: absolute; left: 619px; top: 210.766px;\">&nbsp;</div>"
        },
        {
          "title": "今年北京直播电商成交额将达万亿！到2025年再翻一番",
          "time": "2022-06-13 07:13:00",
          "src": "北京日报",
          "category": "finance",
          "pic": "https://n.sinaimg.cn/tech/transform/667/w400h267/20220613/ad4c-f30dedfa1c79591c8cae2a64b3f36d45.jpg",
          "url": "https://tech.sina.cn/i/gn/2022-06-13/detail-imizirau8101293.d.html?vt=4&pos=108",
          "weburl": "https://tech.sina.com.cn/i/2022-06-13/doc-imizirau8101293.shtml",
          "content": "<p class=\"art_p\">记者 曹政</p>\n<p class=\"art_p\">小小的手机屏幕，网红身临其境地推荐，粉丝轻点屏幕就可以完成一单交易。未来，这样的直播电商将在北京提速发展。市经信局近日对外发布《北京市数字消费能级提升工作方案》。根据方案，本市将推动直播电商产业集聚升级，选取2到3个区打造高质量直播电商基地，今年将培育或引进10家龙头直播电商专业服务机构，直播电商成交额将达到1万亿元。</p>\n<p class=\"art_p\"><strong>打造高质量直播电商基地</strong></p>\n<p class=\"art_p\">电商、直播经济、在线文娱等数字消费新模式将在北京焕发活力，助力消费升级和企业复工复产。</p>\n<p class=\"art_p\">根据方案，本市鼓励直播电商平台创新发展，支持购物、餐饮、便民服务、文娱体育、旅游出行、跨境电商等领域平台企业积极开展直播业务。“同时，发挥本市电子商务、数字商务示范企业示范引领作用，鼓励企业不断创新直播运营模式，丰富虚拟主播的应用场景，提高制播效率和智能化水平，进一步扩大线上销售规模。”市经信局相关负责人说。</p>\n<p class=\"art_p\">按照计划，本市将选取2到3个区作为重点，依托产业联盟和协会组织开展直播电商基地试点建设工作，打造具备品牌聚集、主播孵化、机构入驻、活动落地、人才培养等功能的高质量直播电商基地。</p>\n<p class=\"art_p\">引进优质直播电商服务机构方面，北京也将发挥头部直播电商平台集聚优势，加速培育引进优质MCN机构、数据营销服务商、品牌服务商、内容策划企业等专业服务机构；引导头部直播平台、品牌商、行业协会、职业院校与服务机构开展合作，丰富专业人才与品牌资源，提升相关机构在主播孵化、品牌塑造、流量运营、内容策划等方面服务能力。鼓励在基地建设、直播间搭建、运营管理等环节对MCN机构给予政策支持。</p>\n<p class=\"art_p\"><strong>保税仓直播有望即买即提</strong></p>\n<div sax-type=\"proxy\" class=\"j_native_ijk220613 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">方案也提出，推进跨境直播电商创新发展，推动开展保税仓直播试点。本市将结合综合保税区高端消费品展示交易中心建设，规划满足直播需求的空间场所，支持电商直播平台企业入仓组织直播活动；积极组织符合条件的企业在海关特殊监管区拓展“网购保税+线下自提”业务，努力争取在本市内试点开展安全合规的电商直播即买即提业务新模式。</p>\n<p class=\"art_p\">买全球的同时，也可以卖全球。相关负责人说，本市鼓励直播电商带动国货出海。一方面，结合推进“一带一路”建设和RCEP合作机制，助力中国制造和中国品牌有效触达海外消费者；另一方面，基于本市国际化人才优势，推动直播电商平台与相关院校开展合作，进一步优化外籍人员工作许可、工作类居留许可等手续，加快培育国际主播达人与网红品牌，通过国货国潮品牌出海、海外仓直播等方式，帮助品牌厂商快速建立口碑，提高产品的销售转化，进一步提升本土品牌国际影响力。</p>\n<p class=\"art_p\">与此同时，北京也将营造多元直播电商产业生态，着力打造具有国际影响力的直播发布平台，鼓励平台设立首店首发直播专区；支持老字号品牌、新消费品牌开展直播带货、新品首发、首店入驻等特色直播活动，借助直播经济推广“北京品牌IP”，打造“人、货、场”全要素直播电商产业集聚生态。</p>\n<p class=\"art_p\"><strong>到2025年直播电商成交额翻一番</strong></p>\n<p class=\"art_p\">如何助力直播电商经济？方案提出，构建直播电商专业人才体系，将直播电商领域急需紧缺职业列入本市相关人力资源目录，引进一批具有行业引领力、影响力的直播电商专业人才，对符合条件的人才在引进落户、子女教育、证照办理等方面提供保障；支持职业院校与平台企业设置直播电商相关专业课程，鼓励培训机构、行业组织等多方资源联合开发直播电商培训项目。</p>\n<p class=\"art_p\">同时，基于高精度空间计算、人工智能等核心关键技术，构建虚实融合的数字基础设施和视听应用场景，打造“AR试穿”“VR看房、买车、购物”等沉浸式体验数字生活消费新场景，不断完善视听全产业链布局。</p>\n<p class=\"art_p\">方案也敲定了今年和2025年北京数字消费发展的目标。2022年，力争实现全市5G基站新增6000个，千兆光网用户新增10万户，信息内容消费实现收入超过3500亿元，直播电商成交额达到1万亿元，培育或引进10家龙头直播电商专业服务机构。到2025年，信息内容消费实现收入超过5000亿元，直播电商成交额翻一番，力争培育10个具有国际影响力的直播电商平台或直播电商企业，推出30个线上线下融合的直播示范场景，孵化40个网络直播新消费品牌。</p>"
        },
        {
          "title": "自研芯片重新激活苹果Mac电脑 微软Windows摇钱树或受威胁",
          "time": "2022-06-13 08:12:00",
          "src": "新浪科技",
          "category": "finance",
          "pic": "https://n.sinaimg.cn/tech/transform/667/w400h267/20220613/f46b-55fe559fa64ebafd6af8c2efbfc27867.png",
          "url": "https://tech.sina.cn/it/2022-06-13/detail-imizirau8101051.d.html?vt=4&pos=108",
          "weburl": "https://tech.sina.com.cn/it/2022-06-13/doc-imizirau8101051.shtml",
          "content": "<p class=\"art_p\">新浪科技讯 北京时间6月13日早间消息，据报道，近日，苹果公司推出了新款笔记本电脑，搭载新一代M2自研处理器。媒体分析指出，苹果这一产品可能对微软公司利润丰厚的操作系统（Windows）业务带来挑战。</p>\n<p class=\"art_p\">2020年，苹果第一次推出了使用自研处理器“M1”的个人电脑，从那以后，苹果PC业务表现活跃。近日，苹果推出了M2处理器，这款芯片将植入到两款全新笔记本电脑中，即MacBook Air和13英寸屏幕的MacBook Pro。</p>\n<p class=\"art_p\">和M1相比，新款处理器整合的晶体管多出了四分之一，芯片内部数据带宽增加了一半。</p>\n<p class=\"art_p\">科技市场研究公司高德纳的分析师Mikako Kitagawa表示，依靠M2处理器，苹果PC未来会扩大市场份额。</p>\n<p class=\"art_p\">根据高德纳的统计数据，去年，苹果在全球PC市场中的份额为7.9%，而传统的Windows电脑则占据了81.8%的份额。高德纳预测，到2026年，苹果电脑的份额将会增加到10.7%，而Windows电脑的份额将会下降到80.5%。</p>\n<p class=\"art_p\">这位分析师表示，高德纳将会对全球个人电脑市场作出一个全新的预测报告，而苹果的表现要比之前的预测报告更好。报告将会在几个星期后出台。</p>\n<p class=\"art_p\">苹果笔记本电脑曾使用英特尔处理器，不过后来切换到了自有处理器，这一举动重新刺激了苹果电脑业务。去年，苹果首先是在MacBook Air中植入自研处理器，随后在更多型号中陆续采用，比如iMac一体机、盒式电脑Mac Mini、MacBook Pro等，此外还包括一款面向专业机构推出的高性能电脑“Mac Studio”。</p>\n<p class=\"art_p\">和使用英特尔处理器相比，苹果的新款电脑电池续航时间更长久，处理性能更加强大。</p>\n<p class=\"art_p\">苹果PC的销售令人鼓舞。2021财年，苹果电脑业务的总销售额增长了23%，达到350亿美元。而在最新季度（2022财年第二财季）中，苹果电脑销售额增长了14%，在所有苹果硬件业务中增速排名第一。</p>\n<p class=\"art_p\">四月份，苹果首席执行官库克对华尔街分析师表示，虽然公司遭遇了全球供应链紧张，但是采用M1处理器的苹果电脑带来了不可思议的用户反响，导致公司整体收入同比增长了15%。</p>\n<p class=\"art_p\"><strong>对微软的影响</strong></p>\n<p class=\"art_p\">显然，苹果电脑的火爆，对于微软不是好消息。</p>\n<p class=\"art_p\">Windows操作系统授权依然是微软重要业务，微软面向戴尔、惠普、联想集团等厂商提供授权，每年获得不菲收入。</p>\n<div sax-type=\"proxy\" class=\"j_native_ijk220613 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">美国投资银行摩根士丹利公司的分析师Keith Weiss在最近的一份研究报告中指出，操作系统授权业务在微软全部的营收中占到7.5%，在全部的毛利润中占到11%。</p>\n<p class=\"art_p\">微软Windows消费者业务的前任副总裁Brad Brooks表示，随着Windows个人电脑损失市场份额，微软同时损失了一部分操作系统定价能力。</p>\n<p class=\"art_p\">在微软操作系统授权业务中，相当一部分收入来自于企业客户。Brooks介绍说，苹果个人电脑在消费者市场表现优异，而根据他在微软九年的工作经验，个人电脑的消费者市场和企业市场存在很强的相关性。</p>\n<p class=\"art_p\">Brooks表示，一旦企业管理层在家里开始使用新的个人电脑，他们未来在办公环境中很可能也采用这样的电脑。这些管理层本身也能够影响到企业的IT采购决定。</p>\n<p class=\"art_p\">Brooks介绍说，2017年，他开始使用苹果笔记本作为主电脑，以后希望能够更换到一台使用M2处理器的笔记本。另外在Brooks重新创业组建的网络安全公司中，在大约150名员工中，绝大多数使用苹果笔记本作为办公电脑。</p>\n<p class=\"art_p\">相较而言，企业在转向苹果的M1笔记本方面行动迟缓，因为担心传统的企业应用软件不兼容。</p>\n<p class=\"art_p\">不过上述高德纳公司分析师表示，目前，微软、Adobe和其他开发商正在为苹果电脑适配商用软件，这样，苹果电脑在企业市场的普及率会上升。</p>\n<p class=\"art_p\"><strong>低价笔记本的可能性</strong></p>\n<p class=\"art_p\">美国科技市场研究公司“Moor洞察和战略”的首席执行官Patrick Moorhead表示，在电池续航时间和处理性能上，Windows电脑将会逐渐赶上苹果电脑，在电脑处理器研发水平上，AMD和苹果之间的差距，要小于英特尔和苹果之间的差距。</p>\n<p class=\"art_p\">苹果还有其他的商业机会，比如推出低价位个人电脑。莫恒德预测，苹果可能会推出低价位的笔记本MacBook SE，定价800到900美元，明显低于配置M2的MacBook Air（起步价1199美元）。</p>\n<p class=\"art_p\">苹果这一战略可能类似于过去在智能手机的操作，比如苹果曾经推出低价位手机iPhone SE，配置和功能略逊于高价位的旗舰机。</p>\n<p class=\"art_p\">Moorhead表示，如果苹果以较低的价位推出MacBook SE，那么可能给Windows电脑市场带来一场震动。</p>\n<p class=\"art_p\">对于本报道，微软方面尚未发表评论。</p>"
        },
        {
          "title": "谷歌挖走IBM Z System芯片首席架构师，负责下一代处理器设计",
          "time": "2022-06-13 08:44:00",
          "src": "爱集微",
          "category": "finance",
          "pic": "https://n.sinaimg.cn/tech/transform/667/w400h267/20220613/cd72-64ed73a0702cf6cd59348856230e7a77.png",
          "url": "https://tech.sina.cn/it/2022-06-13/detail-imizmscu6511842.d.html?vt=4&pos=108",
          "weburl": "https://tech.sina.com.cn/it/2022-06-13/doc-imizmscu6511842.shtml",
          "content": "<p class=\"art_p\" cms-style=\"font-L\">集微网消息，为了赢得自研芯片的战争，大厂之间的互相挖角已经成了美国科技圈的“潜规则”。历年来，我们看到过不少如英特尔、AMD、苹果、高通以及亚马逊、谷歌、微软以及IBM这些公司之间互相挖角的案例，其目的都是为了在竞争愈发白热化的当下，强化自身在芯片技术领域的基础实力。</p>\n<p class=\"art_p\" cms-style=\"font-L\">6月11日，据中国台湾省媒体mashdigi报道，Google近期挖走了IBM资深工程师Anthony Saporito，预计让其负责下一代处理器产品开发。</p>\n<p class=\"art_p\" cms-style=\"font-L\">从Anthony Saporito个人LinkedIn页面显示，目前其已经在Google担任首席架构师，负责下一代处理器设计，但不确定究竟该处理器会被应用在服务器产品上，还是针对Pixel手机使用需求而设计。</p>\n<p class=\"art_p\" cms-style=\"font-L\">在此之前，Anthony Saporito已经在IBM任职达21年之久，曾是负责IBM Z System芯片的首席架构师，并且曾参与多款Power系列处理器设计，例如IBM在2021年8月推出的以7nm制程打造的Telum人工智能推理加速芯片，就是出自Anthony Saporito之手。</p>\n<p class=\"art_p\" cms-style=\"font-L\">而且，Anthony Saporito个人也持有115项处理器设计相关技术专利，并且具备多年芯片设计经验，因此吸引了谷歌妄图借其技术研发经验和能力打造下一代处理器产品。</p>\n<p class=\"art_p\" cms-style=\"font-L\">除了Anthony Saporito之外，谷歌之前也从Intel挖走了资深工程师Uri Frank和Alex Gruzman，期望借此机会强化自身处理器产品研发设计能力，并且在服务器、手机等计算处理器需求上摆脱依赖供应商的窘境。</p>\n<p class=\"art_p\" cms-style=\"font-L\">目前，谷歌已经在旗下Google Cloud云端服务运算背后扩大导入其自主设计的TPU等计算元件，同时在手机产品端也开始采用自研处理器Tensor，借此实现更高的软硬件融合能力，并且加快整体计算能力的发展。</p>"
        },
        {
          "title": "自查！北京12日通报感染者居住地、工作地、风险点位一图速览",
          "time": "2022-06-13 01:22:00",
          "src": "北京日报",
          "category": "news",
          "pic": "https://n.sinaimg.cn/default/feedbackpics/transform/116/w550h366/20180326/Rr85-fysqfnf9556405.png",
          "url": "https://news.sina.cn/gn/2022-06-13/detail-imizirau8057197.d.html?vt=4&pos=108",
          "weburl": "https://news.sina.com.cn/c/2022-06-13/doc-imizirau8057197.shtml",
          "content": "<p class=\"art_p\">点击下方链接</p>\n<p class=\"art_p\">查询此前公布风险点位</p>\n<div sax-type=\"proxy\" class=\"j_native_ghi220613 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">↓↓↓</p>\n<p style=\"text-align:right;\" class=\"article-editor\">责任编辑：陈琰 SN225</p>"
        },
        {
          "title": "中超-商隐打破僵局埃里克扳平 大连人1-1亚泰",
          "time": "2022-06-12 21:27:00",
          "src": "新浪体育",
          "category": "sports",
          "pic": "https://n.sinaimg.cn/sports/transform/282/w650h432/20220612/162b-bfc6b6c1781ca2a99cc27eb41164302e.jpg",
          "url": "https://sports.sina.cn/china/2022-06-12/detail-imizirau8035183.d.html?vt=4&pos=108",
          "weburl": "https://sports.sina.com.cn/china/j/2022-06-12/doc-imizirau8035183.shtml",
          "content": "<p class=\"art_p\">6月12日晚上19：30，2022年中超联赛第3轮继续进行，长春亚泰迎战大连人。上半场阎相闯助攻商隐破门；下半场埃里克单刀扳平比分。最终双方1-1战平。</p>\n<p class=\"art_p\">前两轮比赛，双方都1胜1平拿到4分。本场比赛，长春方面谭龙携手儒尼奥尔首发，大连人全华班出战，商隐披挂上阵。</p>\n<p class=\"art_p\">第6分钟，大连人长传发动反击，朱挺摆脱防守之后小角度射门被刘伟国扑出底线。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"281\" h=\"156\" src='https://n.sinaimg.cn/sports/transform/437/w281h156/20220612/5dff-9fbef32e34a625dd20d6ccf9371ee8aa.gif' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">第9分钟，大连人打破场上僵局，费煜直传前场，阎相闯摆脱奥克雷的防守横传，商隐禁区爆射破门，大连人1-0领先长春亚泰！</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"281\" h=\"156\" src='https://n.sinaimg.cn/sports/transform/437/w281h156/20220612/0de2-eb5786d210d0de206396fa91bb5ebd1a.gif' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"281\" h=\"156\" src='https://n.sinaimg.cn/sports/transform/437/w281h156/20220612/4478-9cda616eebd1e03b44045876ad1ad1db.gif' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">第59分钟，长春亚泰后场中路长传球，埃里克反越位成功，单刀破门为长春亚泰扳平比分！场上比分1-1平。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"281\" h=\"156\" src='https://n.sinaimg.cn/sports/transform/437/w281h156/20220612/5471-4cd8d6d5127f973408d0192f78bccdd1.gif' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<div sax-type=\"proxy\" class=\"j_native_wxz220612 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">最终双方1-1战平。　</p>\n<p class=\"art_p\">长春亚泰首发：1刘伟国；21崔麒，4奥克雷，31饶伟辉；25王华鹏（46‘，15迪力依米提-土地），11埃里克，32李光文（46’，19廖承坚），20张宇峰（77‘，27张力），16郑致云（84’，24严智宇）；29谭龙（46‘，7迪诺），9儒尼奥尔</p>\n<p class=\"art_p\">大连人首发：1张翀；2林隆昌、14黄嘉辉（U23）、16童磊、22董岩锋（74‘，5吴伟）、8朱挺（56’，20王腾达）、11孙国文、23商隐（56‘，7林良铭）、28费煜、31吕鹏、39阎相闯（83’，15赵健博）</p>\n<p class=\"art_p\">（动感超人）</p>"
        },
        {
          "title": "乔安娜现场宣布退役 张伟丽说乔安娜就是自己",
          "time": "2022-06-12 12:52:00",
          "src": "中国新闻网",
          "category": "news",
          "pic": "https://n.sinaimg.cn/spider20220612/639/w369h270/20220612/8df0-440ef31fbf6c86069d4a73bfd16dca09.jpg",
          "url": "https://news.sina.cn/gn/2022-06-12/detail-imizmscu6405158.d.html?vt=4&pos=108",
          "weburl": "https://news.sina.com.cn/c/2022-06-12/doc-imizmscu6405158.shtml",
          "content": "<p class=\"art_p\">张伟丽KO乔安娜之后，张伟丽在接受采访时说：“这次比赛我特别放松，我在想我跟自己打比赛，乔安娜不是我的对手，她是我自己。我只有战胜自己，才能成为更好的自己。乔安娜则在现场宣布退役。她说：“我今年已经35岁了，我想当一个母亲，我想当一个普通人，我训练了20年，我感谢大家的支持。”</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"369\" h=\"270\" src='https://n.sinaimg.cn/spider20220612/639/w369h270/20220612/8df0-440ef31fbf6c86069d4a73bfd16dca09.jpg' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"405\" h=\"270\" src='https://n.sinaimg.cn/spider20220612/675/w405h270/20220612/4644-30148fedc849b6a247946d301fff259c.jpg' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">来源：中国新闻网</p>"
        },
        {
          "title": "皇马最贵引援排行榜：楚阿梅尼第四   齐祖仍能排第六",
          "time": "2022-06-12 16:44:00",
          "src": "新浪体育讯",
          "category": "sports",
          "pic": "https://n.sinaimg.cn/sports/transform/215/w650h365/20220612/29f8-15f292f380d2da4fdd9f78d114e05447.jpg",
          "url": "https://sports.sina.cn/laliga/realmadrid/2022-06-12/detail-imizmscu6429330.d.html?vt=4&pos=108",
          "weburl": "https://sports.sina.com.cn/g/laliga/2022-06-12/doc-imizmscu6429330.shtml",
          "content": "<p class=\"art_p\">据西班牙《马卡报》报道，即便不考虑奖金条款，楚阿梅尼已经成为皇马历史上第四贵的签约。</p>\n<p class=\"art_p\">只有三名球员在加盟皇马时的价格更昂贵。他们是贝尔（2013年从热刺转会而来）、阿扎尔（切尔西，2019年）和C罗（曼联，2009年）。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"650\" h=\"1266\" src='https://n.sinaimg.cn/sports/transform/316/w650h1266/20220612/8930-bf408ae6f3ae9f731c8da3ca43ac4967.jpg' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">榜单的下一位就是弗洛伦蒂诺最新的签约，皇马为引进楚阿梅尼，至少要支付8000万欧元。合同中还有最高可达2000万欧元的浮动条款。</p>\n<p class=\"art_p\">有趣的是，名单上的下一个也是从摩纳哥俱乐部转会来的，哥伦比亚人J罗在2014年世界杯后以7500万欧元加盟皇马。</p>\n<div sax-type=\"proxy\" class=\"j_native_uvw220612 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">楚阿梅尼也是皇马历史上最昂贵的中场球员，超过了齐达内，2001年皇马为齐达内支付</p>\n<p class=\"art_p\">了7350万欧元，此外2009年引进卡卡花费了6500万欧元。</p>\n<p class=\"art_p\">米利唐是唯一出现在俱乐部最昂贵签约榜前十的后卫，他以5000万欧元从波尔图来到伯纳乌球场。</p>\n<p class=\"art_p\">（塞尔吉奥）</p>"
        },
        {
          "title": "欧国联-斯特林错失空门良机 英格兰平意大利垫底",
          "time": "2022-06-12 04:36:00",
          "src": "新浪体育",
          "category": "sports",
          "pic": "https://n.sinaimg.cn/sports/transform/233/w620h413/20220612/7cff-d6f9fb9cce6f49c899da44f4f7242383.jpg",
          "url": "https://sports.sina.cn/premierleague/england/2022-06-12/detail-imizirau7912074.d.html?vt=4&pos=108",
          "weburl": "https://sports.sina.com.cn/g/pl/2022-06-12/doc-imizirau7912074.shtml",
          "content": "<p class=\"art_p\">北京时间6月12日02:45(英国当地时间11日19:45)，2022/23欧国联A3组第3轮展开争夺，英格兰0比0战平意大利，斯特林错失空门良机。英格兰小组赛半程后垫底。&nbsp;</p>\n<p class=\"art_p\">英格兰轮换7人，仅有芒特、斯特林、莱斯和马奎尔继续首发。意大利则轮换多达9人，仅有唐纳鲁马和佩莱格里尼继续出场。</p>\n<p class=\"art_p\">佩莱格里尼直传，弗拉特西小禁区前低射擦左侧立柱偏出。随后唐纳鲁马紧逼下传球失误，但亚布拉罕断球后小禁区右侧射偏。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"476\" h=\"206\" src='https://n.sinaimg.cn/sports/transform/682/w476h206/20220612/3ca4-d4e9af53e12556b3aaa8bdeeafbc05eb.gif' alt=\"弗拉特西低射擦柱偏出\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">弗拉特西低射擦柱偏出</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"476\" h=\"206\" src='https://n.sinaimg.cn/sports/transform/682/w476h206/20220612/4e49-254165912a6e7e09538fe18b2481de87.gif' alt=\"亚布拉罕射偏\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">亚布拉罕射偏</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">斯特林直传，芒特12码处射门被扑挡后击中横梁。托纳利小禁区前劲射又被拉姆斯戴尔神勇用腿挡出。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"476\" h=\"206\" src='https://n.sinaimg.cn/sports/transform/682/w476h206/20220612/fdfd-465b5d99e530f6d182ff0c150d810f6f.gif' alt=\"芒特打中横梁\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">芒特打中横梁</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"476\" h=\"206\" src='https://n.sinaimg.cn/sports/transform/682/w476h206/20220612/3a73-12d0e16ba785d178626fad3838ebe000.gif' alt=\"拉姆斯戴尔神扑\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">拉姆斯戴尔神扑</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<div sax-type=\"proxy\" class=\"j_native_vwx220612 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">下半场。詹姆斯右路传中，斯特林近距离垫射空门打飞。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"476\" h=\"206\" src='https://n.sinaimg.cn/sports/transform/682/w476h206/20220612/4bb4-b9de4238bc4357e1e4e4f46e4b080f53.gif' alt=\"斯特林错失空门\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">斯特林错失空门</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">英格兰(4-2-3-1)：1-拉姆斯戴尔；2-詹姆斯，5-托莫里(88',格伊)，6-马奎尔，3-特里皮尔；4-莱斯(65',菲利普斯)，8-沃德-普劳斯；10-斯特林(79',萨卡)，11-芒特(65',鲍文)，7-格拉列什；9-亚布拉罕(65',凯恩)</p>\n<p class=\"art_p\">意大利(4-3-3)：1-唐纳鲁马；2-迪洛伦佐，3-加蒂，15-阿切尔比，13-迪马尔科(87',7-弗洛伦齐)；21-弗拉特西，5-洛卡特利(64',11-格诺托)，8-托纳利；12-佩西纳(88',16-克里斯坦特)，9-斯卡马卡(77',22-拉斯帕多里)，10-佩莱格里尼(64',23-埃斯波西托)</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"400\" h=\"409\" src='https://n.sinaimg.cn/sports/transform/9/w400h409/20220612/1fbc-03c11d3bcb55fbe3dc0cf9c79f1576bc.jpg' alt=\"技术统计\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">技术统计</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"650\" h=\"336\" src='https://n.sinaimg.cn/sports/transform/186/w650h336/20220612/9e45-7a1e7a1109884408345acf7529a10d9e.jpg' alt=\"球员评分\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\">球员评分</h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">(斯科)&nbsp;</p>"
        },
        {
          "title": "勇士凯尔特人G4裁判报告:两次漏判 两队各获利",
          "time": "2022-06-12 07:19:00",
          "src": "新浪体育讯",
          "category": "sports",
          "pic": "https://n.sinaimg.cn/sports/transform/662/w650h812/20220612/2213-1b241a97ac2e36abb52f1c363b062100.jpg",
          "url": "https://sports.sina.cn/nba/2022-06-12/detail-imizirau7925924.d.html?vt=4&pos=108",
          "weburl": "https://sports.sina.com.cn/basketball/nba/2022-06-12/doc-imizirau7925924.shtml",
          "content": "<p class=\"art_p\">北京时间6月12日，NBA官方公布了昨日勇士与凯尔特人总决赛第四战的最后两分钟裁判报告，报告显示比赛最后两分钟一共出现2次漏判，两队各获利一次。</p>\n<p class=\"art_p\">首次漏判发生在比赛最后1分36秒，凯尔特人球员杰森-塔图姆走步，裁判漏吹。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"613\" h=\"345\" src='http://f.sinaimg.cn/sports/transform/158/w613h345/20220612/3df8-c8214a70dd8d9f7dd84f493c91f75f8a.gif' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<p class=\"art_p\">第二次漏判发生在比赛最后1分17秒，勇士球员凯文-鲁尼进攻三秒违例，裁判漏吹。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"408\" h=\"230\" src='http://f.sinaimg.cn/sports/transform/638/w408h230/20220612/6fb8-2f2af4d4511d236f9947eb743a628e1a.gif' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<div sax-type=\"proxy\" class=\"j_native_uvw220612 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">最终，勇士107-97战胜凯尔特人，将大比分追至2-2平。</p>\n<p class=\"art_p\">（修楚）</p>"
        },
        {
          "title": "中国信通院：手机号码“一键解绑”服务正处于试运行测试期间，系统功能和性能仍需进一步迭代完善",
          "time": "2022-06-12 07:01:00",
          "src": "IT之家",
          "category": "finance",
          "pic": "https://n.sinaimg.cn/tech/transform/667/w400h267/20220612/71dd-7843ca83d0986bc31265ddf1b6747479.jpg",
          "url": "https://tech.sina.cn/i/gn/2022-06-12/detail-imizmscu6361933.d.html?vt=4&pos=108",
          "weburl": "https://tech.sina.com.cn/i/2022-06-12/doc-imizmscu6361933.shtml",
          "content": "<p class=\"art_p\">IT之家6月12日消息，此前多家媒体报道中国信息通信研究院（以下简称“中国信通院”）旗下“一号通查”微信公众号（已更名为“码号服务平台”）推出了手机号码“一键解绑”功能，然而IT之家测试还无法使用。</p>\n<p class=\"art_p\">今日凌晨，“码号服务平台”微信公众号发表《服务公告》，感谢大家关注“一键解绑”服务，该服务正处于试运行测试期间，系统功能和性能仍需进一步迭代完善。官方表示，将持续对系统进行优化，为广大用户提供更优质的服务。</p>\n\r\n\t\t\t\t\t\t\t\t\t<figure class=\"art_img_mini j_p_gallery\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"art_img_mini_img j_fullppt_cover\"  w=\"630\" h=\"840\" src='https://n.sinaimg.cn/tech/transform/670/w630h840/20220612/e8c2-f7c05ebb91262cee069ec5e51256288e.jpg' alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"art_img_tit\"></h2>\r\n\t\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t\n<div sax-type=\"proxy\" class=\"j_native_stu220612 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">此前中国信通院工作人员称，此项工作由该院“技术与标准研究所”负责，但目前该功能尚处于内测阶段，没有运行也没有对外发布。</p>"
        },
        {
          "title": "曝巴黎已通知波帅下课    他要拿全部的赔偿金",
          "time": "2022-06-12 07:38:00",
          "src": "新浪体育",
          "category": "sports",
          "pic": "https://n.sinaimg.cn/sports/transform/215/w650h365/20220612/b0fb-9094f624268f18dc59fcab3a7fbe31eb.jpg",
          "url": "https://sports.sina.cn/ligue1/2022-06-12/detail-imizirau7928653.d.html?vt=4&pos=108",
          "weburl": "https://sports.sina.com.cn/global/france/2022-06-12/doc-imizirau7928653.shtml",
          "content": "<p class=\"art_p\">法国媒体RMC体育报道，波切蒂诺在巴黎圣日耳曼的时间已经不多了。巴黎已经通知阿根廷教练，下赛季球队不会再让他执教。</p>\n<p class=\"art_p\">自从巴黎在欧冠中被皇马淘汰后，波切蒂诺将下课似乎已经是公开的秘密，他下课的传言已经多次出现了。</p>\n<p class=\"art_p\">此外，姆巴佩的续约也起到了一定的作用，因为波切蒂诺看上去不符合这位前锋的心意。</p>\n<div sax-type=\"proxy\" class=\"j_native_rst220612 box\" style=\"margin:20px 0\"></div><p class=\"art_p\">不过法国媒体报道，波切蒂诺认为，自己在拿到了法甲冠军后被解雇有点冤枉，在遣散费方面，他不想放弃哪怕1欧元。</p>\n<p class=\"art_p\">波切蒂诺想继续留任，并履行到2023年的合同，为此，他不打算让俱乐部轻易终止他的合同。巴黎要解雇他，不得不支付剩下的全部薪水。</p>\n<p class=\"art_p\">（伊万）</p>"
        }
      ]
    }
  },
  "requestId": "b75f26f7c8f148e3affb8d877e98d973"
}

const Preview = ({ previewContent, previewOpened, setPreviewOpened }: { previewContent: any, previewOpened: any, setPreviewOpened: any }) => {
  return (
    <Transition appear show={previewOpened} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setPreviewOpened(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div dangerouslySetInnerHTML={{
                  __html: previewContent
                }} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

const NewsCard = ({ data, setPreviewOpened, setPreviewContent }: { data: any, setPreviewOpened: any, setPreviewContent: any }) => {
  return (
    <>
      <div className="w-100 h-36 flex my-1 text-center rounded-md shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl"
        onClick={() => {
          setPreviewContent(data.content)
          setPreviewOpened(true);
        }}>
        <div className="w-2/5 h-full bg-cover group-hover:opacity-80"
          style={{ backgroundImage: `url(${data.pic})` }}>
        </div>
        <div className="w-3/5 h-full p-3 flex flex-wrap content-between">
          <p className="text-lg text-left font-semibold group-hover:underline">{data.title}</p>
          <div className="w-full text-gray-500 text-right flex justify-between">
            <p>{data.time}</p>
            <p>{data.src}</p>
          </div>
        </div>
      </div>

    </>
  )
}

const GridLayout = ({ newsList, setPreviewOpened, setPreviewContent }: { newsList: any[], setPreviewOpened: any, setPreviewContent: any }) => {
  return (
    <div className="w-full px-20 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {newsList.map((n, idx) => (
        <NewsCard key={idx} data={n} setPreviewOpened={setPreviewOpened} setPreviewContent={setPreviewContent} />
      ))}
    </div>
  )
}

const Home: NextPage<any> = ({ newsList }) => {
  const [previewOpened, setPreviewOpened] = useState(false)
  const [previewContent, setPreviewContent] = useState('')
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GridLayout newsList={newsList} setPreviewOpened={setPreviewOpened} setPreviewContent={setPreviewContent} />
      <Pagination />
      <Preview previewContent={previewContent} previewOpened={previewOpened} setPreviewOpened={setPreviewOpened} />
    </div>
  );
};

export async function getStaticProps() {
  const newsList = await fetch(`https://way.jd.com/jisuapi/get?channel=头条&num=20&start=0&appkey=${process.env.APPKEY}`)
    .then(r => r.json()).then(r => r.result.result.list)
  return { props: { newsList } }
}

export default Home;
