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

variable "static_web_internal_storage_account_name" {
    #default = "tr-static-internalstorage"
}

variable "static_web_internal_account_tier" {
    #default = "Standard"
}

variable "static_web_internal_account_replication_type" {
    #default = "RA-GRS"
}

variable "static_website_internal_index_document" {
    #default = "index.html"
}

variable "storage_container_internal_static_web_name" {
    #default = "tr-static-internal-website"
}

variable "static_web_internal_container_access_type" {
    #default = "blob"
}

variable "static_web_internal_storage_blob_name" {
    #default = "index.html"
}

variable "static_web_internal_storage_blob_type" {
    #default = "Block"
}

variable "static_web_internal_storage_blob_source" {
    #default = "index.html"
}

variable "cdn_profile_internal_portal_name" {
    #default = "terracdninternalprofile"
}

variable "cdn_profile_internal_portal_sku"{
    #default = "Standard_Microsoft"
}

variable "cdn_endpoint_internal_portal_name" {
    #default = "terracdninternalendpoint"
}

variable "cdn_endpoint_internal_portal_http_port" {
    #default = 80
}

variable "cdn_endpoint_internal_portal_https_port" {
    #default = 443
}