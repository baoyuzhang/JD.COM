/*! 浜笢鍟嗗煄 jimi 2017-06-30 11:01 */
var CED_Loader = function(win) {
    function getRoot() {
        return conf.root + conf.projectName + "/"
    }
    function importJs(src, itemId) {
        document.write(jsTemplate.replace("${src}", src + "?" + conf.buildTime).replace("${itemid}", itemId))
    }
    function importCss(src, itemId) {
        document.write(cssTemplate.replace("${href}", src + "?" + conf.buildTime).replace("${itemid}", itemId))
    }
    function importSourceJs(fileName) {
        for (var source = conf.js.list[fileName], i = 0; i < source.length; i++) importJs(getRoot() + conf.js.folder + source[i], fileName)
    }
    function importSourceCss(fileName) {
        for (var source = conf.css.list[fileName], i = 0; i < source.length; i++) importCss(getRoot() + conf.css.folder + source[i])
    }
    var conf = {
            root: "//static.360buyimg.com/",
            projectName: "jimi",
            buildPath: "dist/v20130801/",
            js: {
                folder: "js/",
                list: {
                    "1.js": ["part1.js", "part2.js"]
                }
            },
            css: {
                folder: "skin/",
                list: {
                    "1.css": ["part1.css", "part2.css"]
                }
            }
        },
        jsTemplate = '<script src="${src}" charset="utf-8" type="text/javascript" itemid="${itemid}"></script>',
        cssTemplate = '<link rel="stylesheet" type="text/css" href="${href}">';
    return {
        setConf: function(data) {
            conf = data
        },
        addJs: function(fileName) {
            0 == conf.loadMode ? importSourceJs(fileName) : importJs(getRoot() + conf.buildPath + fileName, fileName)
        },
        addCss: function(fileName) {
            0 == conf.loadMode ? importSourceCss(fileName) : importCss(getRoot() + conf.buildPath + fileName, fileName)
        }
    }
}(window);
CED_Loader.setConf({
    loadMode: 1,
    root: "//static.360buyimg.com/",
    projectName: "jimi",
    buildPath: "dist/v20170630/",
    isTesting: !1,
    js: {
        folder: "js/",
        list: {
            "ued.framework-min.js": ["lib/jquery-1.7.2.min.js", "lib/underscore-min.js", "lib/package.js", "lib/panda.js"],
            "ued.plugin-min.js": ["lib/jquery.tmpl.js", "lib/jquery.cookie.js", "lib/jquery.utils.js", "lib/icheck.min.js", "lib/lightbox.js", "lib/ua-parser.min.js", "lib/nanoScroller.js", "lib/swfobject.min.js", "lib/swfupload.js", "lib/handlers.js", "lib/fileprogress.js", "lib/Class.js", "lib/jquery.swipebox.js"],
            "ued.jimi.index-min.js": ["base.js", "v.shortcut.Dispatching.js", "v.follow.js", "v.login.js", "v.invite.js", "v.chatHelper.js", "v.myspace.js", "v.close.js", "v.adjustView.js", "v.openflashchart.js", "v.sidebar.js", "v.answerHandle.js", "v.myjimi.js", "v.myjimi.adopt.js", "v.myjimi.service.js", "v.myjimi.task.js", "v.myjimi.skill.js", "v.animate.js", "v.manual.js", "v.teach.js", "v.statistic.js", "answerFeedback.js", "AnswerFactory.js", "ActiveCarePush.js", "productConsult.js", "index.js", "jimi.chat.js", "v.componentAnswer.js", "componentFactory.js", "scene.js", "v.socket.js"],
            "ued.jimi.helpcenter-min.js": ["embed.helpcenter.js"],
            "ued.jimi.jshop-min.js": ["embed.jshop.js"],
            "ued.jimi.jdhome-min.js": ["embed.jdhome.js"],
            "ued.jimi.zhaopin-min.js": ["embed.zhaopin.js"]
        }
    },
    css: {
        folder: "skin/",
        list: {
            "ued.jimi.default-min.css": ["common/jimi-revision.css", "common/nanoscroller.css", "common/return.css", "common/swipebox.css", "shopping/shopping.css", "orderlist.css", "tracking.css", "ordreinfo.css", "goodsquery.css", "dispatching.css", "panda.district.css", "jimi.optimize.css", "productproperty.css", "game/myjimi.css", "component.css", "interaction.css", "model.css", "goldbars.css"],
            "ued.jimi.embed-min.css": ["embed/index.css", "common/jimi-revision.css", "common/nanoscroller.css", "interaction.css"]
        }
    },
    htmlmin: {
        files: {
            "js/tmpl.orderlist.js": "tmpl/orderlist.html",
            "js/tmpl.orderinfo.js": "tmpl/orderinfo.html",
            "js/tmpl.ordertrack.js": "tmpl/tracking.html",
            "js/tmpl.dispatching.js": "tmpl/dispatching.html",
            "js/tmpl.goodsquery.js": "tmpl/goodsquery.html",
            "js/tmpl.buyconsult.js": "tmpl/buyconsult.html",
            "js/tmpl.productinfo.js": "tmpl/productinfo.html",
            "js/tmpl.productservice.js": "tmpl/productservice.html",
            "js/tmpl.withsugguestions.js": "tmpl/withsugguestions.html",
            "js/tmpl.productproperty.js": "tmpl/productproperty.html",
            "js/tmpl.productrecommendlist.js": "tmpl/productrecommendlist.html",
            "js/tmpl.chatanswer.js": "tmpl/chatanswer.html",
            "js/tmpl.chathelper.js": "tmpl/chathelper.html",
            "js/tmpl.myspace.js": "tmpl/myspace.html",
            "js/tmpl.plaintext.js": "tmpl/plaintext.html",
            "js/tmpl.foldanswer.js": "tmpl/foldanswer.html",
            "js/tmpl.userfeedback.js": "tmpl/userfeedback.html",
            "js/tmpl.productdata.js": "tmpl/productdata.html",
            "js/tmpl.myjimi.intro.js": "tmpl/myjimi.intro.html",
            "js/tmpl.myjimi.adopt.js": "tmpl/myjimi.adopt.html",
            "js/tmpl.myjimi.index.js": "tmpl/myjimi.index.html",
            "js/tmpl.prefaq.js": "tmpl/prefaq.html"
        }
    },
    buildTime: 1498791705757
});