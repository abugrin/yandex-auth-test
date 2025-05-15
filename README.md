
Пример входа на сайт с использованием Яндекс ID
https://yandex.ru/dev/id/doc/ru/how-to

Используется
https://nextjs.org/
https://authjs.dev/getting-started/providers/yandex

Добавьте в корень `.env` или `.env.local` файл со следующими данными

```
AUTH_YANDEX_ID=application_client_id
AUTH_YANDEX_SECRET=application_secret
TOKEN=yandex_360_api_token //optional
ORGID=organization_id //optional

AUTH_SECRET=random_string
```