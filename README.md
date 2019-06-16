# VScode 配置
```
{
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true
    },
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.DS_Store": true,
        "**/node_modules": true,
        "**/iOS": true
    }
}
```

# docker

```
sudo mkdir /usr/share/nginx/html
docker build -t nick/nginx .
docker run --name nick-nginx -d -p 80:80 nick/nginx
```
