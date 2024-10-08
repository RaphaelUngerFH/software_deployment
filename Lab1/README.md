# Lab 1
The first lab includes the creation of an ARM template, which creates an Azure Storage Account (free) and an Azure web application for Node.js (free). The template should be configurable with parameters.
## Setup
In order to work with ARM templates, the [Azure Resource Manager tools extension](https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools) was used combined with the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/).

### Create a resource group
When deploying a template, a resource group can be defined, which contains the resources.

`az group create --name Lab1 --location switzerlandnorth`

### Deploy the template
After the resource group was created, the template can be deployed with the following command.

`az deployment group create --name Lab1 --resource-group Lab1 --template-file azuredeploy.json`