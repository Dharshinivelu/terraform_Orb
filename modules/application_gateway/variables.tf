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

variable "public_ip_name" {
    #default = "example-public-ip"
}

variable "allocation_method" {
    #default = "Dynamic"
}

variable "app_gateway_name" {
    #default = "example-app-gateway"
}

variable "app_sku_name" {
  #default = "Satandard_Medium"
}

variable "app_sku_tier" {
  #default = "Standard"
}

variable "app_capacity" {
  #default = 2
}

variable "ip_config_name" {
  #default = "example-ip-configuration"
}

variable "frontend_port" {
  #default = 80
}

variable "http_listener_protocol" {
  #default = "Http"
}

variable "request_routing_rule_priority" {
  #default = 9
}
variable "request_routing_rule_type" {
  #default = "Basic"
}

variable "cookie_based_affinity" {
  #default ="Disabled"
}

variable "backend_http_setting_port" {
  #default = 3000
}

variable "backend_http_setting_protocol" {
  #default = "Http"
}

variable "vnet_name" {
}

variable "aks_subnet_address_name"{

}