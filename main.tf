data "azurerm_resource_group" "example" {
  name = var.resource_group_name
}
module "vnet" {
  count                       = var.create_vpc_components ? 1 : 0
  source                      = "/home/cloud/project/modules/vnet"  #../modules/vnet
  vnet_name                   = var.vnet_name
  location                    = var.location
  network_address_space       = var.network_address_space
  aks_subnet_address_prefix   = var.aks_subnet_address_prefix
  aks_subnet_address_name     = var.aks_subnet_address_name
  vnet_environment            = var.vnet_environment
  resource_group_name         = data.azurerm_resource_group.example.name
  resource_group_location     = data.azurerm_resource_group.example.location
}
module "DB-postgres" {
  count                                        = var.create_DB-postgres ? 1 : 0
  source                                       = "/home/cloud/project/modules/DB-postgres"
  resource_group_name                          = data.azurerm_resource_group.example.name
  resource_group_location                      = data.azurerm_resource_group.example.location
  subnet_postgres_name                         = var.subnet_postgres_name
  subnet_postgres_add_prefixes                 = var.subnet_postgres_add_prefixes
  subnet_postgres_service_endpoints            = var.subnet_postgres_service_endpoints
  postgresql_server_name                       = var.postgresql_server_name
  version1                                     = var.version1
  administrator_login                          = var.administrator_login
  administrator_login_password                 = var.administrator_login_password
  sku_name1                                    = var.sku_name1
  ssl_minimal_tls_version_enforce              = var.ssl_minimal_tls_version_enforce
  database_name                                = var.database_name
  charset                                      = var.charset
  collation                                    = var.collation
  postgres_vn_name                             = var.postgres_vn_name
  postgres_ignore_missing_vnet_service_endpoint= var.postgres_ignore_missing_vnet_service_endpoint
  vnet_name                                    = var.vnet_name

  depends_on = [module.vnet]
}

module "app_service" {
  count                                        = var.create_app_service ? 1 : 0
  source                                       = "/home/cloud/project/modules/app_service"
  resource_group_name                          = data.azurerm_resource_group.example.name
  resource_group_location                      = data.azurerm_resource_group.example.location
  vnet_name                                    = var.vnet_name
  subnet_app_service_name                      = var.subnet_app_service_name
  subnet_app_service_add_prefixes              = var.subnet_app_service_add_prefixes
  subnet_app_service_endpoints                 = var.subnet_app_service_endpoints
  azurerm_service_plan_asp_webapp_name         = var.azurerm_service_plan_asp_webapp_name
  app_service_os_type                          = var.app_service_os_type
  app_service_sku_name                         = var.app_service_sku_name
  app_service_name                             = var.app_service_name
  app_settings_Docker_Registry_server_url      = var.app_settings_Docker_Registry_server_url
  app_settings_Docker_Registry_server_username = var.app_settings_Docker_Registry_server_username
  app_settings_Docker_Registry_server_password = var.app_settings_Docker_Registry_server_password
  app_settings_Docker_Registry_server_storage  = var.app_settings_Docker_Registry_server_storage
  app_service_site_config_always_on            = var.app_service_site_config_always_on
  app_service_identity_type                    = var.app_service_identity_type

  depends_on = [module.vnet]
}

module "bolb_storage" {
  count                          = var.create_bolb_storage ? 1 : 0
  source                         = "/home/cloud/project/modules/blob_storage"
  resource_group_name            = data.azurerm_resource_group.example.name
  resource_group_location        = data.azurerm_resource_group.example.location
  storage_account_name           = var.storage_account_name
  account_tier                   = var.account_tier
  acc_replication_type           = var.acc_replication_type
  storage_container_name         = var.storage_container_name
  storage_container_access_type  = var.storage_container_access_type
  storage_blob_name              = var.storage_blob_name
  storage_blob_type              = var.storage_blob_type
 }

