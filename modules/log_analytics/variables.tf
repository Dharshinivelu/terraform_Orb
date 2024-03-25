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

variable "log_analytics_workspace_name" {
    #default = "terra-workspace-test"
}

variable "log_analytics_workspace_sku" {
    #default = "PerGB2018"
}

variable "log_analytics_retention_in_days" {
    #default = 30
}

variable "application_insights_name" {
    #default = "terra-test-appinsights"
}

variable "application_insights_type" {
    #default = "web"
}