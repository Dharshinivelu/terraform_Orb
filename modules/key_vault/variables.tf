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

variable "key_vault_name" {
    #default = "terra-key-vault"

}

variable "enabled_for_deployment" {
    #default = true
}

variable "enabled_for_disk_encryption" {
    #default = true
}

variable "enabled_for_template_deployment" {
    #default = true
}

variable "key_vault_tenant_id" {
    #default = "97a9951e-743b-46eb-909b-b2a055d6309a"
}

variable "key_vault_sku_name" {
    #default = "standard"
}

variable "key_vault_object_id" {
    #default = "e9de843d-148b-4f49-8201-a2f15c163b79"
}