module "static_web" {
  count                                        = var.create_static_web ? 1 : 0
  source                                       = "/home/cloud/project/modules/static_web"
  resource_group_name                          = data.azurerm_resource_group.example.name
  resource_group_location                      = data.azurerm_resource_group.example.location
  static_web_storage_account_name              = var.static_web_storage_account_name
  static_web_account_tier                      = var.static_web_account_tier
  static_web_account_replication_type          = var.static_web_account_replication_type 
  static_website_index_document                = var.static_website_index_document
  storage_container_static_web_name            = var.storage_container_static_web_name
  static_web_container_access_type             = var.static_web_container_access_type
  static_web_storage_blob_name                 = var.static_web_storage_blob_name
  static_web_storage_blob_type                 = var.static_web_storage_blob_type
  static_web_storage_blob_source               = var.static_web_storage_blob_source
  cdn_profile_partner_portal_name              = var.cdn_profile_partner_portal_name
  cdn_profile_partner_portal_sku               = var.cdn_profile_partner_portal_sku
  cdn_endpoint_partner_portal_name             = var.cdn_endpoint_partner_portal_name
  cdn_endpoint_partner_portal_http_port        = var.cdn_endpoint_partner_portal_http_port
  cdn_endpoint_partner_portal_https_port       = var.cdn_endpoint_partner_portal_https_port
 
}

module "key_vault" {
  count                                   = var.create_key_vault ? 1 : 0
  source                                  = "/home/cloud/project/modules/key_vault"
  resource_group_name                     = data.azurerm_resource_group.example.name
  resource_group_location                 = data.azurerm_resource_group.example.location
  key_vault_name                          = var.key_vault_name
  enabled_for_deployment                  = var.enabled_for_deployment
  enabled_for_disk_encryption             = var.enabled_for_disk_encryption
  enabled_for_template_deployment         = var.enabled_for_template_deployment
  key_vault_tenant_id                     = var.key_vault_tenant_id
  key_vault_sku_name                      = var.key_vault_sku_name
  key_vault_object_id                     = var.key_vault_object_id

}

module "static_service_bus" {
  count                                        = var.create_static_service_bus ? 1 : 0
  source                                       = "/home/cloud/project/modules/service_bus"
  resource_group_name                          = data.azurerm_resource_group.example.name
  resource_group_location                      = data.azurerm_resource_group.example.location
  servicebus_namespace_name                    = var.servicebus_namespace_name
  servicebus_namespace_sku                     = var.servicebus_namespace_sku
  servicebus_tags_source                       = var.servicebus_tags_source
  servicebus_topic_name                        = var.servicebus_topic_name
  servicebus_topic_enable_partioning           = var.servicebus_topic_enable_partioning
  servicebus_queue_name                        = var.servicebus_queue_name
  servicebus_queue_enable_partioning           = var.servicebus_queue_enable_partioning
}

module "log_analytics" {
  count                                        = var.create_log_analytics ? 1 : 0
  source                                       = "/home/cloud/project/modules/log_analytics"
  resource_group_name                          = data.azurerm_resource_group.example.name
  resource_group_location                      = data.azurerm_resource_group.example.location
  log_analytics_workspace_name                 = var.log_analytics_workspace_name
  log_analytics_workspace_sku                  = var.log_analytics_workspace_sku
  log_analytics_retention_in_days              = var.log_analytics_retention_in_days
  application_insights_name                    = var.application_insights_name
  application_insights_type                    = var.application_insights_type
}

