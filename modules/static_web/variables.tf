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

variable "static_web_storage_account_name" {
    #default = "terrastaticwebstorageaccount"
}

variable "static_web_account_tier" {
    #default = "Standard"
}

variable "static_web_account_replication_type" {
    #default = "LRS"
}

variable "static_website_index_document" {
    #default = "index.html"
}

variable "storage_container_static_web_name" {
    #default = "terra-static-website"
}

variable "static_web_container_access_type" {
    #default = "blob"
}

variable "static_web_storage_blob_name" {
    #default = "index.html"
}

variable "static_web_storage_blob_type" {
    #default = "Block"
}

variable "static_web_storage_blob_source" {
    #default = "index.html"
}

variable "cdn_profile_partner_portal_name" {
    #default = "terracdnpartnerprofile"
}

variable "cdn_profile_partner_portal_sku"{
    #default = "Standard_Microsoft"
}

variable "cdn_endpoint_partner_portal_name" {
    #default = "terracdnendpoint"
}

variable "cdn_endpoint_partner_portal_http_port" {
    #default = 80
}

variable "cdn_endpoint_partner_portal_https_port" {
    #default = 443
}