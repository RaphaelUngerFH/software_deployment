# Lab 4
Lab 4 includes the configuration of a local AKS with [Minikube](https://minikube.sigs.k8s.io/docs/) and the configuration as well as the deployment of Worpress and MySLQ in a AKS cluster.

TODO URL & Screenshots of Cluster

## Configuration
Wordpress and MySQL are configured in the corresponding YAML-files called *mysql-deployment.yml* and *wordpress-deployment.yml*.

## Deployment Steps
After installation, [Minikube](https://minikube.sigs.k8s.io/docs/) needs to be started for a local AKS cluster with the following command:

```
minikube start
```

After that a namespace called "lab4" is created like this:
```
kubectl create namespace lab4
```

This namespace is necessary as it is configured in the *mysql-deployment.yml* and *wordpress-deployment.yml* configuration.

In order to apply both configurations, the following commands need to be executed:
```
kubectl apply -f mysql-deployment.yml
kubectl apply -f wordpress-deployment.yml
```

Checking can be done by getting the pods/services:
```
kubectl get pods --namespace lab4
kubectl get services --namespace lab4
```

Additionally the logs can be fetched like this:
```
kubectl logs <pod-name> --namespace lab4
```