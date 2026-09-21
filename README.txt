NK101 Nepal - второй сайт (nk101.vercel.app), папка public/ = корень деплоя
==========================================================================

Структура
---------
/                          главная (непальский)
/registration/  /apk-download/  /bonus/  /online-slots/  /online-slots/sugar-rush-1000/
/en/ + те же пути          английская версия
/go/index.html             fallback-редирект на реф (meta refresh)
vercel.json                trailingSlash + редирект /go и /go/ на реф + cache/security headers
/assets/site.css  /assets/site.js
/images/                   картинки (список ниже)
/sitemap.xml  /robots.txt  /404.html

Что заменить
------------
1. REF_LINK -> реф-ссылка. Вхождения: vercel.json (2) и go/index.html (3).
   Поиск по проекту: grep -r REF_LINK .
2. Если домен будет не nk101.vercel.app - заменить "https://nk101.vercel.app"
   во всех html (canonical, hreflang, og, JSON-LD), sitemap.xml и robots.txt.

Деплой на Vercel
----------------
Root directory = public (или положить содержимое public в корень репозитория,
vercel.json должен лежать рядом с index.html - он уже внутри public/).

Картинки (пути прописаны в html, alt на языке страницы, одни файлы для NE и EN)
--------------------------------------------------------------------------------
images/logo-nk101.webp                200x62   (шапка, футер; пока нет файла - текст NK101)
images/favicon.png                    32x32
images/icon-180.png                   180x180

Hero 1280x640 (первый экран, og:image):
  images/nk101-home-hero.webp
  images/nk101-registration-hero.webp
  images/nk101-apk-hero.webp
  images/nk101-bonus-hero.webp
  images/nk101-slots-hero.webp
  images/nk101-sugar-rush-1000-hero.webp

В тексте 960x480:
  главная:        nk101-home-lobby.webp, nk101-home-payments.webp, nk101-home-app.webp
  registration:   nk101-registration-form.webp, nk101-registration-sms.webp
  apk-download:   nk101-apk-install.webp, nk101-apk-update.webp
  bonus:          nk101-bonus-ladder.webp, nk101-bonus-lucky-draw.webp
  online-slots:   nk101-slots-lobby.webp, nk101-slots-mobile.webp
  sugar-rush-1000: nk101-sugar-rush-1000-multipliers.webp, nk101-sugar-rush-1000-paytable.webp
