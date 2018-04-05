function handleTopNavAnimation() {
  $(window).scrollTop() > 10 ? $("#site-nav").addClass("navbar-solid") : $("#site-nav").removeClass("navbar-solid")
}
$(window).scroll(function () {
  handleTopNavAnimation()
}), $(window).load(function () {
  handleTopNavAnimation()
}), smoothScroll.init();
var config = {
  apiKey: "AIzaSyBsSK5PakPF3As3JN0E3Wm27VUsnGc7srw",
  authDomain: "statnlp-ws.firebaseapp.com",
  databaseURL: "https://statnlp-ws.firebaseio.com",
  projectId: "statnlp-ws",
  storageBucket: "",
  messagingSenderId: "591724988616"
};
firebase.initializeApp(config);
var database = firebase.database();

function writeUserData(e, a, t, i, o, s) {
  firebase.database().ref("users/" + guid()).set({
    firstName: e,
    affiliation: a,
    email: t,
    role: i,
    customRole: o,
    agree: s
  }), window.location.replace("/?register=success")
}

function getURLParameter(e) {
  for (var a = window.location.search.substring(1).split("&"), t = 0; t < a.length; t++) {
    var i = a[t].split("=");
    if (i[0] == e) return i[1]
  }
}

function guid() {
  return Date.now()
}
$(document).ready(function () {
  "success" === getURLParameter("register") && ($("#m-title").text("REGISTRATION SUCCESSFUL!"), $(".m-btn-register").hide(), $("#registration-form").hide()), $("#registration-form").submit(function (e) {
    e.preventDefault(), writeUserData($("#fname").val(), $("#affiliation").val(), $("#email").val(), $("#role").val(), $("#customRole").val(), $("#agree").val())
  }), $("#role").on("change", function () {
    "other" === $(this).val() ? ($("#formCustomRole").show(), $("#customRole").attr("required", !0)) : ($("#formCustomRole").hide(), $("#customRole").attr("required", !1))
  })
}), smoothScroll.init();
