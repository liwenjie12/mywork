window.onload=function () {
    var suning = new lunbo("suning", "suningPre", "suningNext");
    var suningBox = {
        width: "830px",
        height: "482px",
        border: "1px solid red"
    };
    var suningButton = {
        width: "34px",
        height: "64px",
        backgroundColor: "rgba(68,68,68,0.5)",
        lineHeight: "64px",
        fontSize: "30px",
        fontWeight: "bold"
    };
    var suningList = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
    };
    suning.css(suningBox, suningButton, {}, suningList).time(2000);
    var jd = new lunbo("jd", "jdPre", "jdNext");
    var jdBox = {
        width: "590px",
        height: "470px",
        border: "1px solid red"
    };
    var jdButton = {
        width: "24px",
        height: "40px",
        color: "rgba(255,255,255,0.6)",
        backgroundColor: "rgba(0,0,0,0.4)",
        lineHeight: "40px",
        fontWeight: "600",
        fontSize: "20px"
    };
    var jdUl = {
        left: "10%",
        top: "90%",
        transform: "translateX(0%)",
        msTransform: "translateX(0%)"
    };
    var jdList = {
        width: "8px",
        height: "8px",
        border: "2px solid rgba(255,255,255,0.5)",
        borderRadius: "50%",
        marginRight: "5px",
    };
    jd.css(jdBox, jdButton, jdUl, jdList).time(2000);
    var iqiyi = new lunbo("iqiyi", "iqiyiPre", "iqiyiNext");
    var iqiyiBox = {
        width: "850px",
        height: "260px"
    };
    var iqiyiUl = {
        width: "300px",
        height: "260px",
        bottom: "0%",
        left: "100%",
        transform: "translateX(-100%)",
        msTransform:"translateX(-100%)",
        boxSizing: "border-box"
    }
    var iqiyiList = {
        display: "block",
        margin: "0px",
        height: "55px",
        lineHeight: "55px",
        padding: "5px 30px",
        color: "#ddd"
    }
    iqiyi.css(iqiyiBox, {}, iqiyiUl, iqiyiList).time(2000);
}