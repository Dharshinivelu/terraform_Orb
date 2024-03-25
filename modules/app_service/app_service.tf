resource "azurerm_subnet" "subnets" {
  name                 = var.subnet_app_service_name
  resource_group_name  = var.resource_group_name
  virtual_network_name = var.vnet_name
  address_prefixes     = var.subnet_app_service_add_prefixes
  service_endpoints    = var.subnet_app_service_endpoints
}

resource "azurerm_service_plan" "asp-webapp-free" {
  name                = var.azurerm_service_plan_asp_webapp_name
  resource_group_name = var.resource_group_name
  location            = var.resource_group_location
  os_type              = var.app_service_os_type
  sku_name             = var.app_service_sku_name
}
resource "azurerm_app_service" "backend" {
  name                = var.app_service_name
  location            = var.resource_group_location
  resource_group_name = var.resource_group_name
  app_service_plan_id = azurerm_service_plan.asp-webapp-free.id
  app_settings = {
    DOCKER_REGISTRY_SERVER_URL          = var.app_settings_Docker_Registry_server_url
    DOCKER_REGISTRY_SERVER_USERNAME     = var.app_settings_Docker_Registry_server_username
    DOCKER_REGISTRY_SERVER_PASSWORD     = var.app_settings_Docker_Registry_server_password
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = var.app_settings_Docker_Registry_server_storage
    #WEBSITES_PORT                       = local.environmentvars["backend_port"]
  }

  site_config {
    always_on = var.app_service_site_config_always_on
    # define the images to used for you application
    linux_fx_version = "DOCKER|cooeyhub.azurecr.io/rest-services-stage:latest"
  }

  identity {
    type = var.app_service_identity_type
  }
}