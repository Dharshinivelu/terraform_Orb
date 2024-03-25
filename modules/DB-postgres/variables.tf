variable "resource_group_name" {
  type        = string
  #default     = "cooey-terraform-rg"
  description = "Resource group name in your Azure subscription."
}

variable "resource_group_location" {
  type        = string
  #default     = "East US"
  description = "Location of the resource group."
}

variable "subnet_postgres_name" {
  #default = "internal"
}

variable "subnet_postgres_add_prefixes" {
  #default = ["10.7.29.0/29"]
}

variable "subnet_postgres_service_endpoints" {
  #default = ["Microsoft.Sql"]
}

variable "postgresql_server_name" {
  description = "The name of the PostgreSQL server."
  type        = string
  #default     = "your-postgresql-server"
}

variable "version1" {
  #default = "9.5"
}

variable "administrator_login" {
  description = "The administrator username for the PostgreSQL server."
  type        = string
  #default     = "youradminuser"
}

variable "administrator_login_password" {
  description = "The administrator password for the PostgreSQL server."
  type        = string
  #default     = "youradminpassword"
}

variable "sku_name1" {
  #default= "B_Gen5_1"
  
}
variable "ssl_minimal_tls_version_enforce" {
  #default = "TLSEnforcementDisabled"
}

variable "database_name" {
  description = "The name of the initial database to be created on the PostgreSQL server."
  type        = string
  #default     = "yourdatabase"
}

variable "charset" {
  #default = "UTF8"
}

variable "collation" {
  #default = "English_United States.1252"
}

variable "postgres_vn_name" {
  #default = "AllowAllWindowsAzureIps"
}

variable "postgres_ignore_missing_vnet_service_endpoint" {
  #default = true
}

variable "vnet_name" {
  type        = string
  description = "Virtual Network Name"
}