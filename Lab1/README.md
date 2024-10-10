# Lab 1
The first lab includes the creation of an ARM template, which creates an Azure Storage Account (free) and an Azure web application for Node.js (free). The template should be configurable with parameters.
## Setup
In order to work with ARM templates, the [Azure Resource Manager tools extension](https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools) was used combined with the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/).

### Configuration
The *storageAccountName*, *location* and *webAppName* can be configured in the *azuredeploy.parameters.json* file.

The Azure Storage Account resource is configured by the values of the *storageAccountName* and *location* parameters. In order to deploy the free tier, the *sku* property was changed to *Standard_LRS*.

The Azure Web-App configuration consists of an app service plan and the actual configuration for the web application. The service plan makes sure that the web application uses the free tier by assigning a variable called *freeServicePlanName* with the name of the service plan and accessing it in the web application resource. The web application resource uses the value of this variable as a service plan and the value of the *webAppName* parameter as the name of the web application.

### Create a resource group
When deploying a template, a resource group can be defined, which contains the resources. For the creation of a resource group its *name* and *location* are required.

`az group create --name Lab1 --location switzerlandnorth`

### Deploy the template
After the resource group was created, the template can be deployed with the following command. The resource needs to have a *name* and be in an already existing *resource-group*. The *template-file* parameter defines the file in which the ARM-template is defined and the *parameters* parameter, the file in which the parameters for the ARM-template are included.

`az deployment group create --name Lab1 --resource-group Lab1 --template-file azuredeploy.json --parameters @azuredeploy.parameters.json`