module "static_web_internal" {
  count                                        = var.create_static_web_internal ? 1 : 0
  source                                       = "/home/cloud/project/modules/static_web_internal"
  resource_group_name                          = data.azurerm_resource_group.example.name
  resource_group_location                      = data.azurerm_resource_group.example.location
  static_web_internal_storage_account_name     = var.static_web_internal_storage_account_name
  static_web_internal_account_tier             = var.static_web_internal_account_tier
  static_web_internal_account_replication_type = var.static_web_internal_account_replication_type
  static_website_internal_index_document       = var.static_website_internal_index_document
  storage_container_internal_static_web_name   = var.storage_container_internal_static_web_name
  static_web_internal_container_access_type    = var.static_web_internal_container_access_type
  static_web_internal_storage_blob_name        = var.static_web_internal_storage_blob_name
  static_web_internal_storage_blob_type        = var.static_web_internal_storage_blob_type
  static_web_internal_storage_blob_source      = var.static_web_internal_storage_blob_source
  cdn_profile_internal_portal_name             = var.cdn_profile_internal_portal_name
  cdn_profile_internal_portal_sku              = var.cdn_profile_internal_portal_sku
  cdn_endpoint_internal_portal_name            = var.cdn_endpoint_internal_portal_name
  cdn_endpoint_internal_portal_http_port       = var.cdn_endpoint_internal_portal_http_port
  cdn_endpoint_internal_portal_https_port      = var.cdn_endpoint_internal_portal_https_port
}

module "kubernetes" {
  count                                        = var.create_kubernetes ? 1 : 0
  source                                       = "/home/cloud/project/modules/kubernetes"
  resource_group_name                          = data.azurerm_resource_group.example.name
  resource_group_location                      = data.azurerm_resource_group.example.location
  cluster_name                                 = var.cluster_name
  kubernetes_version                           = var.kubernetes_version
  kubernetes_node_pool_name                    = var.kubernetes_node_pool_name
  kubernetes_node_pool_count                   = var.kubernetes_node_pool_count
  kubernetes_node_pool_vm_size                 = var.kubernetes_node_pool_vm_size
  kubernetes_node_pool_type                    = var.kubernetes_node_pool_type
  kubernetes_node_pool_enable_auto_scaling     = var.kubernetes_node_pool_enable_auto_scaling
  kubernetes_node_pool_min_count               = var.kubernetes_node_pool_min_count
  kubernetes_node_pool_max_count               = var.kubernetes_node_pool_max_count
  kubernetes_identity_type                     = var.kubernetes_identity_type
  kubernetes_network_profile_load_balancer_sku = var.kubernetes_network_profile_load_balancer_sku
  kubernetes_load_balancer_network_plugin      = var.kubernetes_load_balancer_network_plugin
  kubernetes_oms_agent_la_workspace_id         = var.kubernetes_oms_agent_la_workspace_id
  kubernetes_tags_environment                  = var.kubernetes_tags_environment
  kubernetes_tags_project                      = var.kubernetes_tags_project
  kubernetes_cluster_node_pool_name            = var.kubernetes_cluster_node_pool_name
  kubernetes_cluster_node_pool_count           = var.kubernetes_cluster_node_pool_count
  kubernetes_cluster_node_pool_vm_size         = var.kubernetes_cluster_node_pool_vm_size
  kubernetes_cluster_node_pool_enable_auto_scaling = var.kubernetes_cluster_node_pool_enable_auto_scaling
}

module "application_gateway" {
  count                           = var.create_application_gateway ? 1 : 0
  source                          = "/home/cloud/project/modules/application_gateway"
  resource_group_name             = data.azurerm_resource_group.example.name
  resource_group_location         = data.azurerm_resource_group.example.location
  vnet_name                       = var.vnet_name
  public_ip_name                  = var.public_ip_name
  allocation_method               = var.allocation_method
  app_gateway_name                = var.app_gateway_name
  app_sku_name                    = var.app_sku_name
  app_sku_tier                    = var.app_sku_tier
  app_capacity                    = var.app_capacity
  ip_config_name                  = var.ip_config_name
  frontend_port                   = var.frontend_port
  http_listener_protocol          = var.http_listener_protocol
  request_routing_rule_priority   = var.request_routing_rule_priority
  request_routing_rule_type       = var.request_routing_rule_type
  cookie_based_affinity           = var.cookie_based_affinity
  backend_http_setting_port       = var.backend_http_setting_port
  backend_http_setting_protocol   = var.backend_http_setting_protocol
  aks_subnet_address_name         = var.aks_subnet_address_name
  #aks_subnet_address_prefix       = var.aks_subnet_address_prefix

  depends_on = [module.vnet]
}