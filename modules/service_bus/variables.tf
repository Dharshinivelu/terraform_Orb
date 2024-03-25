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

variable "servicebus_namespace_name" {
    #default = "terra-servicebus-namespace"
}

variable "servicebus_namespace_sku" {
    #default = "Standard"
}

variable "servicebus_tags_source" {
    #default = "terraform"
}

variable "servicebus_topic_name" {
    #default = "terra_servicebus_topic"
}

variable "servicebus_topic_enable_partioning" {
    #default = true
}

variable "servicebus_queue_name" {
    #default = "terra_servicebus_queue"
}

variable "servicebus_queue_enable_partioning" {
    #default = true
}