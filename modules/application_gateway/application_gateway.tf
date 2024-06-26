data "azurerm_subnet" "existing_subnet" {
  name                 = var.aks_subnet_address_name
  resource_group_name  = var.resource_group_name
  virtual_network_name = var.vnet_name
}

resource "azurerm_public_ip" "example" {
  name                = var.public_ip_name
  resource_group_name = var.resource_group_name
  location            = var.resource_group_location
  allocation_method   = var.allocation_method
  sku = "Standard"
}

# since these variables are re-used - a locals block makes this more maintainable
locals {
  backend_address_pool_name      = "${var.vnet_name}-beap"
  frontend_port_name             = "${var.vnet_name}-feport"
  frontend_ip_configuration_name = "${var.vnet_name}-feip"
  http_setting_name              = "${var.vnet_name}-be-htst"
  listener_name                  = "${var.vnet_name}-httplstn"
  request_routing_rule_name      = "${var.vnet_name}-rqrt"
  redirect_configuration_name    = "${var.vnet_name}-rdrcfg"
}

    resource "azurerm_application_gateway" "example" {
      name                = var.app_gateway_name
      resource_group_name = var.resource_group_name
      location            = var.resource_group_location
      sku {
            name     = var.app_sku_name
            tier     = var.app_sku_tier
            capacity = var.app_capacity
      }

      gateway_ip_configuration {
            name      = var.ip_config_name
            subnet_id = data.azurerm_subnet.existing_subnet.id
      }

      frontend_port {
            name = local.frontend_port_name
            port = var.frontend_port
      }

      frontend_ip_configuration {
            name                 = local.frontend_ip_configuration_name
            public_ip_address_id = azurerm_public_ip.example.id
            #subnet_id            = azurerm_subnet.aks_subnet.id
      }

      http_listener {
            name                           = local.listener_name
            frontend_ip_configuration_name = local.frontend_ip_configuration_name
            frontend_port_name             = local.frontend_port_name
            protocol                       = var.http_listener_protocol
      }

      request_routing_rule {
            name                       = local.request_routing_rule_name
            priority                   = var.request_routing_rule_priority
            rule_type                  = var.request_routing_rule_type
            http_listener_name         = local.listener_name
            backend_address_pool_name  = local.backend_address_pool_name
            backend_http_settings_name = local.http_setting_name
      }

      backend_address_pool {
            name = local.backend_address_pool_name
      }

      backend_http_settings {
            name                  = local.http_setting_name
            cookie_based_affinity = var.cookie_based_affinity
            port                  = var.backend_http_setting_port
            protocol              = var.backend_http_setting_protocol
      }

     
    }