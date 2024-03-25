#creating modules
variable "create_vpc_components" {
  type    = bool
  default = true
}

variable "create_DB-postgres" {
  type    = bool
  default = true
}

variable "create_app_service" {
  type    = bool
  default = true
}

variable "create_bolb_storage" {
  type    = bool
  default = true
}

variable "create_static_web" {
  type    = bool
  default = true
}

variable "create_key_vault" {
  type    = bool
  default = true
}

variable "create_static_service_bus" {
  type    = bool
  default = true
}

variable "create_log_analytics" {
  type    = bool
  default = true
}

variable "create_static_web_internal" {
  type    = bool
  default = true
}

variable "create_kubernetes" {
  type    = bool
  default = true
}

variable "create_application_gateway" {
  type    = bool
  default = true
}

#creating vnet
variable "vnet_name" {
}

variable "resource_group_name" {
  type        = string
  default     = "ODL-azure-1178542"
  description = "Resource group name in your Azure subscription."
}

variable "resource_group_location" {
  type        = string
  default     = "westus"
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

variable "subnet_app_service_add_prefixes" {
  #default     = ["10.0.1.0/24"]
}

variable "subnet_app_service_endpoints" {
  #default     = ["Microsoft.Web"]
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

variable "cluster_name" {
  type = string
  description = "AKS name in Microsoft Azure"
}

variable "kubernetes_version" {
  type = string
  description = "Kubernetes version"
}

variable "kubernetes_node_pool_name" {
    #default = "agentpool"
}

variable "kubernetes_node_pool_count" {
    #default = 2
}

variable "kubernetes_node_pool_vm_size" {
    #default = "Standard_DS2_v2"
}

variable "kubernetes_node_pool_type" {
    #default = "VirtualMachineScaleSets"
}

variable "kubernetes_node_pool_enable_auto_scaling" {
    #default = true
}

variable "kubernetes_node_pool_min_count" {
    #default = 1
}

variable "kubernetes_node_pool_max_count" {
    #default = 2
}

variable "kubernetes_identity_type" {
    #default = "SystemAssigned"
}

variable "kubernetes_network_profile_load_balancer_sku" {
    #default = "standard"
}

variable "kubernetes_load_balancer_network_plugin" {
    #default = "kubenet"
}

variable "kubernetes_oms_agent_la_workspace_id" {
    #default = "terra-workspace-test"
}

variable "kubernetes_tags_environment" {
    #default = "env"
}

variable "kubernetes_tags_project" {
    #default = "dev"
}

variable "kubernetes_cluster_node_pool_name" {
    #default = "bulk"
}

variable "kubernetes_cluster_node_pool_count" {
    #default = 1
}

variable "kubernetes_cluster_node_pool_vm_size" {
    #default = "Standard_E2as_v5"
}

variable "kubernetes_cluster_node_pool_enable_auto_scaling" {
    #default = false
}

#application_gateway variables



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