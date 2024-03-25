variable "resource_group_name" {
  type        = string
  description = "Resource group name in your Azure subscription."
}

variable "resource_group_location" {
  type        = string
  #default     = "westus"
  description = "Location of the resource group."
}

variable "storage_account_name" {
  description = "The name of the storage account."
  type        = string
  #default     = "terracooeystorage"
}

variable "account_tier" {
    #default = "Standard"
}

variable "acc_replication_type" {
    #default = "LRS"
}

variable "storage_container_name" {
    #default = "terracontainer"
}

variable "storage_container_access_type" {
    #default = "private"
}

variable "storage_blob_name" {
    #default = "terrablob"
}

variable "storage_blob_type" {
    #default = "Block"
}