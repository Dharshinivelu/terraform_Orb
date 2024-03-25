variable "resource_group_name" {
  type        = string
  #default     = "ODL-azure-1178542"
  description = "Resource group name in your Azure subscription."
}

variable "resource_group_location" {
  type        = string
  #default     = "westus"
  description = "Location of the resource group."
}

variable "azurerm_service_plan_asp_webapp_name" {
  #default = "test-asp-webapp-free"
}

variable "app_service_os_type" {
  #default = "Linux"
}

variable "app_service_sku_name" {
  #default = "B2"
}
variable "app_service_name" {
  #default = "terraform-app-service"
}

variable "app_settings_Docker_Registry_server_url" {
  #default = "https://cooeyhub.azurecr.io"
}

variable "app_settings_Docker_Registry_server_username" {
  #default = "cooeyhub"
}

variable "app_settings_Docker_Registry_server_password" {
  #default = "eZxN=IGWBLBCPLVyY3VsFmjeBqqCNO4"
}

variable "app_settings_Docker_Registry_server_storage" {
  #default = "false"
}

variable "app_service_site_config_always_on" {
  #default = "true"
}

variable "app_service_identity_type" {
  #default = "SystemAssigned"
}

variable "subnet_app_service_name" {
  description = "The name of the App Service Plan"
  type        = string
  #default     = "myAppServicePlan"
}

variable "vnet_name" {
  description = "The name of the App Service Plan"
  type        = string
  #default     = "myAppServicePlan"
}

variable "subnet_app_service_add_prefixes" {
  #default     = ["10.0.1.0/24"]
}

variable "subnet_app_service_endpoints" {
  #default     = ["Microsoft.Web"]
}