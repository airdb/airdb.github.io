# Kubernetes Ingress with Nginx Example

[refer](https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-ingress-guide-nginx-example.html)

## How to Use Nginx Ingress Controller

### Installation Guide

1. Start by creating the “mandatory” resources for Nginx Ingress in your cluster.

`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml`

gg

2. Then, enable the ingress add-on for Minikube.

`minikube addons enable ingress`

3. Check that it’s all set up correctly.

`kubectl get pods --all-namespaces  | grep ingress-nginx`


## Create the resources & the Ingress in the cluster

[example code](https://github.com/airdb/docker/tree/master/kube/ingress-example)

```
kubectl apply -f apple.yaml
kubectl apply -f banana.yaml

kubectl create -f ingress.yaml
```

## Test

$ curl -kL http://$(minikube ip)/apple
apple

$curl -kL http://$(minikube ip)/banana
banana

$curl -kL http://$(minikube ip)/apple
default backend - 404


## Summary

A Kubernetes Ingress is a robust way to expose your services outside the cluster. It lets you consolidate your routing rules to a single resource, and gives you powerful options for configuring these rules.
