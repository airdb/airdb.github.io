# Helm V3 Installation

## Requirements
helm repo add stable https://kubernetes-charts.storage.googleapis.com


## install Mysql

[mysql](https://8gwifi.org/docs/kube-mysql.jsp)

```
helm install mysql --set mysqlRootPassword=secret stable/mysql
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace default mysql -o jsonpath="{.data.mysql-root-password}" | base64 --decode; echo)
kubectl port-forward svc/mysql 3306
```

