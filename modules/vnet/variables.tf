variable "vnet_name" {
}

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

variable "location" {
  type        = string
  description = "Location of Resources"
}

variable "network_address_space" {
}
 
variable "aks_subnet_address_prefix" {
}
 
variable "aks_subnet_address_name" {
}
 
variable "vnet_environment" {
}