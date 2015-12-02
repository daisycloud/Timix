
/**
 * Created by yyzeng on 2015/12/2.
 */

db.users.insert({});

var document = {
    "id":1,
    "name":"李娜",
    "gender":"女",
    "title":"图书管理员", /**/
    "funs":129,/* 被关注*/
    "teaches":12, /* 教学次数 */
    "profile":"读书20年,管理图书5年,滑雪3年,获得年度大奖,爱自由,爱浪漫,爱看书。希望平淡生活。",/* 个人介绍 */
    "photoes":[
        "images/",
        "http://img5.imgtn.bdimg.com/it/u=4003147391,1707536062&fm=23&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=1543828037,912922514&fm=23&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=46004567,2525458621&fm=23&gp=0.jpg"],/* 个人相册 */
    "certificate":{"荣誉证书":""}, /* 证书 */
    "course":[
        {
            "skill":"摄影",/*技能分类*/
            "lessons":[
                        {"topic":"双板滑雪入门",
                            "date":"待定",
                            "hour":"3h",
                            "traffic":"人民广场集合",
                            "remart":"门票自理。",
                            "status":"1"/*status 0:取消 1:未开课 2:结束*/,
                            "comments":{}/* 评价 */,
                            "students":[1,3] /*报名学员ID*/
                        },
                {"topic":"自制黑巧克力",
                    "date":"待定",
                    "hour":"3h",
                    "traffic":"人民广场集合",
                    "remart":"提供材料。",
                    "status":"1"/*status 0:取消 1:未开课 2:结束*/,
                    "comments":{}/* 评价 */,
                    "students":[2] /*报名学员ID*/
                }
            ]

        },
        {}
    ]

}