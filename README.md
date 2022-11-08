## powfit - dashboard frontend app

### Required installations

- Python 2/3
- Node.JS 14+

---

### Tested on

- macOS 11+
- Linux 5.6+

---

### Nginx config file:

```nginx
server {
  server_name powfit.com;
  listen 80 default_server;
  charset utf-8;

  location ~ (?<no_slash>.+)/$ {
    return 307 $scheme://$host$no_slash;
  }

  location \.(?:ico|css|js|gif|jpe?g|png|woff|woff2)$ {
    gzip_static on;
    expires 30d;
    add_header Vary Accept-Encoding;
    add_header Cache-Control max-age=3156000;
    access_log off;
  }

  root /var/www/frontend/.release;
  index index.html;

  error_page 404 /index.html;
  location / {
    try_files $uri $uri/ /index.html;
  }

  location = /favicon.ico {
    access_log off;
    log_not_found off;
  }

  location = /robots.txt {
    access_log off;
    log_not_found off;
  }
}
```

---

### Build SSH Key (if not created)

To generate SSH keys:

```bash
ssh-keygen -f ~/.ssh/powfit_rsa -b 4096 -t rsa -q -N ""
```

To get public key:

```bash
cat ~/.ssh/powfit_rsa.pub
```
