/* iNeed – Sprachauswahl der Webseite (Deutsch, Englisch, Japanisch, Chinesisch vereinfacht und traditionell).
 * Die Sprache kommt aus ?lang=…, der letzten Auswahl (localStorage) oder der Browser-Sprache; sonst Englisch.
 * Ohne JavaScript bleiben alle Sprachen untereinander sichtbar. */
(function () {
  var LANGS = [["de", "Deutsch"], ["en", "English"], ["ja", "日本語"], ["zh-Hans", "简体中文"], ["zh-Hant", "繁體中文"]];
  var CODES = LANGS.map(function (l) { return l[0]; });
  var STRINGS = {
 "home": {
  "de": "Start",
  "en": "Home",
  "ja": "ホーム",
  "zh-Hans": "首页",
  "zh-Hant": "首頁"
 },
 "privacy": {
  "de": "Datenschutz",
  "en": "Privacy Policy",
  "ja": "プライバシーポリシー",
  "zh-Hans": "隐私政策",
  "zh-Hant": "隱私權政策"
 },
 "terms": {
  "de": "Nutzungsbedingungen",
  "en": "Terms of Use",
  "ja": "利用規約",
  "zh-Hans": "使用条款",
  "zh-Hant": "使用條款"
 },
 "impressum": {
  "de": "Impressum",
  "en": "Legal notice",
  "ja": "運営者情報",
  "zh-Hans": "法律声明",
  "zh-Hant": "法律聲明"
 },
 "childsafety": {
  "de": "Kinderschutz",
  "en": "Child safety",
  "ja": "児童の安全",
  "zh-Hans": "儿童安全",
  "zh-Hant": "兒童安全"
 },
 "contact": {
  "de": "Kontakt",
  "en": "Contact",
  "ja": "お問い合わせ",
  "zh-Hans": "联系方式",
  "zh-Hant": "聯絡方式"
 },
 "slogan": {
  "de": "Wenn du den Kapitalismus hasst, wirst du das hier lieben.",
  "en": "If you hate Capitalism, then you will love this.",
  "ja": "資本主義が嫌いなら、きっとこのアプリが気に入ります。",
  "zh-Hans": "如果你讨厌资本主义，那你一定会爱上这个。",
  "zh-Hant": "如果你討厭資本主義，那你一定會愛上這個。"
 },
 "rp_title": {
  "de": "Neues Passwort festlegen",
  "en": "Set a new password",
  "ja": "新しいパスワードの設定",
  "zh-Hans": "设置新密码",
  "zh-Hant": "設定新密碼"
 },
 "rp_sub": {
  "de": "Wähle ein neues Passwort für dein iNeed-Konto.",
  "en": "Choose a new password for your iNeed account.",
  "ja": "iNeedアカウントの新しいパスワードを選んでください。",
  "zh-Hans": "请为你的 iNeed 账号选择一个新密码。",
  "zh-Hant": "請為你的 iNeed 帳號選擇一個新密碼。"
 },
 "rp_pw": {
  "de": "Neues Passwort",
  "en": "New password",
  "ja": "新しいパスワード",
  "zh-Hans": "新密码",
  "zh-Hant": "新密碼"
 },
 "rp_pw2": {
  "de": "Wiederholen",
  "en": "Repeat",
  "ja": "もう一度入力",
  "zh-Hans": "再次输入",
  "zh-Hant": "再次輸入"
 },
 "rp_save": {
  "de": "Passwort speichern",
  "en": "Save password",
  "ja": "パスワードを保存",
  "zh-Hans": "保存密码",
  "zh-Hant": "儲存密碼"
 },
 "rp_note": {
  "de": "Du hast diese Seite über einen Link in einer E-Mail von iNeed geöffnet. Falls du kein neues Passwort angefordert hast, kannst du sie schließen.",
  "en": "You opened this page from an iNeed email link. If you did not request a new password, you can close it.",
  "ja": "このページは、iNeedからのメールのリンクから開かれました。新しいパスワードをリクエストしていない場合は、このページを閉じてください。",
  "zh-Hans": "你是通过 iNeed 邮件中的链接打开此页面的。如果你没有申请新密码，可以直接关闭此页面。",
  "zh-Hant": "你是透過 iNeed 郵件中的連結開啟此頁面的。如果你沒有申請新密碼，可以直接關閉此頁面。"
 },
 "rp_invalid": {
  "de": "Dieser Link ist ungültig. Fordere in der App unter „Passwort vergessen?“ einen neuen an.",
  "en": "This link is invalid. Request a new one in the app under “Forgot password?”.",
  "ja": "このリンクは無効です。アプリの「パスワードを忘れた場合」から新しいリンクをリクエストしてください。",
  "zh-Hans": "此链接无效。请在应用中的“忘记密码？”处重新申请。",
  "zh-Hant": "此連結無效。請在App中的「忘記密碼？」處重新申請。"
 },
 "rp_expired": {
  "de": "Der Link ist abgelaufen oder wurde schon benutzt. Fordere in der App einen neuen an.",
  "en": "The link has expired or was already used. Request a new one in the app.",
  "ja": "リンクの有効期限が切れているか、すでに使用されています。アプリで新しいリンクをリクエストしてください。",
  "zh-Hans": "链接已过期或已被使用。请在应用中重新申请。",
  "zh-Hant": "連結已過期或已被使用。請在App中重新申請。"
 },
 "rp_minlen": {
  "de": "Mindestens 6 Zeichen.",
  "en": "At least 6 characters.",
  "ja": "6文字以上で入力してください。",
  "zh-Hans": "至少 6 个字符。",
  "zh-Hant": "至少 6 個字元。"
 },
 "rp_mismatch": {
  "de": "Die Passwörter stimmen nicht überein.",
  "en": "The passwords do not match.",
  "ja": "パスワードが一致しません。",
  "zh-Hans": "两次输入的密码不一致。",
  "zh-Hant": "兩次輸入的密碼不一致。"
 },
 "rp_failed": {
  "de": "Das Passwort konnte nicht gespeichert werden:",
  "en": "The password could not be saved:",
  "ja": "パスワードを保存できませんでした：",
  "zh-Hans": "无法保存密码：",
  "zh-Hant": "無法儲存密碼："
 },
 "rp_saved": {
  "de": "Passwort gespeichert. Du kannst dich jetzt in der App anmelden.",
  "en": "Password saved. You can now sign in in the app.",
  "ja": "パスワードを保存しました。アプリでログインできます。",
  "zh-Hans": "密码已保存。你现在可以在应用中登录了。",
  "zh-Hant": "密碼已儲存。你現在可以在App中登入了。"
 }
};

  function fromBrowser() {
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    for (var i = 0; i < list.length; i++) {
      var l = String(list[i]).toLowerCase();
      if (l.indexOf("de") === 0) return "de";
      if (l.indexOf("ja") === 0) return "ja";
      if (l.indexOf("zh") === 0) {
        return (l.indexOf("hant") > -1 || l.indexOf("-tw") > -1 || l.indexOf("-hk") > -1 || l.indexOf("-mo") > -1) ? "zh-Hant" : "zh-Hans";
      }
      if (l.indexOf("en") === 0) return "en";
    }
    return "en";
  }

  function detect() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && CODES.indexOf(q) > -1) return q;
    try { var s = localStorage.getItem("ineed-lang"); if (s && CODES.indexOf(s) > -1) return s; } catch (e) {}
    var h = location.hash.replace("#", "");
    if (CODES.indexOf(h) > -1) return h;
    return fromBrowser();
  }

  var current = detect();
  function t(key) { var e = STRINGS[key]; return e ? (e[current] || e.en) : key; }
  window.iNeedT = t;
  window.iNeedLang = function () { return current; };

  function footer() {
    document.querySelectorAll("footer.site-footer").forEach(function (f) {
      var cur = f.getAttribute("data-current");
      var items = [["index.html", "home"], ["privacy.html", "privacy"], ["terms.html", "terms"], ["impressum.html", "impressum"], ["child-safety.html", "childsafety"]];
      f.innerHTML = items.map(function (it) {
        return it[0] === cur ? '<span aria-current="page">' + t(it[1]) + "</span>" : '<a href="' + it[0] + '">' + t(it[1]) + "</a>";
      }).join("\n");
    });
  }

  function apply(lang, remember) {
    current = lang;
    document.documentElement.lang = lang;
    document.documentElement.classList.add("js");
    document.querySelectorAll("section[data-lang]").forEach(function (s) {
      s.classList.toggle("active", s.getAttribute("data-lang") === lang);
    });
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-lang-link]").forEach(function (a) {
      a.classList.toggle("current", a.getAttribute("data-lang-link") === lang);
    });
    footer();
    if (remember) { try { localStorage.setItem("ineed-lang", lang); } catch (e) {} }
    if (typeof window.onINeedLang === "function") window.onINeedLang(lang);
  }

  function buildSwitch() {
    document.querySelectorAll("nav.lang-switch").forEach(function (n) {
      n.innerHTML = LANGS.map(function (l) {
        return '<a href="?lang=' + l[0] + '" data-lang-link="' + l[0] + '" hreflang="' + l[0] + '">' + l[1] + "</a>";
      }).join(" · ");
      n.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function (ev) { ev.preventDefault(); apply(a.getAttribute("data-lang-link"), true); window.scrollTo(0, 0); });
      });
    });
  }

  function init() { buildSwitch(); apply(detect(), false); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
